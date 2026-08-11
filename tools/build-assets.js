/* ==========================================================================
   DucoWorks — one-off image asset generator.

   This is NOT a site build step. The site is plain HTML/CSS/JS and is served
   exactly as it sits in the repo. This script only crops and downscales the
   supplied logo masters in tools/source/ into the web-sized files the pages
   actually load:

     logo.png               1000x497  wordmark lockup, used in the hero
     mark.png                256x256  DW monogram, used in the header
     apple-touch-icon.png    180x180  iOS home screen
     favicon-32.png           32x32   modern browsers
     favicon.ico              32x32   legacy fallback
     og.png                 1200x630  social share card

   Run it only when the logo artwork changes:   node tools/build-assets.js

   Requires Google Chrome installed. No npm packages.
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const TMP = path.join(__dirname, '_render.html');

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  (process.env.LOCALAPPDATA || '') + '/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome'
];

const chrome = CHROME_CANDIDATES.find((p) => p && fs.existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Edit CHROME_CANDIDATES in tools/build-assets.js.');
  process.exit(1);
}

/* Measured once from the masters with a canvas bounding-box scan. If the logo
   files are ever replaced, re-measure these rather than eyeballing them. */
const LOCKUP = { file: 'tools/source/lockup.png', w: 1536, h: 1024 };
const ART = { x: 211, y: 226, w: 1124, h: 559 };   // full lockup artwork
const MONO = { x: 608, y: 226, w: 326, h: 268 };   // DW monogram only
const WORD = { x: 205, y: 562, w: 1136, h: 104 };  // DUCOWORKS wordmark only

const INK = '#08080a';

function shoot(sourceFile, outFile, width, height, transparent) {
  const out = path.join(ROOT, outFile);
  const args = [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=5000',
    '--screenshot=' + out,
    '--window-size=' + width + ',' + height
  ];
  if (transparent) { args.push('--default-background-color=00000000'); }
  args.push('file:///' + path.join(ROOT, sourceFile).replace(/\\/g, '/'));

  execFileSync(chrome, args, { stdio: 'ignore' });

  console.log('  ' + outFile.padEnd(22) + (width + 'x' + height).padEnd(10) +
    (fs.statSync(out).size / 1024).toFixed(1) + ' kB');
  return out;
}

/* Renders a rectangle of a source image, scaled, to its own file.
   The masters are light artwork composited on black. With `knockout`, the
   black is turned back into real transparency: alpha is taken from the
   brightest channel and the colour is un-premultiplied, so the mark can sit
   on a gradient without dragging a black box along with it. */
function crop(src, rect, outFile, outW, outH, knockout) {
  const page =
    '<!doctype html><meta charset="utf-8">' +
    '<style>*{margin:0;padding:0}html,body{background:' +
      (knockout ? 'transparent' : INK) + ';overflow:hidden}' +
    'canvas{display:block}</style>' +
    '<canvas id="c" width="' + outW + '" height="' + outH + '"></canvas>' +
    '<img id="s" src="' + path.basename(src.file) + '" style="display:none">' +
    '<script>' +
    'var i=document.getElementById("s"),c=document.getElementById("c"),g=c.getContext("2d");' +
    'function go(){' +
      'g.drawImage(i,' + rect.x + ',' + rect.y + ',' + rect.w + ',' + rect.h +
        ',0,0,' + outW + ',' + outH + ');' +
      (knockout
        // T lifts the master's near-black ground (#060607) clear of the ramp,
        // so the plate goes fully transparent instead of leaving a grey veil.
        ? 'var d=g.getImageData(0,0,' + outW + ',' + outH + '),p=d.data,T=18;' +
          'for(var k=0;k<p.length;k+=4){' +
            'var m=Math.max(p[k],p[k+1],p[k+2]);' +
            'if(m<=T){p[k+3]=0;continue;}' +
            'var f=255/m;' +
            'p[k]=Math.min(255,p[k]*f);p[k+1]=Math.min(255,p[k+1]*f);' +
            'p[k+2]=Math.min(255,p[k+2]*f);' +
            'p[k+3]=Math.round((m-T)*255/(255-T));' +
          '}g.putImageData(d,0,0);'
        : '') +
    '}' +
    'if(i.complete){go();}else{i.onload=go;}' +
    '<\/script>';

  // The temp page sits beside the master so the relative src resolves.
  const rel = path.join(path.dirname(src.file), '_render.html').replace(/\\/g, '/');
  fs.writeFileSync(path.join(ROOT, rel), page);
  const out = shoot(rel, outFile, outW, outH, knockout);
  fs.unlinkSync(path.join(ROOT, rel));
  return out;
}

/* A square crop centred on a rectangle, with breathing room around it. */
function squareAround(rect, pad) {
  const side = Math.round(Math.max(rect.w, rect.h) * pad);
  return {
    x: Math.round(rect.x + rect.w / 2 - side / 2),
    y: Math.round(rect.y + rect.h / 2 - side / 2),
    w: side,
    h: side
  };
}

/* A PNG can live inside an ICO container verbatim — only the 22-byte
   directory header has to be written by hand. */
function pngToIco(pngPath, icoPath, size) {
  const png = fs.readFileSync(pngPath);
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);            // reserved
  header.writeUInt16LE(1, 2);            // type: icon
  header.writeUInt16LE(1, 4);            // image count
  header.writeUInt8(size >= 256 ? 0 : size, 6);
  header.writeUInt8(size >= 256 ? 0 : size, 7);
  header.writeUInt8(0, 8);               // palette size
  header.writeUInt8(0, 9);               // reserved
  header.writeUInt16LE(1, 10);           // colour planes
  header.writeUInt16LE(32, 12);          // bits per pixel
  header.writeUInt32LE(png.length, 14);  // image bytes
  header.writeUInt32LE(22, 18);          // offset to image
  fs.writeFileSync(icoPath, Buffer.concat([header, png]));
  console.log('  favicon.ico           ' + (size + 'x' + size).padEnd(10) +
    (fs.statSync(icoPath).size / 1024).toFixed(1) + ' kB');
}

console.log('Rendering DucoWorks assets with Chrome…');

const iconRect = squareAround(MONO, 1.34);

crop(LOCKUP, ART, 'logo.png', 1000, Math.round(ART.h * (1000 / ART.w)), true);
crop(LOCKUP, WORD, 'wordmark.png', 600, Math.round(WORD.h * (600 / WORD.w)), true);
crop(LOCKUP, iconRect, 'mark.png', 256, 256, true);

// Icons keep the ink ground — gold on a white tab bar has no contrast.
crop(LOCKUP, iconRect, 'apple-touch-icon.png', 180, 180, false);

const fav = crop(LOCKUP, iconRect, 'favicon-32.png', 32, 32, false);
pngToIco(fav, path.join(ROOT, 'favicon.ico'), 32);

shoot('tools/og-source.html', 'og.png', 1200, 630);

console.log('Done.');
