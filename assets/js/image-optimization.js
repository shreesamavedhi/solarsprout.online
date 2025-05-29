/**
 * Image optimization script for Solar Sprout
 * Handles lazy loading and responsive image loading
 */
document.addEventListener('DOMContentLoaded', function() {
  // Find all images that should be lazy-loaded
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  // Set up intersection observer for better lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // If there's a data-src attribute, use that as the source
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // If there's a data-srcset attribute, use that as the srcset
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    // This will still use the native lazy loading attribute
    lazyImages.forEach(function(img) {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
      }
    });
  }
  
  // Add blur-up effect for images with data-blur-src
  const blurUpImages = document.querySelectorAll('img[data-blur-src]');
  blurUpImages.forEach(function(img) {
    const blurSrc = img.getAttribute('data-blur-src');
    const fullSrc = img.getAttribute('src');
    
    // Create a temporary image to preload the full resolution version
    const tempImg = new Image();
    tempImg.src = fullSrc;
    
    // Set the blur image as the source initially
    img.src = blurSrc;
    
    // When the full image is loaded, swap it in
    tempImg.onload = function() {
      img.src = fullSrc;
      img.classList.add('loaded');
    };
  });
});
