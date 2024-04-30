import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__ZCNDB5 = new Proxy({"src":"/_astro/Christophe_Lapine.iXiM6ZmV.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Christophe_Lapine.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Christophe_Lapine.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Christophe_Lapine.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Christophe_Lapine.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZCNDB5, ...props});
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
			const html = await updateImageReferences("<h1 id=\"christophe-lapine\">Christophe Lapine</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Christophe_Lapine.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I worked at this Japanese International School and told everyone that I was gay. Like, they probably wouldn’t like me as much, or the guys at least. I don’t know about the girls. I feel like girls just don’t give a fuck anywhere except my mom. But one of the girls at the Japanese International School, she asked me on the last day. She was like, are you gay?</p>\n<p>And then she literally told me in her broken English, she had to like, look it up and she was just like, are you gay? I was like, yes. Then she was like, me too! So she had a girlfriend back at home in Japan and her parents know about it and like I asked her all about this.</p>\n<p>I was lowkey in shock that she could have that parents’ support back in the non-progressive country. Meanwhile, my mother is in a progressive country and is the complete opposite.</p>");
	

				const frontmatter = {"title":"Christophe Lapine","description":"Christophe came out as gay and was uncertain about acceptance.","pubDate":"2024-01-29 22:43","author":"Sam Wu","tags":["Pre Med","Massachusetts","Japan"],"imgUrl":"../../assets/Christophe_Lapine.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Christophe Lapine.md";
				const url = undefined;
				function rawContent() {
					return "# Christophe Lapine\n\n![local image](../../assets/Christophe_Lapine.JPG)\n\nI worked at this Japanese International School and told everyone that I was gay. Like, they probably wouldn't like me as much, or the guys at least. I don't know about the girls. I feel like girls just don't give a fuck anywhere except my mom. But one of the girls at the Japanese International School, she asked me on the last day. She was like, are you gay?\n\nAnd then she literally told me in her broken English, she had to like, look it up and she was just like, are you gay? I was like, yes. Then she was like, me too! So she had a girlfriend back at home in Japan and her parents know about it and like I asked her all about this.\n\nI was lowkey in shock that she could have that parents’ support back in the non-progressive country. Meanwhile, my mother is in a progressive country and is the complete opposite.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"christophe-lapine","text":"Christophe Lapine"}];
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
