// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.SITE_BASE ?? '';
const site = process.env.SITE_URL ?? 'https://blog.luminusos.org';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
