import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2w9Kqi = new Proxy({"src":"/_astro/Bob_Chen.luIUqt8c.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Bob_Chen.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Bob_Chen.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Bob_Chen.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Bob_Chen.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2w9Kqi, ...props});
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
			const html = await updateImageReferences("<h1 id=\"chubo-chen\">Chubo Chen</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Bob_Chen.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In high school was more introverted. I grew up in China and I was adjusting to American high school. I lived with a host family in high school. After class, I would spend a lot of time with them, so not much with my classmates.</p>\n<p>I changed a bunch of host families. My first host family was not good at English and we had a lot of conflicts. After two months, I had to move to a new host family and then during high school, I changed four different ones because of different reasons. One of my favorite host families was Jamaican. They were really nice and treated me really well. They would make me Jamaican food. But all the American families would just make lasagna.</p>");
	

				const frontmatter = {"title":"Chubo Chen","description":"Chubo Chen talks about adjusting to American culture from China, and reminisces about his host families.","pubDate":"2024-01-29 19:21","author":"Sam Wu","tags":["Econ","International","Chinese","Asian"],"imgUrl":"../../assets/Bob_Chen.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Bob Chen.md";
				const url = undefined;
				function rawContent() {
					return "# Chubo Chen\n\n![local image](../../assets/Bob_Chen.JPG)\n\nIn high school was more introverted. I grew up in China and I was adjusting to American high school. I lived with a host family in high school. After class, I would spend a lot of time with them, so not much with my classmates.\n\nI changed a bunch of host families. My first host family was not good at English and we had a lot of conflicts. After two months, I had to move to a new host family and then during high school, I changed four different ones because of different reasons. One of my favorite host families was Jamaican. They were really nice and treated me really well. They would make me Jamaican food. But all the American families would just make lasagna. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"chubo-chen","text":"Chubo Chen"}];
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
