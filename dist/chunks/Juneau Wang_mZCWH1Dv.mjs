import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1CJee2 = new Proxy({"src":"/_astro/Juneau_Wang.F324aCur.jpeg","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Juneau_Wang.jpeg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Juneau_Wang.jpeg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Juneau_Wang.jpeg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Juneau_Wang.jpeg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1CJee2, ...props});
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
			const html = await updateImageReferences("<h1 id=\"juneau-wang\">Juneau Wang</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Juneau_Wang.jpeg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Being part of a band was an important experience for me. That and dating Nikki. We’ve been in a long-term relationship for almost three years at this point. I can’t do the math right now, but we met freshman year. I think that was really a life-changing experience - just understanding how to love somebody. But you know, being in a band is funny because when you’re in a band like Scarlet Band, it can get stressful dashing between performances. But honestly, Scarlet Band was amazing and I continue to enjoy it. Scarlet Band is the summer school band that plays for the university at all the summer events. It gave me summer housing which allowed me to do research. So being able to do something I love and be compensated for it with housing was amazing.</p>\n<p>I think the band was important because it allowed me to experience what other people do within the band or outside of the band. I still find it so amazing, chatting with people who do all these wonderful, amazing activities like jazz improv or dance groups. Meeting all these people made me realize how much other people have to offer in a way that I never imagined before. That sounded really cyclical. Like for example, I never knew of some instruments until people mentioned that they played them. You know what I mean? I never had listened to the music that other people love until they showed it to me.</p>\n<p>Meeting new people was much more wholesome and multifaceted than I expected. I’ve met tons of people who showed me all sorts of traits like compassion, responsibility, and determination. It really felt like a journey for me. I never imagined music could get so much better. Neither did I imagine a blossoming relationship could get so amazing. Neither did I imagine that research could culminate into final presentations, projects, and posters.</p>\n<p>I wonder if my shock at my personal growth was because I was seeking growth or because I wasn’t noticing it. I don’t know. I’m not too sure. These are deeper questions than I thought you were gonna ask.</p>");
	

				const frontmatter = {"title":"Juneau Wang","description":"Juneau discusses how his band experience and relationship fostered personal growth.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Scarlet Band","PreMed","Asian","Chinese"],"imgUrl":"../../assets/Juneau_Wang.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Juneau Wang.md";
				const url = undefined;
				function rawContent() {
					return "# Juneau Wang\n\n![local image](../../assets/Juneau_Wang.jpeg)\n\nBeing part of a band was an important experience for me. That and dating Nikki. We've been in a long-term relationship for almost three years at this point. I can't do the math right now, but we met freshman year. I think that was really a life-changing experience - just understanding how to love somebody. But you know, being in a band is funny because when you’re in a band like Scarlet Band, it can get stressful dashing between performances. But honestly, Scarlet Band was amazing and I continue to enjoy it. Scarlet Band is the summer school band that plays for the university at all the summer events. It gave me summer housing which allowed me to do research. So being able to do something I love and be compensated for it with housing was amazing. \n\nI think the band was important because it allowed me to experience what other people do within the band or outside of the band. I still find it so amazing, chatting with people who do all these wonderful, amazing activities like jazz improv or dance groups. Meeting all these people made me realize how much other people have to offer in a way that I never imagined before. That sounded really cyclical. Like for example, I never knew of some instruments until people mentioned that they played them. You know what I mean? I never had listened to the music that other people love until they showed it to me. \n\nMeeting new people was much more wholesome and multifaceted than I expected. I’ve met tons of people who showed me all sorts of traits like compassion, responsibility, and determination. It really felt like a journey for me. I never imagined music could get so much better. Neither did I imagine a blossoming relationship could get so amazing. Neither did I imagine that research could culminate into final presentations, projects, and posters.\n\nI wonder if my shock at my personal growth was because I was seeking growth or because I wasn't noticing it. I don't know. I'm not too sure. These are deeper questions than I thought you were gonna ask. \n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"juneau-wang","text":"Juneau Wang"}];
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
