import i18next from 'i18next';
import resources from "./resoueces.json";
import { initReactI18next, useTranslation } from 'react-i18next';
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "uz",
    interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
  });
  export default i18next