export interface Release {
  tag_name: string;
  assets: { name: string; browser_download_url: string }[];
}

export async function latestRelease(repo: string): Promise<Release | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) return null;
    return (await response.json()) as Release;
  } catch {
    return null;
  }
}
