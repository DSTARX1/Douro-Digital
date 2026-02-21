# Douro Digital

**Phase:** Modular Restructure + Backend Foundation - Chunk 1/3

## Stack
- Next.js 16 App Router, React 19, TypeScript
- GSAP + ScrollTrigger (scroll-pin animations, carousels)
- CSS Modules (no Tailwind)
- MDX blog via @next/mdx + next-mdx-remote
- Cal.com embed for booking

## Structure
- `app/(site)/` — public-facing routes (home, about, work, resources, case-studies, book-a-call)
- `app/(admin)/admin/` — admin panel (placeholder)
- `components/` — shared UI components
- `data/` — static data files
- `lib/` — utilities, blog helpers, contexts
- `content/` — MDX blog posts
- `public/` — static assets (images, fonts, videos)

## Branch
- `copywriting-updates` — restructure + Raw & Real copy integration
