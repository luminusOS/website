import type { APIRoute } from 'astro';

export const prerender = false;

const origin = 'https://download.luminusos.org';

export const GET: APIRoute = async () => {
  try {
    for (const channel of ['stable', 'testing']) {
      const response = await fetch(`${origin}/${channel}/latest.json`, {
        headers: { 'Cache-Control': 'no-cache' },
      });
      if (response.status === 404) continue;
      if (!response.ok) break;

      const release = await response.json() as { version?: unknown; assets?: { iso?: unknown; qcow2?: unknown } };
      const version = release.version;
      if (typeof version !== 'string' ||
          !(channel === 'stable' ? /^\d+\.\d{8}(?:\.\d+)?$/ : /^testing-\d+\.\d{8}(?:\.\d+)?$/).test(version)) break;
      const prefix = `${origin}/${channel}/${version}/luminusos-workstation-${version}`;
      if (release.assets?.iso !== `${prefix}.iso` || release.assets.qcow2 !== `${prefix}.qcow2`) break;
      return Response.json(release, {
        headers: { 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' },
      });
    }
  } catch {
    // A failed request must not be mistaken for an absent stable release.
  }
  return Response.json({ error: 'No downloadable release found' }, {
    status: 502, headers: { 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' },
  });
};
