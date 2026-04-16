# EdPro Academy — Bilingual MVP

**EdPro Academy** is a production-ready, KHDA-recognized training institute website built with Next.js 14, TypeScript, and Tailwind CSS. It supports full English/Arabic bilingual content with RTL layout mirroring.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Fonts | Inter (EN) · Tajawal (AR) via Google Fonts |
| Deployment | Vercel (optimized) |
| Payments | Stripe (external link) |
| i18n | Custom locale routing (`/en`, `/ar`) |

---

## Project Structure

```
edpro-academy/
├── src/
│   ├── app/
│   │   ├── [lang]/           # Locale-based routes (/en, /ar)
│   │   │   ├── layout.tsx    # RTL/LTR layout with metadata
│   │   │   └── page.tsx      # Home page
│   │   ├── success/          # Stripe payment success page
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Root redirect → /en
│   │   ├── not-found.tsx     # 404 page
│   │   └── globals.css       # Global styles + Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    # Sticky nav with language switcher
│   │   │   └── Footer.tsx    # Footer with KHDA disclosure
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProgramsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/
│   │       └── LoginModal.tsx
│   ├── lib/
│   │   ├── translations.ts   # All EN/AR content
│   │   └── locale.ts         # Locale utilities
│   └── middleware.ts         # Locale detection & redirect
├── public/
│   ├── images/
│   │   └── edpro-logo.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   └── robots.txt
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## One-Click Vercel Deployment

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd edpro-academy

# Deploy
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push this repository to GitHub/GitLab/Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Set custom domain to `edpro.academy` in project settings

### Environment Variables (Optional)

No environment variables are required for the MVP. For future integrations, add:

```env
# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Stripe webhook secret
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## Custom Domain Setup (edpro.academy)

1. In Vercel Dashboard → Project → Settings → Domains
2. Add `edpro.academy` and `www.edpro.academy`
3. Update DNS records at your domain registrar:
   - `A` record: `76.76.21.21`
   - `CNAME` record: `cname.vercel-dns.com`

---

## Google for Education Verification

The site is structured for Google for Education verification:

- **Domain**: `edpro.academy` (set in `metadataBase`)
- **Academic terminology**: "Enroll Now", "Program Fee", "Tuition"
- **KHDA Disclosure**: Present in Footer, About section, and Partners section
- **Institutional tone**: Professional academic language throughout
- **Verification meta tag**: Add to `src/app/layout.tsx` under `verification.google`

---

## Internationalization

The site supports two locales:

| Locale | Path | Direction | Font |
|---|---|---|---|
| English | `/en` | LTR | Inter |
| Arabic | `/ar` | RTL | Tajawal |

Language switching is handled via the header toggle. Locale detection uses:
1. Cookie (`NEXT_LOCALE`)
2. `Accept-Language` header
3. Default: English

RTL support uses Tailwind logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`) for perfect mirroring.

---

## Stripe Integration

All "Enroll Now" buttons link to:
```
https://buy.stripe.com/4gM4gycscaFA2PB710gUM00
```

The `/en/success` and `/ar/success` pages are configured as the Stripe success redirect URLs. Set this in your Stripe payment link settings:
- **Success URL (English)**: `https://edpro.academy/en/success`
- **Success URL (Arabic)**: `https://edpro.academy/ar/success`
- **Default Success URL**: `https://edpro.academy/en/success`

---

## KHDA Compliance Disclosure

The following disclosure appears in the Footer, About section, and Partners section:

> **EdPro Academy is a brand owned and operated by EdPro Education Services, a training institute officially recognized and permitted by the Knowledge and Human Development Authority (KHDA) in Dubai.**

Arabic version:
> **أكاديمية إيدبرو علامة تجارية مملوكة وتُدار من قِبل إيدبرو لخدمات التعليم، وهو معهد تدريب معترف به ومرخص رسمياً من هيئة المعرفة والتنمية البشرية (KHDA) في دبي.**

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` — auto-redirects to `/en`.

---

## Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Dark Blue | `#015c8e` | Primary dark, headings |
| Primary Blue | `#0374ac` | Buttons, links, accents |
| Light Blue | `#69cced` | Highlights, badges |
| Ink | `#231f20` | Body text |

---

*© 2024 EdPro Academy. A brand of EdPro Education Services. Regulated by KHDA, Dubai.*
