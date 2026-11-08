import { rename, rm } from "node:fs/promises";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { DEFAULT_LOCALE, LOCALES } from "./src/i18n/config";

// Astro builds `es/404.astro` as `es/404/index.html`, but Cloudflare serves the
// nearest `404.html`. Move it so missing `/es/...` paths get the Spanish page.
const localized404 = {
	name: "localized-404",
	hooks: {
		"astro:build:done": async ({ dir }) => {
			for (const locale of LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)) {
				const from = new URL(`${locale}/404/`, dir);
				await rename(new URL("index.html", from), new URL(`${locale}/404.html`, dir));
				await rm(from, { recursive: true });
			}
		},
	},
};

export default defineConfig({
	site: "https://barcia.dev",
	i18n: {
		locales: [...LOCALES],
		defaultLocale: DEFAULT_LOCALE,
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [localized404],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Inter",
			cssVariable: "--font-inter",
		},
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-dark-dimmed",
				dark: "github-dark",
			},
		},
	},
});
