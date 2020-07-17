import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import pl from "./pl";

function initTranslations() {
  return i18next.use(initReactI18next).init({
    resources: {
      pl: {
        translation: pl,
      },
    },
    lng: "pl",
    fallbackLng: "pl",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });
}

export default initTranslations;
