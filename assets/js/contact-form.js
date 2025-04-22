document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // Form validation is handled by HTML5 required attributes
      
      // Show loading state
      const submitButton = contactForm.querySelector('.submit-button');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Form will be submitted to Formspree
      // This code just handles UI feedback
      
      // We'll add a success message after form submission
      const formSuccess = document.createElement('div');
      formSuccess.className = 'form-success';
      formSuccess.style.display = 'none';
      formSuccess.innerHTML = '<p><i class="fas fa-check-circle"></i> Thank you for your message! I\'ll get back to you soon.</p>';
      
      contactForm.parentNode.insertBefore(formSuccess, contactForm.nextSibling);
      
      // We'll use the form's onsubmit event to show the success message
      // after the form is submitted to Formspree
      contactForm.addEventListener('submit', function(e) {
        // This will only run if the form passes validation
        setTimeout(function() {
          contactForm.style.display = 'none';
          formSuccess.style.display = 'block';
        }, 1000);
      });
    });
  }
});
