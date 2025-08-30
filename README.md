# Axcora Framework

[![npm version](https://img.shields.io/npm/v/axcora.svg?style=flat-square)](https://npmjs.com/package/axcora)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Support](https://img.shields.io/badge/Support-Donate-blue)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JVZVXBC4N9DAN)

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
npm install axcora
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
npm install axcora
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

## 🙌 Support This Project

- [Donate via Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JVZVXBC4N9DAN)  
- [Sponsor on Github](https://github.com/sponsors/mesinkasir)
- [Coffee/Gumroad](https://creativitaz.gumroad.com/coffee)

---

## 🔗 License

This project is licensed under the [MIT License](LICENSE).

---

> Built & maintained by **Axcora Tech** — fast, scalable, and open source static site tooling for creators, developers, and teams.
