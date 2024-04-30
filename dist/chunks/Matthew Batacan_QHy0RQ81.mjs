import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1HrXxj = new Proxy({"src":"/_astro/Matthew_Batacan.1xGjq_xP.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Matthew_Batacan.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Matthew_Batacan.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Matthew_Batacan.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Matthew_Batacan.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1HrXxj, ...props});
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
			const html = await updateImageReferences("<h1 id=\"matthew-batacan\">Matthew Batacan</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Matthew_Batacan.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>It’s a little bit more cliquey here. People will have their groups and then just kind of stick to them. In Hawaii, my senior year of high school, there was a section where the seniors would sit when they had breaks or stuff. Everyone had their table but you could go to someone else’s table and just sit down. It wouldn’t be weird. You still hung out with your group of friends but everyone was so welcoming. Sometimes here it can feel intimidating.</p>\n<p>One thing is that BU is much bigger than my small high school. There’s definitely a lot more diversity too. For some people, being around other people can be a new experience. Since I hadn’t traveled much from Hawaii, I wanted to put myself in a place I’d feel a little bit uncomfortable. It took a lot for me to adjust and figure out how to do stuff without being dependent on my parents. But I definitely think it was worth it.</p>\n<p>I think I’ve become a lot more able to talk in social settings. When I first came to BU I was a little bit more shy. I wasn’t really confident in my speaking and everything. But I figured eventually I’m gonna need to be able to do that because whatever you do, you have to be able to talk to people. So I kind of put that in my head during my freshman year and have been working at it. In my junior year, I was able to talk to a lot more people which was nice.</p>\n<p>Don’t be afraid to talk to other people. Everyone in your freshman class is also confused as well. That still happens to me in classes now. I’ll just ask the person next to me, like, what is going on? That’s like an easy way to get to know someone in the class. So even if you’re lost here, you have someone else to go through it with you.</p>");
	

				const frontmatter = {"title":"Matthew Batacan","description":"Matthew describes the differences between Boston and his hometown in Hawaii.","pubDate":"2024-02-20 22:28","author":"Sam Wu","tags":["CS","Hawaii","Growth","Asian"],"imgUrl":"../../assets/Matthew_Batacan.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Matthew Batacan.md";
				const url = undefined;
				function rawContent() {
					return "# Matthew Batacan\n\n![local image](../../assets/Matthew_Batacan.JPG)\n\nIt's a little bit more cliquey here. People will have their groups and then just kind of stick to them. In Hawaii, my senior year of high school, there was a section where the seniors would sit when they had breaks or stuff. Everyone had their table but you could go to someone else's table and just sit down. It wouldn't be weird. You still hung out with your group of friends but everyone was so welcoming. Sometimes here it can feel intimidating.\n\nOne thing is that BU is much bigger than my small high school. There's definitely a lot more diversity too. For some people, being around other people can be a new experience. Since I hadn't traveled much from Hawaii, I wanted to put myself in a place I'd feel a little bit uncomfortable. It took a lot for me to adjust and figure out how to do stuff without being dependent on my parents. But I definitely think it was worth it.\n\nI think I've become a lot more able to talk in social settings. When I first came to BU I was a little bit more shy. I wasn't really confident in my speaking and everything. But I figured eventually I'm gonna need to be able to do that because whatever you do, you have to be able to talk to people. So I kind of put that in my head during my freshman year and have been working at it. In my junior year, I was able to talk to a lot more people which was nice.\n\nDon't be afraid to talk to other people. Everyone in your freshman class is also confused as well. That still happens to me in classes now. I'll just ask the person next to me, like, what is going on? That's like an easy way to get to know someone in the class. So even if you're lost here, you have someone else to go through it with you.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"matthew-batacan","text":"Matthew Batacan"}];
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
