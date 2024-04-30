import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z23Q019 = new Proxy({"src":"/_astro/Aima_Rashid.QKj1ofXc.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Aima_Rashid.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Aima_Rashid.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Aima_Rashid.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Aima_Rashid.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z23Q019, ...props});
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
			const html = await updateImageReferences("<h1 id=\"aima-rashid\">Aima Rashid</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Aima_Rashid.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Be more in the present and stop living in the past or worrying about the future. Just enjoy the moments of today.</p>\n<p>A lot of people are living in past trauma or worrying about the mistakes they made in the past or thinking about the future and the fact that “I want to do this, I want to do that” and then missing what they’re doing today.</p>\n<p>I’m a college student, so I think about how I could have done this or that. I should have done this more for grades or personal experience. And then I kind of miss out on what I’m learning and I forget to enjoy the material. I’m pre-med, so I constantly think about being a good applicant and sometimes I forget to enjoy things. I am a college student. I should be enjoying these days.</p>");
	

				const frontmatter = {"title":"Aima Rashid","description":"Aima stresses the importance of living in the present and not worrying about the future.","pubDate":"2024-03-15 11:16","author":"Sam Wu","tags":["Pre Med","Vermont","Indian"],"imgUrl":"../../assets/Aima_Rashid.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Aima Rashid.md";
				const url = undefined;
				function rawContent() {
					return "# Aima Rashid\n\n![local image](../../assets/Aima_Rashid.JPG)\n\nBe more in the present and stop living in the past or worrying about the future. Just enjoy the moments of today.\n\nA lot of people are living in past trauma or worrying about the mistakes they made in the past or thinking about the future and the fact that “I want to do this, I want to do that” and then missing what they're doing today.\n\nI'm a college student, so I think about how I could have done this or that. I should have done this more for grades or personal experience. And then I kind of miss out on what I'm learning and I forget to enjoy the material. I’m pre-med, so I constantly think about being a good applicant and sometimes I forget to enjoy things. I am a college student. I should be enjoying these days.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"aima-rashid","text":"Aima Rashid"}];
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
