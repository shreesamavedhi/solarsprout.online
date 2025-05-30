document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const menuBars = document.querySelectorAll('.menu-icon span');
  const body = document.body;
  
  if (menuIcon && navLinks) {
    // Function to animate hamburger icon
    const animateHamburger = (isOpen) => {
      if (isOpen) {
        // Create perfect X by setting exact positions
        // Top bar - rotates 45 degrees
        menuBars[0].style.top = '12px';
        menuBars[0].style.transform = 'rotate(45deg)';
        
        // Middle bar - fades out
        menuBars[1].style.opacity = '0';
        
        // Bottom bar - rotates -45 degrees
        menuBars[2].style.top = '12px';
        menuBars[2].style.transform = 'rotate(-45deg)';
      } else {
        // Reset to hamburger
        menuBars[0].style.top = '6px';
        menuBars[0].style.transform = 'none';
        
        menuBars[1].style.opacity = '1';
        
        menuBars[2].style.top = '18px';
        menuBars[2].style.transform = 'none';
      }
    };
    
    menuIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      const isOpen = this.classList.contains('active');
      
      // Animate hamburger icon
      animateHamburger(isOpen);
      
      if (!navLinks.classList.contains('show')) {
        // Show menu
        navLinks.classList.add('show');
        navLinks.style.display = 'flex';
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        // Trigger reflow to enable transition
        navLinks.offsetHeight;
        navLinks.style.opacity = '1';
        navLinks.style.transform = 'translateY(0)';
      } else {
        // Hide menu
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-10px)';
        body.style.overflow = '';
        // Wait for transition before hiding
        setTimeout(() => {
          navLinks.style.display = 'none';
          navLinks.classList.remove('show');
        }, 300);
      }
    });
    
    // Close menu when clicking a link
    navLinks.addEventListener('click', function(e) {
      if (e.target.classList.contains('page-link')) {
        menuIcon.classList.remove('active');
        animateHamburger(false); // Reset hamburger icon
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-10px)';
        body.style.overflow = '';
        setTimeout(() => {
          navLinks.style.display = 'none';
          navLinks.classList.remove('show');
        }, 300);
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('show') && 
          !menuIcon.contains(e.target) && 
          !navLinks.contains(e.target)) {
        menuIcon.classList.remove('active');
        animateHamburger(false); // Reset hamburger icon
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-10px)';
        body.style.overflow = '';
        setTimeout(() => {
          navLinks.style.display = 'none';
          navLinks.classList.remove('show');
        }, 300);
      }
    });
  }
});
