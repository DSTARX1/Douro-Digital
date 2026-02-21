## Plan Checkpoint: Frontend Polish & UX Overhaul

### Overview
Complete frontend beautification and UX upgrade: 25 audit fixes (SEO, accessibility, performance) + 15 visual enhancements (animations, effects, polish). 8 phases, 21 chunks.

### Packages Installed
```bash
bun add lenis  # v1.3.17 — smooth scroll engine
```

### Research Findings

**Lenis + GSAP Integration (skip ReactLenis wrapper for performance):**
```typescript
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```

**Next.js 16 SEO patterns:**
```typescript
// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://dourodigital.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 }];
}

// app/robots.ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://dourodigital.com/sitemap.xml" };
}

// JSON-LD injection pattern
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

// Dynamic OG image — app/(site)/opengraph-image.tsx
import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() { return new ImageResponse((<div>...</div>)); }
```

**React ViewTransition (React 19 Canary — available in Next.js 16):**
```tsx
import { ViewTransition } from "react";
<ViewTransition enter="fade-in" exit="fade-out"><div>...</div></ViewTransition>
// CSS: ::view-transition-old(.fade-out) { animation: fadeOut 300ms; }
// CSS: ::view-transition-new(.fade-in) { animation: fadeIn 300ms; }
// Must be triggered within startTransition()
```

**Focus trap pattern:**
```typescript
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function trapFocus(container: HTMLElement) {
  const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE);
  const first = focusable[0], last = focusable[focusable.length - 1];
  const handler = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  container.addEventListener("keydown", handler);
  first?.focus();
  return () => container.removeEventListener("keydown", handler);
}
```

**TextScramble pattern:**
```typescript
class TextScrambler {
  scramble(text: string, onUpdate: (display: string) => void, onComplete?: () => void) {
    const chars = "█▓▒░▪▫●○◆◇■□▲△";
    let iteration = 0;
    const id = setInterval(() => {
      const display = text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (Math.random() < 0.1 * iteration) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join("");
      onUpdate(display);
      if (iteration >= 10) { onUpdate(text); clearInterval(id); onComplete?.(); }
      iteration++;
    }, 50);
    return () => clearInterval(id);
  }
}
```

**Noise overlay (CSS-only approach):**
```css
.noise { position: fixed; inset: 0; z-index: 9000; pointer-events: none; opacity: 0.03; }
.noise::before { content: ""; position: absolute; inset: -200%; width: 400%; height: 400%;
  background-image: url("/images/noise.png"); background-repeat: repeat;
  animation: noise 0.5s steps(8) infinite; }
@keyframes noise { to { transform: translate(-10%, -10%); } }
```

### Gotchas
- Lenis: Skip `ReactLenis` wrapper — it causes performance issues on iOS. Use direct instantiation.
- Lenis: Call `gsap.ticker.lagSmoothing(0)` to prevent ticker jitter.
- ViewTransition: Only in React Canary/Experimental channels. Must verify Next.js 16.1.6 includes it. Fallback: CSS-only transitions with `startViewTransition()` API.
- Mobile breakpoint: 759px and 768px both exist. Standardize to 768px everywhere.
- `@studio-freight/react-lenis` is the OLD package name. Current: `lenis` (includes `lenis/react`).
- OG images: `ImageResponse` only supports flexbox, no grid layout.

---

### Chunks

#### Phase 1: SEO Foundation

##### Chunk 1: Base Metadata + Sitemap + Robots (parallel-safe: yes)
**Files:**
- `app/layout.tsx` — add `metadataBase`
- `app/(site)/page.tsx` — add home-specific metadata
- `app/sitemap.ts` — NEW
- `app/robots.ts` — NEW

**What to build:**
- Add `metadataBase: new URL("https://dourodigital.com")` to root layout metadata
- Add explicit home page metadata with optimized title/description
- Create `app/sitemap.ts` listing all static pages + dynamic case studies + blog posts
- Create `app/robots.ts` with standard rules + sitemap reference

**Dependencies:** None

---

##### Chunk 2: OpenGraph + Twitter Cards + OG Images (parallel-safe: no)
**Files:**
- `app/(site)/page.tsx` — add OG to home
- `app/(site)/about/page.tsx` — add OG
- `app/(site)/work/page.tsx` — add OG
- `app/(site)/case-studies/[slug]/page.tsx` — add OG (dynamic)
- `app/(site)/resources/page.tsx` — add OG
- `app/(site)/resources/[slug]/page.tsx` — add OG (dynamic)
- `app/(site)/book-a-call/page.tsx` — add OG
- `app/(site)/opengraph-image.tsx` — NEW (default OG image)
- `app/(site)/resources/[slug]/opengraph-image.tsx` — NEW (blog post OG)

**What to build:**
- Add `openGraph` and `twitter` fields to every page's metadata/generateMetadata
- Create default `opengraph-image.tsx` using `ImageResponse` (brand colors, logo, page title)
- Create dynamic blog post OG image generator

**Dependencies:** Chunk 1 (metadataBase must exist first)

---

##### Chunk 3: JSON-LD Structured Data (parallel-safe: no)
**Files:**
- `lib/jsonld.ts` — NEW (schema helpers)
- `app/layout.tsx` — add Organization + WebSite schemas
- `app/(site)/page.tsx` — add WebPage schema
- `app/(site)/about/page.tsx` — add AboutPage schema
- `app/(site)/resources/[slug]/page.tsx` — add Article/BlogPosting schema
- `app/(site)/case-studies/[slug]/page.tsx` — add WebPage + BreadcrumbList

**What to build:**
- Create `lib/jsonld.ts` with typed helper functions for each schema type
- Inject `<script type="application/ld+json">` into each page
- Schemas: Organization, WebSite, WebPage, Article, BreadcrumbList

**Dependencies:** Chunk 2 (OG images referenced in schemas)

---

#### Phase 2: Accessibility Sweep

##### Chunk 4: Global Accessibility (parallel-safe: yes)
**Files:**
- `app/globals.css` — prefers-reduced-motion, focus-visible, custom scrollbar
- `app/(site)/layout.tsx` — skip-to-content link
- `app/(site)/page.tsx` — add `id="main-content"` to main element
- All other page files — add `id="main-content"` to main elements

**What to build:**
- Add `@media (prefers-reduced-motion: reduce)` block to globals.css
- Add global `:focus-visible` styles (accent outline)
- Add custom scrollbar styles (thin, accent-colored)
- Add visually-hidden skip-to-content link as first child of site layout
- Add `id="main-content"` to each page's `<main>` element

**Dependencies:** None

---

##### Chunk 5: Component Accessibility (parallel-safe: yes)
**Files:**
- `components/home/ContactPanel.tsx` — dialog role, aria-modal, aria-label on close, focus trap
- `components/home/Accordion.tsx` — role="button", tabIndex, aria-expanded, keyboard handler
- `components/blog/BlogNewsletter.tsx` — aria-label on input
- `components/blog/BlogCategoryFilter.tsx` — aria-pressed on pills
- `components/home/HomeTestimonial.tsx` — aria-live region (optional)

**What to build:**
- ContactPanel: add `role="dialog"`, `aria-modal="true"`, `aria-label` on close button, implement focus trap using the pattern from research
- Accordion: add `role="button"`, `tabIndex={0}`, `aria-expanded`, `onKeyDown` for Enter/Space
- BlogNewsletter: add `aria-label="Email address"` to input
- BlogCategoryFilter: add `aria-pressed={isActive}` to buttons

**Dependencies:** None

---

#### Phase 3: CSS Cleanup & Design Foundation

##### Chunk 6: CSS Standardization (parallel-safe: yes)
**Files:**
- All `.module.css` files with `max-width: 759px` — change to `768px`
- `components/home/Footer.module.css` — replace hardcoded `#D42918` with `var(--accent)`
- `app/globals.css` — add `.glass` utility class, update `[data-animate]` to include scale

**What to build:**
- Find-replace `759px` → `768px` across all CSS modules
- Fix Footer hardcoded color
- Add `.glass` utility class (glassmorphism pattern) to globals.css
- Update `[data-animate]` to `transform: translateY(30px) scale(0.97)` and `.is-visible` to `scale(1)` for more dimensional reveals

**Dependencies:** None

---

##### Chunk 7: Noise Overlay + Numbered Nav + Section Borders (parallel-safe: yes)
**Files:**
- `components/effects/NoiseOverlay.tsx` — NEW
- `components/effects/NoiseOverlay.module.css` — NEW
- `public/images/noise.png` — NEW (generate or create 64x64 noise texture)
- `app/(site)/layout.tsx` — mount NoiseOverlay
- `components/home/Navbar.tsx` — add numbered prefixes to nav links
- `data/home.ts` — add index numbers to nav link data
- Various `.module.css` — convert `border-top` to animated line-draw `::before`

**What to build:**
- Create NoiseOverlay component (fixed fullscreen, low opacity noise texture, pointer-events: none)
- Generate a 64x64 grayscale noise PNG via canvas script or manual creation
- Mount in site layout above children
- Add `01`, `02`, `03` prefixes to nav links using Fragment Mono
- Convert section divider `border-top` in MissionServices, AboutServices, CaseStudyResults to animated `::before` line-draws (scaleX 0→1 on scroll)

**Dependencies:** None

---

#### Phase 4: Smooth Scroll & Motion Engine

##### Chunk 8: Lenis Smooth Scroll (parallel-safe: no)
**Files:**
- `components/effects/SmoothScroll.tsx` — NEW
- `app/(site)/layout.tsx` — wrap children in SmoothScroll
- `components/home/Hero.tsx` — verify ScrollTrigger works with Lenis
- `components/about/AboutHero.tsx` — verify ScrollTrigger works with Lenis

**What to build:**
- Create SmoothScroll client component (direct Lenis instantiation, GSAP ticker sync)
- Mount in site layout wrapping children
- Verify existing GSAP ScrollTrigger animations still work (Hero pin, AboutHero pin)
- Test mobile behavior — may need to disable smooth scroll on touch devices

**Dependencies:** Phase 3 complete (CSS foundation set)

---

##### Chunk 9: Scroll Progress + Marquee Ticker (parallel-safe: yes)
**Files:**
- `components/effects/ScrollProgress.tsx` — NEW
- `components/effects/ScrollProgress.module.css` — NEW
- `components/effects/Marquee.tsx` — NEW
- `components/effects/Marquee.module.css` — NEW
- `app/(site)/layout.tsx` — mount ScrollProgress
- `app/(site)/page.tsx` — add Marquee between sections

**What to build:**
- ScrollProgress: thin accent bar at top of viewport, scaleX driven by scroll position
- Marquee: infinite horizontal scrolling text strip using CSS keyframes, Fragment Mono font
- Mount progress bar in site layout
- Place marquee on home page between Hero and MissionServices (services list or tagline)

**Dependencies:** Chunk 8 (Lenis must be wired first since scroll events are different)

---

#### Phase 5: Text Animations & Reveals

##### Chunk 10: TextReveal Word-by-Word (parallel-safe: yes)
**Files:**
- `components/animations/TextReveal.tsx` — REWRITE (currently a stub)
- `components/animations/TextReveal.module.css` — NEW
- `components/home/Hero.tsx` — apply TextReveal to headline
- `components/about/AboutHero.tsx` — apply TextReveal to headline
- `components/about/AboutIntro.tsx` — apply TextReveal to intro text

**What to build:**
- Rewrite TextReveal: split text into words wrapped in overflow-hidden spans
- Each word animates from `y: 100%, opacity: 0` → `y: 0, opacity: 1` with GSAP ScrollTrigger + stagger
- Support `scrub` mode (tied to scroll) and `trigger` mode (plays once on intersection)
- Apply to Hero headlines and AboutIntro paragraph

**Dependencies:** Chunk 8 (GSAP ScrollTrigger must be synced with Lenis)

---

##### Chunk 11: TextScramble Pixel Glitch (parallel-safe: yes)
**Files:**
- `components/effects/TextScramble.tsx` — NEW
- `components/home/MissionServices.tsx` — apply to stat numbers
- `components/case-study/CaseStudyResults.tsx` — apply to after values
- `app/(site)/book-a-call/BookACall.tsx` — apply to stat numbers

**What to build:**
- Create TextScramble component using IntersectionObserver trigger
- Pixel charset: `█▓▒░▪▫●○◆◇■□▲△` (matches 8-bit pixel brand)
- ~600ms resolve duration, progressive character resolution
- Apply to all stat/number displays across the site

**Dependencies:** None

---

##### Chunk 12: Image Reveal Clip-Path (parallel-safe: yes)
**Files:**
- `components/animations/ImageReveal.tsx` — NEW (or rewrite ImageZoom.tsx)
- `components/animations/ImageReveal.module.css` — NEW
- `components/case-study/CaseStudyImageGrid.tsx` — apply reveals
- `components/case-study/CaseStudyGallery.tsx` — apply reveals
- `components/about/MeetTheTeam.tsx` — apply to portraits

**What to build:**
- Create ImageReveal component using `clip-path: inset()` transitions
- On scroll intersection: `clip-path: inset(0 0 100% 0)` → `inset(0)` (bottom-to-top reveal)
- Stagger reveals for grids (each image reveals 0.15s after previous)
- Apply to case study images and team portraits

**Dependencies:** None

---

#### Phase 6: Card & Interactive Polish

##### Chunk 13: 3D Perspective Tilt + Hover Displacement (parallel-safe: yes)
**Files:**
- `components/cursor/MagneticCard.tsx` — add 3D tilt mode
- `components/cursor/MagneticCard.module.css` — NEW (specular highlight pseudo-element)
- `components/work/WorkProjectCard.tsx` — enable 3D tilt
- `components/blog/BlogGrid.tsx` — add subtle image displacement on hover
- `components/blog/BlogFeatured.tsx` — add subtle image displacement on hover

**What to build:**
- Extend MagneticCard with `tilt3D` prop: `transform: perspective(800px) rotateX(tiltY) rotateY(tiltX)`
- Add specular highlight: radial-gradient pseudo-element following mouse position
- Apply 3D tilt to WorkProjectCards
- Add inverse-direction image displacement on blog card hover (parallax within card)

**Dependencies:** None

---

##### Chunk 14: Animated Gradient Borders on CTAs (parallel-safe: yes)
**Files:**
- `app/globals.css` — add `@property --gradient-angle` and `.gradient-border` utility
- `components/home/HomeCTA.tsx` — apply to Cal.com embed wrapper
- `components/about/AboutCTA.tsx` — apply to Cal.com embed wrapper
- `components/case-study/CaseStudyCTA.tsx` — apply to Cal.com embed wrapper
- `app/(site)/book-a-call/BookACall.module.css` — apply to CTA button

**What to build:**
- Create CSS `@property --gradient-angle` (inherits: false, type: angle)
- Animate `--gradient-angle` from 0deg to 360deg over 4s infinite
- Apply as `border-image` or background-clip trick on CTA containers
- Subtle — warm red shifting through orange, not rainbow

**Dependencies:** None

---

#### Phase 7: Page Transitions & Loading

##### Chunk 15: Loading Screen / Page Entrance (parallel-safe: yes)
**Files:**
- `components/effects/PageLoader.tsx` — NEW
- `components/effects/PageLoader.module.css` — NEW
- `app/(site)/layout.tsx` — mount PageLoader

**What to build:**
- Full-screen branded loader shown on initial page load
- Logo animation (scale + fade), then content reveals
- Uses `document.fonts.ready` to wait for font loading
- Auto-dismisses after fonts load (max 2s timeout)
- CSS transitions only (opacity, transform) — no GSAP needed

**Dependencies:** None

---

##### Chunk 16: Route Loading Skeletons (parallel-safe: yes)
**Files:**
- `app/(site)/resources/loading.tsx` — NEW
- `app/(site)/resources/[slug]/loading.tsx` — NEW
- `app/(site)/case-studies/[slug]/loading.tsx` — NEW
- `app/globals.css` — add skeleton pulse keyframe

**What to build:**
- Blog index skeleton: hero placeholder + 6 card placeholders in grid
- Blog post skeleton: back link + title placeholder + body lines
- Case study skeleton: hero placeholder + section placeholders
- Skeleton CSS: subtle pulse animation, dark gray shapes matching page layout

**Dependencies:** None

---

##### Chunk 17: Page Transition Animations (parallel-safe: no)
**Files:**
- `app/(site)/layout.tsx` — wrap with ViewTransition or fallback
- `app/globals.css` — view transition CSS animations
- `components/home/Navbar.tsx` — update links to use startTransition if needed

**What to build:**
- If React 19 ViewTransition is available in Next.js 16.1.6: wrap page content in `<ViewTransition>`
- If not: implement CSS-only page transitions using `document.startViewTransition()` API
- Minimum: cross-fade (opacity 0→1) on route change, 250ms
- Ideal: slide-up entrance for new page content
- Add `::view-transition-old` and `::view-transition-new` CSS rules

**Dependencies:** Chunk 8 (Lenis must handle transition scroll reset)

---

#### Phase 8: Content & Performance

##### Chunk 18: Wire Up BlogNewsletter (parallel-safe: yes)
**Files:**
- `components/blog/BlogNewsletter.tsx` — add form state, API call, success/error UI
- `app/api/newsletter/route.ts` — NEW (or integrate with email service)

**What to build:**
- Add `useState` for loading/success/error states
- On submit: POST to `/api/newsletter` (or directly to email service API)
- Success: show confirmation message, clear input
- Error: show error message
- If no email service decided yet: create a stub API route that stores in DB (content_blocks or new table)

**Dependencies:** None

---

##### Chunk 19: Blog Featured Images + Internal Linking (parallel-safe: yes)
**Files:**
- `content/blog/*.mdx` — add `image` field to frontmatter where missing
- `lib/blog.ts` — handle `image` field in post parsing
- `components/blog/BlogGrid.tsx` — render real images when available (fallback to gradient)
- `components/blog/BlogPostBody.tsx` — add "Related case study" callout links
- `data/case-studies.ts` — add `relatedBlogSlugs` field
- `components/case-study/CaseStudyApproachV2.tsx` — add "Read more" blog link

**What to build:**
- Add `image` frontmatter field to blog posts (can start with AI-generated images)
- Update BlogGrid/BlogFeatured to show real images via next/image (with gradient fallback)
- Add cross-linking: blog posts → relevant case studies, case studies → relevant blog posts
- Add links in service accordion items to related case studies

**Dependencies:** None

---

##### Chunk 20: FAQ Content + ParallaxContainer (parallel-safe: yes)
**Files:**
- `components/faq/FAQ.tsx` — NEW (reusable FAQ accordion)
- `components/faq/FAQ.module.css` — NEW
- `content/blog/*.mdx` — restructure headings as questions where natural
- `components/animations/ParallaxContainer.tsx` — REWRITE (currently stub)
- `components/home/ClientLogos.tsx` — apply subtle parallax
- Various page files — add FAQ sections where appropriate

**What to build:**
- Create FAQ component using `<details>/<summary>` with styled expand/collapse
- Add `FAQPage` JSON-LD schema support
- Rewrite ParallaxContainer with GSAP ScrollTrigger scrub (speed prop controls translateY offset)
- Apply subtle parallax to ClientLogos section background and CTA sections
- Restructure blog headings as questions where natural for AEO

**Dependencies:** Chunk 3 (JSON-LD helpers), Chunk 8 (GSAP+Lenis)

---

##### Chunk 21: Core Web Vitals Optimization (parallel-safe: yes)
**Files:**
- `public/videos/` — convert .mov to .mp4 + .webm
- `components/home/Hero.tsx` — add poster, source elements, lazy-load below-fold
- `components/case-study/CaseStudyHero.tsx` — add poster
- `app/(site)/book-a-call/BookACall.tsx` — add poster
- `components/cal/CalInlineEmbed.tsx` — wrap in fixed-height container
- `components/home/RotatingText.tsx` — fix potential CLS (ensure stable height)

**What to build:**
- Convert `durolanding.mov` to MP4 (H.264) and WebM (VP9) for smaller size
- Add `poster` frame images to all video elements (extract first frame)
- Add explicit `aspect-ratio` or fixed dimensions to all media containers
- Wrap CalInlineEmbed in a container with `min-height` to prevent CLS
- Lazy-load below-fold heavy components with `next/dynamic`
- Ensure RotatingText ghost element properly stabilizes height

**Dependencies:** None (can run anytime)

---

### Execution Order

**Parallel-safe groups (can run simultaneously):**
- Group A: Chunks 1, 4, 5, 6, 7 (SEO base + a11y + CSS cleanup)
- Group B: Chunks 11, 12, 13, 14 (independent effects/components)
- Group C: Chunks 15, 16, 18, 19, 21 (independent features)

**Sequential chains:**
- Chunk 1 → Chunk 2 → Chunk 3 (SEO pipeline)
- Chunk 6/7 → Chunk 8 → Chunk 9 → Chunk 10 (scroll engine pipeline)
- Chunk 8 → Chunk 17 (transitions need Lenis)
- Chunk 3 + Chunk 8 → Chunk 20 (FAQ needs JSON-LD + Lenis)

**Recommended order for solo developer:**
1. Chunks 1+4+6 in parallel (quick wins: SEO base + a11y + CSS)
2. Chunks 2+5+7 in parallel (OG images + component a11y + noise/nav)
3. Chunk 3 (JSON-LD)
4. Chunk 8 (Lenis — foundational for everything after)
5. Chunks 9+10+11 in parallel (progress bar + text effects)
6. Chunks 12+13+14 in parallel (visual effects)
7. Chunks 15+16 in parallel (loading states)
8. Chunk 17 (page transitions)
9. Chunks 18+19+21 in parallel (content + perf)
10. Chunk 20 (FAQ + parallax — needs everything)

---

## Continuation Prompt (Chunk 1)

Continue work on Douro Digital at `/mnt/e/Projects/Douro-Digital/`.

**Phase**: build (implementation)
**Feature**: Frontend Polish & UX Overhaul
**Chunk**: 1 of 21 - Base Metadata + Sitemap + Robots

**Scope** (work only on these files):
- `app/layout.tsx`
- `app/(site)/page.tsx`
- `app/sitemap.ts` (NEW)
- `app/robots.ts` (NEW)

**What to Build**:
1. In `app/layout.tsx`: add `metadataBase: new URL("https://dourodigital.com")` to the existing metadata export
2. In `app/(site)/page.tsx`: add explicit `export const metadata` with optimized title ("Douro Digital — AI Agents & Custom Software for Revenue Growth") and description targeting primary keywords
3. Create `app/sitemap.ts`:
   - Import `MetadataRoute` from "next"
   - Import `getAllPosts` from `@/lib/blog` and `caseStudies` from `@/data/case-studies`
   - List all static routes: /, /about, /work, /resources, /book-a-call
   - Map all case studies to /case-studies/[slug]
   - Map all blog posts to /resources/[slug]
   - Set appropriate changeFrequency and priority values
4. Create `app/robots.ts`:
   - Allow all crawlers on all public routes
   - Disallow /admin
   - Reference sitemap URL

**Dependencies**: None

**After Implementation**:
1. Run quality checks: `cd /mnt/e/Projects/Douro-Digital && npx tsc --noEmit`
2. Update CLAUDE.md status: `Chunk 0/21` → `Chunk 1/21`
3. Run /build-checkpoint for next chunk

**Approach**: Read only the files in Scope. Implement what's needed, nothing more.
