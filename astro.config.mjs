import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://barcia.dev",
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [{
		provider: fontProviders.fontsource(),
		name: "Geist Mono",
		cssVariable: "--font-geist-mono",
	}],
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-dark-dimmed",
				dark: "github-dark",
			},
		},
	},
});
