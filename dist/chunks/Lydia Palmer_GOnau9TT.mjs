import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1zvcYv = new Proxy({"src":"/_astro/Lydia_Palmer.lsMkA966.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Lydia_Palmer.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Lydia_Palmer.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Lydia_Palmer.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Lydia_Palmer.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1zvcYv, ...props});
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
			const html = await updateImageReferences("<h1 id=\"lydia-palmer\">Lydia Palmer</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Lydia_Palmer.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I went to a high school that was ranked very high. Kids flocked to that school because it was likely to feed them into an ivy.The people at this school were also very competitive and it was all in your face because you live there, so you really couldn’t escape that environment. At times it could be really mentally destructive.</p>\n<p>I started accepting that I have my own path and even if it seems like other people are doing more meaningful things or finding more success, it’s not black and white. Your story is not going to look exactly like their story. But I think that’s so tough, especially when you’re younger and you don’t know all the possibilities that life has to offer.</p>\n<p>But in college, there’s just so much to explore. It’s cliche, but the world really is like your oyster. Because of my mindset, I worry less about doing a bunch of things at once. You don’t need to be amazing at 10 things. The world is broad enough and interesting enough that one thing that you’re curious about will take you somewhere exciting. If you have an interest, there will be a community out there. I feel like I have to give myself that advice. Sometimes I juggle a lot because there are a lot of things that excite me. But I’m trying to figure out what I enjoy most.</p>");
	

				const frontmatter = {"title":"Lydia Palmer","description":"Lydia attended a competitive high school and had to change their mindset once entering college.","pubDate":"2024-03-15 13:28","author":"Sam Wu","tags":["New Jersey","CS"],"imgUrl":"../../assets/Lydia_Palmer_Title.jpg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Lydia Palmer.md";
				const url = undefined;
				function rawContent() {
					return "# Lydia Palmer\n\n![local image](../../assets/Lydia_Palmer.JPG)\n\nI went to a high school that was ranked very high. Kids flocked to that school because it was likely to feed them into an ivy.The people at this school were also very competitive and it was all in your face because you live there, so you really couldn't escape that environment. At times it could be really mentally destructive. \n\nI started accepting that I have my own path and even if it seems like other people are doing more meaningful things or finding more success, it's not black and white. Your story is not going to look exactly like their story. But I think that's so tough, especially when you're younger and you don't know all the possibilities that life has to offer.\n\nBut in college, there's just so much to explore. It’s cliche, but the world really is like your oyster. Because of my mindset, I worry less about doing a bunch of things at once. You don't need to be amazing at 10 things. The world is broad enough and interesting enough that one thing that you're curious about will take you somewhere exciting. If you have an interest, there will be a community out there. I feel like I have to give myself that advice. Sometimes I juggle a lot because there are a lot of things that excite me. But I’m trying to figure out what I enjoy most.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"lydia-palmer","text":"Lydia Palmer"}];
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
