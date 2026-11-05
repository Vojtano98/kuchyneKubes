// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production (Netlify) builds at the domain root. The GitHub Pages preview for the
// client sets SITE_URL + BASE_PATH in .github/workflows/pages.yml.
export default defineConfig({
  site: process.env.SITE_URL || 'https://kuchynekubes.cz',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/dekujeme') })],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
