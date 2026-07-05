import { spawn } from 'node:child_process';
import http from 'node:http';
import net from 'node:net';

const host = '127.0.0.1';
const publicPort = Number(process.env.PORT ?? 4321);
const targets = {
  site: { label: 'site', port: publicPort + 1 },
  blog: { label: 'blog', port: publicPort + 2, prefix: '/blog' },
  wiki: { label: 'wiki', port: publicPort + 3, prefix: '/wiki' },
};
let shuttingDown = false;
let children = [];

const server = http.createServer((request, response) => {
  const target = targetFor(request.url ?? '/', request.headers);
  const proxy = http.request(
    {
      host,
      port: target.port,
      path: request.url,
      method: request.method,
      headers: { ...request.headers, host: `${host}:${target.port}` },
    },
    (upstream) => {
      response.writeHead(upstream.statusCode ?? 502, upstream.headers);
      upstream.pipe(response);
    },
  );

  proxy.on('error', () => {
    response.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' });
    response.end(`Dev target "${target.label}" is not ready yet.\n`);
  });

  request.pipe(proxy);
});

server.on('upgrade', (request, socket, head) => {
  const target = targetFor(request.url ?? '/', request.headers);
  const upstream = net.connect(target.port, host, () => {
    upstream.write(`${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`);
    for (const [name, value] of Object.entries(request.headers)) {
      if (name.toLowerCase() === 'host') {
        continue;
      }
      if (value !== undefined) {
        upstream.write(`${name}: ${Array.isArray(value) ? value.join(', ') : value}\r\n`);
      }
    }
    upstream.write(`host: ${host}:${target.port}\r\n\r\n`);
    upstream.write(head);
    socket.pipe(upstream).pipe(socket);
  });

  upstream.on('error', () => socket.destroy());
});

server.listen(publicPort, '0.0.0.0', () => {
  console.log(`dev proxy ready: http://localhost:${publicPort}`);
  console.log(`routes: / -> site, /aurora -> site, /blog -> blog, /wiki -> wiki`);
  children = [
    start('site', ['exec', 'astro', '--', 'dev', '--host', host, '--port', String(targets.site.port)]),
    start('blog', ['exec', 'astro', '--', 'dev', '--root', 'blog', '--host', host, '--port', String(targets.blog.port)], {
      SITE_BASE: '/blog',
      SITE_URL: `http://localhost:${publicPort}`,
    }),
    start('wiki', ['exec', 'astro', '--', 'dev', '--root', 'wiki', '--host', host, '--port', String(targets.wiki.port)], {
      SITE_BASE: '/wiki',
      SITE_URL: `http://localhost:${publicPort}`,
    }),
  ];
});

server.on('error', (error) => {
  console.error(error.message);
  process.exit(1);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => shutdown(signal));
}

function start(label, args, env = {}) {
  const child = spawn('npm', args, {
    cwd: new URL('..', import.meta.url),
    env: { ...process.env, ...env },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => write(label, chunk));
  child.stderr.on('data', (chunk) => write(label, chunk));
  child.on('exit', (code) => {
    if (code !== 0 && !shuttingDown) {
      console.error(`[${label}] exited with code ${code}`);
      shutdown('SIGTERM');
    }
  });

  return child;
}

function targetFor(rawUrl, headers = {}) {
  const pathname = new URL(rawUrl, `http://localhost:${publicPort}`).pathname;

  if (pathname === targets.blog.prefix || pathname.startsWith(`${targets.blog.prefix}/`)) {
    return targets.blog;
  }

  if (pathname === targets.wiki.prefix || pathname.startsWith(`${targets.wiki.prefix}/`)) {
    return targets.wiki;
  }

  if (isSharedDevPath(pathname)) {
    const referer = Array.isArray(headers.referer) ? headers.referer[0] : headers.referer;
    const refererPath = referer ? new URL(referer, `http://localhost:${publicPort}`).pathname : '';

    if (refererPath === targets.blog.prefix || refererPath.startsWith(`${targets.blog.prefix}/`)) {
      return targets.blog;
    }

    if (refererPath === targets.wiki.prefix || refererPath.startsWith(`${targets.wiki.prefix}/`)) {
      return targets.wiki;
    }
  }

  return targets.site;
}

function isSharedDevPath(pathname) {
  return [
    '/_astro/',
    '/@astro/',
    '/@fs/',
    '/@id/',
    '/@vite/',
    '/node_modules/',
    '/src/',
  ].some((prefix) => pathname.startsWith(prefix));
}

function write(label, chunk) {
  for (const line of String(chunk).split('\n')) {
    if (line) {
      console.log(`[${label}] ${line}`);
    }
  }
}

function shutdown(signal) {
  shuttingDown = true;
  server.close();
  for (const child of children) {
    child.kill(signal);
  }
  process.exit(signal === 'SIGINT' ? 130 : 143);
}
