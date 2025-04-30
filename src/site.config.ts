import { route } from "@/utils/routes";

export const ROUTES = {
	home: "/",
	now: "/now",
	about: "/about",
	notes: "/notes",
	note: "/notes/:id",
	noteTag: "/notes/tag/:tag",
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
		label: "notes",
		url: route("notes"),
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
