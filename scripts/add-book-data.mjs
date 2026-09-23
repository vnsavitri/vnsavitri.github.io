/**
 * Adds shelf geometry data to every library entry: slideCount and sizeKb.
 *
 * The /library shelf sizes each book from these. Decks with slides become
 * hardcovers whose thickness tracks slide count; files with zero slides are
 * long-scrolling guides and become thinner paperbacks sized from file weight.
 *
 * Reads the deck out of public/library/decks/ rather than the external source
 * folder, so this covers hand-placed decks that never went through the
 * importer. Idempotent: rewrites the two fields in place on every run.
 *
 * Run: npm run bookdata
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "src/content/library");
const decksDir = join(root, "public/library/decks");

// The decks disagree on everything except this: a slide is an element whose
// class list contains `slide` as its own token. Matches `slide`, `slide active`,
// `slide s-tmpl`; skips `slide-inner`, `slides`, `slide-number`.
const SLIDE_RE = /class="slide( [^"]*)?"/g;

const countSlides = (html) => (html.match(SLIDE_RE) ?? []).length;

const upsertField = (body, key, value) => {
  const line = `${key}: ${value}`;
  const re = new RegExp(`^${key}:.*$`, "m");
  if (re.test(body)) return body.replace(re, line);
  // Insert before the closing frontmatter fence.
  const end = body.indexOf("\n---", 4);
  return body.slice(0, end) + `\n${line}` + body.slice(end);
};

let hardcovers = 0;
let paperbacks = 0;
const missing = [];

for (const name of readdirSync(contentDir).filter((f) => f.endsWith(".md"))) {
  const mdPath = join(contentDir, name);
  const slug = name.replace(/\.md$/, "");
  const deckPath = join(decksDir, `${slug}.html`);

  let html;
  try {
    html = readFileSync(deckPath, "utf8");
  } catch {
    missing.push(slug);
    continue;
  }

  const slideCount = countSlides(html);
  const sizeKb = Math.round(statSync(deckPath).size / 1024);

  let body = readFileSync(mdPath, "utf8");
  body = upsertField(body, "slideCount", slideCount);
  body = upsertField(body, "sizeKb", sizeKb);
  writeFileSync(mdPath, body);

  if (slideCount > 0) hardcovers++;
  else paperbacks++;
}

console.log(`hardcovers (decks with slides): ${hardcovers}`);
console.log(`paperbacks (long-scrolling guides): ${paperbacks}`);
if (missing.length) {
  console.error(`\nNo deck file found for ${missing.length}:`);
  missing.forEach((s) => console.error(`  ${s}`));
  process.exit(1);
}
