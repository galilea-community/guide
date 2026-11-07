'use strict';

// Screens: phone screenshots (780 px wide, 2x) or HTML mock-ups.
// A step's `spot` is [x, y] in that screenshot's pixels; a mock step names the
// element to highlight with `focus` (its data-focus attribute).
const SCREENS = {
  login: { src: 'img/login.png', h: 1688, alt: 'Сторінка входу в адмінку' },
  roster: { src: 'img/roster.png', h: 1688, alt: 'Вкладка «Реєстр» на телефоні' },
  row: { src: 'img/row.png', h: 1856, alt: 'Розгорнутий рядок реєстрації' },
  form: { src: 'img/form.png', h: 1688, alt: 'Вкладка «Форма»' },
  checkin: { src: 'img/checkin.png', h: 1688, alt: 'Вкладка «Відвідуваність»' },
  menu: { src: 'img/menu.png', h: 1688, alt: 'Меню під аватаром' },
  email: { mock: 'email' },
  about: { mock: 'about' },
  chat: { mock: 'chat' },
};

const LESSONS = [
  {
    title: 'Вхід',
    summary: 'Лист із посиланням замість пароля.',
    steps: [
      {
        screen: 'email',
        focus: 'button',
        title: 'Вам надійде лист',
        text: 'Коли координатор додасть вас до команди події, на пошту надійде лист від «Галилеї». Натисніть <b>«Увійти»</b>.',
      },
      {
        screen: 'email',
        focus: 'code',
        title: 'Або введіть код',
        text: 'Відкрили лист на іншому пристрої? Введіть <b>код із листа</b> на сторінці входу. Посилання й код діють одну годину.',
      },
      {
        screen: 'about',
        focus: 'fields',
        title: 'Перший вхід: про вас',
        text: 'Першого разу вкажіть <b>ім’я, прізвище й телефон</b>. Пароль створювати не обов’язково.',
      },
      {
        screen: 'about',
        focus: 'submit',
        title: 'Завершіть реєстрацію',
        text: 'Натисніть <b>«Завершити реєстрацію»</b> — і ви в адмінці.',
      },
      {
        screen: 'login',
        spot: [390, 868],
        title: 'Наступного разу',
        text: 'Відкрийте <a href="https://admin.galilea.com.ua" target="_blank" rel="noopener">admin.galilea.com.ua</a> і вкажіть свій email — той, на який вас додали.',
      },
      {
        screen: 'login',
        spot: [390, 988],
        title: 'Попросіть новий лист',
        text: 'Натисніть <b>«Надіслати посилання для входу»</b>. Листа немає за хвилину — перевірте «Спам» і «Промоакції».',
      },
    ],
    quiz: {
      q: 'Що потрібно, щоб увійти в адмінку?',
      options: ['Пароль, який дасть координатор', 'Лише ваш email — посилання чи код надійде листом', 'Обліковий запис Google'],
      answer: 1,
      why: 'Пароль не потрібен: щоразу ви входите за посиланням або кодом із листа.',
    },
  },
  {
    title: 'Де що лежить',
    summary: 'Ваші події, вкладки і меню.',
    steps: [
      {
        screen: 'roster',
        spot: [300, 163],
        title: 'Ваші події',
        text: 'Під верхньою панеллю — події, у команді яких ви є. На комп’ютері вони в меню зліва, у блоці «Мої події».',
      },
      {
        screen: 'roster',
        spot: [112, 486],
        title: 'Реєстр',
        text: 'Хто записався: відповіді, статуси, позначки й нотатки. Адмінка відкривається саме тут.',
      },
      {
        screen: 'roster',
        spot: [313, 486],
        title: 'Відвідуваність',
        text: 'Позначки прибуття на самій події — хто прийшов.',
      },
      {
        screen: 'roster',
        spot: [505, 486],
        title: 'Групи',
        text: 'Розділити учасників на групи й призначити групам аніматорів.',
      },
      {
        screen: 'roster',
        spot: [637, 486],
        title: 'Подія',
        text: 'Назва, опис, місце, дати, кількість місць, фото і чи опубліковано подію.',
      },
      {
        screen: 'roster',
        spot: [722, 486],
        title: 'Гортайте вкладки вбік',
        text: 'На телефоні не всі вкладки вміщаються. Проведіть по рядку вкладок уліво — там <b>«Форма»</b> (як люди реєструються) і <b>«Команда»</b> (хто ще працює над подією).',
      },
      {
        screen: 'roster',
        spot: [716, 60],
        title: 'Ваш аватар',
        text: 'Тут «Запропонувати покращення», «Telegram» і «Вийти». На комп’ютері те саме — внизу меню зліва.',
      },
    ],
    quiz: {
      q: 'Де на телефоні знайти вкладку «Команда»?',
      options: ['У меню під аватаром', 'Прогорнути рядок вкладок убік', 'На телефоні її немає'],
      answer: 1,
      why: 'Вкладки не вміщаються на екрані телефона — рядок гортається вбік.',
    },
  },
  {
    title: 'Відкрити реєстрацію',
    summary: 'Форма, публікація і посилання.',
    steps: [
      {
        screen: 'form',
        spot: [722, 486],
        title: 'Вкладка «Форма»',
        text: 'Тут ви вирішуєте, як люди записуються. Але спершу на вкладці «Подія» перевірте назву, дати, місце і чи ввімкнено <b>«Опубліковано»</b>.',
      },
      {
        screen: 'form',
        spot: [160, 721],
        title: 'Стан реєстрації',
        text: 'Одразу видно, що зараз: «Відкрито · форма», «Відкрито · посилання» або «Закрито».',
      },
      {
        screen: 'form',
        spot: [390, 990],
        title: 'Наша форма — радимо',
        text: 'Запитання прямо на сайті. <b>Лише з нею</b> працюють Реєстр, Відвідуваність і Групи.',
      },
      {
        screen: 'form',
        spot: [390, 1133],
        title: 'Або зовнішнє посилання',
        text: 'Google-форма чи інший сервіс. Тоді список людей ви ведете там, а не в адмінці.',
      },
      {
        screen: 'form',
        spot: [235, 1397],
        title: 'Запитання й публікація',
        text: '«Редагувати форму» (або «Створити форму») → змініть запитання → <b>«Опублікувати»</b>. Доки не опублікуєте, люди бачать попередню версію.',
      },
      {
        screen: 'form',
        spot: [560, 1545],
        title: 'Поширюйте посилання',
        text: 'Коротке посилання для реєстрації — натисніть «Копіювати» і надішліть людям. Працює, коли подію опубліковано.',
      },
      {
        screen: 'form',
        spot: [220, 1658],
        title: 'Внутрішня реєстрація',
        text: 'Не хочете кнопки реєстрації на сайті? Увімкніть — і поширюйте посилання самі, наприклад у закритому Telegram-чаті.',
      },
    ],
    quiz: {
      q: 'Ви змінили запитання у формі. Коли їх побачать люди?',
      options: ['Одразу після збереження', 'Після того, як ви натиснете «Опублікувати»', 'Коли координатор перевірить'],
      answer: 1,
      why: 'Зміни у формі — це чернетка, доки ви її не опублікуєте.',
    },
  },
  {
    title: 'Реєстр',
    summary: 'Хто записався і що з ними робити.',
    steps: [
      {
        screen: 'roster',
        spot: [390, 700],
        title: 'Статуси й місця',
        text: 'Угорі — скільки зареєстровано з кількох місць. Фільтр: «Зареєстровано», «У списку очікування», «Скасовано».',
      },
      {
        screen: 'roster',
        spot: [330, 824],
        title: 'Позначки',
        text: 'Свої мітки для події: «Оплатив», «Поселення підтверджено». Вони не змінюють статус — лише допомагають команді.',
      },
      {
        screen: 'roster',
        spot: [390, 970],
        title: 'Пошук',
        text: 'Шукайте за ім’ям, email чи будь-якою відповіддю з форми.',
      },
      {
        screen: 'roster',
        spot: [180, 1146],
        title: 'Список у таблицю',
        text: '<b>«Експорт CSV»</b> відкривається в Excel чи Google Таблицях. Кнопка «Google Таблиці» поруч — одразу в таблицю Google.',
      },
      {
        screen: 'roster',
        spot: [194, 1234],
        title: 'Додати вручну',
        text: 'Для тих, хто записався телефоном чи особисто. Досить імені.',
      },
      {
        screen: 'row',
        spot: [690, 97],
        title: 'Натисніть рядок',
        text: 'Рядок розгорнеться: усі відповіді людини, позначки, статус і нотатка.',
      },
      {
        screen: 'row',
        spot: [390, 1440],
        title: 'Змінити статус',
        text: 'Натисніть потрібний статус. Наприклад, людина передумала — «Скасовано».',
      },
      {
        screen: 'row',
        spot: [390, 1630],
        title: 'Нотатка для команди',
        text: 'Бачить лише команда: оплата, поселення, домовленості. Відповіді людини змінити не можна — виправлення пишіть сюди.',
      },
    ],
    quiz: {
      q: 'Людина сплатила внесок. Як це позначити?',
      options: ['Змінити статус на «Зареєстровано»', 'Поставити позначку «Оплатив»', 'Попросити її заповнити форму ще раз'],
      answer: 1,
      why: 'Позначки — для таких речей. Статус лишається як є.',
    },
  },
  {
    title: 'День події',
    summary: 'Позначте, хто прийшов, з телефона.',
    steps: [
      {
        screen: 'checkin',
        spot: [313, 486],
        title: 'Відкрийте «Відвідуваність»',
        text: 'Станьте біля входу з телефоном — це ваш список на вхід.',
      },
      {
        screen: 'checkin',
        spot: [390, 1098],
        title: 'Додайте список',
        text: '«Додати список» → оберіть день → «Додати». Назва необов’язкова, напр. «День 2».',
      },
      {
        screen: 'checkin',
        spot: [345, 1005],
        title: 'Кілька днів — кілька списків',
        text: 'Для кожного дня чи зустрічі — свій список. Тут обираєте, який зараз відкрито.',
      },
      {
        screen: 'checkin',
        spot: [668, 1510],
        title: 'Прийшов — торкніться',
        text: 'Торкніться людини — з’явиться зелена галочка. Позначати можна з кількох телефонів одночасно.',
      },
      {
        screen: 'checkin',
        spot: [668, 1360],
        title: 'Помилилися? Ще раз',
        text: 'Торкніться ще раз — позначку буде знято. Видно, хто й коли позначив.',
      },
      {
        screen: 'checkin',
        spot: [205, 815],
        title: 'Лічильник',
        text: '«Прибуло: 4 з 7». Скасованих реєстрацій у списку немає. Прийшов хтось без реєстрації — додайте його в «Реєстрі» через «Додати вручну».',
      },
      {
        screen: 'checkin',
        spot: [564, 913],
        title: 'Таблиця відвідуваності',
        text: 'Хто на якій зустрічі був — для подій на кілька днів. Таблицю можна експортувати.',
      },
    ],
    quiz: {
      q: 'Ви позначили не ту людину. Що робити?',
      options: ['Торкнутися її ще раз', 'Видалити весь список', 'Нічого — вже не виправити'],
      answer: 0,
      why: 'Повторний дотик знімає позначку прибуття.',
    },
  },
  {
    title: 'Telegram-бот',
    summary: 'Сповіщення і повідомлення учасникам.',
    steps: [
      {
        screen: 'menu',
        spot: [716, 60],
        title: 'Натисніть свій аватар',
        text: 'На телефоні — угорі праворуч. На комп’ютері — внизу меню зліва.',
      },
      {
        screen: 'menu',
        spot: [365, 361],
        title: '«Telegram» → «Підключити Telegram»',
        text: 'На телефоні натисніть «Відкрити Telegram». На комп’ютері наведіть камеру телефона на код.',
      },
      {
        screen: 'chat',
        focus: 'start',
        title: 'Натисніть «Start»',
        text: 'Бот привітає вас на ім’я. Посилання для підключення <b>нікому не пересилайте</b>: хто відкриє його першим, діятиме від вашого імені.',
      },
      {
        screen: 'chat',
        focus: 'notifications',
        title: '/notifications',
        text: 'Увімкніть сповіщення про нові реєстрації на вашу подію.',
      },
      {
        screen: 'chat',
        focus: 'message',
        title: '/message',
        text: 'Напишіть учасникам події. Отримають ті, хто зареєструвався й увімкнув нагадування в Telegram.',
      },
    ],
    quiz: {
      q: 'Хто отримає повідомлення, надіслане через /message?',
      options: ['Усі, хто заповнив форму', 'Зареєстровані, які ввімкнули нагадування в Telegram', 'Лише команда події'],
      answer: 1,
      why: 'Бот пише лише тим, хто сам підключив нагадування в Telegram.',
    },
  },
];

const FAQ = [
  ['Лист для входу не надійшов', 'Перевірте «Спам» і «Промоакції». Переконайтеся, що вводите ту саму адресу, на яку вас додали. Натисніть «Надіслати ще раз».'],
  ['«Код неправильний або застарів»', 'Запросіть новий лист і введіть код із найсвіжішого. Код діє одну годину і лише один раз.'],
  ['Бачу «Немає активних подій»', 'Доступ закривається сам через тиждень після останнього дня події — або вас ще не додали. Напишіть координаторові: він може продовжити доступ.'],
  ['Немає вкладок «Реєстр», «Відвідуваність», «Групи»', 'Подія не використовує нашу форму. Оберіть «Наша форма» на вкладці «Форма» і опублікуйте її.'],
  ['Не бачу вкладок «Форма» чи «Команда» на телефоні', 'Вони праворуч: прогорніть рядок вкладок убік.'],
  ['Не можу змінити тип події чи курс', 'Це робить координатор.'],
  ['Як додати помічника?', 'Вкладка «Команда» → «Додати» → email людини. Вона стане Помічником і отримає лист для входу. Додавати може Організатор.'],
  ['Чим Організатор відрізняється від Помічника?', 'Нічим, окрім одного: Організатор може додавати помічників.'],
  ['Людина хоче змінити свої відповіді', 'Відповіді змінити не можна. Запишіть виправлення в «Нотатку для команди».'],
  ['Знайшли помилку або маєте ідею', 'Натисніть «Запропонувати покращення» в меню під аватаром.'],
];

// ---------- Progress (per device; optional) ----------
const KEY = 'galilea-guide-done-v1';
function loadDone() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
  } catch {
    return new Set();
  }
}
function saveDone(set) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...set]));
  } catch {
    /* private mode: progress just isn't kept */
  }
}
let done = loadDone();

// ---------- Helpers ----------
const app = document.getElementById('app');
const h = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const stepsWord = (n) => (n % 10 === 1 && n % 100 !== 11 ? 'крок' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'кроки' : 'кроків');

function route() {
  const m = location.hash.match(/^#\/urok-(\d+)(?:\/(\d+))?/);
  if (m) {
    const i = Number(m[1]) - 1;
    if (LESSONS[i]) return renderLesson(i, Math.max(0, Number(m[2] || 1) - 1));
  }
  renderHome();
}

// ---------- Home ----------
function renderHome() {
  document.title = 'Посібник команди події — Галилея';
  const count = LESSONS.filter((_, i) => done.has(i)).length;
  const next = LESSONS.findIndex((_, i) => !done.has(i));
  const cta =
    count === 0 ? 'Почати перший урок' : next === -1 ? 'Пройти ще раз' : `Продовжити: урок ${next + 1}`;
  const ctaHref = `#/urok-${next === -1 ? 1 : next + 1}`;

  app.innerHTML = `
    <div class="wrap">
      <section class="hero">
        <p class="eyebrow">Для Організаторів і Помічників</p>
        <h1>Адмінка «Галилеї» за 10 хвилин</h1>
        <p class="lead">Шість коротких уроків на справжніх екранах адмінки. Жовте коло показує, куди натискати.</p>
        <div class="progress">
          <a class="btn btn-primary" href="${ctaHref}">${cta} →</a>
          <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${LESSONS.length}" aria-valuenow="${count}" aria-label="Пройдено уроків"><span style="width:${(count / LESSONS.length) * 100}%"></span></div>
          <span class="progress-label">Пройдено ${count} з ${LESSONS.length}</span>
        </div>
      </section>

      <h2 class="section-title">Уроки</h2>
      <ol class="cards">
        ${LESSONS.map(
          (l, i) => `
          <li>
            <a class="card ${done.has(i) ? 'done' : ''}" href="#/urok-${i + 1}">
              <span class="card-num" aria-hidden="true">${done.has(i) ? '✓' : i + 1}</span>
              <span>
                <h3>${h(l.title)}</h3>
                <p>${h(l.summary)}</p>
                <span class="meta">${l.steps.length} ${stepsWord(l.steps.length)} + запитання${done.has(i) ? ' · <span class="ok">пройдено</span>' : ''}</span>
              </span>
            </a>
          </li>`,
        ).join('')}
      </ol>

      <h2 class="section-title" id="faq">Якщо щось не так</h2>
      <input class="faq-search" type="search" placeholder="Шукати: лист, код, помічник…" aria-label="Пошук у запитаннях" />
      <div class="faq">
        ${FAQ.map(([q, a]) => `<details><summary>${h(q)}</summary><p>${h(a)}</p></details>`).join('')}
      </div>
      <p class="faq-empty" hidden>Нічого не знайдено. Напишіть координаторові, який додав вас до події.</p>
    </div>`;

  const input = app.querySelector('.faq-search');
  const items = [...app.querySelectorAll('.faq details')];
  const empty = app.querySelector('.faq-empty');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    for (const d of items) {
      const hit = !q || d.textContent.toLowerCase().includes(q);
      d.hidden = !hit;
      if (hit) shown++;
      if (q && hit) d.open = true;
    }
    empty.hidden = shown > 0;
  });
}

// ---------- Lesson ----------
let current = null; // { li, step, screenKey }

function renderLesson(li, step) {
  const lesson = LESSONS[li];
  document.title = `${lesson.title} — Посібник команди події`;
  app.innerHTML = `
    <div class="wrap lesson">
      <a class="back" href="#/">← Усі уроки</a>
      <p class="eyebrow">Урок ${li + 1} з ${LESSONS.length}</p>
      <h1>${h(lesson.title)}</h1>
      <div class="lesson-grid">
        <div class="phone" aria-hidden="false"><div class="screen" id="screen"></div></div>
        <div class="panel" id="panel" aria-live="polite"></div>
      </div>
    </div>`;
  current = { li, step: Math.min(step, lesson.steps.length), screenKey: null, seen: new Set([0]) };
  show(current.step);
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function show(step) {
  const lesson = LESSONS[current.li];
  current.step = step;
  current.seen.add(step);
  const isQuiz = step >= lesson.steps.length;
  const s = lesson.steps[Math.min(step, lesson.steps.length - 1)];
  drawScreen(isQuiz ? lesson.steps[lesson.steps.length - 1] : s, isQuiz ? -1 : step);
  history.replaceState(null, '', `#/urok-${current.li + 1}${step ? `/${step + 1}` : ''}`);

  const panel = document.getElementById('panel');
  const dots = lesson.steps
    .map(
      (_, i) =>
        `<button class="dot ${i === step ? 'active' : current.seen.has(i) ? 'seen' : ''}" data-go="${i}" aria-label="Крок ${i + 1}"></button>`,
    )
    .join('');
  const quizDot = `<button class="dot quiz-dot ${isQuiz ? 'active' : ''}" data-go="${lesson.steps.length}" aria-label="Перевірка"></button>`;

  if (!isQuiz) {
    panel.innerHTML = `
      <div class="step-count">Крок ${step + 1} з ${lesson.steps.length}</div>
      <div class="dots">${dots}${quizDot}</div>
      <h2>${s.title}</h2>
      <p class="text">${s.text}</p>
      <div class="nav">
        <button class="btn btn-ghost" data-go="${step - 1}" ${step === 0 ? 'disabled' : ''}>← Назад</button>
        <button class="btn btn-primary" data-go="${step + 1}">${step === lesson.steps.length - 1 ? 'Перевірити себе' : 'Далі'} →</button>
      </div>
      <p class="kbd-hint">Порада: стрілки ← → на клавіатурі теж працюють.</p>`;
  } else {
    const qz = lesson.quiz;
    panel.innerHTML = `
      <div class="step-count">Перевірте себе</div>
      <div class="dots">${dots}${quizDot}</div>
      <h2>${h(qz.q)}</h2>
      <div class="options">
        ${qz.options.map((o, i) => `<button class="option" data-answer="${i}">${h(o)}</button>`).join('')}
      </div>
      <p class="feedback" hidden></p>
      <div class="nav"><button class="btn btn-ghost" data-go="${step - 1}">← Назад</button></div>`;
  }
}

function finishLesson() {
  const li = current.li;
  done.add(li);
  saveDone(done);
  const panel = document.getElementById('panel');
  const next = li + 1 < LESSONS.length ? li + 1 : -1;
  const box = document.createElement('div');
  box.className = 'done-box';
  box.innerHTML =
    next === -1
      ? `<p><b>Готово — усі ${LESSONS.length} уроків пройдено!</b> Тепер ви знаєте адмінку.</p><a class="btn btn-primary" href="#/">До всіх уроків</a>`
      : `<p><b>Урок пройдено.</b> Далі: «${h(LESSONS[next].title)}».</p><a class="btn btn-primary" href="#/urok-${next + 1}">Наступний урок →</a>`;
  panel.querySelector('.nav').replaceWith(box);
}

function drawScreen(s, activeStep) {
  const screenEl = document.getElementById('screen');
  const lesson = LESSONS[current.li];
  const scr = SCREENS[s.screen];

  if (current.screenKey !== s.screen) {
    current.screenKey = s.screen;
    if (scr.mock) {
      screenEl.innerHTML = MOCKS[scr.mock]();
    } else {
      const spots = lesson.steps
        .map((st, i) => ({ st, i }))
        .filter(({ st }) => st.screen === s.screen && st.spot)
        .map(
          ({ st, i }) =>
            `<button class="spot${st.spot[0] > 600 ? ' badge-left' : ''}" data-go="${i}" style="left:${(st.spot[0] / 780) * 100}%;top:${(st.spot[1] / scr.h) * 100}%" aria-label="Крок ${i + 1}: ${h(st.title)}"><span>${i + 1}</span></button>`,
        )
        .join('');
      screenEl.innerHTML = `<div class="canvas"><img src="${scr.src}" alt="${h(scr.alt)}" width="780" height="${scr.h}">${spots}</div>`;
    }
  }

  if (scr.mock) {
    screenEl.querySelectorAll('[data-focus]').forEach((el) => el.classList.toggle('active', activeStep >= 0 && el.dataset.focus === s.focus));
    positionCanvas();
    return;
  }
  screenEl.querySelectorAll('.spot').forEach((b) => b.classList.toggle('active', Number(b.dataset.go) === activeStep));
  positionCanvas();
}

// Slide the screenshot so the active spot sits a little above the middle;
// scale a mock-up (laid out at 390 px) to the screen's width.
function positionCanvas() {
  if (!current) return;
  const screenEl = document.getElementById('screen');
  if (!screenEl) return;
  screenEl.style.setProperty('--k', screenEl.clientWidth / 390);
  const canvas = screenEl.querySelector('.canvas');
  if (!canvas) return;
  const lesson = LESSONS[current.li];
  const s = lesson.steps[Math.min(current.step, lesson.steps.length - 1)];
  const scr = SCREENS[s.screen];
  const w = screenEl.clientWidth;
  const sh = screenEl.clientHeight;
  const ch = (w * scr.h) / 780;
  const y = s.spot ? (s.spot[1] / scr.h) * ch : 0;
  const off = Math.max(0, Math.min(y - sh * 0.42, ch - sh));
  canvas.style.transform = `translateY(${-off}px)`;
}

// ---------- Mock-ups (wording taken from the real email and bot) ----------
const MOCKS = {
  email: () => `
    <div class="mock">
      <div class="mail-head">
        <div class="subj">Вхід у «Галилею»</div>
        <div class="from">Галилея · зараз</div>
      </div>
      <div class="mail-body">
        <img src="img/logo.jpg" alt="">
        <h4>Вас додали до команди події</h4>
        <p>Тепер ви в команді події «Осінні реколекції «Повернення»». Натисніть кнопку нижче, щоб увійти.</p>
        <span class="mail-btn" data-focus="button">Увійти</span>
        <p style="margin:18px 0 8px">Або введіть цей код на сторінці входу:</p>
        <span class="mail-code" data-focus="code">48219307</span>
        <p class="mail-note">Посилання та код діють одну годину і працюють лише один раз.</p>
      </div>
    </div>`,
  about: () => `
    <div class="mock">
      <div class="about">
        <h4>Про вас</h4>
        <p class="sub">Кілька слів, щоб колеги знали, хто ви.</p>
        <div class="fields" data-focus="fields">
          <label>Ім'я<span class="input">Наталія</span></label>
          <label>Прізвище<span class="input">Поліщук</span></label>
          <label>Телефон<span class="input">+380 67 111 00 07</span></label>
        </div>
        <div class="check"><i></i>Створити пароль (необов'язково)</div>
        <span class="submit" data-focus="submit">Завершити реєстрацію</span>
      </div>
    </div>`,
  chat: () => `
    <div class="mock chat">
      <div class="chat-head">
        <img src="img/logo.jpg" alt="">
        <span><b>Галилея</b><small>бот</small></span>
      </div>
      <div class="chat-body">
        <div class="bubble">👋 <b>Вітаємо, Наталія Поліщук!</b><br>Ваш акаунт підключено до бота.</div>
        <div class="bubble me">/help</div>
        <div class="bubble">
          <b>Що вміє бот</b>
          <span class="line" data-focus="message">✍️ /message — написати учасникам подій, у команді яких ви є</span>
          <span class="line" data-focus="notifications">🔔 /notifications — про що сповіщати вас тут</span>
          <span class="line">💬 /help — ця довідка</span>
        </div>
      </div>
      <div class="start-btn" data-focus="start">START</div>
    </div>`,
};

// ---------- Events ----------
app.addEventListener('click', (e) => {
  const go = e.target.closest('[data-go]');
  if (go && current && app.contains(go) && !go.disabled) {
    const n = Number(go.dataset.go);
    const max = LESSONS[current.li].steps.length;
    if (n >= 0 && n <= max) show(n);
    return;
  }
  const opt = e.target.closest('[data-answer]');
  if (opt && current) {
    const qz = LESSONS[current.li].quiz;
    const fb = document.getElementById('panel').querySelector('.feedback');
    fb.hidden = false;
    if (Number(opt.dataset.answer) === qz.answer) {
      opt.classList.add('right');
      fb.className = 'feedback good';
      fb.textContent = `Правильно! ${qz.why}`;
      document.querySelectorAll('[data-answer]').forEach((b) => (b.disabled = true));
      finishLesson();
    } else {
      opt.classList.remove('wrong');
      void opt.offsetWidth; // restart the shake
      opt.classList.add('wrong');
      fb.className = 'feedback bad';
      fb.textContent = 'Не зовсім — спробуйте ще раз.';
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (!current || !location.hash.startsWith('#/urok-') || e.target.matches('input, textarea')) return;
  const max = LESSONS[current.li].steps.length;
  if (e.key === 'ArrowRight' && current.step < max) show(current.step + 1);
  if (e.key === 'ArrowLeft' && current.step > 0) show(current.step - 1);
});

window.addEventListener('resize', positionCanvas);
window.addEventListener('hashchange', () => {
  // replaceState inside a lesson doesn't fire this; only real navigation does.
  current = null;
  route();
});
route();
