document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.magnify-container');
  if (!container) return;

  const glass = container.querySelector('.magnifying-glass');
  const image = container.querySelector('.main-image');
  const toggleBtn = container.querySelector('.magnify-toggle');
  if (!glass || !image || !toggleBtn) return;

  let isEnabled = false;
  const magnification = 3;

  // Wait for image to load to get correct dimensions
  image.addEventListener('load', function() {
    const imgWidth = image.offsetWidth;
    const imgHeight = image.offsetHeight;

    // Set up initial state
    glass.style.backgroundImage = `url(${image.src})`;
    glass.style.backgroundSize = `${imgWidth * magnification}px ${imgHeight * magnification}px`;
  });

  // Set initial background image in case image is already loaded
  if (image.complete) {
    glass.style.backgroundImage = `url(${image.src})`;
    glass.style.backgroundSize = `${image.offsetWidth * magnification}px ${image.offsetHeight * magnification}px`;
  }

  // Toggle button click handler
  toggleBtn.addEventListener('click', function() {
    isEnabled = !isEnabled;
    toggleBtn.textContent = isEnabled ? 'Disable Zoom' : 'Enable Zoom';
    container.style.cursor = isEnabled ? 'none' : 'auto';
    if (!isEnabled) {
      glass.style.opacity = '0';
    }
  });

  // Mouse move handler
  container.addEventListener('mousemove', function(e) {
    if (!isEnabled) return;

    const bounds = container.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    // Position the magnifying glass
    glass.style.left = `${x - glass.offsetWidth / 2}px`;
    glass.style.top = `${y - glass.offsetHeight / 2}px`;

    // Calculate the position for the zoomed background image
    // This ensures the zoom is centered on the cursor
    const bgX = (x / image.offsetWidth) * 100;
    const bgY = (y / image.offsetHeight) * 100;
    glass.style.backgroundPosition = `${bgX}% ${bgY}%`;
    glass.style.opacity = '1';
  });

  // Hide glass when mouse leaves container
  container.addEventListener('mouseleave', function() {
    glass.style.opacity = '0';
  });
});


