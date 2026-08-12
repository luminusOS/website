// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';

const base = process.env.SITE_BASE ?? '';
const site = process.env.SITE_URL ?? 'https://blog.luminusos.org';

process.env.BLOG_PUBLIC_DIR = fileURLToPath(new URL('./public/', import.meta.url));

const fontsDir = fileURLToPath(new URL('./fonts/', import.meta.url));
const fontCacheDir = fileURLToPath(new URL('./.astro/fontcache/', import.meta.url));
const fontConfigPath = fileURLToPath(new URL('./.astro/fonts.conf', import.meta.url));
mkdirSync(fontCacheDir, { recursive: true });
writeFileSync(
  fontConfigPath,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${fontsDir}</dir>
  <cachedir>${fontCacheDir}</cachedir>
  <include ignore_missing="yes">/etc/fonts</include>
</fontconfig>
`,
);
process.env.FONTCONFIG_FILE = fontConfigPath;
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
