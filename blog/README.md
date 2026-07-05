# LuminusOS Blog

The blog at [blog.luminusos.org](https://blog.luminusos.org), built with
[Astro](https://astro.build) content collections.

Posts are written in **English only**. The header has a Translate menu that
hands the current page to Google Translate's proxy
(`blog-luminusos-org.translate.goog`) for machine translation into other
languages, so there is nothing to maintain per language.

## Writing a post

Add a Markdown file to `src/content/posts/`:

```md
---
title: 'Post title'
description: One-sentence summary shown in the list and in meta tags.
date: 2026-06-10
tag: Announcement
---

Content in Markdown…
```

The file name becomes the URL: `my-post.md` → `/posts/my-post/`.

## Development

```sh
npm install
npm run dev           # from the repository root, served at /blog
npm run build:blog    # static output in blog/dist/
```

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
One-time setup: enable Pages (Source: GitHub Actions) on this repo and add a
DNS `CNAME` record `blog.luminusos.org` → `luminusos.github.io`. The `CNAME`
file ships in `public/`.

## License

MIT
