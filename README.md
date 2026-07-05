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
| `/blog/` | Blog copy embedded in the main website build |
| `/wiki/` | Wiki copy embedded in the main website build |

All copy lives in a single typed dictionary: `src/i18n/translations.ts`.
Adding a language = append it to the `languages` array (name + flag, the
header menu picks it up automatically), add its entry to `translations`, and
create the page folders for its prefix.

The site has light and dark themes: dark by default, following the system
preference, with a header toggle persisted in `localStorage`.

## Development

```sh
npm install
npm run dev      # http://localhost:4321, including /aurora, /blog and /wiki
npm run build    # static output in dist/, including /blog and /wiki
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
npm run deploy:aurora  # deploy dist-aurora to Cloudflare Pages
```

With `SITE_VARIANT=aurora` the Aurora Shell page becomes the site root
(`/` and `/pt-br/`), cross-links point back to `https://luminusos.org`, and
`dist-aurora/CNAME` is written as `aurora.luminusos.org`.

## Wiki & Blog (sub-projects)

The wiki and the blog live in this repository as Astro roots that share the
top-level `package.json` and lockfile:

| Site | Folder | Stack |
| --- | --- | --- |
| [wiki.luminusos.org](https://wiki.luminusos.org) | `wiki/` | Astro Starlight (sidebar, search, i18n) |
| [blog.luminusos.org](https://blog.luminusos.org) | `blog/` | Astro content collections, English + Google Translate menu |

The root `npm run build` builds both projects with `/blog` and `/wiki` bases
and copies them into the main website `dist/`. Standalone Cloudflare Pages
builds use the subdomain versions:

```sh
npm run build:blog
npm run deploy:blog
npm run build:wiki
npm run deploy:wiki
```

## License

MIT — see [LICENSE](LICENSE).
