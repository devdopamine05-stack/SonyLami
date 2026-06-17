/* ===================================
   SOFIA YUSUPOVA — LAMIBROWS
   script.js
=================================== */

// ═══════════════════════════════════════════════════════
//  ⚙️  НАСТРОЙКИ — редактируй только здесь
// ═══════════════════════════════════════════════════════

const TG_BOT_TOKEN  = '8932431035:AAEgwfU4CLaDR4lrNRXR_GeuW863v73ZWK8';
const TG_RECIPIENTS = ['978732421', '938919176'];
const WA_PHONE      = '77075227137';

// ─────────────────────────────────────────────────────────────────────────────
//  РАБОТЫ УЧЕНИЦ
//  Добавляй/убирай строки. Файлы кладёт в папку  media/  в репозитории.
//  Порядок в карусели — случайный при каждой загрузке страницы.
// ─────────────────────────────────────────────────────────────────────────────
const STUDENT_PHOTOS = [
    { src: 'media/s1.jpg',  caption: 'Ламинирование ресниц' },
    { src: 'media/s2.jpg',  caption: 'Ламинирование ресниц' },
    { src: 'media/s3.jpg',  caption: 'Ламинирование ресниц' },
    { src: 'media/s4.jpg',  caption: 'Ламинирование ресниц' },
    { src: 'media/s5.jpg',  caption: 'Ламинирование ресниц' },
    { src: 'media/s6.jpg',  caption: 'Ламинирование ресниц' },
    { src: 'media/s7.jpg',  caption: 'Ламинирование бровей с окрашиванием и коррекцией' },
    { src: 'media/s9.jpg',  caption: 'Окрашивание бровей в натуральной технике' },
    { src: 'media/s10.jpg', caption: 'Ламинирование бровей с окрашиванием и коррекцией' },
    { src: 'media/s11.jpg', caption: 'Ламинирование ресниц' },
    { src: 'media/s12.jpg', caption: 'Ламинирование ресниц и бровей' },
    { src: 'media/s13.jpg', caption: 'Окрашивание бровей "графика с коррекцией"' },
    { src: 'media/s14.jpg', caption: 'Ламинирование ресниц' },
];

// ─────────────────────────────────────────────────────────────────────────────
//  ОТЗЫВЫ
//  Добавляй/убирай блоки. rating — от 1 до 5.
//  Порядок в карусели — случайный при каждой загрузке страницы.
// ─────────────────────────────────────────────────────────────────────────────
const REVIEWS = [
    {
        rating: 5,
        text: '«Я если честно в восторге даже спустя год после обучения🥺 Настолько ясно и подробно было всё рассказано и показано, что все детали до сих пор в моей голове. Даже несмотря на то что мы вдвоём приболели во время обучения, всё прошло быстро, эффективно и очень запоминающе. Очень профессионально с твоей стороны что ты всегда на связи, всегда подскажешь и поддерживаешь во всех моментах. Спасибо тебе большое, я очень рада что попала к тебе самой первой на курс🙂»',
        name: 'Дарья',
        course: 'Комбо-курс',
    },
    {
        rating: 5,
        text: '«Честно говоря, до обучения очень переживала, потому что никогда раньше не работала в этой сфере и боялась, что не справлюсь. Но всё оказалось намного проще благодаря тому, как ты объясняешь материал. Каждое действие разбиралось настолько подробно, что вопросов практически не оставалось. Очень понравилось, что во время практики ты обращала внимание даже на мелочи. После курса появилась уверенность в своих силах. Спасибо тебе огромное за знания, поддержку и комфортную атмосферу ❤️»',
        name: 'Анастасия',
        course: 'Комбо-курс',
    },
    {
        rating: 5,
        text: '«Долго выбирала преподавателя и очень рада, что в итоге попала именно к тебе. Обучение прошло легко и интересно, хотя информации было действительно много. Особенно понравилось, что после курса не остаёшься один на один со своими вопросами — всегда можно написать и получить помощь. Прошло уже несколько месяцев, а я до сих пор пользуюсь всеми рекомендациями. Спасибо за профессионализм и отношение к своим ученикам 🥰»',
        name: 'Марина',
        course: 'Ламинирование ресниц',
    },
    {
        rating: 5,
        text: '«Самое ценное для меня было то, что обучение было не просто про технику, а про понимание всех процессов от начала до конца. Ты объясняешь очень доступно и спокойно, поэтому даже сложные моменты быстро становятся понятными. Атмосфера была максимально комфортной, не было страха ошибиться. После обучения я почувствовала себя гораздо увереннее и уже начала работать с клиентами. Спасибо за знания, поддержку и мотивацию ✨»',
        name: 'Екатерина',
        course: 'Ламинирование бровей',
    },
    {
        rating: 5,
        text: '«Очень понравилось обучение! Всё объясняется простым и понятным языком, поэтому даже новая информация воспринимается легко. Большим плюсом стало то, что теория сразу закреплялась на практике, благодаря чему все знания хорошо усваивались. Атмосфера на обучении была комфортной и спокойной, всегда можно было задать вопрос и получить подробный ответ. Спасибо за полезные знания, поддержку и уверенность, которую ты даёшь своим ученикам ❤️»',
        name: 'Виктория',
        course: 'Ламинирование ресниц',
    },
    {
        rating: 5,
        text: '«Спасибо за терпение и поддержку на протяжении всего обучения. Очень понравилось, что каждый этап подробно разбирался и не оставалось непонятных моментов. Атмосфера была максимально комфортной и дружелюбной, поэтому учиться было легко и приятно. После курса появилось гораздо больше уверенности в своих силах и понимания всех процессов. Спасибо за знания, внимание и помощь на каждом этапе обучения ❤️»',
        name: 'Кристина',
        course: 'Комбо-курс',
    },
    {
        rating: 4,
        text: '«Обучение мне очень понравилось, весь материал был понятным, структурированным и хорошо поданным. Особенно ценно то, что большое внимание уделялось практике и разбору реальных ситуаций. Если возникали вопросы, на них всегда подробно отвечали и помогали разобраться. После курса я получила много полезных знаний и стала чувствовать себя намного увереннее в работе. Спасибо за профессиональный подход и поддержку ✨»',
        name: 'София',
        course: 'Ламинирование бровей',
    },
    {
        rating: 5,
        text: '«Очень довольна обучением. Всё понятно и доступно ❤️»',
        name: 'Полина',
        course: 'Ламинирование ресниц',
    },
    {
        rating: 5,
        text: '«Лучшее обучение, на котором я была. Спасибо большооое»',
        name: 'Наталья',
        course: 'Комбо-курс',
    },
    {
        rating: 5,
        text: '«Мне очень понравилось обучение, абсолютно всё было подробно, понятно и доступно объяснено. Большим плюсом стало то, что была работа на моделях и предоставлялись все необходимые материалы. Если что-то не получалось или оставались вопросы, мне спокойно объясняли всё ещё раз до полного понимания. Обучение прошло очень интересно и продуктивно, а полученные знания действительно остаются надолго. Спасибо большое за такой подход и качественное обучение ❤️»',
        name: 'Самира',
        course: 'Комбо-курс',
    },
    {
        rating: 5,
        text: '«Спасибо большое за обучение! Всё было очень интересно, понятно и без лишней воды, а занятия проходили в комфортной и приятной атмосфере. Особенно понравился индивидуальный подход, внимание к деталям и готовность ответить на любые вопросы. Во время обучения чувствовалась поддержка и заинтересованность в результате каждого ученика. После курса остались только положительные впечатления и уверенность в своих знаниях. Спасибо за полученный опыт и ценные навыки ✨»',
        name: 'Альфия',
        course: 'Ламинирование ресниц',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
//  WHATSAPP — тексты для каждого курса
// ─────────────────────────────────────────────────────────────────────────────
const WA_MESSAGES = {
    'Ламинирование ресниц (офлайн, 80 000 ₸)':         'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование ресниц (офлайн, 80 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование ресниц (офлайн) — 80 000 ₸':        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование ресниц (офлайн, 80 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование ресниц (онлайн) — 60 000 ₸':        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование ресниц (онлайн, 60 000 ₸). Хочу учиться в онлайн-формате. Напишите, пожалуйста, как получить доступ и как внести оплату. С нетерпением жду старта 🌸',
    'Ламинирование бровей (офлайн, 120 000 ₸)':        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование бровей (офлайн, 120 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование бровей (офлайн) — 120 000 ₸':       'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование бровей (офлайн, 120 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование бровей (онлайн) — 90 000 ₸':        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование бровей (онлайн, 90 000 ₸). Хочу учиться в онлайн-формате. Напишите, пожалуйста, как получить доступ и как внести оплату. С нетерпением жду старта 🌸',
    'Комбо-курс: Брови + Ресницы (офлайн, 180 000 ₸)': 'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Комбо-курс «Брови + Ресницы» (офлайн, 180 000 ₸). Хочу учиться и получить сразу два навыка! Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Комбо Брови+Ресницы (офлайн) — 180 000 ₸':        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Комбо-курс «Брови + Ресницы» (офлайн, 180 000 ₸). Хочу учиться и получить сразу два навыка! Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Комбо Брови+Ресницы (онлайн) — 150 000 ₸':        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Комбо-курс «Брови + Ресницы» (онлайн, 150 000 ₸). Хочу учиться в онлайн-формате. Напишите, пожалуйста, как получить доступ и как внести оплату. С нетерпением жду старта 🌸',
};
const WA_DEFAULT = 'Здравствуйте, Софья! Я на вашем сайте, хочу записаться на обучение. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸';

function waUrl(course) {
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGES[course] || WA_DEFAULT)}`;
}
function openWA(course) { window.open(waUrl(course), '_blank'); }


// ═══════════════════════════════════════════════════════
//  УТИЛИТЫ
// ═══════════════════════════════════════════════════════

// Fisher–Yates shuffle — перемешивает массив без мутации оригинала
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function stars(rating) {
    return Array.from({ length: 5 }, (_, i) =>
        `<span class="star${i >= rating ? ' empty' : ''}">★</span>`
    ).join('');
}


// ═══════════════════════════════════════════════════════
//  ГЕНЕРАЦИЯ КАРУСЕЛИ УЧЕНИЦ
// ═══════════════════════════════════════════════════════
(function buildStudents() {
    const track = document.getElementById('studentsTrack');
    if (!track) return;

    const photos = shuffle(STUDENT_PHOTOS);

    if (!photos.length) {
        track.innerHTML = `
            <div style="flex:0 0 min(90vw,560px);min-width:min(90vw,560px);text-align:center;padding:60px 32px;border:1.5px dashed var(--border);border-radius:var(--r);background:var(--cream);display:flex;flex-direction:column;align-items:center;gap:14px;">
                <div style="font-size:2.2rem;opacity:.4">🌸</div>
                <p style="font-family:var(--font-display);font-size:1.3rem;font-style:italic;color:var(--espresso)">Работы учениц скоро здесь</p>
                <p style="font-size:.85rem;color:var(--muted);max-width:320px;line-height:1.6">Добавь файлы в <code>media/</code> и укажи их в массиве STUDENT_PHOTOS</p>
            </div>`;
        return;
    }

    track.innerHTML = photos.map(p => `
        <div class="sw-item">
            <img src="${p.src}" alt="Работа ученицы" loading="lazy" draggable="false">
            ${p.caption ? `<div class="sw-item__caption">${p.caption}</div>` : ''}
        </div>`
    ).join('');
})();


// ═══════════════════════════════════════════════════════
//  ГЕНЕРАЦИЯ КАРУСЕЛИ ОТЗЫВОВ
// ═══════════════════════════════════════════════════════
(function buildReviews() {
    const track = document.getElementById('reviewsTrack');
    if (!track) return;

    const reviews = shuffle(REVIEWS);

    track.innerHTML = reviews.map(r => `
        <div class="review-card">
            <div class="review-card__stars">${stars(r.rating)}</div>
            <p class="review-card__text">${r.text}</p>
            <div class="review-card__author">
                <div class="review-card__avatar">${r.name[0]}</div>
                <div>
                    <div class="review-card__name">${r.name}</div>
                    <div class="review-card__course">${r.course}</div>
                </div>
            </div>
        </div>`
    ).join('');
})();


// ═══════════════════════════════════════════════════════
//  CURSOR GLOW
// ═══════════════════════════════════════════════════════
const glow = document.getElementById('cursorGlow');
if (glow) {
    document.addEventListener('mousemove', e => {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
    }, { passive: true });
}


// ═══════════════════════════════════════════════════════
//  NAV
// ═══════════════════════════════════════════════════════
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
}));


// ═══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ═══════════════════════════════════════════════════════
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const siblings = [...e.target.parentElement.querySelectorAll('[data-reveal]')];
        setTimeout(() => e.target.classList.add('visible'), Math.min(siblings.indexOf(e.target) * 80, 320));
        revealObs.unobserve(e.target);
    });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));


// ═══════════════════════════════════════════════════════
//  SCROLL PROGRESS + BACK TO TOP
// ═══════════════════════════════════════════════════════
const progressBar = document.getElementById('scrollProgress');
const backToTop   = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const s = window.scrollY;
    const d = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (d > 0 ? s / d * 100 : 0) + '%';
    if (backToTop)   backToTop.classList.toggle('visible', s > 300);
}, { passive: true });

backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


// ═══════════════════════════════════════════════════════
//  FAQ ACCORDION
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.faq__q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item   = btn.closest('.faq__item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq__item.open').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
});


// ═══════════════════════════════════════════════════════
//  COUNTER ANIMATION
// ═══════════════════════════════════════════════════════
(function () {
    const counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;
    let fired = false;
    const obs = new IntersectionObserver(entries => {
        if (fired || !entries.some(e => e.isIntersecting)) return;
        fired = true; obs.disconnect();
        counters.forEach(el => {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || '';
            const t0 = performance.now();
            (function step(now) {
                const p = Math.min((now - t0) / 1500, 1);
                el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
                if (p < 1) requestAnimationFrame(step);
            })(t0);
        });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
})();


// ═══════════════════════════════════════════════════════
//  CARD ACCORDION
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.card-accordion__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const acc    = btn.closest('.card-accordion');
        const isOpen = acc.classList.contains('open');
        btn.closest('.course-card').querySelectorAll('.card-accordion.open').forEach(a => {
            a.classList.remove('open');
            a.querySelector('.card-accordion__toggle').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { acc.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
});


// ═══════════════════════════════════════════════════════
//  WA BUTTONS
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.wa-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); openWA(btn.dataset.course || ''); });
});


// ═══════════════════════════════════════════════════════
//  BOOKING FORM
// ═══════════════════════════════════════════════════════
const form      = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');
const btnText   = submitBtn?.querySelector('.btn-text');
const btnLoad   = submitBtn?.querySelector('.btn-loading');
const successEl = document.getElementById('successMsg');
const errorEl   = document.getElementById('errorMsg');

// ── Поле телефона: формат +77XXXXXXXXX (12 символов) ────────────────
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    // Нормализует введённое значение в формат +77XXXXXXXXX
    function normalizePhone(raw) {
        // Оставляем только цифры
        let digits = raw.replace(/\D/g, '');

        // Если начинается с 8 — заменяем на 7
        if (digits.startsWith('8')) digits = '7' + digits.slice(1);

        // Обрезаем до 11 цифр (7 + 10 остальных)
        digits = digits.slice(0, 11);

        return digits.length ? '+' + digits : '';
    }

    function applyFormat(e) {
        const prev   = phoneInput.value;
        const cursor = phoneInput.selectionStart;
        const formatted = normalizePhone(prev);
        if (formatted !== prev) {
            phoneInput.value = formatted;
            // Восстанавливаем курсор с поправкой на разницу длин
            const diff = formatted.length - prev.length;
            phoneInput.setSelectionRange(cursor + diff, cursor + diff);
        }
    }

    // Блокируем буквы и спецсимволы кроме + в начале
    phoneInput.addEventListener('keypress', e => {
        if (e.key.length !== 1) return;
        // Разрешаем + только если поле пустое или всё выделено
        if (e.key === '+' && phoneInput.selectionStart === 0) return;
        if (!/[0-9]/.test(e.key)) e.preventDefault();
    });

    // Форматируем при любом изменении
    phoneInput.addEventListener('input', applyFormat);

    // Вставка из буфера
    phoneInput.addEventListener('paste', e => {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData('text');
        phoneInput.value = pasted;
        applyFormat();
    });

    // При фокусе: если пусто — ставим +7 как подсказку
    phoneInput.addEventListener('focus', () => {
        if (!phoneInput.value) phoneInput.value = '+7';
    });

    // При потере фокуса: если только +7 осталось — очищаем
    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value === '+7') phoneInput.value = '';
    });
}

form?.addEventListener('submit', async e => {
    e.preventDefault();
    successEl.hidden = true; errorEl.hidden = true;

    const name   = form.name.value.trim();
    const phone  = form.phone.value.trim();
    const course = form.course.value;

    // Валидация: имя не пустое, телефон = +77XXXXXXXXX (12 символов)
    const phoneValid = /^\+77\d{9}$/.test(phone);

    if (!name) {
        markError(form.name); return;
    }
    if (!phoneValid) {
        markError(form.phone, 'Формат: +77075227137'); return;
    }

    setLoad(true);
    const now  = new Date().toLocaleString('ru-RU', { timeZone:'Asia/Oral', day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });

    // Для WA ссылки: убираем + (wa.me ожидает чистые цифры)
    const phoneDigits = phone.replace('+', ''); // → 77075227137

    // WhatsApp ссылка для быстрой связи с клиентом прямо из Telegram
    const waReply = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
        `Здравствуйте, ${name}! Вы оставляли заявку на обучение у Софьи Юсуповой — курс «${course}». Готова ответить на все вопросы и уточнить удобное время. Когда вам удобно начать? 🌸`
    )}`;

    const text =
        `🌸 <b>Новая заявка!</b>\n` +
        `\n` +
        `👤 <b>Имя:</b> ${esc(name)}\n` +
        `📱 <b>Телефон:</b> ${esc(phone)}\n` +
        `📞 <b>WhatsApp:</b> <a href="${waReply}">Написать клиенту →</a>\n` +
        `📚 <b>Курс:</b> ${esc(course)}\n` +
        `⏰ <i>${now}</i>`;

    const results = await Promise.allSettled(TG_RECIPIENTS.map(id => sendTG(id, text)));
    setLoad(false);

    if (results.some(r => r.status === 'fulfilled' && r.value)) {
        form.reset(); successEl.hidden = false;
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => openWA(course), 600);
    } else { errorEl.hidden = false; }
});

async function sendTG(id, text) {
    try {
        const r = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: id, text, parse_mode: 'HTML' }),
        });
        return (await r.json()).ok;
    } catch { return false; }
}
function setLoad(on) {
    if (submitBtn) submitBtn.disabled = on;
    if (btnText)   btnText.hidden     = on;
    if (btnLoad)   btnLoad.hidden     = !on;
}

function markError(input, msg) {
    input.style.borderColor = '#e53935';
    input.focus();
    if (msg) {
        input.setCustomValidity(msg);
        input.reportValidity();
        setTimeout(() => input.setCustomValidity(''), 3000);
    }
    input.addEventListener('input', () => { input.style.borderColor = ''; input.setCustomValidity(''); }, { once: true });
}


// ═══════════════════════════════════════════════════════
//  CAROUSEL ENGINE
//  Особенности:
//  • Инерция при свайпе (momentum / flick)
//  • Блокировка скролла страницы при горизонтальном drag
//  • Бесконечный loop через клонирование
// ═══════════════════════════════════════════════════════
function makeCarousel(trackId, { speed = 0.5, pauseMs = 4500 } = {}) {
    const track    = document.getElementById(trackId);
    if (!track) return;
    const carousel = track.closest('.carousel');
    const dotsWrap = carousel.querySelector('.carousel__dots');
    const GAP      = 24;

    // ── Клонируем для бесконечного лупа ──────────────────────────
    const originals = [...track.children];
    if (!originals.length) return;
    originals.forEach(el => {
        const c = el.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c);
    });

    // ── Состояние ─────────────────────────────────────────────────
    let offset    = 0;   // текущая позиция (px)
    let velocity  = 0;   // скорость инерции (px/frame)
    let autoSpeed = speed; // базовая скорость авто-прокрутки
    let autoPaused = false;
    let pauseTimer = null;

    // drag state
    let isDragging = false;
    let lastX      = 0;
    let lastTime   = 0;
    let prevX      = 0;
    let prevTime   = 0;

    function totalW() {
        return originals.reduce((s, el) => s + el.offsetWidth + GAP, 0);
    }

    function wrap(val) {
        const w = totalW();
        if (w <= 0) return val;
        return ((val % w) + w) % w;
    }

    function apply() {
        track.style.transform = `translateX(${-offset}px)`;
    }

    // ── Dots ──────────────────────────────────────────────────────
    if (dotsWrap && originals.length > 1) {
        dotsWrap.innerHTML = '';
        const n = Math.min(originals.length, 9);
        for (let i = 0; i < n; i++) {
            const d = document.createElement('button');
            d.className = 'carousel__dot' + (i === 0 ? ' active' : '');
            d.setAttribute('aria-label', `Слайд ${i + 1}`);
            d.addEventListener('click', () => {
                const w = totalW();
                offset = (i / originals.length) * w;
                velocity = 0;
                apply(); updateDots(); resumeAfter();
            });
            dotsWrap.appendChild(d);
        }
    }

    function updateDots() {
        if (!dotsWrap) return;
        const dots = [...dotsWrap.querySelectorAll('.carousel__dot')];
        if (!dots.length) return;
        const w   = totalW();
        const idx = Math.round((offset % w) / (w / originals.length)) % dots.length;
        dots.forEach((d, i) => d.classList.toggle('active', i === Math.max(0, idx)));
    }

    function pause(restart = true) {
        autoPaused = true; clearTimeout(pauseTimer);
        if (restart) resumeAfter();
    }
    function resumeAfter() {
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => { autoPaused = false; }, pauseMs);
    }

    // ── RAF loop ──────────────────────────────────────────────────
    let raf;
    function tick() {
        if (isDragging) { raf = requestAnimationFrame(tick); return; }

        const w = totalW();
        if (w <= 0) { raf = requestAnimationFrame(tick); return; }

        if (Math.abs(velocity) > 0.05) {
            // инерция после свайпа
            offset   = wrap(offset + velocity);
            velocity *= 0.93;            // коэффициент затухания
        } else {
            velocity = 0;
            if (!autoPaused) {
                offset = wrap(offset + autoSpeed);
            }
        }
        apply(); updateDots();
        raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    // ── Hover ─────────────────────────────────────────────────────
    carousel.addEventListener('mouseenter', () => pause(false), { passive: true });
    carousel.addEventListener('mouseleave', () => { if (!isDragging) resumeAfter(); }, { passive: true });

    // ── Mouse drag ────────────────────────────────────────────────
    carousel.addEventListener('mousedown', e => {
        isDragging = true;
        lastX = prevX = e.clientX;
        lastTime = prevTime = performance.now();
        velocity = 0;
        track.classList.add('is-grabbing');
        autoPaused = true; clearTimeout(pauseTimer);
    });

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const dx = e.clientX - lastX;
        offset   = wrap(offset - dx);
        prevX    = lastX; prevTime = lastTime;
        lastX    = e.clientX; lastTime = performance.now();
        apply(); updateDots();
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('is-grabbing');

        // Рассчитываем инерцию по последним двум точкам
        const dt = performance.now() - prevTime;
        if (dt > 0 && dt < 100) {
            velocity = -(lastX - prevX) / dt * 16; // px/frame @ 60fps
            velocity = Math.max(-30, Math.min(30, velocity)); // clamp
        }
        resumeAfter();
    });

    // ── Touch drag (с блокировкой скролла страницы) ───────────────
    let touchStartX   = 0;
    let touchStartY   = 0;
    let touchPrevX    = 0;
    let touchPrevTime = 0;
    let touchLastX    = 0;
    let touchLastTime = 0;
    let isHorizontal  = null; // null = ещё не определили направление

    carousel.addEventListener('touchstart', e => {
        touchStartX  = touchLastX  = touchPrevX    = e.touches[0].clientX;
        touchStartY  = e.touches[0].clientY;
        touchLastTime = touchPrevTime = performance.now();
        isHorizontal  = null;
        velocity      = 0;
        isDragging    = true;
        autoPaused    = true; clearTimeout(pauseTimer);
    }, { passive: true });

    carousel.addEventListener('touchmove', e => {
        const cx  = e.touches[0].clientX;
        const cy  = e.touches[0].clientY;
        const dx  = cx - touchStartX;
        const dy  = cy - touchStartY;

        // Определяем направление один раз
        if (isHorizontal === null && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
            isHorizontal = Math.abs(dx) > Math.abs(dy);
        }

        if (!isHorizontal) {
            // Вертикальный скролл — не вмешиваемся
            isDragging = false;
            return;
        }

        // Горизонтальный — блокируем скролл страницы
        e.preventDefault();

        offset     = wrap(offset - (cx - touchLastX));
        touchPrevX    = touchLastX;    touchPrevTime  = touchLastTime;
        touchLastX    = cx;            touchLastTime  = performance.now();
        apply(); updateDots();
    }, { passive: false }); // passive:false нужен для e.preventDefault()

    carousel.addEventListener('touchend', () => {
        isDragging = false;
        if (isHorizontal) {
            // инерция
            const dt = performance.now() - touchPrevTime;
            if (dt > 0 && dt < 150) {
                velocity = -(touchLastX - touchPrevX) / dt * 16;
                velocity = Math.max(-28, Math.min(28, velocity));
            }
        }
        resumeAfter();
    }, { passive: true });
}

// Запускаем после рендера динамического контента
requestAnimationFrame(() => {
    makeCarousel('reviewsTrack',  { speed: 0.45, pauseMs: 4500 });
    makeCarousel('studentsTrack', { speed: 0.55, pauseMs: 4500 });
});


// ═══════════════════════════════════════════════════════
//  LIGHTBOX (фото учениц со свайпом между фото)
// ═══════════════════════════════════════════════════════
(function () {
    const lb = document.createElement('div');
    lb.className = 'sw-lightbox';
    lb.innerHTML = `
        <button class="sw-lightbox__close" aria-label="Закрыть">✕</button>
        <button class="sw-lightbox__prev" aria-label="Предыдущее">‹</button>
        <div class="sw-lightbox__img-wrap">
            <img src="" alt="" draggable="false">
        </div>
        <button class="sw-lightbox__next" aria-label="Следующее">›</button>
        <span class="sw-lightbox__caption"></span>
        <span class="sw-lightbox__counter"></span>`;
    document.body.appendChild(lb);

    const lbImg     = lb.querySelector('img');
    const lbCap     = lb.querySelector('.sw-lightbox__caption');
    const lbCounter = lb.querySelector('.sw-lightbox__counter');
    const lbPrev    = lb.querySelector('.sw-lightbox__prev');
    const lbNext    = lb.querySelector('.sw-lightbox__next');
    const lbClose   = lb.querySelector('.sw-lightbox__close');

    let photos = []; // { src, caption }
    let current = 0;

    function open(idx) {
        current = ((idx % photos.length) + photos.length) % photos.length;
        lbImg.src              = photos[current].src;
        lbCap.textContent      = photos[current].caption || '';
        lbCounter.textContent  = `${current + 1} / ${photos.length}`;
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { lbImg.src = ''; }, 300);
    }

    function prev() { open(current - 1); }
    function next() { open(current + 1); }

    lbPrev.addEventListener('click',  e => { e.stopPropagation(); prev(); });
    lbNext.addEventListener('click',  e => { e.stopPropagation(); next(); });
    lbClose.addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });

    // Touch swipe в лайтбоксе
    let lbTouchStartX = 0;
    lb.addEventListener('touchstart', e => { lbTouchStartX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend',   e => {
        const dx = e.changedTouches[0].clientX - lbTouchStartX;
        if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape')     close();
        if (e.key === 'ArrowLeft')  prev();
        if (e.key === 'ArrowRight') next();
    });

    // Клик по фото в карусели — открываем лайтбокс
    document.addEventListener('click', e => {
        const item = e.target.closest('.sw-item');
        if (!item) return;
        // Не открывать если только что тащили
        if (item.closest('.carousel__track')?.classList.contains('is-grabbing')) return;

        // Собираем все ОРИГИНАЛЬНЫЕ sw-item (не клоны)
        const track    = document.getElementById('studentsTrack');
        const allItems = [...(track?.children || [])].filter(el => !el.getAttribute('aria-hidden'));
        photos  = allItems.map(el => ({
            src:     el.querySelector('img')?.src || '',
            caption: el.querySelector('.sw-item__caption')?.textContent || '',
        }));
        const idx = allItems.indexOf(item);
        if (idx !== -1) open(idx);
    });
})();
