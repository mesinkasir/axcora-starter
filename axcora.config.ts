// axcora.config.ts
import { defineConfig } from './src/config/index.js';

export default defineConfig({
  site: {
    title: "Axcora SSG",
    description: "Modern Static Site Generator with TypeScript", 
    url: "https://ssg.axcora.com",
    author: "Axcora Team and Creativitas Dev"
  },
    generator: {
    name: "Axcora SSG",
    version: "1.0.0",
    includeTimestamp: true,
    includeEnvironment: true
    codename: "Lightning",
    build: {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      nodeVersion: process.version,
      features: [
        'TypeScript SSG',
        'CSS Framework', 
        'Theme System',
        'Hot Reload',
        'Component System'
      ]
    },
  build: {
    outDir: "public",
    assetsDir: "assets", 
    minify: process.env.NODE_ENV === 'production',
    sourcemap: process.env.NODE_ENV === 'development'
  },
  
  plugins: [
    '@axcora/image',
    '@axcora/embed'
  ],
  
  // Plugin configurations
  image: {
    formats: ['webp', 'jpeg'],
    sizes: [320, 640, 768, 1024, 1280],
    quality: {
      avif: 50,
      webp: 75,
      jpeg: 85,
      png: 80
    },
    lazy: true,
    placeholder: 'color',
    placeholderColor: '#f3f4f6',
    optimize: true
  },
  
  embed: {
    youtube: {
      lite: true,
      privacy: true,
      autoplay: false
    },
    twitter: {
      theme: 'auto'
    },
    codepen: {
      theme: 'default',
      height: 400
    }
  },

  // Development settings
  dev: {
    host: 'localhost',
    port: 3000,
    open: true,
    hmr: true
  }
});
