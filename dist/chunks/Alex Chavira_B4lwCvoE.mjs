import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Ob9nD = new Proxy({"src":"/_astro/Alex_Chavira.gqhZFIfv.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Alex_Chavira.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Alex_Chavira.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Alex_Chavira.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Alex_Chavira.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Ob9nD, ...props});
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
			const html = await updateImageReferences("<h1 id=\"alex-chavira\">Alex Chavira</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Alex_Chavira.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This summer was some of the most fun I’ve had musically. Doing Scarlett Band, just being able to play easy music and vibe out. We were all just like having a blast and like kind of shooting the shit as well. Honestly, I came into it being a little jaded. Sort of like, I’m too good for this. Then you get into it and you’re like, no, this is just fun. And during that time also we would jam all the time.</p>\n<p>I really got my jazz chops in shape which is super fun. It was an instance where the music-making and the practicing felt casual. It was totally disconnected from a grade, you know? I think it was a way more joyful experience. I got to get it back in my head that this is why I play music. I think it’s easy to get jaded in studying music. Doing what you love also becomes your profession. It can be hard to be nurtured in an environment where you have to be “good enough” to get the grade.</p>\n<p>But studying music also made me think about it more critically. I’ve been thinking about music more deeply as an art form. I’m thinking about the things I can do as an artist, not just as a person who plays the saxophone. I’m seeing the emotional side of music, which I had not thought about a lot in the past. In high school, it seems almost corny if you ask how music makes you feel. I’ve been able to think about that a lot more clearly in college, which is really cool. It’s not only more meaningful to you, but you can make it more meaningful to the people that hear your music, which if you get down to it, that’s the whole point.</p>");
	

				const frontmatter = {"title":"Alex Chavira","description":"Alex had a transformative musical summer, rediscovering joy and artistic purpose.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Music","Conneticut","Scarlet Band"],"imgUrl":"../../assets/Alex_Chavira.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Alex Chavira.md";
				const url = undefined;
				function rawContent() {
					return "# Alex Chavira\n\n![local image](../../assets/Alex_Chavira.JPG)\n\nThis summer was some of the most fun I’ve had musically. Doing Scarlett Band, just being able to play easy music and vibe out. We were all just like having a blast and like kind of shooting the shit as well. Honestly, I came into it being a little jaded. Sort of like, I'm too good for this. Then you get into it and you're like, no, this is just fun. And during that time also we would jam all the time. \n\nI really got my jazz chops in shape which is super fun. It was an instance where the music-making and the practicing felt casual. It was totally disconnected from a grade, you know? I think it was a way more joyful experience. I got to get it back in my head that this is why I play music. I think it's easy to get jaded in studying music. Doing what you love also becomes your profession. It can be hard to be nurtured in an environment where you have to be “good enough” to get the grade. \n\nBut studying music also made me think about it more critically. I’ve been thinking about music more deeply as an art form. I’m thinking about the things I can do as an artist, not just as a person who plays the saxophone. I’m seeing the emotional side of music, which I had not thought about a lot in the past. In high school, it seems almost corny if you ask how music makes you feel. I've been able to think about that a lot more clearly in college, which is really cool. It's not only more meaningful to you, but you can make it more meaningful to the people that hear your music, which if you get down to it, that's the whole point. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"alex-chavira","text":"Alex Chavira"}];
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
