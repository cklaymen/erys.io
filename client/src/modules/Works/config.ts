import { TranslationKey } from "src/modules/Translations/Translation";
import { IconType } from "src/modules/shared/UI/Icon/config";

interface WorkConfig {
  videoURL: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  technologies: IconType[];
}

const worksConfig: WorkConfig[] = [];
