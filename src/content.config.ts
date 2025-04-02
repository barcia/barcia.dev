import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "content/notes" }),
	schema: z.object({
		createdDate: z.date().transform((str) => new Date(str)),
	}),
});

export const collections = { notes };
