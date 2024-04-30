import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__2nvTza = new Proxy({"src":"/_astro/Selah_Youn.DgJKNd7X.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Selah_Youn.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Selah_Youn.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Selah_Youn.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Selah_Youn.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__2nvTza, ...props});
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
			const html = await updateImageReferences("<h1 id=\"selah-youn\">Selah Youn</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Selah_Youn.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was an English minor and then I became an English major after much deliberation. My relationship with my parents is tumultuous. Definitely. They always wanted me to go to Med School. Don’t get me wrong, I still like bio. But recognized that even through high school really enjoyed my English classes. I was always a big reader. I like to write. To my parents, it was just an extra thing that I’m passionate about. And I think that I’m good enough at bio to major in it.</p>\n<p>I realized I’m gonna be doing whatever I major in for the rest of my life. A lot of people say if you’re gonna change majors, do it during undergrad. If you realize your passions later in life, you’re stuck at this dead-end job.</p>\n<p>I realized I’d be doing a disservice to my patients and myself if put myself through all that emotional and physical stress. And money. So I had to really dig deep and think about what I actually wanted to do. I can’t just go by what my parents have been kind of pushing me towards. Not saying that I didn’t want to, I just had to choose between two.</p>\n<p>I’ve started recognizing that fulfillment is more important than money. I don’t want to wake up every single day and be like, damn, I have to go back to my job, you know what I mean? On top of that, I knew what I wanted to do with my English major. So I didn’t go into it blindly. That’s the only thing that convinced my parents. They were like, you can switch, but those conversations were long and hard. But in the end, I had to be like, it’s not your life, is it?</p>");
	

				const frontmatter = {"title":"Selah Youn","description":"Selah delves into her transition to English as a major and what it taught her.","pubDate":"2024-03-17 13:55","author":"Sam Wu","tags":["Asian","English","Pennsylvania"],"imgUrl":"../../assets/Selah_Youn.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Selah Youn.md";
				const url = undefined;
				function rawContent() {
					return "# Selah Youn\n\n![local image](../../assets/Selah_Youn.JPG)\n\nI was an English minor and then I became an English major after much deliberation. My relationship with my parents is tumultuous. Definitely. They always wanted me to go to Med School. Don’t get me wrong, I still like bio. But recognized that even through high school really enjoyed my English classes. I was always a big reader. I like to write. To my parents, it was just an extra thing that I'm passionate about. And I think that I'm good enough at bio to major in it.\n\nI realized I'm gonna be doing whatever I major in for the rest of my life. A lot of people say if you're gonna change majors, do it during undergrad. If you realize your passions later in life, you're stuck at this dead-end job. \n\nI realized I'd be doing a disservice to my patients and myself if put myself through all that emotional and physical stress. And money. So I had to really dig deep and think about what I actually wanted to do. I can't just go by what my parents have been kind of pushing me towards. Not saying that I didn't want to, I just had to choose between two. \n\nI’ve started recognizing that fulfillment is more important than money. I don't want to wake up every single day and be like, damn, I have to go back to my job, you know what I mean? On top of that, I knew what I wanted to do with my English major. So I didn’t go into it blindly. That's the only thing that convinced my parents. They were like, you can switch, but those conversations were long and hard. But in the end, I had to be like, it's not your life, is it?\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"selah-youn","text":"Selah Youn"}];
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
