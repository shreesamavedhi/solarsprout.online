document.addEventListener('DOMContentLoaded', function() {
  // Handle all internal navigation links
  const internalLinks = document.querySelectorAll('a[href^="/"]:not([target="_blank"]), a[href^="./"]:not([target="_blank"]), a[href^="../"]:not([target="_blank"]), a[href^="#"]:not([target="_blank"])');
  
  internalLinks.forEach(link => {
    // Skip hash-only links (they're just anchors within the page)
    if (link.getAttribute('href') === '#' || link.getAttribute('href').startsWith('#')) {
      return;
    }
    
    link.addEventListener('click', function(e) {
      const destination = this.href;
      
      // Skip if modifier keys are pressed (user might want to open in new tab)
      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        return;
      }
      
      e.preventDefault();
      
      // Apply fade-out class to body - this will only affect the main content area
      // due to our CSS targeting
      document.body.classList.add('page-transition-out');
      
      // Navigate after short delay for fade-out to complete
      setTimeout(() => {
        window.location.href = destination;
      }, 300);
    });
  });
  
  // Handle the page load completion - ensure we're visible when page loads
  window.addEventListener('pageshow', function(e) {
    // Reset the transition class immediately
    document.body.classList.remove('page-transition-out');
    
    // Fix for bfcache (back-forward cache) issues
    if (e.persisted) {
      // Force a repaint to ensure the page is visible
      document.body.style.display = 'none';
      requestAnimationFrame(() => {
        document.body.style.display = '';
      });
    }
  });
  
  // Handle browser back/forward navigation
  window.addEventListener('popstate', function() {
    // Ensure the page is visible when using browser navigation
    document.body.classList.remove('page-transition-out');
  });
  
  // Make sure we're visible on initial load
  document.body.classList.remove('page-transition-out');
});
