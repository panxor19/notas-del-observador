import { getCollection, type CollectionEntry } from 'astro:content';
import { calculateReadingTime } from './readingTime';

export type BlogPost = CollectionEntry<'blog'>;

export async function getAllPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getReadingTime(post: BlogPost) {
  return calculateReadingTime(post.body ?? '');
}

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/\.(md|mdx)$/, '');
}

export function getAllTags(posts: BlogPost[]) {
  const tags = posts.flatMap((post) => post.data.tags);
  return [...new Set(tags)].sort((a, b) => a.localeCompare(b, 'es'));
}

export function getRelatedPosts(currentPost: BlogPost, posts: BlogPost[], limit = 3) {
  const currentTags = new Set(currentPost.data.tags);

  return posts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => ({
      post,
      score: post.data.tags.filter((tag) => currentTags.has(tag)).length
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf())
    .slice(0, limit)
    .map((item) => item.post);
}
