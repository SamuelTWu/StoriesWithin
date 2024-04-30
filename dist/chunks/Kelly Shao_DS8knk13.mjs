import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__57iE0 = new Proxy({"src":"/_astro/Kelly_Shao.fKhv2ZYI.jpg","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kelly_Shao.jpg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kelly_Shao.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Kelly_Shao.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Kelly_Shao.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__57iE0, ...props});
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
			const html = await updateImageReferences("<h1 id=\"kelly-shao\">Kelly Shao</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Kelly_Shao.jpg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I like the freedom. I like the feeling that comes with it. But also I love to see how people react to my performances. I remember I played Tanya in Mama Mia and some people would come up to me and be like “You were my favorite. You stole the show. I love when you did this, I love when you did that.” And that’s always super cool.</p>\n<p>If you can touch somebody in some way, whether that be making them reflect or making them have a really good time. Like, to make people feel I think is really interesting. But also like for performers, it’s our own release and enjoyment as well, right? If it’s like something where you also get to feel in that moment, whatever that may be, that’s also an exhilarating thing to experience.</p>\n<p>In theater, I’m really alive, and sometimes in business, I feel like a machine. But not an emotionless machine. More like, I’m cool. I’m in control. I’m very precise and I almost like a, what is it, an academic weapon? I guess for me, I just feel like a weapon inside the business world which can be thrilling because I know I’m capable and I can deliver immense value. I feel like those are some of the key things that make a good business person.</p>\n<p>You need to have a strong mentality. You need to stick to your guns. We see a lot of situations with our client teams. In BU Consulting Group, the client may have additional asks and some people will cave to it. They have a hard time defending their team. If I were the team leader, I would be like, I can’t do that because my team can’t handle it. We don’t have that much time. I know why they were in that situation because they wanted to make the client happy, which is also understandable, right? But as a leader, you need to know your limits and know your team’s limits and you should be advocating for everyone’s best interests.</p>");
	

				const frontmatter = {"title":"Kelly Shao","description":"Kelly discusses performance, impact, and business.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Business","New Jersey","Asian","Chinese"],"imgUrl":"../../assets/Kelly_Shao.png","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Kelly Shao.md";
				const url = undefined;
				function rawContent() {
					return "# Kelly Shao\n\n![local image](../../assets/Kelly_Shao.jpg)\n\nI like the freedom. I like the feeling that comes with it. But also I love to see how people react to my performances. I remember I played Tanya in Mama Mia and some people would come up to me and be like “You were my favorite. You stole the show. I love when you did this, I love when you did that.” And that's always super cool.\n\nIf you can touch somebody in some way, whether that be making them reflect or making them have a really good time. Like, to make people feel I think is really interesting. But also like for performers, it's our own release and enjoyment as well, right? If it's like something where you also get to feel in that moment, whatever that may be, that's also an exhilarating thing to experience.\n\nIn theater, I'm really alive, and sometimes in business, I feel like a machine. But not an emotionless machine. More like, I'm cool. I'm in control. I’m very precise and I almost like a, what is it, an academic weapon? I guess for me, I just feel like a weapon inside the business world which can be thrilling because I know I'm capable and I can deliver immense value. I feel like those are some of the key things that make a good business person.\n\nYou need to have a strong mentality. You need to stick to your guns. We see a lot of situations with our client teams. In BU Consulting Group, the client may have additional asks and some people will cave to it. They have a hard time defending their team. If I were the team leader, I would be like, I can't do that because my team can't handle it. We don't have that much time. I know why they were in that situation because they wanted to make the client happy, which is also understandable, right? But as a leader, you need to know your limits and know your team's limits and you should be advocating for everyone's best interests.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"kelly-shao","text":"Kelly Shao"}];
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
