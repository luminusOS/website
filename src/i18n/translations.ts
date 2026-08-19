import { en } from './en';
import { ptBr } from './pt-br';

export type Lang = 'en' | 'pt-br';

export type SiteVariant = '' | 'aurora';
export const siteVariant = (process.env.SITE_VARIANT ?? '') as SiteVariant;

export const mainSite = siteVariant ? 'https://luminusos.org' : '';

export const languages: { code: Lang; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷' },
];

export function langPrefix(lang: Lang): string {
  return lang === 'en' ? '' : '/pt-br';
}

// In dev the blog/wiki/aurora sites are reachable as local paths, but each
// production site lives on its own subdomain, so built pages must link to
// the absolute URL.
const useLocalPaths = import.meta.env.DEV;

export function auroraHref(p: string): string {
  if (siteVariant === 'aurora') return p || '/';
  if (useLocalPaths) return `${p}/aurora`;
  return `${links.auroraSite}${p}`;
}

export function siteHref(localPath: string, absolute: string): string {
  if (siteVariant === '' && useLocalPaths) return localPath;
  return absolute;
}

export const translations: Record<Lang, typeof en> = {
  en,
  'pt-br': ptBr,
};

export const links = {
  releasesLatest: 'https://github.com/luminusOS/images/releases/latest',
  releasesAll: 'https://sourceforge.net/projects/luminusos/files/',
  sfFiles: 'https://sourceforge.net/projects/luminusos/files/',
  sfLatest: 'https://sourceforge.net/projects/luminusos/files/latest/download',
  org: 'https://github.com/luminusOS',
  discord: 'https://discord.gg/eVmXsqkvkw',
  matrix: 'https://matrix.to/#/%23luminusos:matrix.org',
  reddit: 'https://www.reddit.com/r/LuminusOS/',
  mastodon: 'https://mastodon.social/@luminusos',
  x: 'https://x.com/LuminusOS',
  auroraRepo: 'https://github.com/luminusOS/aurora-shell',
  aetherisReleases: 'https://github.com/luminusOS/aetheris/releases',
  auroraEgo: 'https://extensions.gnome.org/extension/9389/aurora-shell/',
  auroraSite: 'https://aurora.luminusos.org',
  wikiSite: 'https://wiki.luminusos.org',
  blogSite: 'https://blog.luminusos.org',
  donate: 'https://opencollective.com/luminusos',
};

export const repos = {
  aurora: 'luminusOS/aurora-shell',
  aetheris: 'luminusOS/aetheris',
};

export type Translation = typeof en;
