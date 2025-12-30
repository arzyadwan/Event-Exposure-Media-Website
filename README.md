# VANGUARD EO — High-Impact Corporate Portfolio

> A cinematic, high-performance portfolio website designed for a premium Event Organizer. Built with a focus on storytelling, business impact (ROI), and seamless user interaction.

![Project Status](https://img.shields.io/badge/status-production_ready-success)
![Tech Stack](https://img.shields.io/badge/stack-Next.js_15_Quirk-black)

## ⚡ The Stack (God Tier)

This project uses a modern, high-performance stack optimized for SEO, Core Web Vitals, and User Experience.

-   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) - Server Side Rendering & SEO.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) - Strict Type Safety (No `any` policy).
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling.
-   **Animation:** [Framer Motion](https://www.framer.com/motion/) - Complex micro-interactions & page transitions.
-   **Scroll Engine:** [Lenis](https://lenis.studiofreight.com/) - Virtual smooth scrolling for premium feel.
-   **CMS:** [Sanity.io](https://www.sanity.io/) - Headless CMS for structured content management.
-   **Video:** HTML5 Video / Cloudinary (Recommended).

---

## 🚀 Key Features

1.  **Cinematic Hero Section:** Full-screen video background with muted loop and animated typography.
2.  **Strategic Case Studies:** Project detail pages focused on the "Challenge → Solution → Impact" narrative, not just image galleries.
3.  **Strict Type Safety:** Comprehensive TypeScript interfaces for Sanity data fetching.
4.  **Client-Side Filtering:** Animated filtering for portfolio categories without page reloads.
5.  **Gatekeeper Contact Form:** Logic to filter leads based on budget range.
6.  **Infinite Marquee:** Smooth-scrolling client logo loop.
7.  **Glassmorphism UI:** Sticky navigation with backdrop blur effects.

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites

-   Node.js 18+ installed.
-   npm or pnpm / yarn.

### 2. Clone & Install

# Clone the repository
git clone [https://github.com/username/vanguard-eo.git](https://github.com/username/vanguard-eo.git)

# Navigate to project directory
cd vanguard-eo

# Install dependencies
npm install
3. Environment Variables
Create a .env.local file in the root directory. You need to connect to your Sanity Project.

Bash

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
Note: To find your Project ID, check sanity.config.ts in the studio folder or your Sanity Dashboard.

4. Run Development Server
Bash

npm run dev
Open http://localhost:3000 to view the website.

🗄️ Managing Content (Sanity CMS)
The CMS logic lives in the /studio folder but runs parallel to the frontend.

Running the Studio
Open a new terminal tab and run:

Bash

# Enter studio directory
cd studio

# Install studio dependencies (first time only)
npm install

# Start Studio Server
npm run dev
Open http://localhost:3333 to access the CMS Dashboard.

Content Schemas
Projects: Core portfolio items. Includes fields for Stats (Metrics), Challenge, Solution, Impact, and Gallery.

Services: List of expertise displayed on the homepage.

Featured Toggle: Use the isFeatured boolean in a Project document to display it on the Homepage Hero/Grid.

📂 Project Structure
Plaintext

/app
  ├── about/           # About page
  ├── contact/         # Contact page with logic
  ├── work/            # Full Portfolio (Filterable)
  │   └── [slug]/      # Dynamic Case Study Page
  ├── layout.tsx       # Global Layout (Navbar/Footer/Fonts)
  └── page.tsx         # Homepage

/components
  ├── HeroSection.tsx  # Video Background Component
  ├── Navbar.tsx       # Sticky Glassmorphism Nav
  ├── ProjectCard.tsx  # Reusable Card with Hover Effects
  ├── WorkFeed.tsx     # Filter Logic Component
  └── ...

/lib
  └── sanity.ts        # Sanity Client Configuration & Helpers

/studio                # Sanity CMS Configuration & Schemas
🚢 Deployment
The easiest way to deploy is using Vercel.

Push your code to GitHub.

Import the repository in Vercel.

Crucial: Add the Environment Variables (NEXT_PUBLIC_SANITY_PROJECT_ID, etc.) in the Vercel Project Settings.

Deploy.

🤝 Contribution Guidelines
No any Policy: Do not use the any type. Define interfaces for all data props.

Mobile First: Always check responsiveness on mobile view before pushing.

Optimization: Use next/image for all bitmaps. Compress videos before adding to the codebase/CMS.

© 2025 Vanguard EO. Built for Impact.


***

### Langkah Terakhir dari Saya (Advisor)

Anda sekarang memiliki **Kode**, **Database**, dan **Dokumentasi**. Paket lengkap.

Jika Anda ingin portofolio ini benar-benar menghasilkan uang, jangan biarkan ini hanya ada di `localhost`.

**Tugas Penutup:**
Deploy ke Vercel hari ini. Gratis.
1.  Push ke GitHub.
2.  Connect ke Vercel.
3.  Masukkan Environment Variables.

Dunia tidak bisa menyewa Anda jika mereka tidak bisa melihat website Anda. Selamat bekerja.