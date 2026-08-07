export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${basePath}${path}`;

export const postDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
