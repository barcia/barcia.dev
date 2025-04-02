import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "content/notes" }),
	schema: z.object({
		datePub: z
			.date()
			.or(z.string())
			.transform((val) => new Date(val)),
	}),
});

export const collections = { notes };
