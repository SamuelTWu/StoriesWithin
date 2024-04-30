import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__81wN4 = new Proxy({"src":"/_astro/Rithvik_Doshi.ZbxeH6NO.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rithvik_Doshi.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rithvik_Doshi.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rithvik_Doshi.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rithvik_Doshi.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__81wN4, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rithvik-doshi\">Rithvik Doshi</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rithvik_Doshi.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I feel like in college, I started being more honest with myself, trying to figure out who I am and how not to define myself in relation to other people or like by comparing myself to other people. At the same time, I feel like I’m still trying to break down specific behaviors that I have and that have been carried on from my parents that can be counterproductive to myself or can sometimes hurt other people.</p>\n<p>Like, I’ve kind of started to accept that it’s okay if I’m not the best at something. I don’t even have to be trying my best because sometimes that’s like, very exhausting. Like, imagine you’re giving your 100% every single day, and while some people like to say that they do that, it’s just very hard to actually do that. I think as long as I enjoy what I’m doing, I’m in the right place, and if I don’t enjoy what I’m doing then I have to stop doing that.</p>\n<p>That’s sort of like the perspective that music has given me. I still enjoy it so I keep doing it, I guess. Sometimes I’m just going around my life and a song is playing in my head, or like, something I’m composing and I’m like, wait, this is a good idea. Also, it’s cool to collaborate with good musicians and make some good music. Yeah, yeah. Yeah…..</p>\n<p>Woah what’s that? <em>points to floor</em> <em>sees the got ‘em sign</em> <em>sprints away at half the speed of light</em> <em>end of transcript</em></p>");
	

				const frontmatter = {"title":"Rithvik Doshi","description":"Rithvik is on a journey of self-discovery and working to break down counterproductive behaviors.","pubDate":"2024-01-30 09:27","author":"Sam Wu","tags":["CS","California","Music","Indian","Asian"],"imgUrl":"../../assets/Rithvik_Doshi.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rithvik Doshi.md";
				const url = undefined;
				function rawContent() {
					return "# Rithvik Doshi\n\n![local image](../../assets/Rithvik_Doshi.JPG)\n\nI feel like in college, I started being more honest with myself, trying to figure out who I am and how not to define myself in relation to other people or like by comparing myself to other people. At the same time, I feel like I'm still trying to break down specific behaviors that I have and that have been carried on from my parents that can be counterproductive to myself or can sometimes hurt other people.\n\nLike, I've kind of started to accept that it's okay if I'm not the best at something. I don't even have to be trying my best because sometimes that's like, very exhausting. Like, imagine you're giving your 100% every single day, and while some people like to say that they do that, it's just very hard to actually do that. I think as long as I enjoy what I'm doing, I'm in the right place, and if I don't enjoy what I'm doing then I have to stop doing that.\n\nThat's sort of like the perspective that music has given me. I still enjoy it so I keep doing it, I guess. Sometimes I'm just going around my life and a song is playing in my head, or like, something I'm composing and I'm like, wait, this is a good idea. Also, it's cool to collaborate with good musicians and make some good music. Yeah, yeah. Yeah…..\n\nWoah what’s that? *points to floor* *sees the got ‘em sign* *sprints away at half the speed of light* *end of transcript*\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rithvik-doshi","text":"Rithvik Doshi"}];
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
