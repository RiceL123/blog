// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://ricel123.vercel.app",
  integrations: [mdx(), sitemap(), tailwind(), db()],
  output: "static",
  adapter: vercel(),
});
