---
title: sourdough-intelligence
slug: sourdough-intelligence
hook: ML-powered sourdough framework. 207-recipe regression and IBM Watson sentiment analysis, started in 2018 — before LLMs.
status: ["live"]
tech: ["R", "IBM Watson NLP", "regression"]
repo: https://github.com/vnsavitri/sourdough-intelligence
live: https://vividcrumb.netlify.app
order: 6
---

## Background

This project started in 2018, before LLMs were part of anyone's toolkit.

The original goal was simple: figure out which sourdough recipe gave a first-time baker the highest probability of success on the first attempt. To do this, I built a two-stage model:

1. **Multiple linear regression** across key recipe variables: hydration, fermentation time, flour type, inoculation rate, fold count, and bulk temperature.
2. **Sentiment analysis on YouTube comments** (IBM Watson NLP) to cross-reference which recipes correlated most with beginner success, and which ones consistently produced frustration or failure.

The output was a ranked shortlist of top 3 beginner recipes. I picked one, baked it, and it worked first try.

No LLMs. No fancy stack. Just R, IBM Watson NLP, and a probably unhealthy amount of time reading bread forums.

## The product

[Crumb](https://vividcrumb.netlify.app) turns that research into an interactive browser app. Instead of asking a baker to follow a fixed recipe schedule, it asks:

- What are you baking?
- When do you want it out of the oven?
- How much active handling time do you have?
- How warm is your kitchen?
- What flour and skill level are we designing around?

The app then generates a practical formula, ingredient list, and timestamped schedule that fit those constraints.

## Product highlights

- Multi-step bake wizard for bread type, timing, active-time budget, kitchen temperature, flour, skill level, loaf size
- Seven bread archetypes: sandwich loaf, toast loaf, country loaf, rolls, pizza dough, focaccia, baguette
- Recipe formula generation using baker's percentages
- Schedule engine that works backwards from the target finish time
- Active-step planning with quiet-hours support — folds and shaping don't land during sleep or work blocks
- Temperature-aware bulk fermentation estimate
- Warnings for unrealistic timelines, risky hydration, hot kitchens
- Printable plan and PNG export, light and dark themes, dependency-light static deployment

[Try it live →](https://vividcrumb.netlify.app)
