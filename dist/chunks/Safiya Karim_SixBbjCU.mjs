import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1ge6Pp = new Proxy({"src":"/_astro/Safiya_Karim.2tB-GDk2.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Safiya_Karim.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Safiya_Karim.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Safiya_Karim.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Safiya_Karim.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1ge6Pp, ...props});
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
			const html = await updateImageReferences("<h1 id=\"safiya-karim\">Safiya Karim</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Safiya_Karim.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I grew up sitting in on my mom’s lectures. She’s a business strategy professor. Ever since I was little, I’ve been sitting in her classes just listening to business lectures and I thought it was really interesting. And so one day I looked at her and I was like, that’s what I want to do.</p>\n<p>I think that the world is too focused on picking sides to things instead of supporting each other. My major is marketing and finance. In the future, I hope to make the finance industry more peaceful and equal, especially since there are a lot of finance bro types.  I just wish it was less aggressive because I know the business world is very competitive.</p>");
	

				const frontmatter = {"title":"Safiya Karim","description":"Safiya goes from mom's lectures to aspiring to make finance more peaceful.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Business","Massachusetts"],"imgUrl":"../../assets/Safiya_Karim.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Safiya Karim.md";
				const url = undefined;
				function rawContent() {
					return "# Safiya Karim\n\n![local image](../../assets/Safiya_Karim.JPG)\n\nI grew up sitting in on my mom's lectures. She's a business strategy professor. Ever since I was little, I've been sitting in her classes just listening to business lectures and I thought it was really interesting. And so one day I looked at her and I was like, that's what I want to do.\n\nI think that the world is too focused on picking sides to things instead of supporting each other. My major is marketing and finance. In the future, I hope to make the finance industry more peaceful and equal, especially since there are a lot of finance bro types.  I just wish it was less aggressive because I know the business world is very competitive.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"safiya-karim","text":"Safiya Karim"}];
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
