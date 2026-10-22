import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import themes from './data/research-themes.json';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string(),
    theme: z.enum(themes.map((t) => t.id) as [string, ...string[]]),
    year: z.number(),
    /** One or two sentences shown under the project's title on the Research page. */
    summary: z.string().optional(),
    /** Publication ids (from publications.yaml) to list under "Articles". */
    articles: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
