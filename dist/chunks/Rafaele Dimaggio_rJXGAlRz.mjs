import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__2x2xEz = new Proxy({"src":"/_astro/Rafaele_DiMaggio.2x0pFNHZ.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rafaele_DiMaggio.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rafaele_DiMaggio.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rafaele_DiMaggio.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rafaele_DiMaggio.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__2x2xEz, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rafaele-dimaggio\">Rafaele DiMaggio</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rafaele_DiMaggio.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Boston Transit sucks. It takes you about an hour to get anywhere and the T is about walking speed. In New York, you can get anywhere in like 30 minutes, which is pretty awesome.</p>\n<p>I think Boston is on a legacy system from like 302 years ago. That’s what really kills it. New York, I don’t know, it has more money and the streets aren’t lined up so horribly. I heard someone say that Boston has half the amount of miles of track, but they have double the amount of workers. So they’re not really doing good from a business standpoint.</p>");
	

				const frontmatter = {"title":"Rafaele DiMaggio","description":"Rafaele has some problems with the Boston T.","pubDate":"2024-03-13 12:34","author":"Sam Wu","tags":["New York","Business"],"imgUrl":"../../assets/Rafaele_DiMaggio.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rafaele Dimaggio.md";
				const url = undefined;
				function rawContent() {
					return "# Rafaele DiMaggio\n\n![local image](../../assets/Rafaele_DiMaggio.JPG)\n\nBoston Transit sucks. It takes you about an hour to get anywhere and the T is about walking speed. In New York, you can get anywhere in like 30 minutes, which is pretty awesome.\n\nI think Boston is on a legacy system from like 302 years ago. That's what really kills it. New York, I don't know, it has more money and the streets aren't lined up so horribly. I heard someone say that Boston has half the amount of miles of track, but they have double the amount of workers. So they're not really doing good from a business standpoint. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rafaele-dimaggio","text":"Rafaele DiMaggio"}];
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
