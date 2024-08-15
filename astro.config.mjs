import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://ru4s93m6.github.io/Tech-People/",
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: netlify(),
});
