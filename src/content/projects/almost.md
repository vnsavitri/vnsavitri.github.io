---
title: Almost
slug: almost
hook: Upload a LinkedIn PDF. Almost finds 3–5 real fork points in your career. You pick one. It renders the alternate you in one of four formats.
status: ["shipped", "product"]
tech: ["Next.js 14", "Anthropic API", "Fraunces"]
repo: https://github.com/vnsavitri/Almost
order: 6
---

## What it does

*the life you didn't quite live*

Almost is a parallel-life generator. Upload your LinkedIn PDF or resume. It finds the real moments where your career could have gone differently. You pick one. Almost generates the other version of you, rendered as a styled artifact in one of four formats.

Not the better version. Not the worse one. Just the one that happened when you said yes instead of no.

## How it flows

1. **Upload** your LinkedIn PDF or resume/CV
2. **Almost finds** 3–5 real fork points in your career history
3. **You pick** one moment
4. **Almost generates** your alternate life in one of four formats:

| Format | What you get |
|---|---|
| **LinkedIn Ghost** | Uncanny-valley LinkedIn profile of the alternate you: headline, job history, two endorsements from fictional colleagues |
| **The Wiki Stub** | Wikipedia article about the alternate you: infobox, sections, fake citations, stub banner |
| **Museum Plaque** | Minimalist gallery wall card. Max 80 words. Cream background. Just the facts of a life. |
| **The Tarot Card** | CSS-only illustrated tarot card with Upright and Reversed readings |

## Tech stack

- **Framework**: Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS, Fraunces + Inter
- **AI**: Anthropic Claude API (`claude-sonnet-4-20250514`)
- **PDF parsing**: Claude's native document support (no PDF libraries)
- **Payments**: RevenueCat web SDK
- **Deploy**: Vercel
