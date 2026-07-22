# Standard Prompt Framework — 11 Sections (2.0 → 2.11)

Copy this framework and fill it in order. Skip any section that doesn't apply.  
**Recommended fill order**: tech stack → fonts → color → assets → sections → animations → interactions.

---

## 2.0 Opening Statement (1 line, required)

```
Build a [page type] for [brand/product name] — [vibe in one phrase].
Use [full tech stack].
```

**Page type examples**: `single-page hero`, `2-section landing`, `scroll-driven portfolio`,  
`multi-section marketing page`, `full-screen app UI`

**Vibe examples**: `luxury beauty brand`, `3D creator portfolio`, `wearable health device`,  
`dark techno SaaS`, `minimalist fashion editorial`

---

## 2.1 Tech Stack (hard-declared)

```
React [version] + Vite [version] + TypeScript
+ Tailwind CSS [version]
+ [animation lib: Framer Motion [ver] / GSAP [ver] + ScrollTrigger / Motion]
+ [additional libs: lucide-react, shadcn/ui, @react-three/fiber, ...]
```

**Notes**:
- If using GSAP: list the plugins explicitly (`ScrollTrigger`, `Flip`, ...) + version
- If using a component library: state whether you're using shadcn/ui or writing pure Tailwind
- If no framework needed: `Vanilla HTML + CSS + JS (no build tool)`

---

## 2.2 Fonts

For **each** font, declare all 5 fields:

```
Font 1: [Name] — [source: Google Fonts / self-hosted]
  Weights: [400, 600, 700] (or ital@0;1)
  Role: [display/heading / body / accent / mono]
  Import: <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
  CSS var: --font-display: '[Name]', sans-serif;

Font 2: ...
```

---

## 2.3 Color System / Theme

**Option 1 — HSL CSS Variables** (recommended with shadcn/Tailwind):

```css
:root {
  --background:    220 30% 8%;    /* deep navy */
  --foreground:    0 0% 95%;      /* near white */
  --primary:       262 83% 70%;   /* soft violet */
  --muted:         220 20% 15%;   /* card bg */
  --muted-foreground: 220 10% 60%; /* subtle text */
  --border:        220 20% 20%;   /* divider */
  --accent:        330 80% 65%;   /* pink highlight */
}
```

**Option 2 — Hex values in Tailwind config**:

```js
colors: {
  primary:   '#DEDBC8',  // warm cream — used for main text
  surface:   '#0F0F0F',  // deep black — overall background
  card:      '#1A1A1A',  // card background
  border:    '#2A2A2A',  // divider lines
  accent:    '#C8A882',  // warm gold — CTAs and highlights
}
```

**Always state**: overall background color, main text color, how many secondary background layers (cards/sections).

---

## 2.4 Asset URLs

```
[HERO_VIDEO]   = https://...mp4
[BG_IMAGE_1]   = https://images.unsplash.com/photo-xxx?w=1920&q=80
[BG_IMAGE_2]   = https://...
[LOGO_SVG]     = https://...
[GALLERY_1]    = https://...
[GALLERY_2]    = https://...
```

- Assign variable names (`BG_IMAGE_1`) and reference them in later sections
- Never paste the same URL multiple times
- No placeholders — must be real URLs or Unsplash links with explicit dimensions

---

## 2.5 Reusable CSS / Component Effects

For effects used in multiple places: write the **actual code block**, not a description.

**Example — Liquid Glass** (see more in `resources/css-snippets.md`):

```css
.liquid-glass {
  background: rgba(255,255,255,0.01);
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,  rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

→ Save your frequently used snippets in `resources/css-snippets.md` for future prompts — no rewriting.

---

## 2.6 Section-by-Section Breakdown

For **each section**, fill in this template:

```
### [Section Name] (e.g. Hero Section)

Size: h-screen | min-h-[900px] | padding: 0 5vw
Layout: flex flex-col items-center justify-center | grid grid-cols-2 gap-8
Z-index layers:
  z-0: [BG_VIDEO] — position absolute inset-0, object-fit: cover
  z-10: overlay — bg-black/40
  z-20: content wrapper

Elements:
  [Eyebrow label]
    Text: "COLLECTION 2025"
    Class: text-[11px] tracking-[0.3em] uppercase text-white/50 font-medium
    Position: static, mb-6
    Animation: fade-rise, delay 0s

  [Headline]
    Text: "Worn by Few,\nRemembered by All"
    Class: text-[clamp(48px,8vw,120px)] font-bold leading-[0.9] tracking-[-0.02em] text-white
    Position: static
    Animation: fade-rise, delay 0.15s

  [CTA Button]
    Text: "Explore Collection →"
    Class: px-8 py-4 bg-white text-black text-sm font-semibold rounded-full
    Hover: bg-white/90, scale(1.03), transition 0.25s ease
    Animation: fade-rise, delay 0.3s
```

**Rule**: every responsive value must list all breakpoints explicitly. Never write "responsive text" without specifying sizes per breakpoint.

---

## 2.7 Animation Specs

For each animation, declare all **4 parameters**: start value, end value, duration, delay/easing.

```css
/* Fade + rise */
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }

/* Scale in */
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}
.animate-scale-in { animation: scale-in 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
```

**Stagger** (sequential elements):
```
logo:    delay 0s
nav:     delay 0.15s
caption: delay 0.3s
CTA:     delay 0.45s
```

**Custom easing**: use `cubic-bezier(a,b,c,d)` or a Framer Motion array `[0.25,0.1,0.25,1]`.  
Never write "smooth ease" — it has no meaning to the AI.

---

## 2.8 Interactive / Scroll-driven Logic

This is the section most often skipped — and it determines output quality. For every dynamic interaction (cursor tracking, parallax, video scrub on scroll, magnetic hover, card scale on scroll), **write real formulas / pseudo-code**:

```js
// Scroll progress
progress = clamp(0, 1, (scrollY - sectionTop) / sectionHeight)

// Lerp smoothing (cursor follow, parallax)
current = current + (target - current) * lerpFactor  // lerpFactor = 0.08

// Video scrub
videoEl.currentTime = progress * videoEl.duration

// Parallax
element.style.transform = `translateY(${progress * -80}px)`

// Scale on scroll
scale = Math.min(1, (viewportHeight - rect.top) / (viewportHeight * 0.6))

// Magnetic hover
dx = mouseX - btnCenterX
dy = mouseY - btnCenterY
btn.style.transform = `translate(${dx * 0.3}px, ${dy * 0.3}px)`
```

**Always state**:
- Using `scroll` event or `requestAnimationFrame`?
- Throttle/debounce needed? (e.g. "throttled at 80ms")
- Desktop (mouse) vs mobile/touch: are behaviors different?

---

## 2.9 Reusable Components

For each shared component (`<FadeIn>`, `<MagnetButton>`, `<AnimatedText>`...):

```
Component: <FadeIn>
Props:
  - delay: number (default 0)
  - duration: number (default 0.8)
  - direction: 'up' | 'down' | 'left' | 'right' (default 'up')
  - distance: number (default 24, in px)
Behavior: wraps children, animates in when entering viewport (IntersectionObserver)
Style: overflow: hidden (if clipping), position: relative
```

---

## 2.10 Responsive Breakpoints

Declare once, use consistently throughout the entire prompt:

```
Mobile:  < 640px   (sm: breakpoint)
Tablet:  640–1024px (md: breakpoint)
Desktop: ≥ 1024px  (lg: breakpoint)
Large:   ≥ 1280px  (xl: breakpoint)
```

---

## 2.11 Key Design & Constraint Principles

A short list of rules — prevents the AI from adding unsolicited details:

```
- No decorative blobs, radial gradients, or overlays beyond what is specified
- All text overlaid on imagery uses mix-blend-mode: exclusion for guaranteed legibility
- pointer-events: none on all UI overlay layers that don't require clicks
- No border-radius beyond what is explicitly specified
- Respect prefers-reduced-motion (disable all animations if user has it enabled)
- Do not add sections, elements, or colors not present in the spec
- Every hover state must have an explicit transition duration
```
