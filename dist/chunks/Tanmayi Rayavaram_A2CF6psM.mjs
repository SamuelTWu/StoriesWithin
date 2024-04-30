import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1Lmp8V = new Proxy({"src":"/_astro/Tanmayi_Rayavaram_2.f-da1Mil.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Tanmayi_Rayavaram_2.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Tanmayi_Rayavaram_2.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Tanmayi_Rayavaram_2.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Tanmayi_Rayavaram_2.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1Lmp8V, ...props});
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
			const html = await updateImageReferences("<h1 id=\"tanmayi-rayavaram\">Tanmayi Rayavaram</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Tanmayi_Rayavaram_2.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was born in Queens, New York City. There’s so much diversity there. But when I was little, my mom moved to upstate New York. We moved to a town that has 2000 people and all of them are white. So the contrast was crazy. It was weird. Some things were super polarizing. Like, I was the first person of color to ever win prom queen.</p>\n<p>In the whole school, there were maybe 10 Indian kids in total. I was insecure about my identity and who I was because I wasn’t white. It wasn’t that I felt ashamed for not being white, it was more that I knew that if I was white, I would be looked at differently. This might sound superficial, but I ended up losing a ton of weight. I just wanted to reinvent myself. And then sophomore year I came in and people started looking at me differently. I got so many more friends and I felt more confident and I just was more outgoing. I was proud of that in high school because there was a lot of racism.</p>\n<p>So I’ve always wanted more brown friends, but when I got to BU it was a struggle. Freshman year I didn’t have a single brown friend. All of my friends were East Asian or white. It wasn’t until junior year that I found my ‘group’. That’s when I met my closest friends like Samaa. Even though she wasn’t Indian, I just felt like I could relate so much more, because we had similar experiences.</p>\n<p>I think it’s important to remember that you don’t have to find your close group of friends freshman year or even sophomore year. Don’t feel pressure to join things that you don’t want to join. You don’t have to join 30 different clubs your freshman year. I don’t think that’s how you do it. I think you just just be yourself and joke with people and if they like your energy, they will match it.</p>");
	

				const frontmatter = {"title":"Tanmayi Rayavaram","description":"Tanmayi struggled to find identity growing up, but later found belonging.","pubDate":"2024-03-4 14:24","author":"Sam Wu","tags":["New York","IR","Indian","Asian"],"imgUrl":"../../assets/Tanmayi_Rayavaram_1.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Tanmayi Rayavaram.md";
				const url = undefined;
				function rawContent() {
					return "# Tanmayi Rayavaram\n\n![local image](../../assets/Tanmayi_Rayavaram_2.JPG)\n\nI was born in Queens, New York City. There’s so much diversity there. But when I was little, my mom moved to upstate New York. We moved to a town that has 2000 people and all of them are white. So the contrast was crazy. It was weird. Some things were super polarizing. Like, I was the first person of color to ever win prom queen.\n\nIn the whole school, there were maybe 10 Indian kids in total. I was insecure about my identity and who I was because I wasn't white. It wasn’t that I felt ashamed for not being white, it was more that I knew that if I was white, I would be looked at differently. This might sound superficial, but I ended up losing a ton of weight. I just wanted to reinvent myself. And then sophomore year I came in and people started looking at me differently. I got so many more friends and I felt more confident and I just was more outgoing. I was proud of that in high school because there was a lot of racism.\n\nSo I’ve always wanted more brown friends, but when I got to BU it was a struggle. Freshman year I didn’t have a single brown friend. All of my friends were East Asian or white. It wasn’t until junior year that I found my ‘group’. That's when I met my closest friends like Samaa. Even though she wasn’t Indian, I just felt like I could relate so much more, because we had similar experiences. \n\nI think it’s important to remember that you don't have to find your close group of friends freshman year or even sophomore year. Don’t feel pressure to join things that you don't want to join. You don’t have to join 30 different clubs your freshman year. I don't think that's how you do it. I think you just just be yourself and joke with people and if they like your energy, they will match it.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"tanmayi-rayavaram","text":"Tanmayi Rayavaram"}];
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
