# 🎨 UI Prompt Engineering Skill

> **Turn vague UI ideas into "first-try correct" prompts for AI coding tools.**

---

## What is this?

This is an **AI Skill** — a structured set of instructions that AI agents (Antigravity, Claude Code, Cursor, Gemini CLI...) use to automatically produce professional UI prompts.

The skill is distilled from real-world experience: analyzing dozens of successful UI prompts (Velorah, Serene, Leon Fashion, Leon 3D Creator, Measured, Prisma...) to extract the **common formula** — why some prompts make AI code correctly on the first attempt while others require 5–10 revision cycles.

---

## The problem it solves

When you tell an AI coding tool:

> *"Make a hero section, dark theme, looks clean and smooth"*

The AI has to **make its own decisions** about dozens of things:
- "Dark" means `#0a0a0a` or `hsl(220,30%,8%)`?
- Which font? What weight?
- "Smooth" animation = 0.3s or 0.8s? What easing?
- How does it behave on mobile?

Every guess the AI makes is a risk of drifting away from your vision. With 20 open questions in a complex prompt, the probability of AI getting it 100% right is very low.

**This skill fixes that by** providing an 11-section structural framework that helps you (or an AI agent assisting you) fill in every specific value before sending the prompt to the AI coding tool.

---

## How it helps AI users

### 1. 🚀 Reduce revision rounds from 5–10 down to 1–2

Instead of: send prompt → get wrong output → fix → resend → wrong again...  
You invest an extra 10–15 minutes upfront in the prompt so the AI codes correctly the first time. Saves hours of back-and-forth.

### 2. 🧠 AI agent automatically expands your idea

If you use Antigravity, Claude Code, or Gemini CLI with this skill installed — the agent will **automatically ask you the right questions** and help fill in the 11-section framework, rather than you needing to know what to write.

### 3. 📦 Ready-to-use snippet bank — no rewriting from scratch

Common effects (liquid glass, text glow, noise texture, cursor follow, scroll parallax...) are pre-written in `resources/css-snippets.md`. Copy-paste directly into new prompts in seconds.

### 4. ✅ Checklist prevents you from missing critical details

Before sending a prompt, run the 10-point checklist in `references/checklist.md` — immediately surfaces missing font weights, missing animation easing, or leftover placeholder URLs.

### 5. 🔄 Reusable across projects

This prompt framework is not tied to any specific project. Use it for any landing page, portfolio, hero section, or app UI — just swap out the colors, fonts, and asset URLs.

---

## Skill folder structure

```
UI-PROMPT-ENGINEERING-SKILL/
│
├── SKILL.md                        ← Agent entry point
│                                      (YAML frontmatter, trigger conditions,
│                                       execution workflow)
│
├── references/
│   ├── core-principles.md          ← 7 core principles
│   │                                  Explains WHY specificity matters, with
│   │                                  vague-vs-concrete comparison tables.
│   │
│   ├── prompt-framework.md         ← Full 11-section prompt template (2.0 → 2.11)
│   │                                  Fill-in-the-blank template for any UI:
│   │                                  tech stack, fonts, colors, assets,
│   │                                  CSS effects, sections, animations,
│   │                                  interaction logic, breakpoints, guardrails.
│   │
│   └── checklist.md                ← 10-point pre-send checklist
│                                      + red-flag indicators for incomplete prompts
│                                      + self-assessment scoring rubric
│
├── examples/
│   └── sample-prompts.md           ← 2 complete real-world prompts:
│                                      1. Dark hero section for a fashion brand
│                                      2. Scroll-driven portfolio for a 3D studio
│                                      + short-form template for simple UIs
│
└── resources/
    └── css-snippets.md             ← Copy-paste snippet bank:
                                       • Liquid Glass effect
                                       • Text Glow
                                       • Noise Texture Overlay
                                       • Animation Keyframes (fade-rise, scale-in,
                                         blur-in, slide, stagger delays)
                                       • Gradient Button
                                       • Cursor Follower (JS + CSS)
                                       • Scroll Progress Formulas (lerp, parallax,
                                         video scrub)
                                       • Marquee / Infinite Scroll Text
```

---

## How to install into an AI Agent

### Antigravity (CLI / IDE)

1. Clone this repo locally
2. In Antigravity settings → Skills → Add skill path
3. Point it to the folder containing `SKILL.md`
4. The agent will auto-detect and activate when you ask about UI or prompts

### Cursor / Windsurf / Cline

Add the following to your project's `AGENTS.md` or `.cursorrules`:

```markdown
## UI Prompt Engineering
When the user wants to write UI prompts or build landing pages, follow the framework at:
[path-to-skill]/references/prompt-framework.md
Use snippets from: [path-to-skill]/resources/css-snippets.md
Run checklist from: [path-to-skill]/references/checklist.md
```

### Claude Code / Gemini CLI

```bash
# Add to CLAUDE.md or GEMINI.md at project root
cat SKILL.md >> CLAUDE.md
```

---

## 3-Step Workflow

```
Raw idea (1 sentence)
       ↓
[AI Agent + Skill] → Asks clarifying questions → Fills in the 11-section framework
       ↓
Complete prompt → Send to AI coding tool → Correct code on first try
```

**Step 1**: Tell the agent your UI idea (even just one sentence)

**Step 2**: Agent uses `references/prompt-framework.md` to ask for missing details and pulls relevant snippets from `resources/css-snippets.md`

**Step 3**: Run `references/checklist.md`, send the prompt to Claude Code / Cursor / Codex

---

## Core Principle Summary

> **AI codes correctly when it doesn't have to guess any number or make any decision.**

| ❌ Vague prompt | ✅ With this skill |
|----------------|-------------------|
| "dark nice color" | `background: hsl(220, 30%, 8%)` |
| "smooth animation" | `0.8s cubic-bezier(0.16, 1, 0.3, 1)` |
| "glass effect" | Full 20-line CSS block, copy-pasted |
| "responsive" | `mobile < 640px, tablet 640–1024px, desktop ≥ 1024px` |
| "scroll animation" | `progress = clamp(0,1,(scrollY-top)/height)` |

---

## Contributing

This skill is built from hands-on experience with AI coding tools.  
If you have effective CSS/JS snippets to add to the snippet bank, open a Pull Request to `resources/css-snippets.md`.
