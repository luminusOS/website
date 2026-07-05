// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const base = process.env.SITE_BASE ?? '';
const site = process.env.SITE_URL ?? 'https://wiki.luminusos.org';

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'LuminusOS Wiki',
      logo: { src: './src/assets/brand.svg' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
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
            { slug: 'guides/aurora-shell' },
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
