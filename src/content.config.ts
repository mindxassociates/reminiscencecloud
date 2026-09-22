import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  slug: z.string(), title: z.string(), summary: z.string(), date: z.coerce.date(),
  published: z.boolean().default(false), featuredImage: z.string().optional(),
  imageAlt: z.string().optional(), seoTitle: z.string().optional(), seoDescription: z.string().optional()
});

const postsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/en' }),
  schema: postSchema
});

const postsZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/zh' }),
  schema: postSchema
});

export const collections = { postsEn, postsZh };
