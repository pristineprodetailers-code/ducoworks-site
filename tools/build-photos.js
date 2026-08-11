/* ==========================================================================
   DucoWorks — crops the job photos down to web size.

   NOT a site build step. It turns the phone-sized masters in
   tools/source/photos/ (3–4 MB each) into the small JPEGs the gallery loads.

   Run when photos are added or replaced:   node tools/build-photos.js

   Every crop is deliberate. Two rules drove them:

     1. No number plates. Customers' cars, customers' plates — the foam shot
        has a readable one, so that crop deliberately sits on the flank
        instead of the front.
     2. No yard clutter. Wheelie bins, buckets, pallets and the neighbour's
        house are cropped out. The brand guide's rule is that the loudest
        thing in the frame should be the space around it.

   All tiles come out 4:5, so the feature (2 cells wide, 2 tall) matches the
   single tiles exactly and the grid stays true.

   Requires Google Chrome. No npm packages.
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(__dirname, 'source', 'photos');
const OUT = path.join(ROOT, 'photos');
const TMP = path.join(__dirname, '_photo.html');

const QUALITY = 0.82;

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  (process.env.LOCALAPPDATA || '') + '/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome'
];

const chrome = CHROME_CANDIDATES.find((p) => p && fs.existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Edit CHROME_CANDIDATES in tools/build-photos.js.');
  process.exit(1);
}

/* rect is in the master's own pixels: x, y, w, h. w:h is always 4:5. */
const PHOTOS = [
  {
    file: '03-rangerover.jpg', out: 'work-feature.jpg', width: 1200,
    rect: { x: 0, y: 400, w: 2100, h: 2625 },
    note: 'feature — keeps the pallet and shed clutter out of frame'
  },
  {
    file: '05-reflection.jpg', out: 'work-reflection.jpg', width: 800,
    rect: { x: 600, y: 300, w: 2400, h: 3000 },
    note: 'crops off the neighbouring house on the left'
  },
  {
    file: '04-sti.jpg', out: 'work-sti.jpg', width: 800,
    rect: { x: 600, y: 300, w: 2400, h: 3000 },
    note: 'crops off the wheelie bin on the left'
  },
  {
    file: '02-wheel.jpg', out: 'work-wheel.jpg', width: 800,
    rect: { x: 0, y: 773, w: 1728, h: 2160 },
    note: 'process shot — hand, brush, wheel'
  },
  {
    file: '01-foam.jpg', out: 'work-foam.jpg', width: 800,
    // Right edge stops at 2280; the plate starts around x=2560.
    rect: { x: 1480, y: 540, w: 800, h: 1000 },
    note: 'tight on the flank — the front of this car has a readable plate'
  }
];

function build(photo) {
  const src = path.join(SRC, photo.file).replace(/\\/g, '/');
  const w = photo.width;
  const h = Math.round(w * 5 / 4);
  const r = photo.rect;

  const page =
    '<!doctype html><meta charset="utf-8"><title>x</title>' +
    '<div id="out"></div>' +
    '<script>' +
    'var i=new Image();' +
    'i.onload=function(){' +
      'var c=document.createElement("canvas");c.width=' + w + ';c.height=' + h + ';' +
      'var g=c.getContext("2d");' +
      'g.imageSmoothingQuality="high";' +
      'g.drawImage(i,' + r.x + ',' + r.y + ',' + r.w + ',' + r.h + ',0,0,' + w + ',' + h + ');' +
      'document.getElementById("out").textContent=c.toDataURL("image/jpeg",' + QUALITY + ');' +
    '};' +
    'i.onerror=function(){document.getElementById("out").textContent="ERR";};' +
    'i.src="file:///' + src + '";' +
    '<\/script>';

  fs.writeFileSync(TMP, page);

  const dom = execFileSync(chrome, [
    '--headless', '--disable-gpu', '--allow-file-access-from-files',
    '--virtual-time-budget=20000',
    '--dump-dom', 'file:///' + TMP.replace(/\\/g, '/')
  ], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });

  fs.unlinkSync(TMP);

  const match = dom.match(/data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/);
  if (!match) {
    console.error('  FAILED ' + photo.file + ' — no image produced');
    return false;
  }

  const target = path.join(OUT, photo.out);
  fs.writeFileSync(target, Buffer.from(match[1], 'base64'));

  console.log('  ' + photo.out.padEnd(22) + (w + 'x' + h).padEnd(11) +
    (fs.statSync(target).size / 1024).toFixed(0) + ' kB   ' + photo.note);
  return true;
}

if (!fs.existsSync(OUT)) { fs.mkdirSync(OUT, { recursive: true }); }

console.log('Cropping DucoWorks job photos…');
var ok = PHOTOS.map(build).filter(Boolean).length;
console.log('Done — ' + ok + '/' + PHOTOS.length + ' written.');
