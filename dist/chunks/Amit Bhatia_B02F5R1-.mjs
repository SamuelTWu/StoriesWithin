import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Zm27x4 = new Proxy({"src":"/_astro/Amit_Bhatia.hrXtJeKY.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Amit_Bhatia.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Amit_Bhatia.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Amit_Bhatia.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Amit_Bhatia.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Zm27x4, ...props});
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
			const html = await updateImageReferences("<h1 id=\"amit-bhatia\">Amit Bhatia</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Amit_Bhatia.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In 8th I picked up Garage Band on my mom’s iPad. I don’t even know why. I think I was just drawn to it. I started messing around with it and I got hooked instantly. I was creating beats and loops and I started experimenting with recording my voice. Obviously, I couldn’t sing or do anything but still, I would practice rapping music and stuff like that.</p>\n<p>I became obsessed with it in high school. Early in high school, I got my first Macbook. The Garage Band on Mac is a lot more powerful than on iPad. I decided to start recording things but I didn’t have all the expensive plugins and equipment and stuff, so every day it was like a puzzle. I was like, how can I recreate the expensive plugins on these stock-free plug-ins? And I started finding out ways that were kind of unknown. People hadn’t posted it on YouTube or anything. It wasn’t documented.</p>\n<p>I was like a pioneer. I started posting that and one day I looked and suddenly I had like 40 subscribers. I go back and check and I saw I had a few 1000 views on this video. Now, a couple of years later, I have a few videos with 304K or 100K. I started using that as a way to market my services. I do one-on-one stuff for people who don’t have a lot of money to pay for audio engineering. I paused on the YouTube channel a while back and honestly, I paused on the entire music production thing. I mostly do it for fun now.</p>\n<p>In college, I continued to focus on drumming. The problem is I can’t just go down in my basement and play drums like I can at home.  I’ve sacrificed some of that continual practice, but I don’t think I’ve regressed in school; I’ve improved actually. I think with sound engineering and music production, it’s kind of just dropped off. I can’t just whip out a mic and just start rapping, or I could but I just don’t really feel comfortable doing that. But I think I’d like to keep doing it. It’s a good passion, and I try to hold on to my younger self as much as possible because I think it’s really easy to let yourself go.</p>");
	

				const frontmatter = {"title":"Amit Bhatia","description":"From GarageBand on iPad to YouTube success, Amit's audio engineering passion persists.","pubDate":"2024-02-22 11:52","author":"Sam Wu","tags":["Indian","Rhode Island","Asian","Music"],"imgUrl":"../../assets/Amit_Bhatia.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Amit Bhatia.md";
				const url = undefined;
				function rawContent() {
					return "# Amit Bhatia\n\n![local image](../../assets/Amit_Bhatia.JPG)\n\nIn 8th I picked up Garage Band on my mom's iPad. I don't even know why. I think I was just drawn to it. I started messing around with it and I got hooked instantly. I was creating beats and loops and I started experimenting with recording my voice. Obviously, I couldn't sing or do anything but still, I would practice rapping music and stuff like that. \n\nI became obsessed with it in high school. Early in high school, I got my first Macbook. The Garage Band on Mac is a lot more powerful than on iPad. I decided to start recording things but I didn’t have all the expensive plugins and equipment and stuff, so every day it was like a puzzle. I was like, how can I recreate the expensive plugins on these stock-free plug-ins? And I started finding out ways that were kind of unknown. People hadn’t posted it on YouTube or anything. It wasn't documented. \n\nI was like a pioneer. I started posting that and one day I looked and suddenly I had like 40 subscribers. I go back and check and I saw I had a few 1000 views on this video. Now, a couple of years later, I have a few videos with 304K or 100K. I started using that as a way to market my services. I do one-on-one stuff for people who don't have a lot of money to pay for audio engineering. I paused on the YouTube channel a while back and honestly, I paused on the entire music production thing. I mostly do it for fun now. \n\nIn college, I continued to focus on drumming. The problem is I can't just go down in my basement and play drums like I can at home.  I've sacrificed some of that continual practice, but I don't think I've regressed in school; I've improved actually. I think with sound engineering and music production, it's kind of just dropped off. I can't just whip out a mic and just start rapping, or I could but I just don’t really feel comfortable doing that. But I think I’d like to keep doing it. It’s a good passion, and I try to hold on to my younger self as much as possible because I think it's really easy to let yourself go.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"amit-bhatia","text":"Amit Bhatia"}];
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
