import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1v1R2j = new Proxy({"src":"/_astro/Adi_Iyer.s8QLnMF1.JPG","width":2832,"height":4240,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Adi_Iyer.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Adi_Iyer.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Adi_Iyer.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Adi_Iyer.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1v1R2j, ...props});
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
			const html = await updateImageReferences("<h1 id=\"adi-iyer\">Adi Iyer</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Adi_Iyer.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I grew up in a very Indian and Asian community. I never really felt out of place in terms of race, but it was always an academically rigorous community. It was comparison central. Everyone was comparing themselves to every little thing. You were shamed if you were not taking 4-5 AP classes, and if you got an A minus on a test you were considered less smart.\nI was the opposite of what I am right now. I was very much a slacker. I didn’t really care about school. There was one time in my AP world history class when we had to do these handwritten notes every single day. I thought it was too much work, so I literally typed them up, put them in a handwriting font, printed them on binder paper, and turned them in. It obviously didn’t work because my handwriting is not as good as the font.</p>\n<p>I was just like a slacker and I didn’t realize it. Until one day, one of my teachers told me in front of the entire class that I was coasting through his class. That what I’m doing now is a lesser version of what it could be. No one had ever believed that I could do more than what I was. I just assumed that I was this third-rate slacker who just didn’t do anything. That comment from my teacher made me think, what am I capable of?</p>\n<p>Then I had a seizure in my junior first semester. It was finals and all week I had been “studying” when in reality I was just looking at paper while talking to my friends on the phone. I’ve been staying up really late drinking Red Bulls. I had gotten maybe two hours of sleep that entire week. I remember it so clearly. It was Friday and my friends and I watched “Shazam”. I came back home and I started feeling really dizzy. It was almost an out-of-body experience where my center of gravity was not within my body. I told my mom and she told me to do something. I had these little Costco snack packs with the carrots. So I was on the couch, fully lying down and eating carrots.</p>\n<p>I don’t even remember screaming. Apparently, I had screamed and my mom saw me shaking. I was choking on the carrots and my mom had to put her fingers in my throat to pull them out. Otherwise, I would have died right there. I remember waking up on the stretcher getting taken out of my house in the ambulance, on the way to the hospital.</p>\n<p>I always joke with my friends that something about the seizure rewired my brain. But like, maybe I think something did because. I never viewed that as like a near-death experience, just something that kind of happened. But then ever since that time, I was always like, maybe I should try. I still remember my AP world teacher saying that stuff. He probably didn’t even remember saying it. But like those words have run through me.</p>");
	

				const frontmatter = {"title":"Adi Iyer","description":"In a competitive Asian community, Adi was labeled a slacker, until a near-death experience ignited change.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["California","Poli Sci","Journalism","Asian"],"imgUrl":"../../assets/Adi_Iyer.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Adi Iyer.md";
				const url = undefined;
				function rawContent() {
					return "# Adi Iyer \n\n![local image](../../assets/Adi_Iyer.JPG)\n\nI grew up in a very Indian and Asian community. I never really felt out of place in terms of race, but it was always an academically rigorous community. It was comparison central. Everyone was comparing themselves to every little thing. You were shamed if you were not taking 4-5 AP classes, and if you got an A minus on a test you were considered less smart. \nI was the opposite of what I am right now. I was very much a slacker. I didn't really care about school. There was one time in my AP world history class when we had to do these handwritten notes every single day. I thought it was too much work, so I literally typed them up, put them in a handwriting font, printed them on binder paper, and turned them in. It obviously didn't work because my handwriting is not as good as the font. \n\nI was just like a slacker and I didn't realize it. Until one day, one of my teachers told me in front of the entire class that I was coasting through his class. That what I'm doing now is a lesser version of what it could be. No one had ever believed that I could do more than what I was. I just assumed that I was this third-rate slacker who just didn't do anything. That comment from my teacher made me think, what am I capable of? \n\nThen I had a seizure in my junior first semester. It was finals and all week I had been “studying” when in reality I was just looking at paper while talking to my friends on the phone. I've been staying up really late drinking Red Bulls. I had gotten maybe two hours of sleep that entire week. I remember it so clearly. It was Friday and my friends and I watched “Shazam”. I came back home and I started feeling really dizzy. It was almost an out-of-body experience where my center of gravity was not within my body. I told my mom and she told me to do something. I had these little Costco snack packs with the carrots. So I was on the couch, fully lying down and eating carrots. \n\nI don't even remember screaming. Apparently, I had screamed and my mom saw me shaking. I was choking on the carrots and my mom had to put her fingers in my throat to pull them out. Otherwise, I would have died right there. I remember waking up on the stretcher getting taken out of my house in the ambulance, on the way to the hospital. \n\nI always joke with my friends that something about the seizure rewired my brain. But like, maybe I think something did because. I never viewed that as like a near-death experience, just something that kind of happened. But then ever since that time, I was always like, maybe I should try. I still remember my AP world teacher saying that stuff. He probably didn’t even remember saying it. But like those words have run through me. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"adi-iyer","text":"Adi Iyer"}];
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
