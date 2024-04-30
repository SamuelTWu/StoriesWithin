import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z2s4bzA = new Proxy({"src":"/_astro/Tim_Liu.dUQgNjZT.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Tim_Liu.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Tim_Liu.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Tim_Liu.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Tim_Liu.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z2s4bzA, ...props});
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
			const html = await updateImageReferences("<h1 id=\"timothy-liu\">Timothy Liu</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Tim_Liu.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I think the big change for me was I became a Resident Assistant. Most of my friends are RAs. My mom was like, “You should do it because it saves a lot of money”. And I was like, “ok”. I honestly didn’t really know what they did. In my first semester, I got locked out twice. I sat at the GSU and I was like, “This sucks”.</p>\n<p>Also, I was not a party person so I forgot that RA’s busted parties. I just totally forgot.\nIt was the first day of training and they told me. Now I bust parties all the time. Freshmen are always more scared. Sometimes they talk to you for 20 minutes trying to get out of it. And you have to be like, “Guys come on, you’re insulting my intelligence”. Being an RA does not help your view of freshmen. You do see the worst of people because you’re only seeing them when they’re making bad decisions. You see them when they’re forgetting their keys and stuff. So it biases you to that.</p>\n<p>The only real drawback is that having a job while being a student is not the easiest. And living where you work is pretty tough. It’s hard to separate work and life and have a balance. I’ve actually had dreams where I hear the on-call phone and I wake up. Some people work way too hard. I think I’m pretty lazy so it helps me out. But other than that, I think it’s a good experience that few people should do. It helps you grow because you have to be more responsible for other people too.</p>\n<p>But being an RA has made me more extroverted. I have something that forces me to interact with people. Not just with residents but with other RAs. I’ve gotten more used to having these really close friends that I rely on, not just for work.</p>");
	

				const frontmatter = {"title":"Timothy Liu","description":"Being an RA brought Timothy responsibility, party busting, and extroversion.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["RA","New Jersey","Chinese","Asian"],"imgUrl":"../../assets/Tim_Liu.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Tim Liu.md";
				const url = undefined;
				function rawContent() {
					return "# Timothy Liu\n\n![local image](../../assets/Tim_Liu.JPG)\n\nI think the big change for me was I became a Resident Assistant. Most of my friends are RAs. My mom was like, “You should do it because it saves a lot of money”. And I was like, “ok”. I honestly didn't really know what they did. In my first semester, I got locked out twice. I sat at the GSU and I was like, “This sucks”. \n\nAlso, I was not a party person so I forgot that RA’s busted parties. I just totally forgot.\nIt was the first day of training and they told me. Now I bust parties all the time. Freshmen are always more scared. Sometimes they talk to you for 20 minutes trying to get out of it. And you have to be like, “Guys come on, you're insulting my intelligence”. Being an RA does not help your view of freshmen. You do see the worst of people because you’re only seeing them when they’re making bad decisions. You see them when they're forgetting their keys and stuff. So it biases you to that. \n\nThe only real drawback is that having a job while being a student is not the easiest. And living where you work is pretty tough. It's hard to separate work and life and have a balance. I've actually had dreams where I hear the on-call phone and I wake up. Some people work way too hard. I think I'm pretty lazy so it helps me out. But other than that, I think it's a good experience that few people should do. It helps you grow because you have to be more responsible for other people too. \n\nBut being an RA has made me more extroverted. I have something that forces me to interact with people. Not just with residents but with other RAs. I've gotten more used to having these really close friends that I rely on, not just for work. \n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"timothy-liu","text":"Timothy Liu"}];
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
