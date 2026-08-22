---
title: Vivid Clean
slug: vivid-clean
hook: Local-first tool that strips AI watermarks and writing tells from documents, built for people who use AI as an accessibility aid rather than a way to cheat.
status: ["shipped", "accessibility"]
tech: ["Bash", "Python", "pandoc"]
repo: https://github.com/vnsavitri/vivid-clean
order: 1
accent: true
---

## What it does

Vivid Clean strips deterministic AI watermarks and common AI-writing tells from documents, images and text, entirely on your own machine. Nothing gets uploaded anywhere.

## Why it exists

Watermarking got sold as a transparency feature. In practice it's one signal standing in for two very different things: someone having an AI write their homework, and someone using AI as a screen reader, a spelling aid, or the only way they can get words on a page at all. Disabled and neurodivergent writers get flagged the same way as the first group. I wrote about why that's the actual problem in [AI watermarking is the new scarlet letter](https://www.linkedin.com/pulse/ai-watermarking-new-scarlet-letter-vivid-n-savitri-npzpc). Vivid Clean is the practical counterpart: a way to actually own your document instead of carrying a mark you didn't put there yourself.

## How it works

A one-time local install (Bash and Python), a small local service, and a repeatable pipeline through pandoc and a vendored watermark-removal tool. No account, no cloud step, no server that isn't running on your own machine.
