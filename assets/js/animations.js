// Handle contact section scroll position immediately
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('section') === 'contact') {
  // Set this before any content loads
  document.documentElement.style.scrollBehavior = 'auto';
  window.addEventListener('load', function() {
    const contactSection = document.querySelector('.get-in-touch');
    if (contactSection) {
      const offsetY = contactSection.offsetTop - 200;
      window.scrollTo(0, offsetY);
      contactSection.classList.add('animate', 'animate-fast');
      // Clean up URL
      history.replaceState(null, '', '/about');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're redirected to contact section
  if (window.location.hash === '#contact') {
    const contactSection = document.querySelector('.get-in-touch');
    if (contactSection) {
      // Add a special class for faster animation
      contactSection.classList.add('animate', 'animate-fast');
    }
  }

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
  
  // Elements to animate on the Blog page
  const blogElements = document.querySelectorAll(
    '.blog-header, .blog-header h1, .blog-header .subtitle, ' +
    '.blog-search-container, .category-filter, .post-row, .pagination'
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
  const allElements = [...aboutElements, ...homeElements, ...portfolioElements, ...blogElements];
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
