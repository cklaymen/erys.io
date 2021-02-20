import { TranslationKey } from "src/modules/Translations/Translation";
import { IconType } from "src/modules/shared/UI/Icon/config";
import invoiceConverterVideo from "src/assets/videos/invoices_converter.mov";
import invoiceConverterPoster from "src/assets/images/invoices_converter.jpg";
import educationGamePoster from "src/assets/images/education_game.jpg";

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
    technologies: ["React"],
  },
  {
    videoSrc: "http://localhost:1337/uploads/gra_edukacyjna_a5bdc0a07a.mp4",
    videoPosterSrc: educationGamePoster,
    titleKey: TranslationKey.EDUCATION_GAME_TITLE,
    descriptionKey: TranslationKey.EDUCATION_GAME_DESCRIPTION,
    technologies: ["Nest", "React", "GraphQL"],
  },
];

export default worksConfig;
