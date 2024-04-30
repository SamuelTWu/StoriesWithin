import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1SxCW9 = new Proxy({"src":"/_astro/Samaa_Rasheed.BmgVixvG.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Samaa_Rasheed.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Samaa_Rasheed.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Samaa_Rasheed.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Samaa_Rasheed.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1SxCW9, ...props});
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
			const html = await updateImageReferences("<h1 id=\"samaa-rasheed\">Samaa Rasheed</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Samaa_Rasheed.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I went to Lowell, a magnet high school in San Francisco. I had to take a three-hour exam in middle school and then I had to write a personal statement. I never thought I was that smart growing up because I learned Urdu before english, so I was really behind on reading and writing. It’s really tough when you don’t know how to read and everyone else does. My best friend taught me how to read because she knew way before me and clearly it was advanced enough to teach someone else. And so I guess I went to that school to prove myself.</p>\n<p>But I got to Lowell and I definitely still felt that I was not as smart as my peers. And so my personality was just me trying to prove that I was a certain type of person.</p>\n<p>I was part of a program called Nextgen Girls which was a program for girls from either underserved communities to get an opportunity to do lab research at very prestigious institutes. I think that was the first time that I felt a little special. Because my boss, who I’m still in contact with, she was the first person to be like, “Oh, you’re actually capable.” It felt good that she acknowledged my hard work.</p>");
	

				const frontmatter = {"title":"Samaa Rasheed","description":"Samaa reflects on her time at a magnet high school in San Francisco.","pubDate":"2024-02-29 21:11","author":"Sam Wu","tags":["California","Pakistani","Human Physiology"],"imgUrl":"../../assets/Samaa_Rasheed.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Samaa Rasheed.md";
				const url = undefined;
				function rawContent() {
					return "# Samaa Rasheed\n\n![local image](../../assets/Samaa_Rasheed.JPG)\n\nI went to Lowell, a magnet high school in San Francisco. I had to take a three-hour exam in middle school and then I had to write a personal statement. I never thought I was that smart growing up because I learned Urdu before english, so I was really behind on reading and writing. It's really tough when you don't know how to read and everyone else does. My best friend taught me how to read because she knew way before me and clearly it was advanced enough to teach someone else. And so I guess I went to that school to prove myself.  \n\nBut I got to Lowell and I definitely still felt that I was not as smart as my peers. And so my personality was just me trying to prove that I was a certain type of person.\n\nI was part of a program called Nextgen Girls which was a program for girls from either underserved communities to get an opportunity to do lab research at very prestigious institutes. I think that was the first time that I felt a little special. Because my boss, who I'm still in contact with, she was the first person to be like, \"Oh, you're actually capable.\" It felt good that she acknowledged my hard work. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"samaa-rasheed","text":"Samaa Rasheed"}];
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
