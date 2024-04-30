import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z29tRWB = new Proxy({"src":"/_astro/Rigpea_Wangchuk.Fwvsk1k_.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rigpea_Wangchuk.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rigpea_Wangchuk.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rigpea_Wangchuk.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rigpea_Wangchuk.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z29tRWB, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rigpea-wangchuk\">Rigpea Wangchuk</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rigpea_Wangchuk.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I started off as a shy kid. My first semester I barely talked to people. I was a shut-in. Every night I could have gone out. But the thing is I stayed in. So my first year I focused on academics a lot</p>\n<p>The thing that caused the change was office hours. I just went, even if I had no work to do, and I just sat there and I started talking to a lot of people. I would approach people and say “Oh, hi. Hello. How’s that going?” My trick was to remember just one small thing that they did yesterday. I guess in that way I grew some sort of attachment and started forming friendships. That’s how I met a lot of the CS friends I made right now.</p>\n<p>I want to know other people’s personalities. I want to see what these characters are like in real life as well and hear about their stories and what they have been through. And it’s not like I started off like, oh shit, everybody talk, talk, talk. No. It started off with me going to one person and hearing and then slowly working it out. I got a job in orientation over the summer and I opened up a lot. It’s a place where you talk about so many aspects of your personal life which is not done back in India. But over here, you really see your own personalities, and in a way, your personality is also shaped in regards to what you see.</p>");
	

				const frontmatter = {"title":"Rigpea Wangchuk","description":"Starting as a shy and academically focused student, Rigpea's transformation was sparked by attending office hours.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Indian","Asian","International"],"imgUrl":"../../assets/Rigpea_Wangchuk.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rigpea Wangchuk.md";
				const url = undefined;
				function rawContent() {
					return "# Rigpea Wangchuk\n\n![local image](../../assets/Rigpea_Wangchuk.JPG)\n\nI started off as a shy kid. My first semester I barely talked to people. I was a shut-in. Every night I could have gone out. But the thing is I stayed in. So my first year I focused on academics a lot\n\nThe thing that caused the change was office hours. I just went, even if I had no work to do, and I just sat there and I started talking to a lot of people. I would approach people and say “Oh, hi. Hello. How’s that going?” My trick was to remember just one small thing that they did yesterday. I guess in that way I grew some sort of attachment and started forming friendships. That’s how I met a lot of the CS friends I made right now. \n\nI want to know other people’s personalities. I want to see what these characters are like in real life as well and hear about their stories and what they have been through. And it’s not like I started off like, oh shit, everybody talk, talk, talk. No. It started off with me going to one person and hearing and then slowly working it out. I got a job in orientation over the summer and I opened up a lot. It’s a place where you talk about so many aspects of your personal life which is not done back in India. But over here, you really see your own personalities, and in a way, your personality is also shaped in regards to what you see. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rigpea-wangchuk","text":"Rigpea Wangchuk"}];
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
