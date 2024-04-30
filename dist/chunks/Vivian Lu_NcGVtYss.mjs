import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z289tua = new Proxy({"src":"/_astro/Vivian_Lu.RCgfUBv0.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Vivian_Lu.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Vivian_Lu.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Vivian_Lu.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Vivian_Lu.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z289tua, ...props});
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
			const html = await updateImageReferences("<h1 id=\"vivian-lu\">Vivian Lu</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Vivian_Lu.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’m an only child. So no siblings, just my mom and I. It was a really hard relationship with my mom at times. Even if she’s not physically there, it just kind of feels suffocating in the house. So there were times when just had to get out of there.\nBeing outside and hanging with friends was a way to fill up time. My friends and I would go to the BPL to do homework. We would go there to cram all of our homework in before the due date. But it was fun because all of us were going through it and suffering together. Our spot was in the basement with the colored rooms.</p>\n<p>Our school was majority low-income first-gen. And then there were the white people, some of them were just really rich. Well, I’d say middle class because if they had the money they wouldn’t go here.</p>\n<p>I think BU is just kind of insane. I am low-income, so honestly, I can’t imagine the amount of money some people have. I can’t envision it. So for people to be spending the way that they’re spending and telling me how much they have, it’s insane.\nIt’s always surprising to me. I’m always in shock when I come across very wealthy people because even our mindsets are very different. For me, I don’t ask my parents for money. I work and that’s how I get my money. I don’t blow it all. I tell myself I have less than what I have so that in case of emergencies. For others, it’s like, yeah, Blew all my money today. I’m going to ask my parents for more money, and I’m like, what? It never occurred to me that that was an option. It’s crazy how other people do it so easily. I think I also have guilt whenever it comes to my parents giving me money. Even for a birthday.</p>\n<p>There’s just a lot you have to learn. The biggest part is learning how to say no. If they’re like, we should catch up and grab food, saying like, actually can we just eat at the dining hall, so that like I’m not spending my own money. If like they’re like, hey we’re going out, sometimes I would be like, OK, you guys have fun. I’ll catch y’all next time or something like that. I am very careful with spending my money. I don’t really, I don’t really live paycheck to paycheck type of way.</p>\n<p>I would love to go spend quality time with people, but I also feel that won’t be the only time I’ll ever get to see them. If so I would go. But a lot of my hangouts consist of doing work together. It’s very inexpensive. A lot of my friends are not rich. It’s very understandable for me to be like, can we do something cheap, or, I don’t have the funds right now to be eating out. They’re very understanding.</p>");
	

				const frontmatter = {"title":"Vivian Lu","description":"As an only child in a single-parent household, Vivian sees lifestyle differences between the herself and her peers.","pubDate":"2024-03-16 21:06","author":"Sam Wu","tags":["Psychology","Massachusetts","Health Science"],"imgUrl":"../../assets/Vivian_Lu.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Vivian Lu.md";
				const url = undefined;
				function rawContent() {
					return "# Vivian Lu\n\n![local image](../../assets/Vivian_Lu.JPG)\n\nI’m an only child. So no siblings, just my mom and I. It was a really hard relationship with my mom at times. Even if she's not physically there, it just kind of feels suffocating in the house. So there were times when just had to get out of there.\nBeing outside and hanging with friends was a way to fill up time. My friends and I would go to the BPL to do homework. We would go there to cram all of our homework in before the due date. But it was fun because all of us were going through it and suffering together. Our spot was in the basement with the colored rooms.\n\nOur school was majority low-income first-gen. And then there were the white people, some of them were just really rich. Well, I'd say middle class because if they had the money they wouldn't go here. \n\nI think BU is just kind of insane. I am low-income, so honestly, I can’t imagine the amount of money some people have. I can't envision it. So for people to be spending the way that they're spending and telling me how much they have, it's insane.\nIt's always surprising to me. I'm always in shock when I come across very wealthy people because even our mindsets are very different. For me, I don't ask my parents for money. I work and that's how I get my money. I don't blow it all. I tell myself I have less than what I have so that in case of emergencies. For others, it's like, yeah, Blew all my money today. I'm going to ask my parents for more money, and I'm like, what? It never occurred to me that that was an option. It's crazy how other people do it so easily. I think I also have guilt whenever it comes to my parents giving me money. Even for a birthday. \n\nThere’s just a lot you have to learn. The biggest part is learning how to say no. If they're like, we should catch up and grab food, saying like, actually can we just eat at the dining hall, so that like I'm not spending my own money. If like they're like, hey we're going out, sometimes I would be like, OK, you guys have fun. I'll catch y'all next time or something like that. I am very careful with spending my money. I don't really, I don't really live paycheck to paycheck type of way.\n\nI would love to go spend quality time with people, but I also feel that won't be the only time I’ll ever get to see them. If so I would go. But a lot of my hangouts consist of doing work together. It’s very inexpensive. A lot of my friends are not rich. It’s very understandable for me to be like, can we do something cheap, or, I don't have the funds right now to be eating out. They're very understanding.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"vivian-lu","text":"Vivian Lu"}];
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
