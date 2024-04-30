import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__xyrlO = new Proxy({"src":"/_astro/Demari_Stacker.BRACeSRk.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Demari_Stacker.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Demari_Stacker.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Demari_Stacker.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Demari_Stacker.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__xyrlO, ...props});
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
			const html = await updateImageReferences("<h1 id=\"demari-stacker\">Demari Stacker</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Demari_Stacker.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was taking Japanese completely by chance. As a kid, I moved around a lot. So in middle school, I went to a new school called Andrew Jackson Language Academy and the deal is that every kid has to take a language. You have your basics like Spanish and French, but also Italian, Mandarin, and Japanese. And of course, I picked Spanish because it was the most practical. There’s like a card you get and you’re supposed to list your languages. I was like, okay, Spanish is the top. So my next two are gonna be jokes.</p>\n<p>So I did Spanish then Japanese then probably Italian. But like Spanish is full, because everyone’s trying to do Spanish. So I got into the Japanese class. I did really well in middle school.</p>\n<p>It’s ridiculous. There’s no analog in English to some of the absurdity in Japanese. Like phrasing things in time. There are three words for “when”. It’s really hard man, but it’s fun. I think part of what made it fun, even more than the language, was the people that I met through Japanese. There were people I wouldn’t have known outside of Japanese class, like people from Japan.</p>\n<p>All of my teachers were from Japan and they offered really interesting perspectives. I think those were my first times interacting with people from outside of the US. They gave me a lot of cultural background in terms of understanding things from outside an American perspective. And then also putting things like anime or Jpop into perspective and understanding what they mean to the Japanese themselves. And contrasting that with how we as Westerners or foreigners interpret Japanese media. Also just really good people.</p>");
	

				const frontmatter = {"title":"Demari Stacker","description":"Demari happened to choose Japanese and ended up appreciating the linguistic challenges and cultural insights.","pubDate":"2024-02-08 13:55","author":"Sam Wu","tags":["Pre-Med","Black","Japanese"],"imgUrl":"../../assets/Demari_Stacker.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Demari Stacker.md";
				const url = undefined;
				function rawContent() {
					return "# Demari Stacker\n\n![local image](../../assets/Demari_Stacker.JPG)\n\nI was taking Japanese completely by chance. As a kid, I moved around a lot. So in middle school, I went to a new school called Andrew Jackson Language Academy and the deal is that every kid has to take a language. You have your basics like Spanish and French, but also Italian, Mandarin, and Japanese. And of course, I picked Spanish because it was the most practical. There's like a card you get and you're supposed to list your languages. I was like, okay, Spanish is the top. So my next two are gonna be jokes.\n\nSo I did Spanish then Japanese then probably Italian. But like Spanish is full, because everyone's trying to do Spanish. So I got into the Japanese class. I did really well in middle school. \n\nIt’s ridiculous. There's no analog in English to some of the absurdity in Japanese. Like phrasing things in time. There are three words for “when”. It's really hard man, but it's fun. I think part of what made it fun, even more than the language, was the people that I met through Japanese. There were people I wouldn't have known outside of Japanese class, like people from Japan. \n\nAll of my teachers were from Japan and they offered really interesting perspectives. I think those were my first times interacting with people from outside of the US. They gave me a lot of cultural background in terms of understanding things from outside an American perspective. And then also putting things like anime or Jpop into perspective and understanding what they mean to the Japanese themselves. And contrasting that with how we as Westerners or foreigners interpret Japanese media. Also just really good people. \n\n\n\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"demari-stacker","text":"Demari Stacker"}];
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
