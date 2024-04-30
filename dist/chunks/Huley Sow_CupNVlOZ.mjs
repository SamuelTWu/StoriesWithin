import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZQbp2A = new Proxy({"src":"/_astro/Huley_Sow.8BR6NHz2.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Huley_Sow.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Huley_Sow.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Huley_Sow.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Huley_Sow.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZQbp2A, ...props});
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
			const html = await updateImageReferences("<h1 id=\"huley-sow\">Huley Sow</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Huley_Sow.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>At some point in my freshman year, I started to realize everything I was doing in college wasn’t for myself. Like, I felt like it was for myself and I was enjoying it, but at some point it felt like everything I was doing was for my parents. I was making them proud. It was less about what makes me happy.</p>\n<p>I came in as Pre-Med / Biology. It was something I wanted to do since forever. But at some point in high school, I was like, I don’t want to go to med school. I expressed that to my parents, and they were like, no. They’re just like, no. What are you gonna do? I was like, I want to be a midwife. And they were like, no, why would you be a midwife? Like a nurse or whatever? You could be a doctor! And I was like, I guess that makes sense.</p>\n<p>I got to college and started to do the actual coursework and realized I didn’t have enough drive to do this. It’s just annoying and disappointing. I had to grapple with my identity and what I wanted to do for a living. Which is hard.</p>\n<p>I’m still in medicine, but it’s not pre-med. It’s still true that I always wanted to be a medicine, but I didn’t want to do it on that path. I realize that I’m my own person and I’m here to do something for my own life.</p>");
	

				const frontmatter = {"title":"Huley Sow","description":"College revealed a career difference to Huley, who is prioritizing discovery over approval.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Speech","Anthropology","Black","Georgia"],"imgUrl":"../../assets/Huley_Sow.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Huley Sow.md";
				const url = undefined;
				function rawContent() {
					return "# Huley Sow\n\n![local image](../../assets/Huley_Sow.JPG)\n\nAt some point in my freshman year, I started to realize everything I was doing in college wasn't for myself. Like, I felt like it was for myself and I was enjoying it, but at some point it felt like everything I was doing was for my parents. I was making them proud. It was less about what makes me happy. \n\nI came in as Pre-Med / Biology. It was something I wanted to do since forever. But at some point in high school, I was like, I don't want to go to med school. I expressed that to my parents, and they were like, no. They're just like, no. What are you gonna do? I was like, I want to be a midwife. And they were like, no, why would you be a midwife? Like a nurse or whatever? You could be a doctor! And I was like, I guess that makes sense.\n\nI got to college and started to do the actual coursework and realized I didn't have enough drive to do this. It's just annoying and disappointing. I had to grapple with my identity and what I wanted to do for a living. Which is hard. \n\nI'm still in medicine, but it’s not pre-med. It’s still true that I always wanted to be a medicine, but I didn't want to do it on that path. I realize that I'm my own person and I'm here to do something for my own life. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"huley-sow","text":"Huley Sow"}];
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
