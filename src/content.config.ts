import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    category: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean(),
    featured: z.boolean().optional().default(false)
  })
});

export const collections = { blog };
