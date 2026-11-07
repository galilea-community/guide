# Посібник команди події

An interactive, Ukrainian-only guide for event-team members (Організатор / Помічник) of the Galilea admin dashboard. Six short lessons on real phone screenshots, a one-question check after each, and a searchable FAQ. Plain static files — no build step.

## Files

- `index.html` — page shell (fonts, header, footer).
- `styles.css` — brand tokens and layout; light and dark.
- `app.js` — **all content lives here**: `LESSONS` (steps + quiz), `FAQ`, and the HTML mock-ups (`MOCKS`: the sign-in email, «Про вас», the Telegram chat).
- `img/` — 390 px-wide phone screenshots at 2x (780 px), from a local stack with seeded fake data.

## Editing a lesson

Each step is `{ screen, spot: [x, y], title, text }`. `spot` is in the screenshot's own pixels (780 px wide), so you can read coordinates straight off the PNG. Mock-up steps use `focus: '<data-focus name>'` instead of `spot`. Copy follows the site's wording: use the exact button labels from `web-app/src/messages/uk.json`.

Links go straight to a lesson or step: `#/urok-3` or `#/urok-3/5`.

## Preview locally

```bash
python3 -m http.server 4100 --directory guide
```

## Re-taking screenshots

They come from `localhost:3000` (web-app dev) signed in as a seeded Participant who is Організатор of «Осінні реколекції «Повернення»». They were taken with headless Chrome over CDP at 390×844, scale 2, and saved as PNG. If a screen changes, retake that PNG at the same size and re-check the `spot` coordinates that point into it.

## Publishing

GitHub Pages from the repository root (`main`, `/`). `.nojekyll` makes Pages serve the files as they are.
