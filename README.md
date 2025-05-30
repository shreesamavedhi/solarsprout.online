# SolarSprout Documentation Site

A modern documentation and blog site built with Jekyll. Used to showcase all work of Solar Sprout.

🌐 **Live site:** [https://solarsprout.online](https://solarsprout.online)

## Quick Setup

```bash
# Prerequisites: Ruby and Jekyll installed
git clone https://github.com/shreesamavedhi/solarsprout.online.git
cd solarsprout.online
bundle install
bundle exec jekyll serve
```

🔍 View locally at: `http://localhost:4000`

## Site Structure

```
solarsprout.online/
├── _includes/     # Reusable HTML components
├── _layouts/     # Page templates
├── _plugins/     # Custom Jekyll plugins
├── _posts/       # Blog post markdown files
├── _sass/        # Sass stylesheets
├── assets/       # Static assets (images, JS, CSS, music, videos)
└── pages/        # Standalone page markdown files
```

## Key Components

### _includes

Reusable HTML components for layouts and pages.

| Component | Purpose |
|-----------|----------|
| `audio-player.html` | Custom audio player with playback controls |
| `critical-css.html` | Inlined CSS for performance |
| `head.html` | Meta tags and stylesheet links |
| `optimized-image.html` | Responsive images with lazy loading |
| `portfolio-item.html` | Portfolio item template |
| `quick-links.html` | Quick navigation component |
| `scripts.html` | JavaScript includes and inline scripts |

Usage: `{% include component-name.html param="value" %}`

### _layouts

HTML templates that wrap around content.

| Layout | Purpose |
|--------|----------|
| `default.html` | Base layout with common structure |
| `home.html` | Homepage with hero sections |
| `page.html` | Basic content pages |
| `post.html` | Blog posts with metadata |
| `portfolio.html` | Portfolio items grid/gallery |
| `category.html` | Category archive pages |
| `tag.html` | Tag archive pages |

Usage in front matter:
```yaml
---
layout: post
title: My Blog Post
---
```

### _sass

Sass partials compiled into the main CSS file.

```
_sass/
├── main.scss               # Main entry point
├── _variables.scss        # Colors, fonts, spacing variables
├── _mixins.scss           # Reusable mixins
│
├── # Page styles
├── _home.scss             # Homepage styles
├── _blog.scss             # Blog page styles
├── _portfolio.scss        # Portfolio styles
├── _about.scss            # About page styles
│
├── # Component styles
├── _image-optimizations.scss
├── _gallery.scss
│
└── # Base styles
  ├── _animations.scss     # Global animations
  ├── _minima-base.scss    # Base styles
  └── _minima-syntax-highlighting.scss
```

### assets

Static files organized by type.

```
assets/
├── css/      # Compiled CSS files
├── js/       # JavaScript files
├── images/   # Image assets
├── music/    # Audio files for audio-player
└── videos/   # Video assets
```

Reference in templates: `{{ site.baseurl }}/assets/path/to/file`

### _plugins

Custom Jekyll extensions:

| Plugin | Purpose |
|--------|----------|
| `category_pages.rb` | Auto-generates category archive pages |
| `tag_generator.rb` | Auto-generates tag archive pages |

### _posts

Blog posts in Markdown format with YAML front matter.

**File naming**: `YYYY-MM-DD-title-with-hyphens.md`

**Required front matter**:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [category1, category2]
tags: [tag1, tag2, tag3]
author: Author Name
image: /assets/images/posts/featured-image.jpg
---
```

### pages

Standalone site pages (not date-based).

| Page | Purpose |
|------|----------|
| `about.md` | Site and creator information |
| `blog.md` | Main blog listing page |
| `portfolio.md` | Portfolio items display |

## Best Practices

* 🔥 **Performance**: Optimize assets for web delivery
* 🎨 **Organization**: Use descriptive filenames
* 💼 **Caching**: Consider CDN-hosted libraries when appropriate
* 📰 **Size**: Minimize asset number and size

## Important Note

⚠️ This is a personal website maintained solely by the owner. It is not open for external contributions, pull requests, or collaborations. All content and code are maintained for personal use and demonstration purposes only.
