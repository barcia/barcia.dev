import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "content/notes" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		tags: z.array(z.string()),
		datePub: z
			.date()
			.or(z.string())
			.transform((val) => new Date(val)),
	}),
});

export const collections = { notes };
