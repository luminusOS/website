import { apps, featuredId, type AppEntry } from '../data/apps';
import { langPrefix, type Lang } from '../i18n';
import { withBase } from './site';

export const homeHref = (lang: Lang) => withBase(langPrefix(lang)) || '/';

export const appHref = (app: AppEntry, lang: Lang) => withBase(`${langPrefix(lang)}/app/${app.id}`);

export const setupHref = (lang: Lang) => withBase(`${langPrefix(lang)}/setup`);

export const featuredApp = (): AppEntry => apps.find((app) => app.id === featuredId) ?? apps[0];

/** Prefers the second screenshot: the first is often a sparse first-run screen. Falls back to the only one. */
export const showcaseShot = (app: AppEntry): string => (app.screenshots[1] ?? app.screenshots[0]).file;
