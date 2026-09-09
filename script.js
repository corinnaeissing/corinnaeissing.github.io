document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.custom-nav-link');
  const navbarCollapse = document.getElementById('site-nav');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarToggler && navbarCollapse && typeof bootstrap === 'undefined') {
    navbarToggler.addEventListener('click', () => {
      const isOpen = navbarCollapse.classList.toggle('show');
      navbarToggler.setAttribute('aria-expanded', String(isOpen));
    });
  }
  
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
