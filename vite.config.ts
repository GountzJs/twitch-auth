import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: resolve(__dirname, "./src/assets"),
      },
      {
        find: "@",
        replacement: resolve(__dirname, "./src/app"),
      },
    ],
  },
});
