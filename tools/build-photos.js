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

/* rect is in the master's own pixels: x, y, w, h.
   Gallery tiles are 4:5. The two wide crops below are 16:9 and exist to sit
   behind text as page backgrounds, so they are chosen to be abstract — a band
   of panel and reflection rather than a whole recognisable car. A background
   that competes with the headline is a background that has failed. */
const PHOTOS = [
  {
    file: '04-sti.jpg', out: 'bg-hero.jpg', width: 1920,
    // Bonnet, scoop and vents. Left edge starts at 400 to clear the wheelie
    // bin; the wet driveway on that side ends up under the darkest part of
    // the overlay anyway, which is where the wordmark sits.
    rect: { x: 400, y: 750, w: 2400, h: 1350 }, quality: 0.7,
    note: 'home hero — STI bonnet and scoop'
  },
  {
    // Phone-sized copy of the same crop. A 1920px hero on a phone is a third
    // of a megabyte spent on pixels the screen cannot show.
    file: '04-sti.jpg', out: 'bg-hero-sm.jpg', width: 960,
    rect: { x: 400, y: 750, w: 2400, h: 1350 }, quality: 0.64,
    note: 'home hero, phones'
  },
  {
    file: '05-reflection.jpg', out: 'bg-band.jpg', width: 1920,
    // Starts at x=650 to cut the house and yard out of the left edge.
    rect: { x: 650, y: 1250, w: 2350, h: 1322 }, quality: 0.7,
    note: 'mid-page band — the reflection across the door'
  },
  {
    // Promoted to the feature slot. The car mirrored in the door is the
    // clearest proof of finish in the whole set.
    file: '05-reflection.jpg', out: 'work-feature.jpg', width: 1200,
    rect: { x: 600, y: 300, w: 2400, h: 3000 },
    note: 'feature — crops off the neighbouring house on the left'
  },
  {
    file: '04-sti.jpg', out: 'work-guard.jpg', width: 800,
    rect: { x: 700, y: 1700, w: 1200, h: 1500 },
    note: 'gold wheel and front guard'
  },
  {
    file: '04-sti.jpg', out: 'work-sti.jpg', width: 800,
    rect: { x: 600, y: 300, w: 2400, h: 3000 },
    note: 'crops off the wheelie bin on the left'
  },
  {
    file: '02-wheel.jpg', out: 'work-wheel.jpg', width: 800,
    rect: { x: 0, y: 773, w: 1728, h: 2160 }, quality: 0.74,
    note: 'process shot — hand, brush, wheel'
  },
  {
    file: '01-foam.jpg', out: 'work-foam.jpg', width: 800,
    // Right edge stops at 2280; the plate starts around x=2560.
    rect: { x: 1480, y: 540, w: 800, h: 1000 },
    note: 'tight on the flank — the front of this car has a readable plate'
  },

  /* Added Aug 2026. The gallery was two cars, both low sedans, and most of the
     work around here is utes — so these are 4WDs. All three masters were shot
     in flat overcast daylight with houses, powerlines and a neighbour's car in
     the top third and driveway in the bottom third; every crop below throws
     both away and keeps only metal. No plates appear in any of them. */
  {
    file: '06-dmax.jpg', out: 'work-dmax.jpg', width: 800,
    // Snorkel, guard, bullbar and front wheel. Top edge sits under the roof
    // rack to lose the houses and powerlines; bottom stops above the driveway.
    rect: { x: 480, y: 826, w: 1106, h: 1382 },
    note: 'black D-MAX — snorkel, guard and wheel'
  },
  {
    file: '06-dmax.jpg', out: 'work-dmax-door.jpg', width: 800,
    // The flank, where the grass and sky are mirrored in the wet door.
    rect: { x: 192, y: 1056, w: 768, h: 960 },
    note: 'the same ute — reflection across the door'
  },
  {
    file: '07-blue-ute.jpg', out: 'work-blueute.jpg', width: 800,
    // The alloy is the subject. Kept to the right of x=1500 so the stained
    // carport floor on the left stays out of it.
    rect: { x: 1500, y: 2000, w: 1400, h: 1750 },
    note: 'blue ute — flare, tyre and alloy'
  },
  {
    file: '08-blue-panel.jpg', out: 'work-bluepanel.jpg', width: 800,
    // The door, where the finish actually shows. Starts at y=900 because the
    // neighbour's house sits in the top right corner above it.
    rect: { x: 600, y: 900, w: 1400, h: 1750 },
    note: 'wet blue door — the reflection is the point'
  },

  /* Two more 16:9 bands to sit behind text, chosen the same way as bg-band:
     a stripe of panel and reflection, not a car anyone could identify. They
     live under a heavy gradient, so they read as texture rather than picture. */
  {
    file: '06-dmax.jpg', out: 'bg-quotes.jpg', width: 1920,
    rect: { x: 100, y: 1180, w: 1600, h: 900 }, quality: 0.68,
    note: 'behind the reviews — black flank and door handles'
  },
  {
    /* The operator. Cropped to the chest so the shelves of product stay in
       frame — they say "real workshop" better than any sentence — while the
       ceiling, the floor clutter and the gear bags at the edges go. */
    file: '09-tim.jpg', out: 'me.jpg', width: 700,
    rect: { x: 629, y: 1365, w: 1744, h: 2180 }, quality: 0.84,
    note: 'the operator, in the workshop'
  },
  {
    file: '08-blue-panel.jpg', out: 'bg-faq.jpg', width: 1920,
    rect: { x: 500, y: 1150, w: 2400, h: 1350 }, quality: 0.68,
    note: 'behind the questions — blue door and reflection'
  }
];

function build(photo) {
  const src = path.join(SRC, photo.file).replace(/\\/g, '/');
  const r = photo.rect;
  const w = photo.width;
  // Height follows the crop's own shape, so 4:5 tiles and 16:9 bands can
  // share this function without either being squashed.
  const h = Math.round(w * r.h / r.w);
  const q = photo.quality || QUALITY;

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
      'document.getElementById("out").textContent=c.toDataURL("image/jpeg",' + q + ');' +
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
