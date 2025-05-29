# SolarSprout Documentation Site

A modern documentation and blog site built with Jekyll, focusing on documentation and blog functionality with a style similar to Jekyll Origin theme.

Visit the site live at [https://solarsprout.online](https://solarsprout.online)

## Setup

1. Install Ruby and Jekyll
2. Clone this repository
3. Run `bundle install`
4. Run `bundle exec jekyll serve`

Visit `http://localhost:4000` to view the site locally.

## Site Structure and Components

### Directory Structure

- `/_includes/` - Reusable HTML components
- `/_layouts/` - Page templates
- `/_plugins/` - Custom Jekyll plugins
- `/_posts/` - Blog posts
- `/_sass/` - Sass stylesheets
- `/assets/` - Static assets (images, JS, CSS, music, videos)
- `/pages/` - Standalone pages

## Detailed Component Documentation

### _includes Directory

This directory contains reusable HTML components that are included in layouts and pages throughout the site.

#### Components

- **audio-player.html**: Custom audio player component for embedding music tracks with playback controls.
- **critical-css.html**: Contains critical CSS that is inlined in the head of the document to improve page load performance.
- **head.html**: Contains meta tags and links to stylesheets that appear in the `<head>` section of each page.
- **optimized-image.html**: Template for rendering optimized responsive images with lazy loading capabilities.
- **portfolio-item.html**: Template for rendering individual portfolio items in a consistent format.
- **quick-links.html**: Navigation component for quick access to important sections of the site.
- **scripts.html**: Contains JavaScript includes and inline scripts that are added at the end of each page.

#### Usage

These components are included in templates using the Liquid include tag:

```liquid
{% include head.html %}
{% include optimized-image.html src="path/to/image.jpg" alt="Description" %}
```

### _layouts Directory

This directory contains the HTML templates that wrap around your content. Layouts are chosen in the front matter of each page or post.

#### Available Layouts

- **default.html**: The base layout that all other layouts inherit from. Contains the HTML structure, header, footer, and includes necessary scripts and styles.
- **home.html**: Layout for the homepage, featuring hero sections and featured content.
- **page.html**: A simple layout for basic content pages.
- **post.html**: Layout for blog posts, includes metadata display, author information, and related posts.
- **portfolio.html**: Layout for displaying portfolio items in a grid or gallery format.
- **category.html**: Layout for category archive pages, displaying all posts in a specific category.
- **tag.html**: Layout for tag archive pages, displaying all posts with a specific tag.

#### Usage

Layouts are specified in the front matter of pages and posts:

```yaml
---
layout: post
title: My Blog Post
---
```

#### Inheritance

Layouts can inherit from other layouts using the `layout` parameter in their front matter. For example, most layouts inherit from the `default` layout to maintain consistent site structure.

### _sass Directory

This directory contains Sass partials that are compiled into the main CSS file for the site. The Jekyll site uses Sass for more maintainable and modular styling.

#### Structure

- **main.scss**: The main entry point that imports all other Sass partials.
- **custom.scss**: Custom styles that override or extend the base styles.
- **_variables.scss**: Contains site-wide variables for colors, fonts, spacing, etc.
- **_mixins.scss**: Reusable Sass mixins for common CSS patterns.

#### Page-Specific Styles

- **_home.scss** & **_home_animations.scss**: Styles and animations for the homepage.
- **_blog.scss** & **_blog_animations.scss**: Styles and animations for blog pages.
- **_portfolio.scss** & **_portfolio_animations.scss**: Styles and animations for portfolio pages.
- **_about.scss** & **_about_animations.scss**: Styles and animations for the about page.

#### Component Styles

- **_image-optimizations.scss**: Styles for optimized and responsive images.
- **_gallery.scss**: Styles for image galleries and grids.

#### Base Styles

- **_minima-base.scss**: Base styles inherited from the Minima theme.
- **_minima-layout.scss**: Layout styles inherited from the Minima theme.
- **_minima-syntax-highlighting.scss**: Syntax highlighting styles for code blocks.
- **_animations.scss**: Global animation definitions used throughout the site.

### assets Directory

This directory contains all static assets used throughout the site, organized into subdirectories by type.

#### Structure

- **/css**: Contains compiled CSS files and any other CSS assets that don't need preprocessing.
- **/js**: Contains JavaScript files for client-side functionality, including image-optimization.js for lazy loading.
- **/images**: Contains all image assets used throughout the site.
- **/music**: Contains audio files used with the audio-player component.
- **/videos**: Contains video assets used throughout the site.

#### Usage

Assets are referenced in templates using the `{{ site.baseurl }}` Liquid tag:

```liquid
<img src="{{ site.baseurl }}/assets/images/logo.png" alt="Logo">
<script src="{{ site.baseurl }}/assets/js/image-optimization.js"></script>
```

### _plugins Directory

This directory contains custom Jekyll plugins that extend the functionality of your site.

#### Available Plugins

- **category_pages.rb**: Automatically generates category archive pages for blog posts.
- **tag_generator.rb**: Automatically generates tag archive pages for blog posts.

#### How These Plugins Work

These plugins collect all categories and tags used across posts and create corresponding archive pages using the category.html and tag.html layouts.

### _posts Directory

This directory contains all blog posts for the SolarSprout site. Posts are written in Markdown format with YAML front matter.

#### File Naming Convention

Posts must follow the Jekyll naming convention:
```
YYYY-MM-DD-title-with-hyphens.md
```

#### Front Matter

Each post requires YAML front matter at the beginning of the file:

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

#### Content

After the front matter, write your post content in Markdown format. You can include formatted text, links, images, code blocks, blockquotes, and lists. You can also use Liquid tags and includes within your posts.

### pages Directory

This directory contains standalone pages for the SolarSprout site. Unlike posts, these pages are not date-based and represent the main sections of the website.

#### Available Pages

- **about.md**: Information about the site, its purpose, and its creator.
- **blog.md**: The main blog listing page that displays all posts in chronological order.
- **portfolio.md**: Showcases portfolio items in a grid or gallery format.

#### Page Structure

Each page consists of YAML Front Matter (defining metadata and layout) and Content (in Markdown format).

## Best Practices

1. Optimize all assets for web delivery to improve page load times.
2. Use descriptive filenames that indicate the asset's purpose.
3. Consider using CDN-hosted libraries for common frameworks to improve caching.
4. Minimize the number and size of assets to improve site performance.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
