import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, type Locale, stripLocale } from "@/i18n";
import { ROUTES, type RouteName } from "@/site.config";

export const route = (path: RouteName, locale: Locale = DEFAULT_LOCALE, hash?: string) => {
	const url = getRelativeLocaleUrl(locale, ROUTES[path]);

	return hash ? `${url}#${hash}` : url;
};

/** Whether `pathname` (in any locale) belongs to the section of `path`. */
export const isActiveRoute = (pathname: string, path: RouteName) =>
	stripLocale(pathname).split("/")[1] === ROUTES[path].split("/")[1];

export const absoluteRoute = (path: string) => {
	const url = new URL(path, import.meta.env.SITE);
	return url.href;
};
