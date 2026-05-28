import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    hook: z.string(),
    status: z.array(z.string()),
    tech: z.array(z.string()),
    repo: z.string().url(),
    live: z.string().url().optional(),
    demo: z.string().url().optional(),
    order: z.number(),
    stars: z.number().optional(),
    accent: z.boolean().optional(),
  }),
});

export const collections = { projects };
