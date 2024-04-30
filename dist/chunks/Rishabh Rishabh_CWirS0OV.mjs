import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1CNy04 = new Proxy({"src":"/_astro/Rishabh_Rishabh.3KM6ZO6Y.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rishabh_Rishabh.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rishabh_Rishabh.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rishabh_Rishabh.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rishabh_Rishabh.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1CNy04, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rishabh\">Rishabh</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rishabh_Rishabh.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>One thing that everyone knows but no one thinks about it is that everything that happens throughout the universe happens in such a way that it takes the least amount of energy.\nImagine a leaf falls. It’s going to go straight down in the absence of air, of course. But it could have taken any path.</p>\n<p>I’m an engineer, so this concept has affected me a lot. When you think about, say, materials shrinking or deforming, it can be used to solve quite a lot of problems. If you want to look at the solid mechanics, we can arrive at those equations by just minimizing the energy. So you can basically come to the constitutive equation, which is what stress is, by minimizing the potential and the kinetic energy. Which I find interesting.</p>");
	

				const frontmatter = {"title":"Rishabh","description":"Rishabh reflects on the universal principle that all events occur in a way that minimizes energy.","pubDate":"2024-02-25 12:20","author":"Sam Wu","tags":["Asian","Indian","Engineering","International"],"imgUrl":"../../assets/Rishabh_Rishabh.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rishabh Rishabh.md";
				const url = undefined;
				function rawContent() {
					return "# Rishabh\n\n![local image](../../assets/Rishabh_Rishabh.JPG)\n\nOne thing that everyone knows but no one thinks about it is that everything that happens throughout the universe happens in such a way that it takes the least amount of energy.\nImagine a leaf falls. It's going to go straight down in the absence of air, of course. But it could have taken any path. \n\nI’m an engineer, so this concept has affected me a lot. When you think about, say, materials shrinking or deforming, it can be used to solve quite a lot of problems. If you want to look at the solid mechanics, we can arrive at those equations by just minimizing the energy. So you can basically come to the constitutive equation, which is what stress is, by minimizing the potential and the kinetic energy. Which I find interesting.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rishabh","text":"Rishabh"}];
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
