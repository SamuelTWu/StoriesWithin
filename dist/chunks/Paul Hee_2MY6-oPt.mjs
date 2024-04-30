import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__WtnkO = new Proxy({"src":"/_astro/Paul_Hee.O9UZtXzt.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Paul_Hee.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Paul_Hee.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Paul_Hee.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Paul_Hee.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__WtnkO, ...props});
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
			const html = await updateImageReferences("<h1 id=\"paul-hee\">Paul Hee</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Paul_Hee.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I realized, holy crap, school is no longer a joke anymore. I have to say that’s probably my biggest struggle transitioning from high school to college. I went through high school as, like, top of my class honor roll. I recognize now the level of education really screwed me over. Because I never struggled in high school. And that honestly screwed me over going to BU because then I really learned what truly difficult classes are.</p>\n<p>In sophomore year, I finally went to a psychologist. I got diagnosed with ADHD and dyslexia. I was like, fuck.</p>\n<p>But I discovered all that my sophomore year and I ended up being put on medication. It changed everything. I was just like, dang, it’s easier to read a book now. It was easier to watch a lecture without fidgeting. Like, I realized how bad my stressors were just to focus in class. You would see my foot bouncing. I needed to move. I needed to get up. The biggest thing is I would scratch my head, but I used to do it till it bled, that’s how bad it was. And I never recognized that as an issue. It’s not like they don’t exist back home. It’s that no one knows about them.</p>");
	

				const frontmatter = {"title":"Paul Hee","description":"As a student with ADHD, Paul struggled with the transition to college.","pubDate":"2024-03-17 13:58","author":"Sam Wu","tags":["Asian","Hispanic","Pre Med","Nevada"],"imgUrl":"../../assets/Paul_Hee.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Paul Hee.md";
				const url = undefined;
				function rawContent() {
					return "# Paul Hee\n\n![local image](../../assets/Paul_Hee.JPG)\n\nI realized, holy crap, school is no longer a joke anymore. I have to say that's probably my biggest struggle transitioning from high school to college. I went through high school as, like, top of my class honor roll. I recognize now the level of education really screwed me over. Because I never struggled in high school. And that honestly screwed me over going to BU because then I really learned what truly difficult classes are.\n\nIn sophomore year, I finally went to a psychologist. I got diagnosed with ADHD and dyslexia. I was like, fuck. \n\nBut I discovered all that my sophomore year and I ended up being put on medication. It changed everything. I was just like, dang, it's easier to read a book now. It was easier to watch a lecture without fidgeting. Like, I realized how bad my stressors were just to focus in class. You would see my foot bouncing. I needed to move. I needed to get up. The biggest thing is I would scratch my head, but I used to do it till it bled, that's how bad it was. And I never recognized that as an issue. It's not like they don't exist back home. It's that no one knows about them.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"paul-hee","text":"Paul Hee"}];
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
