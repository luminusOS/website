import { siblingSites } from '../lib/sibling-sites';
import { donateUrl } from '../lib/site-nav';
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

// Dev and the Pages fallback use local paths; Cloudflare uses subdomains.
const useLocalPaths = import.meta.env.DEV || Boolean(process.env.SITE_BASE);

// The standalone Aurora build links to every other site by absolute URL and
// treats the Aurora page as its own root.
export function siblingLinks(prefix: string) {
  const sites = siblingSites(siteVariant === '' && useLocalPaths, prefix);
  return siteVariant === 'aurora' ? { ...sites, aurora: prefix || '/' } : sites;
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
  zaptideRepo: 'https://github.com/luminusOS/zaptide',
  zaptideReleases: 'https://github.com/luminusOS/zaptide/releases/latest',
  auroraEgo: 'https://extensions.gnome.org/extension/9389/aurora-shell/',
  donate: donateUrl,
  flatpakRemote: 'https://flatpak.luminusos.org/stable/luminus-stable.flatpakrepo',
  aetherisFlatpakRef: 'https://flatpak.luminusos.org/stable/org.luminusos.Aetheris.flatpakref',
};

export const flatpakStableLive = true;

export const repos = {
  aurora: 'luminusOS/aurora-shell',
  aetheris: 'luminusOS/aetheris',
};

export type Translation = typeof en;
