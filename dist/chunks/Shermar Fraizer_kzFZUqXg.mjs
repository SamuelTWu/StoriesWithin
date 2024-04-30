import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__UkLue = new Proxy({"src":"/_astro/Shermar_Fraizer.phgYoA3L.JPG","width":4000,"height":6000,"format":"jpg","orientation":8}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Shermar_Fraizer.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Shermar_Fraizer.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Shermar_Fraizer.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Shermar_Fraizer.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__UkLue, ...props});
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
			const html = await updateImageReferences("<h1 id=\"shermar-fraizer\">Shermar Fraizer</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Shermar_Fraizer.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The way I expressed my blackness or the way that I felt like my blackness was portrayed to me growing up was vastly different. I was taught that I’m supposed to be proud of my blackness but also somewhat suppress it because of all of the backlash and all the terrible things that can come with it.</p>\n<p>I don’t think my family did this intentionally, but unintentionally, I was afraid to embrace my blackness because all I can remember was like, don’t wear your hood inside of stores, make sure that you have a receipt on you at all times, don’t go into any sort of space acting like any sort of way, don’t talk back to the policeman, don’t look the policeman in the eye, look at the ground, don’t make any certain movements, blah, blah, blah.</p>\n<p>You know how people talk about having the sex talk with their parents, stuff like that? In the black community, we have the “Black Talk” and what you’re going to experience growing up.</p>\n<p>And I had that at maybe like age 11 or 12. So you’re told to be proud of your blackness and whatnot, but also what comes with embracing that pride. I had a really hard time being able to embrace it because when I went to an almost all-white school and middle school, I got picked on for being black and I thought that I had to like code-switch in order to survive and make friends. And then I got picked on for it by other black people who felt like I was masking myself by speaking white or speaking quote-unquote properly. So it was kind of like having to code switch and then feeling though you’re still not safe and then like turning the switch off and you’re going to be safe and you’re still not safe.</p>\n<p>Now, I’m proud to be black and no one, not even me, can stop me from embracing that.</p>");
	

				const frontmatter = {"title":"Shermar Fraizer","description":"Complex upbringing shaped Shermar's conflicted feelings. Now, Shermar proudly embraces a black identity.","pubDate":"2024-02-08 13:52","author":"Sam Wu","tags":["First Gen","Black","Psychology"],"imgUrl":"../../assets/Shermar_Fraizer.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Shermar Fraizer.md";
				const url = undefined;
				function rawContent() {
					return "# Shermar Fraizer\n\n![local image](../../assets/Shermar_Fraizer.JPG)\n\nThe way I expressed my blackness or the way that I felt like my blackness was portrayed to me growing up was vastly different. I was taught that I’m supposed to be proud of my blackness but also somewhat suppress it because of all of the backlash and all the terrible things that can come with it.\n\nI don’t think my family did this intentionally, but unintentionally, I was afraid to embrace my blackness because all I can remember was like, don’t wear your hood inside of stores, make sure that you have a receipt on you at all times, don’t go into any sort of space acting like any sort of way, don’t talk back to the policeman, don’t look the policeman in the eye, look at the ground, don’t make any certain movements, blah, blah, blah.\n\nYou know how people talk about having the sex talk with their parents, stuff like that? In the black community, we have the “Black Talk” and what you’re going to experience growing up.\n\nAnd I had that at maybe like age 11 or 12. So you’re told to be proud of your blackness and whatnot, but also what comes with embracing that pride. I had a really hard time being able to embrace it because when I went to an almost all-white school and middle school, I got picked on for being black and I thought that I had to like code-switch in order to survive and make friends. And then I got picked on for it by other black people who felt like I was masking myself by speaking white or speaking quote-unquote properly. So it was kind of like having to code switch and then feeling though you’re still not safe and then like turning the switch off and you’re going to be safe and you’re still not safe.\n\nNow, I’m proud to be black and no one, not even me, can stop me from embracing that.\n\n\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"shermar-fraizer","text":"Shermar Fraizer"}];
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
