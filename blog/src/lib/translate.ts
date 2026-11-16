// Posts are written in English only. The Translate menu hands the current
// page to Google Translate's proxy, which serves the site from
// <host with dashes>.translate.goog.

export const translateLanguages = [
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'zh-CN', label: '中文' },
];

export function translateUrl(site: URL | undefined, pathname: string, targetLanguage: string): string {
  const host = new URL(site ?? 'https://blog.luminusos.org').hostname.replaceAll('.', '-');
  return `https://${host}.translate.goog${pathname}?_x_tr_sl=en&_x_tr_tl=${targetLanguage}&_x_tr_hl=${targetLanguage}`;
}
