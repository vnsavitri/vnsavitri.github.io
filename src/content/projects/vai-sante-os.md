---
title: VAI Santé
slug: vai-sante-os
hook: "A privacy-first personal AI for managing fragmented medical information: local-first, provenance-aware, built during cancer treatment."
status: ["active", "research"]
tech: ["Python", "Mermaid", "evaluation harness"]
repo: https://github.com/vnsavitri/vai_sante_os
order: 1
accent: true
---

## I built a personal AI to manage my oncology records during treatment. My own files were the first test.

When you're in treatment, navigating fragmented medical information takes energy you don't have. Finding a test result from three months ago takes twenty minutes. Two doctors have contradicting notes. A summary leaves out the thing that matters. You're sick, and the system makes it harder.

So I built something to fix that. For myself, first.

VAI Santé turns months of scattered documents (scans, lab results, clinical notes, referral letters) into something you can actually query, trace back to the original source, and hand to a specialist in a coherent summary. It runs entirely on your own machine. Nothing leaves.

## Why the technical choices are what they are

Every design decision came from the stakes being real.

**Local-first** because your oncology records don't belong in a cloud pipeline. All storage, retrieval, and reasoning happens on-device.

**Provenance-aware retrieval** because when an AI tells you something about your health, you need to see exactly where that answer came from: which document, which page, which date. Not just a confident summary. Every response carries its chain of custody.

**Longitudinal memory** because medical reality unfolds over time. A result from six months ago changes the meaning of a result from last week. The system treats time as first-class context, not stray metadata.

**Human-in-the-loop review gates** because model output is advisory. The system is designed to surface information and flag uncertainty, not to decide.

## So what

On the personal level: this worked. It made a genuinely hard situation more navigable, and that's worth saying plainly.

On the broader level: health was the forcing function for getting the constraints right. High-stakes, longitudinal, privacy-sensitive, multimodal. Oncology records are an extreme case of a pattern that shows up in legal, policy, safety, and operations contexts too. The architecture generalises. The health use case just made it impossible to cut corners on trust design.

If you're building in a domain where a hallucination has real consequences, this is the kind of infrastructure that matters before capability.

[Repository →](https://github.com/vnsavitri/vai_sante_os)
