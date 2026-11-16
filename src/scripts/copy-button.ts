const FEEDBACK_MS = 1800;

/**
 * Wires every `[data-copy]` button to the clipboard. The button's
 * `data-copied` attribute holds the label shown briefly after copying, and
 * its `[data-copy-label]` child is the text that gets swapped.
 */
export function setupCopyButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    const label = button.querySelector('[data-copy-label]');
    const idleText = label?.textContent ?? '';

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy ?? '');
      } catch {
        return;
      }
      button.dataset.copyDone = '';
      if (label) label.textContent = button.dataset.copied ?? idleText;
      setTimeout(() => {
        delete button.dataset.copyDone;
        if (label) label.textContent = idleText;
      }, FEEDBACK_MS);
    });
  });
}
