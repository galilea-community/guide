# Посібник адмінпанелі «Галилеї»

An interactive, Ukrainian-only guide to the Galilea admin panel (admin.galilea.com.ua), split into modules by role. Short lessons on real screenshots, a one-question check after each, per-device progress, and a searchable FAQ. Plain static files with no build step.

Live: https://galilea-community.github.io/guide/

## Modules

| Module | For | Lessons |
| --- | --- | --- |
| `start` — Початок роботи | everyone | вхід, як влаштована адмінпанель, профіль і пароль, Telegram-бот, встановити на телефон |
| `podii` — Події | Організатори й Помічники | ваша подія, вкладка «Подія», відкрити реєстрацію, конструктор форми, реєстр, день події, групи, розклад, команда і повідомлення |
| `domy` — Доми | Господарі Домів | ваш Дім, учасники, матеріали на тиждень |

## Files

- `index.html`: the page shell (fonts, header, footer).
- `styles.css`: brand tokens and layout, light and dark; phone and laptop frames.
- `app.js`: **all the content lives here**. `MODULES` → lessons → steps and a quiz; `FAQ`; `MOCKS` (the HTML mock-ups: sign-in email, «Про вас», Telegram chats, phone install screens); `OLD_LINKS` (redirects for the first version's `#/urok-N` links).
- `img/`: screenshots from a local stack with seeded fake data. Phone shots are 390 px wide at 2x (780 px); `desktop.jpg` is 1280 × 800.

## Editing a lesson

A step is `{ screen, spot: [x, y], title, text }`. `spot` is in the screenshot's own pixels, so you can read coordinates straight off the image. Mock-up steps use `focus: '<data-focus name>'` instead of `spot`. Copy follows the app's wording: use the exact button labels from `web-app/src/messages/uk.json`, and «адмінпанель» (never «адмінка»).

Links: `#/podii` (a module), `#/podii/reiestr` (a lesson), `#/podii/reiestr/4` (a step).

## Preview locally

```bash
python3 -m http.server 4100 --directory guide
```

## Re-taking screenshots

They come from `localhost:3000` (web-app dev), taken with headless Chrome over CDP at 390 × 844, scale 2, signed in with seeded accounts:

- `natalia@galilea.local`: Організатор of «Осінні реколекції «Повернення»» and of a «Заступницька молитва» event with sessions.
- `host.lviv@galilea.local`: Господар of «Дім Воскресіння — Львів».

The account menu shows «Telegram» only while the `telegram` feature flag is on. If a screen changes, retake that image at the same size and re-check the `spot`s that point into it.

## Publishing

GitHub Pages from the repository root (`main`, `/`). `.nojekyll` makes Pages serve the files as they are. A push to `main` redeploys in about a minute.
