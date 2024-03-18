declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"Abdul Malik.md": {
	id: "Abdul Malik.md";
  slug: "abdul-malik";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Adam Shamsi.md": {
	id: "Adam Shamsi.md";
  slug: "adam-shamsi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Adi Iyer.md": {
	id: "Adi Iyer.md";
  slug: "adi-iyer";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Aima Rashid.md": {
	id: "Aima Rashid.md";
  slug: "aima-rashid";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Alex Chavira.md": {
	id: "Alex Chavira.md";
  slug: "alex-chavira";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Alex Shores.md": {
	id: "Alex Shores.md";
  slug: "alex-shores";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Alexander Wen.md": {
	id: "Alexander Wen.md";
  slug: "alexander-wen";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Amit Bhatia.md": {
	id: "Amit Bhatia.md";
  slug: "amit-bhatia";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"An Pham.md": {
	id: "An Pham.md";
  slug: "an-pham";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Andrew Burke-Stevenson.md": {
	id: "Andrew Burke-Stevenson.md";
  slug: "andrew-burke-stevenson";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Araba Aidoo.md": {
	id: "Araba Aidoo.md";
  slug: "araba-aidoo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Arin Gokdemir.md": {
	id: "Arin Gokdemir.md";
  slug: "arin-gokdemir";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Ava Ahkiong.md": {
	id: "Ava Ahkiong.md";
  slug: "ava-ahkiong";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Avery Smith.md": {
	id: "Avery Smith.md";
  slug: "avery-smith";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Bella Davies.md": {
	id: "Bella Davies.md";
  slug: "bella-davies";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Bob Chen.md": {
	id: "Bob Chen.md";
  slug: "bob-chen";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Charlotte Cheung.md": {
	id: "Charlotte Cheung.md";
  slug: "charlotte-cheung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Cheryl Lai.md": {
	id: "Cheryl Lai.md";
  slug: "cheryl-lai";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Cheryl Lin.md": {
	id: "Cheryl Lin.md";
  slug: "cheryl-lin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Christophe Lapine.md": {
	id: "Christophe Lapine.md";
  slug: "christophe-lapine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Dante Gonzalez.md": {
	id: "Dante Gonzalez.md";
  slug: "dante-gonzalez";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Demari Stacker.md": {
	id: "Demari Stacker.md";
  slug: "demari-stacker";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Dhruv Kapadia.md": {
	id: "Dhruv Kapadia.md";
  slug: "dhruv-kapadia";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Diana Reno.md": {
	id: "Diana Reno.md";
  slug: "diana-reno";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Dima Almousa.md": {
	id: "Dima Almousa.md";
  slug: "dima-almousa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Dima Ghalili.md": {
	id: "Dima Ghalili.md";
  slug: "dima-ghalili";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Divya Sood.md": {
	id: "Divya Sood.md";
  slug: "divya-sood";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Esme Byrd.md": {
	id: "Esme Byrd.md";
  slug: "esme-byrd";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Esther Choi.md": {
	id: "Esther Choi.md";
  slug: "esther-choi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Evan Jaquevan.md": {
	id: "Evan Jaquevan.md";
  slug: "evan-jaquevan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Freya Dourney.md": {
	id: "Freya Dourney.md";
  slug: "freya-dourney";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Gideon Gordan.md": {
	id: "Gideon Gordan.md";
  slug: "gideon-gordan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Henry Williams.md": {
	id: "Henry Williams.md";
  slug: "henry-williams";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Huley Sow.md": {
	id: "Huley Sow.md";
  slug: "huley-sow";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Iffany Zou.md": {
	id: "Iffany Zou.md";
  slug: "iffany-zou";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Isabelle Hanna.md": {
	id: "Isabelle Hanna.md";
  slug: "isabelle-hanna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"J Lamoureux.md": {
	id: "J Lamoureux.md";
  slug: "j-lamoureux";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Javaugn Headly.md": {
	id: "Javaugn Headly.md";
  slug: "javaugn-headly";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Jay Yoo.md": {
	id: "Jay Yoo.md";
  slug: "jay-yoo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Jesús Marrero Suárez.md": {
	id: "Jesús Marrero Suárez.md";
  slug: "jesús-marrero-suárez";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Josie Huang.md": {
	id: "Josie Huang.md";
  slug: "josie-huang";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Juneau Wang.md": {
	id: "Juneau Wang.md";
  slug: "juneau-wang";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Kayla Ji.md": {
	id: "Kayla Ji.md";
  slug: "kayla-ji";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Kelly Shao.md": {
	id: "Kelly Shao.md";
  slug: "kelly-shao";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Kristi Li.md": {
	id: "Kristi Li.md";
  slug: "kristi-li";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Kyleigh Stewart.md": {
	id: "Kyleigh Stewart.md";
  slug: "kyleigh-stewart";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Leensyn Rivera.md": {
	id: "Leensyn Rivera.md";
  slug: "leensyn-rivera";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Liam Henson.md": {
	id: "Liam Henson.md";
  slug: "liam-henson";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Logan Lechuga.md": {
	id: "Logan Lechuga.md";
  slug: "logan-lechuga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Lydia Palmer.md": {
	id: "Lydia Palmer.md";
  slug: "lydia-palmer";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Lynn Asare-Bediako.md": {
	id: "Lynn Asare-Bediako.md";
  slug: "lynn-asare-bediako";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Madelyn Keller.md": {
	id: "Madelyn Keller.md";
  slug: "madelyn-keller";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Maisha Miah.md": {
	id: "Maisha Miah.md";
  slug: "maisha-miah";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Matthew Batacan.md": {
	id: "Matthew Batacan.md";
  slug: "matthew-batacan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Meckenzie Sarage.md": {
	id: "Meckenzie Sarage.md";
  slug: "meckenzie-sarage";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Melissa Taylor.md": {
	id: "Melissa Taylor.md";
  slug: "melissa-taylor";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Mia Ovrbo.md": {
	id: "Mia Ovrbo.md";
  slug: "mia-ovrbo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Michael Zarif.md": {
	id: "Michael Zarif.md";
  slug: "michael-zarif";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Mike Cambell.md": {
	id: "Mike Cambell.md";
  slug: "mike-cambell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Morgan Wylie.md": {
	id: "Morgan Wylie.md";
  slug: "morgan-wylie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Muhammad Omar Farooq.md": {
	id: "Muhammad Omar Farooq.md";
  slug: "muhammad-omar-farooq";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Natali Vasquez.md": {
	id: "Natali Vasquez.md";
  slug: "natali-vasquez";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Natascha Nussbaum.md": {
	id: "Natascha Nussbaum.md";
  slug: "natascha-nussbaum";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Nicolas McMahon.md": {
	id: "Nicolas McMahon.md";
  slug: "nicolas-mcmahon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Noelle Lo.md": {
	id: "Noelle Lo.md";
  slug: "noelle-lo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Nourhan El Sherif.md": {
	id: "Nourhan El Sherif.md";
  slug: "nourhan-el-sherif";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Parker Mendoza.md": {
	id: "Parker Mendoza.md";
  slug: "parker-mendoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Paul Hee.md": {
	id: "Paul Hee.md";
  slug: "paul-hee";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Precious Amiewalan.md": {
	id: "Precious Amiewalan.md";
  slug: "precious-amiewalan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rafaele Dimaggio.md": {
	id: "Rafaele Dimaggio.md";
  slug: "rafaele-dimaggio";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rani Shah.md": {
	id: "Rani Shah.md";
  slug: "rani-shah";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rani Thompson.md": {
	id: "Rani Thompson.md";
  slug: "rani-thompson";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rigpea Wangchuk.md": {
	id: "Rigpea Wangchuk.md";
  slug: "rigpea-wangchuk";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rishabh Rishabh.md": {
	id: "Rishabh Rishabh.md";
  slug: "rishabh-rishabh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rishi Shah.md": {
	id: "Rishi Shah.md";
  slug: "rishi-shah";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rithvik Doshi.md": {
	id: "Rithvik Doshi.md";
  slug: "rithvik-doshi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Rudy Joseph.md": {
	id: "Rudy Joseph.md";
  slug: "rudy-joseph";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Safiya Karim.md": {
	id: "Safiya Karim.md";
  slug: "safiya-karim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Sai Gunturu.md": {
	id: "Sai Gunturu.md";
  slug: "sai-gunturu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Sam Koenig.md": {
	id: "Sam Koenig.md";
  slug: "sam-koenig";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Sam Shih.md": {
	id: "Sam Shih.md";
  slug: "sam-shih";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Samaa Rasheed.md": {
	id: "Samaa Rasheed.md";
  slug: "samaa-rasheed";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Samantha Perez.md": {
	id: "Samantha Perez.md";
  slug: "samantha-perez";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Sara Rathore.md": {
	id: "Sara Rathore.md";
  slug: "sara-rathore";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Selah Youn.md": {
	id: "Selah Youn.md";
  slug: "selah-youn";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Shea Mowry.md": {
	id: "Shea Mowry.md";
  slug: "shea-mowry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Shermar Fraizer.md": {
	id: "Shermar Fraizer.md";
  slug: "shermar-fraizer";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Sissi Wang.md": {
	id: "Sissi Wang.md";
  slug: "sissi-wang";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Smaran Ramidi.md": {
	id: "Smaran Ramidi.md";
  slug: "smaran-ramidi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Sora Heo.md": {
	id: "Sora Heo.md";
  slug: "sora-heo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Tanmayi Rayavaram.md": {
	id: "Tanmayi Rayavaram.md";
  slug: "tanmayi-rayavaram";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Taylor Morales.md": {
	id: "Taylor Morales.md";
  slug: "taylor-morales";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Tim Liu.md": {
	id: "Tim Liu.md";
  slug: "tim-liu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Vincent Liu.md": {
	id: "Vincent Liu.md";
  slug: "vincent-liu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Virginia Popov.md": {
	id: "Virginia Popov.md";
  slug: "virginia-popov";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Vivian Lu.md": {
	id: "Vivian Lu.md";
  slug: "vivian-lu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Xingda Li.md": {
	id: "Xingda Li.md";
  slug: "xingda-li";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Youssef Haider.md": {
	id: "Youssef Haider.md";
  slug: "youssef-haider";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Yuka Masamura.md": {
	id: "Yuka Masamura.md";
  slug: "yuka-masamura";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"Yuki Frampton.md": {
	id: "Yuki Frampton.md";
  slug: "yuki-frampton";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
