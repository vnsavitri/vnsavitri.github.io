---
title: dam-butler-mcp
slug: dam-butler-mcp
hook: MCP server giving ChatGPT Enterprise and Claude Desktop natural-language access to Breville's Vault DAM. Architecture adopted into production.
status: ["production", "enterprise"]
tech: ["MCP", "Vercel", "ChatGPT Enterprise"]
repo: https://github.com/vnsavitri/dam-butler-mcp
demo: https://www.youtube.com/watch?v=UOeHNyh5A7Y
order: 4
---

## The problem

Breville's Vault DAM held thousands of product images, brand assets, and marketing materials across global markets.

Finding the right asset required knowing the exact folder structure, taxonomy, or metadata tags. Non-technical users — regional brand managers, marketers, content producers — had to ask someone who knew the system.

That created a repeatable bottleneck. DAM Butler removes it.

## What it does

Translates natural language into structured DAM API queries.

Ask:
> "Find the Barista Express hero shot in white, approved for EU markets, updated after January 2025"

Get back: the right asset, with metadata, directly in chat.

No taxonomy knowledge required. No folder navigation.

## Architecture

The MCP server runs an intent parser that converts natural-language queries to structured form, then a clarification loop that resolves ambiguous queries before any API call. Surfaces the DAM directly to ChatGPT Enterprise and Claude Desktop without the user ever touching the underlying interface.

## Outcomes

Built as an MVP prototype. Demoed to Breville product leadership September 2025. Architecture adopted and taken to production by the Breville product engineering team.

[Watch the demo →](https://www.youtube.com/watch?v=UOeHNyh5A7Y)
