import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2eOp6I = new Proxy({"src":"/_astro/Diana_Reno.c8aiBG-b.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Diana_Reno.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Diana_Reno.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Diana_Reno.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Diana_Reno.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2eOp6I, ...props});
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
			const html = await updateImageReferences("<h1 id=\"diana-reno\">Diana Reno</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Diana_Reno.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I had planned to go to public school for my whole life. But in the sixth grade, we moved to Westport Massachusetts. The teachers are fantastic. It’s Massachusetts so you get a good education. But the school itself was crumbling to pieces. Physically crumbling to pieces.\nThe 7th and 8th graders got shoved in with the high schoolers. So I was playing on high school teams. I was in high school plays and choruses. I won’t blame the teachers because they tried so hard, but the administration, the schedule, everything was terrible.</p>\n<p>So I took the initiative to apply to private high schools and my parents helped me and let me do that. I only went to private school because I got a scholarship and begged and pleaded. When I tell people about the things that happened in boarding school they’re like, oh, my God. It was so strange because it was in the middle of nowhere Rhode Island. You take all these kids from different backgrounds and coop them up in a school of less than 400 people and give them the most complex works of philosophy and literature ever written. Then they’re just like, do your thing and we’re going to keep a strict watch over you.</p>\n<p>I had a hard time feeling like an adult because I lived in the middle of nowhere. I didn’t have a lot of mobility, didn’t have a driver’s license, and could not afford to go on spring break vacations. Every night from 8 to 10 p.m. we would have to sit at our desks with our doors open and turn in our phones to a box. They would walk around and make sure you were sitting at your desk doing homework and nothing else. At first, it made sense, when it was freshmen and sophomores. But by the time I was an 18-year-old senior, they were doing the same thing, and I was like, this is not how you treat an adult.</p>\n<p>When I first got to college I still felt restricted, because of COVID. Now, I try to go out and do more things. I just went to the Isabel Stewart Gardner for the first time two weeks ago. It was so cool. We can go there for free and it’s so close to here. Everything’s jumbled together, in a nonsensical way. The vibes are so good. They’re like, put together by color. Turn around and it’s the Blue Room. Turn around and it’s a garden. It was so good. So, that was a step for me, to get around to things. Like, oh, I should do that. Senior year has been good for that. And also this is the second semester of my entire time in college that I haven’t had a job. So I’m just doing stuff. It’s such a good time. Yeah, I don’t have money but it’s a good time.</p>");
	

				const frontmatter = {"title":"Diana Reno","description":"From public school to private school, Diana sought independence, exploration, and freedom.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Private School","Massachusetts","IR"],"imgUrl":"../../assets/Diana_Reno.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Diana Reno.md";
				const url = undefined;
				function rawContent() {
					return "# Diana Reno\n\n![local image](../../assets/Diana_Reno.JPG)\n\nI had planned to go to public school for my whole life. But in the sixth grade, we moved to Westport Massachusetts. The teachers are fantastic. It's Massachusetts so you get a good education. But the school itself was crumbling to pieces. Physically crumbling to pieces.\nThe 7th and 8th graders got shoved in with the high schoolers. So I was playing on high school teams. I was in high school plays and choruses. I won't blame the teachers because they tried so hard, but the administration, the schedule, everything was terrible.\n\nSo I took the initiative to apply to private high schools and my parents helped me and let me do that. I only went to private school because I got a scholarship and begged and pleaded. When I tell people about the things that happened in boarding school they're like, oh, my God. It was so strange because it was in the middle of nowhere Rhode Island. You take all these kids from different backgrounds and coop them up in a school of less than 400 people and give them the most complex works of philosophy and literature ever written. Then they’re just like, do your thing and we're going to keep a strict watch over you.\n\nI had a hard time feeling like an adult because I lived in the middle of nowhere. I didn't have a lot of mobility, didn't have a driver's license, and could not afford to go on spring break vacations. Every night from 8 to 10 p.m. we would have to sit at our desks with our doors open and turn in our phones to a box. They would walk around and make sure you were sitting at your desk doing homework and nothing else. At first, it made sense, when it was freshmen and sophomores. But by the time I was an 18-year-old senior, they were doing the same thing, and I was like, this is not how you treat an adult.\n\nWhen I first got to college I still felt restricted, because of COVID. Now, I try to go out and do more things. I just went to the Isabel Stewart Gardner for the first time two weeks ago. It was so cool. We can go there for free and it's so close to here. Everything's jumbled together, in a nonsensical way. The vibes are so good. They're like, put together by color. Turn around and it's the Blue Room. Turn around and it’s a garden. It was so good. So, that was a step for me, to get around to things. Like, oh, I should do that. Senior year has been good for that. And also this is the second semester of my entire time in college that I haven't had a job. So I'm just doing stuff. It's such a good time. Yeah, I don't have money but it's a good time. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"diana-reno","text":"Diana Reno"}];
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
