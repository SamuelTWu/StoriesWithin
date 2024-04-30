import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__14B8pf = new Proxy({"src":"/_astro/Nourhan_El_Sherif.6-0wXYex.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Nourhan_El_Sherif.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Nourhan_El_Sherif.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Nourhan_El_Sherif.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Nourhan_El_Sherif.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__14B8pf, ...props});
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
			const html = await updateImageReferences("<h1 id=\"nourhan-el-sherif\">Nourhan El Sherif</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Nourhan_El_Sherif.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In high school, I started getting into fashion. I grew up wearing polos every day cause that was my Arab family’s definition of super stylish and cool (but cmon not for a 6th grader). So when I finally had the chance, I experimented with all different styles— which also meant I went through pretty embarrassing phases, like a collection of hot-topic shirts. All of this changed when my mom went on a pilgrimage to Mecca around my junior year. It was transformational for her and she became more religious. Since she was always my role model, it guided me to be more religious as well. That’s when I started prioritizing modesty. I wasn’t always perfect at it, but going into college, I made it a goal to improve.</p>\n<p>In my freshman year, I joined the Islamic Society of BU and became really involved. I met a bunch of my really close friends there. They set an amazing standard for morals and values, which helped me feel more comfortable embracing my Muslim identity. They became my little family. They inspired and empowered me. Thanks to all that, now I wear the hijab. It all came full circle!</p>\n<p>My freshman year was during COVID, so the community was pretty tiny since not a lot of people were on campus. The hidden blessing of COVID was how tight-knit the community became. I got to know everybody and got involved quickly. The president my freshman year was also super welcoming and made me feel like I really had brothers and sisters at BU, easing my homesickness. The community was very warm and inviting. It encouraged me to continue being involved. I remember packaging Ramadan Iftar meals in my tiny dorm sometimes. Everyone did their part to make things work with limited resources. It felt great to contribute to something meaningful. We had Iftars on the esplanade during sunset, it was beautiful! Definitely a core memory.</p>\n<p>I feel like BU is pretty accommodating in a lot of ways, but there’s definitely a lot of room for improvement. We’ve met with several deans, faculty, and staff to help with dining hall improvements, getting prayer rugs, funding for Ramadan, and things like that. So far they’re really good about trying to work with us. People will always have complaints, but I’m very thankful for their efforts.</p>");
	

				const frontmatter = {"title":"Nourhan El Sherif","description":"Noura discusses fashion to faith, community, and advocacy for ISBU.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Islam","Texas","Egyptian","Engineering"],"imgUrl":"../../assets/Nourhan_El_Sherif.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Nourhan El Sherif.md";
				const url = undefined;
				function rawContent() {
					return "# Nourhan El Sherif\n\n![local image](../../assets/Nourhan_El_Sherif.JPG)\n\nIn high school, I started getting into fashion. I grew up wearing polos every day cause that was my Arab family’s definition of super stylish and cool (but cmon not for a 6th grader). So when I finally had the chance, I experimented with all different styles— which also meant I went through pretty embarrassing phases, like a collection of hot-topic shirts. All of this changed when my mom went on a pilgrimage to Mecca around my junior year. It was transformational for her and she became more religious. Since she was always my role model, it guided me to be more religious as well. That’s when I started prioritizing modesty. I wasn’t always perfect at it, but going into college, I made it a goal to improve.\n\nIn my freshman year, I joined the Islamic Society of BU and became really involved. I met a bunch of my really close friends there. They set an amazing standard for morals and values, which helped me feel more comfortable embracing my Muslim identity. They became my little family. They inspired and empowered me. Thanks to all that, now I wear the hijab. It all came full circle!\n\nMy freshman year was during COVID, so the community was pretty tiny since not a lot of people were on campus. The hidden blessing of COVID was how tight-knit the community became. I got to know everybody and got involved quickly. The president my freshman year was also super welcoming and made me feel like I really had brothers and sisters at BU, easing my homesickness. The community was very warm and inviting. It encouraged me to continue being involved. I remember packaging Ramadan Iftar meals in my tiny dorm sometimes. Everyone did their part to make things work with limited resources. It felt great to contribute to something meaningful. We had Iftars on the esplanade during sunset, it was beautiful! Definitely a core memory.\n\nI feel like BU is pretty accommodating in a lot of ways, but there's definitely a lot of room for improvement. We’ve met with several deans, faculty, and staff to help with dining hall improvements, getting prayer rugs, funding for Ramadan, and things like that. So far they're really good about trying to work with us. People will always have complaints, but I'm very thankful for their efforts. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"nourhan-el-sherif","text":"Nourhan El Sherif"}];
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
