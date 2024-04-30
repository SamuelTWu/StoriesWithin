import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z215Kxk = new Proxy({"src":"/_astro/Shea_Mowry.keDAe1c3.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Shea_Mowry.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Shea_Mowry.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Shea_Mowry.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Shea_Mowry.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z215Kxk, ...props});
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
			const html = await updateImageReferences("<h1 id=\"shea-mowry\">Shea Mowry</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Shea_Mowry.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I moved around a lot. I lived in America until I was 10, and then I moved to Sweden and then the UK. I went to an international school outside London. I applied to BU because there are a lot of kids who are American but have lived abroad. BU has a lot of international students and it’s super nice in terms of culture acclimation. There’s an understanding that everyone’s coming from different cultures. There’s also a weirdness to it. I am American, but I don’t get what’s going on here. It’s supposed to be my culture but then I have culture shock. That’s a weird thing. Luckily, BU has a lot of those kids. I’ve met many who are also American but also don’t really know what’s up. That’s more comforting for me than an international student who doesn’t understand a cultural reference or something because I just relate to it more.</p>\n<p>A weird thing about BU is when I first got here, I wanted to add a billion majors and minors. I started to ask myself why. Why do you need so many labels? But when you get into it, it feels like I could get this and this, and you’re trying to get the most out of your time. It does make sense. But when I first came in, I felt that people were trying to do a lot.</p>\n<p>But since I’ve moved around a bit, I feel like college is a nice reset. After high school people think they understand who you are, and if you act out of that, they’re like, what’s happening? When you show up in a new place, you can just act however and no one expects anything different from you. When I came to college I decided I was gonna be bold and go for it. I was always extroverted, but that wasn’t necessarily what I used to do. In college, There are so many new faces that you can totally rebrand, you know what I mean? So a big part of my growth was rebranding. I can be however bold or confident or academic, and there’s no question that that’s not where I’m at.</p>");
	

				const frontmatter = {"title":"Shea Mowry","description":"Shea remarks on her global upbringing, cultural acclimation at BU, and personal rebranding and growth.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Bio Engineering","Virginia","England"],"imgUrl":"../../assets/Shea_Mowry.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Shea Mowry.md";
				const url = undefined;
				function rawContent() {
					return "# Shea Mowry\n\n![local image](../../assets/Shea_Mowry.JPG)\n\nI moved around a lot. I lived in America until I was 10, and then I moved to Sweden and then the UK. I went to an international school outside London. I applied to BU because there are a lot of kids who are American but have lived abroad. BU has a lot of international students and it’s super nice in terms of culture acclimation. There's an understanding that everyone's coming from different cultures. There's also a weirdness to it. I am American, but I don't get what's going on here. It's supposed to be my culture but then I have culture shock. That's a weird thing. Luckily, BU has a lot of those kids. I've met many who are also American but also don't really know what's up. That’s more comforting for me than an international student who doesn't understand a cultural reference or something because I just relate to it more. \n\nA weird thing about BU is when I first got here, I wanted to add a billion majors and minors. I started to ask myself why. Why do you need so many labels? But when you get into it, it feels like I could get this and this, and you're trying to get the most out of your time. It does make sense. But when I first came in, I felt that people were trying to do a lot.\n\nBut since I've moved around a bit, I feel like college is a nice reset. After high school people think they understand who you are, and if you act out of that, they're like, what's happening? When you show up in a new place, you can just act however and no one expects anything different from you. When I came to college I decided I was gonna be bold and go for it. I was always extroverted, but that wasn't necessarily what I used to do. In college, There are so many new faces that you can totally rebrand, you know what I mean? So a big part of my growth was rebranding. I can be however bold or confident or academic, and there's no question that that's not where I'm at. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"shea-mowry","text":"Shea Mowry"}];
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
