# ContainPoint marketing site

**SPCC compliance that stays current, complete, and audit-ready.**

Public marketing site for ContainPoint: positioning, interactive product previews, resources, and lead capture. Built with **Vite** and **React 18**. The production **customer app** lives in `/dashboard`; **internal operator tools** in `/admin`.

![ContainPoint hero](docs/screenshots/hero.png)

---

## What’s on this site

| Route | Purpose |
|-------|---------|
| `/` | Hero, value props, embedded **sample dashboard** mock (interactive audit preview) |
| `/product` | Deep-dive **How it works** flow and **product modules** grid |
| `/pricing` | Plans and packaging |
| `/for-consultants` | Consultant positioning |
| `/book-demo` | Demo request |
| `/resources` | Article index (SEO content) |
| `/resources/:slug` | Individual articles |
| `/pledge` | Pledge / commitment landing |
| `/terms`, `/privacy` | Legal |

---

## Product preview (screenshots)

The **sample dashboard** block on the home page demonstrates inspection status, corrective actions, and audit-oriented UI with dynamic sample data.

![Sample dashboard section](docs/screenshots/sample-dashboard.png)

**How it works** and **product modules** are captured from `/product` (connected workflow narrative + capability overview).

![How it works](docs/screenshots/how-it-works.png)

![Product modules](docs/screenshots/product.png)

---

## Built for

- **Regulated facilities** — Trucking depots, manufacturing, yards, farms, data centers, and similar oil storage sites
- **Environmental consultants** — Multi-site oversight and standardized deliverables
- **Compliance teams** — Inspection discipline, corrective actions, and audit readiness

---

## Tech stack

- **React 18** + TypeScript  
- **Vite**  
- **React Router** v7  
- **Tailwind CSS** v4 (`@tailwindcss/vite`)  
- **Framer Motion**  
- **Recharts** (charts in mocks)  
- **React PDF** (`@react-pdf/renderer`) for downloadable audit pack demos  
- **Vercel Analytics** (`@vercel/analytics`)

---

## Getting started

### Prerequisites

- Node.js **18+**
- npm

### Install and develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build and preview

```bash
npm run build    # runs sitemap generation + tsc + Vite build
npm run preview  # serve production build locally
```

### Sitemap

```bash
npm run generate:sitemap
```

Writes `public/sitemap.xml` from routes and article metadata.

---

## Regenerate README screenshots

The hero and homepage **sample-audit** crop come from `/`. **How it works** and **product** sections are captured from **`/product`** (those sections are not mounted on the home page).

```bash
npm run screenshots
```

This runs a production build, serves **`vite preview` on port 4173**, and saves PNGs under **`docs/screenshots/`** via Playwright (`scripts/capture-screenshots.mjs`).

---

## Deploy (Vercel)

1. Connect the repository and set **Root Directory** to `site` if the repo is a monorepo.  
2. Framework preset: **Vite**.  
3. Environment variable:  
   - **`VITE_FORMSPREE_FORM_ID`** — Formspree form ID for contact/demo forms, if used.

---

## Project structure

```
src/
├── App.tsx              # Routes
├── pages/               # Page components (Home, Product, Pricing, Legal, Blog, …)
├── components/
│   ├── sections/        # Marketing sections (Hero, SampleAudit, HowItWorks, …)
│   ├── dashboard/       # Interactive dashboard mock
│   └── ui/
├── data/                # Sample / article data
├── config/              # Nav and site config
└── main.tsx
scripts/
├── capture-screenshots.mjs
└── generate-sitemap.ts
public/
└── sitemap.xml          # generated at build time
docs/
└── screenshots/         # README / marketing captures
```

---

## Related repos in this workspace

- **`/dashboard`** — Authenticated **ContainPoint** application (Next.js, Prisma, inspections, plan, exports, assistant).  
- **`/admin`** — **Internal** staff console (organizations, facilities, users, audit log, bridge into dashboard).

---

## License

Proprietary. All rights reserved.
