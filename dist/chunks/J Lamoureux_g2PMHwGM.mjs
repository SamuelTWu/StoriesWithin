import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1NTmkf = new Proxy({"src":"/_astro/J_Lamoureux.QsTBUioA.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/J_Lamoureux.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/J_Lamoureux.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/J_Lamoureux.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/J_Lamoureux.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1NTmkf, ...props});
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
			const html = await updateImageReferences("<h1 id=\"j-lamoureux\">J Lamoureux</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/J_Lamoureux.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Just because you don’t understand something doesn’t mean you can’t learn. There’s so much hate in the world because people don’t understand the things people go through. You just have to have more empathy with everyone’s struggles and everyone’s stories.</p>\n<p>I’m nonbinary and a lot of people seem to want to take my rights and identity away. But it’s because they don’t understand what I have to go through and everything I have lived and will continue to live every single day.</p>\n<p>In this part of the US, it’s pretty ok, but in a lot of different parts, especially Florida, they seem to want to erase our history and ignore us completely, which is not how life should be lived.</p>");
	

				const frontmatter = {"title":"J Lamoureux","description":"Embrace learning and empathy is import for J to combat hate and discrimination.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Rhode Island","Music","LGBTQ Rights"],"imgUrl":"../../assets/J_Lamoureux.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/J Lamoureux.md";
				const url = undefined;
				function rawContent() {
					return "# J Lamoureux\n\n![local image](../../assets/J_Lamoureux.JPG)\n\nJust because you don't understand something doesn't mean you can't learn. There's so much hate in the world because people don't understand the things people go through. You just have to have more empathy with everyone's struggles and everyone's stories.\n\nI'm nonbinary and a lot of people seem to want to take my rights and identity away. But it's because they don't understand what I have to go through and everything I have lived and will continue to live every single day.\n\nIn this part of the US, it's pretty ok, but in a lot of different parts, especially Florida, they seem to want to erase our history and ignore us completely, which is not how life should be lived.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"j-lamoureux","text":"J Lamoureux"}];
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
