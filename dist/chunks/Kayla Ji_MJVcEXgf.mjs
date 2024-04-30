import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1dy7bj = new Proxy({"src":"/_astro/Kayla_Ji.hMuvgoKo.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kayla_Ji.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Kayla_Ji.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Kayla_Ji.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Kayla_Ji.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1dy7bj, ...props});
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
			const html = await updateImageReferences("<h1 id=\"kayla-ji\">Kayla Ji</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Kayla_Ji.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In high school, I thought there was something wrong with me because I couldn’t pay attention. My mom would be like, “Oh, if you just pay attention in class, it will be easy for you on the test.”</p>\n<p>I was like, “No, I can’t. I don’t know why I can’t.” Then my sister was diagnosed with AHDH in January or December. She told me I should probably get tested because it’s a genetic thing. It’s like such a weird feeling to get diagnosed with something because for a while I was like, ain’t no way.You look at other people within that community and you kind of are like, “I don’t do that, I probably don’t have it, I’m probably being dramatic and stuff.” Then slowly over time started to try what other people with ADHD do and it was so much easier. That’s when I realized I do have something.</p>\n<p>I mean, I think it made sense. As a kid, my sister would tell my mom, I think Kayla has ADHD and my mom would be like, “No.” Because in Korean culture it’s not as talked about.</p>\n<p>It’s not that big of a deal. And I guess it explained my behavior a lot more. I feel like I can’t blame everything on my ADHD but I feel like I’m able to be less strict on myself. Because I’ve always been pretty harsh on myself. So that’s really cool.</p>");
	

				const frontmatter = {"title":"Kayla Ji","description":"Kayla initially doubted having ADHD until their sister's diagnosis prompted testing.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Behavior","California","Korean","Asian"],"imgUrl":"../../assets/Kayla_Ji.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Kayla Ji.md";
				const url = undefined;
				function rawContent() {
					return "# Kayla Ji\n\n![local image](../../assets/Kayla_Ji.JPG)\n\nIn high school, I thought there was something wrong with me because I couldn't pay attention. My mom would be like, \"Oh, if you just pay attention in class, it will be easy for you on the test.\"\n\nI was like, \"No, I can't. I don't know why I can't.\" Then my sister was diagnosed with AHDH in January or December. She told me I should probably get tested because it's a genetic thing. It’s like such a weird feeling to get diagnosed with something because for a while I was like, ain't no way.You look at other people within that community and you kind of are like, \"I don't do that, I probably don't have it, I'm probably being dramatic and stuff.\" Then slowly over time started to try what other people with ADHD do and it was so much easier. That's when I realized I do have something. \n\nI mean, I think it made sense. As a kid, my sister would tell my mom, I think Kayla has ADHD and my mom would be like, \"No.\" Because in Korean culture it's not as talked about.\n\nIt's not that big of a deal. And I guess it explained my behavior a lot more. I feel like I can't blame everything on my ADHD but I feel like I'm able to be less strict on myself. Because I've always been pretty harsh on myself. So that's really cool.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"kayla-ji","text":"Kayla Ji"}];
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
