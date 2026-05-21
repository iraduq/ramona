import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <--- ACESTA ESTE SECRETUL

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- ADĂUGAT AICI
  ],
});
