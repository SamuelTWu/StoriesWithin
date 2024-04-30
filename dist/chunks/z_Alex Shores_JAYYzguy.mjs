import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZsMzyh = new Proxy({"src":"/_astro/Alex_Shores.eLNrBpXR.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Alex_Shores.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Alex_Shores.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Alex_Shores.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Alex_Shores.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZsMzyh, ...props});
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
			const html = await updateImageReferences("<h1 id=\"alex-shores\">Alex Shores</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Alex_Shores.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’m first gen. My dad went to a semester at a music school in Berkeley and my mom did a couple of semesters at a community college. They never got a degree. So neither of them had any experience and most of my relatives didn’t go to college, so I never really knew what to expect.</p>\n<p>My dad encouraged me to only think about my career and only do things in college that would benefit my career. But I realized that I’m a person and there’s so much more to me than that and to just explore those things.</p>\n<p>I looked up film clubs at BU and there aren’t too many, but there was the film fraternaty. I’m not a big frat person, but I was like, I’m gonna give it a shot. My sophomore year I had a leadership position in the club and I got more involved. We had  in-person events and we got to meet people and it was a ton of fun. I got involved in the production that year.</p>\n<p>It was my first time actually being on film sets because it was just hard to find anything at that time. And it was the best experience being on a film set for the first time, with all these people who also care about films and want to see it succeed. And just seeing how a set looks.</p>");
	

				const frontmatter = {"title":"Alex Shores","description":"As a first-generation college student, Alex initially faced pressure to focus solely on his career.","pubDate":"2024-01-30 09:13","author":"Sam Wu","tags":["Film","Arizona","First Gen"],"imgUrl":"../../assets/Alex_Shores.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/z_Alex Shores.md";
				const url = undefined;
				function rawContent() {
					return "# Alex Shores\n\n![local image](../../assets/Alex_Shores.JPG)\n\nI'm first gen. My dad went to a semester at a music school in Berkeley and my mom did a couple of semesters at a community college. They never got a degree. So neither of them had any experience and most of my relatives didn't go to college, so I never really knew what to expect.\n\nMy dad encouraged me to only think about my career and only do things in college that would benefit my career. But I realized that I'm a person and there's so much more to me than that and to just explore those things. \n\nI looked up film clubs at BU and there aren't too many, but there was the film fraternaty. I'm not a big frat person, but I was like, I'm gonna give it a shot. My sophomore year I had a leadership position in the club and I got more involved. We had  in-person events and we got to meet people and it was a ton of fun. I got involved in the production that year. \n\nIt was my first time actually being on film sets because it was just hard to find anything at that time. And it was the best experience being on a film set for the first time, with all these people who also care about films and want to see it succeed. And just seeing how a set looks.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"alex-shores","text":"Alex Shores"}];
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
