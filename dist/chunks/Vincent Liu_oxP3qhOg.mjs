import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1npK4w = new Proxy({"src":"/_astro/Vincent_Liu.hUNELKJM.jpg","width":7008,"height":4672,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Vincent_Liu.jpg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Vincent_Liu.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Vincent_Liu.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Vincent_Liu.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1npK4w, ...props});
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
			const html = await updateImageReferences("<h1 id=\"vincent-liu\">Vincent Liu</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Vincent_Liu.jpg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’ve become more outgoing. I’ve definitely become more sociable. I ended up joining the Chinese Student Association, which when I first came here a freshman year, I would never have done. In high school, I was very shy. I was very reserved. I had my own group of friends so I didn’t really talk to people. The impression back then was that I was just there to get my grades and go home. I’ve been doing fine art for a long time. Every Thursday since seventh grade, I try to do like 2-3 hours of art. I did an art camp in the woods. It was a summer camp with an old angry Chinese lady teacher. We did all of our portfolio stuff there and while we were doing it she was like, oh, you should consider graphic design. So I decided to pursue graphic design in college.</p>\n<p>My good friend Felix graduated from graphic design last year and he essentially introduced me to a lot of stuff.  We met in the most random way possible. I met him in this one class that I took because I needed the Hub credit and I wanted to get it out of the way. It was a class called China and Taiwan Transformation or something. And I was like, sure, I’ll just take that. It was with a bunch of international kids, right? And then I just see this guy with K-pop style in the corner. I was like, he’s unique. The next time I had class he sat next to me. We realized we were in the College of Fine Arts together, and we started talking and started getting lunch every other day.\nI would see him like literally every day that semester. We became pretty close and then he was like, I’m doing some graphic design work for this Taiwanese club and it’s pretty fulfilling. He told me I should do the same thing for the Chinese Student Association and I was like, ok, I’ll check it out.</p>\n<p>I met a lot of people through that experience. I became very close with like the graph design seniors who graduated last year. It’s so random how one person changes the course of your college life. I met him because I had to take a Hub class and we ended up in the same section for no reason.</p>");
	

				const frontmatter = {"title":"Vincent Liu","description":"Vincent reflects on his journey to becoming more outgoing in college.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Chinese","Graphic Design","Asian"],"imgUrl":"../../assets/Vincent_Liu.jpg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Vincent Liu.md";
				const url = undefined;
				function rawContent() {
					return "# Vincent Liu\n\n![local image](../../assets/Vincent_Liu.jpg)\n\nI've become more outgoing. I’ve definitely become more sociable. I ended up joining the Chinese Student Association, which when I first came here a freshman year, I would never have done. In high school, I was very shy. I was very reserved. I had my own group of friends so I didn't really talk to people. The impression back then was that I was just there to get my grades and go home. I've been doing fine art for a long time. Every Thursday since seventh grade, I try to do like 2-3 hours of art. I did an art camp in the woods. It was a summer camp with an old angry Chinese lady teacher. We did all of our portfolio stuff there and while we were doing it she was like, oh, you should consider graphic design. So I decided to pursue graphic design in college. \n\nMy good friend Felix graduated from graphic design last year and he essentially introduced me to a lot of stuff.  We met in the most random way possible. I met him in this one class that I took because I needed the Hub credit and I wanted to get it out of the way. It was a class called China and Taiwan Transformation or something. And I was like, sure, I'll just take that. It was with a bunch of international kids, right? And then I just see this guy with K-pop style in the corner. I was like, he's unique. The next time I had class he sat next to me. We realized we were in the College of Fine Arts together, and we started talking and started getting lunch every other day. \nI would see him like literally every day that semester. We became pretty close and then he was like, I'm doing some graphic design work for this Taiwanese club and it's pretty fulfilling. He told me I should do the same thing for the Chinese Student Association and I was like, ok, I'll check it out. \n\nI met a lot of people through that experience. I became very close with like the graph design seniors who graduated last year. It’s so random how one person changes the course of your college life. I met him because I had to take a Hub class and we ended up in the same section for no reason. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"vincent-liu","text":"Vincent Liu"}];
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
