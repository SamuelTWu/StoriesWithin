/* empty css                           */
import { i as createAstro, d as createComponent, g as renderTemplate, h as renderComponent } from '../astro_fH4yl_Rl.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './404_bTuSvEQn.mjs';

const $$Astro = createAstro("https://localhost:3000/");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((blogpost) => ({
    params: { slug: blogpost.slug },
    props: { blogpost }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blogpost } = Astro2.props;
  const { Content } = await blogpost.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
