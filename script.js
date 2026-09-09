document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.custom-nav-link');
  const navbarCollapse = document.getElementById('site-nav');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      const isOpen = navbarCollapse.classList.toggle('show');
      navbarToggler.setAttribute('aria-expanded', String(isOpen));
      navbarToggler.setAttribute('aria-label', isOpen ? 'Navigation schließen' : 'Navigation öffnen');
    });
  }
  
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
          navbarToggler?.setAttribute('aria-expanded', 'false');
          navbarToggler?.setAttribute('aria-label', 'Navigation öffnen');
        }
      });
    });
  }
});
