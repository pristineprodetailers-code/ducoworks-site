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

  /* ------------------------------------------------------------ MAINTENANCE */
  {
    slug: 'maintenance-detail',
    crumb: 'Maintenance Detail',
    image: 'work-foam.jpg',
    title: 'Maintenance Detail | Cairns to Tully | DucoWorks',
    ogTitle: 'Maintenance Detail — Cairns to Tully | DucoWorks',
    description: 'Regular mobile car detailing across Cairns, Innisfail and Tully. Hand wash, wheels, glass, interior and a spray sealant, at your place. From $190.',
    h1: 'Maintenance Detail',
    strap: 'For a car that is already looked after and needs to stay that way. Two to three hours, and it never gets away from you.',
    schema: service('Maintenance Car Detail',
      'Regular maintenance detailing including hand wash, wheels, glass, interior and spray sealant, performed at the customer\'s home.'),
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
          <li><b>Spray sealant</b> — six to eight weeks of protection, topped up each visit.</li>
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
        a: 'A wash removes what is loose. This is a hand wash done in a way that does not scratch the paint, plus wheels, glass, interior and a sealant that keeps working for weeks afterwards.' },
      { q: 'How often should I book one?',
        a: 'Quarterly suits most cars in this climate. Cars parked outside, near the coast, or under trees do better monthly.' },
      { q: 'My car is filthy. Can I start with this?',
        a: 'If it has been neglected for a year or more, a full detail first will get far more out of it. Otherwise you are paying to tidy rather than to fix.' },
      { q: 'Do you need power and water?',
        a: 'A standard power point is needed for machine polishing. Water is carried, so a tap is helpful but not essential.' }
    ]
  },

  /* ---------------------------------------------------------------- CERAMIC */
  {
    slug: 'ceramic-coating',
    crumb: 'Ceramic Coating',
    image: 'work-feature.jpg',
    title: 'Ceramic Coating Cairns, Innisfail & Tully | DucoWorks',
    ogTitle: 'Ceramic Coating — Cairns to Tully | DucoWorks',
    description: 'Ceramic coating across Cairns, Innisfail and Tully. Paint corrected first, then coated against tropical sun, salt and rain. From $1,290.',
    h1: 'Ceramic Coating',
    strap: 'Protection that outlasts the excitement of collection day. Corrected first, then coated — because a coating locks in whatever is underneath it.',
    schema: service('Ceramic Coating',
      'Paint correction followed by a ceramic coating on paint, glass and wheels, applied at the customer\'s home across the Cassowary Coast.'),
    faqNum: '04',
    closerEyebrow: 'From $1,290',
    closerLine: 'Preserve it properly.',
    closerBody: 'Four questions in the quote tool gives you the figure for your exact car and suburb. No callback, no sales pitch, no waiting.',
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
          <li><b>Three-year ceramic coating</b> on paint, glass and wheels. A five-year option is available.</li>
          <li><b>Aftercare and wash instructions</b>, because the maintenance is half the result.</li>
        </ul>
        <p class="foot-note">One to two days on site depending on the vehicle. Pricing starts at
        $1,290 for a small car and is confirmed on inspection &mdash;
        <a href="/#quote">get the figure for your car</a>.</p>`),

    faq: [
      { q: 'How long does a ceramic coating last?',
        a: 'The standard coating is rated at three years, with a five-year option available. Both need an annual maintenance wash to hold their rating.' },
      { q: 'Do I still have to wash the car?',
        a: 'Yes, and that surprises people. A coating makes washing easier and less frequent, not unnecessary. Dirt left sitting on any surface long enough will still mark it.' },
      { q: 'Can you coat a brand new car?',
        a: 'A new car is the best possible time. There is little to correct, so more of the work goes into preparation and the coating goes onto paint that has never been damaged.' },
      { q: 'Is it worth it on an older car?',
        a: 'Often, yes — but only after correction. Coating tired paint locks the tiredness in. That is why correction is included rather than sold as an upsell.' },
      { q: 'Do you do this at my place?',
        a: 'Yes. DucoWorks is fully mobile from Cairns to Tully. Undercover space and a power point are ideal for coating work.' }
    ]
  },

  /* ------------------------------------------------------------- CORRECTION */
  {
    slug: 'paint-correction',
    crumb: 'Paint Correction',
    image: 'work-guard.jpg',
    title: 'Cut & Polish | Paint Correction Cairns | DucoWorks',
    ogTitle: 'Paint Correction — Cairns to Tully | DucoWorks',
    description: 'Machine paint correction across Cairns, Innisfail and Tully. Swirl marks, light scratches and faded paint cut back and refinished. Mobile, at your place.',
    h1: 'Paint Correction',
    strap: 'Swirls, scratches and dullness are not dirt. No amount of washing removes them — they have to be cut out of the clear coat.',
    schema: service('Paint Correction',
      'Machine polishing to remove swirl marks, light scratches and oxidation, performed at the customer\'s home across the Cassowary Coast.'),
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
        One car a day is the reason that is possible.</p>
        <p>Correction is included in the Correction &amp; Ceramic package rather than sold
        separately, because doing one without the other rarely makes sense.
        <a href="/ceramic-coating/">See what a coating adds</a>, or
        <a href="/#quote">price your car</a>.</p>`),

    faq: [
      { q: 'Will it remove every scratch?',
        a: 'No. If your fingernail catches in it, it is through the clear coat and polishing cannot fill it. Everything shallower than that is fair game.' },
      { q: 'Does polishing damage the paint?',
        a: 'Correction removes a very small amount of clear coat, which is why it is done in sections and checked as it goes rather than run over the whole car at speed.' },
      { q: 'How long does it take?',
        a: 'One to two days depending on the vehicle and the condition of the paint. It is not a half-day job and anyone offering it as one is not correcting anything.' },
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
    description: 'Full mobile car detailing across Cairns, Innisfail and Tully. Exterior decontamination, three-month protection and an interior deep clean. From $385.',
    h1: 'Full Detail',
    strap: 'The reset. For a car that has not been touched properly in a year or more — inside and out, in one day.',
    schema: service('Car Detailing',
      'Full interior and exterior car detailing including decontamination, machine-applied sealant and interior deep clean, performed at the customer\'s home.'),
    faqNum: '04',
    closerEyebrow: 'From $385',
    closerLine: 'Get it back.',
    closerBody: 'Most cars are two or three years past their last proper detail. The difference after one is the reason people book the next one.',
    body:
      block('01', 'What a full detail covers',
        'Everything a wash does, and then the work a wash never touches.',
        `<p>A car wash removes what is loose. A detail removes what is bonded — the iron
        particles from brake dust that have embedded in your clear coat, the tar down the
        sills, the film on the inside of the windscreen you only notice driving into the sun.
        Then it puts protection back on, inside and out, so the result lasts past the weekend.</p>
        <ul class="points">
          <li><b>Snow foam pre-wash and two-bucket hand wash</b> — the loose grit comes off before anything touches the paint.</li>
          <li><b>Chemical decontamination</b> — iron fallout and tar dissolved rather than scrubbed.</li>
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
        `<p>Everything arrives with the van. A standard power point is needed for machine work,
        and undercover space helps in the wet season, but the job happens in your driveway
        while you get on with your day.</p>
        <p>Pricing starts at $385 for a small car and is confirmed on inspection.
        <a href="/#quote">Four questions gives you the figure</a> for your exact vehicle and
        suburb, including travel.</p>`),

    faq: [
      { q: 'How long does a full detail take?',
        a: 'Five to six hours for most cars. Larger or heavily neglected vehicles run longer, and that is priced in before the work starts rather than added afterwards.' },
      { q: 'Do you need power and water?',
        a: 'A standard power point is needed for machine polishing. Water is carried, so a tap is helpful but not essential.' },
      { q: 'What if it rains?',
        a: 'This is Far North Queensland, so wet days are planned around. Undercover space is ideal. If neither is available the booking is moved to the next dry day at no charge.' },
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
        'One operator, one car a day, travelling up from Innisfail.',
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
        a: 'Yes, as long as there is somewhere safe to park the car for the day and access to a power point.' },
      { q: 'How far ahead do I need to book?',
        a: 'One car a day means the calendar fills in advance, and correction and ceramic work takes a deposit to hold the day.' }
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
        <p>One car a day, at your address, finished properly rather than fitted around three
        other jobs.</p>`) +

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
    crumb: 'Tully & Mission Beach',
    image: 'work-feature.jpg',
    placename: 'Tully, Queensland',
    title: 'Car Detailing Tully & Mission Beach | Mobile | DucoWorks',
    ogTitle: 'Car Detailing Tully & Mission Beach | DucoWorks',
    description: 'Mobile car detailing in Tully, Mission Beach, El Arish and Silkwood. Detailing, paint correction and ceramic coating at your door. Travel $25.',
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
        <p>It is one car a day wherever the van ends up, so a Tully booking gets the same full
        day a Cairns one does.</p>`) +

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
        a: 'Yes. Mission Beach and Wongaling Beach are on the southern run, along with Tully, Tully Heads, El Arish and Silkwood.' },
      { q: 'What is the travel charge?',
        a: 'A flat $25 for the southern run, shown in the quote before you book.' },
      { q: 'Do you go as far as Cardwell?',
        a: 'On request. If the job is worth the drive, the drive happens — call and ask.' },
      { q: 'Can anything be done about a musty interior?',
        a: 'Seat and carpet extraction is the answer for most of it, because the smell is held in the fabric rather than floating in the air.' },
      { q: 'Is a coating worth it with this much rain?',
        a: 'Arguably more so. Water that sheets off a coated panel takes far less with it when it dries, which is what causes spotting in the first place.' }
    ]
  }

  ];
};
