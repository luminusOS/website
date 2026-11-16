/**
 * Live filter for the app catalog. Cards carry their searchable text in
 * `data-search`; every typed term must appear in it.
 */
export function setupCatalogSearch(): void {
  const input = document.querySelector<HTMLInputElement>('[data-app-search]');
  const cards = [...document.querySelectorAll<HTMLElement>('[data-app-card]')];
  const count = document.querySelector<HTMLElement>('[data-app-count]');
  const emptyMessage = document.querySelector<HTMLElement>('[data-no-results]');
  if (!input) return;

  // Pluralisation is the translator's: the page ships the singular string and
  // the zero string, whose digit stands in for the number.
  const countLabel = (visible: number) =>
    visible === 1 ? (count?.dataset.one ?? '') : (count?.dataset.other ?? '').replace('0', String(visible));

  // The search form only exists for the input's semantics; there is nothing to submit.
  input.form?.addEventListener('submit', (event) => event.preventDefault());

  let scrolledToResults = false;

  input.addEventListener('input', () => {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;

    for (const card of cards) {
      const matches = terms.every((term) => (card.dataset.search ?? '').includes(term));
      card.hidden = !matches;
      if (matches) visible += 1;
    }

    if (count) count.textContent = countLabel(visible);
    if (emptyMessage) emptyMessage.hidden = visible > 0;

    // Scroll once when the search starts; repeating it would move the input
    // out from under the user's hands while they type.
    if (terms.length && !scrolledToResults) document.getElementById('apps')?.scrollIntoView({ block: 'start' });
    scrolledToResults = terms.length > 0;
  });
}
