# Review: Frontier AI Portfolio Revision

**Date:** 2026-09-08
**Document reviewed:** `docs/Frontier AI Portfolio Revision.md`
**Method:** blindside audit plus `/human` skill check (work mode)

## Human skill audit: pass, with two nits

Mechanical checks (grep over the doc):

- No em dashes anywhere. Clean.
- No banned vocabulary (delve, leverage, foster, crucial, landscape, etc.). Only "showcase" appears, which is not the banned form ("showcasing"); optionally swap to "showpiece" for consistency with the spirit of the ban.

Voice check against work mode:

- Drafted copy (hero, contact invitation, "How I build") is in Vivid's voice: first person, concrete, rhythm varies, judgements stated plainly ("That's the bit I like.", "make it less stupid", "Production behaviour is the final argument."). This is the strongest part of the document.
- No rule-of-three padding, no "-ing" summary tails, no "In summary" closer, sentence-case headings, no template brackets.
- Nits only:
  - Hero para 2 was one ~57-word sentence. Fixed in the doc on 2026-09-08: split into three sentences for rhythm. Flag for the same treatment at implementation time.
  - "Most AI demos look impressive until they meet a real workplace" is a swipe at demo culture aimed at labs whose public face is demos. It lands with enterprise and forward-deployed audiences; in a frontier-lab context it could read as chip-on-shoulder. Calibrate deliberately, not by accident.

## Blindsides, ranked

1. **The evidence does not exist yet, and this audience inspects.** Phases 2-3 require golden datasets, threat models, per-flagship evaluation sections and architecture diagrams. If the Evaluation Lab or case-study eval sections ship empty or placeholder, the central claim ("evaluation from stated principle to visible evidence") collapses on first click, which is worse than never claiming it. Gate Phase 3 on artefacts existing; launch the lab with one complete entry, not an empty section. This is weeks of original technical writing disguised as website changes, and the doc has no timeline.

2. **The lead proof point is current-employer proprietary data.** "235,000+ assets" and "architecture adopted and shipped into daily enterprise workflows" are Breville internal facts on a personal job-hunting site. The doc says "confirm confidentiality" in the footer but builds the entire proof strip and flagship #1 around this number. Needs explicit clearance before anything ships. (Flagging, not deciding: employer optics.)

3. **Two live brand identities.** This repo serves veryvivid.xyz (CNAME verified), but AGENTS.md records the main site as vnsavitri.com. If a hiring manager lands on the old positioning at the other domain, the 30-second test fails. The revision plan says nothing about cross-domain consistency, redirects, or which domain goes on the CV.

4. **Headline filter cuts both ways.** "I build AI systems that take safety as seriously as capability" selects hard for safety-heavy teams (Anthropic, DeepMind) and reads as caution-first to applied AI teams measured on shipping velocity. Probably the right filter, but it is a filter and the doc never acknowledges the trade-off.

5. **Placeholder leakage has no acceptance criterion.** Section 15 instructs agents to mark missing facts with placeholders, but section 14 never requires placeholders to be resolved before publish. Add "no placeholder text is live on any page" to acceptance criteria.

6. **Downloadable CV is a maintenance and privacy surface.** Stale PDF undermines the exact credibility the site is built to create, and it exposes contact details. Needs an owner and a freshness check; not mentioned in the doc.

7. **llms.txt and machine-readability not in the plan.** The site already ships `public/llms.txt`; an AI-native hiring manager may ask an agent "who is Vivid Savitri-Hampton?" before visiting. The revision should update llms.txt, titles, meta and OG as part of Phase 1, or the old positioning propagates into AI answers about her.

## Suggested doc patches (not yet applied to the revision doc)

- Add "no placeholder text live on any page" and "CV PDF is current" to section 14 acceptance criteria.
- Add a Phase 1 item: update llms.txt, page titles, meta and OG to the new positioning.
- Add a section 13 note: Phase 3 launches only when at least one Evaluation Lab entry is complete end to end.
- Add an explicit open question on Breville metric/claims clearance and on the vnsavitri.com vs veryvivid.xyz brand split.
- Optional wording swap: "system-design showcase" to "system-design showpiece" in section 5 (VAI Santé scope label).

## Verification done

- Grep of the doc for em dashes and the full banned-vocabulary list (clean).
- Read of `/human` skill work mode reference for voice calibration.
- `public/CNAME` confirmed as veryvivid.xyz.
