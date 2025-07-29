import { route } from "@/utils/routes";

export const ROUTES = {
	home: "/",
	now: "/now",
	about: "/about",
	uses: "/uses",
} as const;

export const NAV_MAIN = [
	{
		label: "work",
		url: route("home"),
	},
	{
		label: "about",
		url: route("about"),
	},
	{
		label: "now",
		url: route("now"),
	},
];

export const NAV_FOOTER = [
	{
		label: "contact",
		url: route("home", undefined, ["#get-in-touch"]),
	},
	{
		label: "uses",
		url: route("uses"),
	},
];
