import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" lets the built site work from any folder (cPanel public_html, a subfolder, GitHub Pages).
export default defineConfig({ base: "./", plugins: [react(), tailwindcss()] });
