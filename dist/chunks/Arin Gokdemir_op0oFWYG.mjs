import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1uV6gH = new Proxy({"src":"/_astro/Arin_Gokdemir.Iuc7NH99.JPEG","width":1597,"height":1065,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Arin_Gokdemir.JPEG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Arin_Gokdemir.JPEG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Arin_Gokdemir.JPEG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Arin_Gokdemir.JPEG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1uV6gH, ...props});
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
			const html = await updateImageReferences("<h1 id=\"arin-gokdemir\">Arin Gokdemir</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Arin_Gokdemir.JPEG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Dude, we were crazy. It was DC, so you leave the school and walk outside and the White House is right there. We used to explore all sorts of stuff. I was a bad kid. I wasn’t a big drinker or smoker, I was just a problem for my parents.</p>\n<p>I was a terrible student in high school. I was just messing around. So my parents told me, hey, it’s August, we need you to just get out of the house. Go live your life somewhere. So I went to Virginia Commonwealth University.</p>\n<p>I got there and realized that it wasn’t for me. It felt like a dead end. So I thought, this can’t be where my academic journey ends. I know I have more to offer. So I just started grinding. I was trying to fight for my place somewhere better.</p>\n<p>At the top of my list was BU, because it had a great film program. I wanted to be a film director at the time. I got COVID about the week before I had to put in the applications and my grandmother passed away, unfortunately, so I was dealing with those two things at one time. I ended up just getting the BU application in. I didn’t have any time or energy for the others because I was bedridden. I sent it out and then went to sleep for three days.</p>\n<p>It wasn’t that long later, I was in line at Chick-fil-A in my flip-flops and I got an email. I took my flip-flops off and I just sprinted across Richmond. I forgot about the order. I actually cried. I knew something had changed. My life was about to change for real.</p>\n<p>When I got to BU, I realized how privileged I was. You meet every type of damn person at this school. Even comparing my schedule to someone else’s schedule, you can see the imbalance. Three jobs will fill up that Google calendar in a way that one will not.</p>\n<p>I would never perceive having three jobs to be flexing. The only type of person who would are those who have never worked 3 jobs before. No one has three jobs out of a desire to flex on people. People who think that way are about “The hustle”. That’s another thing, “the hustle”. I feel like that’s a privileged concept. It’s like they’re making money and doing all these things, but it’s frivolous. It’s not for survival, it’s for clout.</p>\n<p>I work pretty hard right now, but once I’m not, I’m gonna be working to improve my situation further so that I can help other people survive. Or make the things that I want to see happen. Ultimately in a capitalist economy, to make progress on any front, some money has to exchange hands. Time is money, projects are money, goals, and ambitions require money.</p>");
	

				const frontmatter = {"title":"Arin Gokdemir","description":"Arin discusses the journey to transfer to BU and what he's realized after attending.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["DC","Film","Transfer"],"imgUrl":"../../assets/Arin_Gokdemir.JPEG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Arin Gokdemir.md";
				const url = undefined;
				function rawContent() {
					return "# Arin Gokdemir\n\n![local image](../../assets/Arin_Gokdemir.JPEG)\n\nDude, we were crazy. It was DC, so you leave the school and walk outside and the White House is right there. We used to explore all sorts of stuff. I was a bad kid. I wasn't a big drinker or smoker, I was just a problem for my parents. \n\nI was a terrible student in high school. I was just messing around. So my parents told me, hey, it's August, we need you to just get out of the house. Go live your life somewhere. So I went to Virginia Commonwealth University.\n\nI got there and realized that it wasn't for me. It felt like a dead end. So I thought, this can't be where my academic journey ends. I know I have more to offer. So I just started grinding. I was trying to fight for my place somewhere better. \n\nAt the top of my list was BU, because it had a great film program. I wanted to be a film director at the time. I got COVID about the week before I had to put in the applications and my grandmother passed away, unfortunately, so I was dealing with those two things at one time. I ended up just getting the BU application in. I didn't have any time or energy for the others because I was bedridden. I sent it out and then went to sleep for three days. \n\nIt wasn't that long later, I was in line at Chick-fil-A in my flip-flops and I got an email. I took my flip-flops off and I just sprinted across Richmond. I forgot about the order. I actually cried. I knew something had changed. My life was about to change for real.\n\nWhen I got to BU, I realized how privileged I was. You meet every type of damn person at this school. Even comparing my schedule to someone else's schedule, you can see the imbalance. Three jobs will fill up that Google calendar in a way that one will not. \n\nI would never perceive having three jobs to be flexing. The only type of person who would are those who have never worked 3 jobs before. No one has three jobs out of a desire to flex on people. People who think that way are about “The hustle”. That's another thing, \"the hustle\". I feel like that's a privileged concept. It's like they're making money and doing all these things, but it's frivolous. It's not for survival, it's for clout.\n\nI work pretty hard right now, but once I'm not, I'm gonna be working to improve my situation further so that I can help other people survive. Or make the things that I want to see happen. Ultimately in a capitalist economy, to make progress on any front, some money has to exchange hands. Time is money, projects are money, goals, and ambitions require money.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"arin-gokdemir","text":"Arin Gokdemir"}];
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
