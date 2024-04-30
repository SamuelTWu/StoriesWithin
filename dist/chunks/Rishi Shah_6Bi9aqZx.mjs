import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2mCati = new Proxy({"src":"/_astro/Rishi_Shah.yuCRS0qo.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rishi_Shah.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rishi_Shah.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rishi_Shah.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rishi_Shah.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2mCati, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rishi-shah\">Rishi Shah</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rishi_Shah.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I went to high school in Bakersfield, California. They’re not particularly known for their educational prowess. It’s a big farming community, a big oil community. I tried to keep myself busy. I was a big chess player. When I was younger, there was a pretty strong chess community. But by the time I got to high school it kind of tapered off. There weren’t many many people left.</p>\n<p>One summer, I didn’t really have too much to do, so I tried making a curriculum to teach chess, with a book with structure and things. I taught it for a summer at the Boys and Girls Club. In my junior year, I actually expanded a bit. By the time we got to senior yea, there was a pretty good group of students who were interested.</p>\n<p>So we were registering for tournaments and needing to buy boards and it got expensive. So I was trying to get money from people but it was hard. People don’t really want to donate. So I started taking prom photos and formal photos, and we bought chess boards and registered people for chess tournaments using those.</p>\n<p>It’s actually pretty funny. When I first started taking photos, I didn’t know where to start, so I rented this camera gear from this guy that I found online. A little bit suspicious, but it was great camera equipment, right? So I was going to take some photos at this formal, but when I got there they wanted to check all my stuff to make sure I wasn’t taking anything in. They went through the backpack with all the cameras I rented and they found this bag of pills.</p>\n<p>I was terrified. Maybe it was drugs or something. I was like, “That’s not mine, it was the guy.” I was freaked. They brought the cops over and started investigating. They ground it up and drug-tested it and it turned out it was just Motrin. So thank God.</p>");
	

				const frontmatter = {"title":"Rishi Shah","description":"Rishi attended high school in Bakersfield where they took pictures to pay for the chess club.","pubDate":"2024-03-15 13:29","author":"Sam Wu","tags":["CS","Med School","California","Asian"],"imgUrl":"../../assets/Rishi_Shah.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rishi Shah.md";
				const url = undefined;
				function rawContent() {
					return "# Rishi Shah\n\n![local image](../../assets/Rishi_Shah.JPG)\n\nI went to high school in Bakersfield, California. They're not particularly known for their educational prowess. It's a big farming community, a big oil community. I tried to keep myself busy. I was a big chess player. When I was younger, there was a pretty strong chess community. But by the time I got to high school it kind of tapered off. There weren't many many people left. \n\nOne summer, I didn't really have too much to do, so I tried making a curriculum to teach chess, with a book with structure and things. I taught it for a summer at the Boys and Girls Club. In my junior year, I actually expanded a bit. By the time we got to senior yea, there was a pretty good group of students who were interested.\n\nSo we were registering for tournaments and needing to buy boards and it got expensive. So I was trying to get money from people but it was hard. People don't really want to donate. So I started taking prom photos and formal photos, and we bought chess boards and registered people for chess tournaments using those. \n\nIt’s actually pretty funny. When I first started taking photos, I didn't know where to start, so I rented this camera gear from this guy that I found online. A little bit suspicious, but it was great camera equipment, right? So I was going to take some photos at this formal, but when I got there they wanted to check all my stuff to make sure I wasn't taking anything in. They went through the backpack with all the cameras I rented and they found this bag of pills.\n\nI was terrified. Maybe it was drugs or something. I was like, “That's not mine, it was the guy.” I was freaked. They brought the cops over and started investigating. They ground it up and drug-tested it and it turned out it was just Motrin. So thank God. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rishi-shah","text":"Rishi Shah"}];
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
