/**
 * Generates public/og.png, the social preview card.
 *
 * Colours are copied from the @theme block in src/styles/global.css so the card
 * cannot drift away from the site. The headline mirrors the homepage h1.
 *
 * Run: npm run og
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// src/styles/global.css lines 5-13
const CREAM = "#f0f6f6";
const INK = "#084b83";
const INK_MUTED = "#7a9dbb";
const RULE = "#c8dde8";
const ACCENT = "#f07167";

const W = 1200;
const H = 630;
const PAD = 90;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${ACCENT}"/>

  <text x="${PAD}" y="132" font-family="Outfit" font-size="21" font-weight="600"
        letter-spacing="4.2" fill="${INK_MUTED}">VIVID SAVITRI-HAMPTON</text>

  <text x="${PAD}" y="276" font-family="Outfit" font-size="66" font-weight="700"
        fill="${INK}">I build AI systems that take</text>
  <text x="${PAD}" y="356" font-family="Outfit" font-size="66" font-weight="700"
        xml:space="preserve" fill="${ACCENT}">safety<tspan fill="${INK}"> as seriously as</tspan></text>
  <text x="${PAD}" y="436" font-family="Outfit" font-size="66" font-weight="700"
        fill="${ACCENT}">capability.</text>

  <line x1="${PAD}" y1="508" x2="${W - PAD}" y2="508" stroke="${RULE}" stroke-width="1"/>

  <text x="${PAD}" y="556" font-family="Outfit" font-size="19" font-weight="500"
        letter-spacing="3.6" fill="${INK_MUTED}">AI / PRODUCT / SYDNEY</text>
  <text x="${W - PAD}" y="556" text-anchor="end" font-family="Outfit" font-size="19"
        font-weight="500" letter-spacing="0.6" fill="${INK_MUTED}">veryvivid.xyz</text>
</svg>`;

const out = join(root, "public", "og.png");

await sharp(Buffer.from(svg), { density: 144 })
  .resize(W, H, { fit: "fill" })
  .png({ compressionLevel: 9 })
  .toFile(out);

const meta = await sharp(out).metadata();
console.log(`wrote public/og.png  ${meta.width}x${meta.height}  ${meta.size} bytes`);

if (meta.width !== W || meta.height !== H) {
  console.error(`expected ${W}x${H}`);
  process.exit(1);
}

// Keep a copy of the source SVG next to the script so the card can be tweaked
// without re-deriving the layout.
writeFileSync(join(root, "scripts", "og-card.svg"), svg);
