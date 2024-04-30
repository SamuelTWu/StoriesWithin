import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z4S0hb = new Proxy({"src":"/_astro/Esther_Choi.NUdAcOxg.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Esther_Choi.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Esther_Choi.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Esther_Choi.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Esther_Choi.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z4S0hb, ...props});
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
			const html = await updateImageReferences("<h1 id=\"esther-choi\">Esther Choi</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Esther_Choi.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I used to be less of a go-getter than I am now. Everything I did was kind of under my parent’s thumb. They were very strict. They cared a lot about grades and church. So basically all I did in high school was try to get good grades and go to church\nWhen I got to college, I got to grow into who I am. I became a little more extroverted, more of a go-getter. I tried to do things that I wanted to do rather than m what my parents wanted.</p>\n<p>When you’re in a strict household, it’s really hard to do what you enjoy and to have fun. I think that in college you should just try to have as much fun as possible. Some people might disagree with that. But I think you should really figure out what you like and it’s hard to do that when you’re in a strict house. My advice to those who left a strict house in college is to just have fun and enjoy your life. You know, it’s <em>your</em> life.</p>");
	

				const frontmatter = {"title":"Esther Choi","description":"Esther is transitioning from a strict upbringing to embracing independence and enjoyment.","pubDate":"2024-03-2 16:17","author":"Sam Wu","tags":["Massachusetts","CS","Asian"],"imgUrl":"../../assets/Esther_Choi.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Esther Choi.md";
				const url = undefined;
				function rawContent() {
					return "# Esther Choi\n\n![local image](../../assets/Esther_Choi.JPG)\n\nI used to be less of a go-getter than I am now. Everything I did was kind of under my parent’s thumb. They were very strict. They cared a lot about grades and church. So basically all I did in high school was try to get good grades and go to church\nWhen I got to college, I got to grow into who I am. I became a little more extroverted, more of a go-getter. I tried to do things that I wanted to do rather than m what my parents wanted. \n\nWhen you're in a strict household, it's really hard to do what you enjoy and to have fun. I think that in college you should just try to have as much fun as possible. Some people might disagree with that. But I think you should really figure out what you like and it's hard to do that when you're in a strict house. My advice to those who left a strict house in college is to just have fun and enjoy your life. You know, it's *your* life.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"esther-choi","text":"Esther Choi"}];
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
