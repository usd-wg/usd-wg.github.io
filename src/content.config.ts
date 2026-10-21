// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    group: z.enum(['games', 'camera', 'assets', 'materials', 'web', 'main']),
    author: z.string().default('USDWG Sub-Committee'),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
