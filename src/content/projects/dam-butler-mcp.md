---
title: dam-butler-mcp
slug: dam-butler-mcp
hook: Breville's first MCP-based internal tool — custom GPT connected to 235K+ brand assets via Brandfolder API so GTM teams across APAC, NA, and EMEA can retrieve assets by natural language query. In daily production use.
status: ["production", "enterprise"]
tech: ["MCP", "Vercel", "Brandfolder API", "ChatGPT Enterprise"]
repo: https://github.com/vnsavitri/dam-butler-mcp
demo: https://www.youtube.com/watch?v=UOeHNyh5A7Y
order: 2
---

## The problem

Breville's Brandfolder DAM holds 235,000+ digital assets — product imagery, brand materials, and marketing content across global markets. GTM teams in APAC, North America, and EMEA needed those assets daily.

Getting to the right file meant knowing the exact folder structure, taxonomy, and metadata conventions. Brand managers, marketers, and content producers who didn't already know the system had one option: ask someone who did. That created a repeatable bottleneck at exactly the point where speed matters.

## What was built

Breville's first MCP-based internal tool.

A custom GPT connects to Brandfolder via an MCP server that runs two stages: an intent parser translates any natural-language query into a structured API request, and a clarification loop resolves ambiguous inputs before the call fires — so a request like *"the white Barista Express hero shot approved for EU markets, updated after January 2025"* returns the right asset with metadata, not a scroll-through list. The user never touches the DAM interface.

```
User prompt (ChatGPT Enterprise · Claude Desktop)
    ↓
Intent parser — natural language → structured query
    ↓
Clarification loop — resolves ambiguity before API call
    ↓
Brandfolder API
    ↓
Asset + metadata returned in chat
```

## Result

Prototyped September 2025. Demoed to product leadership. Architecture adopted and shipped to production by Breville engineering.

Now in daily workflows for GTM teams across APAC, North America, and EMEA.

[Watch the demo →](https://www.youtube.com/watch?v=UOeHNyh5A7Y)
