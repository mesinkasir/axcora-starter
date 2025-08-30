---
title: About Axcora
description: Modern static site generator built with TypeScript for fast, scalable websites
layout: page
---
### About Axcora

Axcora is designed for developers who want a **simple yet powerful** static site generator. Built with modern technologies and focused on **developer experience**.

### Why Choose Axcora?

- **Zero Configuration** - Works out of the box
- **TypeScript Native** - Full type safety
- **Hot Reload** - Instant development feedback
- **SEO Optimized** - Built-in best practices

### Features

### ⚡ Lightning Fast
Pre-built pages load instantly with optimized assets.

### 🔧 Developer Friendly
Built with TypeScript, includes hot reload, and has simple configuration.

### 📱 Mobile First
Responsive and accessible by default with modern CSS.

### 🎨 Flexible Templates
Custom `.axcora` templates with powerful templating engine.

## Getting Started

1. Create your content in Markdown
2. Organize in collections (folders)
3. Customize templates
4. Build and deploy

**Axcora** is an **all-in-one static site generator and CSS framework** designed to maximize developer productivity and site performance. With its fast, instant setup and modular approach, Axcora allows you to generate collections simply by creating folders and Markdown files—new content is instantly processed and published without manual configuration.

### Core Features

- **Rapid Collection Generation:**  
  Just create a new folder and add your Markdown files; Axcora automatically builds your collection for fast, seamless updates. This minimizes friction in creating new pages or collections for blogs, documentation, portfolios, or landing pages[2][5].

- **Component-Driven Architecture:**  
  Axcora puts emphasis on modular components. You can select only the CSS and JS components you need for each page, each article, or each theme. This leads to smaller, faster builds, as unnecessary code is excluded and assets are minified per-page and per-theme automatically[1][3].

- **Flexible Themes and Components:**  
  Choose from a variety of style themes:
  - **brutal**
  - **corporate**
  - **cyberpunk**
  - **dark**
  - **essentials**
  - **minimal**
  - **startup**

  And use only the components you need:
  - **CSS Components:** accordion, badge, blockquote, breadcrumb, buttons, cards, carousel, dropdown, forms, glass, hero, images, modal, navbar, pagination, scrollspy, search, spinner, table, tabs, toast, video
  - **JS Components:** accordion, button, carousel, dropdown, modal, navbar, search, tabs, theme (dark/light mode), toast, youtube-lite

  For a comprehensive set, simply use the `axcora` bundle for CSS or JS.

### Example Implementation

You can define theming and components in your template frontmatter:

```yaml
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
---
```

Then build out dynamic content:
```html
<header class="hero container">
  <div class="hero-content">
    <h1>
      <a href="{{url}}" class="text-white">{{ name }}</a>
    </h1>
    <p class="lead">{{ description }}</p>
  </div>
</header>
<main class="container">
  <div class="row">
    {{#each posts}}
      <div class="col-md-6 col-lg-4 mb-4">
        <article class="card p-1">
          {{#if category}}
            <span class="ms-2">
              <a href="/categories/{{ category | slugify }}/" class="btn btn-info">{{ category }}</a>
            </span>
          {{/if}}
          {{#if image}}
            <a href="{{url}}">
              {% axcora-image src="{{image or site.image}}" alt="{{title}}" /%}
            </a>
          {{/if}}
          <div class="card-body">
            <h2><a href="{{ url }}">{{ title }}</a></h2>
            <p>{{ description }}</p>
            <time>{{ date | formatDate }}</time>
            {{#if tags.length}}
              <div class="tags">{{ tags | joinTags }}</div>
            {{/if}}
          </div>
          <a href="{{ url }}" class="btn btn-primary">Read {{ title }} →</a>
        </article>
      </div>
    {{/each}}
  </div>
</main>
```

**Per-Page/Article Customization:**  
Each Markdown or content file supports its own theme, CSS/JS components, meta information, and layouts:

```yaml
---
title: "Example"
date: "2025-08-14"
tags: 
 - axcora example
 - example axcora templating
category: "templating"
description: "Complete Example Axcora Templating"
image: "/img/logo.jpg"
css:
  theme: 'essentials'
  components:
    - buttons
    - navbar
    - hero
    - pagination
    - image
js:
  - navbar
  - theme
---
```
Axcora will **auto-generate and minify CSS/JS** specifically for every article and theme as defined—making individual builds highly optimized.

### Building & Deployment

After configuring your templates and content, generate your site in production mode:

```sh
npm install axcora
npm run build
npm run axcora
axcora --version
axcora --help
axcora dev
axcora build
```
Publish the generated `public` folder to your hosting or CDN for a blazingly fast website.

---

**Conclusion:**  
Axcora streamlines static site development for modern needs—automatic collection generation, instant theming, per-page modular assets, and Minified output. With built-in CSS/JS framework and a component-friendly approach, you can build lightweight, scalable, and maintainable sites with minimal effort—empowering both developers and content creators for high-performance results.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>