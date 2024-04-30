import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1h4BOi = new Proxy({"src":"/_astro/Mike_Campbell.bUxhhMfO.jpeg","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Mike_Campbell.jpeg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Mike_Campbell.jpeg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Mike_Campbell.jpeg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Mike_Campbell.jpeg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1h4BOi, ...props});
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
			const html = await updateImageReferences("<h1 id=\"mike-campbell\">Mike Campbell</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Mike_Campbell.jpeg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’m from Long Island, I went to a Catholic school. My family’s Irish. <em>Irish</em>, Irish. My dad is conservative, so I’m from a 50/50 liberal to conservative family. But I feel like I’d always kind of grown up in the more left-camp side of things. I would say in high school I was definitely much more conscious of the way people thought of me. And I think I was much less open-minded. I mean, I’d always been quote-unquote liberal, but not as open-minded to trying new things. But when I got to BU, it was like, oh, wow. You meet people from all around the world thinking all different things. On both ends of the spectrum: I met people with way more conservative views and that’s been interesting.</p>\n<p>I think I’ve grown a lot more open-minded. I have an appreciation for how big the world is.\nI feel like everybody’s got mental models of the world and when you go to BU and see folks from all around the world, you realize yours is not gonna be accurate. So you’re gonna need to readjust. I had to slowly look at things differently; classes have been definitely great at making me look at institutions a little more skeptically.</p>\n<p>I also feel like there are just a lot more serious conversations in college. It’s just a very different environment from high school. I think even just talking to people about the world and their own life experiences and stuff makes you more skeptical about any one answer. And I like listening to folks about whatever they’re passionate about, even if I’m not interested in it. And I want to live in several places besides the United States. Because I feel like that’s a good thing to kind of, you know, get your head out your ass a bit.</p>");
	

				const frontmatter = {"title":"Mike Campbell","description":"Mike talks about growing up on Long Island and what it's like at BU.","pubDate":"2024-02-10 12:51","author":"Sam Wu","tags":["IR","New York"],"imgUrl":"../../assets/Mike_Campbell.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Mike Cambell.md";
				const url = undefined;
				function rawContent() {
					return "# Mike Campbell\n\n![local image](../../assets/Mike_Campbell.jpeg)\n\nI’m from Long Island, I went to a Catholic school. My family’s Irish. _Irish_, Irish. My dad is conservative, so I’m from a 50/50 liberal to conservative family. But I feel like I'd always kind of grown up in the more left-camp side of things. I would say in high school I was definitely much more conscious of the way people thought of me. And I think I was much less open-minded. I mean, I'd always been quote-unquote liberal, but not as open-minded to trying new things. But when I got to BU, it was like, oh, wow. You meet people from all around the world thinking all different things. On both ends of the spectrum: I met people with way more conservative views and that's been interesting.\n\nI think I've grown a lot more open-minded. I have an appreciation for how big the world is.\nI feel like everybody's got mental models of the world and when you go to BU and see folks from all around the world, you realize yours is not gonna be accurate. So you're gonna need to readjust. I had to slowly look at things differently; classes have been definitely great at making me look at institutions a little more skeptically.\n\nI also feel like there are just a lot more serious conversations in college. It's just a very different environment from high school. I think even just talking to people about the world and their own life experiences and stuff makes you more skeptical about any one answer. And I like listening to folks about whatever they're passionate about, even if I'm not interested in it. And I want to live in several places besides the United States. Because I feel like that's a good thing to kind of, you know, get your head out your ass a bit.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mike-campbell","text":"Mike Campbell"}];
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
