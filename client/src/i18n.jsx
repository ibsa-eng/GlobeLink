// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      selectLanguage: "Select Language",
      home: "Home",
      buy: "Buy",
      rent: "Rent",
      media: "Media",
      offPlan: "Off Plan",
    },
  },
  am: {
    translation: {
      selectLanguage: "ቋንቋ ምርጫ",
      HOME: "መነሻ",
      buy: "ግዢ",
      rent: "ኪራይ",
      media: "ሚዲያ",
      offPlan: "ከእትም በላይ",
      ALL: "ኪራይ",
    },
  },
  // Add more languages here
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
