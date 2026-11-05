// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kuchynekubes.cz',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/dekujeme') })],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
