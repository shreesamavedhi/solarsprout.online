// Custom JavaScript to style the beehiiv embed
document.addEventListener('DOMContentLoaded', function() {
  // Target the beehiiv embed iframe
  const beehiivEmbed = document.querySelector('[data-test-id="beehiiv-embed"]');
  
  if (beehiivEmbed) {
    // Apply custom styling to the iframe
    beehiivEmbed.onload = function() {
      try {
        // We can't directly modify the iframe content due to cross-origin restrictions,
        // but we can send a message to the iframe with our styling preferences
        beehiivEmbed.contentWindow.postMessage({
          type: 'BEEHIIV_EMBED_CUSTOMIZE',
          data: {
            buttonColor: '#5D4037', // Rich soil color
            buttonHoverColor: '#2E7D32', // Forest green color
            buttonTextColor: '#FFFFFF', // White text
            fontFamily: 'inherit', // Use the same font as the rest of the site
            borderRadius: '30px', // Match your site's button style
          }
        }, '*');
      } catch (e) {
        console.error('Error customizing beehiiv embed:', e);
      }
    };
    
    // Ensure the iframe is responsive
    beehiivEmbed.style.width = '100%';
    beehiivEmbed.style.maxWidth = '500px';
    beehiivEmbed.style.margin = '0 auto';
    beehiivEmbed.style.display = 'block';
  }
});
