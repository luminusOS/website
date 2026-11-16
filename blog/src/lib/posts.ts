import { getCollection, type CollectionEntry } from 'astro:content';
import { readingMinutes as minutesToRead } from '../../../src/lib/reading-time';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const readingMinutes = (post: Post) => minutesToRead(post.body ?? '');

export const imageCount = (post: Post) => (post.body ?? '').match(/<img\b|!\[/g)?.length ?? 0;
