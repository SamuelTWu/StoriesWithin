import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2qRSNl = new Proxy({"src":"/_astro/Kyleigh_Stewart.r2BK3bxu.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kyleigh_Stewart.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kyleigh_Stewart.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Kyleigh_Stewart.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Kyleigh_Stewart.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2qRSNl, ...props});
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
			const html = await updateImageReferences("<h1 id=\"kyleigh-stewart\">Kyleigh Stewart</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Kyleigh_Stewart.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>You really never know what someone else may be going through in their lives. Take a second to pause, reflect, and think about what you say or what you do. Think about how it might affect everyone around you or even just yourself later. Take time and think things through.</p>\n<p>A lot of people rush into things really quickly. I see a lot of impulsive actions that really make people regret a lot of things in life. A lot of my family members say they’ve rushed into a lot of things in the past. They wish they had taken some time to think things through before they jumped in and looked at possible options.</p>\n<p>My grandmother, when she was 18 years old, she got accepted into Juilliard College. She wanted to be a dance major. However, her parents wanted her to be a piano major, and that wasn’t something she really wanted. So she decided to just say no to Juilliard completely and instead moved to Florida. When I talk to her, it’s always something she says she wishes she thought through more. She realized even though it wouldn’t have been dance, she would have rather played piano and enjoyed her music career.</p>\n<p>It’s made me think about decisions more. Especially since no one else in my family has ever gone to college. So it’s just me. I really took that to heart and I thought about all my options, especially when picking BU. My family has never done something like this before, so taking time to think about my options was really important.</p>");
	

				const frontmatter = {"title":"Kyleigh Stewart","description":"As a first generation student, Kyleigh prioritizes thought out decisions over hasty ones.","pubDate":"2024-03-15 14:40","author":"Sam Wu","tags":["Biology","California","First Gen"],"imgUrl":"../../assets/Kyleigh_Stewart.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Kyleigh Stewart.md";
				const url = undefined;
				function rawContent() {
					return "# Kyleigh Stewart\n\n![local image](../../assets/Kyleigh_Stewart.JPG)\n\nYou really never know what someone else may be going through in their lives. Take a second to pause, reflect, and think about what you say or what you do. Think about how it might affect everyone around you or even just yourself later. Take time and think things through.\n\nA lot of people rush into things really quickly. I see a lot of impulsive actions that really make people regret a lot of things in life. A lot of my family members say they’ve rushed into a lot of things in the past. They wish they had taken some time to think things through before they jumped in and looked at possible options. \n\nMy grandmother, when she was 18 years old, she got accepted into Juilliard College. She wanted to be a dance major. However, her parents wanted her to be a piano major, and that wasn't something she really wanted. So she decided to just say no to Juilliard completely and instead moved to Florida. When I talk to her, it's always something she says she wishes she thought through more. She realized even though it wouldn't have been dance, she would have rather played piano and enjoyed her music career. \n\nIt's made me think about decisions more. Especially since no one else in my family has ever gone to college. So it's just me. I really took that to heart and I thought about all my options, especially when picking BU. My family has never done something like this before, so taking time to think about my options was really important. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"kyleigh-stewart","text":"Kyleigh Stewart"}];
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
