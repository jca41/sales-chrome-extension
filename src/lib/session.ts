export type SessionKey = "NAV_TAB";
export type Session = {
  [K in SessionKey]?: string;
};

const SESSION_KEYS: SessionKey[] = ["NAV_TAB"];

export async function getSessionItem(key: SessionKey) {
  return (await chrome.storage.session.get([key]))?.[key] as string | undefined;
}

export async function getSession() {
  return (await chrome.storage.session.get(SESSION_KEYS)) as Session;
}

export async function setSessionItem(key: SessionKey, value: string) {
  return chrome.storage.session.set({ [key]: value });
}
