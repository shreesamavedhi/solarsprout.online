// Register the service worker with path handling for GitHub Pages
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Get the base URL - works with GitHub Pages and custom domains
    const baseUrl = document.head.querySelector('base') ? 
                    document.head.querySelector('base').href : 
                    window.location.origin + '/';
    
    // Create the correct path for the service worker
    const swPath = new URL('service-worker.js', baseUrl).pathname;
    
    navigator.serviceWorker.register(swPath)
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
        // Continue with basic functionality if service worker fails
        setupBasicTransitions();
      });
  });
} else {
  // If service workers aren't supported, set up basic transitions
  document.addEventListener('DOMContentLoaded', setupBasicTransitions);
}

// Basic transition function that works without service worker
function setupBasicTransitions() {
  // This will run on the first page load
  document.body.classList.add('page-loaded');
  
  // For all links
  const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');
  
  links.forEach(link => {
    // Only handle same-origin links
    if (link.origin === window.location.origin) {
      link.addEventListener('click', function(e) {
        // Don't handle if using modifier keys
        if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) {
          return;
        }
        
        e.preventDefault();
        const destination = this.href;
        
        // Add transition-out class
        document.body.classList.add('page-transition-out');
        
        // Wait for animation
        setTimeout(() => {
          window.location.href = destination;
        }, 300);
      });
    }
  });
}

// Add navigation animation before the service worker takes control
document.addEventListener('DOMContentLoaded', function() {
  // This will only run if the service worker setup didn't already call setupBasicTransitions
  if (!document.body.classList.contains('page-loaded')) {
    setupBasicTransitions();
  }
});
