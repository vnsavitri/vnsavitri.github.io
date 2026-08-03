---
title: DAM Butler MCP
slug: dam-butler-mcp
hook: "Breville's first MCP-based internal tool: a custom GPT connected to 235K+ brand assets via Brandfolder API so GTM teams across APAC, NA, and EMEA can retrieve assets by natural language query. In daily production use."
status: ["production", "enterprise"]
tech: ["MCP", "Vercel", "Brandfolder API", "ChatGPT Enterprise"]
repo: https://github.com/vnsavitri/dam-butler-mcp
demo: https://www.youtube.com/watch?v=UOeHNyh5A7Y
order: 2
---

## The problem

Breville's Brandfolder DAM holds 235,000+ digital assets: product imagery, brand materials, and marketing content across global markets. GTM teams in APAC, North America, and EMEA needed those assets daily.

Getting to the right file meant knowing the exact folder structure, taxonomy, and metadata conventions. Brand managers, marketers, and content producers who didn't already know the system had one option: ask someone who did. That created a repeatable bottleneck at exactly the point where speed matters.

## What was built

Breville's first MCP-based internal tool.

A custom GPT connects to Brandfolder through two sequential stages. First, an **intent parser** converts any natural-language query into a structured API request, mapping descriptions, markets, dates, and product names to the right filter parameters. Then a **clarification loop** runs for ambiguous inputs before the API call fires, asking one targeted follow-up rather than returning a wall of partial matches.

The result: ask *"the white Barista Express hero shot approved for EU markets, updated after January 2025"* and get back the right asset with metadata, directly in chat. The user never touches the DAM interface or learns the taxonomy.

## Result

Prototyped September 2025, demoed to Breville product leadership, and the architecture was then adopted and shipped to production by the BRG engineering team.

Now in daily workflows for GTM teams across APAC, North America, and EMEA.
