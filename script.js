document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.custom-nav-link');
  const navbarCollapse = document.getElementById('site-nav');
  
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          // Check if Bootstrap is available
          if (typeof bootstrap !== 'undefined') {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            } else {
              // Fallback creation if not instantiated yet
              new bootstrap.Collapse(navbarCollapse).hide();
            }
          } else {
            // Native fallback
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  }
});
