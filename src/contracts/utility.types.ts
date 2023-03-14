export type IdentityObject<T extends Record<string, string>> = {
  [K in keyof T]: T[K];
};
