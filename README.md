# DucoWorks

Website for DucoWorks — solo mobile car detailing, Innisfail FNQ, servicing Cairns to Tully.

Plain HTML, CSS and JavaScript. **No framework, no build step, no dependencies.**
What is in this folder is exactly what gets served.

## Publishing a change

Edit the file, then:

```bash
git add -A && git commit -m "Update prices" && git push
```

Cloudflare Pages redeploys automatically. It takes about a minute.

## Previewing before you push

```bash
node tools/serve.js
```

Then open <http://localhost:4310>. Ctrl+C to stop.
(Port 4310 so it never collides with the Aerial Quote dev server on 3000.)

Opening `index.html` directly by double-clicking will **not** work properly —
the site uses absolute paths (`/styles.css`), so it needs the local server.

## Where things live

| File | What it is |
| --- | --- |
| `index.html` | The whole site — every section is in here |
| `styles.css` | All styling. Colours are CSS variables at the very top |
| `script.js` | Quote calculator and the booking form |
| `404.html` | Shown for any URL that does not exist |
| `robots.txt`, `sitemap.xml` | Search engine basics |

## Changing prices

Every price lives in one place: the `PRICING` block at the top of `script.js`.
Change a number there and the calculator, the breakdown and the emailed quote
all follow.

The three "from" prices printed on the package cards are written into
`index.html` separately — search for `class="price"` and update them to match,
otherwise the cards and the calculator will disagree.

## The quote form

Submissions go to [Web3Forms](https://web3forms.com) (free tier, 250 per month)
and arrive as email. The access key is in `index.html` — search for
`access_key`. It is a public key: it only allows sending to the address the key
was created with, so it is safe to have in the page.

If email stops arriving, check the junk folder first, then the Web3Forms
dashboard.

## Logo and images

The supplied logo masters are in `tools/source/`. The web-sized files
(`logo.png`, `wordmark.png`, `mark.png`, the icons and `og.png`) are generated
from them:

```bash
node tools/build-assets.js
```

That needs Google Chrome installed, and only needs running if the logo artwork
changes. It is not part of publishing.

## Domain

Live at <https://ducoworks.com.au>, hosted free on Cloudflare Pages.
