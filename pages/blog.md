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
  
  {%- if site.posts.size > 0 -%}
    <div class="post-list">
      <div id="no-results-message" style="display: none;">
        <p>No posts found matching your search. Try different keywords or <button id="reset-search">view all posts</button>.</p>
      </div>
      {%- for post in site.posts -%}
      {% assign post_categories = post.categories | join: ' ' | downcase %}
      <div class="post-row" data-categories="{{ post_categories }}">
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
              <a href="/tag/{{ tag_slug }}" class="post-tag {{ tag_class }}">{{ tag }}</a>
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
