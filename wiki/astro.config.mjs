// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const base = process.env.SITE_BASE ?? '';
const site = process.env.SITE_URL ?? 'https://wiki.luminusos.org';
const ignoredWatchPaths = [
  '**/.astro/**',
  '**/.git/**',
  '**/.wrangler/**',
  '**/aurora/dist/**',
  '**/blog/**',
  '**/dist/**',
  '**/dist-aurora/**',
  '**/node_modules/**',
];

export default defineConfig({
  site,
  base,
  redirects: {
    '/guides/aurora-shell': `${base}/aurora-shell/overview`,
    '/pt-br/guides/aurora-shell': `${base}/pt-br/aurora-shell/overview`,
  },
  vite: {
    server: {
      watch: {
        ignored: ignoredWatchPaths,
        usePolling: true,
        interval: 300,
      },
    },
  },
  integrations: [
    starlight({
      title: 'Wiki',
      logo: { src: './src/assets/brand.svg' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      components: {
        // Local override: enables Pagefind search in `astro dev` (upstream
        // hard-disables it). Needs an index at <base>/pagefind/ — dev.mjs
        // generates one into wiki/public/pagefind/ on startup.
        Search: './src/components/Search.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/luminusOS' },
      ],
      editLink: {
        baseUrl: 'https://github.com/luminusOS/website/edit/main/wiki/',
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        'pt-br': { label: 'Português (BR)', lang: 'pt-BR' },
      },
      sidebar: [
        {
          label: 'Start here',
          translations: { 'pt-BR': 'Comece aqui' },
          items: [
            { slug: 'guides/installation' },
            { slug: 'guides/updates' },
          ],
        },
        {
          label: 'Everyday use',
          translations: { 'pt-BR': 'Dia a dia' },
          items: [
            { slug: 'guides/apps' },
          ],
        },
        {
          label: 'Aurora Shell',
          translations: { 'pt-BR': 'Aurora Shell' },
          items: [
            { slug: 'aurora-shell/overview' },
            { slug: 'aurora-shell/settings' },
          ],
        },
        {
          label: 'Sirius',
          translations: { 'pt-BR': 'Sirius' },
          items: [
            { slug: 'sirius/overview' },
            { slug: 'sirius/diagnostics' },
            { slug: 'sirius/storage' },
            { slug: 'sirius/adapting' },
            { slug: 'sirius/troubleshooting' },
          ],
        },
        {
          label: 'Project',
          translations: { 'pt-BR': 'Projeto' },
          items: [
            { slug: 'guides/contributing' },
            { slug: 'guides/editions' },
          ],
        },
      ],
    }),
  ],
});
