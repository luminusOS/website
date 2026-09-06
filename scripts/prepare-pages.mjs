import assert from 'node:assert/strict';
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const base = '/website';
const origin = 'https://luminusos.github.io';
// The Cloudflare adapter nests its output under base; Pages mounts the artifact there.
const nested = new URL('website/', dist);
if (existsSync(nested)) {
  cpSync(nested, dist, { recursive: true });
  rmSync(nested, { recursive: true });
}
const pages = readdirSync(dist, { recursive: true }).filter((path) => path.endsWith('.html'));

// ponytail: generated HTML uses quoted href/src; add other URL attributes if introduced.
for (const path of pages) {
  const file = new URL(path, dist);
  const html = readFileSync(file, 'utf8').replace(/\b(href|src)=(['"])(\/(?!\/)[^'"]*)\2/g,
    (match, attr, quote, url) => url === base || url.startsWith(`${base}/`)
      ? match : `${attr}=${quote}${base}${url}${quote}`);
  writeFileSync(file, html);
}

for (const path of ['_worker.js', '_routes.json', 'CNAME']) {
  rmSync(new URL(path, dist), { recursive: true, force: true });
}
writeFileSync(new URL('.nojekyll', dist), '');

// Check the deploy artifact, including every local navigation link and asset.
for (const path of pages) {
  const html = readFileSync(new URL(path, dist), 'utf8');
  for (const [tag] of html.matchAll(/<(?:a|img|script|link|use)\b[^>]*>/g)) {
    if (/\brel=["'](?:canonical|alternate)["']/.test(tag)) continue;
    const value = tag.match(/\b(?:href|src)=["']([^"']+)["']/)?.[1];
    if (!value) continue;
    const url = new URL(value.replaceAll('&amp;', '&'), `${origin}${base}/${path}`);
    if (url.origin !== origin) continue;
    assert(url.pathname.startsWith(`${base}/`), `${path}: outside Pages base: ${value}`);
    const target = decodeURIComponent(url.pathname.slice(base.length + 1));
    assert(existsSync(new URL(target, dist)) || existsSync(new URL(join(target, 'index.html'), dist)),
      `${path}: missing local target: ${value}`);
  }
}
console.log(`Pages: checked links and assets in ${pages.length} HTML files.`);
