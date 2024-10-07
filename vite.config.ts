import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";

export default defineConfig({
  plugins: [react(), liveReload("./src/**/*.{js,ts,jsx,tsx}")],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
});
