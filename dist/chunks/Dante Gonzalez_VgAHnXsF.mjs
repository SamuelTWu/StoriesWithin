import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1E53Wl = new Proxy({"src":"/_astro/Dante_Gonzalez.IVHuFuMz.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Dante_Gonzalez.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Dante_Gonzalez.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Dante_Gonzalez.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Dante_Gonzalez.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1E53Wl, ...props});
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
			const html = await updateImageReferences("<h1 id=\"dante-gonzalez\">Dante Gonzalez</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Dante_Gonzalez.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"on-transitioning\">On Transitioning</h2>\n<p>The biggest change for me other than starting to work on art 24/7 was that I came out as a trans person. Both of those changes started at the same time, so it was a really big lifestyle change. I would be going to class all day and then working all night while also being out for the first time was really amazing and also overwhelming.</p>\n<p>I decided to come out publicly at BU when I started, and then I decided to tell my parents in December when I realized that I couldn’t hide it anymore. I was like, I’m just gonna commit to it and be prepared for whatever may happen.</p>\n<p>When I first came out through BU there was a lot of changing my name on forms and things like that. Lots of emails to people saying, “Can you please use this name instead?” and explaining things to professors. Just the minutia of every single document, having a name that I didn’t use anymore. Then I started to go through the student health services for gender-affirming health care, and they were super helpful. There was a super kind lady who helped me out and helped me through the process of getting referred to a therapist, which you need to get gender-affirming health care. Then working through how to get hormones and how to take hormones, especially during COVID, because they weren’t taking in-person visits, so I had to do everything digitally.</p>\n<p>I think so much has changed since freshman year because of the organization “Q” (Queer Activist Collective). They did a lot of work to help streamline the process of coming out, changing your name, all of the electronic paperwork, helping provide access to, gender-affirming products, and things like that. They’ve been super helpful all the time.</p>\n<h2 id=\"on-storytelling\">On Storytelling</h2>\n<p>I just love stories. I love storytelling. I find it so fascinating what stories we like and why we like them. When I think about what the big stories in America are right now, I think of Marvel, I think of the Jordan Peele movies. What’s big in American theater right now tends to try and play catch up with movies and I don’t wanna do that. I wanna have new stories. I don’t want to be redoing the same Shakespeare. I want it to at least be a little bit different.</p>\n<p>I think a good story makes us question who we are and who we let have power over us. And I think a lot of older stories reinforce power, especially thinking just of Shakespeare. There are so many stories in Shakespeare that reinforce things like monarchies and I think a lot of modern plays and modern movies do the same thing. I wanna push back against that.</p>\n<p>In high school and middle school, theater and art are so much about self-expression, but in college, your view shifts to what the audience wants, what stakeholders want, and what producers want. That’s the crux of what artistic integrity is. But to be completely self-centered in your art isn’t necessarily a good thing either. Like if I’m the only person in the world who wants this, then maybe I shouldn’t write and produce a play about it.</p>\n<p>For me personally, when I’m writing or working on a piece, I think about what is universal and also specific about the work. I’m working on a play about being queer and being transgender and I’m looking at it through the lens of Greek mythology, which is something that our generation tends to have a lot of experience.</p>");
	

				const frontmatter = {"title":"Dante Gonzalez","description":"Dante is transitioning to a full-time artist and coming out as trans.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Theater","Art Design","Texas","Hispanic"],"imgUrl":"../../assets/Dante_Gonzalez.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Dante Gonzalez.md";
				const url = undefined;
				function rawContent() {
					return "# Dante Gonzalez\n\n![local image](../../assets/Dante_Gonzalez.JPG)\n\n## On Transitioning \nThe biggest change for me other than starting to work on art 24/7 was that I came out as a trans person. Both of those changes started at the same time, so it was a really big lifestyle change. I would be going to class all day and then working all night while also being out for the first time was really amazing and also overwhelming.\n\nI decided to come out publicly at BU when I started, and then I decided to tell my parents in December when I realized that I couldn't hide it anymore. I was like, I'm just gonna commit to it and be prepared for whatever may happen.\n\nWhen I first came out through BU there was a lot of changing my name on forms and things like that. Lots of emails to people saying, “Can you please use this name instead?” and explaining things to professors. Just the minutia of every single document, having a name that I didn't use anymore. Then I started to go through the student health services for gender-affirming health care, and they were super helpful. There was a super kind lady who helped me out and helped me through the process of getting referred to a therapist, which you need to get gender-affirming health care. Then working through how to get hormones and how to take hormones, especially during COVID, because they weren't taking in-person visits, so I had to do everything digitally.\n\nI think so much has changed since freshman year because of the organization “Q” (Queer Activist Collective). They did a lot of work to help streamline the process of coming out, changing your name, all of the electronic paperwork, helping provide access to, gender-affirming products, and things like that. They've been super helpful all the time.\n\n## On Storytelling\nI just love stories. I love storytelling. I find it so fascinating what stories we like and why we like them. When I think about what the big stories in America are right now, I think of Marvel, I think of the Jordan Peele movies. What's big in American theater right now tends to try and play catch up with movies and I don't wanna do that. I wanna have new stories. I don't want to be redoing the same Shakespeare. I want it to at least be a little bit different. \n\nI think a good story makes us question who we are and who we let have power over us. And I think a lot of older stories reinforce power, especially thinking just of Shakespeare. There are so many stories in Shakespeare that reinforce things like monarchies and I think a lot of modern plays and modern movies do the same thing. I wanna push back against that.\n\nIn high school and middle school, theater and art are so much about self-expression, but in college, your view shifts to what the audience wants, what stakeholders want, and what producers want. That's the crux of what artistic integrity is. But to be completely self-centered in your art isn't necessarily a good thing either. Like if I'm the only person in the world who wants this, then maybe I shouldn't write and produce a play about it. \n\nFor me personally, when I'm writing or working on a piece, I think about what is universal and also specific about the work. I'm working on a play about being queer and being transgender and I'm looking at it through the lens of Greek mythology, which is something that our generation tends to have a lot of experience. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"dante-gonzalez","text":"Dante Gonzalez"},{"depth":2,"slug":"on-transitioning","text":"On Transitioning"},{"depth":2,"slug":"on-storytelling","text":"On Storytelling"}];
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
