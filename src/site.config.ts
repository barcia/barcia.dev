import type { UIKey } from "@/i18n";

export const ROUTES = {
	home: "/",
	now: "/now",
	about: "/about",
	uses: "/uses",
} as const;

export type RouteName = keyof typeof ROUTES;

type NavItem = { label: UIKey; route: RouteName; hash?: UIKey };

export const NAV_MAIN: NavItem[] = [
	{
		label: "nav.work",
		route: "home",
	},
	{
		label: "nav.about",
		route: "about",
	},
	{
		label: "nav.now",
		route: "now",
	},
];

export const NAV_FOOTER: NavItem[] = [
	{
		label: "nav.contact",
		route: "home",
		hash: "home.contactId",
	},
	{
		label: "nav.uses",
		route: "uses",
	},
];
