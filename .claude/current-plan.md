## Plan Checkpoint: Modular Restructure + Backend Foundation

### Overview
Move the Next.js app from the nested `Douro Digital Agency/` subdirectory to the repo root, add Drizzle ORM + Railway Postgres, build a self-hosted analytics system, and create a CMS admin panel for quick content edits. Designed to expand into agentic services later.

### Target Architecture
```
Vercel (free)              Railway ($5/month)
┌──────────────────┐       ┌──────────────┐
│  Next.js App      │       │  Postgres    │
│  - (site) pages   │──────▶│  - analytics │
│  - (admin) panel  │       │  - cms data  │
│  - /api routes    │       │              │
└──────────────────┘       └──────────────┘
```

### Packages to Install (Chunk 2)
```bash
npm i drizzle-orm pg
npm i -D drizzle-kit @types/pg
```

### Research Findings

**Drizzle DB client** (from drizzle docs):
```typescript
// lib/db.ts
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production',
  }
});
```

**Drizzle config** (from drizzle docs):
```typescript
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

**Schema pattern** (analytics + content):
```typescript
// lib/schema.ts
import { pgTable, serial, text, varchar, timestamp, integer, jsonb } from 'drizzle-orm/pg-core';

// Analytics
export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  path: varchar('path', { length: 512 }).notNull(),
  referrer: varchar('referrer', { length: 1024 }),
  utmSource: varchar('utm_source', { length: 256 }),
  utmMedium: varchar('utm_medium', { length: 256 }),
  utmCampaign: varchar('utm_campaign', { length: 256 }),
  country: varchar('country', { length: 2 }),
  device: varchar('device', { length: 32 }),
  browser: varchar('browser', { length: 64 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// CMS content
export const contentBlocks = pgTable('content_blocks', {
  id: serial('id').primaryKey(),
  key: varchar('key', { length: 128 }).notNull().unique(),
  value: jsonb('value').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

**Next.js API route pattern** (App Router):
```typescript
// app/api/track/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { pageViews } from '@/lib/schema';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { path, referrer, utmSource, utmMedium, utmCampaign } = body;

  const userAgent = request.headers.get('user-agent') ?? '';
  const country = request.headers.get('x-vercel-ip-country') ?? '';
  const device = /mobile/i.test(userAgent) ? 'mobile' : 'desktop';

  await db.insert(pageViews).values({
    path,
    referrer,
    utmSource,
    utmMedium,
    utmCampaign,
    country,
    device,
    browser: userAgent.slice(0, 64),
  });

  return NextResponse.json({ ok: true });
}
```

**Gotchas:**
- Railway Postgres uses `DATABASE_URL` (private networking) and `DATABASE_PUBLIC_URL` (external access from Vercel). Use `DATABASE_PUBLIC_URL` in Vercel env vars.
- Drizzle with node-postgres (`pg`) works on Vercel serverless. No special adapter needed.
- For admin auth: simple middleware check against env var `ADMIN_PASSWORD` is enough for 4 people.
- When moving files with `git mv`, do it in one commit to preserve history.
- Route groups `(site)` and `(admin)` don't affect URLs — purely organizational.
- The `(site)` layout gets navbar/footer/animations. The `(admin)` layout gets a clean admin shell.

---

### Chunks

#### Chunk 1: Repo Restructure + Route Groups (parallel-safe: no)
**Files to move/create:**
- Everything inside `Douro Digital Agency/` → repo root
- `app/(site)/` — wrap all existing public pages
- `app/(admin)/admin/` — placeholder for admin panel
- `app/api/` — placeholder for API routes
- `lib/` — new shared utilities directory (absorb `_lib/`)
- `.env.example` — document required env vars
- Merge `.gitignore` files (root + app level)
- Update `CLAUDE.md` (remove "App root: Douro Digital Agency/", update stack info)

**What to build:**
1. `git mv` all files from `Douro Digital Agency/` to repo root (one commit, preserves history)
2. Move all page routes (`about/`, `work/`, `case-studies/`, `resources/`, `book-a-call/`, `page.tsx`) into `app/(site)/`
3. Create `app/(site)/layout.tsx` — moves navbar, footer, GSAP, audio context, custom cursor from root layout
4. Simplify `app/layout.tsx` to bare-bones: html, body, fonts, globals.css
5. Create `app/(admin)/admin/page.tsx` — placeholder "Admin Dashboard" page
6. Create `app/(admin)/layout.tsx` — minimal admin shell (no animations, no site chrome)
7. Move `app/_lib/*` to `lib/` and update imports
8. Move `app/_data/*` to `data/` and update imports
9. Move `app/_components/*` to `components/` and update imports
10. Move `app/_contexts/*` to `lib/contexts/` and update imports
11. Create `.env.example` with `DATABASE_URL=` placeholder
12. Merge the two `.gitignore` files
13. Update all `@/app/_components` → `@/components`, `@/app/_data` → `@/data`, etc. in imports
14. Update `tsconfig.json` paths if needed
15. Verify `npm run build` passes

**Dependencies:** None — this is the foundation everything else builds on.

---

#### Chunk 2: Database + Analytics System (parallel-safe: no)
**Files:**
- `lib/db.ts` — Drizzle connection client
- `lib/schema.ts` — pageViews + contentBlocks tables
- `drizzle.config.ts` — migration config
- `drizzle/` — generated migration files
- `app/api/track/route.ts` — POST endpoint for page view tracking
- `components/Analytics.tsx` — client component that fires tracking beacon on navigation
- `app/(admin)/layout.tsx` — admin layout with auth gate
- `app/(admin)/admin/page.tsx` — admin dashboard home
- `app/(admin)/admin/analytics/page.tsx` — analytics dashboard
- `lib/auth.ts` — simple admin auth (env var password check)

**What to build:**
1. Install packages: `npm i drizzle-orm pg && npm i -D drizzle-kit @types/pg`
2. Create `lib/db.ts` with Drizzle connection (use research code above)
3. Create `lib/schema.ts` with pageViews + contentBlocks tables
4. Create `drizzle.config.ts`
5. Run `npx drizzle-kit push` to sync schema with Railway Postgres
6. Create `/api/track` POST route — receives page view data, inserts into DB
7. Create `<Analytics />` client component — fires beacon on route change via `usePathname()` + `useSearchParams()`
8. Add `<Analytics />` to root layout
9. Create `lib/auth.ts` — simple password check middleware
10. Create admin layout with auth gate (cookie-based session after password entry)
11. Create analytics dashboard page — server component that queries DB, renders: top pages, referrers, UTM breakdown, devices, countries, visits over time
12. Verify build

**Dependencies:** Chunk 1 (repo must be restructured). Also requires Railway Postgres to be provisioned and `DATABASE_URL` in `.env.local`.

---

#### Chunk 3: CMS Admin Panel (parallel-safe: no)
**Files:**
- `app/api/content/route.ts` — GET/PUT content blocks
- `app/(admin)/admin/content/page.tsx` — content listing page
- `app/(admin)/admin/content/[key]/page.tsx` — content editor for a specific block
- `lib/content.ts` — content helper (get/set, fallback to static data)
- `scripts/seed-content.ts` — one-time script to migrate static data into DB

**What to build:**
1. Create content API routes (GET list, GET by key, PUT to update)
2. Create `lib/content.ts` helper — reads from DB with fallback to static `data/*.ts` files
3. Create content listing page showing all editable content blocks grouped by section (hero, team, about, etc.)
4. Create content editor page with form fields appropriate to each block type
5. Create seed script that reads existing `data/*.ts` exports and populates contentBlocks table
6. Update key components to use `lib/content.ts` instead of direct data imports (start with: team bios, hero text, about intro, footer description)
7. Verify build + test edit → save → verify on site

**Dependencies:** Chunk 2 (database must be set up)

---

### Execution Order
1. **Chunk 1** — Repo restructure (must be first)
2. **Chunk 2** — Database + Analytics (after restructure + Railway Postgres provisioned)
3. **Chunk 3** — CMS Admin (after database is live)

All sequential. No parallel execution possible.

### Pre-Chunk 2 Requirement
Before starting Chunk 2, the user needs to:
1. Create a Railway project with Postgres
2. Get the `DATABASE_PUBLIC_URL` connection string
3. Add it to `.env.local` as `DATABASE_URL`
