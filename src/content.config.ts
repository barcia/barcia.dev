import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const pages = defineCollection({
	loader: glob({ pattern: "**/*.astro", base: "src/pages" }),
	schema: z.object({
		title: z.string(),
		updatedDate: z.date(),
	}),
});

export const collections = { pages };
