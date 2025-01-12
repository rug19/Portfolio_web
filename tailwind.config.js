/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  darkMode: "class", // Habilita o modo escuro por classe
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Certifique-se de que os caminhos estão corretos
  theme: {
    extend: {
      zIndex: {
        max: "2147483647", // Definindo o valor máximo possível
      },
      screens: {
        sm: "500px",
        sx: "500px",
      
      },
      colors: {
        primary: "#1c1c22",
        green: "#00e187",
        blackgray: "#2c2c2c",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"], // Define como padrão
      },
      scrollbar: {
        DEFAULT: {
          track: "bg-green",
          thumb: "bg-primary",
          hover: "bg-blackgray",
        },
      },
    },
  },
  plugins: [
    tailwindScrollbar, // Importa o plugin usando import
  ],
};
