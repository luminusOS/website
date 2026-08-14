const generatedPaths = [
  '**/.astro/**',
  '**/.git/**',
  '**/.wrangler/**',
  '**/aurora/dist/**',
  '**/dist/**',
  '**/dist-aurora/**',
  '**/node_modules/**',
];

export function watchConfig(...additionalPaths) {
  return {
    ignored: [...generatedPaths, ...additionalPaths],
    usePolling: true,
    interval: 300,
  };
}
