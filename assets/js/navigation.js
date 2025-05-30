document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      
      if (!navLinks.style.display || navLinks.style.display === 'none') {
        // Show menu
        navLinks.style.display = 'flex';
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        // Trigger reflow to enable transition
        navLinks.offsetHeight;
        navLinks.style.opacity = '1';
      } else {
        // Hide menu
        navLinks.style.opacity = '0';
        body.style.overflow = '';
        // Wait for transition before hiding
        setTimeout(() => {
          navLinks.style.display = 'none';
        }, 300);
      }
    });
    
    // Close menu when clicking a link
    navLinks.addEventListener('click', function(e) {
      if (e.target.classList.contains('page-link')) {
        menuIcon.classList.remove('active');
        navLinks.style.opacity = '0';
        body.style.overflow = '';
        setTimeout(() => {
          navLinks.style.display = 'none';
        }, 300);
      }
    });
  }
});
