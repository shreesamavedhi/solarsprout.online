---
layout: page
title: Portfolio
permalink: /blog/portfolio/
---

<div class="blog-posts">
  <div class="category-filter">
    <a href="/blog/" class="filter-button">All Posts</a>
    <a href="/blog/portfolio/" class="filter-button active">Portfolio</a>
  </div>
  
  {%- if site.posts.size > 0 -%}
    <div class="post-list">
      {%- for post in site.posts -%}
        {% if post.categories contains "portfolio" %}
        <div class="post-row">
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
        {% endif %}
      {%- endfor -%}
    </div>
  {%- endif -%}
</div>
