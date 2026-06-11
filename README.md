# TNF Group Website

Modern landing page for T&N Financial Group (Vietnam).

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion (via CSS animations)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Select **Next.js** preset — Vercel auto-detects it
4. Click **Deploy**

No environment variables required.

## Deploy on GitHub Pages (optional)

Add `output: 'export'` to `next.config.ts` and run `npm run build`.

## Structure

```
app/
  components/
    LanguageContext.tsx   # VI/EN bilingual context
    useInView.ts         # Scroll animation hook
    Navbar.tsx           # Sticky nav with lang switcher
    Hero.tsx             # Full-screen hero section
    About.tsx            # Company overview + values
    Services.tsx         # 6-service grid (dark bg)
    Disclosure.tsx       # Financial reports / charter / announcements
    Contact.tsx          # Contact form + info
    Footer.tsx           # Links + address
  globals.css
  layout.tsx
  page.tsx
```

## Brand Colors
- Primary Purple: `#4d3a95`
- Gold accent: `#c8a45a`
- Navy dark: `#0d0a2e`
