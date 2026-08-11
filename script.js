/* ==========================================================================
   DUCOWORKS — quote calculator and booking form
   No dependencies, no build step.

   ALL PRICING LIVES IN THE `PRICING` BLOCK BELOW.
   Change a number there and the whole site follows — the calculator, the
   breakdown and the email that lands in the inbox. Nothing else needs editing
   except the "from" prices printed in the Packages cards in index.html.
   ========================================================================== */

'use strict';

var PRICING = {

  packages: {
    maintenance: {
      label: 'Maintenance Detail',
      duration: '2–3 hours on site',
      base: { small: 120, medium: 150, large: 180 }
    },
    full: {
      label: 'Full Detail',
      duration: '5–6 hours on site',
      base: { small: 280, medium: 340, large: 400 }
    },
    correction: {
      label: 'Correction & Ceramic',
      duration: '1–2 days on site',
      base: { small: 950, medium: 1200, large: 1450 }
    }
  },

  sizes: {
    small:  'Small — hatch, sedan, small ute',
    medium: 'Medium — SUV, wagon, dual cab',
    large:  'Large — 7-seat, 4WD, van'
  },

  // Multiplier applied to the package base only. Travel and add-ons are flat.
  conditions: {
    kept:      { label: 'Well kept',  multiplier: 1.00 },
    average:   { label: 'Average',    multiplier: 1.10 },
    neglected: { label: 'Neglected',  multiplier: 1.25 }
  },

  zones: {
    innisfail: { label: 'Innisfail & within 25 km', fee: 0 },
    south:     { label: 'Silkwood to Tully',        fee: 25 },
    north:     { label: 'Babinda to Edmonton',      fee: 35 },
    cairns:    { label: 'Cairns & northern beaches', fee: 55 }
  },

  addons: {
    headlights: { label: 'Headlight restoration',    price: 80 },
    pethair:    { label: 'Pet hair removal',         price: 60 },
    engine:     { label: 'Engine bay detail',        price: 60 },
    seats:      { label: 'Seat & carpet extraction', price: 120 },
    // Only sold alongside the Correction & Ceramic package.
    ceramic5:   { label: 'Five-year ceramic', price: 400, requires: 'correction' }
  }
};

/* -------------------------------------------------------------------------- */

var calc = document.getElementById('calc');
var elTotal = document.getElementById('est-total');
var elDur = document.getElementById('est-dur');
var elLines = document.getElementById('est-lines');
var elSummary = document.getElementById('quote_summary');
var elQuoted = document.getElementById('quoted-line');

function money(n) {
  return '$' + Math.round(n).toLocaleString('en-AU');
}

function checkedValue(name, fallback) {
  var el = calc.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : fallback;
}

function selectedAddons() {
  var out = [];
  var boxes = calc.querySelectorAll('input[name="addon"]:checked');
  for (var i = 0; i < boxes.length; i++) { out.push(boxes[i].value); }
  return out;
}

/* Add-ons tied to a package are disabled — and cleared — when it isn't chosen. */
function syncAddonAvailability(pkg) {
  var labels = calc.querySelectorAll('#opt-addons label[data-requires]');
  for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    var box = label.querySelector('input');
    var allowed = label.getAttribute('data-requires') === pkg;
    box.disabled = !allowed;
    if (!allowed) { box.checked = false; }
    label.classList.toggle('is-locked', !allowed);
  }
}

function line(name, value, isSub) {
  var li = document.createElement('li');
  if (isSub) { li.className = 'sub'; }
  var a = document.createElement('span');
  a.textContent = name;
  var b = document.createElement('span');
  b.textContent = value;
  li.appendChild(a);
  li.appendChild(b);
  return li;
}

function update() {
  var pkgKey = checkedValue('package', 'maintenance');
  var sizeKey = checkedValue('size', 'small');
  var condKey = checkedValue('condition', 'kept');
  var zoneKey = checkedValue('zone', 'innisfail');

  syncAddonAvailability(pkgKey);

  var pkg = PRICING.packages[pkgKey];
  var cond = PRICING.conditions[condKey];
  var zone = PRICING.zones[zoneKey];

  var base = pkg.base[sizeKey];
  var loading = Math.round(base * cond.multiplier) - base;
  var total = base + loading;

  elLines.textContent = '';
  elLines.appendChild(line(
    pkg.label + ' · ' + PRICING.sizes[sizeKey].split(' — ')[0], money(base)));

  if (loading > 0) {
    elLines.appendChild(line(cond.label + ' condition', '+' + money(loading), true));
  }

  var addons = selectedAddons();
  for (var i = 0; i < addons.length; i++) {
    var add = PRICING.addons[addons[i]];
    total += add.price;
    elLines.appendChild(line(add.label, '+' + money(add.price)));
  }

  total += zone.fee;
  elLines.appendChild(line('Travel — ' + zone.label,
    zone.fee > 0 ? '+' + money(zone.fee) : 'Included'));

  elTotal.textContent = money(total);
  elDur.textContent = pkg.duration;

  /* Carried into the email so the quote arrives with the enquiry. */
  var summary = [
    pkg.label,
    PRICING.sizes[sizeKey],
    cond.label + ' condition',
    zone.label,
    addons.length
      ? 'Add-ons: ' + addons.map(function (k) { return PRICING.addons[k].label; }).join(', ')
      : 'No add-ons',
    'ESTIMATE: ' + money(total) + ' AUD'
  ].join(' | ');

  if (elSummary) { elSummary.value = summary; }
  if (elQuoted) {
    elQuoted.textContent = 'Quoted: ' + pkg.label + ' · ' + money(total);
  }
}

if (calc) {
  calc.addEventListener('change', update);
  update();
}

/* ---- booking form ------------------------------------------------------- */

var form = document.getElementById('book-form');
var submitBtn = document.getElementById('submit-btn');

/* Not `status` — a top-level `var status` binds to window.status, which coerces
   whatever it is given to a string. The element would silently become
   "[object HTMLParagraphElement]" and every write below would throw. */
var statusEl = document.getElementById('form-status');

function setStatus(message, kind) {
  statusEl.textContent = message;
  statusEl.className = 'form-status' + (kind ? ' ' + kind : '');
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var required = form.querySelectorAll('[required]');
    var firstBad = null;
    for (var i = 0; i < required.length; i++) {
      var ok = required[i].checkValidity();
      required[i].classList.toggle('invalid', !ok);
      if (!ok && !firstBad) { firstBad = required[i]; }
    }
    if (firstBad) {
      setStatus('Check the highlighted fields and send again.', 'err');
      firstBad.focus();
      return;
    }

    var data = Object.fromEntries(new FormData(form).entries());

    if (data.access_key === 'YOUR_WEB3FORMS_KEY') {
      setStatus('The form is not connected yet. Call 0401 881 802.', 'err');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Sending…');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) { return res.json(); })
      .then(function (res) {
        if (res.success) {
          form.reset();
          update();
          setStatus('Received. You will hear back today — check your junk folder if not.', 'ok');
        } else {
          setStatus('That did not send. Call 0401 881 802 and it gets sorted.', 'err');
          submitBtn.disabled = false;
        }
      })
      .catch(function () {
        setStatus('No connection. Call 0401 881 802 and it gets sorted.', 'err');
        submitBtn.disabled = false;
      });
  });

  form.addEventListener('input', function (event) {
    if (event.target.classList.contains('invalid') && event.target.checkValidity()) {
      event.target.classList.remove('invalid');
    }
  });
}

/* ---- footer year -------------------------------------------------------- */

var year = document.getElementById('year');
if (year) { year.textContent = new Date().getFullYear(); }
