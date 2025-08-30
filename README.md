# Axcora Framework

**All-in-One Static Site Generator & CSS Framework**  
*Build modern, responsive static websites with a complete CSS framework, reusable components, automatic build system, and dark mode support.*

---

Documentation: [https://ssg.axcora.com](https://ssg.axcora.com)

**Support Us**  
- [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JVZVXBC4N9DAN)  
- [Gumroad](https://creativitaz.gumroad.com/coffee)
- [Github](https://github.com/sponsors/mesinkasir)

---

## 🚀 Axcora v1.0 is Here!

---

## 📖 Overview

Axcora helps you create beautiful, high-performance static websites with minimum effort. It combines a static site generator (SSG) and a modular CSS framework into one unified toolkit, with features tailored for developers and designers:

---

## ✨ Why Choose Axcora?

- **Speed:** Output is pure, static HTML & minified CSS—delivered at lightning speed, perfect for global CDNs.
- **Flexibility:** Scale from simple blogs to advanced documentation sites, fully customizable via markdown and YAML.
- **Productivity:** Auto-generated navigation, tags, categories, feeds, and re-usable UI components keep your workflow fast and DRY.
- **No Lock-in:** Uses standard markdown/YAML for content and generates industry-standard HTML/CSS—migrate or deploy anywhere.
- **Modern Development:** Supports blogs, portfolios, doc sites, landing pages, and more.

---

## 🚀 Key Features

- **SEO Automation:**  
  Each page automatically gets meta tags (generator hints, Open Graph), canonical links, sitemap, and RSS feed—no plugin hassle.

- **Built-In Modular CSS Framework:**  
  Design beautiful sites straight from your markdown/YAML using a bundled, component-based CSS framework. No external dependencies required.

- **Component-Based Development:**  
  Use and customize reusable UI components directly from markdown or templates via easy axcora-components.

- **Automatic Markdown Collection:**  
  Markdown files in `content/` are collected and turned into pages, posts, categories, and tags, with URL, slug, and navigation handled automatically.

- **Axcora Templating Engine (.axcora):**  
  Use the special `.axcora` template language supporting layouts, slots, partials, YAML frontmatter, and component inclusion for powerful page structuring.

- **Minified CSS by Page:**  
  CSS is bundled and minified per page for optimal performance and fast CDN delivery.

- **Automatic Sitemap & RSS:**  
  Builds complete `sitemap.xml` and `rss.xml` for search and syndication at every build.

- **Search Index Generation:**  
  Auto-generates a JSON search index for instant, local search—ideal for docs and large blogs.

---

## 📦 Sizes

- **Base:** 15.6KB
- **Essentials:** 19.6KB
- **Minified:** 43.7KB
- **Javacript:** 11.8KB

---

## 🛠 How It Works

1. Drop your content as markdown inside `content/`
2. Control layout and appearance with YAML frontmatter
3. Custom layouts: `.axcora` supports template inheritance, slots, blocks, partials
4. CSS is selected and minified automatically per page
5. Each build auto-generates sitemap, RSS, minified CSS, and search index
6. Each page/post is SEO-optimized with meta tags; easily extendable via plugins

---

## 🚩 Getting Started

### 1. Install & Build

- **Install Axcora Framework:**
  ```bash
  npm install axcora
  ```
- **First Run:**
  ```bash
  npm run build && npm run axcora
  ```
- **Check Version:**
  ```bash
  axcora -version
  ```
- **Create New Project:**
  ```bash
  axcora init myproject
  ```
- **Development Mode:**
  ```bash
  axcora dev
  ```
- **Build for Production:**
  ```bash
  axcora build
  ```
- **Serve Build:**
  ```bash
  axcora start
  ```

> Need Node.js? Download it at [nodejs.org](https://nodejs.org/en/download)

---

### 2. Using the CSS Framework

- **Install via NPM:**
  ```bash
  npm install axcora
  ```
- **Inject from CDN:**
  ```html
  <link href="https://cdn.jsdelivr.net/npm/axcora-css@1.0.1/axcora.min.css" rel="stylesheet"/>
  <script href="https://cdn.jsdelivr.net/npm/axcora-js@1.0.1/axcora.min.js"></script>
  ```

---

## 📚 Documentation & Components

- [📚 View Documentation](https://ssg.axcora/examples/)
- [🎯 Explore Components](https://ssg.axcora/components/)

---

## 🔗 License

See [LICENSE.md] in this repository for details.

---

> For full documentation and live demos, visit the `https://ssg.axcora.com` folder or the official website!

```

**Tips:**
- Fill in the documentation and components URLs as appropriate.
- Add badges (build status, npm version, etc) at the top as needed.
- For best results, include quickstart screenshots or animated GIFs if available.
- All sections are editable—feel free to expand or rearrange based on the audience.

This README balances conciseness, feature highlights, and onboarding instructions in the style typical of modern open source projects.