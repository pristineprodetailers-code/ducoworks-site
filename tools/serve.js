/* ==========================================================================
   DucoWorks — local preview server.

   Development convenience only. Nothing here ships and nothing here is
   required to publish: Cloudflare Pages serves the repo's files directly.

   Run:  node tools/serve.js        then open http://localhost:4310

   Port 4310, deliberately — 3000 belongs to the Aerial Quote dev server and
   the two should never fight over it.

   It mirrors how Pages behaves — clean URLs, and 404.html with a real 404
   status for anything missing.
   ========================================================================== */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = Number(process.env.PORT) || 4310;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json'
};

function resolve(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);

  // Keep the request inside the project directory.
  const target = path.normalize(path.join(ROOT, clean));
  if (!target.startsWith(ROOT)) { return null; }

  const candidates = clean.endsWith('/')
    ? [path.join(target, 'index.html')]
    : [target, target + '.html', path.join(target, 'index.html')];

  return candidates.find((p) => fs.existsSync(p) && fs.statSync(p).isFile()) || null;
}

http.createServer((req, res) => {
  const file = resolve(req.url);

  if (!file) {
    const notFound = path.join(ROOT, '404.html');
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not found');
    console.log('404  ' + req.url);
    return;
  }

  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  res.end(fs.readFileSync(file));
  console.log('200  ' + req.url);
}).listen(PORT, () => {
  console.log('DucoWorks preview → http://localhost:' + PORT);
});
