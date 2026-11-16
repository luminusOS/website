import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { withBase } from '../lib/site';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://blog.luminusos.org');
  const posts = await getPosts();
  const items = posts
    .map((post) => {
      const link = new URL(withBase(`/posts/${post.id}/`), origin).href;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <category>${escapeXml(post.data.tag)}</category>
      <description>${escapeXml(post.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>LuminusOS Blog</title>
    <link>${new URL(withBase('/'), origin).href}</link>
    <description>Release notes, development updates and stories from the LuminusOS project.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
