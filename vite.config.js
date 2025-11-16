import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", 
  plugins: [react()],
  server: {
    host: true, // Permite o acesso na rede local
    port: 3000, // Porta do servidor (pode ser alterada se necessário)
  },
});
