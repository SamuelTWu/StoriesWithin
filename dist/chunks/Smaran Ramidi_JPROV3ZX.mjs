import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__2dT5pv = new Proxy({"src":"/_astro/Smaran_Ramidi.vUSJ4GdS.jpeg","width":1920,"height":1080,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Smaran_Ramidi.jpeg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Smaran_Ramidi.jpeg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Smaran_Ramidi.jpeg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Smaran_Ramidi.jpeg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__2dT5pv, ...props});
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
			const html = await updateImageReferences("<h1 id=\"smaran-ramidi\">Smaran Ramidi</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Smaran_Ramidi.jpeg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I have an appreciation for people. My best times are around people. I just appreciate getting to know people and learning so much about what makes them them. If I spend more than 24 hours by myself with little interaction with people, I start feeling emotionally drained, which is the complete opposite of a lot of people.</p>\n<p>I have mellowed out a lot. I’ve actually got so many Snapchat memories recently of how I was freshman year and I mellowed out a lot more. I used to be a lot more flamboyant, but now I’m more reserved. I’ve honestly matured. I’m more focused. It could be the stress. I feel like I’ve taken on 50 years being here. It’s crazy.</p>\n<p>My mindset on everything has changed and I think a part of it is just growing up far away from my parents. I’ve been in Boston for the last two summers. I’m supposed to be in Boston this summer again. This has become my home. My parents hate to hear it and they make fun of me for it. But when I say home, I say here because I’ve spent the last two years of my life here. Going back to Ohio is kind of a break.</p>\n<p>That’s a part of what has mellowed me out. Going between the school year where I know so many people to the summer when I don’t know anyone. It’s been important adapting to what it’s like to be alone and on your own.</p>");
	

				const frontmatter = {"title":"Smaran Ramidi","description":"Smaran talks about valuing connections, mellowing out, and finding home away from home.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["IR","Biology","Ohio","Indian","Asian"],"imgUrl":"../../assets/Smaran_Ramidi.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Smaran Ramidi.md";
				const url = undefined;
				function rawContent() {
					return "# Smaran Ramidi\n\n![local image](../../assets/Smaran_Ramidi.jpeg)\n\nI have an appreciation for people. My best times are around people. I just appreciate getting to know people and learning so much about what makes them them. If I spend more than 24 hours by myself with little interaction with people, I start feeling emotionally drained, which is the complete opposite of a lot of people.\n\nI have mellowed out a lot. I've actually got so many Snapchat memories recently of how I was freshman year and I mellowed out a lot more. I used to be a lot more flamboyant, but now I'm more reserved. I've honestly matured. I'm more focused. It could be the stress. I feel like I've taken on 50 years being here. It's crazy. \n\nMy mindset on everything has changed and I think a part of it is just growing up far away from my parents. I've been in Boston for the last two summers. I'm supposed to be in Boston this summer again. This has become my home. My parents hate to hear it and they make fun of me for it. But when I say home, I say here because I've spent the last two years of my life here. Going back to Ohio is kind of a break.\n\nThat's a part of what has mellowed me out. Going between the school year where I know so many people to the summer when I don't know anyone. It’s been important adapting to what it's like to be alone and on your own.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"smaran-ramidi","text":"Smaran Ramidi"}];
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
