import { d as createComponent, g as renderTemplate, h as renderComponent, u as unescapeHTML, s as spreadAttributes } from './astro_fH4yl_Rl.mjs';
import { $ as $$BlogPost } from './BlogPost_PFp6i1PW.mjs';
import { f as getImage } from './pages/404_bTuSvEQn.mjs';
import 'clsx';

const Astro__6nh32 = new Proxy({"src":"/_astro/Gideon_Gordan.dBdyDp-C.jpg","width":800,"height":600,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Gideon_Gordan.jpg";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Gideon_Gordan.jpg");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "../../assets/Gideon_Gordan.JPG" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/Gideon_Gordan.JPG" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__6nh32, ...props});
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
			const html = await updateImageReferences("<h1 id=\"gideon-gordan\">Gideon Gordan</h1>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/Gideon_Gordan.JPG&#x22;,&#x22;alt&#x22;:&#x22;local image&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>I’ve gotten more political in college. Mostly just being aware of politics existing. My political beliefs have changed but in complicated ways that would take too long to explain. The way I think about my religion has changed as well. I’m treating it more culturally now than as specific obligations.</p>\n<p>There are a lot more Jews at BU compared to my high school. 20% of the population is Jewish. Most are not visibly Jewish, I should say. It’s not that people are hiding it, it’s just that if someone isn’t very strictly Jewish you’re not going to know. My interactions have not all been positive. I’m personally very religious, but I also have political positions that aren’t shared by large parts of the Jewish population. They certainly aren’t shared by the campus. There are some tensions around that. Very recently, there have been some pretty intense arguments around that, especially over Israel and Palestine.</p>\n<p>Sometimes the arguments feel a little bit petty. And it’s frustrating. In practice, there is very little that we can actually do to change the situation on the ground in Israel and Palestine. In theory, yes, we have strong political commitments and fearless defenders of liberty. But in practice, the amount of stuff we can do is limited to occasional protests.</p>\n<p>I think the one club on campus related to this puts up a big wall and lots of signs one week every year. And that almost exhausts our options as students. It’s a weird situation on campus where there are a lot of students who are very politically motivated with essentially no outlets. For instance, the young democratic socialists. in theory, yes, they are democratic socialists. They’re in favor of implementing socialism through democratic means. In practice, the most notable thing that they’ve done on campus was a campaign to make laundry free, which I supported. You know, it’s good. I’m tired of paying an enormous amount for laundry. But there’s an enormous gap between these campus organizations which have these very high-minded slogans and what we’re actually able to accomplish.</p>\n<p>My main goal in terms of political involvement on campus has been on the academic and cultural side. Right. The specific organization I’m involved in is related to Israel, and Palestine and is an academic group. We don’t do protests specifically, we’re meant to provide a space for students to learn, which to me is the main thing that we can actually do in college. In terms of practical things, college is not really a space where you’re going to change the world as much as authority figures declare that it is our “chance to change the world”. It’s really not.</p>");
	

				const frontmatter = {"title":"Gideon Gordan","description":"As a Jewish student studying IR with a concentraction in the Middle East, Gideon contemplates the political landscape of BU.","pubDate":"2024-03-16 21:01","author":"Sam Wu","tags":["IR","Massachusetts"],"imgUrl":"../../assets/Gideon_Gordan.JPG","layout":"../../layouts/BlogPost.astro"};
				const file = "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Gideon Gordan.md";
				const url = undefined;
				function rawContent() {
					return "# Gideon Gordan\n\n![local image](../../assets/Gideon_Gordan.JPG)\n\nI've gotten more political in college. Mostly just being aware of politics existing. My political beliefs have changed but in complicated ways that would take too long to explain. The way I think about my religion has changed as well. I'm treating it more culturally now than as specific obligations.\n\nThere are a lot more Jews at BU compared to my high school. 20% of the population is Jewish. Most are not visibly Jewish, I should say. It's not that people are hiding it, it’s just that if someone isn't very strictly Jewish you're not going to know. My interactions have not all been positive. I'm personally very religious, but I also have political positions that aren't shared by large parts of the Jewish population. They certainly aren't shared by the campus. There are some tensions around that. Very recently, there have been some pretty intense arguments around that, especially over Israel and Palestine.\n\nSometimes the arguments feel a little bit petty. And it’s frustrating. In practice, there is very little that we can actually do to change the situation on the ground in Israel and Palestine. In theory, yes, we have strong political commitments and fearless defenders of liberty. But in practice, the amount of stuff we can do is limited to occasional protests.\n\nI think the one club on campus related to this puts up a big wall and lots of signs one week every year. And that almost exhausts our options as students. It's a weird situation on campus where there are a lot of students who are very politically motivated with essentially no outlets. For instance, the young democratic socialists. in theory, yes, they are democratic socialists. They're in favor of implementing socialism through democratic means. In practice, the most notable thing that they've done on campus was a campaign to make laundry free, which I supported. You know, it's good. I'm tired of paying an enormous amount for laundry. But there's an enormous gap between these campus organizations which have these very high-minded slogans and what we're actually able to accomplish. \n\nMy main goal in terms of political involvement on campus has been on the academic and cultural side. Right. The specific organization I'm involved in is related to Israel, and Palestine and is an academic group. We don't do protests specifically, we're meant to provide a space for students to learn, which to me is the main thing that we can actually do in college. In terms of practical things, college is not really a space where you're going to change the world as much as authority figures declare that it is our “chance to change the world”. It's really not.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"gideon-gordan","text":"Gideon Gordan"}];
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
