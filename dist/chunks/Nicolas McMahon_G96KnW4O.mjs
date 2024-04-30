import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__EkBwH = new Proxy({"src":"/_astro/Nico_McMahon.VASLlTzy.JPG","width":4240,"height":2832,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Nico_McMahon.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Nico_McMahon.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Nico_McMahon.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Nico_McMahon.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__EkBwH, ...props});
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
			const html = await updateImageReferences("<h1 id=\"nico-mcmahon\">Nico McMahon</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Nico_McMahon.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was fascinated by stargazing. My town is in the suburbs so it’s not super light polluted. There’s a park near my house that I would go to all the time, and from there you could see so many stars. I knew that I wanted to do astronomy, maybe not in a professional context, but I knew I wanted to do something. Watching TV shows as a kid, you’d see all of those astrophysicists on TV like Neil Degrasse Tyson and Michio Kaku. I watched every freaking Nova show. My dad noticed that I was so into these astronomy TV shows and he showed me Carl Sagan’s Cosmos.</p>\n<p>They all kind of occupied a really lofty image in my head where these people are incredibly successful and they do astronomy and I want to be like them. We don’t always think about the vastness of our universe at all times in cosmology. Part of the reason is that we abstract it a lot. A cosmologist would tell you that 1 Megaparsec is a very small distance, but to everyone else, that’s a distance of over 3 million light years. Astronomy is really just physics and computer science with the theme of the universe. It’s the detailed study of objects and it’s a human endeavor. So the people who do astrophysics think a lot about the work that they do in relation to other people.</p>\n<p>That was quite a surprise when I first started getting into the field. You can’t really know your field until you’re studying it. I thought the field was gonna be full of observationalists, like people who want to just look through telescopes, but to my surprise, I found a field that is just as full of theorists, mathematicians, and computer scientists as people who do observational astronomy.</p>\n<p>So I found a really rich field of very different approaches to the same material. Some of those have not worked for me. I don’t consider myself a theorist. I’ve always wanted to be an observationalist and that leads me more down the computer science route than the “math on a chalkboard” route. But they’re both very intertwined.</p>\n<p>I also thought astronomers would work in all sorts of places, but now I’ve come to understand that the vast majority of astronomers work at universities. Because of the way that research is funded in the US, it kind of just ends up being an institutional thing. So pretty much all astronomers are either in a university or they’re at some national lab funded by the government. Or they’re at a research institute funded by a colloquium of schools. I’ve come to realize that it’s a more academic field than I thought, which is not a bad thing, but it wasn’t exactly my expectation.</p>");
	

				const frontmatter = {"title":"Nico McMahon","description":"Nico's fascination with stargazing led to interest in astronomy as a career.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Connecticut","Astronomy","Physics"],"imgUrl":"../../assets/Nico_McMahon.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Nicolas McMahon.md";
				const url = undefined;
				function rawContent() {
					return "# Nico McMahon\n\n![local image](../../assets/Nico_McMahon.JPG)\n\nI was fascinated by stargazing. My town is in the suburbs so it's not super light polluted. There's a park near my house that I would go to all the time, and from there you could see so many stars. I knew that I wanted to do astronomy, maybe not in a professional context, but I knew I wanted to do something. Watching TV shows as a kid, you'd see all of those astrophysicists on TV like Neil Degrasse Tyson and Michio Kaku. I watched every freaking Nova show. My dad noticed that I was so into these astronomy TV shows and he showed me Carl Sagan’s Cosmos. \n\nThey all kind of occupied a really lofty image in my head where these people are incredibly successful and they do astronomy and I want to be like them. We don't always think about the vastness of our universe at all times in cosmology. Part of the reason is that we abstract it a lot. A cosmologist would tell you that 1 Megaparsec is a very small distance, but to everyone else, that's a distance of over 3 million light years. Astronomy is really just physics and computer science with the theme of the universe. It's the detailed study of objects and it’s a human endeavor. So the people who do astrophysics think a lot about the work that they do in relation to other people.\n\nThat was quite a surprise when I first started getting into the field. You can't really know your field until you're studying it. I thought the field was gonna be full of observationalists, like people who want to just look through telescopes, but to my surprise, I found a field that is just as full of theorists, mathematicians, and computer scientists as people who do observational astronomy.\n\nSo I found a really rich field of very different approaches to the same material. Some of those have not worked for me. I don't consider myself a theorist. I've always wanted to be an observationalist and that leads me more down the computer science route than the “math on a chalkboard” route. But they're both very intertwined.\n\nI also thought astronomers would work in all sorts of places, but now I've come to understand that the vast majority of astronomers work at universities. Because of the way that research is funded in the US, it kind of just ends up being an institutional thing. So pretty much all astronomers are either in a university or they're at some national lab funded by the government. Or they're at a research institute funded by a colloquium of schools. I've come to realize that it's a more academic field than I thought, which is not a bad thing, but it wasn't exactly my expectation.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"nico-mcmahon","text":"Nico McMahon"}];
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
