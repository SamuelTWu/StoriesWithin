import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1X2rfR = new Proxy({"src":"/_astro/Rudy_Joseph.fMLBDG15.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rudy_Joseph.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Rudy_Joseph.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Rudy_Joseph.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Rudy_Joseph.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1X2rfR, ...props});
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
			const html = await updateImageReferences("<h1 id=\"rudy-joseph\">Rudy Joseph</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Rudy_Joseph.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>It started with looking at Instagram. I came across one of my friends who was also at Montclair State announcing that she was going to BU. I was like, oh wow, I wanted to go to the school when I was in high school, but I didn’t get in at the time. And then I was like, let me just look back at this school again to see what’s up and what else is new. The BU School of Education was starting my major, education and human development. It was very new at BU and it was something that was directly aligned with what I was interested in.</p>\n<p>It just opened my mind to just the possibility of education and I was just like, there has to be something more. So when I did come across that Instagram page of my friends, I thought I would be able to do something more with education.</p>\n<p>This is in December. There was only like one week left in the semester at the time, so I had to reach out. I was in Boy Scouts, and I asked one of the scout leaders whose son also was a BU student. His son was also my patrol leader for two years, so we’re also pretty close. It was like Christmas Eve and I was like, please help me. His entire family pushed him to write a recommendation letter. I was able to get through the application on my own.</p>\n<p>Here, I realized even though I wanted to become a teacher one day, it was really difficult to be a teacher in a system that wasn’t working for a lot of people. I want to make sure I can support the context of our next generation’s education before I assume the role of being a teacher. So I wanted to study education beyond the notion of traditional structure and learn how systems can be transformed in response to an evolving society.</p>");
	

				const frontmatter = {"title":"Rudy Joseph","description":"Rudy was inspired to transfer and has since pursued a future in education.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["First Gen","Education","Transfer","Black"],"imgUrl":"../../assets/Rudy_Joseph.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Rudy Joseph.md";
				const url = undefined;
				function rawContent() {
					return "# Rudy Joseph\n\n![local image](../../assets/Rudy_Joseph.JPG)\n\nIt started with looking at Instagram. I came across one of my friends who was also at Montclair State announcing that she was going to BU. I was like, oh wow, I wanted to go to the school when I was in high school, but I didn't get in at the time. And then I was like, let me just look back at this school again to see what's up and what else is new. The BU School of Education was starting my major, education and human development. It was very new at BU and it was something that was directly aligned with what I was interested in.\n\nIt just opened my mind to just the possibility of education and I was just like, there has to be something more. So when I did come across that Instagram page of my friends, I thought I would be able to do something more with education.\n\nThis is in December. There was only like one week left in the semester at the time, so I had to reach out. I was in Boy Scouts, and I asked one of the scout leaders whose son also was a BU student. His son was also my patrol leader for two years, so we're also pretty close. It was like Christmas Eve and I was like, please help me. His entire family pushed him to write a recommendation letter. I was able to get through the application on my own.\n\nHere, I realized even though I wanted to become a teacher one day, it was really difficult to be a teacher in a system that wasn't working for a lot of people. I want to make sure I can support the context of our next generation’s education before I assume the role of being a teacher. So I wanted to study education beyond the notion of traditional structure and learn how systems can be transformed in response to an evolving society.\n\n\n\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"rudy-joseph","text":"Rudy Joseph"}];
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
