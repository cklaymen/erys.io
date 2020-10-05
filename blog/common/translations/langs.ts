export const lang = {
  pl: "pl",
} as const;

const langs = Object.values(lang);

export type Lang = typeof lang[keyof typeof lang];

export default langs;
