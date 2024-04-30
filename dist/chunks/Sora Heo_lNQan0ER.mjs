import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__WSms3 = new Proxy({"src":"/_astro/Sora_Heo.mfLshdCd.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sora_Heo.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sora_Heo.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Sora_Heo.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Sora_Heo.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__WSms3, ...props});
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
			const html = await updateImageReferences("<h1 id=\"sora-heo\">Sora Heo</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Sora_Heo.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>My mom works in the restaurant industry. She owned three restaurants in Chicago, so food is just a really big part of my life. Coming to BU, I wanted to continue living in a huge city. I grew up in Chicago, so I’m used to Chinese restaurants opening till 3:00 am or going to a game. Public transit has been a big part of my life ever since I was young.</p>\n<p>When I came to Boston, I realized it’s a city without the city benefits. Sorry… I’m trying to sound nice but I was surprised that things are not open late. It’s a very sleepy city. Public transit is also very concentrated in just one area of Boston. In Chicago, we have something called the L which connects almost all parts of the city. You can get from one end of the city to the other within 30 minutes with the L. Here, it takes 30 minutes to get from one end of the street to the other. Also, there’s not a huge food culture if you’re not rich. You can get very boujie steak, that kind of stuff, but when you’re looking for ethnic food, hole in the wall, $3 stir fry, that’s kind of like harder to find. Why is pasta $40? Like, if you don’t even have anything to back it up, why should it be $40?</p>\n<p>That’s another surprising thing about Boston is how huge the income gap is. People being like, I go to lunch in Canada on the weekend or road trip all the time. That’s obviously not something that everyone can do. A lot of college clubs make you pay. Greek life is all about. Even the classes that I think are really cool cost money. I’m actually applying to one of them, and there’s this automatic expectation that someone can afford a $600 enrollment deposit right away.</p>\n<p>I feel like I had a different outlook on getting into college. Being from a low-income background, there was that emotional toil that if I didn’t get into a school that gave me a good package, I was not going to college. That’s period. I felt like for a lot of my friends who grew up more privileged than me, it was definitely still hard, but it didn’t matter where they went. For me, the name or anything didn’t matter, it was just, “can I afford this college?”</p>");
	

				const frontmatter = {"title":"Sora Heo","description":"Sora describes her transition from Chicago to Boston and discusses food, transit, and the income gap.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Food","IR","Asian"],"imgUrl":"../../assets/Sora_Heo.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Sora Heo.md";
				const url = undefined;
				function rawContent() {
					return "# Sora Heo\n\n![local image](../../assets/Sora_Heo.JPG)\n\nMy mom works in the restaurant industry. She owned three restaurants in Chicago, so food is just a really big part of my life. Coming to BU, I wanted to continue living in a huge city. I grew up in Chicago, so I’m used to Chinese restaurants opening till 3:00 am or going to a game. Public transit has been a big part of my life ever since I was young. \n\nWhen I came to Boston, I realized it’s a city without the city benefits. Sorry… I’m trying to sound nice but I was surprised that things are not open late. It’s a very sleepy city. Public transit is also very concentrated in just one area of Boston. In Chicago, we have something called the L which connects almost all parts of the city. You can get from one end of the city to the other within 30 minutes with the L. Here, it takes 30 minutes to get from one end of the street to the other. Also, there’s not a huge food culture if you’re not rich. You can get very boujie steak, that kind of stuff, but when you’re looking for ethnic food, hole in the wall, $3 stir fry, that’s kind of like harder to find. Why is pasta $40? Like, if you don’t even have anything to back it up, why should it be $40? \n\nThat’s another surprising thing about Boston is how huge the income gap is. People being like, I go to lunch in Canada on the weekend or road trip all the time. That’s obviously not something that everyone can do. A lot of college clubs make you pay. Greek life is all about. Even the classes that I think are really cool cost money. I’m actually applying to one of them, and there’s this automatic expectation that someone can afford a $600 enrollment deposit right away. \n\nI feel like I had a different outlook on getting into college. Being from a low-income background, there was that emotional toil that if I didn’t get into a school that gave me a good package, I was not going to college. That’s period. I felt like for a lot of my friends who grew up more privileged than me, it was definitely still hard, but it didn’t matter where they went. For me, the name or anything didn’t matter, it was just, “can I afford this college?”\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sora-heo","text":"Sora Heo"}];
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
