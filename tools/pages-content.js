/* ==========================================================================
   DucoWorks — the words for every service and location page.

   Edited here, then `node tools/build-pages.js` writes the HTML.
   Or edit the generated page directly — both work, just not both at once.

   A note on what is written here. Every operational claim on these pages is
   one that already appears on the home page. Nothing new was invented about
   how the work is done. The regional detail — rainfall, salt air, harvest
   dust — is about Far North Queensland, not about DucoWorks, and is safe.
   ========================================================================== */

'use strict';

module.exports = function (h) {
  const { block, points, service } = h;

  return [


  /* ------------------------------------------------------- WHAT IT COSTS */
  /* Written to answer the question people actually type. Every figure here
     is lifted from the PRICING block in script.js — if prices change there,
     they must change here too. No competitor's prices are quoted: they move,
     and publishing someone else's numbers as fact is a claim we cannot keep
     true. */
  {
    slug: 'what-detailing-costs',
    crumb: 'What It Costs',
    image: 'work-bluepanel.jpg',
    title: 'What Car Detailing Costs | Cairns to Tully | DucoWorks',
    ogTitle: 'What Car Detailing Actually Costs — Cairns to Tully',
    description: 'What car detailing costs across Cairns, Innisfail and Tully. Real prices from $190, what changes them, and why most detailers will not tell you a figure.',
    h1: 'What car detailing<br>actually costs',
    strap: 'Around here a maintenance detail starts at $190, a full detail at $385, and paint correction with a ceramic coating at $1,290. Here is what moves those numbers.',
    schema: service('Car Detailing Pricing',
      'Published pricing for mobile car detailing, paint correction and ceramic coating across Cairns, Innisfail and Tully.'),
    faqNum: '05',
    closerEyebrow: 'No guessing',
    closerLine: 'Price your own car.',
    closerBody: 'The calculator on the home page gives you the figure for your car, your suburb and its condition, before you speak to anyone.',
    body:
      block('01', 'The short answer',
        'Three levels of work. These are the starting prices, for a small car.',
        `<ul class="points">
          <li><b>Maintenance Detail &mdash; from $190.</b> A car that is already looked after and needs to stay that way. Two to three hours.</li>
          <li><b>Full Detail &mdash; from $385.</b> The reset, for a car that has not been touched properly in a year or more. Five to six hours.</li>
          <li><b>Correction &amp; Ceramic &mdash; from $1,290.</b> Swirls machined out, then coated so the finish holds for five years. One to two days at the Innisfail workshop.</li>
        </ul>
        <p>Those are real prices, not a range designed to get you on the phone. You can
        <a href="/#quote">price your own car</a> in about thirty seconds.</p>`) +

      block('02', 'What changes the price',
        'Four things, and only four.',
        `<ul class="points">
          <li><b>The size of the car.</b> A hatch is not a seven-seater. Small, medium and large &mdash; a Full Detail runs $385, $460 or $540.</li>
          <li><b>Its condition.</b> A well-kept car is the base price. Average adds 10%, neglected adds 25%. Hours are hours.</li>
          <li><b>Where you are.</b> Innisfail and within 25km is free. Silkwood to Tully $25, Babinda to Edmonton $35, Cairns and the northern beaches $55. Correction and coating are done at the workshop, so travel does not apply.</li>
          <li><b>Anything extra.</b> Pet hair $55, engine bay $55, seat and carpet extraction $165. Glass or wheel coating $180 each, alongside a correction.</li>
        </ul>`, true) +

      block('03', 'Why nobody will tell you a price',
        'Because a number on a website can be compared, and a number on the phone can be argued.',
        `<p>Most detailers publish nothing. You ring, you describe your car, and you get a
        figure shaped by how the call is going. It is not dishonest &mdash; every car really is
        different &mdash; but it makes comparing two quotes almost impossible, and it wastes an
        afternoon.</p>
        <p>The prices above are published because a car can be priced from four facts:
        how big it is, what state it is in, where it is, and what you want done. If a quote
        needs more than that, it is usually the quote that needs it, not the car.</p>
        <p>Boats, caravans, trucks and fleet work are the genuine exception. Those are quoted
        on inspection because there is no useful starting figure.</p>`) +

      block('04', 'What to ask before you book anyone',
        'Four questions that sort a detailer from a bloke with a bucket.',
        `<ul class="points">
          <li><b>How is the car washed?</b> Snow foam and two buckets, or one bucket and a sponge. The second is how swirls get put into paint that did not have them.</li>
          <li><b>How long does the coating actually last?</b> Not what it says on the bottle &mdash; what is guaranteed, and what happens if it fails.</li>
          <li><b>What is not included?</b> The honest answer is never "nothing".</li>
          <li><b>Do you need power and water?</b> A mobile detailer working at your place needs both. Ours does not carry water &mdash; if there is no tap, the job cannot happen that day.</li>
        </ul>`, true),

    faq: [
      { q: 'How much does a full car detail cost in Cairns?',
        a: 'A Full Detail starts at $385 for a small car, $460 for a medium and $540 for a large. Travel to Cairns and the northern beaches is $55 on top. If the car is in average or neglected condition, 10% or 25% is added, because the work takes longer.' },
      { q: 'Why do car detailing prices vary so much?',
        a: 'Four things: the size of the car, its condition, how far it has to be travelled to, and any extras such as pet hair or seat extraction. Beyond that, most of the variation between detailers is how much work is actually being done — a two-hour wash and a six-hour detail are both called detailing.' },
      { q: 'How much is a ceramic coating?',
        a: 'Correction and ceramic coating starts at $1,290 for a small car, $1,590 medium and $1,890 large. That includes machining the swirls out first, which is most of the work — coating unprepared paint just seals the defects in. The coating holds for five years. The car is dropped at the Innisfail workshop for one to two days.' },
      { q: 'Is mobile detailing more expensive?',
        a: 'Not here. Detailing is done at your place across Cairns, Innisfail and Tully, and the only mobile-specific cost is travel: nothing within 25km of Innisfail, $25 to Tully, $35 to Babinda or Edmonton, $55 to Cairns. Paint correction and coating are done at the workshop because they need controlled conditions.' },
      { q: 'What is the cheapest detail you do?',
        a: 'A Maintenance Detail at $190 for a small, well-kept car in the Innisfail area. It is meant for a car that is already in good shape — it is not a rescue. A car that has not been detailed in a year wants the Full Detail instead.' }
    ]
  },

  /* ------------------------------------------------------------ MAINTENANCE */
  {
    slug: 'maintenance-detail',
    crumb: 'Maintenance Detail',
    image: 'work-foam.jpg',
    title: 'Maintenance Detail | Cairns to Tully | DucoWorks',
    ogTitle: 'Maintenance Detail — Cairns to Tully | DucoWorks',
    description: 'Regular mobile car detailing across Cairns, Innisfail and Tully. Hand wash, wheels, glass, interior and three-month protection, at your place. From $190.',
    h1: 'Maintenance Detail',
    strap: 'For a car that is already looked after and needs to stay that way. Two to three hours, and it never gets away from you.',
    schema: service('Maintenance Car Detail',
      'Regular maintenance detailing including hand wash, wheels, glass, interior and three-month exterior protection, performed at the customer\'s home.'),
    faqNum: '04',
    closerEyebrow: 'From $190',
    closerLine: 'Keep it that way.',
    closerBody: 'The cheapest detailing you will ever buy is the detailing that stops a car needing the expensive kind.',
    body:
      block('01', 'What it covers',
        'A proper wash, done the way that does not put swirls into your paint.',
        `<ul class="points">
          <li><b>Snow foam pre-wash and two-bucket hand wash</b> — the loose grit lifts off before anything touches the paint. This is the part a $30 car wash skips, and it is the reason their cars end up swirled.</li>
          <li><b>Wheels, arches and tyres dressed</b> — brake dust off before it bakes on.</li>
          <li><b>Glass in and out</b>, streak free. The inside is the half nobody does.</li>
          <li><b>Interior vacuum</b>, surfaces wiped and dressed.</li>
          <li><b>Exterior protection</b> — rated at three months, reapplied each visit so it never lapses.</li>
        </ul>`) +

      block('02', 'Why bother, when a car wash is $30',
        'Because the $30 wash is what causes the damage the expensive work has to undo.',
        `<p>An automatic wash drags the same brushes across a thousand cars, and a servo bucket
        holds the grit from the last one. Every pass puts fine scratches into the clear coat.
        Do it fortnightly for two years and you have paid for the swirl marks that then cost
        real money to machine out.</p>
        <p>A maintenance detail is the opposite trade. It keeps the protection topped up and
        the paint level, so the car never reaches the point of needing
        <a href="/paint-correction/">correction</a> at all.</p>` +
        points([
          { h: 'It holds its value', p: ' — a car that has never been let go is worth more, and takes less to present when you sell it.' },
          { h: 'It stays easy', p: ' — sealed paint releases dirt. Neglected paint holds it, and then needs scrubbing, which is where the damage starts.' },
          { h: 'It is predictable', p: ' — a known price, a known slot, no surprises.' }
        ]), true) +

      block('03', 'How often',
        'Most cars up here want it quarterly. Some want it monthly.',
        `<p>Far North Queensland is harder on a car than most people allow for — tropical UV,
        salt on the breeze near the coast, harvest dust inland and a wet season that keeps
        everything damp. A car parked outside here needs more attention than the same car in a
        Brisbane garage.</p>
        <p>If your car has not had a proper detail in a year or more, start with
        <a href="/full-detail/">a full detail</a> and keep it there with maintenance visits.
        Starting here on a neglected car is money spent tidying rather than fixing.</p>
        <p class="foot-note">From $190 for a small car, two to three hours on site.
        <a href="/#quote">Get the figure for your car</a>.</p>`),

    faq: [
      { q: 'How is this different to a car wash?',
        a: 'A wash removes what is loose. This is a hand wash done in a way that does not scratch the paint, plus wheels, glass, interior, and protection rated at three months that keeps working long after the visit.' },
      { q: 'How often should I book one?',
        a: 'Quarterly suits most cars in this climate. Cars parked outside, near the coast, or under trees do better monthly.' },
      { q: 'My car is filthy. Can I start with this?',
        a: 'If it has been neglected for a year or more, a full detail first will get far more out of it. Otherwise you are paying to tidy rather than to fix.' },
      { q: 'Do you need power and water?',
        a: 'Yes, both, and they are not optional. A standard power point and a tap at the property. The van does not carry water, so if there is no tap the job cannot be done that day.' }
    ]
  },

  /* ---------------------------------------------------------------- CERAMIC */
  {
    slug: 'ceramic-coating',
    crumb: 'Ceramic Coating',
    image: 'work-feature.jpg',
    title: 'Ceramic Coating Cairns, Innisfail & Tully | DucoWorks',
    ogTitle: 'Ceramic Coating — Cairns to Tully | DucoWorks',
    description: 'Five-year ceramic coating at our Innisfail workshop, 61 Ryan Street. Paint corrected first, then coated against tropical sun, salt and rain. From $1,290.',
    h1: 'Ceramic Coating',
    strap: 'Protection that outlasts the excitement of collection day. Corrected first, then coated — because a coating locks in whatever is underneath it. Done in the workshop at Innisfail, not in a driveway.',
    schema: service('Ceramic Coating',
      'Paint correction followed by a ceramic coating on the paint, carried out at the DucoWorks workshop at 61 Ryan Street, Innisfail.'),
    faqNum: '04',
    closerEyebrow: 'From $1,290',
    closerLine: 'Preserve it properly.',
    closerBody: 'Four questions in the quote tool gives you the figure for your car. Drop off at 61 Ryan Street, Innisfail. No callback, no sales pitch, no waiting.',
    body:
      block('01', 'What a coating actually does',
        'Not wax. Not a polish. A layer that chemically bonds to the paint and stays there.',
        `<p>Wax sits on top of your paint and washes off in weeks. A ceramic coating bonds to
        it and becomes part of the surface. The difference you notice day to day is simple:
        dirt struggles to hold on, water sheets off instead of drying into spots, and washing
        the car takes half as long because nothing is baked into the clear coat.</p>` +
        points([
          { h: 'Gloss that stays', p: ' — the depth you get on collection day is still there in a year, not faded into a chalky flatness.' },
          { h: 'Washing gets easier', p: ' — road film and bug splatter release with far less effort, so the car spends less time being scrubbed.' },
          { h: 'A barrier against the things that etch', p: ' — bird droppings, tree sap and water spots sit on the coating instead of biting into the paint.' },
          { h: 'Resale', p: ' — a car with protected paint photographs better and inspects better. The buyer sees a car that has been looked after, because it has.' }
        ])) +

      block('02', 'Why it matters more up here',
        'Far North Queensland is about the hardest environment in the country for automotive paint.',
        `<p>UV this close to the tropics does not take years to show. It oxidises unprotected
        paint, and reds and blacks go first. Add salt in the air anywhere near the coast, cane
        harvest dust through the middle of the year, and a wet season that keeps every surface
        damp for months, and paint that would last a decade down south gets tired here in a
        fraction of the time.</p>
        <p>A coating does not stop the weather. It puts a sacrificial layer between the weather
        and the paint you actually own, and it is far cheaper to renew a coating than to
        repaint a panel.</p>`, true) +

      block('03', 'What you get',
        'Correction comes first. Coating a swirled panel just seals the swirls in permanently.',
        `<ul class="points">
          <li><b>The paint is decontaminated</b> — iron fallout and tar chemically removed, then clayed until the surface is glass smooth.</li>
          <li><b>Single-stage machine correction</b> — swirls and light scratches cut back so what gets sealed in is the finish, not the damage.</li>
          <li><b>Panels taped, work done in sections</b>, and the result checked under a light hard enough to show what daylight hides.</li>
          <li><b>Five-year ceramic coating on the paint.</b> Glass and wheel coatings can be added for $180 each.</li>
          <li><b>Wash instructions</b> to keep the coating rated, because the maintenance is half the result.</li>
        </ul>
        <p class="foot-note">One to two days at the workshop, <b>61 Ryan Street, Innisfail</b>.
        Coating is the one service that is not mobile &mdash; it needs a controlled, dust-free
        space to cure in. Pricing starts at $1,290 for a small car and is confirmed on
        inspection &mdash; <a href="/#quote">get the figure for your car</a>.</p>`),

    faq: [
      { q: 'How long does a ceramic coating last?',
        a: 'The coating is rated at five years, and needs an annual maintenance wash to hold that rating. A three-year coating is available if you would rather spend less.' },
      { q: 'Do I still have to wash the car?',
        a: 'Yes, and that surprises people. A coating makes washing easier and less frequent, not unnecessary. Dirt left sitting on any surface long enough will still mark it.' },
      { q: 'Can you coat a brand new car?',
        a: 'A new car is the best possible time. There is little to correct, so more of the work goes into preparation and the coating goes onto paint that has never been damaged.' },
      { q: 'Is it worth it on an older car?',
        a: 'Often, yes — but only after correction. Coating tired paint locks the tiredness in. That is why correction is included rather than sold as an upsell.' },
      { q: 'Where is the work done?',
        a: 'At the DucoWorks workshop, 61 Ryan Street, Innisfail. Coating is the one service that is not mobile — it needs controlled conditions and a dust-free space to cure properly, which a driveway cannot give it. Detailing still comes to you.' },
      { q: 'How long will you have my car?',
        a: 'One to two days depending on the vehicle. You drop it off at Innisfail and it stays until the coating has cured.' }
    ]
  },

  /* ------------------------------------------------------------- CORRECTION */
  {
    slug: 'paint-correction',
    crumb: 'Paint Correction',
    image: 'work-guard.jpg',
    title: 'Cut & Polish | Paint Correction Cairns | DucoWorks',
    ogTitle: 'Paint Correction — Cairns to Tully | DucoWorks',
    description: 'Machine paint correction at our Innisfail workshop. Swirl marks, light scratches and faded paint cut back and refinished. Serving Cairns to Tully.',
    h1: 'Paint Correction',
    strap: 'Swirls, scratches and dullness are not dirt. No amount of washing removes them — they have to be cut out of the clear coat.',
    schema: service('Paint Correction',
      'Machine polishing to remove swirl marks, light scratches and oxidation, carried out at the DucoWorks workshop at 61 Ryan Street, Innisfail.'),
    faqNum: '04',
    closerEyebrow: 'Included in Correction & Ceramic',
    closerLine: 'See what is under there.',
    closerBody: 'Most people have never seen their car actually finished. The paint under the swirls is usually far better than the owner expects.',
    body:
      block('01', 'What correction fixes',
        'Hold a torch to your paint at night. Those fine circular scratches catching the light are the problem.',
        `<p>Swirl marks come from washing — automatic car washes, dirty sponges, dry wiping.
        Each one is a tiny scratch in the clear coat, and thousands of them together are what
        make a car look flat and grey instead of deep and wet. They are why a black car can be
        spotlessly clean and still look tired.</p>
        <p>Correction cuts a microscopic amount of clear coat away until the surface is level
        again and light reflects cleanly instead of scattering. It is the single biggest visual
        change you can make to a car without repainting it.</p>` +
        points([
          { h: 'Swirl marks and wash scratches', p: ' — the haze that shows up in direct sun.' },
          { h: 'Light scratches', p: ' — the ones your fingernail does not catch on.' },
          { h: 'Oxidation and fading', p: ' — chalky, sun-tired paint, common on reds and on anything parked outside up here.' },
          { h: 'Water spot etching', p: ' — the rings left when hard water dries in the sun.' },
          { h: 'Holograms', p: ' — the buffer trails left behind by someone who rushed it.' }
        ])) +

      block('02', 'When it is worth doing',
        'Three moments where correction pays for itself.',
        `<ul class="points">
          <li><b>Before you sell.</b> Paint is the first thing a buyer reads, before they open a door. A corrected car photographs better and holds its asking price better than the same car dull.</li>
          <li><b>Before a coating.</b> A ceramic coating is a clear layer over whatever is beneath it. Coat a swirled car and you have sealed the swirls in for years.</li>
          <li><b>When you are sick of looking at it.</b> The least practical reason and the most common one. A corrected car is genuinely a different object in the driveway.</li>
        </ul>`, true) +

      block('03', 'How it is done',
        'Slowly, and in sections. It is the part of the job that cannot be hurried.',
        `<p>Paint is decontaminated and clayed first, because polishing over grit drags it
        across the panel. Panels are taped, the work is done in sections rather than all at
        once, and the result is checked under a light hard enough to show what daylight hides.
        Working alone is the reason that is possible.</p>
        <p>Correction is included in the Correction &amp; Ceramic package rather than sold
        separately, because doing one without the other rarely makes sense. Both are done at
        the workshop, <b>61 Ryan Street, Innisfail</b> &mdash; machine work needs a controlled
        space, not a driveway. <a href="/ceramic-coating/">See what a coating adds</a>, or
        <a href="/#quote">price your car</a>.</p>`),

    faq: [
      { q: 'Will it remove every scratch?',
        a: 'No. If your fingernail catches in it, it is through the clear coat and polishing cannot fill it. Everything shallower than that is fair game.' },
      { q: 'Does polishing damage the paint?',
        a: 'Correction removes a very small amount of clear coat, which is why it is done in sections and checked as it goes rather than run over the whole car at speed.' },
      { q: 'How long does it take?',
        a: 'One to two days depending on the vehicle and the condition of the paint. It is not a half-day job and anyone offering it as one is not correcting anything.' },
      { q: 'Do you come to me for this?',
        a: 'No. Correction and coating are done at the workshop, 61 Ryan Street, Innisfail, where the conditions can be controlled. Maintenance and full detailing still come to you.' },
      { q: 'My car is white. Is it worth it?',
        a: 'White hides swirls better than black does, so the change is less dramatic — but oxidation and water spotting show up on white just as much, and both correct out.' }
    ]
  },

  /* ------------------------------------------------------------ FULL DETAIL */
  {
    slug: 'full-detail',
    crumb: 'Full Detail',
    image: 'work-wheel.jpg',
    title: 'Car Detailing Cairns, Innisfail & Tully | DucoWorks',
    ogTitle: 'Full Detail — Mobile Car Detailing, Cairns to Tully',
    description: 'Full mobile car detailing across Cairns, Innisfail and Tully. Tar removal, three-month protection and an interior deep clean, at your place. From $385.',
    h1: 'Full Detail',
    strap: 'The reset. For a car that has not been touched properly in a year or more — inside and out, in one day.',
    schema: service('Car Detailing',
      'Full interior and exterior car detailing including tar removal, three-month exterior protection, interior deep clean and interior protectant, performed at the customer\'s home.'),
    faqNum: '04',
    closerEyebrow: 'From $385',
    closerLine: 'Get it back.',
    closerBody: 'Most cars are two or three years past their last proper detail. The difference after one is the reason people book the next one.',
    body:
      block('01', 'What a full detail covers',
        'Everything a wash does, and then the work a wash never touches.',
        `<p>A car wash removes what is loose. A detail goes after what has stuck — the tar
        down the sills and behind the wheels, the grime in the door shuts, the film on the
        inside of the windscreen you only notice driving into the sun. Then it puts protection
        back on, inside and out, so the result lasts past the weekend.</p>
        <ul class="points">
          <li><b>Snow foam pre-wash and two-bucket hand wash</b> — the loose grit comes off before anything touches the paint.</li>
          <li><b>Tar removal</b> — the spots down the sills and behind the wheels dissolved off rather than scrubbed at.</li>
          <li><b>Exterior protection</b> — applied to the paint and rated at three months, so the car stays easier to wash long after the day is over.</li>
          <li><b>Interior deep clean</b> — vents, seals, console and boot, not just the bits you can see from the driver's seat.</li>
          <li><b>Interior protectant</b> — surfaces treated so the tropical sun has something to work on other than your dash.</li>
          <li><b>Wheels, arches and tyres dressed</b>, glass cleaned in and out.</li>
        </ul>`) +

      block('02', 'Who it is for',
        'Three cars that always come out best.',
        `<ul class="points">
          <li><b>The family car.</b> School runs, beach trips, spilled everything. Sand in the seat rails and a boot nobody has looked in since Christmas.</li>
          <li><b>The car about to be sold.</b> The cheapest money you will ever spend on a sale. Buyers price a car on how it presents long before they price it on the logbook.</li>
          <li><b>The car that has never had one.</b> Two or three years of tropical sun and wet seasons, washed at home with a sponge. There is usually a much better car under there.</li>
        </ul>
        <p>Five to six hours on site. If your car is already well kept and just needs to stay
        that way, the <a href="/#packages">Maintenance Detail</a> is the cheaper regular option.</p>`, true) +

      block('03', 'Done at your place',
        'You do not lose a day driving across town and sitting in a waiting room.',
        `<p>Everything else arrives with the van. Two things have to be there already: a
        standard power point and a tap. The van does not carry water, so a tap is a
        requirement rather than a convenience. Undercover space helps in the wet season, but
        otherwise the job happens in your driveway while you get on with your day.</p>
        <p>Pricing starts at $385 for a small car and is confirmed on inspection.
        <a href="/#quote">Four questions gives you the figure</a> for your exact vehicle and
        suburb, including travel.</p>`),

    faq: [
      { q: 'How long does a full detail take?',
        a: 'Five to six hours for most cars. Larger or heavily neglected vehicles run longer, and that is priced in before the work starts rather than added afterwards.' },
      { q: 'Do you need power and water?',
        a: 'Yes, both, and they are not optional. A standard power point and a tap at the property. The van does not carry water, so if there is no tap the job cannot be done that day.' },
      { q: 'What if it rains?',
        a: 'This is Far North Queensland, so wet days are planned around. Undercover space at your place is ideal. If there is none, you can bring the car to the workshop at 61 Ryan Street, Innisfail instead. If you are local to Innisfail we will run you home and collect you when it is done. From further out that is too far to be practical, so you would need someone to drop you off.' },
      { q: 'Can you get pet hair out?',
        a: 'Yes. It is an add-on rather than standard, because a car with a dog in it every day takes far longer than one without.' },
      { q: 'How often should I have one?',
        a: 'Once a year for most cars up here, with maintenance details in between. The tropics are harder on a car than most people allow for.' }
    ]
  },

  /* ----------------------------------------------------------------- CAIRNS */
  {
    slug: 'cairns',
    crumb: 'Cairns',
    image: 'work-sti.jpg',
    placename: 'Cairns, Queensland',
    title: 'Mobile Car Detailing Cairns | We Come To You | DucoWorks',
    ogTitle: 'Mobile Car Detailing Cairns | DucoWorks',
    description: 'Mobile car detailing in Cairns and the northern beaches. Detailing, paint correction and ceramic coating at your home or workplace. Instant online price.',
    h1: 'Car Detailing<br>in Cairns',
    strap: 'Mobile through Cairns, the northern beaches, Edmonton and Gordonvale. The work happens at your place, not in a queue across town.',
    schema: service('Mobile Car Detailing in Cairns',
      'Mobile car detailing, paint correction and ceramic coating throughout Cairns and the northern beaches.'),
    faqNum: '04',
    closerEyebrow: 'Cairns &middot; travel $55',
    closerLine: 'Book the driveway.',
    closerBody: 'Pick your package, size and suburb and the price appears. If it works for you, send it through and you will hear back the same day.',
    body:
      block('01', 'We come to Cairns',
        'One operator, travelling up from Innisfail.',
        `<p>Cairns is well served for car washes and thin on people who will spend a full day on
        a single car. DucoWorks runs the other way: one vehicle at a time, at your address,
        finished when the finish is right rather than when the next booking arrives.</p>
        <p>The Cairns run covers the city, the northern beaches, Edmonton, Gordonvale and
        Bramston Beach. Travel to Cairns is a flat $55 on top of the job, shown in the price
        before you commit rather than discovered on the invoice.</p>`) +

      block('02', 'What Cairns does to paint',
        'Coastal, tropical, and hard on a clear coat in ways inland cities are not.',
        `<p>Salt carries a long way inland on the sea breeze, and it does not wait for you to
        park at the beach. Combine that with UV this close to the tropics and paint left
        unprotected goes flat far faster here than the same car would down south. Reds and
        blacks show it first.</p>
        <p>Then there is the wet season, when everything stays damp for months and interiors
        start to smell of it. Both problems are the same problem: surfaces left unprotected in
        a climate that never eases off.</p>
        <p>That is what <a href="/ceramic-coating/">a ceramic coating</a> is for, and why
        <a href="/paint-correction/">correction</a> comes before it.</p>`, true) +

      block('03', 'What it costs in Cairns',
        'Published, not quoted on the phone.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> — from $190. For a car that is already looked after and needs to stay that way.</li>
          <li><b>Full Detail</b> — from $385. The reset, inside and out.</li>
          <li><b>Correction &amp; Ceramic</b> — from $1,290. Corrected, then coated for years.</li>
          <li><b>Travel to Cairns</b> — $55, included in the figure the quote tool gives you.</li>
        </ul>
        <p class="foot-note">Prices are for a small car. Larger vehicles and neglected
        condition are priced in the <a href="/#quote">quote tool</a> before you book, not after
        the work starts.</p>`),

    faq: [
      { q: 'Do you actually travel to Cairns?',
        a: 'Yes, regularly. Travel is a flat $55 from Innisfail and is shown in the quote before you book.' },
      { q: 'Which Cairns suburbs do you cover?',
        a: 'The city and northern beaches, plus Edmonton, Gordonvale, Babinda and Bramston Beach on the way through.' },
      { q: 'Can you come to my workplace?',
        a: 'Yes, as long as the car can be parked safely for the day and there is a power point and a tap you can use.' },
      { q: 'How far ahead do I need to book?',
        a: 'The calendar fills in advance, so the earlier the better. A deposit holds the day on any booking.' }
    ]
  },

  /* -------------------------------------------------------------- INNISFAIL */
  {
    slug: 'innisfail',
    crumb: 'Innisfail',
    image: 'work-foam.jpg',
    placename: 'Innisfail, Queensland',
    title: 'Car Detailing Innisfail | Mobile Detailing | DucoWorks',
    ogTitle: 'Car Detailing Innisfail | DucoWorks',
    description: 'Mobile car detailing in Innisfail and surrounds. Detailing, paint correction and ceramic coating at your door, with no travel charge within 25 km.',
    h1: 'Car Detailing<br>in Innisfail',
    strap: 'Home ground. Innisfail and everything within 25 kilometres, with no travel charge on the job.',
    schema: service('Mobile Car Detailing in Innisfail',
      'Mobile car detailing, paint correction and ceramic coating throughout Innisfail and the surrounding Cassowary Coast.'),
    faqNum: '04',
    closerEyebrow: 'Innisfail &middot; no travel charge',
    closerLine: 'It is a local call.',
    closerBody: 'Innisfail, East Innisfail, Mourilyan, Flying Fish Point, South Johnstone and Mena Creek. No travel charge, same standard.',
    body:
      block('01', 'Based here, not visiting',
        'DucoWorks is an Innisfail business. This is the home run, not an outlying territory.',
        `<p>Anywhere within 25 kilometres of Innisfail carries no travel charge — East Innisfail,
        Mourilyan, Flying Fish Point, South Johnstone, Mena Creek and the roads between them.
        The same day's work costs less here than it does at either end of the coast, simply
        because the van is already in town.</p>
        <p>At your address, finished properly rather than rushed to fit the next job in.</p>`) +

      block('02', 'Cane country is hard on a car',
        'Harvest dust, humidity and some of the heaviest rain in the country.',
        `<p>Anyone who has parked near a cane paddock through harvest knows what settles on a
        car here. Fine dust and ash work into every gap, and washing it off with a dry cloth is
        exactly how a bonnet fills with swirl marks.</p>
        <p>Then the wet season arrives and the humidity gets into the interior. Carpets that
        never quite dry, seatbelts that smell, that damp note when you first open the door in
        the morning. It is a Cassowary Coast problem more than a car problem, and it is fixable
        — but not with a vacuum and an air freshener.</p>
        <p><a href="/full-detail/">A full detail</a> deals with both ends of it.</p>`, true) +

      block('03', 'What it costs in Innisfail',
        'No travel charge. The price you see is the price.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> — from $190, two to three hours.</li>
          <li><b>Full Detail</b> — from $385, most of a day.</li>
          <li><b>Correction &amp; Ceramic</b> — from $1,290, one to two days.</li>
          <li><b>Travel within 25 km of Innisfail</b> — nothing.</li>
        </ul>
        <p class="foot-note">Boats, caravans and fleet work are quoted on inspection.
        <a href="/#quote">Price your car</a> or call ${''}
        <a href="tel:+61401881802">0401 881 802</a>.</p>`),

    faq: [
      { q: 'Is there a travel charge in Innisfail?',
        a: 'No. Anywhere within 25 kilometres of Innisfail carries no travel charge.' },
      { q: 'Do you cover Mourilyan and Flying Fish Point?',
        a: 'Yes, along with East Innisfail, South Johnstone, Mena Creek and the surrounding roads.' },
      { q: 'Can you get the damp smell out of an interior?',
        a: 'A full detail with the seats and carpets extracted deals with most of it, because the smell lives in the fabric rather than the air.' },
      { q: 'Do you do work for local businesses?',
        a: 'Fleet and business vehicles are quoted on inspection. Call and describe what you have.' }
    ]
  },

  /* ------------------------------------------------------------------ TULLY */
  {
    slug: 'tully',
    crumb: 'Tully',
    image: 'work-feature.jpg',
    placename: 'Tully, Queensland',
    title: 'Car Detailing Tully | Mobile Detailing | DucoWorks',
    ogTitle: 'Car Detailing Tully | DucoWorks',
    description: 'Mobile car detailing in Tully, Tully Heads, El Arish and Silkwood. Detailing, paint correction and ceramic coating at your door. Travel $25.',
    h1: 'Car Detailing<br>in Tully',
    strap: 'The southern run — Silkwood, El Arish, Mission Beach, Wongaling and Tully. Travel is a flat $25.',
    schema: service('Mobile Car Detailing in Tully',
      'Mobile car detailing, paint correction and ceramic coating throughout Tully, Mission Beach and the southern Cassowary Coast.'),
    faqNum: '04',
    closerEyebrow: 'Tully &middot; travel $25',
    closerLine: 'Worth the drive.',
    closerBody: 'Silkwood, El Arish, Mission Beach, Wongaling Beach, Tully and Tully Heads. Cardwell on request.',
    body:
      block('01', 'The southern run',
        'Down the highway from Innisfail, regularly.',
        `<p>The southern run covers Silkwood, El Arish, Mission Beach, Wongaling Beach, Tully
        and Tully Heads, with Cardwell on request. Travel is a flat $25 on top of the job and
        appears in the price before you book.</p>
        <p>A Tully booking gets the same care as one in Cairns. The drive does not change
        the standard.</p>`) +

      block('02', 'The wettest town in Australia',
        'Tully has the rainfall record and the gumboot to prove it. Your car knows about it.',
        `<p>Constant rain is not the clean-car advantage people assume. Rainwater picks up
        everything in the air on the way down and leaves it behind when it dries, which is
        where water spotting and etching come from. Cars parked outside here spend months
        cycling between soaked and baked.</p>
        <p>Interiors take it harder still. Sustained humidity is what turns a carpet musty and
        puts that grey bloom on leather and vinyl. It is the most common thing worth fixing on
        a car from the southern end of the coast.</p>
        <p>Sealed and coated surfaces shed water instead of holding it — which is the whole
        argument for <a href="/ceramic-coating/">a coating</a> in a climate like this one.</p>`, true) +

      block('03', 'What it costs in Tully',
        'Same work, same standard, $25 of highway.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> — from $190.</li>
          <li><b>Full Detail</b> — from $385.</li>
          <li><b>Correction &amp; Ceramic</b> — from $1,290.</li>
          <li><b>Travel to the southern run</b> — $25.</li>
        </ul>
        <p class="foot-note">Mission Beach holiday lets and rental fleets quoted on inspection.
        <a href="/#quote">Get your price</a>.</p>`),

    faq: [
      { q: 'Do you come to Mission Beach?',
        a: 'Yes \u2014 Mission Beach and Wongaling Beach are on the same southern run. There is a <a href="/mission-beach/">Mission Beach page</a> with the detail.' },
      { q: 'What is the travel charge?',
        a: 'A flat $25 for the southern run, shown in the quote before you book.' },
      { q: 'Do you go as far as Cardwell?',
        a: 'On request — see the <a href="/cardwell/">Cardwell page</a>. If the job is worth the drive, the drive happens.' },
      { q: 'Can anything be done about a musty interior?',
        a: 'Seat and carpet extraction is the answer for most of it, because the smell is held in the fabric rather than floating in the air.' },
      { q: 'Is a coating worth it with this much rain?',
        a: 'Arguably more so. Water that sheets off a coated panel takes far less with it when it dries, which is what causes spotting in the first place.' }
    ]
  },

  /* -------------------------------------------------------- MISSION BEACH */
  /* Split out of the Tully page, which was targeting both towns in one title
     and winning neither cleanly. Tully has been retargeted to Tully. Travel is
     the southern-run $25 from script.js — same zone, same fee. */
  {
    slug: 'mission-beach',
    crumb: 'Mission Beach',
    image: 'work-dmax.jpg',
    placename: 'Mission Beach, Queensland',
    title: 'Car Detailing Mission Beach | Mobile | DucoWorks',
    ogTitle: 'Car Detailing Mission Beach | DucoWorks',
    description: 'Mobile car detailing at Mission Beach, Wongaling Beach and Bingil Bay. Detailing, paint correction and ceramic coating at your door. Travel $25.',
    h1: 'Car Detailing<br>at Mission Beach',
    strap: 'Mission Beach, Wongaling, South Mission and Bingil Bay. The work happens in your driveway, and travel is a flat $25.',
    schema: service('Mobile Car Detailing at Mission Beach',
      'Mobile car detailing, paint correction and ceramic coating at Mission Beach, Wongaling Beach, South Mission Beach and Bingil Bay.'),
    faqNum: '04',
    closerEyebrow: 'Mission Beach &middot; travel $25',
    closerLine: 'Book the driveway.',
    closerBody: 'Mission Beach, Wongaling Beach, South Mission Beach, Bingil Bay and Garners Beach, on the southern run from Innisfail.',
    body:
      block('01', 'We come to the beach',
        'One operator, one car at a time, at your address.',
        `<p>Mission Beach sits on the southern run out of Innisfail, along with Wongaling
        Beach, South Mission Beach, Bingil Bay and Garners Beach. Travel is a flat $25 on top
        of the job and appears in the price before you book, not on the invoice afterwards.</p>
        <p>There is no shop to drive to and no queue to sit in. The van turns up where the car
        already is, which for most people here means the driveway or the carport. All that is
        needed is somewhere the car can sit safely for the day, a power point and a tap.</p>`) +

      block('02', 'Salt is the whole problem here',
        'Closer to open water than anywhere else on the run, and paint knows it.',
        `<p>Onshore wind carries salt off the water every day of the year, and it settles on
        whatever is parked in it. It does not need a wave to reach your car. Paint left bare
        in that air goes flat far faster than the same car would three streets inland, and
        chrome, badges and wheel faces show it before the panels do.</p>
        <p>Interiors take a different beating. Sand travels in on feet and towels and works
        its way into carpet backing, and salt water plus sunscreen on seats is a combination
        that sets rather than wipes off. Seat and carpet extraction is the fix for most of
        that, and it is an add-on rather than standard because it is genuinely slow work.</p>
        <p>Sealed and coated paint sheds salt-laden water instead of holding it, which is the
        entire argument for <a href="/ceramic-coating/">a coating</a> this close to the
        beach, and why <a href="/paint-correction/">correction</a> comes first.</p>`, true) +

      block('03', 'What it costs at Mission Beach',
        'Published, not quoted on the phone.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> &mdash; from $190. For a car that is already looked after and needs to stay that way.</li>
          <li><b>Full Detail</b> &mdash; from $385. The reset, inside and out.</li>
          <li><b>Correction &amp; Ceramic</b> &mdash; from $1,290. Corrected, then coated for years.</li>
          <li><b>Travel to the southern run</b> &mdash; $25, included in the figure the quote tool gives you.</li>
        </ul>
        <p class="foot-note">Prices are for a small car. Larger vehicles and neglected
        condition are priced in the <a href="/#quote">quote tool</a> before you book. Holiday
        lets and rental fleets quoted on inspection.</p>`),

    faq: [
      { q: 'Do you actually come to Mission Beach?',
        a: 'Yes. Mission Beach, Wongaling Beach, South Mission Beach, Bingil Bay and Garners Beach are all on the southern run, along with Tully, El Arish and Silkwood.' },
      { q: 'What is the travel charge?',
        a: 'A flat $25 for the southern run, shown in the quote before you book rather than added afterwards.' },
      { q: 'Can you do a holiday rental between guests?',
        a: 'Yes, and it is quoted on inspection rather than off the standard list, because turnaround cars vary far more than a private car does.' },
      { q: 'Is a coating worth it this close to the water?',
        a: 'Arguably more so than anywhere else on the coast. Salt water that sheets off a coated panel leaves far less behind when it dries, and that residue is what dulls paint here.' },
      { q: 'Can you get sand out of the carpet properly?',
        a: 'Seat and carpet extraction is the answer, because sand sits in the backing rather than on the surface where a vacuum can reach it.' }
    ]
  },

  /* --------------------------------------------------------------- BABINDA */
  {
    slug: 'babinda',
    crumb: 'Babinda',
    image: 'work-blueute.jpg',
    placename: 'Babinda, Queensland',
    title: 'Car Detailing Babinda | Mobile Detailing | DucoWorks',
    ogTitle: 'Car Detailing Babinda | DucoWorks',
    description: 'Mobile car detailing in Babinda, Mirriwinni and Bramston Beach. Detailing, paint correction and ceramic coating at your door. Travel $35.',
    h1: 'Car Detailing<br>in Babinda',
    strap: 'On the northern run between Innisfail and Cairns. Babinda, Mirriwinni, Bramston Beach. Travel is a flat $35.',
    schema: service('Mobile Car Detailing in Babinda',
      'Mobile car detailing, paint correction and ceramic coating in Babinda, Mirriwinni and Bramston Beach.'),
    faqNum: '04',
    closerEyebrow: 'Babinda &middot; travel $35',
    closerLine: 'Book the driveway.',
    closerBody: 'Babinda, Mirriwinni, Bramston Beach and the highway between, on the northern run out of Innisfail.',
    body:
      block('01', 'On the northern run',
        'Half an hour up the highway, regularly.',
        `<p>Babinda sits on the northern run between Innisfail and Cairns, along with
        Mirriwinni and Bramston Beach. Travel is a flat $35 on top of the job, shown in the
        quote before you commit.</p>
        <p>A Babinda booking gets the same day and the same standard as one in Cairns. Small
        town does not mean a quicker job here &mdash; one vehicle at a time, finished when the
        finish is right rather than when the next booking arrives.</p>`) +

      block('02', 'Golden Gumboot country',
        'Babinda and Tully have spent decades arguing over which of them is wetter. Your paint loses either way.',
        `<p>Sitting under Bellenden Ker, Babinda catches some of the heaviest rainfall recorded
        anywhere in the country. People assume constant rain keeps a car clean. It does the
        opposite: rainwater collects whatever is in the air on the way down and leaves it on
        the panel when it dries, and that is exactly where water spotting and etching start.</p>
        <p>Then there is what grows. Cars parked under rainforest canopy pick up sap and
        droppings that bake on within a day, and months of unbroken humidity is what puts a
        musty smell through carpet and a grey bloom on vinyl and leather. Both are far easier
        to prevent than to reverse.</p>
        <p>Surfaces that shed water instead of holding it are the answer, which is what
        <a href="/ceramic-coating/">a coating</a> does, and why
        <a href="/paint-correction/">correction</a> goes on first.</p>`, true) +

      block('03', 'What it costs in Babinda',
        'Same work, same standard, $35 of highway.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> &mdash; from $190.</li>
          <li><b>Full Detail</b> &mdash; from $385.</li>
          <li><b>Correction &amp; Ceramic</b> &mdash; from $1,290.</li>
          <li><b>Travel to the northern run</b> &mdash; $35.</li>
        </ul>
        <p class="foot-note">Prices are for a small car. Larger vehicles and neglected
        condition are priced in the <a href="/#quote">quote tool</a> before the work starts,
        not after.</p>`),

    faq: [
      { q: 'Do you come out to Babinda?',
        a: 'Yes. Babinda, Mirriwinni and Bramston Beach are on the northern run, and travel is a flat $35 shown in the quote before you book.' },
      { q: 'Is it cheaper than the Cairns run?',
        a: 'Yes. Babinda sits in the $35 zone rather than the $55 Cairns zone, because it is a shorter drive from Innisfail.' },
      { q: 'Can anything be done about a musty interior?',
        a: 'Seat and carpet extraction handles most of it, because the smell is held in the fabric rather than floating in the air.' },
      { q: 'How often should I have one up here?',
        a: 'Once a year for most cars, with maintenance details in between. The tropics are harder on a car than most people allow for.' },
      { q: 'What if it rains on the day?',
        a: 'This is Far North Queensland, so wet days are planned around. Undercover space at your place is ideal. If there is none, you can bring the car to the workshop at 61 Ryan Street, Innisfail instead.' }
    ]
  },

  /* ------------------------------------------------------------ GORDONVALE */
  {
    slug: 'gordonvale',
    crumb: 'Gordonvale',
    image: 'work-dmax-door.jpg',
    placename: 'Gordonvale, Queensland',
    title: 'Car Detailing Gordonvale | Mobile | DucoWorks',
    ogTitle: 'Car Detailing Gordonvale | DucoWorks',
    description: 'Mobile car detailing in Gordonvale, Aloomba and the Mulgrave valley. Detailing, paint correction and ceramic coating at your door. Travel $35.',
    h1: 'Car Detailing<br>in Gordonvale',
    strap: 'Under the Pyramid, on the northern run. Gordonvale, Aloomba and the Mulgrave valley. Travel is a flat $35.',
    schema: service('Mobile Car Detailing in Gordonvale',
      'Mobile car detailing, paint correction and ceramic coating in Gordonvale, Aloomba and the Mulgrave valley.'),
    faqNum: '04',
    closerEyebrow: 'Gordonvale &middot; travel $35',
    closerLine: 'Book the driveway.',
    closerBody: 'Gordonvale, Aloomba, Little Mulgrave and the highway either side, on the northern run out of Innisfail.',
    body:
      block('01', 'On the northern run',
        'Up the highway past Babinda, at your place rather than a shop in Cairns.',
        `<p>Gordonvale is on the northern run, along with Aloomba, Little Mulgrave and Edmonton
        further on. Travel is a flat $35 on top of the job and appears in the quote before you
        book.</p>
        <p>The pull for most people here is not driving into Cairns and leaving the car with
        someone for the day. It stays in your driveway, and one vehicle gets the whole day
        rather than a slot between two others.</p>`) +

      block('02', 'Cane town with a city commute',
        'Two things work on a Gordonvale car, and they come from opposite directions.',
        `<p>Harvest is the first. From the middle of the year the mill runs, the haul-outs run
        with it, and everything downwind picks up a fine grit that is not just dust &mdash; it
        settles into a film that a hose does not shift and a sponge drags straight across the
        clear coat. That is where most of the fine scratching on a cane-town car comes from.</p>
        <p>The commute is the second. Highway kilometres put bugs and tar on the front of the
        car in a way town driving never does, and both etch if they sit through a few hot
        days. A bug-covered bar and a hazy bonnet are the same job.</p>
        <p>Protected paint releases all of it far more easily, which is the practical case for
        <a href="/ceramic-coating/">a coating</a> once the paint has been
        <a href="/paint-correction/">corrected</a> underneath.</p>`, true) +

      block('03', 'What it costs in Gordonvale',
        'Published, not quoted on the phone.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> &mdash; from $190.</li>
          <li><b>Full Detail</b> &mdash; from $385.</li>
          <li><b>Correction &amp; Ceramic</b> &mdash; from $1,290.</li>
          <li><b>Travel to the northern run</b> &mdash; $35.</li>
        </ul>
        <p class="foot-note">Prices are for a small car. Larger vehicles and neglected
        condition are priced in the <a href="/#quote">quote tool</a> before you book.</p>`),

    faq: [
      { q: 'Do you cover Gordonvale?',
        a: 'Yes. Gordonvale, Aloomba and Little Mulgrave are on the northern run, at a flat $35 travel.' },
      { q: 'Why is it $35 and not the Cairns $55?',
        a: 'Because it is a shorter drive from Innisfail. The zone you pick in the quote tool sets the travel figure, and Gordonvale sits in the Babinda to Edmonton zone.' },
      { q: 'Can you come to my workplace instead of home?',
        a: 'Yes, as long as the car can be parked safely for the day and there is a power point and a tap you can use.' },
      { q: 'Will it help with cane dust and mill fallout?',
        a: 'It is one of the more satisfying jobs up here. The important part is that it comes off with the right process rather than being ground in by wiping at it.' },
      { q: 'How far ahead do I need to book?',
        a: 'The calendar fills in advance, so the earlier the better. A deposit holds the day on any booking.' }
    ]
  },

  /* -------------------------------------------------------------- EDMONTON */
  {
    slug: 'edmonton',
    crumb: 'Edmonton',
    image: 'work-guard.jpg',
    placename: 'Edmonton, Queensland',
    title: 'Car Detailing Edmonton Cairns | Mobile | DucoWorks',
    ogTitle: 'Car Detailing Edmonton | DucoWorks',
    description: 'Mobile car detailing in Edmonton, Bentley Park and Mount Sheridan. Detailing, paint correction and ceramic coating at your door. Travel $35.',
    h1: 'Car Detailing<br>in Edmonton',
    strap: 'The top of the northern run, south of Cairns. Edmonton, Bentley Park, Mount Sheridan. Travel is a flat $35.',
    schema: service('Mobile Car Detailing in Edmonton',
      'Mobile car detailing, paint correction and ceramic coating in Edmonton, Bentley Park and Mount Sheridan, south of Cairns.'),
    faqNum: '04',
    closerEyebrow: 'Edmonton &middot; travel $35',
    closerLine: 'Book the driveway.',
    closerBody: 'Edmonton, Bentley Park, Mount Sheridan and the estates along the highway, on the northern run out of Innisfail.',
    body:
      block('01', 'The top of the northern run',
        'South of Cairns, and priced as such.',
        `<p>Edmonton, Bentley Park and Mount Sheridan sit at the top of the northern run.
        Travel is a flat $35 rather than the $55 that applies once you are into Cairns proper
        and the northern beaches &mdash; a difference worth knowing before you ring a Cairns
        operator who charges the same to cross town.</p>
        <p>The car stays at your house. Nobody drops anything off, nobody waits in a
        reception, and the job gets a day rather than an hour.</p>`) +

      block('02', 'New estates, no shade',
        'The newer the street, the harder it is on paint.',
        `<p>The estates through Edmonton and Bentley Park went up fast and the trees have not
        caught up, which means most cars here sit on an open driveway in full sun every day.
        UV this close to the tropics is the single most underrated thing working on a car
        finish, and it works on flat surfaces first &mdash; roof, bonnet, boot lid. Reds and
        blacks show it earliest.</p>
        <p>Interiors go the same way. A dashboard baked daily and left unprotected is what
        fades, and a car doing school runs collects the rest: crumbs into seat seams,
        sunscreen on door cards, sand from a weekend at the beach.</p>
        <p>Protection is the cheaper half of that problem. A finish
        <a href="/paint-correction/">corrected</a> and then
        <a href="/ceramic-coating/">coated</a> holds up for years in this sun rather than
        weeks.</p>`, true) +

      block('03', 'What it costs in Edmonton',
        'Twenty dollars less than the same job in Cairns.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> &mdash; from $190.</li>
          <li><b>Full Detail</b> &mdash; from $385.</li>
          <li><b>Correction &amp; Ceramic</b> &mdash; from $1,290.</li>
          <li><b>Travel to the northern run</b> &mdash; $35, against $55 into Cairns.</li>
        </ul>
        <p class="foot-note">Prices are for a small car. Larger vehicles and neglected
        condition are priced in the <a href="/#quote">quote tool</a> before you book, not
        after the work starts.</p>`),

    faq: [
      { q: 'Is Edmonton charged as Cairns?',
        a: 'No. Edmonton, Bentley Park and Mount Sheridan sit in the Babinda to Edmonton zone at $35, not the $55 Cairns zone.' },
      { q: 'Do you come to Bentley Park and Mount Sheridan?',
        a: 'Yes, both are on the same run and the same travel figure.' },
      { q: 'My car lives on an open driveway. Is a coating worth it?',
        a: 'That is the case where it earns its money fastest. An unshaded car in this sun is the one that goes flat first, and a coating is what stands between the paint and the UV.' },
      { q: 'Can you work at my workplace?',
        a: 'Yes, as long as the car can be parked safely for the day and there is a power point and a tap you can use.' },
      { q: 'How long does a full detail take?',
        a: 'Five to six hours on site. It is a day, not an appointment, which is why only one car is booked at a time.' }
    ]
  },

  /* -------------------------------------------------------------- CARDWELL */
  /* Cardwell is deliberately NOT in the quote tool's zone list in script.js,
     so this page sends people to the phone rather than the calculator. If a
     `cardwell` zone is ever added there, swap the closer back to /#quote. */
  {
    slug: 'cardwell',
    crumb: 'Cardwell',
    image: 'work-bluepanel.jpg',
    placename: 'Cardwell, Queensland',
    title: 'Car Detailing Cardwell | Mobile, On Request | DucoWorks',
    ogTitle: 'Car Detailing Cardwell | DucoWorks',
    description: 'Mobile car detailing in Cardwell, on request from Innisfail. Detailing, paint correction and ceramic coating. Travel quoted on enquiry.',
    h1: 'Car Detailing<br>in Cardwell',
    strap: 'South of the standard run, so Cardwell is on request. Call it in and if the job is worth the drive, the drive happens.',
    schema: service('Mobile Car Detailing in Cardwell',
      'Mobile car detailing, paint correction and ceramic coating in Cardwell, on request from Innisfail.'),
    faqNum: '04',
    closerEyebrow: 'Cardwell &middot; on request',
    closerLine: 'Call it in.',
    closerBody: 'Cardwell sits past the standard southern run, so the travel figure is worked out on the call rather than in the quote tool.',
    body:
      block('01', 'On request, not on the run',
        'Further south than the regular loop, and priced honestly because of it.',
        `<p>The standard southern run stops at Tully. Cardwell is past it, which is why it is
        listed as on request rather than sitting in the quote tool with a fixed travel figure
        beside it. Ring and ask &mdash; if the job is worth the drive, the drive happens.</p>
        <p>In practice that usually means a bigger job than a maintenance wash, or two cars at
        the one address on the same day. The package prices themselves do not change; the
        travel is the only part worked out on the call.</p>`) +

      block('02', 'The most exposed stretch on the coast',
        'Open water on one side, range on the other, and salt through everything.',
        `<p>Cardwell sits right on the channel with almost nothing between the road and the
        water. Salt air here is relentless in a way it is not even at Mission Beach, and it
        reaches everything parked in it &mdash; paint, chrome, badges, wheel faces and every
        exposed fastener on the car.</p>
        <p>Add the same tropical UV as the rest of the coast and unprotected paint has very
        little chance. The cars that hold up here are the ones with something on top of the
        clear coat rather than nothing.</p>
        <p>That is what <a href="/ceramic-coating/">a ceramic coating</a> is for, and why
        <a href="/paint-correction/">correction</a> comes first &mdash; a coating locks in
        whatever is underneath it.</p>`, true) +

      block('03', 'What it costs at Cardwell',
        'Same package prices, travel on enquiry.',
        `<ul class="points">
          <li><b>Maintenance Detail</b> &mdash; from $190.</li>
          <li><b>Full Detail</b> &mdash; from $385.</li>
          <li><b>Correction &amp; Ceramic</b> &mdash; from $1,290, carried out at the Innisfail workshop.</li>
          <li><b>Travel to Cardwell</b> &mdash; quoted on the call, not in the tool.</li>
        </ul>
        <p class="foot-note">Run your car through the <a href="/#quote">quote tool</a> for the
        package figure, then <a href="tel:+61401881802">call</a> and the travel gets added to
        it. No callback, no sales pitch.</p>`),

    faq: [
      { q: 'Do you actually come to Cardwell?',
        a: 'On request. It is past the standard southern run, so it is a phone call rather than a booking straight off the quote tool.' },
      { q: 'What does travel to Cardwell cost?',
        a: 'It is worked out on the call. The package price is the same as anywhere else on the coast, and travel is the only variable.' },
      { q: 'Is it worth it for one car?',
        a: 'Sometimes, and sometimes not. A full detail or a coating job usually is. It is a straight answer on the phone either way rather than a maybe.' },
      { q: 'Can two cars be done at the same address?',
        a: 'That is the arrangement that makes the drive work best, and it is worth saying so when you call.' },
      { q: 'Where does ceramic coating get done?',
        a: 'At the DucoWorks workshop, 61 Ryan Street, Innisfail. Coating is the one service that is not mobile, because it needs a controlled, dust-free space to cure properly.' }
    ]
  }
  ];
};