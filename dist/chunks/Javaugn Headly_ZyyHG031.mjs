import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1qddSk = new Proxy({"src":"/_astro/Javaugn_Headly.sXojGzwF.jpg","width":2316,"height":3088,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Javaugn_Headly.jpg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Javaugn_Headly.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Javaugn_Headly.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Javaugn_Headly.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1qddSk, ...props});
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
			const html = await updateImageReferences("<h1 id=\"javaugn-headly\">Javaugn Headly</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Javaugn_Headly.jpg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I think I’ve gotten better at not having FOMO as much. I guess I learned that I shouldn’t feel guilty about how much I earn or how much my family earns. No matter what the circumstances are. And honestly, I realized that there are a lot of things you can do that are, like, cheaper or free or around Boston. And so I try to suggest those kinds of ideas and if people are not for it, then they’re not. And if they are, they are.</p>\n<p>I suppose as a low-income student, you’re only going to interact with these kinds of people more and more. Before I guess I used to see them as more, like, foreign, and maybe even villainize them a bit. But I guess like me, they’re just living life and they just happen to live life earning more and having more resources. Sometimes it’s not exactly people’s responsibility to, I don’t know, make people more aware of the world around them.</p>\n<p>I think BU does help a lot financially for sure. Their aid and their merit scholarships are quite generous for sure. And I do commend them for doing that. I guess it’s kind of hard to see how they would do this, but I will say the social integration is a bit lacking. I feel like there could be more things on the social end. I think it’s one thing to give people the opportunity to come to these schools and I do appreciate that for sure, but I think that helping people navigate how to socially be in these spaces is just as important as giving them the opportunity to have education in these spaces.</p>\n<p>I guess if you feel passionate enough, then you can help be a guide for those kinds of people to be more cognizant of the world around them. It may be a bit hard to conceptualize how is it that like, you can’t afford to do something, or like why is it like you have to ditch so much? They may take it more personally than it just being a matter of fact of, I just can’t afford to do this activity.</p>");
	

				const frontmatter = {"title":"Javaugn Headly","description":"Javaugn is learning to manage FOMO and gaining empathy for others' circumstances.","pubDate":"2024-02-23 14:40","author":"Sam Wu","tags":["Pre Med","New York","Black"],"imgUrl":"../../assets/Javaugn_Headly.jpg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Javaugn Headly.md";
				const url = undefined;
				function rawContent() {
					return "# Javaugn Headly\n\n![local image](../../assets/Javaugn_Headly.jpg)\n\nI think I've gotten better at not having FOMO as much. I guess I learned that I shouldn't feel guilty about how much I earn or how much my family earns. No matter what the circumstances are. And honestly, I realized that there are a lot of things you can do that are, like, cheaper or free or around Boston. And so I try to suggest those kinds of ideas and if people are not for it, then they're not. And if they are, they are.\n\nI suppose as a low-income student, you're only going to interact with these kinds of people more and more. Before I guess I used to see them as more, like, foreign, and maybe even villainize them a bit. But I guess like me, they're just living life and they just happen to live life earning more and having more resources. Sometimes it's not exactly people's responsibility to, I don't know, make people more aware of the world around them.\n\nI think BU does help a lot financially for sure. Their aid and their merit scholarships are quite generous for sure. And I do commend them for doing that. I guess it's kind of hard to see how they would do this, but I will say the social integration is a bit lacking. I feel like there could be more things on the social end. I think it's one thing to give people the opportunity to come to these schools and I do appreciate that for sure, but I think that helping people navigate how to socially be in these spaces is just as important as giving them the opportunity to have education in these spaces. \n\nI guess if you feel passionate enough, then you can help be a guide for those kinds of people to be more cognizant of the world around them. It may be a bit hard to conceptualize how is it that like, you can't afford to do something, or like why is it like you have to ditch so much? They may take it more personally than it just being a matter of fact of, I just can't afford to do this activity.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"javaugn-headly","text":"Javaugn Headly"}];
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
