import { siblingSites } from '../../../src/lib/sibling-sites';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${basePath}${path}`;

const embedded = basePath.endsWith('/apps');

export const siteLinks = (prefix: string) => siblingSites(embedded, prefix);
