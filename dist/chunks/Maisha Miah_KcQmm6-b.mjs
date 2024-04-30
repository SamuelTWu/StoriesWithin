import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__Z1AbTIr = new Proxy({"src":"/_astro/Maisha_Miah.fknOgvQP.JPG","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Maisha_Miah.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Maisha_Miah.JPG");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Maisha_Miah.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Maisha_Miah.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__Z1AbTIr, ...props});
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
			const html = await updateImageReferences("<h1 id=\"maisha-miah\">Maisha Miah</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Maisha_Miah.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I went to a charter school called the Bronx Charter School for Excellence. This sounds weird, but I hadn’t met white people till I transitioned to high school. Sure, some of my teachers were white, but I’d never had white people as peers. The high school wasn’t diverse as well. That’s the whole problem with New York’s specialized high schools. It’s all Asian people. There’s a lower population of Black and Latinx people. There’s a whole debate about it.</p>\n<p>I don’t think I got to experience New York City as much as I wanted. My parents are really strict. I would have to tell them a week or so in advance and it would just be to a restaurant. I did do a lot of exploring in high school though. I would tell them I’m going to an after-school program but I would just be chilling with friends. It was just dinners or chilling at Central Park. I’ll still get home by seven. They’re just really traditional and religious. They expect girls to be more submissive in a sense. Just stay at home, don’t do anything. You don’t need friends or whatever, just do your work. And I pray five times a day. I don’t know, I feel like I was more limited and that’s why I was never that expressive. I wanted to join Model UN because I wish I was more outgoing and could speak to a group of people without being self-conscious. I feel like there were a lot of things I just couldn’t do. I wanted to do Model Un, but Model Un conferences were expensive. I also had to commute to school which stopped me from doing after-school programs. I wanted to do this club but they wouldn’t meet until nine and then I’d get home at 11.</p>\n<p>In college, I just feel more free. I can just do whatever I want now without them being judgy for literally no reason I can. I don’t have to ask for permission every time I go to Target. I like being outside. I like to do homework outside rather than in my room. If I was in college in New York, I probably couldn’t have done that. And there’s always so much going on at home, so dealing with that would have been so hard. I’m closer to my parents now because we’re forced to talk to each other on the phone. In high school, they would always be at work, so I wouldn’t really talk to them. Also, we didn’t really have anything to talk about. Now I feel like I’m actually talking to them. Even over the summer, when I’m in person with them, I feel less connected than when I’m apart from them. I don’t know if they feel the same way.</p>");
	

				const frontmatter = {"title":"Maisha Miah","description":"Maisha explains what it was like growing up in a strict, traditional household in New York.","pubDate":"2024-03-2 16:15","author":"Sam Wu","tags":["New York","CS","Asian","Bengali"],"imgUrl":"../../assets/Maisha_Miah.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Maisha Miah.md";
				const url = undefined;
				function rawContent() {
					return "# Maisha Miah\n\n![local image](../../assets/Maisha_Miah.JPG)\n\nI went to a charter school called the Bronx Charter School for Excellence. This sounds weird, but I hadn’t met white people till I transitioned to high school. Sure, some of my teachers were white, but I'd never had white people as peers. The high school wasn't diverse as well. That's the whole problem with New York's specialized high schools. It’s all Asian people. There's a lower population of Black and Latinx people. There's a whole debate about it. \n\nI don't think I got to experience New York City as much as I wanted. My parents are really strict. I would have to tell them a week or so in advance and it would just be to a restaurant. I did do a lot of exploring in high school though. I would tell them I'm going to an after-school program but I would just be chilling with friends. It was just dinners or chilling at Central Park. I'll still get home by seven. They're just really traditional and religious. They expect girls to be more submissive in a sense. Just stay at home, don't do anything. You don't need friends or whatever, just do your work. And I pray five times a day. I don't know, I feel like I was more limited and that's why I was never that expressive. I wanted to join Model UN because I wish I was more outgoing and could speak to a group of people without being self-conscious. I feel like there were a lot of things I just couldn't do. I wanted to do Model Un, but Model Un conferences were expensive. I also had to commute to school which stopped me from doing after-school programs. I wanted to do this club but they wouldn't meet until nine and then I'd get home at 11.\n\nIn college, I just feel more free. I can just do whatever I want now without them being judgy for literally no reason I can. I don't have to ask for permission every time I go to Target. I like being outside. I like to do homework outside rather than in my room. If I was in college in New York, I probably couldn't have done that. And there's always so much going on at home, so dealing with that would have been so hard. I'm closer to my parents now because we’re forced to talk to each other on the phone. In high school, they would always be at work, so I wouldn't really talk to them. Also, we didn't really have anything to talk about. Now I feel like I'm actually talking to them. Even over the summer, when I'm in person with them, I feel less connected than when I'm apart from them. I don't know if they feel the same way.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"maisha-miah","text":"Maisha Miah"}];
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
