import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1WRh4B = new Proxy({"src":"/_astro/Avery_Smith.PNHKe-lz.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Avery_Smith.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Avery_Smith.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Avery_Smith.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Avery_Smith.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1WRh4B, ...props});
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
			const html = await updateImageReferences("<h1 id=\"avery-smith\">Avery Smith</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Avery_Smith.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>On the basic level, if you’re trying to understand someone, you need to lead with kindness. Even in political spaces, when we’re trying to solve international conflicts, if the first step isn’t being kind, it’s not going to be successful at all.</p>\n<p>We recently had a seminar where this amazing speaker, Mary Brown, came in and gave a speech about love and its importance. It’s been great learning about that. One of my professors hosted a seminar to celebrate the Good Friday Agreement, which was one of the agreements that ended the troubles in Northern Ireland. One of the signers was there and 25 years ago when all the conflict was happening, she led the women’s Coalition for Northern Ireland and was able to be a huge part in starting the conversations and eventually signing the peace agreement. Hearing her speak and hearing her knowledge and wisdom was super interesting. She also talked about the importance of being kind and caring and thinking about humans first.</p>");
	

				const frontmatter = {"title":"Avery Smith","description":"For Avery, kindness is essential for understanding and solving conflicts worldwide.","pubDate":"2024-02-29 21:11","author":"Sam Wu","tags":["Wisconsin","Philosophy","Poli Sci"],"imgUrl":"../../assets/Avery_Smith.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Avery Smith.md";
				const url = undefined;
				function rawContent() {
					return "# Avery Smith\n\n![local image](../../assets/Avery_Smith.JPG)\n\nOn the basic level, if you’re trying to understand someone, you need to lead with kindness. Even in political spaces, when we're trying to solve international conflicts, if the first step isn't being kind, it's not going to be successful at all.\n\nWe recently had a seminar where this amazing speaker, Mary Brown, came in and gave a speech about love and its importance. It’s been great learning about that. One of my professors hosted a seminar to celebrate the Good Friday Agreement, which was one of the agreements that ended the troubles in Northern Ireland. One of the signers was there and 25 years ago when all the conflict was happening, she led the women's Coalition for Northern Ireland and was able to be a huge part in starting the conversations and eventually signing the peace agreement. Hearing her speak and hearing her knowledge and wisdom was super interesting. She also talked about the importance of being kind and caring and thinking about humans first.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"avery-smith","text":"Avery Smith"}];
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
