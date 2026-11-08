import { getPathByLocale } from "astro:i18n";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./config";
import { type UIKey, ui } from "./ui";

export * from "./config";
export { type UIKey, ui } from "./ui";

const isLocale = (value: string | undefined): value is Locale => LOCALES.includes(value as Locale);

/** Narrow `Astro.currentLocale` to a configured locale. */
export const getLocale = (currentLocale: string | undefined): Locale =>
	isLocale(currentLocale) ? currentLocale : DEFAULT_LOCALE;

export const useTranslations = (locale: Locale) => (key: UIKey) => ui[locale][key];

/** `/es/about/` → `/about/`. The default locale has no prefix, so its paths pass through. */
export const stripLocale = (pathname: string) => {
	const [, first, ...rest] = pathname.split("/");
	const prefixed = LOCALES.some(
		(locale) => locale !== DEFAULT_LOCALE && getPathByLocale(locale) === first,
	);

	return prefixed ? `/${rest.join("/")}` : pathname;
};
