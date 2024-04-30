import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__12HDCV = new Proxy({"src":"/_astro/Dhruv_Kapadia.bIQPvAp_.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Dhruv_Kapadia.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Dhruv_Kapadia.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Dhruv_Kapadia.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Dhruv_Kapadia.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__12HDCV, ...props});
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
			const html = await updateImageReferences("<h1 id=\"dhruv-kapadia\">Dhruv Kapadia</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Dhruv_Kapadia.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I think I was a pretty different person in my hometown. I grew up in a small suburb in central New Jersey, called Pennington. It was largely upper-middle-class white folk. I think a lot of the issues that I personally faced growing up are pretty similar to any person of color growing up in a predominantly white area: exclusion from friend groups, just feeling a little bit different.</p>\n<p>I think a lot of my political ambitions, political ideology, and general worldview were shaped in eighth grade. Through elementary school and middle school, I was very much a sheltered introverted kid who did not want to put his face out into anything. My parents’ philosophy was the standard Asian immigrant philosophy of like, keep your head down, get your work done.\nI had no intention of wanting to go into politics or like do any public service work. I think I was told to be an engineer and that was it. But then in eighth grade, which was also when I was really reconciling my identity, I read the autobiography of Malcolm X, and over the course of just a few months, it completely transformed the way I looked at race, the way I looked at politics, and how I felt about my responsibility to give back, beyond just myself.\nThat informed the way I moved through high school. I ended up doing a lot of political activism and public service-oriented work while I was in high school.</p>\n<p>Here at BU, it’s different. My hometown has, like, twenty thousand people, In Boston, it’s like four or five hundred thousand people, I think. In that regard, I have a lot of respect for the city government. There’s all these people, there’s all these streets, there’s all this land that you have to manage. A lot of the events I’ve gone to over the course of the last month have been community engagement events. We just go to parks once every week with the mayor and then you just meet with other constituents. You just gain a more appreciative understanding of BU’s placement in the city. Like how different it is to be a student at a top-tier institution compared to some of the things that other people literally 10 minutes down the road are dealing with.</p>");
	

				const frontmatter = {"title":"Dhruv Kapadia","description":"Dhruv reflects on his journey to becoming a politician in the Boston community.","pubDate":"2024-01-29 22:43","author":"Sam Wu","tags":["Poli Sci","New Jersey","Indian","Asian"],"imgUrl":"../../assets/Dhruv_Kapadia.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Dhruv Kapadia.md";
				const url = undefined;
				function rawContent() {
					return "# Dhruv Kapadia\n\n![local image](../../assets/Dhruv_Kapadia.JPG)\n\nI think I was a pretty different person in my hometown. I grew up in a small suburb in central New Jersey, called Pennington. It was largely upper-middle-class white folk. I think a lot of the issues that I personally faced growing up are pretty similar to any person of color growing up in a predominantly white area: exclusion from friend groups, just feeling a little bit different.\n\nI think a lot of my political ambitions, political ideology, and general worldview were shaped in eighth grade. Through elementary school and middle school, I was very much a sheltered introverted kid who did not want to put his face out into anything. My parents' philosophy was the standard Asian immigrant philosophy of like, keep your head down, get your work done.\nI had no intention of wanting to go into politics or like do any public service work. I think I was told to be an engineer and that was it. But then in eighth grade, which was also when I was really reconciling my identity, I read the autobiography of Malcolm X, and over the course of just a few months, it completely transformed the way I looked at race, the way I looked at politics, and how I felt about my responsibility to give back, beyond just myself.\nThat informed the way I moved through high school. I ended up doing a lot of political activism and public service-oriented work while I was in high school. \n\nHere at BU, it’s different. My hometown has, like, twenty thousand people, In Boston, it's like four or five hundred thousand people, I think. In that regard, I have a lot of respect for the city government. There’s all these people, there's all these streets, there's all this land that you have to manage. A lot of the events I've gone to over the course of the last month have been community engagement events. We just go to parks once every week with the mayor and then you just meet with other constituents. You just gain a more appreciative understanding of BU’s placement in the city. Like how different it is to be a student at a top-tier institution compared to some of the things that other people literally 10 minutes down the road are dealing with. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"dhruv-kapadia","text":"Dhruv Kapadia"}];
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
