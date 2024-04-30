import rss from '@astrojs/rss';
import { g as getCollection } from './404_bTuSvEQn.mjs';

async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Stories Within',
    description: 'Tell us your story',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://storieswithin.com',
  });
}

export { GET };
