/* empty css                           */
import { i as createAstro, d as createComponent, g as renderTemplate, h as renderComponent, m as maybeRenderHead, j as addAttribute } from '../astro_fH4yl_Rl.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, a as $$BlogList, b as $$Default, c as $$Card, $ as $$Button, d as $$Pill, e as $$RecentBlogPosts } from './404_bTuSvEQn.mjs';

const $$Astro$2 = createAstro("https://localhost:3000/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await getCollection("blog").then(
    (collection) => collection.reverse()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Blog", "description": "Stories | On this page you can find a selection of stories", "pageTitle": "Stories" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="blog_color p-6"> ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": posts })} </main> ` })}`;
}, "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://localhost:3000/");
const $$MobileSocials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MobileSocials;
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/SamuelTWu",
      icon: "i-uil-github"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/stories_within_/",
      icon: "i-uil-instagram"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/samuel-wu-bu/",
      icon: "i-uil-linkedin"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="md:hidden"> <h2 class="hidden">Socials section</h2> <ul class="flex justify-between"> ${socials.map((item) => renderTemplate`<li class="bg-white px-4 py-2 text-green border-black border-2 rounded card-shadow"> <a${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> <div${addAttribute([item.icon, "p-6"], "class:list")}></div> </a> </li>`)} </ul> </section>`;
}, "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/components/home/MobileSocials.astro", void 0);

const $$Astro = createAstro("https://localhost:3000/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const builtWith = [
    { name: "Music", url: "https://storieswith.in/blog/tags/music/" },
    { name: "Asian", url: "https://storieswith.in/blog/tags/asian/" },
    { name: "Poli Sci", url: "https://storieswith.in/blog/tags/poli%20sci/" },
    { name: "CS", url: "https://storieswith.in/blog/tags/cs/" },
    { name: "Education", url: "https://storieswith.in/blog/tags/education/" },
    { name: "Film", url: "https://storieswith.in/blog/tags/film/" },
    { name: "International", url: "https://storieswith.in/blog/tags/international/" },
    { name: "IR", url: "https://storieswith.in/blog/tags/ir/" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "title": "Home", "pageTitle": "Stories Within|\xA0Home", "description": "Stories Within is a collection of stories from students like you!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home_color p-6"> ${renderComponent($$result2, "MobileSocials", $$MobileSocials, {})} <section id="about" class="grid md:grid-cols-8 gap-8 mt-4"> <h2 class="hidden">About Brutal</h2> <div class="col-span-4"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col justify-between items-start gap-4"> <p class="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
Welcome to Stories Within
</p> <p class="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
Explore some stories below!
</p> ${renderComponent($$result3, "Button", $$Button, { "target": "_self", "href": "/blog/" }, { "default": ($$result4) => renderTemplate`
Click for a Story &rarr;
` })} </div> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-8 dm-serif">
Check out some topics
</h2> <ul class="flex gap-4 flex-wrap"> ${builtWith.map((item) => renderTemplate`<li> ${renderComponent($$result3, "Pill", $$Pill, {}, { "default": ($$result4) => renderTemplate` <a class="sanchez"${addAttribute(item.url, "href")} target="_blank"${addAttribute(`Go to ${item.name}`, "title")}> ${item.name} </a> ` })} </li>`)} </ul> ` })} </div> <div class="col-span-2"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl lg:text-6xl mb-4 dm-serif">
What is Stories Within?
</h2> <p class="poppins">
Stories Within is a Honors College Keystone Project that aims to capture the diverse and inspiring Stories of the BU community through casual interviews with students like you. Click <a class="text-white" target="_blank" href="https://bostonu.qualtrics.com/jfe/form/SV_cJeOVyPJiWBFJfE">here</a> for an interview!
</p> ` })} </div> </section> ${renderComponent($$result2, "RecentBlogPosts", $$RecentBlogPosts, {})} </main> ` })}`;
}, "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/index.astro", void 0);

const $$file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
