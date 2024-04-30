import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZMJz22 = new Proxy({"src":"/_astro/Rani_Shah.KsbHCq8n.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rani_Shah.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rani_Shah.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rani_Shah.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rani_Shah.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZMJz22, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rani-shah\">Rani Shah</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rani_Shah.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I don’t hate the Midwest as much as I thought I did back when I was in high school. Coming to Boston, I realized that places are not actually that vastly different. It’s in your mind: you make them out to be. I like some parts of the Midwest where there’s a little bit more breathing room, but I guess Boston is a bit more diverse and you’re able to find a little bit more cultural things happening.</p>\n<p>There are a few people I’ve met here who I definitely did not experience back home. There are a lot of people who are very obsessed with elitism. People are very into this idea of what job you’re getting or what status you have, who your parents are and what they do or where you grew up, things like that. Maybe that’s an age thing too. I don’t know. But here, especially in computer science, there are a few more people who have this idea that you need to get to the best, like you have to have the highest paying job and all this stuff it’s like, ok, calm down. We’re all gonna be fine.</p>\n<p>Even in that environment, there’s a decent chunk of people who don’t subscribe to those types of ideas and are a bit more down to earth. When you talk to someone you can kind of tell what they’re thinking on those terms. Focusing your energies on those people who are a bit more grounded is really important.</p>");
	

				const frontmatter = {"title":"Rani Shah","description":"Rani discusses midwest perspective shifts and Boston diversity, espcially in CS.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["CS","Minnesota","Indian","Asian"],"imgUrl":"../../assets/Rani_Shah.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rani Shah.md";
				const url = undefined;
				function rawContent() {
					return "# Rani Shah\n\n![local image](../../assets/Rani_Shah.JPG)\n\nI don't hate the Midwest as much as I thought I did back when I was in high school. Coming to Boston, I realized that places are not actually that vastly different. It's in your mind: you make them out to be. I like some parts of the Midwest where there's a little bit more breathing room, but I guess Boston is a bit more diverse and you're able to find a little bit more cultural things happening.\n\nThere are a few people I've met here who I definitely did not experience back home. There are a lot of people who are very obsessed with elitism. People are very into this idea of what job you're getting or what status you have, who your parents are and what they do or where you grew up, things like that. Maybe that's an age thing too. I don't know. But here, especially in computer science, there are a few more people who have this idea that you need to get to the best, like you have to have the highest paying job and all this stuff it’s like, ok, calm down. We're all gonna be fine.\n\nEven in that environment, there's a decent chunk of people who don't subscribe to those types of ideas and are a bit more down to earth. When you talk to someone you can kind of tell what they're thinking on those terms. Focusing your energies on those people who are a bit more grounded is really important. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rani-shah","text":"Rani Shah"}];
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
