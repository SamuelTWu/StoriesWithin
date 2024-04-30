import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZFRH7E = new Proxy({"src":"/_astro/Jesus_Marrero_Suarez.kiq8mQGl.jpeg","width":506,"height":506,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Jesus_Marrero_Suarez.jpeg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Jesus_Marrero_Suarez.jpeg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Jesus_Marrero_Suarez.jpeg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Jesus_Marrero_Suarez.jpeg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZFRH7E, ...props});
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
			const html = await updateImageReferences("<h1 id=\"jesús-marrero-suárez\">Jesús Marrero Suárez</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Jesus_Marrero_Suarez.jpeg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>When I got to BU, I started doing journalism. Journalism is a freaky thing because you do a story and you don’t ever really know how it’s gonna end up. In a lot of ways, it was very chilling to have so many people tell you their stories and experiences and then write about them. In some cases, you come across a couple of people who are just fucking freaks.</p>\n<p>You get small things that just feel like microaggressions, but you’re never really sure. And you kinda also realize you’re a minority. I went to a high school in Puerto Rico, in a neighborhood in the capital called Cupey. I was a little different because I was an immigrant. I’m Venezuelan. Sometimes I think, Oh maybe that was part of the reason why I felt so alienated from everybody in my high school. Because I didn’t have the same background. They spoke in a different accent and did different things at the time. But we were all Latino, so we were all on the same vibe, with similar backgrounds and tastes. There was never a stark separation. I never felt like I was the only one of my kind until I got to BU. And I realized, oh my God, why are there only two people of color in this entire lecture hall?</p>\n<p>It wasn’t just the students. Most of the professors are mostly white. They were teaching material that was just straight-up white. You can feel a little bit alone in situations like that. So I was naturally drawn to people of color. I would take classes with professors of color. I don’t have many Puerto Rican friends here, but everybody kind of shares that same feeling that they are in a room full of people who don’t look like them, don’t say their names in the same way that they do, who don’t have to worry about some of the things that they do. It brings a whole bunch of us together. We have a sense of solidarity.</p>");
	

				const frontmatter = {"title":"Jesús Marrero Suárez","description":"Jesús describes what it's like for a POC student at BU.","pubDate":"2024-03-17 14:27","author":"Sam Wu","tags":["Puerto Rico","Hispanic","Journalism"],"imgUrl":"../../assets/Jesus_Marrero_Suarez.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Jesús Marrero Suárez.md";
				const url = undefined;
				function rawContent() {
					return "# Jesús Marrero Suárez\n\n![local image](../../assets/Jesus_Marrero_Suarez.jpeg)\n\nWhen I got to BU, I started doing journalism. Journalism is a freaky thing because you do a story and you don't ever really know how it's gonna end up. In a lot of ways, it was very chilling to have so many people tell you their stories and experiences and then write about them. In some cases, you come across a couple of people who are just fucking freaks.\n\nYou get small things that just feel like microaggressions, but you're never really sure. And you kinda also realize you're a minority. I went to a high school in Puerto Rico, in a neighborhood in the capital called Cupey. I was a little different because I was an immigrant. I'm Venezuelan. Sometimes I think, Oh maybe that was part of the reason why I felt so alienated from everybody in my high school. Because I didn't have the same background. They spoke in a different accent and did different things at the time. But we were all Latino, so we were all on the same vibe, with similar backgrounds and tastes. There was never a stark separation. I never felt like I was the only one of my kind until I got to BU. And I realized, oh my God, why are there only two people of color in this entire lecture hall?\n\nIt wasn't just the students. Most of the professors are mostly white. They were teaching material that was just straight-up white. You can feel a little bit alone in situations like that. So I was naturally drawn to people of color. I would take classes with professors of color. I don’t have many Puerto Rican friends here, but everybody kind of shares that same feeling that they are in a room full of people who don't look like them, don't say their names in the same way that they do, who don't have to worry about some of the things that they do. It brings a whole bunch of us together. We have a sense of solidarity.\n \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"jesús-marrero-suárez","text":"Jesús Marrero Suárez"}];
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
