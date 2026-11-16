export function setupSharedHeaderControls() {
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch {
        // Blocked storage: the choice only lasts for this page view.
      }
    });
  });

  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHairline = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
  updateHairline();
  window.addEventListener('scroll', updateHairline, { passive: true });
}
