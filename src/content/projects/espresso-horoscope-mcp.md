---
title: Espresso Horoscope MCP
slug: espresso-horoscope-mcp
hook: Local-first MCP project that turns espresso shot metrics into a personalised cosmic reading, generated offline with GPT-OSS through LM Studio.
status: ["shipped", "hackathon"]
tech: ["Python", "Next.js 15", "LM Studio", "MCP"]
repo: https://github.com/vnsavitri/espresso-horoscope-mcp
demo: https://youtu.be/hHNMkw1NXDE
stars: 3
order: 4
accent: true
---

## Portfolio snapshot

**What it demonstrates:** local model inference, MCP-style tool boundaries, structured sensor data prompting, deterministic generation, and a lightweight longitudinal memory pattern.

**User experience:** enter a birth date, use simulated or recorded espresso shot data, and receive a tarot-style horoscope card that combines brewing diagnostics with GPT-OSS-generated prose.

**Why it exists:** I wanted to learn how to use local open-weight models under real pressure. The best way for me to do that was to enter a time-boxed hackathon, keep the scope realistic, and build something weird enough to stay interesting. Plus, I want to turn technical data like coffee brewing data (profile, pressure, flow rate, etc.) into something fun that everyday coffee drinkers can relate to and learn from.

## Why this exists

Built for the **OpenAI Open Model Hackathon**, **Best Local Agent** category. The category asked for useful agentic applications of GPT-OSS that could run without internet access.

The honest learning goal was simple: get my hands dirty with local model inference. A weekend hackathon with a real submission deadline gave me the right kind of constraint. It forced pragmatic choices, scope cuts, and a working demo instead of endless tutorials.

The horoscope framing is deliberately playful. The architecture underneath it is the real point: a reproducible, offline-first local agent workflow that combines structured domain data with local LLM inference through an MCP-shaped interface.

Underneath the fortune-telling it's a compact demo of how a local agent can take real-world machine data, preserve deterministic behaviour where needed, and still produce an expressive user-facing result.

## What it does

Connects espresso shot data to a local LLM and generates a short personalised reading from:

- Brew ratio, pressure, temperature, flow rate, extraction time, channeling signals
- Birth date for the cosmic framing layer

The architecture enforces a strict tool/prompt boundary between deterministic sensor parsing and the local generative model.

[Watch the 3-minute demo →](https://youtu.be/hHNMkw1NXDE)
