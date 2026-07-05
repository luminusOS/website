# LuminusOS Website

The official website for [LuminusOS](https://luminusos.org), an immutable Linux
distribution built on Fedora bootc, plus the [Aurora Shell](https://aurora.luminusos.org) subdomain variant, and
the [wiki](https://wiki.luminusos.org) and [blog](https://blog.luminusos.org)
as sub-projects in `wiki/` and `blog/`.

Built with [Astro](https://astro.build). Fully static, no client framework;
the only JavaScript on the page handles the theme toggle, the language menu
and fetching the latest release tag from the GitHub API.

## Pages & languages

Every page exists in English (default) and Brazilian Portuguese:

| Route | Content |
| --- | --- |
| `/` and `/pt-br/` | LuminusOS home: hero, pillars, how it works, editions, download, support |
| `/aurora/` and `/pt-br/aurora/` | Aurora Shell subpage |

All copy lives in a single typed dictionary: `src/i18n/translations.ts`.
Adding a language = append it to the `languages` array (name + flag, the
header menu picks it up automatically), add its entry to `translations`, and
create the page folders for its prefix.

The site has light and dark themes: dark by default, following the system
preference, with a header toggle persisted in `localStorage`.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Downloads

Download buttons point at
`https://github.com/luminusOS/images/releases/latest`, which always resolves to
the newest release, so no website change is needed when a release ships.
Editions that don't exist yet (Play, Mobile, Tablet, Cast) render as locked
"Coming soon" cards in `src/components/HomePage.astro`; flip one to available
by editing the `available` check when its first release lands.

## The Aurora Shell subdomain

`aurora.luminusos.org` is a second build of this same project:

```sh
npm run build:aurora   # static output in dist-aurora/
```

With `SITE_VARIANT=aurora` the Aurora Shell page becomes the site root
(`/` and `/pt-br/`), cross-links point back to `https://luminusos.org`, and
`dist-aurora/CNAME` is written as `aurora.luminusos.org`.

`deploy-aurora.yml` pushes that build to the `gh-pages` branch of
`luminusOS/aurora-shell` (needs the `AURORA_DEPLOY_TOKEN` secret: a
fine-grained PAT with Contents: write there), since GitHub Pages serves one
site per repository.

## Wiki & Blog (sub-projects)

The wiki and the blog live in this repository as independent Astro projects:

| Site | Folder | Stack |
| --- | --- | --- |
| [wiki.luminusos.org](https://wiki.luminusos.org) | `wiki/` | Astro Starlight (sidebar, search, i18n) |
| [blog.luminusos.org](https://blog.luminusos.org) | `blog/` | Astro content collections, English + Google Translate menu |

Each has its own `package.json` (`cd wiki && npm install && npm run dev`).
GitHub Pages serves one site per repository, so `deploy-wiki.yml` and
`deploy-blog.yml` build the sub-project and push its `dist/` to the
`gh-pages` branch of `luminusOS/wiki` / `luminusOS/blog` (Pages-only repos).
Setup per subdomain: create the target repo, enable Pages on `gh-pages`,
point DNS `<sub>.luminusos.org` → `luminusos.github.io`, and add the
`WIKI_DEPLOY_TOKEN` / `BLOG_DEPLOY_TOKEN` secret here (fine-grained PAT
with Contents: write on the target repo).

## License

MIT — see [LICENSE](LICENSE).
