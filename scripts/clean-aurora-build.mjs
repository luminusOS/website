import { rmSync } from 'node:fs';

const dist = new URL('../dist-aurora/', import.meta.url);

for (const path of ['aetheris', 'aurora', 'pt-br/aetheris', 'pt-br/aurora']) {
  rmSync(new URL(path, dist), { recursive: true, force: true });
}
