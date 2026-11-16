const VERSIONS_URL = 'https://raw.githubusercontent.com/luminusOS/images/main/config/versions.env';

// Used when the images repository cannot be reached at build time.
const FALLBACK = '45';

/** Reads DEFAULT_FEDORA_VERSION from the images repository, the source of truth for the base release. */
export async function readFedoraVersion() {
  if (process.env.FEDORA_VERSION) return process.env.FEDORA_VERSION;
  try {
    const response = await fetch(VERSIONS_URL, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const match = (await response.text()).match(/^DEFAULT_FEDORA_VERSION=(\d+)\s*$/m);
    if (!match) throw new Error('DEFAULT_FEDORA_VERSION not found');
    return match[1];
  } catch (error) {
    console.warn(`[fedora-version] using Fedora ${FALLBACK}: ${error instanceof Error ? error.message : error}`);
    return FALLBACK;
  }
}
