# Build prompt — Hale Garage Door Repair Service

## The business (REAL facts — never invent, never placeholder)

| | |
|---|---|
| Name | Hale Garage Door Repair Service |
| Domain | `halegaragedoorrepairservice.site` |
| Phone | (602) 899-2451 — `tel:+16028992451` |
| Category | Garage Door Services |
| Address | 16815 E Shea Blvd, Fountain Hills, AZ 85268 |
| Email | contact@halegaragedoorrepairservice.site |
| Hours | Sunday–Friday 7:00 AM – 8:00 PM; **Saturday 8:00 AM – 5:00 PM** |
| Service area | Fountain Hills, Scottsdale, Rio Verde, Cave Creek, north-east Maricopa County AZ |

These are **real** contact details, not the 555-01XX fictions some sibling sites carry.
So: `robots.ts` **allows** indexing, there is no `docs/PRE-LAUNCH.md` guard, and
`SITE_URL` is `https://halegaragedoorrepairservice.site` — never a localhost port.

> **The split Saturday is the one fact most easily lost.** Hale is the only site in this
> batch whose hours are not one block across seven days. The footer, the contact page
> hours table and the JSON-LD `openingHoursSpecification` must each carry **two** entries
> — Sun–Fri 07:00–20:00 and Sat 08:00–17:00. Model the hours as an array from the start;
> a single opens/closes pair will quietly render Saturday wrong in three places.

## Design direction — desert editorial

Hale must not resemble any sibling site. Its own look:

- **Palette** — sand `#F0E6D8` paper, deep bronze `#4A3728` ink, terracotta `#C4633F`
  accent, sage `#7D8B74` secondary. Warm and dry, never blue.
- **Type** — Outfit (geometric, 500/600/700) for headings, Karla (400/500) for body.
  Large display headings, low contrast against the sand ground.
- **Layout** — editorial split. Alternating left/right image-and-text rows with wide
  gutters, an overlapping offset on the hero image, and pull-quote blocks between
  sections. Rounded 16px corners throughout.
- **Cards** — sand-tinted, no border, 16px radius, terracotta icon chip top-left.
  Heat-and-sun framing throughout (sun-baked panels, dry-rotted weather seal, heat-warped
  tracks), never cold or snow.

## Routes (exactly five, no more)

`/`, `/about`, `/services`, `/contact`, `/privacy` — declared once in `lib/routes.ts` and
read by the nav, the footer and `app/sitemap.ts`.

## Sections

- **Home** — Hero, trust strip (hours / licensed / local), Services grid (6), Why Hale,
  photo gallery band, Map, CTA.
- **About** — banner, story, approach (3 steps), gallery, CTA.
- **Services** — banner, intro, 6 service cards with real copy, FAQ accordion (6 Q&A), CTA.
- **Contact** — banner, NAP block + hours table (**show Saturday separately**), contact
  form (non-submitting; static export has no server — wire it to `mailto:` or mark it
  clearly), map.
- **Privacy** — plain prose privacy policy naming the real business and email.

The six services: spring replacement, opener repair & install, cable and drum repair,
off-track door realignment, panel and section replacement, and weather-seal and roller
tune-ups. Write real, specific copy — symptoms a homeowner notices in Arizona heat, what
the fix involves.

## Images

29 real photographs are already at `public/images/`, described in
`public/images/manifest.json`:

- `wide-01..10.webp` — landscape. Heroes, banners, wide bands.
- `tall-01..16.webp` — portrait. Cards, gallery tiles, split-layout columns.
- `square-01..03.webp` — square. Spot images.

**Look at the images before placing them** — they are unlabelled, and a door-panel
close-up does not work as a full-bleed hero. Every `<img>` needs real `alt` text
describing that photo, plus explicit `width`/`height` from the manifest so nothing
shifts on load. Use `loading="lazy"` below the fold.

## Stack and constraints

- Next.js 15 App Router, TypeScript, Tailwind v4 via `@tailwindcss/postcss`.
- `next.config.ts`: `output: 'export'`, `images: { unoptimized: true }`,
  `trailingSlash: true`.
- `app/robots.ts` and `app/sitemap.ts` each need `export const dynamic = "force-static"`
  or the export build fails.
- npm, not pnpm. Commit `package-lock.json` — CI runs `npm ci`.
- Dev port **3113** (`next dev -p 3113`). 3100–3112 are taken by sibling sites.
- No route handlers, no `'use server'`, no `middleware.ts`, no `cookies()`/`headers()`.
  The deploy target is a directory of static files.

## Map

The address is real, so embed it by address query rather than by coordinates:
`https://www.google.com/maps?q=<url-encoded address>&z=15&output=embed`, in a lazy
`<iframe>` with a `title`. Add a "Get directions" link to
`https://www.google.com/maps/dir/?api=1&destination=<url-encoded address>`.

## Structured data

One `LocalBusiness` JSON-LD block in `app/layout.tsx`, derived from the facts module —
name, phone, email, `address`, `url`, `areaServed`, and an
`openingHoursSpecification` **array of two entries** (Sun–Fri 07:00–20:00, Sat
08:00–17:00). **No `aggregateRating` and no `review`** — there are no real reviews, and
inventing them is both a lie and a Google penalty.

## Done means

`npm run build` exports `out/` with five pages plus `404.html`, `sitemap.xml` and
`robots.txt`; `grep -rl "localhost:3" out/` finds nothing; Saturday's 8–5 appears
correctly in the footer, the contact hours table and the JSON-LD; every page has a unique
title, meta description and canonical; and the site is responsive at 390 / 768 / 1440.
