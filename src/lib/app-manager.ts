import {
  PROPOSITIONS,
  BASE_URL_MAP,
  type Proposition,
  type Environment,
  type Territory,
} from "../constants";
import { setCookie, removeCookie, getCookie } from "./cookies";
import { getSession, type Session } from "./session";

type Tab = chrome.tabs.Tab;

class AppManager {
  baseUrl: string = "";
  proposition: Proposition = null;
  environment: Environment = null;
  territory: Territory = null;
  tab: Tab = null;
  session: Session = null;

  constructor(tab: Tab, session: Session) {
    this.tab = tab;
    this.session = session;

    for (const [prop, envs] of Object.entries(BASE_URL_MAP)) {
      for (const [env, base] of Object.entries(envs)) {
        if (this.tab?.url?.startsWith?.(base)) {
          this.baseUrl = base;
          this.proposition = prop as Proposition;
          this.environment = env as Environment;
        }
      }
    }

    if (this.proposition === PROPOSITIONS.SKYSHOWTIME) {
      this.territory = this.tab?.url
        .replace("https://www.stable-int.skyshowtime.com/", "")
        .slice(0, 2)
        .toUpperCase() as Territory;
    }
  }

  async execute<Args extends any[]>(
    fn: (...args: Args) => unknown,
    options: { frameId?: number; args?: Args } = {}
  ) {
    const frameIds = options.frameId ? [options.frameId] : undefined;

    const result = await chrome.scripting.executeScript({
      target: { tabId: this.tab.id, frameIds },
      func: fn,
      args: options.args,
    });

    return result[0].result;
  }

  async setCookie(
    name: string,
    value: string,
    prop: Proposition = this.proposition,
    env: Environment = this.environment
  ) {
    return setCookie(name, value, prop, env);
  }

  async removeCookie(
    name: string,
    prop: Proposition = this.proposition,
    env: Environment = this.environment
  ) {
    return removeCookie(name, prop, env);
  }

  async getCookie(
    name: string,
    prop: Proposition = this.proposition,
    env: Environment = this.environment
  ) {
    return getCookie(name, prop, env);
  }

  async clearCache(proposition: Proposition) {
    return chrome.browsingData.removeCache({
      origins: [BASE_URL_MAP[proposition][this.environment].slice(0, -1)],
    });
  }
  async refresh() {
    return chrome.tabs.reload();
  }
  async getLocalStorage(key: string) {
    return this.execute(
      (storageKey) => {
        return window.localStorage.getItem(storageKey);
      },
      { args: [key] }
    );
  }

  async setLocalStorage(key: string, value: string) {
    return this.execute(
      (storageKey, storageValue) => {
        return window.localStorage.setItem(storageKey, storageValue);
      },
      { args: [key, value] }
    );
  }
  async removeLocalStorage(key: string) {
    return this.execute(
      (storageKey) => {
        return window.localStorage.removeItem(storageKey);
      },
      { args: [key] }
    );
  }
  async getFrames() {
    return chrome.webNavigation.getAllFrames({ tabId: this.tab.id });
  }
}

let _appManager: AppManager = null;

export async function initAppManager() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const session = await getSession();

  _appManager = new AppManager(tab, session);
}

export function getAppManager() {
  return _appManager;
}
