import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "../public/locales/en.json"; // Corrigir o caminho
import Pt from "../public/locales/pt.json"; // Corrigir o caminho

i18n
  .use(initReactI18next)
  .init({
    lng: "en", // Definir linguagem padrão
    fallbackLng: "en", // Definir um idioma de fallback
    resources: { // Usar 'resources' em vez de 'resource'
      en: {
        translation: En,
      },
      pt: {
        translation: Pt,
      },
    },
    interpolation: {
      escapeValue: false, // Evitar a necessidade de escapar essas sequências em traduções
    },
  });

export default i18n;
