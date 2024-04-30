import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1rTXkG = new Proxy({"src":"/_astro/Taylor_Morales.sS2k1iBx.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Taylor_Morales.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Taylor_Morales.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Taylor_Morales.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Taylor_Morales.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1rTXkG, ...props});
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
			const html = await updateImageReferences("<h1 id=\"talor-morales\">Talor Morales</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Taylor_Morales.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Going through the pandemic in college was revolutionary for how I perceived the world. I was so afraid when I had to go home. We were given three days to pack up and I had to go back 2500 miles. Didn’t even get through my first year of college. I was just so afraid of the unknown amount of time that I would be isolated.</p>\n<p>Like, history will remember these three years as a global pandemic, but was still happening. People were being born and dying and getting married and falling in love and no one was documenting it, because it was all kind of superseded by a virus.</p>\n<p>So I picked up a camera. I got it for 200 bucks off of Craigslist. I just started to sit outside. socially distanced, and just film people from afar, kind of talking to other people. I saw how conversations looked like and how people started to emphasize being outside.</p>\n<p>By the time I got back to school and things got back to normal, I realized how much I really liked it and how much I liked stories. I came to BU to be a screenwriter, but I couldn’t let go of the visual medium, and I found that social media is the best way to get that. So I got into making short-form videos and I started a “Man on the Street” series at Boston College. A couple of them went pretty viral. It put me on the map.</p>\n<p>To be able to have more accessibility to people and going up and asking them questions, is just such a blessing, right? I got to do it with my best friends. We would shoot for Boston College and have a huge audience. When I came to BU, they caught wind that I was here. I was looking to do it again. Now I’m doing it.</p>\n<p>I’m not at the point in my life where I can write films that might touch people, but the fact that tens of thousands, hundreds of thousands of people will see my little short stories is amazing. I keep my camera on me at all times, just documenting.</p>\n<p>I take a lot of time out of my day to sit. Right over there there are some benches - that tree turns bright red - I would sit there and I’d turn on my mics and I’d listen. I think people don’t listen anymore. I kind of try to immerse myself and I don’t focus on anything because you miss so much when you’re looking for something.</p>");
	

				const frontmatter = {"title":"Taylor Morales","description":"Navigating the pandemic during college prompted a transformative shift in perception, leading Taylor to pick up a camera.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Film","California","Hispanic"],"imgUrl":"../../assets/Taylor_Morales.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Taylor Morales.md";
				const url = undefined;
				function rawContent() {
					return "# Talor Morales\n\n![local image](../../assets/Taylor_Morales.JPG)\n\nGoing through the pandemic in college was revolutionary for how I perceived the world. I was so afraid when I had to go home. We were given three days to pack up and I had to go back 2500 miles. Didn't even get through my first year of college. I was just so afraid of the unknown amount of time that I would be isolated.\n\nLike, history will remember these three years as a global pandemic, but was still happening. People were being born and dying and getting married and falling in love and no one was documenting it, because it was all kind of superseded by a virus.\n\nSo I picked up a camera. I got it for 200 bucks off of Craigslist. I just started to sit outside. socially distanced, and just film people from afar, kind of talking to other people. I saw how conversations looked like and how people started to emphasize being outside. \n\nBy the time I got back to school and things got back to normal, I realized how much I really liked it and how much I liked stories. I came to BU to be a screenwriter, but I couldn't let go of the visual medium, and I found that social media is the best way to get that. So I got into making short-form videos and I started a “Man on the Street” series at Boston College. A couple of them went pretty viral. It put me on the map.\n\nTo be able to have more accessibility to people and going up and asking them questions, is just such a blessing, right? I got to do it with my best friends. We would shoot for Boston College and have a huge audience. When I came to BU, they caught wind that I was here. I was looking to do it again. Now I'm doing it.\n\nI'm not at the point in my life where I can write films that might touch people, but the fact that tens of thousands, hundreds of thousands of people will see my little short stories is amazing. I keep my camera on me at all times, just documenting.\n\nI take a lot of time out of my day to sit. Right over there there are some benches - that tree turns bright red - I would sit there and I'd turn on my mics and I'd listen. I think people don't listen anymore. I kind of try to immerse myself and I don't focus on anything because you miss so much when you're looking for something.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"talor-morales","text":"Talor Morales"}];
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
