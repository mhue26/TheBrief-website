// SULS Publications Wireframe — Stage 1
// Minimal behaviour: toggle the full-screen nav overlay and dismiss the
// announcement bar. No framework, no build step.

(function () {
  var menuToggle = document.querySelector('.menu-toggle[aria-controls="nav-overlay"]');
  var navOverlay = document.getElementById('nav-overlay');
  var navClose = navOverlay ? navOverlay.querySelector('[data-nav-close]') : null;
  var announcementBar = document.querySelector('.announcement-bar');
  var announcementClose = document.querySelector('.announcement-bar__close');

  function openNav() {
    navOverlay.classList.add('is-open');
    navOverlay.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close Menu');
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    navOverlay.classList.remove('is-open');
    navOverlay.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open Menu');
    document.body.classList.remove('nav-open');
  }

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navOverlay.classList.contains('is-open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeNav);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navOverlay.classList.contains('is-open')) {
      closeNav();
    }
  });

  if (announcementClose && announcementBar) {
    announcementClose.addEventListener('click', function () {
      announcementBar.style.display = 'none';
    });
  }
})();
