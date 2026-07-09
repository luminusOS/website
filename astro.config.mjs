// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// SITE_VARIANT=aurora builds the standalone aurora.luminusos.org variant:
// the Aurora Shell page becomes the site root and links back to the main
// site. The wiki and blog are separate repositories.
const variant = process.env.SITE_VARIANT ?? '';
const sites = {
  '': 'https://luminusos.org',
  aurora: 'https://aurora.luminusos.org',
};
const outDirs = {
  '': './dist',
  aurora: './aurora/dist',
};
const ignoredWatchPaths = [
  '**/.astro/**',
  '**/.git/**',
  '**/.wrangler/**',
  '**/aurora/dist/**',
  '**/blog/**',
  '**/dist/**',
  '**/dist-aurora/**',
  '**/node_modules/**',
  '**/wiki/**',
];

if (!(variant in sites)) {
  throw new Error(`Unknown SITE_VARIANT "${variant}" (expected aurora)`);
}

export default defineConfig({
  site: sites[/** @type {keyof typeof sites} */ (variant)],
  outDir: outDirs[/** @type {keyof typeof outDirs} */ (variant)],
  trailingSlash: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: cloudflare(),
  vite: {
    server: {
      watch: {
        ignored: ignoredWatchPaths,
        usePolling: true,
        interval: 300,
      },
    },
  },
});
