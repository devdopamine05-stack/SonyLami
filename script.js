/* ===================================
   SOFIA YUSUPOVA — LAMIBROWS
   script.js  (final clean version)
=================================== */

// ═══════════════════════════════════════════════════════
//  ⚙️  НАСТРОЙКИ — редактируй только здесь
// ═══════════════════════════════════════════════════════

const TG_BOT_TOKEN = '8932431035:AAEgwfU4CLaDR4lrNRXR_GeuW863v73ZWK8';
const TG_RECIPIENTS = ['978732421', '938919176'];

const WA_PHONE = '77075227137';

// ── РАБОТЫ УЧЕНИЦ ────────────────────────────────────────────────────────────
//
//  Просто добавь имена файлов в массив ниже.
//  Файлы должны лежать в папке  media/  в репозитории.
//  Порядок в массиве = порядок в карусели.
//
//  Пример строки с подписью: { src: 'media/s15.jpg', caption: 'Ламинирование ресниц' }
//  Пример без подписи:       { src: 'media/s15.jpg' }
//
const STUDENT_PHOTOS = [
    { src: 'media/s1.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s2.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s3.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s4.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s5.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s6.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s7.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s9.jpg'  ,caption: 'Ламинирование ресниц'},
    { src: 'media/s10.jpg' ,caption: 'Ламинирование ресниц'},
    { src: 'media/s11.jpg' ,caption: 'Ламинирование ресниц'},
    { src: 'media/s12.jpg' ,caption: 'Ламинирование ресниц'},
    { src: 'media/s13.jpg' ,caption: 'Ламинирование ресниц'},
    { src: 'media/s14.jpg' ,caption: 'Ламинирование ресниц'},
];
//
//  Чтобы добавить новое фото:
//  1. Загрузи файл в папку  media/  в GitHub
//  2. Добавь строку в массив выше
//  Всё — карусель обновится сама.
//
// ─────────────────────────────────────────────────────────────────────────────


// ── WHATSAPP — тексты для каждого курса ─────────────────────────────────────
const WA_MESSAGES = {
    'Ламинирование ресниц (офлайн, 80 000 ₸)':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование ресниц (офлайн, 80 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование ресниц (офлайн) — 80 000 ₸':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование ресниц (офлайн, 80 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование ресниц (онлайн) — 60 000 ₸':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование ресниц (онлайн, 60 000 ₸). Хочу учиться в онлайн-формате. Напишите, пожалуйста, как получить доступ к материалам и как внести оплату. С нетерпением жду старта 🌸',
    'Ламинирование бровей (офлайн, 120 000 ₸)':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование бровей (офлайн, 120 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование бровей (офлайн) — 120 000 ₸':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование бровей (офлайн, 120 000 ₸). Хочу учиться. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Ламинирование бровей (онлайн) — 90 000 ₸':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Ламинирование бровей (онлайн, 90 000 ₸). Хочу учиться в онлайн-формате. Напишите, пожалуйста, как получить доступ к материалам и как внести оплату. С нетерпением жду старта 🌸',
    'Комбо-курс: Брови + Ресницы (офлайн, 180 000 ₸)':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Комбо-курс «Брови + Ресницы» (офлайн, 180 000 ₸). Хочу учиться и получить сразу два навыка! Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Комбо Брови+Ресницы (офлайн) — 180 000 ₸':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Комбо-курс «Брови + Ресницы» (офлайн, 180 000 ₸). Хочу учиться и получить сразу два навыка! Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸',
    'Комбо Брови+Ресницы (онлайн) — 150 000 ₸':
        'Здравствуйте, Софья! Я на вашем сайте, всё изучила, выбрала курс: Комбо-курс «Брови + Ресницы» (онлайн, 150 000 ₸). Хочу учиться в онлайн-формате. Напишите, пожалуйста, как получить доступ к материалам и как внести оплату. С нетерпением жду старта 🌸',
};

const WA_DEFAULT = 'Здравствуйте, Софья! Я на вашем сайте, всё изучила и хочу записаться на обучение. Напишите, пожалуйста, какие даты свободны и как внести предоплату. С нетерпением жду старта 🌸';

function waUrl(course) {
    const msg = WA_MESSAGES[course] || WA_DEFAULT;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
}
function openWA(course) { window.open(waUrl(course), '_blank'); }


// ═══════════════════════════════════════════════════════
//  ГЕНЕРАЦИЯ КАРУСЕЛИ УЧЕНИЦ из массива STUDENT_PHOTOS
// ═══════════════════════════════════════════════════════
(function buildStudentsCarousel() {
    const track = document.getElementById('studentsTrack');
    if (!track) return;

    if (!STUDENT_PHOTOS.length) {
        // Заглушка если массив пустой
        track.innerHTML = `
            <div class="sw-placeholder" style="flex:0 0 min(90vw,640px);min-width:min(90vw,640px);text-align:center;padding:60px 40px;border:1.5px dashed var(--border);border-radius:var(--r);background:var(--cream);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
                <div style="font-size:2.5rem;opacity:.4">🌸</div>
                <p style="font-family:var(--font-display);font-size:1.4rem;font-style:italic;color:var(--espresso)">Работы учениц скоро здесь</p>
                <p style="font-size:.88rem;color:var(--muted);max-width:340px;line-height:1.6">Добавь фото в папку <code>media/</code> и укажи имена в массиве STUDENT_PHOTOS в script.js</p>
                <a href="#booking" class="btn btn--dark" style="margin-top:8px">Хочу учиться</a>
            </div>`;
        return;
    }

    track.innerHTML = STUDENT_PHOTOS.map(p => `
        <div class="sw-item">
            <img src="${p.src}" alt="Работа ученицы" loading="lazy">
            ${p.caption ? `<div class="sw-item__caption">${p.caption}</div>` : ''}
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
//  NAV — scroll shadow + burger
// ═══════════════════════════════════════════════════════
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const links  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
}));


// ═══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ═══════════════════════════════════════════════════════
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const siblings = [...e.target.parentElement.querySelectorAll('[data-reveal]')];
        const delay    = Math.min(siblings.indexOf(e.target) * 80, 320);
        setTimeout(() => e.target.classList.add('visible'), delay);
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
    const scrolled  = window.scrollY;
    const docH      = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (docH > 0 ? scrolled / docH * 100 : 0) + '%';
    if (backToTop)   backToTop.classList.toggle('visible', scrolled > 300);
}, { passive: true });

if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


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
//  REVIEW STARS (render ★ from data-rating)
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.review-card__stars[data-rating]').forEach(el => {
    const r = parseInt(el.dataset.rating, 10);
    el.innerHTML = Array.from({ length: 5 }, (_, i) =>
        `<span class="star${i >= r ? ' empty' : ''}">★</span>`
    ).join('');
});


// ═══════════════════════════════════════════════════════
//  COUNTER ANIMATION (about stats)
// ═══════════════════════════════════════════════════════
(function () {
    const counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;
    let fired = false;
    const obs = new IntersectionObserver(entries => {
        if (fired || !entries.some(e => e.isIntersecting)) return;
        fired = true;
        obs.disconnect();
        counters.forEach(el => {
            const target   = parseInt(el.dataset.target, 10);
            const suffix   = el.dataset.suffix || '';
            const duration = 1600;
            const start    = performance.now();
            (function step(now) {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = Math.floor(p < 1 ? (1 - Math.pow(1 - p, 3)) * target : target) + suffix;
                if (p < 1) requestAnimationFrame(step);
            })(start);
        });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
})();


// ═══════════════════════════════════════════════════════
//  CARD ACCORDION (course cards "Что включено")
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
//  WA BUTTONS on course cards
// ═══════════════════════════════════════════════════════
document.querySelectorAll('.wa-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        openWA(btn.dataset.course || '');
    });
});


// ═══════════════════════════════════════════════════════
//  BOOKING FORM → Telegram + WhatsApp
// ═══════════════════════════════════════════════════════
const form      = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');
const btnText   = submitBtn?.querySelector('.btn-text');
const btnLoad   = submitBtn?.querySelector('.btn-loading');
const successEl = document.getElementById('successMsg');
const errorEl   = document.getElementById('errorMsg');

form?.addEventListener('submit', async e => {
    e.preventDefault();
    successEl.hidden = true;
    errorEl.hidden   = true;

    const name   = form.name.value.trim();
    const phone  = form.phone.value.trim();
    const course = form.course.value;

    if (!name || !phone) {
        const bad = name ? form.phone : form.name;
        bad.style.borderColor = '#e53935';
        bad.focus();
        bad.addEventListener('input', () => bad.style.borderColor = '', { once: true });
        return;
    }

    setLoad(true);

    const now  = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Oral', day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
    const text = `🌸 <b>Новая заявка!</b>\n━━━━━━━━━━━━━━━━━━━━\n👤 <b>Имя:</b> x(name)\n📱 <b>Телефон:</b> x(phone)\n📚 <b>Курс:</b> x(course)\n━━━━━━━━━━━━━━━━━━━━\n⏰ <i>x(now)</i>`
        .replace('x(name)', esc(name))
        .replace('x(phone)', esc(phone))
        .replace('x(course)', esc(course))
        .replace('x(now)', now);

    const results = await Promise.allSettled(
        TG_RECIPIENTS.map(id => sendTG(id, text))
    );
    setLoad(false);

    if (results.some(r => r.status === 'fulfilled' && r.value)) {
        form.reset();
        successEl.hidden = false;
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => openWA(course), 600);
    } else {
        errorEl.hidden = false;
    }
});

async function sendTG(chatId, text) {
    try {
        const r = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
        });
        return (await r.json()).ok;
    } catch { return false; }
}

function setLoad(on) {
    if (submitBtn) submitBtn.disabled = on;
    if (btnText)   btnText.hidden     = on;
    if (btnLoad)   btnLoad.hidden     = !on;
}

function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }


// ═══════════════════════════════════════════════════════
//  CAROUSEL ENGINE (reviews + students)
// ═══════════════════════════════════════════════════════
function makeCarousel(trackId, { speed = 0.55, pauseMs = 4500 } = {}) {
    const track    = document.getElementById(trackId);
    if (!track) return;
    const carousel = track.closest('.carousel');
    const dotsWrap = carousel.querySelector('.carousel__dots');
    const gap      = 24;

    // Infinite loop: clone all items
    const originals = [...track.children];
    if (!originals.length) return;

    originals.forEach(el => {
        const c = el.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        track.appendChild(c);
    });

    let offset   = 0;
    let paused   = false;
    let pTimer   = null;
    let grabbing = false;
    let grabX    = 0;
    let grabOff  = 0;
    let touchX   = 0;
    let touchOff = 0;

    function totalW() {
        return originals.reduce((s, el) => s + el.offsetWidth + gap, 0);
    }

    // Dots
    if (dotsWrap && originals.length > 1) {
        const n = Math.min(originals.length, 9);
        dotsWrap.innerHTML = '';
        for (let i = 0; i < n; i++) {
            const d = document.createElement('button');
            d.className = 'carousel__dot' + (i === 0 ? ' active' : '');
            d.setAttribute('aria-label', `Слайд ${i + 1}`);
            d.addEventListener('click', () => {
                const w  = totalW();
                offset   = (i / originals.length) * w;
                apply(); updateDots(); resumeAfter();
            });
            dotsWrap.appendChild(d);
        }
    }

    function updateDots() {
        if (!dotsWrap) return;
        const dots = [...dotsWrap.querySelectorAll('.carousel__dot')];
        if (!dots.length) return;
        const w    = totalW();
        const idx  = Math.floor((offset % w) / (w / originals.length)) % dots.length;
        dots.forEach((d, i) => d.classList.toggle('active', i === Math.max(0, idx)));
    }

    function apply() { track.style.transform = `translateX(${-offset}px)`; }

    function pause(restart = true) {
        paused = true;
        clearTimeout(pTimer);
        if (restart) resumeAfter();
    }
    function resumeAfter() {
        clearTimeout(pTimer);
        pTimer = setTimeout(() => { paused = false; }, pauseMs);
    }

    // RAF loop
    (function tick() {
        if (!paused) {
            const w = totalW();
            offset += speed;
            if (offset >= w) offset -= w;
            apply(); updateDots();
        }
        requestAnimationFrame(tick);
    })();

    // Hover
    carousel.addEventListener('mouseenter', () => pause(false));
    carousel.addEventListener('mouseleave', () => { if (!grabbing) resumeAfter(); });

    // Drag (mouse)
    carousel.addEventListener('mousedown', e => {
        grabbing = true; grabX = e.clientX; grabOff = offset;
        track.classList.add('is-grabbing'); pause(false);
    });
    window.addEventListener('mousemove', e => {
        if (!grabbing) return;
        const w = totalW();
        offset  = ((grabOff - (e.clientX - grabX)) % w + w) % w;
        apply(); updateDots();
    });
    window.addEventListener('mouseup', () => {
        if (!grabbing) return;
        grabbing = false;
        track.classList.remove('is-grabbing');
        resumeAfter();
    });

    // Touch
    carousel.addEventListener('touchstart', e => {
        touchX   = e.touches[0].clientX;
        touchOff = offset;
        pause(false);
    }, { passive: true });
    carousel.addEventListener('touchmove', e => {
        const w = totalW();
        offset  = ((touchOff - (e.touches[0].clientX - touchX)) % w + w) % w;
        apply(); updateDots();
    }, { passive: true });
    carousel.addEventListener('touchend', resumeAfter, { passive: true });
}

// Init carousels after a tick (so dynamic students track is rendered)
requestAnimationFrame(() => {
    makeCarousel('reviewsTrack',  { speed: 0.45, pauseMs: 4500 });
    makeCarousel('studentsTrack', { speed: 0.55, pauseMs: 4500 });
});


// ═══════════════════════════════════════════════════════
//  LIGHTBOX (students photos)
// ═══════════════════════════════════════════════════════
(function () {
    const lb = document.createElement('div');
    lb.className = 'sw-lightbox';
    lb.innerHTML = `
        <button class="sw-lightbox__close" aria-label="Закрыть">✕</button>
        <img src="" alt="">
        <span class="sw-lightbox__caption"></span>`;
    document.body.appendChild(lb);

    const lbImg = lb.querySelector('img');
    const lbCap = lb.querySelector('.sw-lightbox__caption');

    function open(src, cap) {
        lbImg.src = src;
        lbCap.textContent = cap || '';
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { lbImg.src = ''; }, 300);
    }

    document.addEventListener('click', e => {
        const item = e.target.closest('.sw-item');
        if (!item || item.closest('.carousel__track')?.classList.contains('is-grabbing')) return;
        const img = item.querySelector('img');
        const cap = item.querySelector('.sw-item__caption');
        if (img) open(img.src, cap?.textContent || '');
    });

    lb.querySelector('.sw-lightbox__close').addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
