import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1nPMwM = new Proxy({"src":"/_astro/Leensyn_Rivera.5HbQZ-aM.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Leensyn_Rivera.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Leensyn_Rivera.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Leensyn_Rivera.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Leensyn_Rivera.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1nPMwM, ...props});
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
			const html = await updateImageReferences("<h1 id=\"leensyn-rivera\">Leensyn Rivera</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Leensyn_Rivera.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I would say just Free Palestine to the entire city of Boston, the entire world if I could!</p>\n<p>I’m just thinking about what’s going on in Israel and Palestine. I don’t know why it’s so immediate to me right now. I guess it’s a hot topic. I’m not from the area. I don’t have any personal ties either. I just kind of feel strongly about it and a lot of other people do too. I don’t know.</p>\n<p>I thought the protests were great. I’m a transfer so I never really saw students doing things that. My old school was really small. I didn’t see things like that until I got here and I was like, that’s interesting. It’s nice to see because it’s history, you know what I mean? I like that. It’s a bunch of people who are so genuinely passionate or feel so strongly about something that they’re willing to walk out even when it’s really cold outside and spread the word and show love and support. I appreciate that a lot.</p>");
	

				const frontmatter = {"title":"Leensyn Rivera","description":"Leensyn is reflecting on the Israel-Palestine conflict and is appreciating the activism.","pubDate":"2024-02-23 14:33","author":"Sam Wu","tags":["Engineering","Massachusetts","Transfer"],"imgUrl":"../../assets/Leensyn_Rivera.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Leensyn Rivera.md";
				const url = undefined;
				function rawContent() {
					return "# Leensyn Rivera \n\n![local image](../../assets/Leensyn_Rivera.JPG)\n\nI would say just Free Palestine to the entire city of Boston, the entire world if I could!\n\nI'm just thinking about what's going on in Israel and Palestine. I don't know why it's so immediate to me right now. I guess it's a hot topic. I'm not from the area. I don't have any personal ties either. I just kind of feel strongly about it and a lot of other people do too. I don't know.\n\nI thought the protests were great. I'm a transfer so I never really saw students doing things that. My old school was really small. I didn't see things like that until I got here and I was like, that's interesting. It's nice to see because it's history, you know what I mean? I like that. It's a bunch of people who are so genuinely passionate or feel so strongly about something that they're willing to walk out even when it's really cold outside and spread the word and show love and support. I appreciate that a lot.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"leensyn-rivera","text":"Leensyn Rivera"}];
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
