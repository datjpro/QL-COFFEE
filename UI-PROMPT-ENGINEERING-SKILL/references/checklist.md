# Checklist — Before Sending a Prompt to an AI Coding Tool

Run this checklist every time you finish writing a prompt. Any unchecked item → fix it before sending.

---

## ✅ Quick Checklist

### Foundation
- [ ] **Tech stack + versions** declared at the top of the prompt (React version, Tailwind version, animation lib)
- [ ] **Page type** identified (single hero / landing / scroll-driven portfolio / ...)

### Visual Foundation
- [ ] **Font**: name, specific weights, role (heading/body), `<link>` import URL
- [ ] **Color**: full set of background/text/border variables, written consistently in HSL or hex — never mixed
- [ ] **Assets**: all real URLs (images, video, SVG), variable names assigned for anything reused in multiple places

### Effects & Components
- [ ] **Repeated effects** (glass/glow/noise/gradient) written as CSS code blocks — not described in words
- [ ] **Reusable components** have full props, default values, hover/active behavior defined

### Layout & Sections
- [ ] **Each section**: dimensions, layout (flex/grid), position of every child element
- [ ] **Z-index** declared when multiple layers overlap (video + overlay + text)
- [ ] **Responsive**: every text size and spacing value lists all breakpoints explicitly (no generic "responsive")

### Animation
- [ ] **Every animation has all 4 parameters**: `from → to + duration + delay + easing`
- [ ] **Stagger** (if multiple elements): delays listed in increasing order
- [ ] **Easing**: uses `cubic-bezier(...)` or a specific array — never "smooth" or "ease"

### Interaction
- [ ] **Complex logic** (scroll, cursor, parallax, magnetic): written as real formulas/pseudo-code
- [ ] **Desktop vs mobile**: different behaviors explicitly stated (mouse event vs touch/auto-play)
- [ ] **Performance**: clearly states whether using `scroll` event or `requestAnimationFrame`, and whether throttling is applied

### Guardrails
- [ ] **Breakpoints** declared once at the top, used consistently
- [ ] **Key Design Principles** (section 2.11): a "do not do" list that prevents the AI from self-inventing details

---

## 🔴 Signs the prompt needs to be reworked

- Contains vague adjectives: "beautiful", "modern", "smooth", "elegant", "dynamic", "cool"
- Animation only says "has fade-in" with no `from/to/duration/easing`
- Colors described in words ("navy blue") without hex/HSL values
- Contains placeholders: "your image here", "add logo here", "your text"
- Scroll/parallax/cursor logic described in natural language without formulas
- No tech stack declaration → AI picks freely

---

## 📊 Self-Assessment Score

| Score | Meaning |
|-------|---------|
| 10/10 items | Perfect prompt — send it now |
| 7–9/10 | Good — AI will get it right ~85% |
| 5–6/10 | Mediocre — expect a few revision rounds |
| < 5/10 | Insufficient prompt — rework before sending |

---

## 💾 Post-send workflow notes

After sending the prompt and receiving code:
1. Compare output against **section 2.11 Key Design Principles** — did the AI add anything unsolicited?
2. If animation is wrong: check section 2.7 — were all 4 parameters declared?
3. If layout is wrong: check section 2.6 — were z-index and element positions explicit?
4. Save any CSS/component snippets that worked well to `resources/css-snippets.md` for reuse.
