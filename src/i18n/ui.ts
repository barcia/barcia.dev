import type { Locale } from "./config";

// Interface strings. Page copy lives in the Markdown files under `src/pages/`.
const en = {
	"meta.title": "Iván Barcia | Product Engineer",
	"meta.description":
		"Iván Barcia builds digital products from idea to production, with a craft for user interfaces and an AI-native way of working.",
	"lang.name": "English",
	"nav.work": "work",
	"nav.about": "about",
	"nav.now": "now",
	"nav.contact": "contact",
	"nav.uses": "uses",
	"footer.tagline": "from idea to production",
	"page.updated": "Last updated:",
	"home.contactId": "get-in-touch",
} as const;

const es: Record<keyof typeof en, string> = {
	"meta.title": "Iván Barcia | Product Engineer",
	"meta.description":
		"Iván Barcia construye productos digitales de la idea a producción, con especial mano para las interfaces de usuario y una forma de trabajar AI-native.",
	"lang.name": "Español",
	"nav.work": "trabajo",
	"nav.about": "sobre mí",
	"nav.now": "ahora",
	"nav.contact": "contacto",
	"nav.uses": "uses",
	"footer.tagline": "de la idea a producción",
	"page.updated": "Última actualización:",
	"home.contactId": "contacto",
};

export type UIKey = keyof typeof en;

export const ui: Record<Locale, Record<UIKey, string>> = { en, es };
