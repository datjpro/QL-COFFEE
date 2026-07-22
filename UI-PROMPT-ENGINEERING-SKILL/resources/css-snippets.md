# CSS Snippet Bank — Copy-Paste Into Your Prompt

This is a personal effects library. Copy any block directly into section 2.5 of your prompt — no rewriting needed.

---

## 🪟 Liquid Glass Effect

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
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
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0)    40%,
    rgba(255,255,255,0)    60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**Use for**: navbar, cards, modals, tags — on dark image or video backgrounds.

---

## ✨ Text Glow

```css
.text-glow {
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.8),
    0 0 40px rgba(255, 255, 255, 0.4),
    0 0 80px rgba(255, 255, 255, 0.2);
}

.text-glow-accent {
  /* Replace color with your project's accent color */
  text-shadow:
    0 0 20px rgba(200, 168, 130, 0.9),
    0 0 60px rgba(200, 168, 130, 0.4),
    0 0 100px rgba(200, 168, 130, 0.15);
}
```

---

## 🌫️ Noise Texture Overlay

```css
.noise-overlay {
  position: relative;
}
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 1;
}
```

---

## 🎬 Standard Animation Keyframes

```css
/* --- Fade + Rise --- */
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise {
  animation: fade-rise 0.8s ease-out both;
}

/* --- Fade + Fall (from above) --- */
@keyframes fade-fall {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-fall {
  animation: fade-fall 0.6s ease-out both;
}

/* --- Scale In --- */
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
.animate-scale-in {
  animation: scale-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

/* --- Blur In --- */
@keyframes blur-in {
  from { opacity: 0; filter: blur(12px); transform: scale(1.05); }
  to   { opacity: 1; filter: blur(0);    transform: scale(1); }
}
.animate-blur-in {
  animation: blur-in 1s ease-out both;
}

/* --- Slide In from Left --- */
@keyframes slide-left {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
.animate-slide-left {
  animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* --- Stagger delay utilities --- */
.delay-0   { animation-delay: 0s; }
.delay-100 { animation-delay: 0.1s; }
.delay-150 { animation-delay: 0.15s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-450 { animation-delay: 0.45s; }
.delay-600 { animation-delay: 0.6s; }
```

---

## 🎯 Gradient Button

```css
.btn-gradient {
  position: relative;
  padding: 14px 32px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #000;
  background: linear-gradient(135deg, #DEDBC8 0%, #C8A882 50%, #B08B6E 100%);
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}
.btn-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
  border-radius: inherit;
}
.btn-gradient:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 32px rgba(200, 168, 130, 0.35);
}
.btn-gradient:active {
  transform: scale(0.98);
}
```

---

## 🖱️ Cursor Follower (JavaScript)

```js
// Paste inside useEffect or a script tag
const cursor = document.querySelector('.cursor-dot');
const cursorOuter = document.querySelector('.cursor-ring');
let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Dot: instant follow
  dotX += (mouseX - dotX) * 0.35;
  dotY += (mouseY - dotY) * 0.35;
  cursor.style.transform = `translate(${dotX}px, ${dotY}px)`;

  // Ring: lerp smooth
  ringX += (mouseX - ringX) * 0.08;
  ringY += (mouseY - ringY) * 0.08;
  cursorOuter.style.transform = `translate(${ringX}px, ${ringY}px)`;

  requestAnimationFrame(animateCursor);
}
animateCursor();
```

**Companion CSS**:
```css
.cursor-dot, .cursor-ring {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  top: -4px; left: -4px; /* offset to center */
}
.cursor-dot {
  width: 8px; height: 8px;
  background: white;
  border-radius: 50%;
}
.cursor-ring {
  width: 36px; height: 36px;
  top: -18px; left: -18px;
  border: 1.5px solid rgba(255,255,255,0.5);
  border-radius: 50%;
  mix-blend-mode: difference;
}
```

---

## 📜 Scroll Progress Formulas

```js
// Use inside a scroll event or rAF loop
function getScrollProgress(element) {
  const rect = element.getBoundingClientRect();
  const windowH = window.innerHeight;
  return Math.max(0, Math.min(1,
    (windowH - rect.top) / (windowH + rect.height)
  ));
}

// Lerp utility
function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

// Parallax
function applyParallax(element, progress, intensity = 80) {
  element.style.transform = `translateY(${(progress - 0.5) * -intensity}px)`;
}

// Video scrub
function scrubVideo(videoEl, progress) {
  if (videoEl.readyState >= 2) {
    videoEl.currentTime = progress * videoEl.duration;
  }
}
```

---

## 🔤 Marquee / Infinite Scroll Text

```css
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 20s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

**HTML**:
```html
<div class="overflow-hidden">
  <div class="marquee-track">
    <!-- Duplicate content twice for a seamless loop -->
    <span>Item 1 · Item 2 · Item 3 · </span>
    <span>Item 1 · Item 2 · Item 3 · </span>
  </div>
</div>
```
