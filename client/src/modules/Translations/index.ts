import i18next from "i18next";
import { initReactI18next } from "react-i18next";

function initTranslations() {
  return i18next.use(initReactI18next).init({
    resources: {
      pl: {
        translation: {},
      },
    },
    lng: "pl",
    fallbackLng: "pl",

    interpolation: {
      escapeValue: false,
    },
  });
}

export default initTranslations;
