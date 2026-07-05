# LuminusOS Wiki

The documentation site at [wiki.luminusos.org](https://wiki.luminusos.org),
built with [Astro Starlight](https://starlight.astro.build): sidebar
navigation, full-text search, light/dark themes and i18n out of the box.

## Writing pages

Pages are Markdown files in `src/content/docs/`:

```
src/content/docs/
  index.mdx              # English home (splash page)
  guides/*.md            # English guides
  pt-br/index.mdx        # Portuguese home
  pt-br/guides/*.md      # Portuguese guides (same filenames as English)
```

English is the default locale; Brazilian Portuguese lives under `pt-br/` with
the same file names. A page missing in Portuguese automatically falls back to
the English version.

The sidebar is defined in `astro.config.mjs` (`sidebar:` with per-locale
labels). Add the new page's slug there when you create one.

## Development

```sh
npm install
npm run dev           # from the repository root, served at /wiki
npm run build:wiki    # static output in wiki/dist/
```

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
One-time setup: enable Pages (Source: GitHub Actions) on this repo and add a
DNS `CNAME` record `wiki.luminusos.org` → `luminusos.github.io`. The `CNAME`
file ships in `public/`.

## License

MIT
