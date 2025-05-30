// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Add navigation animation before the service worker takes control
document.addEventListener('DOMContentLoaded', function() {
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
});
