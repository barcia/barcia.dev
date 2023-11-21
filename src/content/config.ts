import { defineCollection, z } from 'astro:content'

// 2. Define your collection(s)
const workCollections = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    logo: image(),
    date_start: z.number(),
    date_end: z.union([z.number(), z.boolean()]),
    description: z.string()
  }),
});

export const collections = {
  'work': workCollections,
};