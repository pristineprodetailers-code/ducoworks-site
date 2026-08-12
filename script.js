/* ==========================================================================
   DUCOWORKS — quote calculator and booking form
   No dependencies, no build step.

   ALL PRICING LIVES IN THE `PRICING` BLOCK BELOW.
   Change a number there and the whole site follows — the calculator, the
   breakdown and the email that lands in the inbox. Nothing else needs editing
   except the "from" prices printed in the Packages cards in index.html.
   ========================================================================== */

'use strict';

/* Benchmarked against Tropix Mobile Detailing Cairns (Aug 2026), the largest
   operator in the region, so these sit at the Cairns market rate rather than
   under it. Their comparable "from" prices:
     Full Maintenance Detail  $192.50     Cut & Polish        $770
     Full In-depth Detail     $385        5yr paint ceramic   $1,299
     Pre-sale Detail          $550        Factory Reset       $2,500

   DucoWorks is not GST registered, so no GST is charged or shown. These are
   simply the prices. (Tropix's odd figures are round numbers plus GST — they
   are registered.) If DucoWorks ever registers, the site needs a line saying
   prices include GST. */

var PRICING = {

  packages: {
    maintenance: {
      label: 'Maintenance Detail',
      duration: '2–3 hours on site',
      base: { small: 190, medium: 240, large: 290 }
    },
    full: {
      label: 'Full Detail',
      duration: '5–6 hours on site',
      base: { small: 385, medium: 460, large: 540 }
    },
    correction: {
      label: 'Correction & Ceramic',
      duration: '1–2 days at the workshop',
      base: { small: 1290, medium: 1590, large: 1890 },
      // Correction and coating are not mobile — the car comes to Innisfail —
      // so no travel is charged and the zone choice does not apply.
      workshop: true
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

  // Detailing extras matched to Tropix's, which are $55 / $165 across the board.
  // The two coatings undercut their $220 each — and by the time they go on, the
  // car is already corrected and masked in the workshop, so the extra work is
  // small against the extra money.
  addons: {
    pethair:    { label: 'Pet hair removal',         price: 55 },
    engine:     { label: 'Engine bay detail',        price: 55 },
    seats:      { label: 'Seat & carpet extraction', price: 165 },
    // Only sold alongside the Correction & Ceramic package.
    glass:      { label: 'Glass coating', price: 180, requires: 'correction' },
    wheels:     { label: 'Wheel coating', price: 180, requires: 'correction' }
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

  /* Workshop jobs are dropped off, so no travel is charged whatever suburb
     is selected. Charging it would be quoting for a trip that never happens. */
  if (pkg.workshop) {
    elLines.appendChild(line('At the workshop — 61 Ryan St, Innisfail', 'Drop off'));
  } else {
    total += zone.fee;
    elLines.appendChild(line('Travel — ' + zone.label,
      zone.fee > 0 ? '+' + money(zone.fee) : 'Included'));
  }

  elTotal.textContent = money(total);
  elDur.textContent = pkg.duration;

  /* The suburb question is about travel, so it is dimmed out when the car is
     coming to Innisfail instead. */
  var zoneSet = calc.querySelector('#opt-zone');
  if (zoneSet) {
    zoneSet.closest('fieldset').classList.toggle('not-applicable', !!pkg.workshop);
  }

  /* Carried into the email so the quote arrives with the enquiry. */
  var summary = [
    pkg.label,
    PRICING.sizes[sizeKey],
    cond.label + ' condition',
    pkg.workshop ? 'Workshop — 61 Ryan St, Innisfail' : zone.label,
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

/* ---- motion ------------------------------------------------------------- */

/* Everything below is decoration. It only ever adds to a page that already
   works, and it all stands down when the visitor asks for less motion. */

var stillness = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Types the hero statement out one character at a time. The sentence is
   already in the HTML — it is read, cleared and retyped, so the page is
   complete for search engines and for anyone without JavaScript. */
function typeStatement(el) {
  var text = el.textContent.trim();

  // Pin the height first, or the line below jumps as the text grows.
  el.style.minHeight = el.offsetHeight + 'px';
  el.textContent = '';
  el.classList.add('is-typing');

  var i = 0;
  (function tick() {
    if (i >= text.length) {
      el.classList.add('is-done');
      return;
    }
    el.textContent += text.charAt(i);
    i += 1;
    // A touch slower after a full stop — it reads as a breath, not a stutter.
    setTimeout(tick, text.charAt(i - 1) === '.' ? 340 : 52);
  }());
}

/* Fades sections in as they arrive. Anything already on screen is shown at
   once so the first paint is never blank. */
function revealOnScroll(nodes) {
  if (!('IntersectionObserver' in window)) { return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) { return; }
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  nodes.forEach(function (node) {
    node.classList.add('reveal');
    io.observe(node);
  });
}

if (!stillness.matches) {
  var statement = document.querySelector('.hero .statement');
  if (statement) {
    // Let the hero settle before the line starts writing itself.
    setTimeout(function () { typeStatement(statement); }, 520);
  }

  revealOnScroll([].slice.call(document.querySelectorAll(
    '.card, .shot, .area-col, .std, #quote .calc fieldset, #quote .estimate, .book-form'
  )));
}
