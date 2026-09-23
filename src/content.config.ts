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
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    demo: z.string().url().optional(),
    order: z.number(),
    tier: z.enum(["flagship", "experiment"]),
    why: z.string().optional(),
    variant: z.string().optional(),
    stars: z.number().optional(),
    accent: z.boolean().optional(),
  }),
});

const library = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/library" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(["slides", "guides", "architecture", "books"]),
    date: z.date(),
    file: z.string(),
    thumb: z.string(),
    // Shelf geometry. slideCount 0 means the file is a long-scrolling guide
    // rather than a deck, which the shelf renders as a paperback.
    slideCount: z.number().optional(),
    sizeKb: z.number().optional(),
  }),
});

export const collections = { projects, library };
