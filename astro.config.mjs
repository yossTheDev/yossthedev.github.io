import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://yossthedev.github.io",
  integrations: [
    mdx(),
    prefetch(),
    sitemap(),
    partytown(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      cacheDir: "./.cache/image",
      logLevel: "debug",
    }),
  ],
});
