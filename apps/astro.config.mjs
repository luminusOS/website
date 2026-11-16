// @ts-check
import { defineConfig } from 'astro/config';
import { watchConfig } from '../scripts/astro-watch.mjs';

const base = process.env.SITE_BASE ?? '';
const site = process.env.SITE_URL ?? 'https://apps.luminusos.org';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    server: {
      watch: watchConfig('**/blog/**', '**/wiki/**'),
    },
  },
});
