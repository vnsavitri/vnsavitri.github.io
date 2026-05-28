---
title: vai_sante_os
slug: vai-sante-os
hook: A privacy-first framework for provenance-aware multimodal memory and orchestration in high-stakes AI workflows.
status: ["active", "research"]
tech: ["Python", "Mermaid", "evaluation harness"]
repo: https://github.com/vnsavitri/vai_sante_os
order: 1
accent: true
---

## Why this exists

Most AI demos look good on happy-path prompts and fall apart when you ask the hard questions:

- *Where did this claim come from?*
- *Can I inspect the original evidence?*
- *What changed over time?*
- *How do I review or override this safely?*

`vai_sante_os` is exploratory research infrastructure for AI systems that need to reason over mixed evidence safely, with traceability and human oversight. It is **not** a clinical product, not a medical device, and not a decision-maker.

## Problem space

High-stakes workflows (health, legal, policy, safety, operations) often involve:

- multimodal evidence (text, scans, audio, forms, structured records)
- longitudinal context (state changes over weeks or years)
- strict provenance expectations
- privacy constraints and local-first data handling
- human review at critical decisions

`vai_sante_os` explores a generalisable architecture for that setting.

## Core ideas

- **Privacy-first multimodal memory** — keep storage boundaries explicit and minimise data movement
- **Provenance-aware retrieval** — retrieval returns both content and its chain of custody
- **Longitudinal reasoning scaffolds** — treat time as first-class, not as stray metadata
- **Human-in-the-loop orchestration** — route sensitive steps through review gates
- **Evaluation and governance by default** — assess uncertainty, evidence quality, and failure modes early

## Architecture

The layered architecture moves evidence through ingestion, normalisation, an evidence store with explicit access policy, indexing, retrieval with provenance constraints, agent orchestration, a human review interface, and an audit + evaluation layer with trace logs and replay.

Read the full architecture and design notes in the [repository](https://github.com/vnsavitri/vai_sante_os).
