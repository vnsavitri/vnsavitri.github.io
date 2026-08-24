# veryvivid.xyz

Personal portfolio for Vivid Savitri-Hampton. Astro static site, deployed to GitHub Pages at veryvivid.xyz.

## Build & Deploy

```bash
npm run build                              # builds to dist/
git add -A && git commit && git push       # GitHub Actions deploys (~1-2 min)
```

Always build before committing to catch errors. Never commit the `dist/` folder (it's gitignored).

## Project Structure

```
src/pages/index.astro              # Homepage
src/pages/about.astro              # About page (HTML)
src/pages/projects/[slug].astro    # Project page template
src/content/projects/*.md          # Project content — one .md per project
src/layouts/Layout.astro           # Shared header + footer
src/styles/global.css              # Global styles and CSS classes
public/                            # Static assets (must be git-committed to appear on live site)
```

## Container Widths

| Page | Class | Override |
|---|---|---|
| Homepage | `container-wide` | none (1600px max) |
| About | `container-wide` | `style="max-width: 1400px;"` |
| Project pages | `container-prose` | `style="max-width: 1200px;"` |

## Copy Rules — Strictly Enforced

- **No em dashes (—) anywhere.** Replace with: colon (definition), comma (parenthetical), or period (sentence break). Em dashes are an AI tell.
- **Browser `<title>` separator**: use `|` not `—`
- **Project titles**: proper names only, never repo-style slugs

| File | Title |
|---|---|
| vai-sante-os.md | VAI Santé |
| dam-butler-mcp.md | DAM Butler MCP |
| espresso-horoscope-mcp.md | Espresso Horoscope MCP |
| sourdough-intelligence.md | Sourdough Intelligence |
| vivid-alpaca.md | Vivid Alpaca |
| almost.md | Almost |
| vivid-clean.md | Vivid Clean |

## Contact Links

- LinkedIn: https://www.linkedin.com/in/vnsavitri/
- GitHub: https://github.com/vnsavitri
- Email: vnsavitri@protonmail.ch
- **No Discord links anywhere** (removed — replaced with email)

## Images

- All static assets must live in `public/` and be git-committed — check with `git ls-files public/` before assuming an image is live
- Portrait: `/vivid-portrait.webp`
- Portrait display style: `border-radius: 50%; object-fit: cover; object-position: 50% 15%;` (circular crop, face-centred)

## Site Owner

- Full name: **Vivid Savitri-Hampton** (use everywhere, including logo, `<title>`, meta)
- Location: Sydney, Australia
- Main site: https://www.vnsavitri.com/

## Professional Optics

This site is used for job applications, including at major AI companies (OpenAI, Google, Anthropic, etc.). Before placing any tool in a negative or deprioritised tier ("Moved On", etc.), flag the employer optics to Vivid rather than deciding silently.

## Skill Routing

When the user's request matches an available skill, invoke it via the Skill tool.

- Bugs/errors → /investigate
- QA/visual testing → /qa or /browse
- Design audit → /design-review
- Ship/PR → /ship
- Security → /cso
