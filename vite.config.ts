import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-ts-userCards/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
