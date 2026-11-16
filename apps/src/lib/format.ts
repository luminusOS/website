import type { Lang } from '../i18n';

export const dateFormat = (lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'pt-BR', { dateStyle: 'long', timeZone: 'UTC' });
