import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__1pYjm5 = new Proxy({"src":"/_astro/Sam_Perez.bLl7XKEG.jpeg","width":5472,"height":3648,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sam_Perez.jpeg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sam_Perez.jpeg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Sam_Perez.jpeg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Sam_Perez.jpeg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__1pYjm5, ...props});
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
			const html = await updateImageReferences("<h1 id=\"samantha-perez\">Samantha Perez</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Sam_Perez.jpeg&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I have immigrant parents. It’s like you either have to be a lawyer or a doctor. So I was like, “I’ll be a doctor”. I found it more interesting. Now, even though I’m super interested in psychology, I decided to not do medicine. I’m studying political science in Latin American studies, which is a total shift from what I did when I first got here.</p>\n<p>It was rough. My mom was on my ass for sure. She stressed out about it a lot more than I did, to be honest. She had no idea what I was going to do post-college. She was worried about if I’d be able to make money studying what I was studying. Which is totally fair. I get it, but right now, I feel like we all say the same thing: “I don’t care if I make money, I just care if I get to do what I want to do”.</p>\n<p>I feel like once we start getting older we’re going to be like, oh shit, we’re broke, and I don’t want that to happen to me, but I also don’t want to fall into a career where I’m going to hate my life.</p>\n<p>So right now I’m figuring out what I want to do, but I have a pretty good handle on it. I’m taking the right classes, getting the grades, and getting all the internship stuff. My mom is seeing the outcome and she’s trusting it a lot more. A lot of it was going behind her back and just changing my major without talking to her, which is shitty on my end. But I had to do it. I’m not switching back.</p>\n<p>It was rough not gonna lie because I was doing a lot of it with no support. We moved throughout my childhood. We got very distant from our family and I already grew up without my dad. The only support system I really had was my mom and she’s 2000 miles away. So not even having that little bit of support with my career choices feels lonely. It was a lot of me figuring out what to do after college. And I figured that out little by little and we worked it out.</p>\n<p>I’m a very independent person. I’m not the kind of person to ask for help from friends for support. They’re like, “Oh, you can come to me if you need any help”, but I’m not that kind of person. So a lot of it is just like me working things out on my own.</p>\n<p>Now, I’m more in tune with what I care about: my own community and my own culture. I’m pursuing a career in immigration law. The internship I had this past summer and the two I have now are all immigration. The classes I’m taking are all Latin American immigration. It just makes me feel more connected to what I want to do instead of forcing something that I don’t. I get to work with a lot of Hispanic immigrants in Boston. Even the club that I’m in deals with immigration. I just feel a lot more connected to my community.</p>");
	

				const frontmatter = {"title":"Samantha Perez","description":"Samantha initially pursued medicine to please their parents but later switched to studying political science.","pubDate":"2024-02-24 22:28","author":"Sam Wu","tags":["Family","Poli Sci","Florida","Hispanic"],"imgUrl":"../../assets/Sam_Perez.jpeg","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Samantha Perez.md";
				const url = undefined;
				function rawContent() {
					return "# Samantha Perez\n\n![local image](../../assets/Sam_Perez.jpeg)\n\nI have immigrant parents. It's like you either have to be a lawyer or a doctor. So I was like, \"I’ll be a doctor\". I found it more interesting. Now, even though I’m super interested in psychology, I decided to not do medicine. I'm studying political science in Latin American studies, which is a total shift from what I did when I first got here.\n\nIt was rough. My mom was on my ass for sure. She stressed out about it a lot more than I did, to be honest. She had no idea what I was going to do post-college. She was worried about if I’d be able to make money studying what I was studying. Which is totally fair. I get it, but right now, I feel like we all say the same thing: “I don't care if I make money, I just care if I get to do what I want to do”.\n\nI feel like once we start getting older we're going to be like, oh shit, we're broke, and I don't want that to happen to me, but I also don't want to fall into a career where I'm going to hate my life.\n\nSo right now I’m figuring out what I want to do, but I have a pretty good handle on it. I'm taking the right classes, getting the grades, and getting all the internship stuff. My mom is seeing the outcome and she's trusting it a lot more. A lot of it was going behind her back and just changing my major without talking to her, which is shitty on my end. But I had to do it. I'm not switching back. \n\nIt was rough not gonna lie because I was doing a lot of it with no support. We moved throughout my childhood. We got very distant from our family and I already grew up without my dad. The only support system I really had was my mom and she's 2000 miles away. So not even having that little bit of support with my career choices feels lonely. It was a lot of me figuring out what to do after college. And I figured that out little by little and we worked it out.\n\nI'm a very independent person. I'm not the kind of person to ask for help from friends for support. They're like, “Oh, you can come to me if you need any help”, but I'm not that kind of person. So a lot of it is just like me working things out on my own.\n\nNow, I'm more in tune with what I care about: my own community and my own culture. I'm pursuing a career in immigration law. The internship I had this past summer and the two I have now are all immigration. The classes I'm taking are all Latin American immigration. It just makes me feel more connected to what I want to do instead of forcing something that I don't. I get to work with a lot of Hispanic immigrants in Boston. Even the club that I'm in deals with immigration. I just feel a lot more connected to my community. \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"samantha-perez","text":"Samantha Perez"}];
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
