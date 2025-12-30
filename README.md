# VANGUARD EO — High-Impact Corporate Portfolio

A cinematic, high-performance portfolio website for a premium **Event Organizer**, built with a strong focus on storytelling, measurable business impact (ROI), and seamless user experience.

![Project Status](https://img.shields.io/badge/status-production_ready-success)
![Tech Stack](https://img.shields.io/badge/stack-Next.js_15-black)

---

## Overview

This project is designed as a **conversion-oriented corporate portfolio**, not a decorative showcase.
Every section is engineered to communicate credibility, capability, and results.

Key goals:

* Strong first impression through cinematic visuals
* Clear “Challenge → Solution → Impact” storytelling
* High SEO score and excellent Core Web Vitals
* Lead qualification before contact

---

## Tech Stack

This project uses a modern, performance-first stack optimized for SEO, scalability, and maintainability.

* **Framework:** Next.js 15 (App Router) — Server-Side Rendering & SEO
* **Language:** TypeScript — strict type safety (no `any` policy)
* **Styling:** Tailwind CSS — utility-first, consistent design system
* **Animation:** Framer Motion — micro-interactions and page transitions
* **Scroll Engine:** Lenis — smooth virtual scrolling
* **CMS:** Sanity.io — headless, structured content management
* **Media:** HTML5 Video / Cloudinary (recommended)

---

## Key Features

1. **Cinematic Hero Section**
   Full-screen video background with muted loop and animated typography.

2. **Strategic Case Studies**
   Dedicated project pages using the *Challenge → Solution → Impact* framework.

3. **Strict Type Safety**
   Fully typed Sanity queries and data models.

4. **Client-Side Portfolio Filtering**
   Animated category filters without page reloads.

5. **Gatekeeper Contact Form**
   Lead filtering based on predefined budget ranges.

6. **Infinite Client Marquee**
   Smooth, looping logo carousel.

7. **Glassmorphism Navigation**
   Sticky navbar with backdrop blur for a premium look.

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm, pnpm, or yarn

---

### Installation

```bash
# Clone the repository
git clone https://github.com/username/vanguard-eo.git

# Navigate to the project directory
cd vanguard-eo

# Install dependencies
npm install
```

---

### Environment Variables

Create a `.env.local` file in the root directory.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

To find your **Project ID**, check `sanity.config.ts` in the `/studio` folder or your Sanity dashboard.

---

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Content Management (Sanity CMS)

The CMS runs independently from the frontend and lives in the `/studio` directory.

### Run Sanity Studio

```bash
cd studio
npm install   # first time only
npm run dev
```

Open `http://localhost:3333` to access the Sanity Studio dashboard.

---

### Content Schemas

* **Projects**
  Core portfolio entries with:

  * Challenge
  * Solution
  * Impact
  * Metrics / Stats
  * Gallery

* **Services**
  Expertise and offerings displayed on the homepage.

* **Featured Projects**
  Use the `isFeatured` boolean to highlight projects on the homepage.

---

## Project Structure

```plaintext
/app
  ├── about/           # About page
  ├── contact/         # Contact page with lead logic
  ├── work/            # Full portfolio (filterable)
  │   └── [slug]/      # Dynamic case study page
  ├── layout.tsx       # Global layout (navbar, footer, fonts)
  └── page.tsx         # Homepage

/components
  ├── HeroSection.tsx
  ├── Navbar.tsx
  ├── ProjectCard.tsx
  ├── WorkFeed.tsx
  └── ...

/lib
  └── sanity.ts        # Sanity client & helpers

/studio                # Sanity CMS schemas & configuration
```

---

## Deployment

The recommended deployment platform is **Vercel**.

Steps:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Add all required environment variables in Vercel project settings
4. Deploy

---

## Contribution Guidelines

* **No `any` Policy**
  All data must be typed explicitly.

* **Mobile-First**
  Always test responsiveness before pushing changes.

* **Performance First**

  * Use `next/image` for all images
  * Compress videos before uploading

---

## Final Note

You already have the **code**, **CMS**, and **documentation**.
The only thing left is exposure.

If this portfolio stays on `localhost`, it produces exactly zero value.

Deploy it. Today.

---

© 2025 Vanguard EO
Built for impact, not decoration.
