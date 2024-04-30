import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__2upCs7 = new Proxy({"src":"/_astro/Bella_Davies.lrIhOwFL.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Bella_Davies.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Bella_Davies.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Bella_Davies.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Bella_Davies.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__2upCs7, ...props});
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
			const html = await updateImageReferences("<h1 id=\"bella-davies\">Bella Davies</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Bella_Davies.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The high school that I went to was like really competitive and it felt like everyone was just so smart and everyone’s parents were so successful. It was like a lot of pressure to do well in school and do sports and all this stuff. So in high school, when I was a freshman, I was friends with these girls that I had gone to middle and elementary school with and they were really put together and perfect. That played a role in feeling pressure all the time to be perfect.</p>\n<p>I kind of left those girls and became friends with some different people who were not as perfect. A little more relaxed. Being around them made me relax a more and not be so stressed about school. I didn’t do as well in school when I was friends with them, but I was a lot more relaxed.</p>");
	

				const frontmatter = {"title":"Bella Davies","description":"In a highly competitive high school environment, Bella initially felt pressured to be perfect.","pubDate":"2024-01-29 22:43","author":"Sam Wu","tags":["CS","California","Asian","Chinese"],"imgUrl":"../../assets/Bella_Davies.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Bella Davies.md";
				const url = undefined;
				function rawContent() {
					return "# Bella Davies\n\n![local image](../../assets/Bella_Davies.JPG)\n\nThe high school that I went to was like really competitive and it felt like everyone was just so smart and everyone's parents were so successful. It was like a lot of pressure to do well in school and do sports and all this stuff. So in high school, when I was a freshman, I was friends with these girls that I had gone to middle and elementary school with and they were really put together and perfect. That played a role in feeling pressure all the time to be perfect. \n\nI kind of left those girls and became friends with some different people who were not as perfect. A little more relaxed. Being around them made me relax a more and not be so stressed about school. I didn't do as well in school when I was friends with them, but I was a lot more relaxed. \n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"bella-davies","text":"Bella Davies"}];
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
