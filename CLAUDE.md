# Nomad Cats World — website

Instructions for Claude Code. The owner is Angelo Magni (1000 Feet, Inc.). Talk to him in Italian;
the site itself is in English.

## What this is

A one-page marketing site for the iPhone game **Nomad Cats World** (bundle ID `com.nomadcatsworld.app`),
meant for the domain **nomadcatsworld.com**. Plain HTML, CSS and one small script: no framework, no
build step, no dependencies. Keep it that way unless Angelo asks otherwise.

```
index.html          the page
privacy.html        privacy policy (draft, needs legal review)
css/styles.css      all styles; design tokens at the top
js/main.js          store links (placeholder) + waiting-list form (Netlify Forms)
assets/img/         screenshots and renders taken from the real app
assets/fonts/       the two web fonts, self-hosted
assets/favicon.svg
design/             reference pictures of the finished page (desktop and phone)
```

To look at it: `python3 -m http.server 8000` in this folder, then open http://localhost:8000.

## What the game is (use this for any new copy)

- Stray cats are scattered over the real map. A cat near you meows (a notification).
- The map shows a circle about 50 m wide around each cat, never its exact spot.
- Within 100 m you can call the cat with your voice ("ts ts ts"); it walks towards you.
- When it is close you meet it in augmented reality, life-size, on a cushion. You can stroke it.
- You can photograph it (album) or adopt it. You name an adopted cat once; the name can never change.
- Later you set it free wherever you are. Its passport records every place it has lived.
- Every cat is male or female, has a temperament, three traits, a favourite thing and a short story.
  About one cat in three is of one of 45 recognised breeds; the others are mixed breed.
- Decided but **not built yet**: two cats at home for free; a yearly "Nomad Pass" (USD 14.95) for up
  to 50 cats; cats shared between players through a server. Do not describe these as available.

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
3. **Privacy page.** `privacy.html` is a plain-language draft. It still needs a lawyer's review,
   and Angelo must confirm the statements about the app (location, camera and microphone stay on
   the phone; no account; no analytics) and the promise to delete the list within twelve months.
4. **Contact address.** `hello@nomadcatsworld.com` must exist before launch; the privacy page
   gives it as the contact for data requests.
5. **Price.** Removed from the page because it is not built. Put a sentence back in the passport
   section only when it exists in the app, with wording and price confirmed by Angelo.
6. **Social preview.** `assets/img/og.jpg` (1200×630) is composed from the real home screenshot.
   `og:url`, `og:image` and the canonical links assume the domain `https://nomadcatsworld.com`.
7. **The journey example** (Olive, Concorezzo → Kyoto) is invented and labelled as an example.
   Cats shared between players are not built: do not write that other people find or adopt
   your cat.

## Suggested next steps

1. Angelo: enable form detection in Netlify, create the mailbox, get the privacy page reviewed.
2. After launch: real store links, official badges, an App Store "smart banner" meta tag
   (`<meta name="apple-itunes-app" content="app-id=...">`).

## Do not

- Do not publish, register domains, or sign up for services without Angelo's explicit approval.
- Do not add analytics, cookies or trackers unless asked (then the privacy page must say so).
- Do not invent testimonials, press quotes, download numbers or ratings.
