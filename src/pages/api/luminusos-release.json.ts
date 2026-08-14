import type { APIRoute } from 'astro';

export const prerender = false;

type Format = 'iso' | 'qcow2';

interface Release {
  version: string;
  assets: Partial<Record<Format, string>>;
}

const githubLatest = 'https://api.github.com/repos/luminusOS/images/releases/latest';
const sourceForgeFeed = 'https://sourceforge.net/projects/luminusos/rss?path=/';

export const GET: APIRoute = async () => {
  const [githubResponse, sourceForgeResponse] = await Promise.all([
    fetch(githubLatest, { headers: { Accept: 'application/vnd.github+json' } }),
    fetch(sourceForgeFeed),
  ]);

  if (!sourceForgeResponse.ok) {
    return Response.json({ error: 'SourceForge request failed' }, { status: 502 });
  }
  if (!githubResponse.ok && githubResponse.status !== 404) {
    return Response.json({ error: 'GitHub request failed' }, { status: 502 });
  }

  const stableVersion = githubResponse.ok
    ? ((await githubResponse.json()) as { tag_name: string }).tag_name.replace(/^v/, '')
    : undefined;
  const releases = parseReleases(await sourceForgeResponse.text());
  const release = stableVersion
    ? releases.find((candidate) => candidate.version === stableVersion)
    : releases.find((candidate) => candidate.version.startsWith('testing-'));

  if (!release?.assets.iso || !release.assets.qcow2) {
    return Response.json({ error: 'No downloadable release found' }, { status: 502 });
  }

  return Response.json(release, {
    headers: {
      'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600',
    },
  });
};

function parseReleases(feed: string): Release[] {
  const releases = new Map<string, Release>();
  const links = feed.matchAll(/<link>(https:\/\/sourceforge\.net\/projects\/luminusos\/files\/([^/]+)\/([^<]+)\/download)<\/link>/g);

  for (const [, url, directory, filename] of links) {
    const testing = directory.match(/^testing-(\d+\.\d+)$/);
    const stable = directory.match(/^(\d+\.\d+)$/);
    const buildVersion = testing?.[1] ?? stable?.[1];
    if (!buildVersion) continue;

    const version = testing ? `testing-${buildVersion}` : buildVersion;
    const prefix = `luminusos-workstation-${version}`;
    const release = releases.get(version) ?? { version, assets: {} };
    if (filename === `${prefix}.iso`) release.assets.iso = url;
    if (filename === `${prefix}.qcow2`) release.assets.qcow2 = url;
    releases.set(version, release);
  }

  return [...releases.values()];
}
