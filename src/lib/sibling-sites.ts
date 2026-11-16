/**
 * URLs of the sibling LuminusOS sites. Embedded in the main build they live
 * under local paths; standalone they live on their own subdomains. `prefix`
 * is the language prefix of the caller: '' or '/pt-br'.
 */
// `prefix || '/'` keeps the English main site at '/' because an empty href
// would point back at the current page.
export function siblingSites(embedded: boolean, prefix = '') {
  return {
    main: embedded ? prefix || '/' : `https://luminusos.org${prefix}`,
    aurora: embedded ? `${prefix}/aurora` : `https://aurora.luminusos.org${prefix}`,
    apps: embedded ? `/apps${prefix}` : `https://apps.luminusos.org${prefix}`,
    blog: embedded ? '/blog' : 'https://blog.luminusos.org',
    wiki: embedded ? `/wiki${prefix}` : `https://wiki.luminusos.org${prefix}`,
  };
}
