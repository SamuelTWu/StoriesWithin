import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1xe0e8 = new Proxy({"src":"/_astro/Liam_Henson.3YERXl1K.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Liam_Henson.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Liam_Henson.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Liam_Henson.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Liam_Henson.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1xe0e8, ...props});
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
			const html = await updateImageReferences("<h1 id=\"liam-henson\">Liam Henson</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Liam_Henson.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was semi-bullied in high school which came along with the toxic environment of the stem majors.  In college, I’m not put down for not being smart. I’m allowed to make mistakes and I am surrounded by friends who make me feel like I can show them my weaknesses and flaws.\nI am a lot more confident, whereas before I was met with scolding and bad remarks. Here, it’s like we’re all human, we’re not perfect, we make mistakes and I have friends who have faith in me.</p>\n<p>Throughout high school, I didn’t really think about who I was. I guess I’m proud of my identity but I don’t wear it on my chest or anything. I’m half Asian; I have a Chinese mom. After the divorce, it was just me and her. During the Asian hate period, I was reminded that I’m half Chinese, and my mom is Chinese. It was like a reminder of who we are, and where we come from.</p>\n<p>I remember in spring 2021, there were hate crimes going on in SF. I told my mom, please be careful when you go out or stay indoors. I wasn’t too worried because she never got hurt, thank God, it was always a little stressful to know that my people were being attacked. I was like, oh shit, my mom is Chinese. I’m half-Chinese. I have to be worried about that now.</p>");
	

				const frontmatter = {"title":"Liam Henson","description":"Liam discusses high school struggles, college acceptance, and embracing identity.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Chinese","California","Psychology"],"imgUrl":"../../assets/Liam_Henson.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Liam Henson.md";
				const url = undefined;
				function rawContent() {
					return "# Liam Henson\n\n![local image](../../assets/Liam_Henson.JPG)\n\nI was semi-bullied in high school which came along with the toxic environment of the stem majors.  In college, I'm not put down for not being smart. I'm allowed to make mistakes and I am surrounded by friends who make me feel like I can show them my weaknesses and flaws. \nI am a lot more confident, whereas before I was met with scolding and bad remarks. Here, it's like we're all human, we're not perfect, we make mistakes and I have friends who have faith in me. \n\nThroughout high school, I didn’t really think about who I was. I guess I'm proud of my identity but I don't wear it on my chest or anything. I'm half Asian; I have a Chinese mom. After the divorce, it was just me and her. During the Asian hate period, I was reminded that I'm half Chinese, and my mom is Chinese. It was like a reminder of who we are, and where we come from.\n\nI remember in spring 2021, there were hate crimes going on in SF. I told my mom, please be careful when you go out or stay indoors. I wasn't too worried because she never got hurt, thank God, it was always a little stressful to know that my people were being attacked. I was like, oh shit, my mom is Chinese. I'm half-Chinese. I have to be worried about that now. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"liam-henson","text":"Liam Henson"}];
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
