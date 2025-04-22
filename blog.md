---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog-posts">
  {%- if site.posts.size > 0 -%}
    <div class="post-grid">
      {%- for post in site.posts -%}
      <div class="post-card">
        <div class="post-image">
          {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          {% else %}
            <img src="/assets/images/default-post.jpg" alt="{{ post.title }}">
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
              <span class="post-tag">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </div>
      {%- endfor -%}
    </div>
  {%- endif -%}
</div>
