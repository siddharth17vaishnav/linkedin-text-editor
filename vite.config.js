import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src", // Set 'src' as the root for Vite
  plugins: [react()],
});
