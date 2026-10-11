# Avijit Dagur — Premium Developer Portfolio

A modern developer portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Engineered with sharp rectangular architecture, high-contrast typography, interactive horizontal showcases, and data-driven content.

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Verify Production Build
```bash
npm run build
```

---

## 🎨 Architectural Highlights

1. **Hero Section:**
   - Real photo placement on the **LEFT** in a framed rectangular card with corner accent brackets and ambient glow.
   - Genuine profile introduction on the **RIGHT** on desktop, responsive stacking on mobile.
   - Headline: *“Building Digital Experiences That Matter.”*
   - Honest representation as a Computer Science and Engineering student pursuing B.Tech at Swami Vivekananda University.
   - Clean action buttons (*Explore My Work*, *Get In Touch*, *Resume Placeholder*) and real social links.

2. **Featured Projects (Continuous Horizontal Carousel):**
   - Seamless, non-jumping horizontal carousel running continuously from **LEFT to RIGHT**.
   - Features **Digital Panchayat Portal**, **Ztag**, and **MoneyTrack**.
   - Includes manual Play/Pause toggle, left/right navigational arrow controls, pause on hover/touch, and responsive card sizing.
   - Individual fallback vector art if screenshots are pending.

3. **Technical Capabilities (Two-Row Dual Animated Marquee):**
   - **Row 1:** Continuously moves **LEFT to RIGHT** (C, Java, DSA, JavaScript, HTML, CSS, Java Spring Boot, Node.js).
   - **Row 2:** Continuously moves **RIGHT to LEFT** (React, Next.js, MySQL, Oracle Database, MongoDB, Supabase, Git, GitHub, Postman).
   - Crisp SVG icons for all 17 technologies without fake percentage bars.

4. **Education Pathway:**
   - **B.Tech in Computer Science and Engineering** (Swami Vivekananda University, Currently Pursuing).
   - **Diploma in Computer Science and Engineering** (Brainware University, Completed in 2025).
   - Structured photo panels for campus photography with fallback SVG placeholders.

---

## 🖼️ Replacing Image Assets

Drop your real image files into the following paths in `public/assets/` to automatically replace placeholders:

| Asset | Path | Fallback Placeholder |
| :--- | :--- | :--- |
| **Professional Portrait** | `public/assets/avatar.jpg` | `public/assets/avatar-placeholder.svg` |
| **Panchayat Portal Preview** | `public/assets/projects/panchayat-preview.jpg` | `public/assets/projects/panchayat-preview.svg` |
| **Ztag PWA Preview** | `public/assets/projects/ztag-preview.jpg` | `public/assets/projects/ztag-preview.svg` |
| **MoneyTrack Preview** | `public/assets/projects/moneytrack-preview.jpg` | `public/assets/projects/moneytrack-preview.svg` |
| **Swami Vivekananda University** | `public/assets/svu-campus.jpg` | `public/assets/svu-campus-placeholder.svg` |
| **Brainware University** | `public/assets/brainware-campus.jpg` | `public/assets/brainware-campus-placeholder.svg` |

---

## ⚙️ Updating Profile Data & Links

All profile data, links, dates, and project descriptions can be edited in:
[`src/data/portfolioData.ts`](file:///c:/Users/User/OneDrive/Desktop/PortFolio/src/data/portfolioData.ts)
