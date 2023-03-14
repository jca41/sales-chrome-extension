import { getRewriteRulesForLocalhost } from "../config/rewrite-rules";

const serviceCalls = {};

chrome.webRequest.onHeadersReceived.addListener(
  async (details) => {
    const { documentId, tabId, url, statusCode, responseHeaders, method } =
      details;

    const tabData = (serviceCalls[tabId] ?? []).filter(
      (serviceCall) => serviceCall.documentId === documentId
    );
    const requestId = (
      responseHeaders.find((header) => header.name === "x-skyint-requestid") ??
      {}
    ).value;

    const urlObj = new URL(url);
    const path = urlObj.pathname + urlObj.search;
    const prefix = urlObj.hostname.split(".")[0];

    const dataToInsert = {
      documentId,
      prefix,
      url,
      method,
      statusCode,
      requestId,
      path: path.length > 40 ? path.slice(0, 40) + "…" : path,
    };

    tabData.unshift(dataToInsert);

    serviceCalls[tabId] = tabData.slice(0, 20);

    await chrome.storage.session.set({ serviceCalls });
  },
  {
    urls: [
      "*://sas.stable-int.peacocktv.com/*",
      "*://*.id.stable-int.peacocktv.com/*",
      "*://ovp.stable-int.peacocktv.com/*",
    ],
  },
  ["responseHeaders"]
);

chrome.tabs.onRemoved.addListener((tabId) => delete serviceCalls[tabId]);

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  const tabUrl = new URL(details.url);

  const validHostnames = ["local.peacocktv.com", "local.skyshowtime.com"];
  if (!validHostnames.includes(tabUrl.hostname)) return;

  const activeRules = await chrome.declarativeNetRequest.getSessionRules();
  const isRewriteEnabled =
    (await chrome.storage.local.get(["rewriteLocal"]))?.rewriteLocal ?? false;
  const ruleIds = activeRules.map((rule) => rule.id);

  if (!isRewriteEnabled && activeRules.length > 0) {
    return await chrome.declarativeNetRequest.updateSessionRules({
      removeRuleIds: ruleIds,
    });
  } else if (!isRewriteEnabled) {
    return;
  }

  const validPropositions = ["peacocktv", "skyshowtime"];
  const proposition = validPropositions.find((proposition) => {
    return tabUrl.host.includes(proposition);
  });

  if (!proposition) return;

  const updatedRules = getRewriteRulesForLocalhost(
    `https://${tabUrl.host}`,
    proposition
  );

  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: ruleIds,
    addRules: updatedRules,
  });
});
