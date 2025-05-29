document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const menuBars = document.querySelectorAll('.menu-icon span');

  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
    // Animate hamburger to X
    menuBars[0].style.transform = navLinks.classList.contains('show') 
      ? 'rotate(45deg) translate(5px, 6px)' 
      : 'none';
    menuBars[1].style.opacity = navLinks.classList.contains('show') 
      ? '0' 
      : '1';
    menuBars[2].style.transform = navLinks.classList.contains('show') 
      ? 'rotate(-45deg) translate(5px, -6px)' 
      : 'none';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      menuBars[0].style.transform = 'none';
      menuBars[1].style.opacity = '1';
      menuBars[2].style.transform = 'none';
    }
  });
});
