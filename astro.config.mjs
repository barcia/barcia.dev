import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://barcia.dev",
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-dark-dimmed",
				dark: "github-dark",
			},
		},
	},
});
