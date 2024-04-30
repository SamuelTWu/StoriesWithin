/* empty css                           */
import { i as createAstro, d as createComponent, g as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_fH4yl_Rl.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, $ as $$Button, a as $$BlogList, b as $$Default } from './404_bTuSvEQn.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  const tags = [];
  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tags.push(tag.toLowerCase());
    });
  });
  return Array.from(new Set(tags)).map((tag) => {
    return {
      params: { tag },
      props: {
        tag,
        blogposts: allPosts.filter(
          (post) => post.data.tags.map((tag2) => tag2.toLowerCase()).includes(tag)
        )
      }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag, blogposts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": `Blog: ${tag}`, "description": `Stories Within Blog | All posts tagged with ${tag}`, "pageTitle": `Stories Within Blog |\xA0Blogposts tagged with ${tag}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-6 tag_color grid gap-4"> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/blog/" }, { "default": ($$result3) => renderTemplate`&larr; Back to blog` })} </div> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": blogposts })} </main> ` })}`;
}, "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
