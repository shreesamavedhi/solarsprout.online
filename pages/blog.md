---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog-posts">
  <div class="blog-header">
    <h1>Blog</h1>
    <p class="subtitle">Thoughts, tutorials, and updates on my creative journey</p>
  </div>
  
  <div class="blog-search-container">
    <div class="search-input-wrapper">
      <input type="text" id="blog-search-input" placeholder="Search posts..." aria-label="Search blog posts">
      <button id="clear-search" aria-label="Clear search">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
  
  <div class="view-options">
    <div class="view-toggle">
      <span class="view-label">View:</span>
      <button type="button" data-view="regular" class="view-button active" aria-label="Regular view">
        <i class="fas fa-th-large"></i>
      </button>
      <button type="button" data-view="compact" class="view-button" aria-label="Compact view">
        <i class="fas fa-list"></i>
      </button>
    </div>
  </div>
  
  <div class="category-filter">
    <button type="button" data-category="all" class="filter-button active">All Posts</button>
    {% assign categories = site.posts | map: 'categories' | flatten | uniq | sort %}
    {% for category in categories %}
      {% assign words = category | split: ' ' %}
      {% capture capitalized_category %}
        {% for word in words %}
          {{ word | capitalize }}
        {% endfor %}
      {% endcapture %}
      <button type="button" data-category="{{ category | downcase }}" class="filter-button">{{ capitalized_category | strip }}</button>
    {% endfor %}
  </div>
  
  <div class="advanced-filter-toggle">
    <button id="toggle-advanced-filters" class="toggle-button" aria-expanded="false">
      <span class="toggle-text">Advanced Filters</span>
      <i class="fas fa-chevron-down toggle-icon"></i>
    </button>
  </div>
  
  <div id="advanced-filters" class="advanced-filters" style="display: none;">
    <div class="tag-filter">
      <h3>Filter by Tags</h3>
      <div class="tag-cloud">
        {% assign tags = site.posts | map: 'tags' | flatten | uniq | sort %}
        {% for tag in tags %}
          {% assign tag_slug = tag | slugify %}
          {% assign tag_count = site.posts | where_exp: "post", "post.tags contains tag" | size %}
          <button type="button" data-tag="{{ tag_slug }}" class="tag-filter-button">
            {{ tag }} <span class="tag-count">({{ tag_count }})</span>
          </button>
        {% endfor %}
      </div>
    </div>
    
    <div class="active-filters">
      <div id="active-tags" class="active-tags" style="display: none;">
        <h4>Active Tag Filters:</h4>
        <div id="active-tag-list" class="active-tag-list"></div>
        <button id="clear-tag-filters" class="clear-filters-button">Clear Tag Filters</button>
      </div>
    </div>
  </div>
  
  {%- if site.posts.size > 0 -%}
    <div class="post-list" data-current-view="regular">
      <div id="no-results-message" style="display: none;">
        <p>No posts found matching your search. Try different keywords or <button id="reset-search">view all posts</button>.</p>
      </div>
      {%- for post in site.posts -%}
      {% assign post_categories = post.categories | join: ' ' | downcase %}
      {% assign post_tags = "" %}
      {% for tag in post.tags %}
        {% assign tag_slug = tag | slugify %}
        {% assign post_tags = post_tags | append: tag_slug | append: ' ' %}
      {% endfor %}
      <div class="post-row" data-categories="{{ post_categories }}" data-tags="{{ post_tags | strip }}">
        <div class="post-image">
          {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          {% else %}
            <img src="/assets/images/default-post.svg" alt="{{ post.title }}">
          {% endif %}
        </div>
        <div class="post-content">
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <span class="post-meta">{{ post.date | date: date_format }}</span>
          <h3 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
          </h3>
          <div class="post-excerpt">
            {% if post.description %}
              {{ post.description }}
            {% else %}
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            {% endif %}
          </div>
          {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags %}
              {% assign tag_slug = tag | slugify %}
              {% assign tag_class = "tag-" | append: tag_slug %}
              <a href="/blog/?tag={{ tag_slug }}" class="post-tag {{ tag_class }}" data-tag="{{ tag_slug }}">{{ tag }}</a>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
      {%- endfor -%}
    </div>
  {%- endif -%}
</div>

<script src="{{ '/assets/js/blog-search.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/blog-view-toggle.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/blog-advanced-filters.js' | relative_url }}" defer></script>
