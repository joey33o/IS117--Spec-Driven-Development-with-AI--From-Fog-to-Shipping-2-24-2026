import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    receipt: z.string(),
    category: z.enum(['Deep Dive', 'Real World', 'Specialist']),
    coverImage: z.string(),
    gitLink: z.string().url(),
  }),
});

export const collections = { projects };
