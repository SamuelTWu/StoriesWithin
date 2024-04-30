import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__17fUYs = new Proxy({"src":"/_astro/Lynn_Asare.OfpH-2QB.jpg","width":6000,"height":3368,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Lynn_Asare.jpg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Lynn_Asare.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Lynn_Asare.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Lynn_Asare.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__17fUYs, ...props});
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
			const html = await updateImageReferences("<h1 id=\"lynn-asare-bediako\">Lynn Asare-Bediako</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Lynn_Asare.jpg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I was just thinking about going to a state school in Florida up until COVID. I know I had good grades but I didn’t really think I was good enough for Harvard or anything. But then I started talking to one of my friend’s moms and she was like, “You should apply. You have the grades and a good story.” I started going down the rabbit hole of applying to Ivy League schools and schools in the north. I just didn’t think that that was even a possibility.</p>\n<p>I got into BU and I was really excited. I had this idea that the North is so much better than the South because I’ve always heard from my teachers that the North is smart and educated. And I was like, “OK, Imma like them.” And if you look at the South, like they had slavery, so they’re always going to be a couple of steps back compared to the North. Obviously, I think Florida is a little worse than Boston is, but in Boston, it’s just a lot more quiet. People are just chilling behind the scenes about it. No one is saying the N-word to your face but … I think the biggest thing that changed for me is being more grounded and aware of what’s around me. It’s not that I’ve changed much. I’ve been the same. But I’m seeing things differently now.</p>");
	

				const frontmatter = {"title":"Lynn Asare-Bediako","description":"From doubting Ivy League to embracing Boston's quiet awareness.","pubDate":"2024-02-29 21:16","author":"Sam Wu","tags":["Film","Florida","Black"],"imgUrl":"../../assets/Lynn_Asare.jpg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Lynn Asare-Bediako.md";
				const url = undefined;
				function rawContent() {
					return "# Lynn Asare-Bediako\n\n![local image](../../assets/Lynn_Asare.jpg)\n\nI was just thinking about going to a state school in Florida up until COVID. I know I had good grades but I didn't really think I was good enough for Harvard or anything. But then I started talking to one of my friend's moms and she was like, “You should apply. You have the grades and a good story.” I started going down the rabbit hole of applying to Ivy League schools and schools in the north. I just didn't think that that was even a possibility. \n\nI got into BU and I was really excited. I had this idea that the North is so much better than the South because I've always heard from my teachers that the North is smart and educated. And I was like, “OK, Imma like them.\" And if you look at the South, like they had slavery, so they’re always going to be a couple of steps back compared to the North. Obviously, I think Florida is a little worse than Boston is, but in Boston, it’s just a lot more quiet. People are just chilling behind the scenes about it. No one is saying the N-word to your face but … I think the biggest thing that changed for me is being more grounded and aware of what’s around me. It’s not that I’ve changed much. I’ve been the same. But I’m seeing things differently now. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"lynn-asare-bediako","text":"Lynn Asare-Bediako"}];
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
