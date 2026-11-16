/** Filter buttons carry the tag in `data-filter`; an empty value shows every card. */
export function setupPostFilter(): void {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const cards = [...document.querySelectorAll<HTMLElement>('[data-post-grid] [data-post-card]')];

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const tag = button.dataset.filter ?? '';
      for (const other of buttons) other.setAttribute('aria-pressed', String(other === button));
      for (const card of cards) card.hidden = tag !== '' && card.dataset.tag !== tag;
    });
  }
}
