const WORDS_PER_MINUTE = 220;

export const readingMinutes = (text: string): number =>
  Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));
