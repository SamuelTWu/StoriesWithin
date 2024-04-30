import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__26Vyc5 = new Proxy({"src":"/_astro/Rani_Thompson.Awey1kvu.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rani_Thompson.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rani_Thompson.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rani_Thompson.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rani_Thompson.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__26Vyc5, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rani-thompson\">Rani Thompson</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rani_Thompson.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I always had this very distinct idea of who I was. Not that I had an understanding of how the world works, but contentment with existence. And now being in college, all of that is challenged. Now I have more of an acceptance that things are not gonna be the way that you expect them to be. You’re gonna be surprised by life and by other people. Being an adult is having experiences you’ve never had before and having to be ok with that and move through it. And that’s crazy. That’s so new.</p>\n<p>Being in music school is important for me because I listen to music in a different way now. No matter what’s playing, I really listen to it and I give it the attention it deserves. I’m paying attention to the person’s body language with their instruments or with their ensemble members. I’m listening deeper than I would have before and it doesn’t matter what genre it is or what kind of vibe or sound. In the past I had preferences and I just didn’t give other music the time of day. But all music is beautiful and amazing and there’s always something to learn from it. So I listen to music as deeply as possible now, no matter what.</p>\n<p>It’s the same way with conversations. There’s so much more to conversation than just the words you’re saying. It’s also your reactions, your body language, your facial expressions. Even if it’s over the phone, there’s a difference between having a vibe and not having a vibe. That’s a huge part of it. And then there are the moments of silence. I’ve fallen in love with silence recently because there’s so much that it can say and there’s so much space that silence gives that’s necessary so that you can process things. If you’re in space with other people and you’re sharing silence, you can listen to each other better than when any person is talking.</p>");
	

				const frontmatter = {"title":"Rani Thompson","description":"Rani has a distinct sense of self but is challenged by college.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Family","Music","Black"],"imgUrl":"../../assets/Rani_Thompson.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/z_Rani Thompson.md";
				const url = undefined;
				function rawContent() {
					return "# Rani Thompson\n\n![local image](../../assets/Rani_Thompson.JPG)\n\nI always had this very distinct idea of who I was. Not that I had an understanding of how the world works, but contentment with existence. And now being in college, all of that is challenged. Now I have more of an acceptance that things are not gonna be the way that you expect them to be. You're gonna be surprised by life and by other people. Being an adult is having experiences you've never had before and having to be ok with that and move through it. And that's crazy. That's so new.\n\nBeing in music school is important for me because I listen to music in a different way now. No matter what's playing, I really listen to it and I give it the attention it deserves. I’m paying attention to the person's body language with their instruments or with their ensemble members. I'm listening deeper than I would have before and it doesn't matter what genre it is or what kind of vibe or sound. In the past I had preferences and I just didn’t give other music the time of day. But all music is beautiful and amazing and there's always something to learn from it. So I listen to music as deeply as possible now, no matter what.\n\nIt’s the same way with conversations. There's so much more to conversation than just the words you're saying. It's also your reactions, your body language, your facial expressions. Even if it's over the phone, there's a difference between having a vibe and not having a vibe. That's a huge part of it. And then there are the moments of silence. I've fallen in love with silence recently because there's so much that it can say and there's so much space that silence gives that's necessary so that you can process things. If you're in space with other people and you're sharing silence, you can listen to each other better than when any person is talking.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rani-thompson","text":"Rani Thompson"}];
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
