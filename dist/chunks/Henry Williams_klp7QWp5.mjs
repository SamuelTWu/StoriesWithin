import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z21OIDK = new Proxy({"src":"/_astro/Henry_Williams.Mz3GM9U2.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Henry_Williams.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Henry_Williams.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Henry_Williams.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Henry_Williams.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z21OIDK, ...props});
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
			const html = await updateImageReferences("<h1 id=\"henry-williams\">Henry Williams</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Henry_Williams.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>It’s OK to be vulnerable. A lot of people, especially now, are sort of scared of getting hurt. I’m a very big believer in no darkness without light. All that stuff is one big thing. Getting hurt is part of it, right? Being vulnerable is a very brave thing and I know it’s hard but it’s always kind of worth it.</p>\n<p>I think it took me a long time to get here. I spent a lot of time thinking about how to project myself. It got me to a place where I just wasn’t really that happy. The more I excavated it, the more I realized that need to be more honest with myself and other people.</p>\n<p>I was in a pretty dark place three years ago. I was really considering taking my own life. A lot of it was due to me just bottling stuff up and letting stuff fester. My solution was that I took a full year of working on myself and doing what I love. I don’t look back. When I say that, a lot of people feel concerned, but it’s been one of the most liberating things in my life, right?</p>\n<p>At rock bottom, the only way is up, right? When you really feel something wrong, you have to honor that. And when you feel something right? You have to honor that too. That’s what path I’m on now. I’ve been hurt, but I’m happy about it.</p>");
	

				const frontmatter = {"title":"Henry Williams","description":"Being vulnerable is brave. Honesty leads to liberation and happiness.","pubDate":"2024-02-25 12:20","author":"Sam Wu","tags":["New York","History"],"imgUrl":"../../assets/Henry_Williams.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Henry Williams.md";
				const url = undefined;
				function rawContent() {
					return "# Henry Williams\n\n![local image](../../assets/Henry_Williams.JPG)\n\nIt's OK to be vulnerable. A lot of people, especially now, are sort of scared of getting hurt. I'm a very big believer in no darkness without light. All that stuff is one big thing. Getting hurt is part of it, right? Being vulnerable is a very brave thing and I know it's hard but it's always kind of worth it.\n\nI think it took me a long time to get here. I spent a lot of time thinking about how to project myself. It got me to a place where I just wasn't really that happy. The more I excavated it, the more I realized that need to be more honest with myself and other people. \n\nI was in a pretty dark place three years ago. I was really considering taking my own life. A lot of it was due to me just bottling stuff up and letting stuff fester. My solution was that I took a full year of working on myself and doing what I love. I don't look back. When I say that, a lot of people feel concerned, but it's been one of the most liberating things in my life, right?\n\nAt rock bottom, the only way is up, right? When you really feel something wrong, you have to honor that. And when you feel something right? You have to honor that too. That's what path I'm on now. I've been hurt, but I'm happy about it.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"henry-williams","text":"Henry Williams"}];
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
