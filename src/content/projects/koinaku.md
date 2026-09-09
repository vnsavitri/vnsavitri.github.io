---
title: Koinaku
slug: koinaku
hook: A mobile-first financial literacy app for Indonesian Gen Z, built with loop and graph engineering. Micro-lessons plus a paper-trading sandbox with virtual Rupiah, live in beta.
status: ["beta", "production"]
tech: ["Next.js 16", "TypeScript", "Supabase", "Capacitor"]
live: https://web.koinaku.com
order: 3
tier: flagship
accent: true
---

## The problem

Indonesia has one of the youngest populations on earth and almost no formal financial education. Gen Z there is starting to earn, save and invest earlier than any generation before it, mostly through apps, mostly without anyone teaching them what a mutual fund is or why leverage kills. The stakes are real money, and the tools that exist are either brokerage apps that want you trading or courses nobody finishes.

## What it is

Koinaku turns learning about money into a daily habit: Duolingo-style micro-lessons built for Indonesian contexts (prices in Rupiah, examples from local life, source-backed and human-reviewed before publish), plus a paper-trading sandbox where users practise with virtual money before risking the real kind. One metric drives the product: the daily active learning session. If someone completes a lesson or makes a paper trade today, we did our job.

## How it's built

This is the project where my loop and graph engineering method gets its hardest workout. It is a real product, not a demo: structured curriculum as data in Supabase, bilingual content, iOS and Android shells through Capacitor, deployed on Vercel, with a full test suite and typed end to end.

The build runs as gated loops, not vibe coding. Every task moves through a ticket graph (KO-###), implementation loops that must pass type-check, lint, tests and security checks, then an independent Verifier agent that reproduces the defect, checks the fix and writes a verdict before anything lands. Curriculum changes ship as scoped, idempotent SQL migrations with post-migration live audits. Design drift, capacitor sync and budget all have their own gates. The agents write a lot of the code; the gates are what make that safe.

## Status

Live in early beta at [web.koinaku.com](https://web.koinaku.com), in active development with the loop system running daily.
