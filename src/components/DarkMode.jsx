import { useState, useEffect } from "react";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Aplica ou remove a classe `dark` no elemento <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre claro e escuro
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-gray-800 text-white rounded-md dark:bg-white dark:text-black transition-colors"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
