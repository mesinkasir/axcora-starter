aku mendapatkan eror untuk tes starter project ku
```
C:\Users\Creativitas\project\axcora-starter>npm run dev

> axcora-ssg-starter@1.0.1-zeus dev
> axcora dev

node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\Users\Creativitas\project\axcora-starter\node_modules\axcora\dist\cli\dev.js' imported from C:\Users\Creativitas\project\axcora-starter\node_modules\axcora\dist\cli\index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:780:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:704:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:687:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:305:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:137:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///C:/Users/Creativitas/project/axcora-starter/node_modules/axcora/dist/cli/dev.js'
}

Node.js v22.16.0
```
struktur nya
```
PROJECT
│   .gitignore
│   axcora.config.ts
│   LICENSE
│   netlify.toml
│   package.json
│   README.md
│   tsconfig.json
│   vercel.json
│   _cloudflare-pages.yml
│
├───.github
│   └───workflows
│           deploy.yml
│
├───content
│   │   about.md
│   │   blog.md
│   │   categories.md
│   │   index.md
│   │   tags.md
│   │
│   ├───blog
│   │       hello.md
│   │
│   └───_data
│           site.yml
│
├───src
│   ├───components
│   │       axcora-accordion.axc
│   │       axcora-badge.axc
│   │       axcora-blockquote.axc
│   │       axcora-button.axc
│   │       axcora-card.axc
│   │       axcora-carousel.axc
│   │       axcora-glass.axc
│   │       axcora-hero-button.axc
│   │       axcora-hero.axc
│   │       axcora-iframe.axc
│   │       axcora-image-cover.axc
│   │       axcora-image-fluid.axc
│   │       axcora-image-ratio.axc
│   │       axcora-image-thumbnail.axc
│   │       axcora-image.axc
│   │       axcora-modal.axc
│   │       axcora-scrollspy.axc
│   │       axcora-search.axc
│   │       axcora-seo.axc
│   │       axcora-tabs.axc
│   │       axcora-toast.axc
│   │       axcora-video.axc
│   │       axcora-youtube.axc
│   │
│   ├───config
│   │       component-deps.ts
│   │       postinstall-copy-components.ts
│   │
│   └───templates
│       │   404.axcora
│       │   archive.axcora
│       │   categories.axcora
│       │   index.axcora
│       │   page.axcora
│       │   tags.axcora
│       │
│       ├───blog
│       │       list.axcora
│       │       single.axcora
│       │
│       ├───includes
│       │       footer.axcora
│       │       header.axcora
│       │
│       └───layouts
│               base.axcora
│
└───static
    │   favicon.png
    │   logo.jpg
    │
    ├───css
    │   │   axcora-base.css
    │   │
    │   ├───components
    │   │       accordion.css
    │   │       alerts.css
    │   │       axcora-base.css
    │   │       axcora.css
    │   │       axcora.min.css
    │   │       badge.css
    │   │       blockquote.css
    │   │       breadcrumb.css
    │   │       buttons.css
    │   │       cards.css
    │   │       carousel.css
    │   │       codes.css
    │   │       dropdown.css
    │   │       forms.css
    │   │       glass.css
    │   │       hero.css
    │   │       image.css
    │   │       modal.css
    │   │       navbar.css
    │   │       pagination.css
    │   │       scrollspy.css
    │   │       search.css
    │   │       spinner.css
    │   │       table.css
    │   │       tabs.css
    │   │       theme.css
    │   │       toast.css
    │   │       video.css
    │   │
    │   ├───dist
    │   └───themes
    │       ├───brutal
    │       │       theme.css
    │       │
    │       ├───corporate
    │       │       theme.css
    │       │
    │       ├───cyberpunk
    │       │       theme.css
    │       │
    │       ├───dark
    │       │       theme.css
    │       │
    │       ├───essentials
    │       │       theme.css
    │       │
    │       ├───minimal
    │       │       theme.css
    │       │
    │       └───startup
    │               theme.css
    │
    ├───img
    │       logo.jpg
    │
    └───js
        ├───components
        │       accordion.js
        │       axcora.js
        │       axcora.min.js
        │       button.js
        │       carousel.js
        │       dropdown.js
        │       modal.js
        │       navbar.js
        │       scrollspy.js
        │       search.js
        │       tabs.js
        │       theme.js
        │       toast.js
        │       youtube.js
        │
        └───dist
```
dan pada root project ku
project/src
```
├───cli
│       dev.ts
│       index.ts
│
├───components
│   │   Alert.axc
│   │   axcora-accordion.axc
│   │   axcora-badge.axc
│   │   axcora-blockquote.axc
│   │   axcora-button.axc
│   │   axcora-card-2-simple.axc
│   │   axcora-card-2.axc
│   │   axcora-card-3-simple.axc
│   │   axcora-card-3.axc
│   │   axcora-card-simple.axc
│   │   axcora-card.axc
│   │   axcora-carousel.axc
│   │   axcora-glass-2.axc
│   │   axcora-glass-3.axc
│   │   axcora-glass.axc
│   │   axcora-hero-button.axc
│   │   axcora-hero.axc
│   │   axcora-iframe.axc
│   │   axcora-image-contain.axc
│   │   axcora-image-cover.axc
│   │   axcora-image-fluid.axc
│   │   axcora-image-ratio.axc
│   │   axcora-image-responsive.axc
│   │   axcora-image-thumbnail.axc
│   │   axcora-image.axc
│   │   axcora-modal.axc
│   │   axcora-scrollspy.axc
│   │   axcora-search.axc
│   │   axcora-seo.axc
│   │   axcora-tabs.axc
│   │   axcora-toast.axc
│   │   axcora-video.axc
│   │   axcora-youtube.axc
│   │   rss.axc
│   │   sitemap.axc
│   │
│   ├───axcora-accordion
│   │       axcora-accordion.axc
│   │
│   ├───axcora-badge
│   │       axcora-badge.axc
│   │
│   ├───axcora-blockquote
│   │       axcora-blockquote.axc
│   │
│   ├───axcora-button
│   │       axcora-button.axc
│   │
│   ├───axcora-card
│   │       axcora-card.axc
│   │
│   ├───axcora-card-2
│   │       axcora-card-2.axc
│   │
│   ├───axcora-card-2-simple
│   │       axcora-card-2-simple.axc
│   │
│   ├───axcora-card-3
│   │       axcora-card-3.axc
│   │
│   ├───axcora-card-3-simple
│   │       axcora-card-3-simple.axc
│   │
│   ├───axcora-card-simple
│   │       axcora-card-simple.axc
│   │
│   ├───axcora-carousel
│   │       axcora-carousel.axc
│   │
│   ├───axcora-glass
│   │       axcora-glass.axc
│   │
│   ├───axcora-glass-2
│   │       axcora-glass-2.axc
│   │
│   ├───axcora-glass-3
│   │       axcora-glass-3.axc
│   │
│   ├───axcora-hero
│   │       axcora-hero.axc
│   │
│   ├───axcora-hero-button
│   │       axcora-hero-button.axc
│   │
│   ├───axcora-iframe
│   │       axcora-iframe.axc
│   │
│   ├───axcora-image
│   │       axcora-image.axc
│   │
│   ├───axcora-image-contain
│   │       axcora-image-contain.axc
│   │
│   ├───axcora-image-cover
│   │       axcora-image-cover.axc
│   │
│   ├───axcora-image-fluid
│   │       axcora-image-fluid.axc
│   │
│   ├───axcora-image-ratio
│   │       axcora-image-ratio.axc
│   │
│   ├───axcora-image-responsive
│   │       axcora-image-responsive.axc
│   │
│   ├───axcora-image-thumbnail
│   │       axcora-image-thumbnail.axc
│   │
│   ├───axcora-modal
│   │       axcora-modal.axc
│   │
│   ├───axcora-rss
│   │       axcora-rss.axc
│   │
│   ├───axcora-scrollspy
│   │       axcora-scrollspy.axc
│   │
│   ├───axcora-search
│   │       axcora-search.axc
│   │
│   ├───axcora-seo
│   │       axcora-seo.axc
│   │
│   ├───axcora-sitemap
│   │       axcora-sitemap.axc
│   │
│   ├───axcora-tabs
│   │       axcora-tabs.axc
│   │
│   ├───axcora-toast
│   │       axcora-toast.axc
│   │
│   ├───axcora-video
│   │       axcora-video.axc
│   │
│   ├───axcora-youtube
│   │       axcora-youtube.axc
│   │
│   └───package
│       ├───axcora-accordion
│       │       axcora-accordion.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-badge
│       │       axcora-badge.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-blockquote
│       │       axcora-blockquote.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-button
│       │       axcora-button.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-card
│       │       axcora-card.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-card-2
│       │       axcora-card-2.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-card-2-simple
│       │       axcora-card-2-simple.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-card-3
│       │       axcora-card-3.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-card-3-simple
│       │       axcora-card-3-simple.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-card-simple
│       │       axcora-card-simple.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-carousel
│       │       axcora-carousel.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-glass
│       │       axcora-glass.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-glass-2
│       │       axcora-glass-2.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-glass-3
│       │       axcora-glass-3.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-hero
│       │       axcora-hero.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-hero-button
│       │       axcora-hero-button.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-iframe
│       │       axcora-iframe.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image
│       │       axcora-image.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image-contain
│       │       axcora-image-contain.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image-cover
│       │       axcora-image-cover.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image-fluid
│       │       axcora-image-fluid.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image-ratio
│       │       axcora-image-ratio.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image-reponsive
│       │       axcora-image-responsive.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-image-thumbnail
│       │       axcora-image-thumbnail.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-modal
│       │       axcora-modal.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-scrollspy
│       │       axcora-scrollspy.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-search
│       │       axcora-search.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-seo
│       │       axcora-seo.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-tabs
│       │       axcora-tabs.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-toast
│       │       axcora-toast.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-video
│       │       axcora-video.axc
│       │       package.json
│       │       README.md
│       │
│       ├───axcora-youtube
│       │       axcora-youtube.axc
│       │       package.json
│       │       README.md
│       │
│       ├───rss
│       │       axcora-rss.axc
│       │       package.json
│       │       README.md
│       │
│       └───sitemap
│               axcora-sitemap.axc
│               package.json
│               README.md
│
├───config
│       index.ts
│
├───core
│       builder.ts
│       collections.ts
│       component-parser.ts
│       css-bundle-builder.ts
│       engine.ts
│       enhanced-css-loader.ts
│       js-bundle-builder.ts
│       markdown-processor.ts
│       markdown.ts
│       MetaGenerator.ts
│       plugin-manager.ts
│       template-engine.ts
│
├───server
│       dev-server.ts
│       prod-server.ts
│
├───template-engine
│       css-theme-integration.ts
│       template-inheritance.ts
│
├───templates
│   │   404.axcora
│   │   archive.axcora
│   │   categories.axcora
│   │   index.axcora
│   │   install.axcora
│   │   page.axcora
│   │   tags.axcora
│   │
│   ├───blog
│   │       list.axcora
│   │       single.axcora
│   │
│   ├───components
│   │       list.axcora
│   │       single.axcora
│   │
│   ├───includes
│   │       footer.axcora
│   │       header.axcora
│   │
│   ├───layouts
│   │       base.axcora
│   │
│   └───templating
│           list.axcora
│           single.axcora
│
└───types
        component.ts
        plugin.ts
```
sistem kerjanya otomatis membangun dist folder di root project.
jadi system cli copy dulu dari src/cli/dev.ts dan index.ts baru paste ke dist/cli dan bekerja disana, 
struktur/dist/cli
```
dist/cli
    dev.d.ts
    dev.js
    index.d.ts
    index.js
```
kode package json root
```
{
  "name": "axcora",
  "version": "1.0.1-zeus",
  "description": "Modern and Super Light Static Site Generator",
  "bin": {
    "axcora": "dist/cli/index.js"
  },
  "main": "dist/index.js",
  "type": "module",
  "files": [
    "src/config/",
    "static/templates/",
    "README.md",
    "LICENSE"
  ],
  "private": false,
  "workspaces": [
    "src/components/package/*"
  ],
  "scripts": {
    "test-css": "node scripts/test-css-simple.js",
    "build": "npm run build-axcora-css && npm run build-css-pages && tsx src/cli/index.ts build",
    "dev": "node dev-server.cjs",
    "lite": "node dev-lite.cjs",
    "build-lite": "node ./your-build-script.js",
    "start": "tsx src/cli/index.ts start",
    "serve-reload": "browser-sync start --server 'public' --files 'public' --no-ui --reload-delay 200 --reload-debounce 200",
    "axcora:build": "npm run build-axcora-css && npm run build-css-pages && tsx src/cli/index.ts build",
    "axcora:dev": "npm run build && npm run compile && node dist/cli/index.js dev",
    "axcora:start": "npm run compile && npm run build && node dist/cli/index.js start",
    "axcora:smart": "node scripts/smart-cli.js",
    "dev:fresh": "npm run compile && npm run dev",
    "build:fresh": "npm run compile && npm run build",
    "dev:watch": "npm run framework-dev",
    "compile": "tsc --build && node scripts/make-executable.js",
    "link-cli": "npm run compile && npm unlink -g && npm link",
    "install-global": "npm run compile && npm install -g .",
    "axcora": "npm run compile && npm install -g .",
    "test-cli": "node dist/cli/index.js --help",
    "build-css-pages": "node scripts/build-css-pages.js",
    "setup": "npm run compile && npm run build-css",
    "docs": "node scripts/generate-css-docs.js",
    "build-axcora-css": "node scripts/build-axcora-framework.js",
    "build-css": "npm run minify-css",
    "watch-css": "chokidar \"static/css/**/*.css\" -c \"npm run build-axcora-css\"",
    "minify-css": "node scripts/minify-axcora-css.js",
    "minify-js": "node scripts/minify-axcora-js.js",
    "optimize-css": "npm run build-axcora-css && npm run minify-css",
    "css-stats": "node scripts/css-statistics.js",
    "css-validate": "stylelint \"static/css/**/*.css\"",
    "css-fix": "stylelint \"static/css/**/*.css\" --fix",
    "css-purge": "node scripts/purge-unused-css.js",
    "framework-build": "npm run build-axcora-css && npm run optimize-css",
    "framework-dev": "npm run watch-css & npm run dev",
    "framework-setup": "npm run compile && npm run framework-build",
    "framework-docs": "npm run framework-build && node scripts/generate-complete-docs.js",
    "complete-build": "npm run compile && npm run framework-build && npm run build",
    "complete-dev": "npm run framework-dev",
    "complete-setup": "npm run framework-setup && npm run setup",
    "complete-test": "npm run css-validate && npm run test-all && npm run framework-test"
  },
  "keywords": [
    "static-site-generator",
    "blog",
    "typescript",
    "markdown",
    "css",
    "framework",
    "modern",
    "responsive",
    "mobile-first",
    "dark-theme",
    "glassmorphism",
    "beautiful",
    "fast",
    "accessible",
    "ssg",
    "templating",
    "complete-solution",
    "axcora-framework"
  ],
  "repository": {
    "type": "git",
    "url": "git://github.com/axcora/axcorassg.git"
  },
  "author": {
    "name": "Axcora Team",
    "email": "axcora@gmail.com",
    "url": "https://ssg.axcora.com/"
  },
  "license": "MIT",
  "engines": {
    "node": ">=20.0.0"
  },
  "dependencies": {
    "autoprefixer": "^10.4.21",
    "axcora-accordion": "^1.0.0",
    "axcora-button": "^1.0.0",
    "axcora-theme-cyberpunk": "^1.0.0",
    "axcora-theme-essentials": "^1.0.0",
    "chalk": "^5.3.0",
    "chokidar": "^3.6.0",
    "clean-css": "^5.3.3",
    "commander": "^12.1.0",
    "cssnano": "^7.1.0",
    "express": "^4.21.2",
    "fs-extra": "^11.3.1",
    "gray-matter": "^4.0.3",
    "handlebars": "^4.7.8",
    "js-yaml": "^4.1.0",
    "marked": "^12.0.2",
    "open": "^10.2.0",
    "postcss": "^8.5.6",
    "terser": "^5.43.1",
    "tsx": "^4.19.2",
    "ws": "^8.18.3"
  },
  "devDependencies": {
    "@types/clean-css": "^4.2.11",
    "@types/commander": "^2.12.0",
    "@types/express": "^5.0.0",
    "@types/fs-extra": "^11.0.4",
    "@types/js-yaml": "^4.0.9",
    "@types/marked": "^5.0.2",
    "@types/node": "^20.11.0",
    "browser-sync": "^3.0.4",
    "chokidar-cli": "^3.0.0",
    "glob": "^11.0.3",
    "stylelint": "^15.11.0",
    "tsx": "^4.7.0",
    "typescript": "^5.3.3",
    "uglify-js": "^3.19.3"
  },
  "axcora": {
    "framework": {
      "version": "1.0.0",
      "components": 22,
      "features": [
        "Modern 2025 Design",
        "Dark Theme Built-in",
        "Mobile-First Responsive",
        "Glassmorphism Effects",
        "Performance Optimized",
        "Accessibility Ready"
      ]
    }
  }
}

```
package json starter project
```
{
  "name": "axcora-ssg-starter",
  "version": "1.0.1-zeus",
  "description": "Starter template for Axcora Static Site Generator including default config, templates, and sample content.",
  "keywords": [
    "axcora",
    "ssg",
    "static-site-generator",
    "starter",
    "template",
    "markdown",
    "blog"
  ],
  "author": "Axcora Team <axcora@gmail.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/axcora/axcorassg"
  },
  "files": [
    "src/",
    "content/",
    "static/",
    "README.md",
    "axcora.config.ts",
    "netlify.toml",
    "vercel.json",
    "tsconfig.json",
    "LICENSE"
  ],
  "dependencies": {
    "axcora": "^1.0.1-zeus",
    "axcora-accordion": "^1.0.0",
    "axcora-badge": "^1.0.0",
    "axcora-blockquote": "^1.0.0",
    "axcora-button": "^1.0.0",
    "axcora-card": "^1.0.0",
    "axcora-carousel": "^1.0.0",
    "axcora-css": "^1.0.0",
    "axcora-glass": "^1.0.0",
    "axcora-hero": "^1.0.0",
    "axcora-hero-button": "^1.0.0",
    "axcora-iframe": "^1.0.0",
    "axcora-image": "^1.0.0",
    "axcora-image-cover": "^1.0.0",
    "axcora-image-fluid": "^1.0.0",
    "axcora-image-ratio": "^1.0.0",
    "axcora-image-thumbnail": "^1.0.0",
    "axcora-js": "^1.0.0",
    "axcora-modal": "^1.0.0",
    "axcora-scrollspy": "^1.0.0",
    "axcora-search": "^1.0.0",
    "axcora-seo": "^1.0.0",
    "axcora-tabs": "^1.0.0",
    "axcora-theme-brutal": "^1.0.0",
    "axcora-theme-corporate": "^1.0.0",
    "axcora-theme-cyberpunk": "^1.0.0",
    "axcora-theme-dark": "^1.0.0",
    "axcora-theme-essentials": "^1.0.0",
    "axcora-theme-minimal": "^1.0.0",
    "axcora-theme-startup": "^1.0.0",
    "axcora-toast": "^1.0.0",
    "axcora-video": "^1.0.0",
    "axcora-youtube": "^1.0.0"
  },
  "engines": {
    "node": ">=20.0.0"
  },
  "scripts": {
    "postinstall": "tsx src/config/postinstall-copy-components.ts",
    "dev": "axcora dev",
    "build": "axcora build",
    "start": "axcora start"
  },
  "devDependencies": {
    "tsx": "^4.20.5"
  }
}

```
jika aku install npm i axcora kemungkinan bisa dijalankan misal `axcora dev`
Kamu ingin aku share kode mana,untuk membantu mu fix masalah ini. terima kasih