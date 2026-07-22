# Core Principles — Why Detailed Prompts Matter

## The problem with vague prompts

When you write "make a hero section that looks great, dark, smooth" — the AI coding tool must independently decide:
- "Dark" = which palette? `#0a0a0a`? `hsl(220, 30%, 8%)`? `#1a1a2e`?
- "Great" = which font family, which weight?
- "Smooth" = animation at 0.3s? 0.8s? what easing function?
- Which layout? How many breakpoints? Glass effect or solid?

Every place the AI guesses is a risk of drifting away from your intent. With 10 open questions in a single prompt, the probability of a 100% correct result is very low.

## 7 Core Principles (apply to every UI prompt)

### 1. Concrete values, not vague adjectives

| ❌ Vague | ✅ Concrete |
|----------|-------------|
| "dark color" | `background: hsl(220, 30%, 8%)` |
| "smooth animation" | `0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| "nice font" | `'Inter', weight 400/600/700, from Google Fonts` |
| "glass effect" | Paste the full CSS block (see resources/css-snippets.md) |
| "responsive" | `mobile < 640px, tablet 640–1024px, desktop ≥ 1024px` |

### 2. Hard-declare tech stack at the very top

If you don't declare it, the AI will choose — sometimes picking Next.js when you wanted Vite, choosing Tailwind v3 when you're on v4, or selecting an animation library you haven't installed.

```
React 18 + Vite 5 + TypeScript + Tailwind CSS 3.4
+ Framer Motion 11 + lucide-react
```

### 3. Repeated effects = dedicated class/component

If a glass effect appears in the nav, card, and modal — write it once as `.liquid-glass` and reuse it.  
Don't describe it in words three separate times — the AI will produce three different implementations.

### 4. Every animation must have exactly 4 parameters

```
from { opacity: 0; transform: translateY(24px); }
to   { opacity: 1; transform: translateY(0); }
duration: 0.8s | delay: 0.15s | easing: ease-out
```

If you write "fade-in animation" without these 4 parameters → the AI sets its own values → the result looks cheap.

### 5. Describe layout by z-index layers + section

Describe each section: dimensions, flex/grid layout, position of each child element, z-index when layers overlap.  
Don't describe "it should look like this overall" and let the AI arrange things freely.

### 6. Interaction logic = formulas / pseudo-code

```js
// Lerp smoothing for cursor follow
current = current + (target - current) * 0.08

// Video scrub on scroll
progress = clamp(0, 1, (scrollY - sectionTop) / sectionHeight)
videoEl.currentTime = progress * videoDuration

// Parallax
element.style.transform = `translateY(${progress * -80}px)`
```

Writing interaction logic in natural language → AI interprets it incorrectly ~50% of the time.  
Writing it as a formula → AI implements it correctly ~95% of the time.

### 7. Real asset URLs — no placeholders

```
❌ "your hero image here"
✅ https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920
```

Placeholders → AI generates `<img src="placeholder.jpg">` → you have to fix it afterwards.

## Conclusion

When writing a prompt, **any section where you can't fill in a number or concrete value = the idea isn't clear enough yet**.  
In that case: decide on a reasonable value that fits the intended vibe, mark it as an assumption for later review.  
Never leave it blank — leaving it blank means letting the AI guess.
