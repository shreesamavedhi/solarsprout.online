document.addEventListener('DOMContentLoaded', function() {
  // Setup carousel navigation for all portfolio sections
  const carouselControls = document.querySelectorAll('.carousel-controls button');
  
  carouselControls.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const carousel = document.getElementById(targetId);
      const direction = this.classList.contains('carousel-next') ? 1 : -1;
      const scrollAmount = carousel.offsetWidth * 0.5; // Scroll by half the container width
      
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    });
  });
  
  // Check if carousel navigation should be visible
  const portfolioGrids = document.querySelectorAll('.portfolio-grid');
  
  portfolioGrids.forEach(grid => {
    // Only show controls if there are more than 2 items or content is scrollable
    const hasScrollableContent = grid.scrollWidth > grid.clientWidth;
    const parentSection = grid.closest('.portfolio-section');
    const controls = parentSection.querySelector('.carousel-controls');
    
    if (controls && !hasScrollableContent) {
      controls.style.display = 'none';
    }
  });
});
