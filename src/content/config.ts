import { defineCollection, z } from 'astro:content'

// 2. Define your collection(s)
const workCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    logo: image(),
    date_start: z.number(),
    date_end: z.union([z.number(), z.boolean()]),
  }),
});

const speakingCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.date(),
  }),
});

const issuesCollection = defineCollection({
  type: 'content',
});

export const collections = {
  'work': workCollection,
  'speaking': speakingCollection,
  'issues': issuesCollection,
};