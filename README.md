# Посібник адмінпанелі «Галилеї»

An interactive, Ukrainian-only guide to the Galilea admin panel (admin.galilea.com.ua), split into modules by role. Short lessons on real screenshots, a one-question check after each, per-device progress, and a searchable FAQ. Plain static files with no build step.

Live: https://guide.galilea.com.ua/ (GitHub Pages custom domain; DNS: CNAME `guide` → `galilea-community.github.io` at uadns.com)

## Modules

| Module | For | Lessons |
| --- | --- | --- |
| `start` — Початок роботи | everyone | вхід, як влаштована адмінпанель, профіль і пароль, Telegram-бот, встановити на телефон |
| `podii` — Події | Організатори й Помічники | ваша подія, вкладка «Подія», відкрити реєстрацію, конструктор форми, реєстр, день події, групи, розклад, команда і повідомлення |
| `domy` — Доми | Господарі Домів | ваш Дім, учасники, матеріали на тиждень |
| `koordynatsiia` — Координація Домів | Координатори Домів | огляд, заявки, форма заявки, Доми і Господарі, загальні матеріали, звернення і кошик, Telegram |
| `staff` — Координаторам і адміністраторам | координатори, адміністратори | огляд і пошук, створити й скопіювати подію, команди подій, курси й теги, шаблони форм, анкети, новини, свідчення, користувачі |

## Role links (send these out)

Each role has one page with its lessons in order: «Початок роботи», then the role's module. Lessons opened from it lead on to the next lesson of that role and back to the page («Ваші уроки»). The device remembers the last role page it opened.

| Role | Link | Path | Also suggested |
| --- | --- | --- | --- |
| Організатор / Помічник події | https://guide.galilea.com.ua/#/dlia/orhanizatoriv | start → podii | |
| Господар Дому | https://guide.galilea.com.ua/#/dlia/hospodariv | start → domy | |
| Координатор Домів | https://guide.galilea.com.ua/#/dlia/koordynatoriv-domiv | start → koordynatsiia | |
| Координатор, адміністратор | https://guide.galilea.com.ua/#/dlia/koordynatoriv | start → staff | podii, koordynatsiia |

They live in `BUNDLES` in `app.js`; the home page's role table is built from them too.

## Files

- `index.html`: the page shell (fonts, header, footer).
- `styles.css`: brand tokens and layout, light and dark; phone and laptop frames.
- `app.js`: **all the content lives here**. `MODULES` → lessons → steps and a quiz; `FAQ`; `MOCKS` (the HTML mock-ups: sign-in email, «Про вас», Telegram chats, phone install screens); `OLD_LINKS` (redirects for the first version's `#/urok-N` links).
- `img/`: screenshots from a local stack with seeded fake data. Phone shots are 390 px wide at 2x (780 px); `desktop.jpg` is 1280 × 800.

## Editing a lesson

A step is `{ screen, spot: [x, y], title, text }` for a button, or `{ screen, area: [x, y, w, h], … }` for a whole section (drawn as an outline). Both are in the screenshot's own pixels, so you can read coordinates straight off the image. Mock-up steps use `focus: '<data-focus name>'` instead. Copy follows the app's wording: use the exact button labels from `web-app/src/messages/uk.json`, and «адмінпанель» (never «адмінка»).

A quiz is `{ q, options, answer, why }`, with `answer` the right option's index in `options`. The options are shuffled each time the quiz is shown, so their order in the file doesn't matter, but keep the right one from standing out by length.

Links: `#/dlia/orhanizatoriv` (a role), `#/podii` (a module), `#/podii/reiestr` (a lesson), `#/podii/reiestr/4` (a step).

## Preview locally

```bash
python3 -m http.server 4100 --directory guide
```

## Re-taking screenshots

They come from `localhost:3000` (web-app dev), taken with headless Chrome over CDP at 390 × 844, scale 2, signed in with seeded accounts:

- `natalia@galilea.local`: Організатор of «Осінні реколекції «Повернення»» and of a «Заступницька молитва» event with sessions.
- `host.lviv@galilea.local`: Господар of «Дім Воскресіння — Львів».
- `house.coordinator@galilea.local`: Координатор Домів.
- `admin@galilea.local`: адміністратор (module 5).

Full-page shots of forms move sticky save bars back into the page flow first; otherwise they land mid-page.

The account menu shows «Telegram» only while the `telegram` feature flag is on. If a screen changes, retake that image at the same size and re-check the `spot`s that point into it.

## Publishing

GitHub Pages from the repository root (`main`, `/`). `.nojekyll` makes Pages serve the files as they are, and `CNAME` holds the custom domain (keep it — deleting it drops the domain). Changes go through a PR; merging to `main` redeploys in about a minute.
