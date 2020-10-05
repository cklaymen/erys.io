import pathVariables, { PathVariable } from "src/modules/Routes/pathVariables";
import { TranslationKey } from "src/modules/Translations/Translation";

interface PathKeys {
  readonly home: TranslationKey[];
  readonly about: TranslationKey[];
  readonly services: TranslationKey[];
  readonly works: TranslationKey[];
  readonly cookies: TranslationKey[];
  readonly blog: [TranslationKey];
  readonly blogArticle: [TranslationKey, PathVariable];
}

const pathKeys: PathKeys = {
  home: [],
  about: [TranslationKey.ABOUT_PATH],
  services: [TranslationKey.SERVICES_PATH],
  works: [TranslationKey.WORKS_PATH],
  cookies: [TranslationKey.COOKIES_POLICY_PATH],
  blog: [TranslationKey.BLOG_PATH],
  blogArticle: [TranslationKey.BLOG_PATH, pathVariables.slug],
};

export type Location = keyof PathKeys;

export default pathKeys;
