import { defineCollection, z } from 'astro:content'

// 2. Define your collection(s)
const workCollections = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    logo: image(),
    date_start: z.number(),
    date_end: z.union([z.number(), z.boolean()]),
  }),
});

export const collections = {
  'work': workCollections,
};