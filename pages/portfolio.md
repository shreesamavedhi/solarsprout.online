---
layout: page
title: Portfolio
permalink: /portfolio/
---

<div class="portfolio-page">
  <div class="portfolio-header">
    <h1>Creative Portfolio</h1>
    <p class="subtitle">A showcase of my work across film, music, games, and art</p>
  </div>
  <!-- Film Section -->
  <section class="portfolio-section" id="film">
    <div class="section-header">
      <h2>Film</h2>
      <a href="https://www.youtube.com/@SolarSproutFilms" class="platform-link" target="_blank">
        <i class="fab fa-youtube"></i> View on YouTube
      </a>
    </div>
    
    <div class="coming-soon-banner">
      <h3>Coming Soon</h3>
      <p>Film projects are in development. Stay tuned!</p>
    </div>
  </section>

  <!-- Music Section -->
  <section class="portfolio-section" id="music">
    <div class="section-header">
      <h2>Music</h2>
      <a href="https://open.spotify.com/artist/6LskQdnSNWP1q6QyxlvRaL?si=dp_rYRa8SIeHCI33ZYcVpg" class="platform-link" target="_blank">
        <i class="fab fa-spotify"></i> Listen on Spotify
      </a>
    </div>
    
    <div class="portfolio-grid" id="music-carousel">
      {% include portfolio-item.html 
        title="'would you wonder at all'"
        image="/assets/images/posts/would-you-wonder-at-all/cover.png"
        alt="would you wonder at all - Music"
        link="/posts/2024/08/08/would-you-wonder-at-all/"
        button_text="Listen" %}
    </div>
    
    <div class="carousel-controls">
      <button class="carousel-prev" aria-label="Previous items" data-target="music-carousel">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-next" aria-label="Next items" data-target="music-carousel">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
  
  <!-- Game Development Section -->
  <section class="portfolio-section" id="gamedev">
    <div class="section-header">
      <h2>Game Development</h2>
      <a href="https://solarsprout.itch.io/" class="platform-link" target="_blank">
        <i class="fab fa-itch-io"></i> View on Itch.io
      </a>
    </div>
    
    <div class="portfolio-grid" id="gamedev-carousel">
      {% include portfolio-item.html 
        title="Wizard Wars Game"
        image="/assets/images/posts/wizard-wars/cover.png"
        alt="wizard wars - Game"
        link="/posts/2024/12/30/wizard-wars/"
        button_text="View Project" %}
    </div>
    
    <div class="carousel-controls">
      <button class="carousel-prev" aria-label="Previous items" data-target="gamedev-carousel">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-next" aria-label="Next items" data-target="gamedev-carousel">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
  
  <!-- Art Section -->
  <section class="portfolio-section" id="art">
    <div class="section-header">
      <h2>Art & Animation</h2>
      <a href="https://www.instagram.com/solar.sprout.insta/" class="platform-link" target="_blank">
        <i class="fab fa-instagram"></i> View on Instagram
      </a>
    </div>
    
    <div class="portfolio-grid" id="art-carousel">
      {% include portfolio-item.html 
        title="Headspace"
        image="/assets/images/posts/headspace/cover.jpg"
        alt="Headspace - Artwork"
        link="/posts/2020/12/17/headspace/"
        button_text="View Artwork" %}

      {% include portfolio-item.html 
        title="Time Lost Her Arrow"
        image="/assets/images/posts/time-lost-her-arrow/cover.jpg"
        alt="Time Lost Her Arrow - Artwork"
        link="/posts/2020/11/29/time-lost-her-arrow/"
        button_text="View Artwork" %}

      {% include portfolio-item.html 
        title="Nearsighted"
        image="/assets/images/posts/nearsighted/cover.jpg"
        alt="Nearsighted - Artwork"
        link="/posts/2021/11/12/nearsighted/"
        button_text="View Artwork" %}
    </div>
    
    <div class="carousel-controls">
      <button class="carousel-prev" aria-label="Previous items" data-target="art-carousel">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-next" aria-label="Next items" data-target="art-carousel">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section class="contact-section">
    <h2>Let's Work Together</h2>
    <p>Interested in collaborating on a project? Get in touch!</p>
    <a href="/about#contact" class="contact-button">Contact Me</a>
  </section>
</div>
