import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1XkmTg = new Proxy({"src":"/_astro/Dima_Ghalili.coz3wDdV.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Dima_Ghalili.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Dima_Ghalili.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Dima_Ghalili.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Dima_Ghalili.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1XkmTg, ...props});
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
			const html = await updateImageReferences("<h1 id=\"dima-ghalili\">Dima Ghalili</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Dima_Ghalili.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>High school is a really interesting time for me. I went to an international school in China. In the beginning, I was very shy and closed off… But I felt pretty true to who I was and I was able to investigate that for the first time. High school was the first time where I was with other people from all around the world… So it was really special.</p>\n<p>It’s interesting… when I moved to BU in my sophomore year, my roommates were all white and from around this area. So it was very new, not necessarily to be around Americans and white people, but to be around people that had a very fixed worldview. It kind of had me very much questioning my identity, because, for the first time, I felt like I needed a label for myself: for people to understand me.</p>\n<p>Now that I’m in my last semester, I’ve felt a lot more fulfilled and a lot more at peace with where I am socially. I’ve found out that I’m more social than I thought. When I’m forced in a situation to be around people, I enjoy myself and I think I’m able to flourish and build connections. A lot of people are often very judgmental about what they might say, but when you actually get to know them, you realize that’s not how they act. The world becomes an exciting place, once you give people a chance and give yourself a chance, especially when you explore who you are and explore the people around you.</p>");
	

				const frontmatter = {"title":"Dima Ghalili","description":"Dima recounts his transition from an international high school to BU.","pubDate":"2024-02-29 21:11","author":"Sam Wu","tags":["China","International","Asian","Psychology"],"imgUrl":"../../assets/Dima_Ghalili.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Dima Ghalili.md";
				const url = undefined;
				function rawContent() {
					return "# Dima Ghalili\n\n![local image](../../assets/Dima_Ghalili.JPG)\n\nHigh school is a really interesting time for me. I went to an international school in China. In the beginning, I was very shy and closed off... But I felt pretty true to who I was and I was able to investigate that for the first time. High school was the first time where I was with other people from all around the world... So it was really special. \n\nIt's interesting… when I moved to BU in my sophomore year, my roommates were all white and from around this area. So it was very new, not necessarily to be around Americans and white people, but to be around people that had a very fixed worldview. It kind of had me very much questioning my identity, because, for the first time, I felt like I needed a label for myself: for people to understand me.\n\nNow that I'm in my last semester, I've felt a lot more fulfilled and a lot more at peace with where I am socially. I’ve found out that I’m more social than I thought. When I'm forced in a situation to be around people, I enjoy myself and I think I'm able to flourish and build connections. A lot of people are often very judgmental about what they might say, but when you actually get to know them, you realize that's not how they act. The world becomes an exciting place, once you give people a chance and give yourself a chance, especially when you explore who you are and explore the people around you.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"dima-ghalili","text":"Dima Ghalili"}];
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
