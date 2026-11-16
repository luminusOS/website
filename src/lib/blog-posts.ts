import { parseFrontmatter } from '@astrojs/markdown-remark';
import { readingMinutes } from './reading-time';

export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tag: string;
  image?: string;
  minutes: number;
}

// The blog is a separate Astro root, so its posts are read from the source
// files at build time instead of through a content collection.
const sources = import.meta.glob('../../blog/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export function latestBlogPosts(count: number): BlogPostSummary[] {
  return Object.entries(sources)
    .map(([path, source]) => {
      const { frontmatter, content } = parseFrontmatter(source);
      const slug = path.split('/').pop()!.replace(/\.md$/, '');
      const date = new Date(frontmatter.date);
      // The blog validates this with its own schema; the main build reads the files
      // directly, so a bad post must fail here with a readable message.
      if (!frontmatter.title || !frontmatter.description || Number.isNaN(date.valueOf())) {
        throw new Error(`Blog post "${slug}" needs a title, description and valid date in its frontmatter.`);
      }
      return {
        slug,
        title: String(frontmatter.title),
        description: String(frontmatter.description),
        date,
        tag: String(frontmatter.tag ?? 'News'),
        image: frontmatter.image as string | undefined,
        minutes: readingMinutes(content),
      };
    })
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    .slice(0, count);
}
