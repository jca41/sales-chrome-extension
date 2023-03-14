import { BASE_URL_MAP, type Environment, type Proposition } from "../constants";

export const setCookie = async (
  name: string,
  value: string,
  proposition: Proposition,
  environment: Environment
) => {
  console.log(
    "🚀 ~ file: cookies.mjs:4 ~ setCookie ~ name, value, proposition, environment",
    name,
    value,
    proposition,
    environment
  );

  return chrome.cookies.set({
    name,
    url: BASE_URL_MAP[proposition][environment],
    value,
  });
};

export const getCookie = async (
  name: string,
  proposition: Proposition,
  environment: Environment
) => {
  return chrome.cookies.get({
    name,
    url: BASE_URL_MAP[proposition][environment],
  });
};

export const removeCookie = async (
  name: string,
  proposition: Proposition,
  environment: Environment
) => {
  return chrome.cookies.remove({
    name,
    url: BASE_URL_MAP[proposition][environment],
  });
};
