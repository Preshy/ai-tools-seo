import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/ai-tools-seo',
  output: 'static',
  integrations: [sitemap()]
});
