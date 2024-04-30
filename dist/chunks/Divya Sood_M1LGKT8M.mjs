import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__jValX = new Proxy({"src":"/_astro/Divya_Sood.JNcIZZ_d.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Divya_Sood.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Divya_Sood.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Divya_Sood.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Divya_Sood.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__jValX, ...props});
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
			const html = await updateImageReferences("<h1 id=\"divya-sood\">Divya Sood</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Divya_Sood.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I have always liked to write and talk about my experiences from the lens of reflecting on them. In middle school, I used to watch a lot of YouTubers and wanted to be that person. So I just started a blog in quarantine and I wrote one post.</p>\n<p>That’s where it started. I wrote a couple of posts. I wrote a reflection post about the transition to college from the COVID-19 perspective in November. So it was a lot of reflecting on my experiences.\nI think that especially for reflec\ntion-oriented posts where it’s very organic, like, I’m not creating content - I’m not like a business with a blog trying to create content to push customers. It’s just something that I felt like doing. I think it’s important for me to have that space to live my life and get those reflections as opposed to letting the content creation drive me.</p>");
	

				const frontmatter = {"title":"Divya Sood","description":"Divya has a longstanding interest in writing and reflecting on personal experiences.","pubDate":"2024-01-30 09:32","author":"Sam Wu","tags":["Influencer","Covid-19","Indian","Asian"],"imgUrl":"../../assets/Divya_Sood.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Divya Sood.md";
				const url = undefined;
				function rawContent() {
					return "# Divya Sood\n\n![local image](../../assets/Divya_Sood.JPG)\n\nI have always liked to write and talk about my experiences from the lens of reflecting on them. In middle school, I used to watch a lot of YouTubers and wanted to be that person. So I just started a blog in quarantine and I wrote one post. \n\nThat’s where it started. I wrote a couple of posts. I wrote a reflection post about the transition to college from the COVID-19 perspective in November. So it was a lot of reflecting on my experiences. \nI think that especially for reflec\ntion-oriented posts where it’s very organic, like, I’m not creating content - I’m not like a business with a blog trying to create content to push customers. It’s just something that I felt like doing. I think it’s important for me to have that space to live my life and get those reflections as opposed to letting the content creation drive me.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"divya-sood","text":"Divya Sood"}];
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
