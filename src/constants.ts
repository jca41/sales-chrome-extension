export const PROPOSITIONS = {
  SKYSHOWTIME: "SKYSHOWTIME",
  NBCU: "NBCUOTT",
} as const;

export type Proposition = typeof PROPOSITIONS[keyof typeof PROPOSITIONS];

export const TERRITORIES = {
  [PROPOSITIONS.NBCU]: {
    US: "US",
  } as const,
  [PROPOSITIONS.SKYSHOWTIME]: {
    AD: "AD",
    AL: "AL",
    BA: "BA",
    BG: "BG",
    CZ: "CZ",
    DK: "DK",
    ES: "ES",
    FI: "FI",
    HR: "HR",
    HU: "HU",
    ME: "ME",
    MK: "MK",
    NL: "NL",
    NO: "NO",
    PL: "PL",
    PT: "PT",
    RO: "RO",
    RS: "RS",
    SE: "SE",
    SI: "SI",
    SK: "SK",
    XK: "XK",
    XX: "XX",
  } as const,
} satisfies Record<Proposition, Record<string, string>>;

type TerritoriesMap = typeof TERRITORIES;

export type Territory = TerritoriesMap[keyof TerritoriesMap] extends Record<
  string,
  infer U
>
  ? U
  : never;

export const DEFAULT_TERRITORIES = {
  [PROPOSITIONS.NBCU]: TERRITORIES[PROPOSITIONS.NBCU].US,
  [PROPOSITIONS.SKYSHOWTIME]: TERRITORIES[PROPOSITIONS.SKYSHOWTIME].NL,
} satisfies {
  [P in Proposition]: TerritoriesMap[P][keyof TerritoriesMap[P]];
};

export const ENVIRONMENTS = {
  LOCAL: "LOCAL",
  STABLE_INT: "STABLE_INT",
  PRODUCTION: "PRODUCTION",
} as const;

export type Environment = typeof ENVIRONMENTS[keyof typeof ENVIRONMENTS];

export const ENVIRONMENTS_LIST = Object.values(ENVIRONMENTS) as Environment[];

export const BASE_URL_MAP = {
  [PROPOSITIONS.NBCU]: {
    [ENVIRONMENTS.LOCAL]: "https://local.peacocktv.com:9999/",
    [ENVIRONMENTS.STABLE_INT]: "https://www.stable-int.peacocktv.com/",
    [ENVIRONMENTS.PRODUCTION]: "https://www.peacocktv.com/",
  },
  [PROPOSITIONS.SKYSHOWTIME]: {
    [ENVIRONMENTS.LOCAL]: "https://local.skyshowtime.com:9999/",
    [ENVIRONMENTS.STABLE_INT]: "https://www.stable-int.skyshowtime.com/",
    [ENVIRONMENTS.PRODUCTION]: "https://www.skyshowtime.com/",
  },
} satisfies Record<Proposition, Record<Environment, string>>;
