import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1ye1px = new Proxy({"src":"/_astro/Meckenzie_Sarage.5uxQ06jm.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Meckenzie_Sarage.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Meckenzie_Sarage.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Meckenzie_Sarage.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Meckenzie_Sarage.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1ye1px, ...props});
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
			const html = await updateImageReferences("<h1 id=\"meckenzie-sarage\">Meckenzie Sarage</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Meckenzie_Sarage.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Don’t strive for perfection but improvement. If you dwell on perfection, you’re not going to gain a lot out of it. All we can really ask ourselves is to improve. Even if, instead of getting an A I got an A minus, asking, “Did I improve? Did I meet some new people?” That’s more important than perfection.</p>\n<p>I don’t know if I am a perfectionist per se, but I still struggle with it. I have very high standards for myself. If I don’t meet something or get a bad grade, especially if it’s a subject that I feel like I should know a lot about, I feel disheartened. I feel a lot of anxiety like it’s the end of the world. I’ve definitely had to change my mindset from wanting perfection to improvement, to be ok with a grade I get, and to make the most out of my time at BU.</p>");
	

				const frontmatter = {"title":"Meckenzie Sarage","description":"Meckenzie is striving for improvement over perfection, battling high standards and anxiety.","pubDate":"2024-02-22 11:15","author":"Sam Wu","tags":["IR","Human Rights","Massachusetts"],"imgUrl":"../../assets/Meckenzie_Sarage.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Meckenzie Sarage.md";
				const url = undefined;
				function rawContent() {
					return "# Meckenzie Sarage\n\n![local image](../../assets/Meckenzie_Sarage.JPG)\n\nDon't strive for perfection but improvement. If you dwell on perfection, you're not going to gain a lot out of it. All we can really ask ourselves is to improve. Even if, instead of getting an A I got an A minus, asking, “Did I improve? Did I meet some new people?” That's more important than perfection.\n\nI don't know if I am a perfectionist per se, but I still struggle with it. I have very high standards for myself. If I don't meet something or get a bad grade, especially if it's a subject that I feel like I should know a lot about, I feel disheartened. I feel a lot of anxiety like it’s the end of the world. I've definitely had to change my mindset from wanting perfection to improvement, to be ok with a grade I get, and to make the most out of my time at BU. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"meckenzie-sarage","text":"Meckenzie Sarage"}];
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
