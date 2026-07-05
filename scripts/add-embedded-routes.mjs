import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const routesPath = new URL('_routes.json', dist);

for (const path of ['blog/CNAME', 'wiki/CNAME']) {
  rmSync(new URL(path, dist), { force: true });
}

if (existsSync(routesPath)) {
  const routes = JSON.parse(readFileSync(routesPath, 'utf8'));
  const exclude = new Set(routes.exclude ?? []);

  for (const route of ['/blog', '/blog/*', '/wiki', '/wiki/*']) {
    exclude.add(route);
  }

  routes.exclude = [...exclude];
  writeFileSync(routesPath, `${JSON.stringify(routes, null, 2)}\n`);
}
