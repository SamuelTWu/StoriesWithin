import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1cT8vc = new Proxy({"src":"/_astro/Iffany_Zou.omomKFdY.JPG","width":3648,"height":5472,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Iffany_Zou.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Iffany_Zou.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Iffany_Zou.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Iffany_Zou.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1cT8vc, ...props});
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
			const html = await updateImageReferences("<h1 id=\"iffany-zou\">Iffany Zou</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Iffany_Zou.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I went to high school in Shanghai, and there was just a lot of pressure. I was from a small town and then all of a sudden I was in a huge city and I didn’t know anybody. So it was hard. Also, I was so uptight about everything. And such a people pleaser. I wanted to do everything and be good at everything. I wanted everyone to like me.</p>\n<p>Now in college, the relationships I have are much more intentional. All the people I put into my schedule are people I want to see and want to continue being friends with. I’ve also mellowed out a lot. I wouldn’t say it’s less work but I have less stress doing it. A part of it is that I don’t care what grades I get but also the work that I do now is much more aligned with my interests. I’m a lot more willing to do it rather than busy work.</p>\n<p>I have a much more realistic view of service work now. In high school, I was always very passionate about the environment. But I realized I can’t do much with just being passionate about the environment. I need a skill set to apply it, and most importantly, I need a role in society to apply it. Experiencing and seeing that was a big part of my growth. I realized I wanted to be able to sustain myself.</p>\n<p>You have to draw between like being selfless and being selfish. Sometimes you have to put yourself first. It’s hard to find that line and I think it looks different for everybody. Obviously, I do want to do good for the world and be there for my friends. But if I’m not happy, I can’t do that.</p>\n<p>But on the topic of BU, I feel like these institutions neglect a lot of responsibility and green wash a lot. They put a lot of statistics out saying “These are our missions” or “How good we’re doing”, but in reality, it’s because they’re outsourcing or they’re putting everything off somewhere else.</p>\n<p>The future of our environment looks pretty bleak. I’m pretty hopeful but I’d be lying if I didn’t say it bothered me. There were times when I’d get super anxious about it. But right now I’m in the stage of my life where, and maybe this is me being too selfish, but I’m not thinking too far in the future. I’m more in the moment. All I’m thinking about is what can I do now?</p>");
	

				const frontmatter = {"title":"Iffany Zou","description":"Iffany contemplates environmental work and the importance of putting one's self first.","pubDate":"2024-03-06 14:40","author":"Sam Wu","tags":["California","Chinese","Econ","Environment"],"imgUrl":"../../assets/Iffany_Zou.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Iffany Zou.md";
				const url = undefined;
				function rawContent() {
					return "# Iffany Zou\n\n![local image](../../assets/Iffany_Zou.JPG)\n\nI went to high school in Shanghai, and there was just a lot of pressure. I was from a small town and then all of a sudden I was in a huge city and I didn't know anybody. So it was hard. Also, I was so uptight about everything. And such a people pleaser. I wanted to do everything and be good at everything. I wanted everyone to like me.\n\nNow in college, the relationships I have are much more intentional. All the people I put into my schedule are people I want to see and want to continue being friends with. I’ve also mellowed out a lot. I wouldn't say it's less work but I have less stress doing it. A part of it is that I don't care what grades I get but also the work that I do now is much more aligned with my interests. I'm a lot more willing to do it rather than busy work. \n\nI have a much more realistic view of service work now. In high school, I was always very passionate about the environment. But I realized I can't do much with just being passionate about the environment. I need a skill set to apply it, and most importantly, I need a role in society to apply it. Experiencing and seeing that was a big part of my growth. I realized I wanted to be able to sustain myself. \n\nYou have to draw between like being selfless and being selfish. Sometimes you have to put yourself first. It’s hard to find that line and I think it looks different for everybody. Obviously, I do want to do good for the world and be there for my friends. But if I'm not happy, I can't do that.\n\nBut on the topic of BU, I feel like these institutions neglect a lot of responsibility and green wash a lot. They put a lot of statistics out saying “These are our missions” or “How good we're doing”, but in reality, it's because they're outsourcing or they're putting everything off somewhere else.\n\nThe future of our environment looks pretty bleak. I'm pretty hopeful but I'd be lying if I didn't say it bothered me. There were times when I'd get super anxious about it. But right now I'm in the stage of my life where, and maybe this is me being too selfish, but I'm not thinking too far in the future. I'm more in the moment. All I’m thinking about is what can I do now?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"iffany-zou","text":"Iffany Zou"}];
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
