# VeryVivid.xyz: Frontier AI Portfolio Revision

**Owner:** Vivid Savitri-Hampton  
**Site:** <https://veryvivid.xyz/> (primary; cross-linked with <https://www.vnsavitri.com/>)  
**Purpose:** Reposition the site to attract frontier AI labs, AI-native companies and enterprise AI hiring managers for hands-on product leadership and applied AI roles.

**Decisions confirmed 2026-09-08:**

- Breville metrics ("235,000+ assets", production adoption claims) are cleared for public use.
- veryvivid.xyz is the primary domain; vnsavitri.com is kept live and cross-linked.
- Hero headline "I build AI systems that take safety as seriously as capability" stays as-is.
- The health/cancer narrative stays inside the VAI Santé case study only. It is not the homepage hero, proof strip or any front-and-centre positioning.

## 1. Strategic objective

The site should make one proposition obvious within 30 seconds:

> **Vivid turns ambiguous, high-stakes workflows into evaluated AI systems that people actually use.**

The portfolio must prove five things:

1. Vivid can identify high-value problems inside complex organisations.
2. She can move from product framing into architecture, prototyping and code.
3. She understands evaluation, failure modes, safety and production constraints.
4. She can lead across product, engineering, security, operations and executive stakeholders.
5. Her work produces adoption or reusable technical insight, not merely polished demonstrations.

This reflects how frontier labs currently describe applied AI work. OpenAI says these roles take ideas through “prototyping, evaluation, production launch, and scale”, with success measured by “production systems, sustained adoption, and meaningful customer impact”. Anthropic expects customised pilots, prototypes and evaluation suites. Google DeepMind describes Product Managers as translating complex AI capabilities into actionable product specifications.

## 2. Primary audience

### Primary

- Frontier-lab hiring managers
- Applied AI engineering leaders
- Technical AI product leaders
- Forward-deployed and enterprise AI teams
- Agent, evaluation and developer-platform teams

### Target role family

- Principal AI Product Manager
- Principal Technical Product Manager, AI
- Applied AI Engineer
- Applied AI Architect
- AI Product Engineer
- AI platform or agent-systems product leader

### Desired perception

> **A senior product leader who can still build, inspect the technical system, design evaluations and operate credibly with engineers.**

Avoid presenting Vivid as a generalist who happens to have many AI experiments. Breadth should support the central proposition, not compete with it.

## 3. Recommended information architecture

### Primary navigation

- **Work**
- **Evaluation Lab**
- **Writing**
- **About**
- **CV**

Place GitHub, LinkedIn, the older personal site and Archive in the footer or an **Elsewhere** section.

### Homepage sequence

1. Hero and role proposition
2. Proof strip
3. Three flagship systems
4. How I take AI from ambiguity to production
5. Evaluation Lab
6. Selected writing and speaking
7. Short professional biography
8. Specific contact invitation
9. Experiments and archive

## 4. Revised homepage hero

### Eyebrow

> AI / PRODUCT / ENGINEERING / SYDNEY

### Headline

> **I build AI systems that take safety as seriously as capability.**

### Supporting copy

> Most AI demos look impressive but rarely survive contact with a real workplace: messy data, unclear ownership, and people who have better things to do than babysit an agent. This is my sweet spot: scaling demos into product that survives the messiness of enterprise environments.
>
> I work between product leadership and applied AI engineering, turning ambiguous problems into AI systems people can actually use. That includes agent workflows, harness engineering, evaluation harnesses and local-first products. One end of that range is a production system helping global GTM teams search 235,000+ brand assets in natural language. The other end is smaller experiments that never leave my own machine.
>
> Before building AI-native products became my full-time job, I built products across games, SaaS and hardware, including two startups that were acquired. Different industries, same instinct: find the part of the system that doesn’t work for humans, then make it less stupid.

### Proof strip

> **235K+ assets in production · Two startup exits · Agent systems · MCP · Evals · Enterprise AI**

Only use metrics that can be publicly supported. Do not introduce confidential adoption, revenue or efficiency figures.

### Calls to action

- **View flagship systems**
- **Download CV**
- **GitHub**

## 5. Project hierarchy

### Flagship systems

These projects should carry the main hiring narrative.

#### 01. DAM Butler MCP

**Homepage framing:**

> Natural-language retrieval across 235,000+ global brand assets, with an architecture adopted and shipped into daily enterprise workflows.

**What it should prove:**

- Enterprise problem discovery
- Natural-language product design
- MCP and API architecture
- Ambiguity resolution and clarification loops
- Cross-functional influence
- Prototype-to-production handoff
- Adoption across global GTM workflows

**Add to the case study:**

- Exact personal ownership
- Team and collaborator roles
- Before-and-after workflow
- System architecture diagram
- Representative evaluation queries
- Retrieval-quality and clarification criteria
- Security and permissions boundaries
- What changed when engineering productionised the architecture

Existing public evidence: <https://veryvivid.xyz/projects/dam-butler-mcp/>

#### 02. VAI Santé

**Homepage framing:**

> A local-first, provenance-aware AI architecture for fragmented, high-stakes information.

**Scope label:**

> Personal working prototype and system-design showpiece. It is not a clinical product or a substitute for professional medical advice.

**What it should prove:**

- Local-first and privacy-aware architecture
- Provenance and chain-of-custody retrieval
- Longitudinal memory
- Human-review gates
- Multimodal information design
- Threat modelling
- Evaluation design for high-stakes systems
- Generalisation into adjacent domains

Keep the personal health origin story inside this case study. It should explain why the constraints matter without becoming the organising narrative of the entire portfolio.

Existing public evidence: <https://veryvivid.xyz/projects/vai-sante-os/>

#### 03. Vivid Clean

**Homepage framing:**

> A local-first document-cleaning tool built around privacy, accessibility and user control.

**What it should prove:**

- Hands-on implementation
- Local processing and privacy decisions
- Accessibility-led product thinking
- Packaging and developer experience
- Testing across real document workflows
- A usable shipped artefact

### Experiments and earlier work

Move these below the flagship systems:

- Espresso Horoscope MCP
- Vivid Alpaca
- Almost
- Sourdough Intelligence

They demonstrate range, curiosity and technical history. They should not receive the same hierarchy as the strongest production and safety-oriented work.

## 6. Repeatable AI product-engineering case-study structure

Every flagship case study should use the same evidence structure.

### A. One-screen summary

Include:

- One-sentence outcome
- Status: research, prototype, pilot, production or archived
- Dates
- Your exact role
- Team and collaborators
- Technology
- One verified metric or outcome
- Links to repository, demo and relevant artefacts

### B. The workflow before the product

Describe:

- Who had the problem
- What they were trying to accomplish
- The existing workflow
- Where it broke down
- Why solving it mattered
- The cost or risk of failure

Prefer concrete workflow descriptions over general statements such as “the process was inefficient”.

### C. Constraints

Cover the conditions surrounding the model:

- Existing systems and APIs
- Data quality and ambiguity
- Permissions and access control
- Privacy and governance
- Reliability expectations
- Latency and cost
- Human-review requirements
- Organisational or deployment constraints

### D. Architecture

Include a readable system diagram:

```text
User intent
    ↓
Orchestration and state
    ↓
Model, retrieval and tool calls
    ↓
Enterprise or local data system
    ↓
Validation and review gates
    ↓
User-facing result
```

Clearly identify what is handled by:

- The model
- The agent harness
- Retrieval and data systems
- Deterministic application logic
- Human review

### E. Decisions and trade-offs

Explain three to five consequential decisions:

- Why this model or model class?
- Why MCP, tool use, RAG or structured retrieval?
- What remained deterministic?
- Where was human review mandatory?
- What was deliberately not automated?
- Which trade-offs were made across quality, latency, cost, privacy and usability?

This section should demonstrate judgement, not list technologies.

### F. Evaluation

Show at least one real evaluation artefact:

- Representative test set or golden dataset
- Task-success definition
- Baseline
- Rubric or grader design
- Retrieval or tool-use metrics
- Human-review protocol
- Failure taxonomy
- Regression testing
- Known limitations

Possible measurements include:

- Task-completion rate
- Retrieval precision or relevance
- Clarification rate
- Unsupported-claim rate
- Tool-call success rate
- Latency
- Cost per completed task
- Human correction rate
- Repeat usage or adoption

Do not invent metrics for showcase work. Show the evaluation design, observed failures and preliminary findings when production evidence does not exist.

### G. Safety and production readiness

Discuss:

- Prompt-injection and tool-abuse risks
- Access control and sensitive-data boundaries
- Observability and tracing
- Failure recovery and fallbacks
- Model or prompt versioning
- Escalation paths
- Human approval
- Operational cost
- Production limitations

### H. Outcome

State:

- What shipped
- What people used
- What changed in the workflow
- What was measured
- What remains unknown
- What the team learned

### I. Reflection

Answer:

- What failed?
- Which assumption changed?
- What would you redesign?
- What became a reusable pattern?
- What would be required to scale safely?

## 7. Evaluation Lab

Create a dedicated section containing small, inspectable technical artefacts.

Recommended artefacts:

- Golden datasets
- Evaluation rubrics
- LLM-as-judge experiments
- Agent failure taxonomies
- Threat models
- Retrieval and provenance evaluations
- Human-review protocols
- Model and architecture comparison notes
- Short experiment reports

Each entry should include:

1. The question being tested
2. The dataset or scenarios
3. The method
4. The result
5. Failure examples
6. What changed afterwards

The goal is to move evaluation from a stated principle to visible evidence.

## 8. “How I build” revision

Replace the current manifesto-like sequence with a compact operating model.

### Suggested structure

#### Find the workflow, not the chatbot

> I start with the work people are already trying to do: the decisions, handoffs, bottlenecks and failures. The model comes later.

#### Build the smallest system that can answer the real question

> I use prototypes to test value and architecture together. A convincing demo is useful, but it isn’t evidence that the system will survive contact with real users.

#### Define what “good” means

> Before scaling, I turn expectations into representative tasks, evaluation rubrics, failure modes and review gates.

#### Engineer the harness

> Model capability matters. So do state, context, tools, permissions, memory, observability and recovery. Most of the product lives in that surrounding system.

#### Ship, observe and revise

> Production behaviour is the final argument. I look for adoption, failure patterns and the moments where people stop trusting the system.

## 9. Writing and speaking

Keep these sections, but make them support the hiring proposition.

Prioritise material on:

- Agent systems and harness engineering
- Evaluation and model behaviour
- Human-centred AI
- Accessibility and AI policy
- Enterprise adoption
- Provenance and trustworthy deployment
- Product leadership under technical uncertainty

For talks, state whether each engagement is upcoming, completed or recorded. Link slides, recordings or summaries where available.

## 10. About page

The About page can hold more personality, history and lived context than the homepage.

Recommended order:

1. Current professional focus
2. Product and technical background
3. Breville and enterprise AI experience
4. Startup experience and exits
5. Cross-cultural and design background
6. Personal motivations and selected projects
7. Current research interests

Health context should appear only where Vivid explicitly wants it. Cancer is part of the origin of VAI Santé, not the headline for her career.

## 11. Visual and accessibility revisions

Keep the editorial visual direction: pale blue background, navy typography, coral accent and generous spacing.

Improve proof density with:

- One system diagram for each flagship case study
- Product screenshots or annotated workflow images
- Prominent outcome callouts
- Compact status and ownership metadata
- Visible links to code, demos and evaluation artefacts

Validate:

- WCAG AA text contrast
- Keyboard navigation
- Deliberate `:focus-visible` states
- Minimum 44px touch targets
- Link cues that do not rely only on colour
- Logical heading hierarchy
- Reduced-motion support
- Mobile card readability

The current muted blue and coral text should be reviewed carefully against the pale background before reuse at small sizes.

## 12. Contact section

Replace the generic **Get In Touch** with a specific invitation.

### Suggested copy

> **I’m interested in frontier and applied AI roles where product judgement and hands-on building belong in the same job.**
>
> If you’re working on agent systems, evaluations, enterprise AI or trustworthy deployment, I’d like to hear what you’re trying to make work.

Actions:

- **Start a conversation**
- **Download CV**
- **LinkedIn**
- **GitHub**

## 13. Implementation sequence

### Phase 1: Positioning

- Replace the homepage introduction
- Add the proof strip
- Add role-specific calls to action
- Move DAM Butler MCP into first position
- Move the health narrative out of the homepage hero
- Update page titles, meta and `public/llms.txt` to the new positioning
- Add a cross-link to vnsavitri.com in the footer or Elsewhere section

### Phase 2: Evidence architecture

- Introduce flagship and experiment tiers
- Standardise flagship case-study templates
- Add exact ownership and team context
- Add architecture diagrams
- Add evaluation and failure sections

### Phase 3: Technical credibility

- Launch the Evaluation Lab
- Publish one complete golden-set example
- Publish one threat model
- Link repositories, demos and technical artefacts
- Add model, latency, cost and reliability trade-offs where public

Gate: do not launch the Evaluation Lab section until at least one entry is complete end to end (question, dataset, method, result, failure examples, what changed). An empty or placeholder lab is worse than no lab.

### Phase 4: Conversion and quality

- Add downloadable CV
- Rewrite contact section
- Test mobile navigation and layout
- Run accessibility and performance audits
- Validate every external link
- Review all metrics for confidentiality and accuracy

## 14. Acceptance criteria

The revision is successful when a frontier-AI hiring manager can answer these questions within 30 seconds:

- What kind of role is Vivid suited for?
- What is the strongest system she has helped ship?
- What did she personally own?
- Can she work credibly with code and architecture?
- Does she understand evaluation and model failure?
- Has she operated inside enterprise constraints?
- Where can I inspect her technical work?
- How do I contact or interview her?

Every flagship case study should allow a technical reviewer to answer:

- What was the system boundary?
- What was evaluated?
- What failed?
- What changed because of the evidence?
- What would be needed to deploy or scale it safely?

Launch checklist:

- No placeholder text or unresolved `[confirm with Vivid]` markers live on any page
- The downloadable CV PDF is current and matches the on-site positioning
- Health/cancer narrative appears only inside the VAI Santé case study

## 15. Instructions for an implementation agent

When using this document with Codex, Claude or another coding agent:

1. Inspect the existing repository before changing files.
2. Preserve the current visual identity and responsive behaviour.
3. Implement the revision in small, reviewable changes.
4. Do not invent metrics, ownership claims, testimonials or production outcomes.
5. Mark missing facts with explicit placeholders for Vivid to confirm.
6. Preserve Australian English and Vivid’s natural voice.
7. Avoid corporate filler, generic AI claims and unnecessary animation.
8. Run the existing test, build and lint commands after each meaningful change.
9. Verify desktop and mobile layouts in a real browser.
10. Provide a concise change summary and list any unresolved content questions.

## Sources checked

- VeryVivid portfolio: <https://veryvivid.xyz/>
- DAM Butler MCP: <https://veryvivid.xyz/projects/dam-butler-mcp/>
- VAI Santé: <https://veryvivid.xyz/projects/vai-sante-os/>
- Vivid Alpaca: <https://veryvivid.xyz/projects/vivid-alpaca/>
- OpenAI, Applied AI Engineer: <https://openai.com/careers/applied-ai-engineer-london-uk/>
- OpenAI, Applied AI Engineer, Codex Core Agent: <https://openai.com/careers/applied-ai-engineer-codex-core-agent-san-francisco/>
- Anthropic, Applied AI Engineer: <https://job-boards.greenhouse.io/anthropic/jobs/5390799008>
- Google DeepMind careers: <https://deepmind.google/careers/>
- Mistral careers: <https://mistral.ai/careers/>

---

**Document status:** Implementation-ready draft. Public metrics, role ownership and confidential enterprise details must be confirmed by Vivid before publication.
