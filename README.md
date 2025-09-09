# Axcora Framework

[![npm version](https://img.shields.io/npm/v/axcora.svg?style=flat-square)](https://npmjs.com/package/axcora)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Support](https://img.shields.io/badge/Support-Donate-blue)](https://www.paypal.com/paypalme/creativitas)

> **All-in-One Static Site Generator & CSS Framework**  
> Build modern, responsive static sites with a powerful build system, reusable UI components, auto-SEO, and built-in dark mode—all in one toolkit.

---

## 🌐 Documentation

- 📚 [Official Docs](https://ssg.axcora.com)
- 🧩 [Component Library](https://ssg.axcora.com/components)

---

## ✨ Overview

**Axcora** is a full-featured toolkit to build beautiful, lightweight, high-grade static websites easily. 
Combine a next-gen static site generator (Markdown/YAML/templating) with a modular CSS framework and rich UI component library — ideal for blogs, docs, portfolios, or any modern web project.

---

## 🚀 Key Features

- **Automatic Static Site Generation:**  
  Every markdown file in the `content/` directory becomes a fully linked page, blog post, tag, and category, with slugs and navigation auto-generated.

- **Modular Templating with `.axcora`:**  
  Use `.axcora` templates, layouts, partials, blocks, slots, and frontmatter for flexible, composable, DRY page structures.

- **Built-in CSS Framework:**  
  No third-party CSS required: comes bundled with modern, minified CSS for every component, dark mode, utility classes, and responsive layouts, powered by Axcora.

- **Automatic, Page-Level SEO:**  
  Meta tags, Open Graph, canonical links, sitemaps and RSS are built for you, every build—no plugin or config needed.

- **Per-Page CSS Minification:**  
  CSS is bundled and minified by page for ultra-fast CDN delivery.

- **Lightning-fast Search Index:**  
  Creates a full-text JSON index for blazing-fast, local search.

- **Ready for Any Hosting:**  
  Deploy to Netlify, Vercel, GitHub Pages, Cloudflare — any static host.

---

## 🏁 Getting Started

### 1. Installation

Requires **Node.js v20+**

Quick Start

```bash
npm install -g axcora
axcora -V
axcora init myproject
cd myproject
npm install
axcora dev
open localhost:3000
axcora build
upload your public folder in to your host
axcora serve
```

### 2. Initialize and Build

```bash
npx axcora init myproject
cd myproject
npm install
npm run build
```

### 3. Start Development Server

```bash
axcora dev
or
npm run dev
```

Open your browser at `http://localhost:8080` (default) to preview.

### 4. Build for Production

```bash
axcora build
or
npm run build
```

### 5. Serve Production Build

```bash
axcora serve 
or 
npm start
```

---

## 🎨 Using the CSS Framework

**Via NPM:**
```bash
npm install axcora             # bundle ssg + css
npm install axcora-css         # install css components only
```

**Or inject via CDN:**  
```html
<link href="https://cdn.jsdelivr.net/npm/axcora-css@1.0.1/axcora.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/axcora-js@1.0.1/axcora.min.js"></script>
```

---

## 📂 Example Project Structure

```
myproject/
├── content/
│   ├── index.md
│   └── blog/
├── src/
│   └── templates/
├── static/
│   └── img/
├── axcora.config.ts
└── package.json
```

---

## 📦 Bundle Sizes

- **Base:** 15.6 KB
- **Essentials:** 19.6 KB
- **Minified:** 43.7 KB
- **JavaScript:** 11.8 KB

---

## 🧩 Using Components in Markdown & Templating

Axcora enables **per-page component usage** via frontmatter in your markdown and `.axcora` template layouts. The build system will analyze your needs and automatically bundle and minify only the CSS and JS you specify—resulting in highly optimized, modern static sites.

### Markdown Article Example

```markdown
---
title: "Blockquote"
date: "2025-08-22"
tags: 
  - blockquote
  - blockquote axcora
  - blockquote components
category: "components"
description: "How to use blockquote component"
image: "/img/ax-1.jpg"
css:
  theme: 'essentials'
  components:
    - buttons
    - navbar
    - blockquote
    - hero
    - breadcrumb
    - pagination
    - image
    - cards
js:
  - navbar
  - theme
---
The **Blockquote component** in Axcora SSG provides a visually appealing way to display quotations, statements, or testimonials, allowing emphasis and proper attribution for quoted material within both templates and article content.

> “This is a sample blockquote. Use it to highlight important content, testimonials, or citations.”
```

- **What happens?**  
  - Only listed CSS components and JS modules will be included for this page.
  - Axcora generates optimized, minified CSS/JS based on this configuration.
  - You can use blockquotes and other components directly in your markdown content, taking advantage of the imported styles and logic.

---

### Axcora Templating Example (`.axcora`)

Frontmatter and template code (`src/templates/blog/single.axcora`):

```axcora
---
layouts: base
css:
  theme: 'essentials'
  components:
    - buttons
    - navbar
    - badge
    - hero
    - breadcrumb
    - pagination
    - cards
js:
  - navbar
  - theme
---
<header class="hero container content-start mb-3">
  <div class="hero-content">
    <h1>
      <a href="{{url}}" class="text-white text-decoration-none">{{ name }}</a>
    </h1>
    <p class="lead text-muted">{{ description }}</p>
  </div>
</header>

<!-- Usage in template (example): -->
<blockquote class="axcora-blockquote">
  <p>{{ quote }}</p>
  <footer>{{ author }}</footer>
</blockquote>
```

- **What happens?**  
  - Each template can define its own CSS/JS needs in its frontmatter.
  - When rendered, the page will include only the selected CSS components and JavaScript for optimal performance.
  - Use all Axcora UI elements (e.g. blockquote, badges, buttons) directly in your layouts, inheriting from the theme and components you specify.

---

### 💡 **Why Component-Level Import?**

- **Ultra-fast builds & loads:** No global bloated CSS—only what’s needed, per-page.
- **Modular:** Easily control which features or UI parts are available on each page or template.
- **Productivity:** Organize content, structure, and appearance via frontmatter and templates without ever editing raw CSS or JS!

---

For a full list of available components and layout examples, [see the documentation](https://ssg.axcora.com/components/).

---

**Tip:**  
When you add or remove components in `css.components` or `js`, the build output will automatically change to include only those assets—making your site lighter and faster.

---

## 🧱 Ready-to-Use Axcora Components

Axcora ships with a growing library of elegant, production-ready UI components.  
You can use these components directly inside your markdown articles **and** `.axcora` templates using simple, readable tags. The build system will collect and render them as semantic HTML with the appropriate CSS and JS automatically applied.

### Example: Using Components in Markdown & Templates

**Button Component**
```markdown
{% axcora-button text="Click Me" href="/" color="primary" /%}
```

**Accordion Component**
```markdown
{% axcora-accordion 
    id="demo"
    title1="Axcora Accordion"
    text1="hello world lorem ipsum dolor"
    title2="Axcora Accordion 2"
    text2="hello world lorem ipsum dolor 2"
    title3="Axcora Accordion 3"
    text3="hello world lorem ipsum dolor 3"
/%}
```

You can use these tags inside your `.md` content or `.axcora` templates.  
**Each component tag will be rendered into styled HTML and only the required CSS/JS will be included in the final build.**

---

### 🔥 Popular Components

- `{% axcora-button %}` – Stylish buttons with color, link, and icon support.
- `{% axcora-accordion %}` – Expandable/collapsible content areas.
- `{% axcora-badge %}` – Highlighted badges for status and info.
- `{% axcora-blockquote %}` – Attractive blockquotes/testimonials.
- `{% axcora-hero %}` – Large visual “hero” sections for splash headlines.
- `{% axcora-card %}` – Cards for content, images, and feature boxes.
- `{% axcora-navbar %}` – Responsive page navigation.
- `{% axcora-tabs %}` – Tabbed content switching.
- `{% axcora-toast %}` – Toast/notification messages.
- `{% axcora-image %}` – Responsive images.

…and many more!

---

### 🚀 **How It Works**

1. **Add components in your markdown or `.axcora` template** using their respective tags and desired attributes.
2. **Declare the required components in your frontmatter** under `css.components` and `js` (see previous section), or set them globally in your layout.
3. **Axcora SSG automatically renders the component HTML and bundles/minifies only the CSS/JS you use** for each page.

---

> For a full list of available components, usage options, and demos, see the [Axcora Components Documentation](https://ssg.axcora.com/components/).

---

This makes building advanced, modular static sites fast, intuitive, and fully customizable—no manual JavaScript or CSS imports needed. Use components where you want them, and enjoy optimal performance by design.

---

## 🎨 Theme Your Site: Flexible Built-in Themes

Axcora ships with a suite of vibrant, production-ready CSS themes you can choose and swap at any time—whether you love minimalist, brutalist, corporate, or neon cyberpunk vibes.

**Just specify your preferred theme in your frontmatter or template:**

```yaml
css:
  theme: "essentials"    # Pick from: essentials, brutal, corporate, cyberpunk, dark, minimal, startup
```

### **Available Themes**
| Theme      | Description                    |
| ---------- | ----------------------------- |
| `essentials` | Clean, modern, accessible UI – default “sane” look for blogs, docs, all-purpose |
| `brutal`     | Bold, thick lines & neon gradient—90s brutalist & fun, great for creative sites |
| `corporate`  | Flat, pro, business/classic – ideal for company portals or portfolios           |
| `cyberpunk`  | Neon, glowing, synthwave gradients – inspired by the digital future             |
| `dark`       | Universal dark mode — great for night reading and moody aesthetics              |
| `minimal`    | Ultra-clean, understated, reader-first layouts – focus on content               |
| `startup`    | Stylish, colorful, and dynamic – perfect for landing pages, projects            |


### **How To Use Themes**

In your Markdown or `.axcora` template frontmatter:

```yaml
css:
  theme: "cyberpunk"
  components:
    - buttons
    - blockquote
    - navbar
```

Or swap it any time to:

```yaml
css:
  theme: "minimal"
```

Axcora will **automatically import and optimize** the right theme styles and variables for you.

---

### **How to Install Extra Themes (Optional)**

All official themes are available as individual packages:

- `axcora-theme-essentials`
- `axcora-theme-brutal`
- `axcora-theme-corporate`
- `axcora-theme-cyberpunk`
- `axcora-theme-dark`
- `axcora-theme-minimal`
- `axcora-theme-startup`

Install just the one(s) you need:

```bash
npm install axcora-theme-cyberpunk
npm install axcora-theme-brutal
```

**Or install all to explore:**

```bash
npm install axcora-theme-essentials axcora-theme-brutal axcora-theme-corporate axcora-theme-cyberpunk axcora-theme-dark axcora-theme-minimal axcora-theme-startup
```

---

### **Preview Theme Variables**
Each theme offers its own palette and font/spacing system—here’s a quick peek on how they feel:

- **Essentials:** Modern, balanced variables for backgrounds, primary/secondary colors, muted states, alert programs, global spacing, border radius, and responsive text—optimized for dark/light.
- **Brutal:** Strong color contrasts, boxy radiuses, neon highlights and heavy outlines for creative impact.
- **Cyberpunk:** Bright gradients, glowing borders, neon fonts and backgrounds, dark digital mood.
- **Minimal:** White background, nearly monochrome text, minimalist subtle shadows and muted accents.
- **Dark:** Readable, low-fatigue backgrounds and text, universal dark mode experience.
- **Corporate:** Office-inspired, classic styling, flat color blocks and understated detail.
- **Startup:** Vibrant, fresh, colorful, full of modern design energy.

---

### **Example: Switch Theme Per Page**
Want a wild cyberpunk homepage but a minimal docs section?  
Just pick a theme per file:

```yaml
---
css:
  theme: "cyberpunk"
---
```
and
```yaml
---
css:
  theme: "minimal"
---
```
**Mix, match, override!**

---

💡 **Tip:** All of these themes are fully compatible with the Axcora component system and support both light and dark mode (where available).

---

_Easily set your brand or project style—no more fiddling with config or hand-written CSS. Just pick your theme and build!_

---

## 🙌 Support This Project

- [Donate via Paypal](https://www.paypal.com/paypalme/creativitas)  
- [Sponsor on Github](https://github.com/sponsors/mesinkasir)
- [Coffee/Gumroad](https://creativitaz.gumroad.com/coffee)

---

## 🔗 License

This project is licensed under the [MIT License](LICENSE).

---

> Built & maintained by **Axcora Tech** — fast, scalable, and open source static site tooling for creators, developers, and teams.
