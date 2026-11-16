# LuminusOS Website

The official website for [LuminusOS](https://luminusos.org), an immutable Linux
distribution built on Fedora bootc, plus the [Aurora Shell](https://aurora.luminusos.org) subdomain variant, and
the [wiki](https://wiki.luminusos.org), [blog](https://blog.luminusos.org) and
[apps](https://apps.luminusos.org) as sub-projects in `wiki/`, `blog/` and `apps/`.

Built with [Astro](https://astro.build). Fully static, no client framework;
the only JavaScript on the page handles the theme toggle, the language menu
and fetching the latest release tag from the GitHub API.

## Pages & languages

Every page exists in English (default) and Brazilian Portuguese:

| Route | Content |
| --- | --- |
| `/` and `/pt-br/` | LuminusOS home: hero, pillars, how it works, editions, download, support |
| `/aurora/` and `/pt-br/aurora/` | Aurora Shell subpage |
| `/zaptide/` and `/pt-br/zaptide/` | ZapTide: native WhatsApp companion for Linux, downloads, setup and data guide |
| `/blog/` | Blog copy embedded in the main website build |
| `/wiki/` | Wiki copy embedded in the main website build |
| `/apps/` | Apps catalog copy embedded in the main website build |

All copy lives in a single typed dictionary: `src/i18n/translations.ts`.
Adding a language = append it to the `languages` array (name + flag, the
header menu picks it up automatically), add its entry to `translations`, and
create the page folders for its prefix.

The site has light and dark themes: dark by default, following the system
preference, with a header toggle persisted in `localStorage`.

## Development

```sh
npm install
npm run dev      # http://localhost:4321, including /aurora, /blog, /wiki and /apps
npm run build    # static output in dist/, including /blog, /wiki and /apps
npm run preview  # serve dist/ locally
```

## GitHub Pages fallback

Cloudflare remains the primary host. GitHub Actions publishes a static fallback at
https://luminusos.github.io/website/ on every push to `main` (or manual workflow run).
In repository **Settings → Pages → Build and deployment**, keep **Source** set to
**GitHub Actions**. Publishing the source branch invokes Jekyll, which cannot build Astro.

Run `npm run build:pages` to build and check the fallback, including Aurora, blog and
wiki under `/website/`. The final step fixes legacy root-relative HTML links and
checks local link/asset targets. Cloudflare worker files are excluded from the Pages
artifact. Pages has no release API: downloads use SourceForge directly, without the
live version label or ISO/qcow2 selector. `npm run build` retains the Cloudflare build.

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
npm run build:aurora   # static output in aurora/dist/
npm run deploy:aurora  # local/manual upload with Wrangler
```

With `SITE_VARIANT=aurora` the Aurora Shell page becomes the site root
(`/` and `/pt-br/`), cross-links point back to `https://luminusos.org`, and
`aurora/dist/CNAME` is written as `aurora.luminusos.org`.

Cloudflare Pages settings for `aurora.luminusos.org`:

| Setting | Value |
| --- | --- |
| Root directory | `website` |
| Build command | `npm run build:aurora` |
| Build output directory | `aurora/dist` |
| Deploy command | leave empty |

The `deploy:aurora` script is only for a local/manual Wrangler upload. Do not
use it as the Cloudflare Pages deploy command; Git-connected Pages deployments
upload the configured output directory automatically after the build command.

This repository intentionally does not keep a default `wrangler.jsonc` in the
Pages root. The same source tree is used by multiple Cloudflare Pages projects
with different output directories, so each Pages project should use its own UI
settings. The Worker config used by the manual `npm run deploy` command lives
in `wrangler.worker.jsonc`.

## Wiki, Blog & Apps (sub-projects)

The wiki, the blog and the apps catalog live in this repository as Astro roots
that share the top-level `package.json` and lockfile:

| Site | Folder | Stack |
| --- | --- | --- |
| [wiki.luminusos.org](https://wiki.luminusos.org) | `wiki/` | Astro Starlight (sidebar, search, i18n) |
| [blog.luminusos.org](https://blog.luminusos.org) | `blog/` | Astro content collections, English + Google Translate menu |
| [apps.luminusos.org](https://apps.luminusos.org) | `apps/` | Astro, English + Brazilian Portuguese, Flathub-style catalog |

The root `npm run build` builds the three projects with `/blog`, `/wiki` and
`/apps` bases and copies them into the main website `dist/`. Standalone Cloudflare Pages
builds use the subdomain versions:

```sh
npm run build:blog
npm run deploy:blog
npm run build:wiki
npm run deploy:wiki
npm run build:apps
npm run deploy:apps
```

The home page shows the three latest blog posts, read at build time from
`blog/src/content/posts/`. Rebuild the main site after publishing a post.

### Shared code

The blog and apps roots import what they share with the main site from the
top-level `src/` tree instead of copying it:

| Path | Holds |
| --- | --- |
| `src/styles/tokens.css`, `ui.css` | Palette, type, radii; buttons and chips |
| `src/components/shared/` | Head helpers, header pieces (`SiteHeader`, `NavPill`, `ThemeToggle`), `SiteFooter`, `PostCard` |
| `src/scripts/` | Theme toggle, menu dismissal, copy buttons |
| `src/lib/` | Sibling-site URLs, navbar model (`site-nav.ts`), reading time |

### Apps catalog

`apps/` lists the applications published in the Luminus Flatpak repository
(`flatpak-repo/catalog.json`). Each entry in `apps/src/data/apps.ts` mirrors
the application's AppStream metainfo: add one when an application joins the
catalog, and add a release when it ships. Install buttons point at the
`.flatpakref` files served from `https://flatpak.luminusos.org/stable/`, and
the setup page documents the `luminus` remote. Screenshots and icons live in
`apps/public/`.

For Git-connected Cloudflare Pages projects, use only the build command and
output directory. Leave the deploy command empty there as well.

## License

MIT — see [LICENSE](LICENSE).
