import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZyXOeR = new Proxy({"src":"/_astro/Morgan_Wylie.Mq3Pmpdf.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Morgan_Wylie.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Morgan_Wylie.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Morgan_Wylie.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Morgan_Wylie.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZyXOeR, ...props});
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
			const html = await updateImageReferences("<h1 id=\"morgan-wylie\">Morgan Wylie</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Morgan_Wylie.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In high school, it was all AP classes. Getting to the top. And then I went to college and I realized that I wanted to go into film and share other people’s stories. Coming from a Hispanic family, that was not what they wanted. They wanted me to go into pre-med. Now I got here and I’m doing an internship for Disney. But I never would have done it if I had just stuck to what everyone wanted me to do. I’ve kind of branched out and done what makes me happiest. I can’t even imagine what would have happened if I had just been a doctor.</p>\n<p>So spend more time doing what makes you happy. I spent so long doing what others expected of me and not what I thought would truly make me the happiest. And now that I’ve realized that I can do whatever I want and go out and do all the things that I’ve wanted to do. Seeing all my friends doing the same thing and striving to do what makes them the most happy above anything else just makes me happier.</p>");
	

				const frontmatter = {"title":"Morgan Wylie","description":"From AP classes to Disney internship, Morgan embraces personal happiness over expectations.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Film","Colorado"],"imgUrl":"../../assets/Morgan_Wylie.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Morgan Wylie.md";
				const url = undefined;
				function rawContent() {
					return "# Morgan Wylie\n\n![local image](../../assets/Morgan_Wylie.JPG)\n\nIn high school, it was all AP classes. Getting to the top. And then I went to college and I realized that I wanted to go into film and share other people's stories. Coming from a Hispanic family, that was not what they wanted. They wanted me to go into pre-med. Now I got here and I'm doing an internship for Disney. But I never would have done it if I had just stuck to what everyone wanted me to do. I've kind of branched out and done what makes me happiest. I can't even imagine what would have happened if I had just been a doctor.\n\nSo spend more time doing what makes you happy. I spent so long doing what others expected of me and not what I thought would truly make me the happiest. And now that I've realized that I can do whatever I want and go out and do all the things that I've wanted to do. Seeing all my friends doing the same thing and striving to do what makes them the most happy above anything else just makes me happier. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"morgan-wylie","text":"Morgan Wylie"}];
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
