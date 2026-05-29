---
title: Vivid Alpaca
slug: vivid-alpaca
hook: Paper-first multi-agent AI trading lab with execution guardrails between agent recommendations and broker order submission.
status: ["active", "safety"]
tech: ["Python", "Dash", "Alpaca API", "multi-agent"]
repo: https://github.com/vnsavitri/vivid-alpaca
order: 3
accent: true
---

## What it demonstrates

- Multi-agent financial analysis across market, news, fundamentals, sentiment, macro, trader, and risk-manager roles
- Alpaca paper-account integration for account, orders, positions, and paper execution workflows
- Execution-layer risk guardrails that sit between agent recommendations and broker order submission
- Configurable agent mindset, including balanced-growth, capital-preservation, and paper-only aggressive-training modes
- Goal-aware workflows where the user can express a time-bound paper-trading objective while guardrails remain active
- A learning loop for evaluating whether an AI trading agent is becoming consistently strong before any real-money consideration

## Why paper-first

Vivid Alpaca is currently paper-first. Live trading is not the current operating goal.

Before real-money use, the private system still needs mandatory manual approval, a live-mode confirmation wall, structured stop-loss/take-profit handling, journaling, replay and backtesting of guardrails, and cooldown rules.

This isn't about whether multi-agent systems can place trades. It's about whether they can do it inside a safety envelope that holds up under adversarial market behaviour and operator pressure.

## Original vs vivid-alpaca

The public repo is a showcase of concept, architecture, safety posture, and learning outcomes. The full runnable implementation, private session notes, trading playbooks, and build process are intentionally kept private.

| Area | Upstream baseline | Vivid Alpaca direction |
|---|---|---|
| Purpose | Multi-agent trading framework | Personalized paper-trading learning lab |
| Safety posture | Agent/risk reasoning around trades | Paper-first with explicit execution guardrails |
| Agent behavior | Can lean conservative or produce frequent neutral outputs | Configurable mindset so `NEUTRAL` means genuinely weak setup |
| User goals | Mostly implicit through prompts | UI-driven goal overlay: target return, time horizon, max drawdown |
| Learning loop | Run and review | Run, paper-trade, compare to guardrails, document, improve |
| Monetization | Open framework | Public showcase only; implementation and training workflow private |

This project is not financial, investment, or trading advice.

Derived from [huygiatrng/AlpacaTradingAgent](https://github.com/huygiatrng/AlpacaTradingAgent).
