/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        green: "#00e187",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"], // Define como padrão
      },
    },
  },
  plugins: [],
};
