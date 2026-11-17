# Nomad Cats World — website

Instructions for Claude Code. The owner is Angelo Magni (1000 Feet, Inc.). Talk to him in Italian;
the site itself is in English.

## What this is

A one-page marketing site for the iPhone game **Nomad Cats World** (bundle ID `com.nomadcatsworld.app`),
meant for the domain **nomadcatsworld.com**. Plain HTML, CSS and one small script: no framework, no
build step, no dependencies. Keep it that way unless Angelo asks otherwise.

```
sito/                     the published folder: Netlify serves only this (see netlify.toml)
  index.html              the page
  privacy.html            privacy policy (draft, needs legal review)
  css/styles.css          all styles; design tokens at the top
  js/main.js              store links (placeholder) + waiting-list form (Netlify Forms)
  assets/img/             screenshots and renders taken from the real app
  assets/fonts/           the two web fonts, self-hosted
  assets/favicon.svg
design/                   reference pictures of the page (desktop and phone); not published
netlify.toml              publish = "sito"
```

Anything that must not be online (these notes, `LEGGIMI.md`, `design/`) stays outside `sito/`.

To look at it: `python3 -m http.server 8000 --directory sito`, then open http://localhost:8000.

## What the game is (use this for any new copy; facts confirmed by Angelo, November 2026)

- There are 21,000,000 cats, each with a number and a look that exists only once.
- Six rarity levels with fixed quantities: Common 12,598,990 · Uncommon 5,880,000 · Rare 2,100,000 ·
  Very rare 420,000 · Extremely rare 1,000 · Most rare 10.
- The cats move slowly on the real map. You find them by walking and call them with your voice.
  With location "Always", the phone tells you when a cat is within about 100 m, app closed.
- The camera shows the cat in your room; photos stay on the phone. The microphone only hears that
  you are calling; nothing is recorded.
- You adopt a cat by giving it a name that never changes. Its number and name go into a public
  register of all 21,000,000 cats.
- A cat set free stays in the world: someone else can adopt it. Its name, passport (places and
  dates of adoptions) and the spot where it was left are shared with other players. The passport
  counts the kilometres travelled.
- Nomad Pass: 2 cats free, up to 50 with the subscription at $14.95 a year, handled by Apple.
- No account, no advertising, no analytics. Adopted cats are saved on the phone and in iCloud.
- Never write about NFTs, crypto, tokens, monetary value or investment.
- The app is not available yet: the store buttons stay placeholders.
- Not confirmed for the current app (do not use without asking): breeds, temperament, traits,
  stories on the cat's card.

Never claim anything the app does not do. If unsure, ask Angelo.

## Design rules

- Colours: paper `#F6F3ED`, ink green `#2F493F`, cushion green `#B9C79A`, and the **journey scale**
  (gold `#F0C35A` → orange → red → magenta → purple → navy `#2B2A63`). The scale is the same one
  the app's map uses for cats with longer stories. It is the site's signature: use it for journeys,
  routes and stamps only, not as general decoration.
- Type: Gloock for headings, Hanken Grotesk for text. Both are served from `assets/fonts/`
  (SIL Open Font License), not from Google, so the site makes no third-party requests. Sentence case everywhere.
  No all-caps labels, no small "eyebrow" labels above headings.
- Images of cats must come from the real app. Do not add stock photos or AI-generated cats.
- Copy: plain, warm, short sentences. Describe what happens; do not sell.
- Keep: keyboard focus styles, alt text, the skip link, `prefers-reduced-motion`.

## Still open (search for `PLACEHOLDER` and `TODO(site)`)

1. **Store buttons.** `js/main.js` has `STORE_LINKS` with two empty strings. When a link is filled in,
   the button becomes a real link and its small line changes to "Download on the" / "Get it on".
   While empty, the buttons scroll to the waiting list. The buttons use a neutral download icon on
   purpose: before launch, replace them with the **official** "Download on the App Store" and
   "Get it on Google Play" badges, downloaded from Apple's and Google's marketing pages and used
   under their badge guidelines (size, clear space, no alterations). There is no Android app yet.
   Angelo will supply the links; leave the buttons as placeholders until then.
2. **Waiting list.** The form (`name="waitlist"`) posts to Netlify Forms, with a required consent
   box and a honeypot field. It only works once the site is deployed on Netlify **and** form
   detection is enabled in the Netlify project (Forms → Enable form detection). Locally the form
   answers "Sorry, that did not go through", which is expected.
3. **Privacy page.** The app opens `/privacy.html` from its subscription screen and Apple checks it
   in review: never move or rename it. It contains only the points Angelo listed (November 2026);
   do not add others without him. It does not yet mention the waiting list or the hosting.
4. **Contact address.** `info@1000feetabove.com`, in the footer and on the privacy page.
5. **Price.** Nomad Pass, $14.95 a year, up to 50 cats; 2 cats free.
6. **Social preview.** `assets/img/og.jpg` (1200×630) is composed from the real home screenshot.
   `og:url`, `og:image` and the canonical links assume the domain `https://nomadcatsworld.com`.
7. **The journey example** (Olive, her number, Concorezzo → Kyoto, the kilometres) is invented and
   labelled as an example. The kilometres are straight-line distances between the towns.

## Suggested next steps

1. Angelo: enable form detection in Netlify, get the privacy page reviewed.
2. After launch: real store links, official badges, an App Store "smart banner" meta tag
   (`<meta name="apple-itunes-app" content="app-id=...">`).

## Do not

- Do not publish, register domains, or sign up for services without Angelo's explicit approval.
- Do not add analytics, cookies or trackers unless asked (then the privacy page must say so).
- Do not invent testimonials, press quotes, download numbers or ratings.
