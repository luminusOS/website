import { imageCount, readingMinutes, type Post } from './posts';
import { postDate, withBase } from './site';

/** Props for the shared PostCard, derived from a blog post. */
export function postCardProps(post: Post, featured = false) {
  const images = imageCount(post);
  const imageNote = images > 0 ? ` · ${images} ${images === 1 ? 'image' : 'images'}` : '';
  const image = post.data.image;

  return {
    href: withBase(`/posts/${post.id}/`),
    title: post.data.title,
    description: post.data.description,
    tag: post.data.tag,
    date: post.data.date,
    dateLabel: postDate.format(post.data.date),
    footer: `${readingMinutes(post)} min read${imageNote}`,
    cover: image ? withBase(image) : undefined,
    fallbackLogo: withBase('/logos/brand.svg'),
    featured,
    badge: featured ? 'Latest' : undefined,
    headingLevel: featured ? ('h2' as const) : ('h3' as const),
  };
}
