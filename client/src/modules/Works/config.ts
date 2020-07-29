import { TranslationKey } from "src/modules/Translations/Translation";
import { IconType } from "src/modules/shared/UI/Icon/config";
import invoiceVideo from "src/assets/videos/invoices_converter.mov";

export interface WorkConfig {
  videoURL: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  technologies: IconType[];
}

const worksConfig: WorkConfig[] = [
  {
    videoURL: invoiceVideo,
    titleKey: TranslationKey.INVOICE_CONVERTER_TITLE,
    descriptionKey: TranslationKey.INVOICE_CONVERTER_DESCRIPTION,
    technologies: ["React"],
  },
];

export default worksConfig;
