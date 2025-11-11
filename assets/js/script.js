(function(){
  const overlay = document.getElementById('mobile-nav');
  const menuBtn = document.querySelector('.header__menu');
  const closeBtn = document.querySelector('[data-close-overlay]');
  const links = Array.from(document.querySelectorAll('[data-navlink]'));
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function openOverlay() {
    overlay.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    // move focus to first link for a11y
    const firstLink = overlay.querySelector('a,button');
    if (firstLink) firstLink.focus();
  }

  function closeOverlay() {
    overlay.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
  }

  if (menuBtn) menuBtn.addEventListener('click', openOverlay);
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
  links.forEach(l => l.addEventListener('click', closeOverlay));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false') {
      closeOverlay();
    }
  });
})();
