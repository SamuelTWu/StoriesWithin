import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Qhzi0 = new Proxy({"src":"/_astro/Adam_Shamsi.PfvznhdH.JPG","width":4240,"height":2832,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Adam_Shamsi.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Adam_Shamsi.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Adam_Shamsi.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Adam_Shamsi.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Qhzi0, ...props});
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
			const html = await updateImageReferences("<h1 id=\"adam-shamsi\">Adam Shamsi</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Adam_Shamsi.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>In some ways affecting actual change in local government or otherwise can be easier than in an institution like BU. There is a very clear system of, “Here’s how this person loses reelection,” or, “Here’s how this person wins”.  It’s not necessarily easy to organize and campaign against someone or something, but there is a route. Whereas at BU, if I go up to the Dean of Students and they say no, what do I do? How do I push it? Sure, I could organize students around coordinated protests, but often students have no reason to believe that anything would change if they did. So it’s hard to pitch them the vision. Sometimes I can’t even convince myself that it would change. So it’s hard for me to pitch the vision myself.</p>\n<p>I’ve been involved in many protests. I think in 2020 everyone was part of some protests. Recently I’ve been part of the Resident Assistant rally for unions. I’ve also been a part of the effort to rename Miles Standish Hall. It requires talking to every student and student organization, getting them to sign up, and making them show up. For the Miles Standish effort specifically, I think we’ve successfully reached a point where there isn’t a single administrator at this university who hasn’t heard of the issue. I think that whoever the next president may be, they will be aware of it too. That’s not nothing. Now granted, nothing has changed in terms of actual building names and policies toward the Native American students. But the ethos and the way that people are talking about this issue has dramatically changed.</p>\n<p>Of course, my favorite part of organizing protests is making an actual change. When a policy is made that betters even a few people’s lives, not at the expense of other people. That’s the goal. One thing that motivates me is a quote by Mariame Kaba that says, “Let this radicalize you rather than lead you to despair.” That’s what motivates me: many things in policy are wrong and it could be easy for you to spiral and think everything is messed up. But I hold on to the fact that this can change and instead of falling into despair, we have to radicalize around it.</p>");
	

				const frontmatter = {"title":"Adam Shamsi","description":"Adam is navigating change in contrasting systems of local government and university activism.","pubDate":"2024-02-23 14:25","author":"Sam Wu","tags":["Georgia","Pakistani","Poli Sci"],"imgUrl":"../../assets/Adam_Shamsi.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Adam Shamsi.md";
				const url = undefined;
				function rawContent() {
					return "# Adam Shamsi\n\n![local image](../../assets/Adam_Shamsi.JPG)\n\nIn some ways affecting actual change in local government or otherwise can be easier than in an institution like BU. There is a very clear system of, “Here's how this person loses reelection,” or, “Here's how this person wins”.  It's not necessarily easy to organize and campaign against someone or something, but there is a route. Whereas at BU, if I go up to the Dean of Students and they say no, what do I do? How do I push it? Sure, I could organize students around coordinated protests, but often students have no reason to believe that anything would change if they did. So it's hard to pitch them the vision. Sometimes I can't even convince myself that it would change. So it's hard for me to pitch the vision myself.\n\nI’ve been involved in many protests. I think in 2020 everyone was part of some protests. Recently I’ve been part of the Resident Assistant rally for unions. I’ve also been a part of the effort to rename Miles Standish Hall. It requires talking to every student and student organization, getting them to sign up, and making them show up. For the Miles Standish effort specifically, I think we've successfully reached a point where there isn’t a single administrator at this university who hasn't heard of the issue. I think that whoever the next president may be, they will be aware of it too. That's not nothing. Now granted, nothing has changed in terms of actual building names and policies toward the Native American students. But the ethos and the way that people are talking about this issue has dramatically changed. \n\nOf course, my favorite part of organizing protests is making an actual change. When a policy is made that betters even a few people's lives, not at the expense of other people. That's the goal. One thing that motivates me is a quote by Mariame Kaba that says, “Let this radicalize you rather than lead you to despair.” That's what motivates me: many things in policy are wrong and it could be easy for you to spiral and think everything is messed up. But I hold on to the fact that this can change and instead of falling into despair, we have to radicalize around it.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"adam-shamsi","text":"Adam Shamsi"}];
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
