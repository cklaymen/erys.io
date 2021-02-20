import { TranslationKey } from "src/modules/Translations/Translation";
import { IconType } from "src/modules/shared/UI/Icon/config";
import invoiceConverterVideo from "src/assets/videos/invoices_converter.mov";
import invoiceConverterPoster from "src/assets/images/invoices_converter.jpg";
import languageGameBatbPoster from "src/assets/images/language_game_batb.jpg";
import { API_URL } from "src/const";

const languageGameBatbVideo =
  API_URL + "/uploads/language_game_batb_c17b00507d.mp4";

export interface WorkConfig {
  videoSrc: string;
  videoPosterSrc: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  technologies: IconType[];
}

const worksConfig: WorkConfig[] = [
  {
    videoSrc: invoiceConverterVideo,
    videoPosterSrc: invoiceConverterPoster,
    titleKey: TranslationKey.INVOICE_CONVERTER_TITLE,
    descriptionKey: TranslationKey.INVOICE_CONVERTER_DESCRIPTION,
    technologies: ["TypeScript", "React"],
  },
  {
    videoSrc: languageGameBatbVideo,
    videoPosterSrc: languageGameBatbPoster,
    titleKey: TranslationKey.EDUCATION_GAME_TITLE,
    descriptionKey: TranslationKey.EDUCATION_GAME_DESCRIPTION,
    technologies: ["TypeScript", "React", "Nest", "GraphQL"],
  },
];

export default worksConfig;
