import { TranslationKey } from "src/modules/Translations/Translation";

interface PathKeys {
  readonly home: TranslationKey[];
  readonly about: TranslationKey[];
  readonly services: TranslationKey[];
  readonly works: TranslationKey[];
  readonly cookies: TranslationKey[];
}

const pathKeys: PathKeys = {
  home: [],
  about: [TranslationKey.ABOUT_PATH],
  services: [TranslationKey.SERVICES_PATH],
  works: [TranslationKey.WORKS_PATH],
  cookies: [TranslationKey.COOKIES_POLICY_PATH],
};

export type Location = keyof PathKeys;

export default pathKeys;
