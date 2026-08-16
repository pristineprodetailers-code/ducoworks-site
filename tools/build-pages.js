/* ==========================================================================
   DucoWorks — generates the service and location pages.

   Run once when a page's content changes:   node tools/build-pages.js

   IMPORTANT: the files it writes are ordinary HTML. Once generated you can
   open any of them and edit the text directly — you do NOT have to come back
   here. This script exists so the header, footer and schema start identical
   across every page, not to lock the pages up.

   If you hand-edit a page and then re-run this script, your edit is
   overwritten. Either edit the page, or edit here and regenerate. Not both.
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://ducoworks.com';
const PHONE_LINK = 'tel:+61401881802';
const PHONE = '0401 881 802';

/* -------------------------------------------------------------------------- */

function head(p) {
  return `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>${p.title}</title>
<meta name="description" content="${p.description}">
<link rel="canonical" href="${SITE}/${p.slug}/">

<meta name="theme-color" content="#08080a">
<meta name="geo.region" content="AU-QLD">
<meta name="geo.placename" content="${p.placename || 'Innisfail, Queensland'}">

<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<meta property="og:type" content="website">
<meta property="og:site_name" content="DucoWorks">
<meta property="og:url" content="${SITE}/${p.slug}/">
<meta property="og:title" content="${p.ogTitle || p.title}">
<meta property="og:description" content="${p.description}">
<meta property="og:image" content="${SITE}/og.png">
<meta property="og:locale" content="en_AU">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}/og.png">

<link rel="stylesheet" href="/styles.css">

<script type="application/ld+json">
${JSON.stringify(p.schema, null, 2)}
</script>

<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
    { '@type': 'ListItem', position: 2, name: p.crumb, item: SITE + '/' + p.slug + '/' }
  ]
}, null, 2)}
</script>
${p.faq ? `
<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: p.faq.map(function (f) {
    return {
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') }
    };
  })
}, null, 2)}
</script>
` : ''}
</head>
<body>

<a class="skip" href="#main">Skip to content</a>

<header class="site-head">
  <a class="brand" href="/" aria-label="DucoWorks home">
    <img class="brand-mark" src="/mark.png" alt="" width="256" height="256">
    <img class="brand-word" src="/wordmark.png" alt="DucoWorks" width="600" height="55">
  </a>
  <input class="nav-toggle" type="checkbox" id="nav-toggle">
  <label class="menu-btn" for="nav-toggle" aria-label="Menu"><span class="bars"></span></label>
  <nav class="site-nav" aria-label="Primary">
    <a href="/#packages">Packages</a>
    <a href="/#work">Work</a>
    <a href="/#quote">Quote</a>
    <a href="/#faq">FAQ</a>
  </nav>
  <a class="btn btn-line head-cta" href="${PHONE_LINK}" aria-label="Call ${PHONE}"><svg class="ico-phone" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z"/></svg><span class="cta-num">${PHONE}</span></a>
</header>

<main id="main">

  <section class="page-hero" style="background-image:url('/photos/${p.image}')">
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb">
        <a href="/">DucoWorks</a> <span>/</span> ${p.crumb}
      </nav>
      <h1>${p.h1}</h1>
      <div class="rule"></div>
      <p class="lead">${p.strap}</p>
      <div class="cta-row">
        <a class="btn btn-solid" href="/#quote">Get an instant price</a>
        <a class="btn btn-line" href="${PHONE_LINK}">Call ${PHONE.replace(/ /g, '&nbsp;')}</a>
      </div>
    </div>
  </section>
`;
}

function foot(p) {
  return `
  <section class="closer">
    <div class="wrap"><div class="prose">
      <p class="eyebrow">${p.closerEyebrow}</p>
      <p class="statement">${p.closerLine}</p>
      <p class="lead">${p.closerBody}</p>
      <div class="cta-row">
        <a class="btn btn-solid" href="/#quote">Price my car</a>
        <a class="btn btn-line" href="${PHONE_LINK}">Call ${PHONE.replace(/ /g, '&nbsp;')}</a>
      </div>
    </div></div>
  </section>

</main>

<footer class="site-foot">
  <div class="wrap">
    <img class="foot-brand" src="/wordmark.png" alt="DucoWorks" width="600" height="55">
    <p class="tag">Precision. Finish. Preserve.</p>

    <div class="foot-grid">
      <div>
        <h4>Services</h4>
        <p><a href="/maintenance-detail/">Maintenance detail</a></p>
        <p><a href="/full-detail/">Full detail</a></p>
        <p><a href="/paint-correction/">Paint correction</a></p>
        <p><a href="/ceramic-coating/">Ceramic coating</a></p>
      </div>
      <div>
        <h4>Areas</h4>
        <p><a href="/cairns/">Cairns</a></p>
        <p><a href="/innisfail/">Innisfail</a></p>
        <p><a href="/tully/">Tully &amp; Mission Beach</a></p>
      </div>
      <div>
        <h4>Contact</h4>
        <p><a href="${PHONE_LINK}">${PHONE}</a></p>
        <p><a href="mailto:ducoworks1@gmail.com">ducoworks1@gmail.com</a></p>
        <p>Seven days, 7:00am&ndash;5:00pm</p>
      </div>
    </div>

    <p class="copy">&copy; <span id="year">2026</span> DucoWorks &middot; Mobile car detailing
      Cairns, Innisfail &amp; Tully</p>
  </div>
</footer>

<div class="sticky-cta">
  <a class="btn btn-solid" href="/#quote">Get a price</a>
  <a class="btn btn-line" href="tel:+61401881802">Call</a>
</div>

<script src="/script.js" defer></script>

</body>
</html>
`;
}

/* Body helpers ------------------------------------------------------------- */

function block(num, title, intro, html, alt) {
  return `
  <section${alt ? ' class="alt"' : ''}>
    <div class="wrap"><div class="prose">
      <p class="num">${num}</p>
      <h2>${title}</h2>
      ${intro ? `<p class="intro">${intro}</p>` : ''}
      ${html}
    </div></div>
  </section>
`;
}

function points(list) {
  return '<ul class="points">' +
    list.map(function (i) { return `<li><b>${i.h}</b>${i.p}</li>`; }).join('') +
    '</ul>';
}

function faqBlock(num, faq) {
  return `
  <section class="alt">
    <div class="wrap"><div class="prose">
      <p class="num">${num}</p>
      <h2>Questions</h2>
      ${faq.map(function (f) {
        return `<details><summary>${f.q}</summary><p>${f.a}</p></details>`;
      }).join('\n      ')}
    </div></div>
  </section>
`;
}

/* -------------------------------------------------------------------------- */

const service = (name, desc) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: name,
  serviceType: name,
  description: desc,
  provider: { '@id': SITE + '/#business' },
  areaServed: ['Cairns', 'Gordonvale', 'Babinda', 'Innisfail', 'Mission Beach', 'Tully']
    .map(function (c) { return { '@type': 'City', name: c }; }),
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: SITE + '/#quote',
    servicePhone: '+61401881802'
  }
});

const PAGES = require('./pages-content.js')({ block, points, faqBlock, service, SITE });

/* -------------------------------------------------------------------------- */

let written = 0;
PAGES.forEach(function (p) {
  const dir = path.join(ROOT, p.slug);
  if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }

  const html = head(p) + p.body + (p.faq ? faqBlock(p.faqNum, p.faq) : '') + foot(p);
  fs.writeFileSync(path.join(dir, 'index.html'), html);

  const words = p.body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log('  /' + (p.slug + '/').padEnd(18) + words + ' words   ' + p.title.slice(0, 52));
  written += 1;
});

/* Sitemap covers the home page plus every generated page.

   lastmod is read from each file rather than typed in, because a hand-written
   date is wrong the moment anyone forgets to change it — and a sitemap that
   claims pages changed when they did not is worse than one with no dates.
   Local time, not toISOString(): in Queensland that returns yesterday until
   mid-morning. */
function lastmod(rel) {
  const file = path.join(ROOT, rel, 'index.html');
  let d;
  try { d = fs.statSync(file).mtime; } catch (e) { d = new Date(); }
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}

const urls = [''].concat(PAGES.map(function (p) { return p.slug + '/'; }));
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(function (u) {
    return '  <url>\n    <loc>' + SITE + '/' + u + '</loc>\n' +
      '    <lastmod>' + lastmod(u) + '</lastmod>\n' +
      '    <changefreq>monthly</changefreq>\n' +
      '    <priority>' + (u === '' ? '1.0' : '0.8') + '</priority>\n  </url>';
  }).join('\n') +
  '\n</urlset>\n');

console.log('Done — ' + written + ' pages + sitemap.xml');
