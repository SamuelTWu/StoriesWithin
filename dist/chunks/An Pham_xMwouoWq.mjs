import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z19yl3v = new Proxy({"src":"/_astro/An_Pham.O7ZaXb7d.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/An_Pham.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/An_Pham.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/An_Pham.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/An_Pham.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z19yl3v, ...props});
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
			const html = await updateImageReferences("<h1 id=\"an-pham\">An Pham</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/An_Pham.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’ve started understanding what I actually want to do after college. I know that’s what I paid to learn and I’m happy I learned it but it’s been a big thing. I no longer want to do computer science, which I’m good at. I want to work in policy. But then it’s been a big step in learning how exactly different powerful groups, including the government and all its layers, make decisions.</p>\n<p>And what role can you play at each layer of that? Are there certain parts of that system I feel are less productive? Are there certain parts where data is more effective and available? So I’ve had a lot of fun learning especially when it comes to city policy. I think I’ve learned how to be angry and sad in ways that are productive here too.</p>\n<p>We came here and Trump almost won again. That was a wild start to time at university. A lot of grim stuff has happened during the pandemic. Biweekly mass shootings are another undercurrent. And now sometimes my friends, especially my queer friends, are targets of these news stories. So we had to learn how to talk to each other about those things in a way that doesn’t completely ruin an afternoon. I think it’s emotional maturity, but it’s a different kind of emotional maturity than just, oh your boy is going through a breakup be kind to him. Don’t get me wrong, that’s hard, but it’s different from, your boy is existential about whether or not his nation will protect him. What do we do about that?</p>\n<p>The other thing of course is just meeting people who care about things that I’ve never thought to care for. Not that I undervalue it, but I’ve never met people who have made that their main thing. Meeting international relations majors or people who are into math, not because it’s the easiest way to make money, but because they find some kind of beauty in it. That’s actually really cool. I just started some sociology classes and it’s been such a wonderful look at a different side of all the same issues we’ve been looking at in economics. The starting questions were different.</p>\n<p>The other big thing has been that my relationship with economics has changed. It’s something my dad studied. It’s something that I’ve always had in the back of my mind. But I used to phrase economics as the study of money and how to make it. A lot of people still see it that way. A lot of BU still sees it that way. There’s statistically a reason why they’re in that class.</p>\n<p>I felt conflicted about being an economist because so many are incurious (or even apathetic) about issues of race, labor, and poverty. Many dismiss how other social fields are studying the people we tend to ignore. But I realized that money is one of the biggest systems of power and influence that we have in the world. For me, economics describes how money and resources shape society. If you want to do anything political, you need to understand those dynamics. It’s harder to sail across the Atlantic if you don’t understand how wind works; It’s harder to end homelessness if you don’t understand economics. And so it’s been eye-opening finding different types of economists and different peers at BU who are interested in that part of the question. “Is it possible to make this machine work?” is very different from “How do I stand at the end pipe of that machine and just take whatever comes out of it?</p>");
	

				const frontmatter = {"title":"An Pham","description":"An discovers passion in policy, navigating complex systems, and embraces emotional maturity.","pubDate":"2024-01-24 22:28","author":"Sam Wu","tags":["Econ","Toronto","Asian","Viet"],"imgUrl":"../../assets/An_Pham.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/An Pham.md";
				const url = undefined;
				function rawContent() {
					return "# An Pham\n\n![local image](../../assets/An_Pham.JPG)\n\nI’ve started understanding what I actually want to do after college. I know that's what I paid to learn and I'm happy I learned it but it's been a big thing. I no longer want to do computer science, which I'm good at. I want to work in policy. But then it's been a big step in learning how exactly different powerful groups, including the government and all its layers, make decisions.\n\nAnd what role can you play at each layer of that? Are there certain parts of that system I feel are less productive? Are there certain parts where data is more effective and available? So I've had a lot of fun learning especially when it comes to city policy. I think I've learned how to be angry and sad in ways that are productive here too.\n\nWe came here and Trump almost won again. That was a wild start to time at university. A lot of grim stuff has happened during the pandemic. Biweekly mass shootings are another undercurrent. And now sometimes my friends, especially my queer friends, are targets of these news stories. So we had to learn how to talk to each other about those things in a way that doesn't completely ruin an afternoon. I think it's emotional maturity, but it's a different kind of emotional maturity than just, oh your boy is going through a breakup be kind to him. Don’t get me wrong, that's hard, but it's different from, your boy is existential about whether or not his nation will protect him. What do we do about that? \n\nThe other thing of course is just meeting people who care about things that I’ve never thought to care for. Not that I undervalue it, but I've never met people who have made that their main thing. Meeting international relations majors or people who are into math, not because it’s the easiest way to make money, but because they find some kind of beauty in it. That's actually really cool. I just started some sociology classes and it's been such a wonderful look at a different side of all the same issues we've been looking at in economics. The starting questions were different. \n\nThe other big thing has been that my relationship with economics has changed. It's something my dad studied. It's something that I've always had in the back of my mind. But I used to phrase economics as the study of money and how to make it. A lot of people still see it that way. A lot of BU still sees it that way. There's statistically a reason why they're in that class. \n\nI felt conflicted about being an economist because so many are incurious (or even apathetic) about issues of race, labor, and poverty. Many dismiss how other social fields are studying the people we tend to ignore. But I realized that money is one of the biggest systems of power and influence that we have in the world. For me, economics describes how money and resources shape society. If you want to do anything political, you need to understand those dynamics. It's harder to sail across the Atlantic if you don't understand how wind works; It's harder to end homelessness if you don't understand economics. And so it's been eye-opening finding different types of economists and different peers at BU who are interested in that part of the question. “Is it possible to make this machine work?” is very different from “How do I stand at the end pipe of that machine and just take whatever comes out of it?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"an-pham","text":"An Pham"}];
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
