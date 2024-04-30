import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1G88Pv = new Proxy({"src":"/_astro/Isabelle_Hanna.8Cjc6v_y.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Isabelle_Hanna.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Isabelle_Hanna.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Isabelle_Hanna.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Isabelle_Hanna.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1G88Pv, ...props});
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
			const html = await updateImageReferences("<h1 id=\"isabelle-hanna\">Isabelle Hanna</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Isabelle_Hanna.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>When I first came to college, I was very serious about my beliefs. I was very much this is right and everything else is wrong. I didn’t deal well with disagreements. I mean, there are obviously some things that I won’t compromise on. If someone’s like, women suck, that’s one thing, but in terms of political beliefs, I don’t cancel anybody immediately that disagrees with me. I’m able to have more conversations about it.</p>\n<p>So I definitely noticed some personal growth in not canceling people. I used to love canceling people honestly. I remember the first week of freshman year I was talking to someone and she said she didn’t hate all police and I was like “ You don’t hate all the police? Yeah, you’re canceled. Like, fuck 12.” So I’ve gotten a little bit more chill. There have been times I’ve made friends not knowing their beliefs and realizing that they’re very kind and then learning that they have a different belief and realizing that doesn’t invalidate everything else that I already believe about them.</p>\n<p>I guess and there obviously are still some things that I’m passionate about. If I meet someone and they’re like, “I love Donald Trump”, I’m not gonna be fine with that. But at least compromising on some things.</p>");
	

				const frontmatter = {"title":"Isabelle Hanna","description":"For Isabelle, college has taught her to be slow to anger and to listen more.","pubDate":"2024-03-17 14:00","author":"Sam Wu","tags":["Georgia","Biology"],"imgUrl":"../../assets/Isabelle_Hanna.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Isabelle Hanna.md";
				const url = undefined;
				function rawContent() {
					return "# Isabelle Hanna\n\n![local image](../../assets/Isabelle_Hanna.JPG)\n\nWhen I first came to college, I was very serious about my beliefs. I was very much this is right and everything else is wrong. I didn't deal well with disagreements. I mean, there are obviously some things that I won't compromise on. If someone's like, women suck, that’s one thing, but in terms of political beliefs, I don't cancel anybody immediately that disagrees with me. I'm able to have more conversations about it.\n\nSo I definitely noticed some personal growth in not canceling people. I used to love canceling people honestly. I remember the first week of freshman year I was talking to someone and she said she didn't hate all police and I was like “ You don't hate all the police? Yeah, you're canceled. Like, fuck 12.” So I've gotten a little bit more chill. There have been times I’ve made friends not knowing their beliefs and realizing that they're very kind and then learning that they have a different belief and realizing that doesn't invalidate everything else that I already believe about them. \n\nI guess and there obviously are still some things that I’m passionate about. If I meet someone and they're like, “I love Donald Trump”, I'm not gonna be fine with that. But at least compromising on some things.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"isabelle-hanna","text":"Isabelle Hanna"}];
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
