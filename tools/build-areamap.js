/* ==========================================================================
   DucoWorks — generates the geographic service-area map.

   Prints an SVG block to stdout. Paste it into index.html, or:
     node tools/build-areamap.js > tools/_areamap.svg

   Towns are plotted from real latitude and longitude with an equirectangular
   projection, and the x scale is squeezed by cos(latitude) so the shape is
   not stretched sideways. It is a real map of where the work happens, drawn
   in the brand's own palette rather than embedded from a tile service.
   ========================================================================== */

'use strict';

const TOWNS = [
  { n: 'Cairns',          lat: -16.920, lon: 145.770, side: 'left',  zone: 'north' },
  { n: 'Edmonton',        lat: -17.020, lon: 145.745, side: 'left',  zone: 'north' },
  { n: 'Gordonvale',      lat: -17.100, lon: 145.787, side: 'left',  zone: 'north' },
  { n: 'Babinda',         lat: -17.342, lon: 145.925, side: 'left',  zone: 'north' },
  { n: 'Bramston Beach',  lat: -17.363, lon: 146.010, side: 'right', zone: 'north' },
  { n: 'Flying Fish Pt',  lat: -17.490, lon: 146.083, side: 'right', zone: 'home' },
  { n: 'Innisfail',       lat: -17.523, lon: 146.030, side: 'left',  zone: 'home', base: true },
  { n: 'Mourilyan',       lat: -17.580, lon: 146.040, side: 'right', zone: 'home' },
  { n: 'South Johnstone', lat: -17.610, lon: 145.990, side: 'left',  zone: 'home' },
  { n: 'Mena Creek',      lat: -17.662, lon: 145.980, side: 'left',  zone: 'home' },
  { n: 'Silkwood',        lat: -17.750, lon: 146.020, side: 'left',  zone: 'south' },
  { n: 'El Arish',        lat: -17.800, lon: 146.000, side: 'left',  zone: 'south' },
  { n: 'Mission Beach',   lat: -17.870, lon: 146.105, side: 'right', zone: 'south' },
  { n: 'Tully',           lat: -17.933, lon: 145.922, side: 'left',  zone: 'south' },
  { n: 'Tully Heads',     lat: -18.000, lon: 146.055, side: 'right', zone: 'south' },
  { n: 'Cardwell',        lat: -18.260, lon: 146.020, side: 'left',  zone: 'ask' }
];

/* The coast, sampled roughly from the real shoreline so the land mass reads
   as Far North Queensland rather than as a generic blob. */
const COAST = [
  [-16.860, 145.780], [-16.925, 145.800], [-17.010, 145.790], [-17.100, 145.850],
  [-17.190, 145.930], [-17.290, 145.985], [-17.360, 146.045], [-17.440, 146.075],
  [-17.500, 146.100], [-17.560, 146.075], [-17.640, 146.075], [-17.720, 146.070],
  [-17.800, 146.085], [-17.860, 146.135], [-17.930, 146.130], [-18.010, 146.090],
  [-18.120, 146.060], [-18.230, 146.055], [-18.330, 146.040]
];

const PAD = { l: 92, r: 96, t: 34, b: 30 };
const LAT_N = -16.84, LAT_S = -18.34;
const LON_W = 145.70, LON_E = 146.17;

const SCALE_Y = 560 / (LAT_N - LAT_S);
const SCALE_X = SCALE_Y * Math.cos(-17.6 * Math.PI / 180);

const W = Math.round(PAD.l + (LON_E - LON_W) * SCALE_X + PAD.r);
const H = Math.round(PAD.t + (LAT_N - LAT_S) * SCALE_Y + PAD.b);

const x = (lon) => +(PAD.l + (lon - LON_W) * SCALE_X).toFixed(1);
const y = (lat) => +(PAD.t + (LAT_N - lat) * SCALE_Y).toFixed(1);

/* Land is everything west of the coastline. */
const landPath = 'M ' + COAST.map(p => x(p[1]) + ' ' + y(p[0])).join(' L ') +
  ` L 0 ${y(LAT_S)} L 0 ${y(LAT_N)} Z`;
const coastPath = 'M ' + COAST.map(p => x(p[1]) + ' ' + y(p[0])).join(' L ');

const ZONE_BAND = [
  { zone: 'north', from: -16.90, to: -17.40, label: '+$55 / +$35' },
  { zone: 'home',  from: -17.40, to: -17.70, label: 'No charge' },
  { zone: 'south', from: -17.70, to: -18.05, label: '+$25' },
  { zone: 'ask',   from: -18.05, to: -18.31, label: 'On ask' }
];

let out = [];
out.push(`<svg class="geo-map" viewBox="0 0 ${W} ${H}" role="img"`);
out.push(`     aria-label="Map of the DucoWorks service area on the Far North Queensland coast, from Cairns in the north through Innisfail to Cardwell in the south.">`);
out.push('  <rect class="sea" x="0" y="0" width="' + W + '" height="' + H + '"/>');
out.push(`  <path class="land" d="${landPath}"/>`);

ZONE_BAND.forEach(b => {
  out.push(`  <rect class="zone zone-${b.zone}" x="0" y="${y(b.from)}" width="${W}" height="${(y(b.to) - y(b.from)).toFixed(1)}"/>`);
  out.push(`  <text class="zone-label" x="${W - 10}" y="${(y(b.from) + 15).toFixed(1)}">${b.label}</text>`);
});

out.push(`  <path class="coast" d="${coastPath}"/>`);
out.push(`  <text class="sea-label" x="${W - 12}" y="${H - 14}">Coral Sea</text>`);

TOWNS.forEach(t => {
  const cx = x(t.lon), cy = y(t.lat);
  const anchor = t.side === 'left' ? 'end' : 'start';
  const tx = t.side === 'left' ? cx - 9 : cx + 9;
  if (t.base) {
    out.push(`  <g class="geo-base">`);
    out.push(`    <circle cx="${cx}" cy="${cy}" r="14"/>`);
    out.push(`    <circle cx="${cx}" cy="${cy}" r="6"/>`);
    out.push(`    <text x="${tx}" y="${cy + 1}" text-anchor="${anchor}">Innisfail</text>`);
    out.push(`    <text class="geo-base-note" x="${tx}" y="${cy + 15}" text-anchor="${anchor}">Base &amp; workshop</text>`);
    out.push(`  </g>`);
  } else {
    out.push(`  <g class="geo-town">`);
    out.push(`    <circle cx="${cx}" cy="${cy}" r="3.4"/>`);
    out.push(`    <text x="${tx}" y="${cy + 4}" text-anchor="${anchor}">${t.n}</text>`);
    out.push(`  </g>`);
  }
});

out.push('</svg>');
console.log(out.join('\n'));
