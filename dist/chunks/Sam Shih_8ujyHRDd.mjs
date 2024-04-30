const id = "Sam Shih.md";
						const collection = "blog";
						const slug = "sam-shih";
						const body = "# Sam Shih\n\n![local image](../../assets/Sam_Shih.JPG)\n\nUhhhh no comment.\n";
						const data = {title:"Sam Shih",author:"Sam Wu",tags:["New York","CS","Asian","Chinese"],description:"Sam doesn't have much to say.",pubDate:new Date(1709259060000),imgUrl:
						new Proxy({"src":"/_astro/Sam_Shih.7n_lv2WT.JPG","width":5472,"height":3648,"format":"jpg","orientation":1,"fsPath":"/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sam_Shih.JPG"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sam_Shih.JPG";
							}
							globalThis.astroAsset.referencedImages.add("/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/assets/Sam_Shih.JPG");
							return target[name];
						}
					})
					,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/samuelwu/Desktop/Senior/Spring/Stories Within /storieswith.in/src/content/blog/Sam Shih.md",
							rawData: "\ntitle: Sam Shih\ndescription: Sam doesn't have much to say. \npubDate: 2024-02-29 21:11\nauthor: Sam Wu\ntags:\n  - New York\n  - CS\n  - Asian\n  - Chinese\nimgUrl: '../../assets/Sam_Shih.JPG'\nlayout: ../../layouts/BlogPost.astro\n",
						};

export { _internal, body, collection, data, id, slug };
