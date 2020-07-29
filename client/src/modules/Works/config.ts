import { TranslationKey } from "src/modules/Translations/Translation";
import { IconType } from "src/modules/shared/UI/Icon/config";
import invoiceConverterVideo from "src/assets/videos/invoices_converter.mov";
import invoiceConverterPoster from "src/assets/images/invoices_converter.jpg";

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
];

export default worksConfig;
