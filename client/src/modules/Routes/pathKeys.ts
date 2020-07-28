import { TranslationKey } from "src/modules/Translations/Translation";

interface PathKeys {
  readonly home: TranslationKey[];
  readonly about: TranslationKey[];
}

const pathKeys: PathKeys = {
  home: [],
  about: [TranslationKey.ABOUT_PATH],
};

export type Location = keyof PathKeys;

export default pathKeys;
