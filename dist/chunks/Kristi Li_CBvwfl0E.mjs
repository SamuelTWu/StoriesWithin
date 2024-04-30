import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2fy0YQ = new Proxy({"src":"/_astro/Kristi_Li.JarPewiW.JPG","width":1372,"height":969,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kristi_Li.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kristi_Li.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Kristi_Li.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Kristi_Li.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2fy0YQ, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"kristi-li\">Kristi Li</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Kristi_Li.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The lifestyle here is way faster. I feel like I always need to be working on something. I started planning, like with a planner, after I came to college. I didn’t do that in high school. I just look at my planner and I want to fill out every single box. If I don’t, I feel like I’m slacking. It feels like everybody is doing the same thing. You get that invisible peer pressure.</p>\n<p>But I’ve been trying not to stress as much and explore. This world is too polarizing in a lot of aspects, whether it’s politics or ideologies. I’m the type of person who wants to welcome all thoughts. That’s why I think exposure is really important. You don’t necessarily have to agree with another person, but I think it’s important to be a good listener and just be exposed to ideas different from your own. Coming into college, the first thing I did was join JSA. Even though I don’t have any family members who are Japanese, Japan is a very important place to me. I wanted to expose myself to the culture more. And I was really proud of myself for attending their first general meeting! I remember it clearly: it was September before COVID, and I went there by myself. I have always been a very shy person, but I started talking to strangers and then ended up in e-board that semester! I was still very proud of myself because I stepped out of my comfort zone and made a lot of Japanese friends.</p>");
	

				const frontmatter = {"title":"Kristi Li","description":"Kristi is navigating the fast-paced college life and stepping out of her comfort zone.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Chinese","Asian","CS","International"],"imgUrl":"../../assets/Kristi_Li.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Kristi Li.md";
				const url = undefined;
				function rawContent() {
					return "# Kristi Li\n\n![local image](../../assets/Kristi_Li.JPG)\n\nThe lifestyle here is way faster. I feel like I always need to be working on something. I started planning, like with a planner, after I came to college. I didn't do that in high school. I just look at my planner and I want to fill out every single box. If I don't, I feel like I'm slacking. It feels like everybody is doing the same thing. You get that invisible peer pressure. \n\nBut I’ve been trying not to stress as much and explore. This world is too polarizing in a lot of aspects, whether it's politics or ideologies. I'm the type of person who wants to welcome all thoughts. That's why I think exposure is really important. You don't necessarily have to agree with another person, but I think it's important to be a good listener and just be exposed to ideas different from your own. Coming into college, the first thing I did was join JSA. Even though I don't have any family members who are Japanese, Japan is a very important place to me. I wanted to expose myself to the culture more. And I was really proud of myself for attending their first general meeting! I remember it clearly: it was September before COVID, and I went there by myself. I have always been a very shy person, but I started talking to strangers and then ended up in e-board that semester! I was still very proud of myself because I stepped out of my comfort zone and made a lot of Japanese friends.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"kristi-li","text":"Kristi Li"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
