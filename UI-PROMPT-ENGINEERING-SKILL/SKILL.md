---
name: ui-prompt-engineering
description: >
  A skill for transforming raw UI ideas (even a single sentence) into detailed,
  number-precise prompts that AI coding tools (Claude Code, Cursor, Codex, Gemini)
  can execute correctly on the first try — no guessing required. Activate this skill
  when the user wants to write a UI prompt, design a landing page, hero section,
  portfolio, or any web interface to be built by an AI coding tool.
---

# UI Prompt Engineering Skill

## When to activate this skill?

Activate when the user:
- Has a UI/UX idea (even just a vague one-sentence description)
- Wants to write a prompt for an AI coding tool (Claude Code, Cursor, Codex, etc.)
- Wants to build a landing page, hero section, portfolio, or app UI
- Wants to prevent the AI from "self-inventing" details that stray from their vision

## Execution workflow (follow in order)

1. **Read the core principles**: [references/core-principles.md](references/core-principles.md)
2. **Apply the standard prompt framework**: [references/prompt-framework.md](references/prompt-framework.md)
3. **Pull reusable snippets** (glass/glow/animation effects): [resources/css-snippets.md](resources/css-snippets.md)
4. **Review real examples** to calibrate the right level of detail: [examples/](examples/)
5. **Run the checklist** before sending the prompt: [references/checklist.md](references/checklist.md)

## Core principle summary (for agents who want the short version)

> **AI codes correctly when it doesn't have to guess any number or make any decision.**

- Use **concrete values** (hex, HSL, px, seconds, ease curves) — never vague adjectives
- Declare **tech stack + versions** at the top of every prompt
- Every **animation** must have: `from → to + duration + delay + easing`
- Every **repeated effect** must be extracted into a reusable CSS class/component
- **Complex interaction logic** (parallax, cursor follow, scroll) must be written as formulas/pseudo-code
- **Real asset URLs** — no placeholders
- **Breakpoints** declared once and used consistently throughout

## Skill folder structure

```
UI-PROMPT-ENGINEERING-SKILL/
├── SKILL.md                    ← This file (agent entry point)
├── references/
│   ├── core-principles.md      ← The why behind each rule
│   ├── prompt-framework.md     ← Full 11-section framework (2.0 → 2.11)
│   └── checklist.md            ← Pre-send checklist
├── examples/
│   └── sample-prompts.md       ← Real-world complete prompt examples
└── resources/
    └── css-snippets.md         ← Snippet bank: glass, glow, animations, etc.
```
