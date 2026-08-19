/* ==========================================================================
   DucoWorks — social flyers for Instagram and Facebook.

   Run:  node tools/build-flyers.js

   Outputs into /flyers/ at two sizes each:
     *-ig.jpg    1080x1350  Instagram feed (4:5 gets the most reach)
     *-sq.jpg    1080x1080  Facebook feed and Instagram grid

   Photo crops are fixed rectangles, chosen so no customer number plate is
   ever in frame. The Porsche shots have a readable plate low on the bumper,
   so that crop stops well above it.

   Requires Google Chrome. No npm packages.
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(__dirname, 'source', 'flyer');
const OUT = path.join(ROOT, 'flyers');
const TMP = path.join(__dirname, '_flyer.html');

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  (process.env.LOCALAPPDATA || '') + '/Google/Chrome/Application/chrome.exe'
].find((p) => p && fs.existsSync(p));

if (!CHROME) { console.error('Chrome not found.'); process.exit(1); }

const url = (p) => 'file:///' + p.split(path.sep).join('/');

/* Crop rectangles in each master's own pixels. */
const PHOTOS = {
  // x>=700 excludes the number plate on the front bumper completely.
  porsche:    { file: 'porsche-foam.jpg', rect: { x: 700, y: 950, w: 2000, h: 2500 }, night: true },
  reflection: { file: 'reflection.jpg',   rect: { x: 300, y: 500, w: 2400, h: 3000 } },
  dualcab:    { file: 'dualcab.jpg',      rect: { x: 0,   y: 830, w: 1728, h: 2160 } },
  commodore:  { file: 'commodore.jpg',    rect: { x: 300, y: 400, w: 2400, h: 3000 } },
  mirage:     { file: 'mirage.jpg',       rect: { x: 300, y: 500, w: 2400, h: 3000 } },
  blue4wd:    { file: 'blue4wd.jpg',      rect: { x: 300, y: 500, w: 2400, h: 3000 } }
};

const FLYERS = [
  {
    name: '1-launch', photo: 'porsche', flag: 'Save $50',
    kicker: 'Launch offer &middot; Cairns to Tully',
    headline: '$50 off<br>your first<br>detail',
    sub: 'Mobile detailing at your place, seven days. Four questions online and you have the price — no callback, no haggling.',
    cta: 'Book at ducoworks.com', foot: 'From $190 &middot; 0401 881 802'
  },
  {
    name: '2-ceramic', photo: 'reflection', flag: 'Free',
    kicker: 'Five-year ceramic &middot; Innisfail workshop',
    headline: 'Free interior<br>detail with<br>every ceramic',
    sub: 'Paint corrected, then coated for five years. Drop it off and the inside gets done too — at no extra cost.',
    cta: 'Ceramic from $1,290', foot: 'ducoworks.com &middot; 0401 881 802'
  },
  {
    name: '3-mobile', photo: 'dualcab',
    kicker: 'Mobile &middot; seven days',
    headline: 'We come<br>to you',
    sub: 'Cairns, Innisfail, Mission Beach, Tully. Your driveway or your workplace, so you keep your day.',
    cta: 'Get your price online', foot: 'ducoworks.com &middot; 0401 881 802'
  },
  {
    name: '5-second-car', photo: 'mirage', flag: 'Save $40',
    kicker: 'Same address &middot; same day',
    headline: 'Second car,<br>$40 off',
    sub: 'Doing yours? Do the partner&rsquo;s, the work ute, the neighbour&rsquo;s. The van is already there, so the second car costs you less.',
    cta: 'Book both at ducoworks.com', foot: 'Cairns to Tully &middot; 0401 881 802'
  },
  {
    name: '6-plan', photo: 'blue4wd', flag: '4 for 3',
    kicker: 'Maintenance plan &middot; from $570 a year',
    headline: 'Four details.<br>Pay for<br>three.',
    sub: 'Quarterly detailing, booked in for the year. The car never gets away from you, and the fourth one is on me.',
    cta: 'Ask about the plan', foot: 'ducoworks.com &middot; 0401 881 802'
  },
  {
    name: '7-midweek', photo: 'dualcab', flag: 'Save $30',
    kicker: 'Tuesday to Thursday',
    headline: '$30 off<br>midweek',
    sub: 'Weekends book out early. Midweek does not — so if you can leave it on a weekday, it costs you less.',
    cta: 'Book midweek online', foot: 'ducoworks.com &middot; 0401 881 802'
  },
  {
    name: '8-referral', photo: 'commodore', flag: '$25 each',
    kicker: 'Referral &middot; Cairns to Tully',
    headline: 'Send a mate.<br>You both<br>save $25.',
    sub: 'They get $25 off their first detail. You get $25 off your next. All they have to do is mention your name.',
    cta: 'ducoworks.com', foot: 'Mobile seven days &middot; 0401 881 802'
  },
  {
    name: '9-wet', photo: 'porsche', flag: 'Before the wet',
    kicker: 'Sealed inside and out',
    headline: 'Beat the<br>wet season',
    sub: 'Months of damp is what turns an interior musty and takes the life out of paint. Far easier to seal it before than to fix it after.',
    cta: 'Get protected', foot: 'From $190 &middot; ducoworks.com'
  },
  {
    name: '4-finish', photo: 'commodore', flag: '100+ cars',
    kicker: 'Innisfail &middot; Cassowary Coast',
    headline: 'Not just<br>clean.<br>Finished.',
    sub: 'One operator, one standard, every car. Over a hundred of them this year.',
    cta: 'See the work', foot: 'ducoworks.com &middot; 0401 881 802'
  }
];

function page(f, W, H) {
  const p = PHOTOS[f.photo];
  const r = p.rect;
  // Scale the master so the chosen rectangle exactly fills the canvas.
  const scale = Math.max(W / r.w, H / r.h);
  const lines = f.headline.split('<br>').length;
  const pad = Math.round(W * .085);
  return `<!doctype html><meta charset="utf-8">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${W}px;height:${H}px;overflow:hidden;background:#08080a}
  .card{position:relative;width:${W}px;height:${H}px;overflow:hidden;
        font-family:"Segoe UI",system-ui,sans-serif;color:#f2efe8}
  .shot{position:absolute;left:${-r.x * scale}px;top:${-r.y * scale}px;
        width:${3072 * scale}px;height:auto;
        filter:saturate(${p.night ? 1.05 : .9}) contrast(1.06) brightness(${p.night ? 1.28 : .86})}
  /* The scrim has to cover the whole text block, not just the very bottom —
     champagne on a bright red bonnet is unreadable otherwise. */
  .veil{position:absolute;inset:0;background:
        linear-gradient(to top,
          rgba(8,8,10,.96) 0%,
          rgba(8,8,10,.92) 30%,
          rgba(8,8,10,${p.night ? '.74' : '.82'}) 48%,
          rgba(8,8,10,${p.night ? '.22' : '.4'}) 64%,
          rgba(8,8,10,${p.night ? '.1' : '.3'}) 100%),
        linear-gradient(100deg, rgba(8,8,10,${p.night ? '.4' : '.55'}) 0%, transparent 58%)}

  .inner{position:absolute;inset:0;padding:${pad}px;
         display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;align-items:flex-start;justify-content:space-between}
  .mark{width:${Math.round(W * .105)}px;height:auto;display:block}

  /* The deal has to read in the half second someone spends scrolling past. */
  .flag{border:1px solid #c9a961;color:#c9a961;
        font-family:Consolas,monospace;font-size:${Math.round(W * .021)}px;
        letter-spacing:.24em;text-transform:uppercase;
        padding:${Math.round(W * .015)}px ${Math.round(W * .026)}px}

  .kicker{font-family:Consolas,monospace;font-size:${Math.round(W * .0195)}px;
          letter-spacing:.3em;text-transform:uppercase;color:#c9a961;
          text-shadow:0 2px 14px rgba(8,8,10,.9);
          margin-bottom:${Math.round(W * .026)}px}
  h1{font-size:${Math.round(W * (lines > 2 ? .094 : .125))}px;
     font-weight:200;letter-spacing:.02em;line-height:1.02;text-transform:uppercase}
  .rule{width:${Math.round(W * .075)}px;height:1px;background:#c9a961;
        margin:${Math.round(W * .03)}px 0}
  .sub{font-size:${Math.round(W * .0255)}px;font-weight:300;line-height:1.5;color:#ded9cf;
       max-width:${Math.round(W * .74)}px}

  /* A solid bar reads as a button. A line of text reads as small print. */
  .cta{margin-top:${Math.round(W * .04)}px;background:#c9a961;color:#08080a;
       font-family:Consolas,monospace;font-weight:700;
       font-size:${Math.round(W * .0245)}px;letter-spacing:.2em;text-transform:uppercase;
       padding:${Math.round(W * .026)}px ${Math.round(W * .03)}px;display:inline-block}
  .foot{margin-top:${Math.round(W * .022)}px;
        font-family:Consolas,monospace;font-size:${Math.round(W * .0195)}px;
        letter-spacing:.2em;text-transform:uppercase;color:#a9a49a}
</style>
<div class="card">
  <img class="shot" src="${url(path.join(SRC, p.file))}">
  <div class="veil"></div>
  <div class="inner">
    <div class="top">
      <img class="mark" src="${url(path.join(ROOT, 'mark.png'))}">
      ${f.flag ? `<span class="flag">${f.flag}</span>` : ''}
    </div>
    <div>
      <p class="kicker">${f.kicker}</p>
      <h1>${f.headline}</h1>
      <div class="rule"></div>
      <p class="sub">${f.sub}</p>
      <div><span class="cta">${f.cta}</span></div>
      <p class="foot">${f.foot}</p>
    </div>
  </div>
</div>`;
}

function shoot(html, out, W, H) {
  fs.writeFileSync(TMP, html);
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    '--force-device-scale-factor=1', '--virtual-time-budget=20000',
    '--screenshot=' + out, '--window-size=' + W + ',' + H, url(TMP)
  ], { stdio: 'ignore' });
  fs.unlinkSync(TMP);
  console.log('  ' + path.basename(out).padEnd(22) + W + 'x' + H + '   ' +
    (fs.statSync(out).size / 1024).toFixed(0) + ' kB');
}

if (!fs.existsSync(OUT)) { fs.mkdirSync(OUT, { recursive: true }); }

console.log('Building DucoWorks flyers…');
FLYERS.forEach(function (f) {
  shoot(page(f, 1080, 1350), path.join(OUT, f.name + '-ig.png'), 1080, 1350);
  shoot(page(f, 1080, 1080), path.join(OUT, f.name + '-sq.png'), 1080, 1080);
});
console.log('Done — ' + (FLYERS.length * 2) + ' files in /flyers/');

/* ---- web copies ---------------------------------------------------------
   PNGs are 1-2 MB each, which is slow to pull down on mobile data. These JPEG
   copies are what /flyers/ serves so Tim can save them to his phone. */
function toJpeg(pngPath, jpgPath, W, H) {
  const html = '<!doctype html><meta charset="utf-8"><div id="out"></div>' +
    '<script>var i=new Image();i.onload=function(){' +
    'var c=document.createElement("canvas");c.width=' + W + ';c.height=' + H + ';' +
    'var g=c.getContext("2d");g.drawImage(i,0,0,' + W + ',' + H + ');' +
    'document.getElementById("out").textContent=c.toDataURL("image/jpeg",0.92);};' +
    'i.src="' + url(pngPath) + '";<\/script>';
  fs.writeFileSync(TMP, html);
  const dom = execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--allow-file-access-from-files',
    '--virtual-time-budget=20000', '--dump-dom', url(TMP)
  ], { encoding: 'utf8', maxBuffer: 96 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
  fs.unlinkSync(TMP);
  const m = dom.match(/data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/);
  if (!m) { console.log('  FAILED jpeg for ' + path.basename(pngPath)); return; }
  fs.writeFileSync(jpgPath, Buffer.from(m[1], 'base64'));
  console.log('  ' + path.basename(jpgPath).padEnd(22) +
    (fs.statSync(jpgPath).size / 1024).toFixed(0) + ' kB');
}

console.log('Making web copies…');
FLYERS.forEach(function (f) {
  toJpeg(path.join(OUT, f.name + '-ig.png'), path.join(OUT, f.name + '-ig.jpg'), 1080, 1350);
  toJpeg(path.join(OUT, f.name + '-sq.png'), path.join(OUT, f.name + '-sq.jpg'), 1080, 1080);
});

/* ---- download page ------------------------------------------------------
   Generated from FLYERS so it can never fall out of step with what exists. */
const TITLES = {
  '1-launch': '$50 off first detail', '2-ceramic': 'Free interior with ceramic',
  '3-mobile': 'We come to you',       '4-finish': 'Not just clean',
  '5-second-car': 'Second car $40 off', '6-plan': 'Four for three',
  '7-midweek': '$30 off midweek',     '8-referral': 'Refer a mate',
  '9-wet': 'Beat the wet season'
};

function tile(f, size, label, dims) {
  const t = TITLES[f.name] || f.name;
  return `        <figure><img src="/flyers/${f.name}-${size}.jpg" alt="${t}, ${label}" loading="lazy">
          <figcaption>${t} &middot; ${label} ${dims}</figcaption>
          <a href="/flyers/${f.name}-${size}.jpg">Open full size</a></figure>`;
}

const order = FLYERS.slice().sort((a, b) => a.name.localeCompare(b.name));
const indexHtml = `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>DucoWorks — Social Flyers</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="stylesheet" href="/styles.css">
<style>
  .grab{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:22px}
  .grab figure{margin:0;background:var(--panel);border:1px solid var(--line);padding:13px}
  .grab img{display:block;width:100%;height:auto;border:1px solid var(--line-soft)}
  .grab figcaption{margin-top:11px;font-family:var(--mono);font-size:10px;
    letter-spacing:.16em;text-transform:uppercase;color:var(--muted);line-height:1.5}
  .grab a{display:inline-block;margin-top:7px;font-family:var(--mono);font-size:10px;
    letter-spacing:.16em;text-transform:uppercase}
</style>
</head>
<body>

<header class="site-head">
  <a class="brand" href="/" aria-label="DucoWorks home">
    <img class="brand-mark" src="/mark.png" alt="" width="256" height="256">
    <img class="brand-word" src="/wordmark.png" alt="DucoWorks" width="600" height="55">
  </a>
</header>

<main id="main">
  <section>
    <div class="wrap">
      <p class="num">Internal</p>
      <h2>Social Flyers</h2>
      <p class="intro">On a phone: press and hold an image, then <b>Save to Photos</b>.
        Tall ones are Instagram feed, square ones are Facebook.
        ${FLYERS.length} flyers, ${FLYERS.length * 2} files.</p>

      <h3 style="margin-bottom:18px">Instagram &mdash; 1080&times;1350</h3>
      <div class="grab">
${order.map((f) => tile(f, 'ig', 'Instagram', '1080&times;1350')).join('\n')}
      </div>

      <h3 style="margin:52px 0 18px">Facebook &mdash; 1080&times;1080</h3>
      <div class="grab">
${order.map((f) => tile(f, 'sq', 'Facebook', '1080&times;1080')).join('\n')}
      </div>
    </div>
  </section>
</main>

</body>
</html>
`;
fs.writeFileSync(path.join(OUT, 'index.html'), indexHtml);
console.log('  index.html            ' + FLYERS.length + ' flyers listed');
