document.addEventListener('DOMContentLoaded', function() {
  // Elements to animate on the About page
  const aboutElements = document.querySelectorAll('.about-section, .about-header, .about-image-container, .mission-card, .timeline-item, .about-content h2, .get-in-touch');
  
  // Elements to animate on the Home page
  const homeElements = document.querySelectorAll(
    '.hero-banner .banner-content h1, .hero-banner .banner-content .banner-subtitle, .hero-banner .banner-content .banner-button, ' +
    '.home-about .about-image, .home-about .about-content, .home-about .about-content h2, ' +
    '.featured-posts h2, .featured-posts .post-card, .featured-posts .view-all, ' +
    '.newsletter, .newsletter .newsletter-container h2, .newsletter .newsletter-container p, .newsletter .newsletter-form'
  );
  
  // Elements to animate on the Portfolio page
  const portfolioElements = document.querySelectorAll(
    '.portfolio-header, .portfolio-header h1, .portfolio-header .subtitle, ' +
    '.portfolio-section, .section-header h2, .section-header .platform-link, ' +
    '.portfolio-grid, .carousel-controls, ' +
    '.coming-soon-banner, .coming-soon-banner h3, .coming-soon-banner p, ' +
    '.contact-section, .contact-section p'
  );
  
  // Contact buttons need special handling to ensure they only animate once
  const contactButtons = document.querySelectorAll('.contact-button');
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  // Observe all elements
  const allElements = [...aboutElements, ...homeElements, ...portfolioElements];
  allElements.forEach(element => {
    observer.observe(element);
  });
  
  // Special handling for contact buttons to ensure they only animate once
  contactButtons.forEach(button => {
    // Add the animate class immediately to ensure it's visible
    button.classList.add('animate');
    
    // Remove any hover event listeners that might interfere
    button.addEventListener('mouseenter', function() {
      // Keep the button visible during hover
      button.style.opacity = '1';
    });
    
    button.addEventListener('mouseleave', function() {
      // Keep the button visible after hover
      button.style.opacity = '1';
    });
  });
  
  // Add animation classes to timeline items for staggered effect
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${0.2 * (index + 1)}s`;
  });
  
  // Add staggered animation to post cards
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach((card, index) => {
    card.style.animationDelay = `${0.2 * (index + 1)}s`;
  });
  
  
  // Apply immediate animations to hero banner elements
  // These don't need to wait for scrolling
  const heroBannerElements = document.querySelectorAll('.hero-banner .banner-content h1, .hero-banner .banner-content .banner-subtitle, .hero-banner .banner-content .banner-button');
  heroBannerElements.forEach(element => {
    element.classList.add('animate');
  });
});
