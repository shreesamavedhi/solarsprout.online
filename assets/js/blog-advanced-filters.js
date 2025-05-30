/**
 * Advanced blog filtering functionality for Solar Sprout
 * Handles tag filtering and advanced filter UI
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const advancedFiltersToggle = document.getElementById('toggle-advanced-filters');
  const advancedFiltersSection = document.getElementById('advanced-filters');
  const tagButtons = document.querySelectorAll('.tag-filter-button');
  const clearTagFiltersButton = document.getElementById('clear-tag-filters');
  const activeTagsSection = document.getElementById('active-tags');
  const activeTagsList = document.getElementById('active-tag-list');
  const posts = document.querySelectorAll('.post-row');
  
  // Current active filters state
  let activeTags = [];
  
  // Check URL parameters for any pre-selected tags
  function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    
    if (tagParam) {
      const tagSlug = tagParam.toLowerCase();
      const tagButton = document.querySelector(`.tag-filter-button[data-tag="${tagSlug}"]`);
      
      if (tagButton) {
        // Add this tag to active filters
        addTagFilter(tagSlug, tagButton.textContent.trim().split(' ')[0]);
        
        // Make sure advanced filters are visible
        advancedFiltersSection.style.display = 'block';
        advancedFiltersToggle.setAttribute('aria-expanded', 'true');
        // Note: We're not changing the icon class, relying on CSS transform instead
      }
    }
  }
  
  // Get blog filter section
  const blogFilterSection = document.querySelector('.blog-filter-section');
  
  // Add no-advanced class initially if needed
  if (blogFilterSection && advancedFiltersSection.style.display === 'none') {
    blogFilterSection.classList.add('no-advanced');
  }
  
  // Toggle advanced filters visibility
  if (advancedFiltersToggle && advancedFiltersSection) {
    advancedFiltersToggle.addEventListener('click', function() {
      const isExpanded = advancedFiltersToggle.getAttribute('aria-expanded') === 'true';
      
      if (isExpanded) {
        advancedFiltersSection.style.display = 'none';
        advancedFiltersToggle.setAttribute('aria-expanded', 'false');
        
        // Add class to blog filter section when advanced filters are hidden
        if (blogFilterSection) {
          blogFilterSection.classList.add('no-advanced');
        }
      } else {
        advancedFiltersSection.style.display = 'block';
        advancedFiltersToggle.setAttribute('aria-expanded', 'true');
        
        // Remove class from blog filter section when advanced filters are shown
        if (blogFilterSection) {
          blogFilterSection.classList.remove('no-advanced');
        }
      }
    });
  }
  
  // Function to add a tag filter
  function addTagFilter(tagSlug, tagName) {
    // Add to active tags array if not already there
    if (!activeTags.includes(tagSlug)) {
      activeTags.push(tagSlug);
      
      // Create tag element in active filters
      const tagElement = document.createElement('span');
      tagElement.classList.add('active-tag');
      tagElement.dataset.tag = tagSlug;
      tagElement.innerHTML = `${tagName} <button class="remove-tag" aria-label="Remove ${tagName} filter"><i class="fas fa-times"></i></button>`;
      
      // Add remove functionality
      tagElement.querySelector('.remove-tag').addEventListener('click', function() {
        removeTagFilter(tagSlug);
      });
      
      // Add to active tags list
      activeTagsList.appendChild(tagElement);
      
      // Show active tags section
      activeTagsSection.style.display = 'block';
      
      // Update URL
      updateUrlParams();
      
      // Highlight active tag button
      const tagButton = document.querySelector(`.tag-filter-button[data-tag="${tagSlug}"]`);
      if (tagButton) {
        tagButton.classList.add('active');
      }
    }
    
    // Apply filters
    applyFilters();
  }
  
  // Function to remove a tag filter
  function removeTagFilter(tagSlug) {
    // Remove from active tags array
    activeTags = activeTags.filter(tag => tag !== tagSlug);
    
    // Remove from active tags list
    const tagElement = activeTagsList.querySelector(`.active-tag[data-tag="${tagSlug}"]`);
    if (tagElement) {
      activeTagsList.removeChild(tagElement);
    }
    
    // Hide active tags section if empty
    if (activeTags.length === 0) {
      activeTagsSection.style.display = 'none';
    }
    
    // Update URL
    updateUrlParams();
    
    // Remove highlight from tag button
    const tagButton = document.querySelector(`.tag-filter-button[data-tag="${tagSlug}"]`);
    if (tagButton) {
      tagButton.classList.remove('active');
    }
    
    // Apply filters
    applyFilters();
  }
  
  // Function to clear all tag filters
  function clearAllTagFilters() {
    activeTags = [];
    activeTagsList.innerHTML = '';
    activeTagsSection.style.display = 'none';
    
    // Remove highlights from all tag buttons
    tagButtons.forEach(button => {
      button.classList.remove('active');
    });
    
    // Update URL
    updateUrlParams();
    
    // Apply filters
    applyFilters();
  }
  
  // Function to update URL parameters
  function updateUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Remove existing tag parameter
    urlParams.delete('tag');
    
    // Add new tag parameter if there are active tags
    if (activeTags.length > 0) {
      urlParams.set('tag', activeTags.join(','));
    }
    
    // Update URL without reloading the page
    const newUrl = window.location.pathname + (activeTags.length > 0 ? '?' + urlParams.toString() : '');
    history.pushState({}, '', newUrl);
  }
  
  // Function to apply all filters (integrates with existing category and search filters)
  function applyFilters() {
    // Get current category and search filters from the existing blog-search.js
    const activeCategory = document.querySelector('.category-filter .filter-button.active')?.dataset.category || 'all';
    const searchInput = document.getElementById('blog-search-input');
    const currentSearchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    let matchCount = 0;
    
    posts.forEach(post => {
      const postTags = post.dataset.tags ? post.dataset.tags.split(' ') : [];
      const postCategories = post.dataset.categories || '';
      
      // Check if post matches all active tag filters
      const matchesTags = activeTags.length === 0 || 
                         activeTags.every(tag => postTags.includes(tag));
      
      // Check if post matches category filter
      const matchesCategory = activeCategory === 'all' || 
                             postCategories.includes(activeCategory);
      
      // Check if post matches search term
      const title = post.querySelector('.post-title').textContent.toLowerCase();
      const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
      const matchesSearch = currentSearchTerm === '' || 
                           title.includes(currentSearchTerm) || 
                           excerpt.includes(currentSearchTerm);
      
      // Show post only if it matches all active filters
      if (matchesTags && matchesCategory && matchesSearch) {
        post.style.display = 'flex';
        matchCount++;
      } else {
        post.style.display = 'none';
      }
    });
    
    // Show or hide no results message
    const noResultsMessage = document.getElementById('no-results-message');
    if (noResultsMessage) {
      if (matchCount === 0) {
        noResultsMessage.style.display = 'block';
      } else {
        noResultsMessage.style.display = 'none';
      }
    }
    
    // Return match count for potential use elsewhere
    return matchCount;
  }
  
  // Add event listeners to tag filter buttons
  tagButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tagSlug = this.dataset.tag;
      const tagName = this.textContent.trim().split(' ')[0];
      
      if (this.classList.contains('active')) {
        // If already active, remove the filter
        removeTagFilter(tagSlug);
      } else {
        // Otherwise add the filter
        addTagFilter(tagSlug, tagName);
      }
    });
  });
  
  // Add event listener to clear tag filters button
  if (clearTagFiltersButton) {
    clearTagFiltersButton.addEventListener('click', clearAllTagFilters);
  }
  
  // Initialize by checking URL parameters
  checkUrlParams();
  
  // Expose functions for integration with other scripts
  window.blogAdvancedFilters = {
    applyFilters: applyFilters,
    clearAllTagFilters: clearAllTagFilters,
    activeTags: () => activeTags
  };
});
