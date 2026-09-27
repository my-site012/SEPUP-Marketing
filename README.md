# Step Up Marketing — Production Next.js Website

A production-ready Next.js website implementation converted directly from the Google Stitch design specification for **Step Up Marketing**.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Google Stitch design tokens
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & Google Material Symbols Outlined
- **Images**: Next.js Image optimization with Google CDN remote patterns
- **SEO**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph, Twitter Cards, and JSON-LD schema markup (`Organization`, `WebSite`, `ProfessionalService`)

---

## 📁 Architecture & File Structure

```text
/
├── app/
│   ├── layout.tsx         # Root layout with typography, icons, metadata & OpenGraph
│   ├── page.tsx           # Assembled Landing Page matching Stitch design exactly
│   ├── robots.ts          # SEO: robots.txt generator
│   └── sitemap.ts         # SEO: sitemap.xml generator
├── components/
│   ├── Header.tsx         # Sticky navigation, brand logo, direct call link, consultation CTA
│   ├── MobileMenu.tsx     # Accessible slide-over drawer for tablet & mobile viewports
│   ├── Hero.tsx           # Ambient glow, badge, headline, glass floating cards
│   ├── TrustBar.tsx       # 5-point proof/retention stats strip with dividers
│   ├── AboutSection.tsx   # Positioning copy, high-impact photo, metrics sub-panels
│   ├── ServiceCard.tsx    # Reusable service card with badge, icon & hover transitions
│   ├── ServicesGrid.tsx   # 8-card core services matrix
│   ├── IndustryCard.tsx   # Reusable industry vertical card with image & overlay
│   ├── IndustriesGrid.tsx # 4-column visual verticals + sector micro-strip
│   ├── ProcessSection.tsx # 4-stage engineered growth workflow (01 to 04)
│   ├── PortfolioCard.tsx  # Editorial case study card with telemetry metrics
│   ├── PortfolioGrid.tsx  # Selected work editorial case studies
│   ├── MetricsSection.tsx # High-contrast dark banner with 6 executive telemetry stats
│   ├── WhyUsSection.tsx   # The Step Up Advantage 4-pillar differentiator cards
│   ├── TestimonialCard.tsx# Reusable testimonial card with star ratings & monogram avatar
│   ├── Testimonials.tsx   # Executive feedback section
│   ├── CTASection.tsx     # High-impact gradient conversion banner
│   ├── ContactForm.tsx    # Interactive lead consultation form with client validation
│   ├── ContactSection.tsx # Direct lines, global innovation centers, certifications & form
│   └── Footer.tsx         # 5-column navigation footer + legal and policy links
├── lib/
│   ├── constants.ts       # Structured content data for services, industries, cases, metrics
│   ├── metadata.ts        # SEO OpenGraph, JSON-LD Schema markup generator
│   └── utils.ts           # Class merge helper
├── public/
│   └── icon.svg           # Brand favicon icon
├── styles/
│   └── globals.css        # Material symbols styling, custom animations, base layers
├── tailwind.config.ts     # Precise Stitch design tokens (colors, font sizes, radiuses)
├── tsconfig.json
└── package.json
```

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```
