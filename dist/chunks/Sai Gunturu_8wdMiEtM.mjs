import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Xx4FK = new Proxy({"src":"/_astro/Sai_Gunturu.KryeOJYj.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sai_Gunturu.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sai_Gunturu.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Sai_Gunturu.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Sai_Gunturu.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Xx4FK, ...props});
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
			const html = await updateImageReferences("<h1 id=\"sai-gunturu\">Sai Gunturu</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Sai_Gunturu.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was way more insecure about myself in high school. I wasn’t comfortable being in my own skin. So I would try to act more like confident, you know, instead of actually being confident, and more like putting on a show. I’d use academic achievement as self-worth in high school. Like, the only way I was getting confidence was if I got good grades. I had a fragile ego and stuff like that.</p>\n<p>I love my friends back there but like, I think I didn’t have a great community. So, once I came here and actually had friends that were nice to each other and putting each other up, kind of thing, it was more nice. We’d say nice things about each other.</p>\n<p>And like, I’ve seen those changes when my friends go to college, you know, we go back now, we’re more nice. I think it might be an age thing. I don’t think it’s even like the culture. Like, I don’t know what it is but we’ve all gone to a place where we can say, like, you look better now. I think it’s definitely the social scene, but also a lot of introspection and actually understanding why we do things.</p>");
	

				const frontmatter = {"title":"Sai Gunturu","description":"In high school, Sai struggled with insecurity, relying on academic achievements for self-worth.","pubDate":"2024-02-30 09:32","author":"Sam Wu","tags":["CS","Indian","Growth","Asian"],"imgUrl":"../../assets/Sai_Gunturu.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Sai Gunturu.md";
				const url = undefined;
				function rawContent() {
					return "# Sai Gunturu\n\n![local image](../../assets/Sai_Gunturu.JPG)\n\nI was way more insecure about myself in high school. I wasn't comfortable being in my own skin. So I would try to act more like confident, you know, instead of actually being confident, and more like putting on a show. I'd use academic achievement as self-worth in high school. Like, the only way I was getting confidence was if I got good grades. I had a fragile ego and stuff like that. \n\nI love my friends back there but like, I think I didn't have a great community. So, once I came here and actually had friends that were nice to each other and putting each other up, kind of thing, it was more nice. We’d say nice things about each other.\n\nAnd like, I've seen those changes when my friends go to college, you know, we go back now, we're more nice. I think it might be an age thing. I don't think it's even like the culture. Like, I don't know what it is but we've all gone to a place where we can say, like, you look better now. I think it’s definitely the social scene, but also a lot of introspection and actually understanding why we do things.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sai-gunturu","text":"Sai Gunturu"}];
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
