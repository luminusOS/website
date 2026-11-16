/**
 * Closes open <details> menus matching `selector` (a selector list is fine)
 * on an outside click or Escape.
 */
export function closeMenusOnDismiss(selector: string): void {
  const open = () => document.querySelectorAll(`:is(${selector})[open]`);

  document.addEventListener('click', (event) => {
    open().forEach((menu) => {
      if (event.target instanceof Node && !menu.contains(event.target)) menu.removeAttribute('open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    open().forEach((menu) => {
      menu.removeAttribute('open');
      // Hand focus back so keyboard users do not lose their place.
      menu.querySelector('summary')?.focus();
    });
  });
}
