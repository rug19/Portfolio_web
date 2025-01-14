import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  // Recupera o idioma salvo no localStorage ao carregar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  // Alterna o idioma
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <button onClick={toggleLanguage} aria-label="Toggle Language" className="text-3xl lg:text-2xl" >
      {language === "en" ? "🇺🇸" : "🇧🇷"} 
    </button>
  );
}
