type Route = {
	[key: string]: string;
};

export const PERSONAL_WEB = {
	name: "ivan.gal",
	url: "https://ivan.gal",
};

export const ROUTES: Route = {
	home: "/",
	now: "/now",
	about: "/about",
	blog: "/blog",
	newsletter: "/newsletter",
	uses: "/uses",
	llmstxt: "/llms.txt",
};

type Social = {
	[key: string]: {
		name: string;
		url: string;
		icon: string;
	};
};

export const SOCIAL: Social = {
	linkedin: {
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ivanbarcia/",
		icon: "/assets/images/LinkedIn_Logo.svg",
	},
	github: {
		name: "Github",
		url: "https://github.com/barcia",
		icon: "/assets/images/Github_Logo.svg",
	},
	figma: {
		name: "Figma",
		url: "https://www.figma.com/@barcia",
		icon: "/assets/images/Figma_Logo.svg",
	},
	bluesky: {
		name: "Bluesky",
		url: "https://bsky.app/profile/barcia.dev",
		icon: "/assets/images/Bluesky_Logo.svg",
	},
};

type Company = {
	name: string;
	iconDark: string;
	iconLight: string;
};

export const COMPANIES: Company[] = [
	{
		name: "F.C. Barcelona",
		iconDark: "/assets/images/F.C._Barcelona_Logo.svg",
		iconLight: "/assets/images/F.C._Barcelona_Logo_Light.svg",
	},
	{
		name: "GitHub",
		iconDark: "/assets/images/Github_Logo.svg",
		iconLight: "/assets/images/Github_Logo_Light.svg",
	},
	{
		name: "Meliã",
		iconDark: "/assets/images/Melia_Logo.svg",
		iconLight: "/assets/images/Melia_Logo_Light.svg",
	},
	{
		name: "Levante U.D.",
		iconDark: "/assets/images/Levante_UD_Logo.svg",
		iconLight: "/assets/images/Levante_UD_Logo_Light.svg",
	},
	{
		name: "Tifin",
		iconDark: "/assets/images/Tifin_Logo.svg",
		iconLight: "/assets/images/Tifin_Logo_Light.svg",
	},
	{
		name: "AiKit",
		iconDark: "/assets/images/AiKit_Logo.svg",
		iconLight: "/assets/images/AiKit_Logo_Light.svg",
	},
	{
		name: "RedRadix",
		iconDark: "/assets/images/RedRadix_Logo.svg",
		iconLight: "/assets/images/RedRadix_Logo_Light.svg",
	},
	{
		name: "Grow",
		iconDark: "/assets/images/Grow_Logo.svg",
		iconLight: "/assets/images/Grow_Logo_Light.svg",
	},
	{
		name: "OpositaTest",
		iconDark: "/assets/images/OpositaTest_Logo.svg",
		iconLight: "/assets/images/OpositaTest_Logo_Light.svg",
	},
];

type Speaking = {
	title: string;
	date: Date;
	event: string;
};

export const SPEAKING: Speaking[] = [
	{
		title: "New Frontiers of CSS. Exploring the Latest Features.",
		date: new Date("2023-09-23"),
		event: "AtlanticaConf",
	},
	{
		title: "CSS Custom Properties.",
		date: new Date("2018-07-30"),
		event: "WordPress SQC",
	},
];
