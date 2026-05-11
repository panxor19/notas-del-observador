import rss from '@astrojs/rss';
import { siteConfig } from '@/config/site';
import { getPublishedPosts, getPostSlug } from '@/utils/posts';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${getPostSlug(post)}`
    }))
  });
}
