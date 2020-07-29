import { TranslationKey } from "src/modules/Translations/Translation";

interface PathKeys {
  readonly home: TranslationKey[];
  readonly about: TranslationKey[];
  readonly works: TranslationKey[];
}

const pathKeys: PathKeys = {
  home: [],
  about: [TranslationKey.ABOUT_PATH],
  works: [TranslationKey.WORKS_PATH],
};

export type Location = keyof PathKeys;

export default pathKeys;
