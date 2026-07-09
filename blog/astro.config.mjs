// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.SITE_BASE ?? '';
const site = process.env.SITE_URL ?? 'https://blog.luminusos.org';
const ignoredWatchPaths = [
  '**/.astro/**',
  '**/.git/**',
  '**/.wrangler/**',
  '**/aurora/dist/**',
  '**/dist/**',
  '**/dist-aurora/**',
  '**/node_modules/**',
  '**/wiki/**',
];

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
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
