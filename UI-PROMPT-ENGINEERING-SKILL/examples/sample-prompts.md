# Real-World Prompt Examples

## How to use this file

Each example includes:
1. **Raw idea** (the original one-line description)
2. **Completed prompt** after applying the 11-section framework
3. **Key highlights** — the hardest parts to write and why they're written that way

---

## Example 1 — Dark Hero Section for a Fashion Brand

### Raw idea
> "Build a hero section for a high-end fashion brand, dark theme, video background, large type"

### Completed prompt

```
Build a single-page hero section for "LEON" — luxury dark fashion brand.
Use React 18 + Vite 5 + TypeScript + Tailwind CSS 3.4 + Framer Motion 11.

FONTS:
- Display: 'Cormorant Garamond', Google Fonts, weight 300/400/700, italic variant
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300&display=swap">
  --font-display: 'Cormorant Garamond', serif;
- Body: 'Inter', Google Fonts, weight 400/500
  --font-body: 'Inter', sans-serif;

COLORS:
  --background:    0 0% 4%;       /* near black #0A0A0A */
  --foreground:    35 20% 88%;    /* warm cream #DEDBC8 */
  --muted:         0 0% 10%;      /* card bg */
  --accent:        35 40% 65%;    /* warm gold #C8A882 */
  --border:        0 0% 18%;      /* subtle divider */

ASSETS:
  [HERO_VIDEO] = https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-1090-large.mp4
  [LOGO_SVG]   = inline SVG — "LEON" wordmark, Cormorant Garamond 300, letter-spacing 0.4em

REUSABLE EFFECTS — paste as-is:
.liquid-glass { ... } /* see resources/css-snippets.md */

HERO SECTION:
  Size: h-screen, min-h-[700px]
  Z-index layers:
    z-0: [HERO_VIDEO] — position absolute inset-0, object-fit cover, opacity 0.6
    z-10: gradient overlay — bg-gradient-to-b from-black/20 via-transparent to-black/80
    z-20: content

  Content (flex col, items-center, justify-end, pb-[10vh]):
    [Eyebrow]
      Text: "COLLECTION 2025"
      Class: text-[10px] tracking-[0.5em] uppercase text-foreground/50 font-medium font-body
      Animation: fade-rise 0.6s ease-out, delay 0s

    [Headline]
      Text: "Worn by Few,\nRemembered\nby All"
      Class: text-[clamp(56px,10vw,140px)] font-display font-light leading-[0.88]
             tracking-[-0.02em] text-foreground text-center italic
      Animation: fade-rise 0.9s ease-out, delay 0.15s

    [CTA]
      Text: "Explore →"
      Class: mt-8 px-10 py-4 border border-foreground/30 text-foreground text-[12px]
             tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background
             transition-all duration-300
      Animation: fade-rise 0.6s ease-out, delay 0.35s

ANIMATION SPECS:
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

BREAKPOINTS: Mobile < 640px | Tablet 640–1024px | Desktop ≥ 1024px

KEY PRINCIPLES:
- No decorative blobs or gradients beyond what is listed above
- Video: autoplay muted loop, no controls
- prefers-reduced-motion: disable all animations and pause video
- pointer-events: none on all overlay layers
```

### Key highlights
- **Italic font** for the headline requires `ital,wght@0,300;1,300` in the Google Fonts URL — just saying "italic" is not enough
- **`clamp(56px,10vw,140px)`** lets the font scale smoothly without needing 4 separate breakpoint rules
- **Video opacity: 0.6** — without this the AI commonly uses full opacity, making text hard to read

---

## Example 2 — Scroll-Driven Portfolio (3D Creator)

### Raw idea
> "Portfolio for a 3D designer, scroll effects, dark, violet color palette"

### Completed prompt

```
Build a scroll-driven single-page portfolio for "VORA" — 3D & motion design studio.
Use React 18 + Vite 5 + TypeScript + Tailwind CSS 3.4 + GSAP 3.12 + ScrollTrigger.

FONTS:
- 'Space Grotesk', Google Fonts, weight 300/400/700
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap">
  --font-display: 'Space Grotesk', sans-serif;
- 'JetBrains Mono', Google Fonts, weight 400 (used for labels and code text)
  --font-mono: 'JetBrains Mono', monospace;

COLORS:
  --background:    262 30% 6%;    /* deep purple-black */
  --foreground:    260 20% 92%;   /* soft lavender white */
  --primary:       262 83% 70%;   /* bright violet #9B6DFF */
  --muted:         262 20% 12%;   /* card surface */
  --accent:        320 70% 65%;   /* hot pink #E86AC0 */

ASSETS:
  [REEL_VIDEO]  = https://assets.mixkit.co/videos/preview/mixkit-3d-abstract-shapes-1096-large.mp4
  [WORK_1]      = https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80
  [WORK_2]      = https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80
  [WORK_3]      = https://images.unsplash.com/photo-1633218388467-539651dcf81a?w=800&q=80

SECTION 1 — Hero (h-screen):
  Z-layers:
    z-0: bg-background solid
    z-10: [REEL_VIDEO] — position absolute, right-0 bottom-0, w-[55vw] h-[70vh],
          object-fit cover, opacity 0.35, mask-image: linear-gradient(to left, black 40%, transparent)
    z-20: content

  Content (absolute bottom-16 left-[5vw]):
    [Label]
      Text: "3D · MOTION · IDENTITY"
      Class: text-[11px] font-mono tracking-[0.4em] text-primary/70
      Animation: fade-rise 0.5s, delay 0s

    [Name]
      Text: "VORA\nSTUDIO"
      Class: text-[clamp(72px,12vw,180px)] font-display font-bold leading-[0.85]
             tracking-[-0.03em] text-foreground
      Animation: fade-rise 1s cubic-bezier(0.16,1,0.3,1), delay 0.1s

    [Tagline]
      Text: "Crafting worlds that don't exist yet."
      Class: text-[18px] font-display font-light text-foreground/50 max-w-[420px] mt-6
      Animation: fade-rise 0.7s ease-out, delay 0.3s

SECTION 2 — Work Grid (min-h-screen, py-32 px-[5vw]):
  Headline: "Selected Work" — text-[13px] font-mono tracking-[0.3em] text-primary/60 uppercase mb-16

  Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

  Each card (GSAP scroll reveal, stagger 0.08s per card):
    - Aspect ratio: aspect-[4/5]
    - Image: [WORK_1/2/3], object-fit cover, scale 1.05 by default
    - Hover: image scale → 1.0 (0.6s ease-out), overlay opacity 0 → 1
    - Overlay: bg-primary/10 backdrop-blur-sm, shows project title + year
    - Border: 1px solid rgba(155,109,255,0.15)

SCROLL INTERACTION (GSAP ScrollTrigger):
  // Parallax on hero video
  gsap.to('[REEL_VIDEO]', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
  });

  // Work cards stagger reveal
  gsap.fromTo('.work-card',
    { opacity: 0, y: 48 },
    {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.work-grid', start: 'top 80%' }
    }
  );

BREAKPOINTS: Mobile < 640px | Tablet 640–1024px | Desktop ≥ 1024px

KEY PRINCIPLES:
- Video: autoplay muted loop, no controls visible
- No decorative blobs or radial gradients beyond what is specified
- Cards have no border-radius — sharp corners throughout
- Mobile: work grid becomes 1 column, video hidden (display none), hero text 30% smaller
- prefers-reduced-motion: disable all GSAP animations
```

### Key highlights
- **Video mask-image** (`linear-gradient(to left, black 40%, transparent)`) — creates a fade edge without an extra overlay element
- **Actual GSAP syntax** in the prompt: AI implements it precisely rather than guessing the API
- **Mobile hides video** explicitly declared — saves bandwidth and prevents layout breakage

---

## Short-Form Template (for quick prompts)

```
Build a [page type] for [name] — [one-phrase vibe].
Stack: [tech].

Font: [name], [weights], [Google Fonts link]
Colors: bg=[hex], text=[hex], accent=[hex]
Assets: [URL1], [URL2]

[Section Name]:
  Size: [dimensions], Layout: [flex/grid]
  - [Element 1]: "[text]", class=[tailwind], animation=[from/to/duration/delay]
  - [Element 2]: ...

Animations:
  @keyframes [name] { from { [values] } to { [values] } }

Constraints:
  - [rule 1]
  - [rule 2]
```

> Use the short-form template for simple UIs (1–2 sections, no complex scroll interactions).  
> Use the full 11-section framework for UIs with 3+ sections or scroll/interactive logic.
