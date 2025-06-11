import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import db from '@astrojs/db';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  site: "https://ricel123.vercel.app",

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'static',
  integrations: [db(), mdx(), sitemap()],
  adapter: vercel()
});