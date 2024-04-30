import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__nQgr4 = new Proxy({"src":"/_astro/Sissi_Wang.YZLV1FEF.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sissi_Wang.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sissi_Wang.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Sissi_Wang.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Sissi_Wang.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__nQgr4, ...props});
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
			const html = await updateImageReferences("<h1 id=\"sissi-wang\">Sissi Wang</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Sissi_Wang.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Growing up, I wanted to be an actress or a singer, but my parents were against the idea. They didn’t want me to enter the entertainment industry, especially since I was living in China at a time when the industry was even messier and there were a lot of dark sides to it. I was younger then, and didn’t know the reality of being a public figure. But I do wonder how my life would be different if I pursued those opportunities that came my way instead of my current path.</p>\n<p>I think there are a lot of downsides that come with fame that people don’t think about when they’re entering. The biggest thing is you have no privacy and everyone knows exactly what you’re doing. If you do something wrong, the whole world knows and the whole world criticizes you. The smallest things can get blown out of proportion, stain your reputation, and follow you for the rest of your career. In that sense, I feel kind of bad for public figures. It must be hard for them.</p>\n<p>I’m a micro-influencer on Instagram, so I don’t really deal with that. I just post my everyday content and treat my stories like a private story. I’ll post pictures with my friends or if I go out or travel and take nice photos I will post, but it’s very casual for me. I also didn’t really do anything to get to the following. A few of my posts just got on people’s explore pages and hit the right target audience.</p>\n<p>I guess I didn’t think too much of it, but I would say it did open doors for a lot of opportunities as I was able to get sponsors from different brands, restaurants, and stuff. Also when I do have something important to say, the message spreads quickly, sometimes too quickly that I can’t take things back once they’re out. Overall I’m glad it happened and that I can leverage my platform, but I should think twice before I post something because I tend to overshare a lot on social media.</p>\n<p>I used to have pretty bad stage fright, even though I’m majoring in business and going into consulting. In some classes, you have to do a lot of public speaking. So that trained me. I remember in our business communications class, for our presentations, I used to write out word for word what I would say. I would literally write out everything and try to memorize the whole script. I think that also stems from my language barrier when I first moved to the States. I wasn’t good at English back then, so I was always insecure about the way I spoke and scared of saying the wrong thing. But when you try to memorize word for word, you overthink it and you end up messing it up. So now I’ve learned to just do bullet points. Over time, I think my stage fright got a lot better. I still get really nervous on the inside, but people say that can’t tell on the outside, so that’s a relief.</p>");
	

				const frontmatter = {"title":"Sissi Wang","description":"Sissi dreamed of fame and is now a micro-influencer, balancing privacy and oversharing.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Business","Asian","Chinese"],"imgUrl":"../../assets/Sissi_Wang.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Sissi Wang.md";
				const url = undefined;
				function rawContent() {
					return "# Sissi Wang\n\n![local image](../../assets/Sissi_Wang.JPG)\n\nGrowing up, I wanted to be an actress or a singer, but my parents were against the idea. They didn't want me to enter the entertainment industry, especially since I was living in China at a time when the industry was even messier and there were a lot of dark sides to it. I was younger then, and didn't know the reality of being a public figure. But I do wonder how my life would be different if I pursued those opportunities that came my way instead of my current path. \n\nI think there are a lot of downsides that come with fame that people don't think about when they're entering. The biggest thing is you have no privacy and everyone knows exactly what you're doing. If you do something wrong, the whole world knows and the whole world criticizes you. The smallest things can get blown out of proportion, stain your reputation, and follow you for the rest of your career. In that sense, I feel kind of bad for public figures. It must be hard for them. \n\nI'm a micro-influencer on Instagram, so I don't really deal with that. I just post my everyday content and treat my stories like a private story. I'll post pictures with my friends or if I go out or travel and take nice photos I will post, but it’s very casual for me. I also didn't really do anything to get to the following. A few of my posts just got on people’s explore pages and hit the right target audience.\n\nI guess I didn't think too much of it, but I would say it did open doors for a lot of opportunities as I was able to get sponsors from different brands, restaurants, and stuff. Also when I do have something important to say, the message spreads quickly, sometimes too quickly that I can’t take things back once they’re out. Overall I'm glad it happened and that I can leverage my platform, but I should think twice before I post something because I tend to overshare a lot on social media. \n\nI used to have pretty bad stage fright, even though I’m majoring in business and going into consulting. In some classes, you have to do a lot of public speaking. So that trained me. I remember in our business communications class, for our presentations, I used to write out word for word what I would say. I would literally write out everything and try to memorize the whole script. I think that also stems from my language barrier when I first moved to the States. I wasn’t good at English back then, so I was always insecure about the way I spoke and scared of saying the wrong thing. But when you try to memorize word for word, you overthink it and you end up messing it up. So now I’ve learned to just do bullet points. Over time, I think my stage fright got a lot better. I still get really nervous on the inside, but people say that can’t tell on the outside, so that’s a relief. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sissi-wang","text":"Sissi Wang"}];
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
