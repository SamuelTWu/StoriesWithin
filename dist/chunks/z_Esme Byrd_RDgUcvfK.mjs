import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z21WVLe = new Proxy({"src":"/_astro/Esme_Byrd.OVqxIMxX.png","width":2550,"height":4537,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Esme_Byrd.png";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Esme_Byrd.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Esme_Byrd.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Esme_Byrd.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z21WVLe, ...props});
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
			const html = await updateImageReferences("<h1 id=\"esme-byrd\">Esme Byrd</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Esme_Byrd.png&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I came into college with a good childhood. I grew up and a great family and I was really blessed to have super loving parents and siblings. I didn’t come into college with a lot of drama. Then I came to college and that changed. Things started to unravel in different ways. A lot of my friends were people in hard situations. They sometimes struggled mentally, physically, or emotionally. It was very challenging to be in that space and to love those people. Sometimes they found themselves in dangerous spaces and dangerous situations and I had to figure out how to balance between “I’m not trying to push you or judge you, but what you’re doing is genuinely unsafe for yourself and other people”. That was challenging and it escalated into intense things. People were experiencing suicidal ideation and attempts. And there was other mental health stuff too with other people who were close to me.</p>\n<p>A lot of struggles were during the summer, so there wasn’t a lot of support due to a lack of faculty and because our families were not there. I didn’t have anyone else to help me. I was carrying these people by myself in very dangerous places. It was just awful. After that summer, I kind of shut down for the whole fall semester and pulled back from social things. I was surviving. I would just get up if I could do that, and I would go to my class and then hopefully I eat something and then go back to sleep. Things continued to escalate with people. So it got worse, which kind of sent me into a depressive state for a while.</p>\n<p>Then spring came around and I was like, ok, now it’s going to be better. And in a lot of ways, it did turn for the better. There were a couple of absent friends, and I discovered that other people were very broken in a new way, but to watch that be redeemed and watch people be renewed after those situations and to be able to watch healing happen in myself and in other people was also something I didn’t expect.</p>\n<p>There’s a lyric by this artist called Andy Mineo where he talks about setting himself on fire to keep everyone else warm. That was the mentality of what I was doing because I felt like people needed very real support, I was the only one there to do it, which is kind of a savior complex but also real. So just realizing that I don’t need to do that and that actually burns and hurts me and is unhelpful to me. It’s ok to protect myself sometimes and step back, even if that’s going to hurt other people. I’m valuable enough to protect myself in those situations just as much as they’re valuable enough to be protected by someone else.</p>\n<p>Just continue being excited about people. Work very hard to not become jaded. It’s worth working hard to see beauty in things even where there’s frustration or hurt or pain or brokenness because there is still beauty in people. Becoming jaded is just such a risk, especially in a super academic space. The exhaustion of bureaucracy and things going on in the world can wear you down, which is fair but I think it’s worth fighting.</p>");
	

				const frontmatter = {"title":"Esme Byrd","description":"Navigating college's difficult side, Esme found light in healing and self-protection.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Education","Engineering","Mental Health"],"imgUrl":"../../assets/Esme_Byrd.png","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/z_Esme Byrd.md";
				const url = undefined;
				function rawContent() {
					return "# Esme Byrd\n\n![local image](../../assets/Esme_Byrd.png)\n\nI came into college with a good childhood. I grew up and a great family and I was really blessed to have super loving parents and siblings. I didn't come into college with a lot of drama. Then I came to college and that changed. Things started to unravel in different ways. A lot of my friends were people in hard situations. They sometimes struggled mentally, physically, or emotionally. It was very challenging to be in that space and to love those people. Sometimes they found themselves in dangerous spaces and dangerous situations and I had to figure out how to balance between “I'm not trying to push you or judge you, but what you're doing is genuinely unsafe for yourself and other people”. That was challenging and it escalated into intense things. People were experiencing suicidal ideation and attempts. And there was other mental health stuff too with other people who were close to me.\n\nA lot of struggles were during the summer, so there wasn't a lot of support due to a lack of faculty and because our families were not there. I didn't have anyone else to help me. I was carrying these people by myself in very dangerous places. It was just awful. After that summer, I kind of shut down for the whole fall semester and pulled back from social things. I was surviving. I would just get up if I could do that, and I would go to my class and then hopefully I eat something and then go back to sleep. Things continued to escalate with people. So it got worse, which kind of sent me into a depressive state for a while. \n\nThen spring came around and I was like, ok, now it's going to be better. And in a lot of ways, it did turn for the better. There were a couple of absent friends, and I discovered that other people were very broken in a new way, but to watch that be redeemed and watch people be renewed after those situations and to be able to watch healing happen in myself and in other people was also something I didn't expect. \n\nThere's a lyric by this artist called Andy Mineo where he talks about setting himself on fire to keep everyone else warm. That was the mentality of what I was doing because I felt like people needed very real support, I was the only one there to do it, which is kind of a savior complex but also real. So just realizing that I don't need to do that and that actually burns and hurts me and is unhelpful to me. It's ok to protect myself sometimes and step back, even if that's going to hurt other people. I'm valuable enough to protect myself in those situations just as much as they're valuable enough to be protected by someone else.\n\nJust continue being excited about people. Work very hard to not become jaded. It's worth working hard to see beauty in things even where there's frustration or hurt or pain or brokenness because there is still beauty in people. Becoming jaded is just such a risk, especially in a super academic space. The exhaustion of bureaucracy and things going on in the world can wear you down, which is fair but I think it's worth fighting. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"esme-byrd","text":"Esme Byrd"}];
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
