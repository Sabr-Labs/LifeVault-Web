import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://lifevault.sabrlabs.co.uk",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
