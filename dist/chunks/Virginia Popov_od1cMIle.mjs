import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Zgg1Ma = new Proxy({"src":"/_astro/Virginia_Popov.j4uT-1lV.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Virginia_Popov.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Virginia_Popov.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Virginia_Popov.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Virginia_Popov.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Zgg1Ma, ...props});
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
			const html = await updateImageReferences("<h1 id=\"virginia-popov\">Virginia Popov</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Virginia_Popov.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Coming into undergrad, I was really focused on academics. Now, because I’m gonna be applying to law schools, I think I’ve shifted a little bit. I want to put a little bit more into student culture and that kind of social dynamic. That was definitely a transition. At first, I couldn’t really put my finger on it. It took me a little while to figure out what was going on in terms of connecting with people differently. After a while, I started trying to be more confident in my own identity and assert myself a little bit more. Not be drowned out by everyone else.</p>\n<p>I’ve learned to be a lot more firm within my personal boundaries and advocate for myself. I started asserting myself and being more strict with the people around me in terms of friends and just being a little pickier. I realized that no singular person is the end of the world. No one relationship is going to make or break you, so don’t put so much emphasis on making any one individual thing work. Be more open to seeing where things fall into place. To be at that stage, I think for me at least, it’s been a lot of acceptance over things I can’t control. Being at peace with the fact that I can’t control other people and that they’re gonna do what they want to do. Life is just learning to be okay with not knowing and not having control over it.</p>");
	

				const frontmatter = {"title":"Virginia Popov","description":"Virginia talks about the academic to social shift, self-assertion, and boundaries.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["IR","Oklahoma","Law"],"imgUrl":"../../assets/Virginia_Popov.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Virginia Popov.md";
				const url = undefined;
				function rawContent() {
					return "# Virginia Popov\n\n![local image](../../assets/Virginia_Popov.JPG)\n\nComing into undergrad, I was really focused on academics. Now, because I'm gonna be applying to law schools, I think I’ve shifted a little bit. I want to put a little bit more into student culture and that kind of social dynamic. That was definitely a transition. At first, I couldn't really put my finger on it. It took me a little while to figure out what was going on in terms of connecting with people differently. After a while, I started trying to be more confident in my own identity and assert myself a little bit more. Not be drowned out by everyone else.\n\nI've learned to be a lot more firm within my personal boundaries and advocate for myself. I started asserting myself and being more strict with the people around me in terms of friends and just being a little pickier. I realized that no singular person is the end of the world. No one relationship is going to make or break you, so don't put so much emphasis on making any one individual thing work. Be more open to seeing where things fall into place. To be at that stage, I think for me at least, it's been a lot of acceptance over things I can't control. Being at peace with the fact that I can't control other people and that they're gonna do what they want to do. Life is just learning to be okay with not knowing and not having control over it.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"virginia-popov","text":"Virginia Popov"}];
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
