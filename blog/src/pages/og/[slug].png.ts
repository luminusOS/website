import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

const LEFT_X = 64;
const LEFT_WIDTH = 372;
const IMG_X = 492;
const IMG_WIDTH = WIDTH - IMG_X - 40;
const IMG_HEIGHT = HEIGHT - 80;

const postDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('posts');
  return posts
    .filter((post) => post.data.image)
    .map((post) => ({
      params: { slug: post.id },
      props: {
        image: post.data.image!,
        title: post.data.title,
        eyebrow: `${post.data.tag} · ${postDate.format(post.data.date)}`,
      },
    }));
};

function charWidth(ch: string): number {
  if (ch === ' ') return 0.28;
  if ('iljtf.,:;\'"!|()[]'.includes(ch)) return 0.3;
  if ('mwMW@#%&'.includes(ch)) return 0.82;
  if (ch >= 'A' && ch <= 'Z') return 0.68;
  if (ch >= '0' && ch <= '9') return 0.55;
  return 0.5;
}

function wrapTitle(title: string, maxWidth: number, fontSize: number, maxLines: number): string[] {
  const widthOf = (s: string) => [...s].reduce((acc, ch) => acc + charWidth(ch), 0) * fontSize;
  const lines: string[] = [];
  let line = '';
  for (const word of title.split(' ')) {
    const candidate = line ? `${line} ${word}` : word;
    if (!line || widthOf(candidate) <= maxWidth) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[ .,:;-]+$/, '')}…`;
  }
  return lines;
}

function escapeXml(s: string): string {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

async function renderCard(
  source: Buffer,
  logoPath: string,
  title: string,
  eyebrow: string,
): Promise<Buffer> {
  const foreground = await sharp(source)
    .resize(IMG_WIDTH, IMG_HEIGHT, { fit: 'inside', withoutEnlargement: true })
    .png()
    .toBuffer();

  const meta = await sharp(foreground).metadata();
  const w = meta.width!;
  const h = meta.height!;
  const x = IMG_X + (IMG_WIDTH - w) / 2;
  const y = (HEIGHT - h) / 2;

  const titleSize = 38;
  const titleLines = wrapTitle(title, LEFT_WIDTH, titleSize, 6);
  const titleTspans = titleLines
    .map(
      (line, i) =>
        `<tspan x="${LEFT_X}" dy="${i === 0 ? 0 : titleSize * 1.18}">${escapeXml(line)}</tspan>`,
    )
    .join('');

  const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
    <rect width="${WIDTH}" height="${HEIGHT}" fill="#1e1e1e"/>

    <g transform="translate(${LEFT_X} 76) scale(0.10583)" fill="#3584e4" fill-rule="evenodd">
      <path d="${logoPath}"/>
    </g>

    <text x="${LEFT_X}" y="206" font-family="Instrument Sans" font-weight="600" font-size="14"
      letter-spacing="2.4" fill="#62a0ea">${escapeXml(eyebrow.toUpperCase())}</text>

    <text x="${LEFT_X}" y="258" font-family="Bricolage Grotesque" font-weight="700"
      font-size="${titleSize}" fill="#f4f4f4">${titleTspans}</text>

    <text x="${LEFT_X}" y="${HEIGHT - 60}" font-family="Instrument Sans" font-weight="400"
      font-size="15" letter-spacing="0.4" fill="#8f8f8f">blog.luminusos.org</text>

    <defs>
      <clipPath id="frame"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16"/></clipPath>
    </defs>
    <image href="data:image/png;base64,${foreground.toString('base64')}" x="${x}" y="${y}" width="${w}" height="${h}" clip-path="url(#frame)"/>
    <rect x="${x + 0.5}" y="${y + 0.5}" width="${w - 1}" height="${h - 1}" rx="16" fill="none" stroke="rgba(255, 255, 255, 0.28)"/>
  </svg>`);

  return sharp(card).png().toBuffer();
}

export const GET: APIRoute = async ({ props }) => {
  const publicDir = process.env.BLOG_PUBLIC_DIR ?? join(process.cwd(), 'public');
  const source = readFileSync(join(publicDir, props.image));
  const brand = readFileSync(join(publicDir, 'logos/brand.svg'), 'utf8');
  const logoPath = brand.match(/<path[^>]*?\sd="([^"]+)"/s)![1];
  const card = await renderCard(source, logoPath, props.title, props.eyebrow);

  return new Response(new Uint8Array(card), {
    headers: { 'Content-Type': 'image/png' },
  });
};
