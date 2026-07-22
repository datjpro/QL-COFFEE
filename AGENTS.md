# 🤖 AGENTS.md - Antigravity AI Agent Architecture & Guidelines

> Project: **Vàđà Coffee (Cà Phê Di Sản Việt Nam)**  
> Engineered with: **UI-PROMPT-ENGINEERING-SKILL** & **Google Antigravity AI Suite**

---

## 🎯 Purpose & Scope

This repository follows a strict multi-agent architecture and systematic phased development model. Any AI Agent (Claude Code, Cursor, Gemini, Codex, Antigravity Subagents) working on this project MUST adhere to the standards outlined in this document.

---

## 🏗️ AI Subagent Roles & Responsibilities

| Agent Role | Subagent Type | Primary Responsibility | Authorized Tools |
| :--- | :--- | :--- | :--- |
| **Lead Architect** | Primary / Parent | Orchestrates phased branches, plans features, reviews code & commits | All tools |
| **UI Specialist** | `self` / Frontend | Implements React components, glassmorphism CSS, and responsive layouts following `UI-PROMPT-ENGINEERING-SKILL` | `view_file`, `replace_file_content`, `write_to_file` |
| **Data & Logic Agent** | `research` / Backend | Manages mock datasets (`coffeeProducts.ts`), brewing formulas, state management, and type definitions | `grep_search`, `list_dir`, `view_file` |
| **QA & Verification** | Automated Runner | Runs `npm run test` (`tsc -b && vite build`) and audits zero-error builds before git commits | `run_command` |

---

## 🗺️ Multi-Page Routing Architecture (`HashRouter`)

The application is structured into modular routes for 100% static hosting compatibility on **GitHub Pages**:
- `/` - Home Page (`HomePage.tsx`)
- `/products` - Full Catalog & Filters (`ProductsPage.tsx`)
- `/product/:id` - Dedicated Product Detail View (`ProductDetailPage.tsx`)
- `/customizer` - Virtual Phin Brewing Lab (`PhinCustomizer.tsx`)
- `/promotions` - Non-Intrusive Campaign Hub (`PromotionsPage.tsx`)
- `/knowledge` - Coffee Encyclopedia & Masterclass (`KnowledgePage.tsx`)
- `/about` - Brand Story & Farm Origins (`AboutPage.tsx`)

---

## 🎨 UI Prompt Engineering Standards Applied

1. **Explicit Color Palette**:
   - `--color-coffee-dark`: `#120C0A` (Espresso Black Background)
   - `--color-coffee-roast`: `#1C1310` (Dark Roast Surface)
   - `--color-coffee-card`: `#251B17` (Mocha Card Background)
   - `--color-crema`: `#D4A373` (Golden Crema Highlight)
   - `--color-crema-light`: `#E6C280` (Caramel Gold Text)
   - `--color-milk`: `#FBF5ED` (Cream White Text)

2. **Non-Intrusive Promotional UX**:
   - Dismissible top announcement ticker bar ([AnnouncementBar.tsx](file:///D:/Demo/QL-COFFEE/src/components/AnnouncementBar.tsx)).
   - Non-blocking bottom-left floating widget ([FloatingPromotionToast.tsx](file:///D:/Demo/QL-COFFEE/src/components/FloatingPromotionToast.tsx)).

3. **No Guessing Rule**:
   - All prices use `Intl.NumberFormat('vi-VN')` formatting.
   - All assets use high-resolution, context-accurate Unsplash URLs with explicit query parameters.
   - All interactive formulas (Phin ratio, Caffeine content, Water volume) are explicitly calculated in TypeScript.

---

## 🌿 Phased Git Execution & Commit Conventions

Every feature iteration MUST follow this workflow:

1. **Create Phase Branch**: `feature/phase-X-name`
2. **Execute Code Changes**: Small, atomic component additions.
3. **Automated Verification**: Run `npm run test` (`tsc -b && vite build`).
4. **Semantic Commit**:
   - `feat(scope): explanation`
   - `fix(scope): explanation`
   - `docs(scope): explanation`

---

## 🚀 GitHub Pages Deployment Instructions for Agents

1. **Vite Relative Path**: Configured via `base: './'` in `vite.config.ts`.
2. **Build Verification**: Run `npm run build` to generate `/dist`.
3. **Deployment Options**:
   - **Option A (GitHub Actions)**: Push to `main` branch with `.github/workflows/deploy.yml`.
   - **Option B (gh-pages CLI)**: Run `npx gh-pages -d dist`.

---

## 🛠️ Maintenance Checklist for AI Agents

Before submitting PRs or declaring success:
- [x] Run `npm run test` to verify TypeScript types and build output.
- [x] Ensure zero console warnings or broken image links.
- [x] Verify responsiveness across Mobile (<640px), Tablet (640-1024px), and Desktop (>1024px).
- [x] Update `README.md` and `AGENTS.md` if new tools or data models are introduced.
