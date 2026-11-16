import type { navEn } from '../i18n/nav';
import type { siblingSites } from './sibling-sites';

export const donateUrl = 'https://opencollective.com/luminusos';

export type NavStrings = typeof navEn;
export type SiblingSites = ReturnType<typeof siblingSites>;
export type SiteSection = 'main' | 'blog' | 'apps' | 'aurora';

export interface NavLink {
  href: string;
  label: string;
  current?: boolean;
}

export interface NavPillLink extends NavLink {
  icon: 'aurora' | 'apps';
}

export interface LanguageItem {
  href: string;
  name: string;
  flag?: string;
  current?: boolean;
  rel?: string;
}

export interface LanguageMenu {
  /** Accessible name of the trigger. */
  label: string;
  /** Visible trigger text, e.g. "EN". */
  text: string;
  /** Without a flag the trigger shows a globe. */
  flag?: string;
  /** Heading of the language group in the mobile panel. */
  title: string;
  note?: string;
  items: LanguageItem[];
}

export interface SiteNav {
  brandHref: string;
  links: NavLink[];
  resources: { label: string; items: NavLink[] };
  pills: NavPillLink[];
  download: NavLink;
  donate: NavLink;
  themeLabel: string;
  menuLabel: string;
}

interface Options {
  strings: NavStrings;
  sites: SiblingSites;
  /** Home page of the main site in the reader's language, always ending in "/". */
  mainRoot: string;
  current: SiteSection;
}

/**
 * Navigation shared by the main site, blog and apps, so every header lists
 * the same destinations in the same order. Callers pass the URLs that fit
 * their build (embedded paths or subdomains) and which section is open.
 */
export function buildSiteNav({ strings: t, sites, mainRoot, current }: Options): SiteNav {
  return {
    brandHref: mainRoot,
    links: [
      { href: `${mainRoot}#why`, label: t.overview },
      { href: `${mainRoot}#how`, label: t.how },
      { href: `${mainRoot}#download`, label: t.editions },
    ],
    resources: {
      label: t.resources,
      items: [
        { href: sites.blog, label: t.blog, current: current === 'blog' },
        { href: `${mainRoot}contribute`, label: t.contribute },
        { href: sites.wiki, label: t.wiki },
      ],
    },
    pills: [
      { href: sites.aurora, icon: 'aurora', label: t.auroraShort, current: current === 'aurora' },
      { href: sites.apps, icon: 'apps', label: t.apps, current: current === 'apps' },
    ],
    download: { href: `${mainRoot}#download`, label: t.download },
    donate: { href: donateUrl, label: t.donate },
    themeLabel: t.themeToggle,
    menuLabel: t.menu,
  };
}

/** Main home with a trailing slash, from a `siblingSites().main` URL. */
export const mainRootOf = (sites: SiblingSites) => (sites.main.endsWith('/') ? sites.main : `${sites.main}/`);
