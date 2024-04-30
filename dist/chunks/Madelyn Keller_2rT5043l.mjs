import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1EqXh2 = new Proxy({"src":"/_astro/Madelyn_Keller.kk4JOB1L.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Madelyn_Keller.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Madelyn_Keller.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Madelyn_Keller.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Madelyn_Keller.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1EqXh2, ...props});
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
			const html = await updateImageReferences("<h1 id=\"madelyn-keller\">Madelyn Keller</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Madelyn_Keller.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Back home, I know all of my neighbors. We’ll all casually wave and when someone moves in onto our block, we all make an effort to go out and meet them. I’ll babysit a ton of their kids and we’ll have potlucks together.</p>\n<p>Here I feel like even in the dorms when you’re kind of encouraged to meet each other more, I hardly interacted with a lot of the people I live next to. That threw me a little bit. I don’t know, I feel like here more people mind their business, whereas in the south, it’s different.</p>\n<p>Freshman year, there was one time I was walking around Beacon Hill, the really rich area, and I was really homesick. I was crying. But I was wearing a mask nobody knew me out here. But if I had done that back home, even in the really rich areas, they would have probably thought I was\ntrespassing, but someone would have come up and been like, “Are you ok, why are you upset?”, whereas here no one bugged me, which is actually what I was looking for.</p>\n<p>But I feel like walking is the only place you can be alone. I hadn’t really accounted for the total lack of privacy. You share a room with somebody and there’s a suite. Even if on the street or in public transit, there’s rarely a time when you’re completely alone. When I’m angry or frustrated or upset, I like to be alone with my thoughts and there’s no chance for that. The best thing I’ve found is going on a ton of walks and listening to music.</p>");
	

				const frontmatter = {"title":"Madelyn Keller","description":"Madelyn went from a close-knit community to seeking privacy in the big city.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Bio","Engineering","Louisiana"],"imgUrl":"../../assets/Madelyn_Keller.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Madelyn Keller.md";
				const url = undefined;
				function rawContent() {
					return "# Madelyn Keller\n\n![local image](../../assets/Madelyn_Keller.JPG)\n\nBack home, I know all of my neighbors. We’ll all casually wave and when someone moves in onto our block, we all make an effort to go out and meet them. I’ll babysit a ton of their kids and we'll have potlucks together.\n\nHere I feel like even in the dorms when you're kind of encouraged to meet each other more, I hardly interacted with a lot of the people I live next to. That threw me a little bit. I don't know, I feel like here more people mind their business, whereas in the south, it’s different. \n\nFreshman year, there was one time I was walking around Beacon Hill, the really rich area, and I was really homesick. I was crying. But I was wearing a mask nobody knew me out here. But if I had done that back home, even in the really rich areas, they would have probably thought I was\ntrespassing, but someone would have come up and been like, “Are you ok, why are you upset?”, whereas here no one bugged me, which is actually what I was looking for. \n\nBut I feel like walking is the only place you can be alone. I hadn't really accounted for the total lack of privacy. You share a room with somebody and there's a suite. Even if on the street or in public transit, there's rarely a time when you’re completely alone. When I'm angry or frustrated or upset, I like to be alone with my thoughts and there’s no chance for that. The best thing I’ve found is going on a ton of walks and listening to music.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"madelyn-keller","text":"Madelyn Keller"}];
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
