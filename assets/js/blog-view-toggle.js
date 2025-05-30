/**
 * Blog View Toggle
 * Handles switching between regular and compact views for blog posts
 */
document.addEventListener('DOMContentLoaded', function() {
  const postList = document.querySelector('.post-list');
  const viewButtons = document.querySelectorAll('.view-button');
  
  // Check if there's a saved preference in localStorage
  const savedView = localStorage.getItem('blogViewPreference');
  
  if (postList) {
    // Apply saved preference if it exists, otherwise default to compact
    if (savedView) {
      postList.setAttribute('data-current-view', savedView);
      
      // Update active button
      viewButtons.forEach(button => {
        if (button.getAttribute('data-view') === savedView) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    } else {
      // Set compact as default for new visitors
      localStorage.setItem('blogViewPreference', 'compact');
    }
  }
  
  // Add click event listeners to view buttons
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const viewType = this.getAttribute('data-view');
      
      // Update the post list view
      if (postList) {
        postList.setAttribute('data-current-view', viewType);
      }
      
      // Update active button state
      viewButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      // Save preference to localStorage
      localStorage.setItem('blogViewPreference', viewType);
    });
  });
});
