# Koustav Mondal — Developer Portfolio

> Modern, minimal, high-performance developer portfolio built with **Next.js 15, React 19, TypeScript, Tailwind CSS, and Lucide Icons**, based on the **Obsidian Precision** design system.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive website.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🖼️ How to Add Your Photo

1. Place your portrait or photo file inside:
   ```
   c:\Programming\Projects\Portfolio 1.0\public\images\avatar.jpg
   ```
   *(Supports `.jpg` or `.png`. If you use `.png`, update the extension in [Hero.tsx](file:///c:/Programming/Projects/Portfolio%201.0/components/Hero.tsx#L96)).*
2. The website will automatically render your photo with styled rounded corners and dark border framing! If no image is provided, it gracefully falls back to your stylish monogram initials `KM`.

---

## ⚡ Interactive Features

- **Live Kolkata (IST) Clock**: Real-time updating local clock in India Standard Time with availability indicator.
- **Click-to-Copy Email Card**: Copies `koustavmondal9641@gmail.com` with one click and triggers a celebratory confetti burst.
- **Categorized Visual Tech Stack**: High-density branded SVG logo grid organized by Languages, Frontend, Backend, and DevOps.
- **Project Filter Tabs**: Seamlessly filter between *All*, *AI & Full-Stack*, *MERN Stack*, *Java & SQL*, and *Hardware / IoT*.
- **Responsive Navigation**: Sticky frosted glass navbar with active section anchors and mobile drawer menu.
- **Centralized Data Model**: Easily update resume details, projects, or credentials inside [portfolioData.ts](file:///c:/Programming/Projects/Portfolio%201.0/data/portfolioData.ts).

---

## 📂 Architecture

```
Portfolio 1.0/
├── app/
│   ├── layout.tsx         # Google Fonts (Geist, Inter, JetBrains Mono) & metadata
│   ├── page.tsx           # Assembled interactive sections
│   └── globals.css        # Dark mode variables & custom scrollbar
├── components/
│   ├── Navbar.tsx         # Frosted glass navbar with live status & mobile menu
│   ├── Hero.tsx           # Asymmetric hero, IST clock & avatar slot
│   ├── TechStack.tsx      # 4-category branded SVG icon matrix
│   ├── TechIcons.tsx      # High-definition brand SVG icons
│   ├── Projects.tsx       # Filterable project showcase cards
│   ├── Education.tsx      # Academic background & certifications
│   ├── Contact.tsx        # Click-to-copy email with confetti celebration
│   └── Footer.tsx         # Minimal footer with back-to-top button
├── data/
│   └── portfolioData.ts   # Centralized data model
├── design-system/
│   └── design-system.md   # Stitch Obsidian Precision design system
└── public/
    └── images/            # Asset folder for personal photo
```
