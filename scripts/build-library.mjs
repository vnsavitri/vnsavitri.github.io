/**
 * Imports decks listed in scripts/library-manifest.mjs into the site:
 *   - copies each source HTML file into public/library/decks/<slug>.html
 *   - screenshots its first viewport into public/library/thumbs/<slug>.webp
 *   - writes src/content/library/<slug>.md
 *
 * Needs a global Playwright install (chromium already downloaded there) so
 * this doesn't add a browser-automation dependency to the site itself.
 * Run: npm run library
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import { DECKS, SOURCE_DIR } from "./library-manifest.mjs";

// Playwright is a global install (chromium already downloaded there), not a
// project dependency — this script is a local content-import tool, not part
// of the deployed build.
const globalRoot = execSync("npm root -g").toString().trim();
const { chromium } = await import(`file://${join(globalRoot, "playwright/index.mjs")}`);

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const decksDir = join(root, "public/library/decks");
const thumbsDir = join(root, "public/library/thumbs");
const contentDir = join(root, "src/content/library");

for (const dir of [decksDir, thumbsDir, contentDir]) mkdirSync(dir, { recursive: true });

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[():,'"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const deck of DECKS) {
  const slug = slugify(deck.title);
  const srcPath = join(SOURCE_DIR, deck.file);
  if (!existsSync(srcPath)) {
    console.error(`MISSING: ${deck.file}`);
    continue;
  }

  const html = readFileSync(srcPath);
  writeFileSync(join(decksDir, `${slug}.html`), html);

  await page.goto(`file://${srcPath}`, { waitUntil: "load" });
  await page.waitForTimeout(400); // let fonts/canvas/JS-driven layouts settle
  const shot = await page.screenshot();
  await sharp(shot)
    .resize(640, 400, { fit: "cover", position: "top" })
    .webp({ quality: 82 })
    .toFile(join(thumbsDir, `${slug}.webp`));

  const frontmatter = `---
title: ${JSON.stringify(deck.title)}
slug: ${slug}
category: ${deck.category}
date: ${deck.date}
file: /library/decks/${slug}.html
thumb: /library/thumbs/${slug}.webp
---
`;
  writeFileSync(join(contentDir, `${slug}.md`), frontmatter);
  console.log(`✓ ${deck.title}`);
}

await browser.close();
console.log(`\n${DECKS.length} decks imported.`);
