/**
 * Blog search and category filtering functionality for Solar Sprout
 */
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search-input');
  const postList = document.querySelector('.post-list');
  const posts = document.querySelectorAll('.post-row');
  const noResultsMessage = document.getElementById('no-results-message');
  const categoryButtons = document.querySelectorAll('.category-filter .filter-button');
  
  if (!postList) return;
  
  // Current active filters
  let activeCategory = 'all';
  let currentSearchTerm = '';
  
  // Function to filter posts based on search term and category
  // Advanced tag filtering is handled by blog-advanced-filters.js
  function filterPosts() {
    let matchCount = 0;
    
    posts.forEach(post => {
      const title = post.querySelector('.post-title').textContent.toLowerCase();
      const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
      const tags = post.querySelectorAll('.post-tag');
      const postCategories = post.dataset.categories || '';
      let tagText = '';
      
      // Collect all tag text
      if (tags) {
        tags.forEach(tag => {
          tagText += tag.textContent.toLowerCase() + ' ';
        });
      }
      
      // Check if the post matches both the search term and category
      const matchesSearch = currentSearchTerm === '' || 
                           title.includes(currentSearchTerm) || 
                           excerpt.includes(currentSearchTerm) || 
                           tagText.includes(currentSearchTerm);
      
      const matchesCategory = activeCategory === 'all' || 
                             postCategories.includes(activeCategory);
      
      // Store the basic filter state (without tag filtering)
      post.dataset.matchesBasicFilters = (matchesSearch && matchesCategory) ? 'true' : 'false';
      
      // If we have the advanced filtering system, let it handle the final display
      if (window.blogAdvancedFilters) {
        // Don't change display here - advanced filters will handle it
      } else {
        // Fall back to basic filtering if advanced filters aren't loaded
        if (matchesSearch && matchesCategory) {
          post.style.display = 'flex';
          matchCount++;
        } else {
          post.style.display = 'none';
        }
      }
    });
    
    // If advanced filtering is available, let it handle the final filtering
    if (window.blogAdvancedFilters) {
      window.blogAdvancedFilters.applyFilters();
    } else {
      // Show or hide the no results message (basic filtering only)
      if (noResultsMessage) {
        if (matchCount === 0 && (currentSearchTerm !== '' || activeCategory !== 'all')) {
          noResultsMessage.style.display = 'block';
        } else {
          noResultsMessage.style.display = 'none';
        }
      }
    }
  }
  
  // Set up search input event listener
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearchTerm = searchInput.value.toLowerCase().trim();
      filterPosts();
    });
  }
  
  // Set up category filter buttons
  if (categoryButtons) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update active category and filter posts
        activeCategory = button.dataset.category;
        filterPosts();
      });
    });
  }
  
  // Add clear search button functionality
  const clearButton = document.getElementById('clear-search');
  if (clearButton) {
    clearButton.addEventListener('click', function() {
      searchInput.value = '';
      currentSearchTerm = '';
      filterPosts();
      searchInput.focus();
    });
  }
  
  // Add reset search button functionality
  const resetButton = document.getElementById('reset-search');
  if (resetButton) {
    resetButton.addEventListener('click', function() {
      // Reset search
      if (searchInput) {
        searchInput.value = '';
        currentSearchTerm = '';
      }
      
      // Reset category filter
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      const allButton = document.querySelector('[data-category="all"]');
      if (allButton) allButton.classList.add('active');
      activeCategory = 'all';
      
      // Apply filters
      filterPosts();
      
      if (searchInput) searchInput.focus();
    });
  }
});
