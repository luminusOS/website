import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/.astro/**',
      '**/.wrangler/**',
      '**/dist/**',
      '**/dist-*/**',
      '**/node_modules/**',
      'wiki/public/pagefind/**',
      // This file mirrors Starlight upstream and should stay easy to diff on upgrades.
      'wiki/src/components/Search.astro',
      'worker-configuration.d.ts',
    ],
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  ...astro.configs['flat/jsx-a11y-recommended'],
  {
    rules: {
      // Restores list semantics in Safari when CSS removes list markers.
      'astro/jsx-a11y/no-redundant-roles': 'off',
    },
  },
];
