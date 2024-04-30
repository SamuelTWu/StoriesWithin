import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2mNOTw = new Proxy({"src":"/_astro/Andrew_Burke_Stevenson.OaMzHwee.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Andrew_Burke_Stevenson.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Andrew_Burke_Stevenson.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Andrew_Burke_Stevenson.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Andrew_Burke_Stevenson.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2mNOTw, ...props});
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
			const html = await updateImageReferences("<h1 id=\"andrew-burke-stevenson\">Andrew Burke-Stevenson</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Andrew_Burke_Stevenson.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Listen first. There are a lot of times when people jump to conclusions. And it’s fair to make conclusions sometimes, but first, you’ve got to listen and make sure you understand what people are trying to say. Really try to get their perspective. Understand their lives back and understand how they could have gotten there. Even if they have a wrong opinion, an ignorant opinion, or a bigoted opinion, it’s good to understand why, so you can address it.</p>\n<p>I’ve tried to approach conversations from curiosity and I’ve seen other people around me not do that. It’s kind of frustrating because you end up learning how a lot of people get to these really awful conclusions.</p>\n<p>If you look at how they got there, you can become more informed. You don’t have to forgive them, but you at least can understand how you can make a difference in preventing that going forward.</p>");
	

				const frontmatter = {"title":"Andrew Burke-Stevenson","description":"Listening is the beginning of understanding according to Andrew, who gives advice on how to approach conversations.","pubDate":"2024-03-15 13:05","author":"Sam Wu","tags":["Illinois","Journalism"],"imgUrl":"../../assets/Andrew_Burke_Stevenson.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Andrew Burke-Stevenson.md";
				const url = undefined;
				function rawContent() {
					return "# Andrew Burke-Stevenson\n\n![local image](../../assets/Andrew_Burke_Stevenson.JPG)\n\nListen first. There are a lot of times when people jump to conclusions. And it’s fair to make conclusions sometimes, but first, you've got to listen and make sure you understand what people are trying to say. Really try to get their perspective. Understand their lives back and understand how they could have gotten there. Even if they have a wrong opinion, an ignorant opinion, or a bigoted opinion, it's good to understand why, so you can address it. \n\nI've tried to approach conversations from curiosity and I've seen other people around me not do that. It's kind of frustrating because you end up learning how a lot of people get to these really awful conclusions. \n\nIf you look at how they got there, you can become more informed. You don't have to forgive them, but you at least can understand how you can make a difference in preventing that going forward. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"andrew-burke-stevenson","text":"Andrew Burke-Stevenson"}];
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
