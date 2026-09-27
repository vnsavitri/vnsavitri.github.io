import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Full-text index for /library search, built from the deck files themselves so
// it never drifts from what's published. Each deck becomes one lowercase string
// of its unique words; the page fetches this lazily on first search.
// ponytail: substring match over unique words, no ranking. Swap in a real
// index (e.g. Pagefind) if the library outgrows a few hundred decks.
export const GET: APIRoute = async () => {
  const decks = await getCollection("library");
  const index: Record<string, string> = {};

  for (const deck of decks) {
    const html = readFileSync(join(process.cwd(), "public", deck.data.file), "utf8");
    const text = html
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z#0-9]+;/gi, " ")
      .toLowerCase();
    const words = new Set(text.match(/[\p{L}\p{N}][\p{L}\p{N}'-]{2,}/gu) ?? []);
    index[deck.data.slug] = [...words].join(" ");
  }

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
