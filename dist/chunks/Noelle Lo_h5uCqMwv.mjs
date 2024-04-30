import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1DNn = new Proxy({"src":"/_astro/Noelle_Lo.qgX47lJf.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Noelle_Lo.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Noelle_Lo.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Noelle_Lo.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Noelle_Lo.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1DNn, ...props});
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
			const html = await updateImageReferences("<h1 id=\"noelle-lo\">Noelle Lo</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Noelle_Lo.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Be kinder and forgive more. Our generation is so smart and so brilliant, but we forget how to forgive and we forget how to give second chances. In a harsh world where we all want to succeed and see change, we also have to be changed. And be understanding and realize we’re all young and we all make mistakes.</p>\n<p>I someday want to be in the media as a journalist and as an activist, but I’ve still made a lot of mistakes in my life. Sometimes I’ve failed to do all the research or said something that wasn’t well-informed and didn’t sit right. But for me, I’m so lucky that I still get to change. Because I had people who were able to forgive me and I was also able to acknowledge my mistakes and be forgiven. Everyone in life deserves that.</p>");
	

				const frontmatter = {"title":"Noelle Lo","description":"Noelle discusses the importance of forgiveness ad learning from one's mistakes.","pubDate":"2024-03-15 13:08","author":"Sam Wu","tags":["Hawaii","Advertising","Asian"],"imgUrl":"../../assets/Noelle_Lo.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Noelle Lo.md";
				const url = undefined;
				function rawContent() {
					return "# Noelle Lo\n\n![local image](../../assets/Noelle_Lo.JPG)\n\nBe kinder and forgive more. Our generation is so smart and so brilliant, but we forget how to forgive and we forget how to give second chances. In a harsh world where we all want to succeed and see change, we also have to be changed. And be understanding and realize we're all young and we all make mistakes. \n\nI someday want to be in the media as a journalist and as an activist, but I’ve still made a lot of mistakes in my life. Sometimes I’ve failed to do all the research or said something that wasn’t well-informed and didn’t sit right. But for me, I'm so lucky that I still get to change. Because I had people who were able to forgive me and I was also able to acknowledge my mistakes and be forgiven. Everyone in life deserves that.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"noelle-lo","text":"Noelle Lo"}];
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
