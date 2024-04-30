import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZeOKi5 = new Proxy({"src":"/_astro/Precious_Amiewalan.USSLujFV.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Precious_Amiewalan.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Precious_Amiewalan.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Precious_Amiewalan.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Precious_Amiewalan.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZeOKi5, ...props});
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
			const html = await updateImageReferences("<h1 id=\"precious-amiewalan\">Precious Amiewalan</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Precious_Amiewalan.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was born in Nigeria and my parents and us moved here when I was around seven or so. My mom owns two businesses so I would help her a lot as a kid for the salon.  So I think I was just into saving at like, the age of 12 or, yeah.</p>\n<p>I don’t stay in things for too long. I think it was probably like the ADHD. My parents just thought I was bored. I would do random things. I was in ballet for a year. Violin, gave up on that. Yeah, it was just alternating between those. Finally, I was like, you know what, my heart lies with the money.</p>\n<p>So I became interested in business. I’d watch business videos to improve my mom’s business because I was like, if she’s richer that means I’m richer. She would say that to me too. It’d be like a trade-off. She would do my hair for hours at a time I’d be on the laptop trying to be like, Mom, what’s your login? Let’s do these like tax forms now. Or I’d take a break to read. And since I was the youngest I knew more about the internet than my brothers did. So they would come to me for that or I would teach them like citizenship things and quiz them on that. My dad was doing like, I think an associate’s degree when I was younger too. So I would quiz him and I would quiz my mom. So yeah, I would be the one that did it for them.</p>");
	

				const frontmatter = {"title":"Precious Amiewalan","description":"Immigrating to the US from Nigeria, Precious explored various interests and found a passion for business.","pubDate":"2024-01-29 18:57","author":"Sam Wu","tags":["Pre Med","Childhood","Nigeria","Black"],"imgUrl":"../../assets/Precious_Amiewalan.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Precious Amiewalan.md";
				const url = undefined;
				function rawContent() {
					return "# Precious Amiewalan\n\n![local image](../../assets/Precious_Amiewalan.JPG)\n\nI was born in Nigeria and my parents and us moved here when I was around seven or so. My mom owns two businesses so I would help her a lot as a kid for the salon.  So I think I was just into saving at like, the age of 12 or, yeah.\n\nI don't stay in things for too long. I think it was probably like the ADHD. My parents just thought I was bored. I would do random things. I was in ballet for a year. Violin, gave up on that. Yeah, it was just alternating between those. Finally, I was like, you know what, my heart lies with the money.\n\nSo I became interested in business. I'd watch business videos to improve my mom's business because I was like, if she's richer that means I'm richer. She would say that to me too. It'd be like a trade-off. She would do my hair for hours at a time I'd be on the laptop trying to be like, Mom, what's your login? Let's do these like tax forms now. Or I'd take a break to read. And since I was the youngest I knew more about the internet than my brothers did. So they would come to me for that or I would teach them like citizenship things and quiz them on that. My dad was doing like, I think an associate’s degree when I was younger too. So I would quiz him and I would quiz my mom. So yeah, I would be the one that did it for them. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"precious-amiewalan","text":"Precious Amiewalan"}];
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
