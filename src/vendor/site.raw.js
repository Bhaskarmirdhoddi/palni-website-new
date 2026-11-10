/* Palni Confluence: flow field engine and page behaviour. No libraries.
   Performance rules: nothing heavy runs before first paint; fields start only when on screen,
   render at capped density, adapt to slow devices and pause off screen or in background tabs. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = matchMedia('(hover: hover)').matches;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const TOK = { sf: '--sf', sn: '--sn', db: '--db', brand: '--brand', pearl: '--pearl' };
  const LIGHTF = { sf: '#0A6CC2', sn: '#0B8A5A', db: '#D2541F', brand: '#5A46DB' };
  const color = k => k === 'gold' ? (isLight() ? '#C98A00' : '#FFC77A') : k === 'bronze' ? (isLight() ? '#883125' : '#B4532A') : k === 'palni' ? (isLight() ? '#C98A00' : css('--value')) : (isLight() && LIGHTF[k]) || (css(TOK[k] || k) || '#ffffff');
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const hash = n => { n = n | 0; n = Math.imul(n ^ (n >>> 16), 0x45d9f3b); n = Math.imul(n ^ (n >>> 16), 0x45d9f3b); n ^= n >>> 16; return (n >>> 0) / 4294967296; };
  const noise = (x, y, t) => Math.sin(x * 1.7 + t) * Math.cos(y * 2.3 - t * .7) + Math.sin((x + y) * 1.31 + t * .53) * .6;
  const isLight = () => document.documentElement.dataset.theme === 'light';
  const idle = window.requestIdleCallback ? fn => requestIdleCallback(fn, { timeout: 400 }) : fn => setTimeout(fn, 60);
  const ALPHAS = 6;

  /* ---------------- Flow field ---------------- */
  class Field {
    constructor(cv) {
      this.cv = cv; this.ctx = null; this.ready = false; this.running = false; this.visible = false;
      this.mode = cv.dataset.field || 'confluence';
      this.keys = (cv.dataset.colors || 'sf,sn,db').split(',');
      this.density = parseFloat(cv.dataset.density || '1');
      this.interactive = cv.dataset.interactive === 'true' && canHover;
      this.fadeA = parseFloat(cv.dataset.fade || '0.08');
      this.t = 0; this.mouse = null; this.skip = false; this.frame = 0; this.cost = 0;
    }
    init() {
      if (this.ready) return;
      this.ready = true;
      this.ctx = this.cv.getContext('2d', { alpha: true });
      this.resize();
      let rt; new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => this.resize(), 150); }).observe(this.cv);
      if (this.interactive) {
        const host = this.cv.parentElement;
        host.addEventListener('pointermove', e => { const r = this.cv.getBoundingClientRect(); this.mouse = { x: (e.clientX - r.left) * this.dpr, y: (e.clientY - r.top) * this.dpr }; }, { passive: true });
        host.addEventListener('pointerleave', () => { this.mouse = null; });
      }
    }
    resize() {
      const r = this.cv.getBoundingClientRect(); if (!r.width || !r.height) return;
      const area = r.width * r.height;
      this.dpr = Math.min(area > 600000 ? 1 : 1.5, devicePixelRatio || 1);
      const w = Math.round(r.width * this.dpr), h = Math.round(r.height * this.dpr);
      if (w === this.w && h === this.h) return;
      this.w = this.cv.width = w; this.h = this.cv.height = h;
      this.skip = w * h > 900000;                 /* very large canvases draw at 30 fps */
      this.theme();
      const n = Math.round(Math.min(1300, area / 950) * this.density);
      this.ps = []; for (let i = 0; i < Math.max(90, n); i++) this.ps.push(this.spawn({ id: i }, true));
      this.ctx.clearRect(0, 0, w, h);
      if (this.mode === 'network') this.buildNet();
      else for (let i = 0; i < 70; i++) this.advance();  /* positions only, no drawing */
      if (reduce || !this.running) this.draw(true);
    }
    theme() {
      this.light = isLight();
      this.colors = this.keys.map(color);
      this.pal = this.mode === 'strata' ? [color('bronze'), this.colors[0] || color('db'), color('gold')]
        : this.mode === 'confluence' ? [...this.colors, color('palni')] : this.colors;
      this.gold = this.mode === 'confluence' ? this.pal.length - 1 : -1;
      this.buckets = Array.from({ length: this.pal.length * ALPHAS }, () => []);
    }
    retheme() { if (!this.ready) return; this.theme(); this.ctx.clearRect(0, 0, this.w, this.h); if (this.mode === 'network' || reduce || !this.running) this.draw(true); }
    spawn(p, anywhere) {
      const id = p.id, k = this.keys.length;
      p.ci = this.mode === 'strata' ? id % 3 : id % k; p.life = 0; p.max = 300 + hash(id * 7 + (this.t | 0)) * 500;
      const r1 = Math.random(), r2 = Math.random();
      const u = anywhere ? r1 : -0.02 * Math.random(); let v;
      switch (this.mode) {
        case 'confluence': v = (k === 3 ? [0.2, 0.5, 0.8][p.ci] : 0.5) + (r2 - .5) * .22; break;
        case 'lanes': v = (Math.floor(r2 * 7) + .5) / 7; break;
        default: v = .08 + r2 * .84;
      }
      p.v0 = v; p.x = p.px = u * (this.w || 1); p.y = p.py = v * (this.h || 1);
      p.lane = .385 + ((id * 7) % 11) * .023; p.fun = ((id % 9) - 4) * .0045; p.band = [.3, .5, .7][id % 3] + (((id >> 2) % 5) - 2) * .012;
      return p;
    }
    advance() {
      const w = this.w, h = this.h, dpr = this.dpr, sp = (this.skip ? 2 : 1.25) * dpr * (h > 500 ? 1.1 : 1), t = this.t * (this.skip ? .008 : .004), m = this.mouse, mode = this.mode;
      this.t++;
      for (const p of this.ps) {
        const u = p.x / w, v = p.y / h; let vx = sp, vy = 0;
        if (mode === 'confluence') {
          const T = Math.pow(Math.max(0, 1 - u), 1.6) * 1.5, a = noise(p.x * .0035 / dpr, p.y * .0035 / dpr, t) * Math.PI * T;
          const target = lerp(lerp(p.v0, .5, ss(.28, .7, u)), p.lane, ss(.58, .84, u));
          vx = sp * (.75 + .35 * Math.cos(a)) * (u > .7 ? 1.35 : 1); vy = (target - v) * h * .02 + Math.sin(a) * sp * T;
        } else if (mode === 'funnel') {
          const a = noise(p.x * .004 / dpr, p.y * .004 / dpr, t) * Math.PI * Math.pow(1 - Math.min(1, u), 2) * 1.2, spread = Math.pow(1 - ss(.05, .92, u), 1.4);
          const target = .5 + (p.v0 - .5) * spread + p.fun * (1 - spread);
          vx = sp * (.8 + .3 * Math.cos(a)) * (1 + u * .6); vy = (target - v) * h * .03 + Math.sin(a) * sp * .8;
        } else if (mode === 'lanes') {
          const col = Math.floor(Math.max(0, u) * 4), target = (Math.floor(hash(p.id * 13 + col * 101) * 7) + .5) / 7, dv = target - v, turn = Math.min(1, Math.abs(dv) * 14);
          vx = sp * (1.15 - turn * .95); vy = Math.sign(dv) * Math.min(Math.abs(dv) * h * .12, sp * 1.4);
        } else {
          const T = Math.pow(Math.max(0, 1 - u), 1.3) * 1.7, a = noise(p.x * .003 / dpr, p.y * .003 / dpr, t * 1.2) * Math.PI * T;
          const target = lerp(p.v0, p.band, ss(.25, .7, u));
          vx = sp * (.7 + .4 * Math.cos(a)) * (.8 + u * .5); vy = (target - v) * h * .025 + Math.sin(a) * sp * T;
        }
        if (m) { const dx = p.x - m.x, dy = p.y - m.y, d2 = dx * dx + dy * dy, R = 120 * dpr; if (d2 < R * R) { const f = (1 - Math.sqrt(d2) / R) * 3 * dpr; vy += (dy >= 0 ? f : -f); vx += f * .3; } }
        p.px = p.x; p.py = p.y; p.x += vx; p.y += vy; p.life++;
        if (p.x > w + 4 || p.y < -20 || p.y > h + 20 || p.life > p.max * (w / 900 + 1)) { this.spawn(p, false); p.dead = true; } else p.dead = false;
      }
    }
    draw(still) {
      const c = this.ctx; if (!c) return;
      if (this.mode === 'network') return this.drawNet(still);
      c.globalCompositeOperation = 'destination-out'; c.globalAlpha = still ? 1 : this.fadeA * (this.skip ? 1.7 : 1) * (this.light ? .7 : 1);
      c.fillStyle = '#000'; c.fillRect(0, 0, this.w, this.h);
      c.globalCompositeOperation = this.light ? 'multiply' : 'lighter'; c.lineWidth = (this.light ? 1.35 : .9) * this.dpr; c.lineCap = 'round';
      const B = this.buckets; for (const b of B) b.length = 0;
      const mode = this.mode, w = this.w;
      for (const p of this.ps) {
        if (p.dead) continue;
        const u = p.x / w;
        const a = mode === 'strata' ? .18 + ss(.2, .8, u) * .7 : mode === 'confluence' ? .4 + ss(.6, .9, u) * .5 : .3 + ss(.3, .9, u) * .55;
        const ci = this.gold >= 0 && u > .8 && (p.id % 5) < 3 ? this.gold : p.ci % this.pal.length;
        B[ci * ALPHAS + Math.min(ALPHAS - 1, Math.floor(a * ALPHAS))].push(p);
      }
      for (let i = 0; i < B.length; i++) {
        const arr = B[i]; if (!arr.length) continue;
        c.strokeStyle = this.pal[Math.floor(i / ALPHAS)]; c.globalAlpha = this.light ? Math.min(1, .35 + ((i % ALPHAS) + .5) / ALPHAS * .8) : ((i % ALPHAS) + .5) / ALPHAS; c.beginPath();
        if (still) for (const p of arr) { c.moveTo(p.x - (p.x - p.px) * 14, p.y - (p.y - p.py) * 14); c.lineTo(p.x, p.y); }
        else for (const p of arr) { c.moveTo(p.px, p.py); c.lineTo(p.x, p.y); }
        c.stroke();
      }
      c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
    }
    buildNet() {
      const N = Math.max(14, Math.min(60, Math.round(this.w * this.h / (this.dpr * this.dpr) / 5200)));
      this.nodes = Array.from({ length: N }, (_, i) => ({ x: (.08 + hash(i * 3 + 1) * .84) * this.w, y: (.1 + hash(i * 5 + 2) * .8) * this.h, r: (1.6 + hash(i) * 2.4) * this.dpr }));
      this.edges = [];
      this.nodes.forEach((a, i) => {
        this.nodes.map((b, j) => [j, (a.x - b.x) ** 2 + (a.y - b.y) ** 2]).filter(x => x[0] !== i).sort((x, y) => x[1] - y[1]).slice(0, 2)
          .forEach(([j]) => { if (!this.edges.some(e => e[0] === j && e[1] === i)) this.edges.push([i, j]); });
      });
      this.pulses = Array.from({ length: Math.round(this.edges.length * .8) }, (_, i) => ({ e: i % this.edges.length, s: hash(i * 9) }));
    }
    drawNet() {
      const c = this.ctx, col = this.colors[0];
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1; c.clearRect(0, 0, this.w, this.h);
      c.strokeStyle = col; c.lineWidth = this.dpr * (this.light ? 1 : .8); c.globalAlpha = this.light ? .35 : .22; c.beginPath();
      for (const [i, j] of this.edges) { c.moveTo(this.nodes[i].x, this.nodes[i].y); c.lineTo(this.nodes[j].x, this.nodes[j].y); }
      c.stroke(); c.fillStyle = col;
      for (const p of this.pulses) {
        p.s = (p.s + .006) % 1; const [i, j] = this.edges[p.e], a = this.nodes[i], b = this.nodes[j];
        c.globalAlpha = Math.sin(p.s * Math.PI) * .9; c.beginPath(); c.arc(lerp(a.x, b.x, p.s), lerp(a.y, b.y, p.s), 1.8 * this.dpr, 0, 7); c.fill();
      }
      for (const n of this.nodes) { c.globalAlpha = .9; c.beginPath(); c.arc(n.x, n.y, n.r, 0, 7); c.fill(); c.globalAlpha = .12; c.beginPath(); c.arc(n.x, n.y, n.r * 4, 0, 7); c.fill(); }
      c.globalAlpha = 1;
    }
    tick() {
      if (!this.running) return;
      this.raf = requestAnimationFrame(() => this.tick());
      if (this.skip && (this.frame++ & 1)) return;
      const t0 = performance.now();
      if (this.mode !== 'network') this.advance();
      this.draw(false);
      /* adaptive quality: a slow device sheds particles instead of dropping frames */
      this.cost = this.cost * .9 + (performance.now() - t0) * .1;
      if (this.t > 40 && this.cost > 10 && this.ps && this.ps.length > 160) { this.ps.length = Math.round(this.ps.length * .7); this.cost = 6; }
    }
    play() { if (reduce || this.running || document.hidden) return; this.init(); this.running = true; this.tick(); }
    pause() { this.running = false; cancelAnimationFrame(this.raf); }
  }

  const fields = [...document.querySelectorAll('canvas[data-field]')].map(cv => new Field(cv));
  const startFields = () => {
    const io = new IntersectionObserver(es => es.forEach(e => {
      const f = fields.find(x => x.cv === e.target); f.visible = e.isIntersecting;
      if (e.isIntersecting) { if (reduce) { f.init(); } else f.play(); } else f.pause();
    }), { rootMargin: '120px' });
    fields.forEach(f => io.observe(f.cv));
  };
  /* wait until the page has painted and the browser is idle */
  const go = () => requestAnimationFrame(() => idle(startFields));
  if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
  document.addEventListener('visibilitychange', () => fields.forEach(f => { if (document.hidden) f.pause(); else if (f.visible) f.play(); }));

  /* ---------------- VoiceCueAI waveform ---------------- */
  document.querySelectorAll('canvas[data-wave]').forEach(cv => {
    const ctx = cv.getContext('2d'); let t = 0, on = false, sized = false;
    const size = () => { const d = Math.min(1.5, devicePixelRatio || 1), r = cv.getBoundingClientRect(); cv.width = Math.round(r.width * d); cv.height = Math.round(r.height * d); sized = true; };
    const draw = () => {
      if (!sized) size();
      const n = 64, bw = cv.width / n, col = css('--sn');
      ctx.clearRect(0, 0, cv.width, cv.height); ctx.fillStyle = col;
      for (let i = 0; i < n; i++) {
        const env = Math.sin(i / n * Math.PI), a = (Math.abs(Math.sin(i * .37 + t * .05) * Math.cos(i * .11 - t * .03)) * .85 + .1) * env;
        const hgt = Math.max(2, a * cv.height * .9);
        ctx.globalAlpha = .35 + a * .65; ctx.fillRect(i * bw + bw * .2, (cv.height - hgt) / 2, bw * .6, hgt);
      }
      ctx.globalAlpha = 1;
    };
    new ResizeObserver(() => { sized = false; draw(); }).observe(cv);
    cv.addEventListener('retheme', draw);
    if (reduce) return;
    const loop = () => { if (!on) return; t++; draw(); requestAnimationFrame(loop); };
    new IntersectionObserver(es => es.forEach(e => { const was = on; on = e.isIntersecting; if (on && !was) loop(); })).observe(cv);
  });

  /* ---------------- header, menus, drawer ---------------- */
  const hdr = document.querySelector('.hdr');
  const bar = document.querySelector('.hdr .bar');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false; if (!hdr) return;
      hdr.classList.toggle('scrolled', scrollY > 8);
      const m = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.setProperty('--p', m > 0 ? Math.min(1, scrollY / m).toFixed(4) : 0);
    });
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const closeMenus = () => document.querySelectorAll('.nav .item.open').forEach(x => { x.classList.remove('open'); x.querySelector('button.top')?.setAttribute('aria-expanded', 'false'); });
  document.querySelectorAll('.nav .item > button.top').forEach(b => {
    b.addEventListener('click', () => { const it = b.parentElement, open = !it.classList.contains('open'); closeMenus(); it.classList.toggle('open', open); b.setAttribute('aria-expanded', String(open)); });
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav .item')) closeMenus(); });
  const drawer = document.getElementById('drawer');
  const burger = document.querySelector('.hdr .burger');
  function closeDrawer() { if (drawer && !drawer.hidden) { drawer.hidden = true; burger?.setAttribute('aria-expanded', 'false'); document.documentElement.style.overflow = ''; burger?.focus(); } }
  burger?.addEventListener('click', () => { drawer.hidden = false; burger.setAttribute('aria-expanded', 'true'); document.documentElement.style.overflow = 'hidden'; drawer.querySelector('.close')?.focus(); });
  drawer?.querySelector('.close')?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { drawer.hidden = true; document.documentElement.style.overflow = ''; }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenus(); closeDrawer(); } });

  /* ---------------- section tones: the background follows the story ---------------- */
  const TONES = {
    dark: { brand: ['#33287F', '#123A78', '#2A2470'], night: ['#1B2A66', '#0C1C44', '#24357A'],
      sf: ['#0E5BB0', '#083A73', '#1870C4'], sn: ['#0E6E58', '#084A55', '#14866C'], db: ['#93331A', '#40205C', '#A6461C'] },
    light: { brand: ['#DCD5FF', '#CBDAF3', '#E7E1FF'], night: ['#CBD6F0', '#E0E6F4', '#C9D3EE'],
      sf: ['#B8D7F5', '#CFE1F7', '#A6CDF2'], sn: ['#B5E3CE', '#CDEBE0', '#A0DABF'], db: ['#F4C5AE', '#EBD3CB', '#F0B597'] },
  };
  let currentTone = 'brand';
  const root = document.documentElement;
  const setTone = t => { currentTone = t; const set = TONES[isLight() ? 'light' : 'dark']; const v = set[t] || set.night; root.style.setProperty('--tone-a', v[0]); root.style.setProperty('--tone-b', v[1]); root.style.setProperty('--tone-c', v[2]); };
  const toned = [...document.querySelectorAll('[data-tone]')];
  if (toned.length) {
    setTone(toned[0].dataset.tone);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setTone(e.target.dataset.tone); }), { rootMargin: '-48% 0px -48% 0px' });
    toned.forEach(el => io.observe(el));
  }

  /* ---------------- dark and light theme ---------------- */
  const applyTheme = t => {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('palni-theme', t); } catch (e) {}
    document.querySelectorAll('.theme-toggle').forEach(b => { b.setAttribute('aria-pressed', String(t === 'light')); b.setAttribute('aria-label', t === 'light' ? 'Switch to dark theme' : 'Switch to light theme'); });
    const mt = document.querySelector('meta[name=theme-color]'); if (mt) mt.content = t === 'light' ? '#F4F5F9' : '#070D1C';
    setTone(currentTone); fields.forEach(f => f.retheme()); document.querySelectorAll('canvas[data-wave]').forEach(c => c.dispatchEvent(new Event('retheme')));
  };
  applyTheme(isLight() ? 'light' : 'dark');
  document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => applyTheme(isLight() ? 'dark' : 'light')));

  /* ---------------- pointer glow, magnetic buttons, tilting tiles ---------------- */
  if (!reduce && canHover) {
    const glow = document.querySelector('.bg .glow'); let gq = null;
    if (glow) addEventListener('pointermove', e => { if (gq) return; gq = requestAnimationFrame(() => { gq = null; glow.style.transform = `translate(${e.clientX - 320}px, ${e.clientY - 320}px)`; }); }, { passive: true });
    document.querySelectorAll('.btn').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${((e.clientX - r.left) / r.width - .5) * 8}px, ${((e.clientY - r.top) / r.height - .5) * 6}px)`; });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
    document.querySelectorAll('.tile').forEach(t => {
      t.addEventListener('pointermove', e => { const r = t.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; t.style.setProperty('--mx', x + 'px'); t.style.setProperty('--my', y + 'px'); t.style.setProperty('--ry', ((x / r.width - .5) * 5).toFixed(2) + 'deg'); t.style.setProperty('--rx', ((.5 - y / r.height) * 5).toFixed(2) + 'deg'); });
      t.addEventListener('pointerleave', () => { t.style.setProperty('--ry', '0deg'); t.style.setProperty('--rx', '0deg'); });
    });
  }

  /* ---------------- count up figures that scroll into view ---------------- */
  if (!reduce) {
    const nums = [...document.querySelectorAll('.num[data-to]')].filter(n => n.getBoundingClientRect().top > innerHeight);
    const io2 = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io2.unobserve(e.target);
      const el = e.target, to = parseFloat(el.dataset.to), dec = (el.dataset.to.split('.')[1] || '').length, t0 = performance.now(), span = el.querySelector('.v');
      const step = now => { const k = Math.min(1, (now - t0) / 1400); span.textContent = (to * (1 - Math.pow(1 - k, 4))).toFixed(dec); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: .4 });
    nums.forEach(n => io2.observe(n));
  }


  /* ---------------- office clocks ---------------- */
  const clocks = [...document.querySelectorAll('time[data-tz]')];
  if (clocks.length) {
    const fmt = {};
    const tickClock = () => clocks.forEach(t => { const z = t.dataset.tz; try { fmt[z] = fmt[z] || new Intl.DateTimeFormat('en-US', { timeZone: z, hour: 'numeric', minute: '2-digit' }); t.textContent = fmt[z].format(new Date()).toLowerCase(); } catch (e) {} });
    tickClock(); setInterval(tickClock, 30000);
  }

  /* ---------------- careers: roles filter, search, accordion ---------------- */
  const roleList = document.querySelector('.roles');
  if (roleList) {
    const roles = [...roleList.querySelectorAll('.role')];
    const chips = [...document.querySelectorAll('[data-team]')].filter(b => b.tagName === 'BUTTON');
    const q = document.getElementById('role-q'), empty = document.getElementById('roles-empty');
    let team = 'all';
    const run = () => {
      const term = (q?.value || '').trim().toLowerCase(); let shown = 0;
      roles.forEach(r => { const ok = (team === 'all' || r.dataset.team === team) && (!term || r.dataset.q.includes(term)); r.hidden = !ok; if (ok) shown++; });
      chips.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.team === team)));
      if (empty) empty.hidden = shown > 0;
    };
    chips.forEach(b => b.addEventListener('click', () => { team = b.dataset.team; run(); }));
    q?.addEventListener('input', run);
    roles.forEach(r => {
      const b = r.querySelector(':scope > button'), d = r.querySelector('.detail');
      b.addEventListener('click', () => { const open = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', String(open)); d.hidden = !open; r.toggleAttribute('data-open', open); });
    });
    document.querySelectorAll('.track-card[data-track]').forEach(a => a.addEventListener('click', () => {
      const t = a.dataset.track; if (chips.some(c => c.dataset.team === t)) { team = t; if (q) q.value = ''; run(); }
    }));
  }
  const cv = document.getElementById('cv-form');
  if (cv) cv.addEventListener('submit', e => {
    e.preventDefault(); const v = document.getElementById('cv-email').value.trim(), m = document.getElementById('cv-msg');
    m.textContent = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ? 'Thanks. Our talent team will be in touch. You can also email your CV to jobs@palni.com.' : 'Enter an email in the format name@email.com.';
  });

  /* ---------------- tabs ---------------- */
  document.querySelectorAll('[role="tablist"]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      tabs.forEach(t => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; const p = document.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on; });
      if (focus) tab.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', e => { const d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0; if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); } });
    });
  });

  /* ---------------- use case filters ---------------- */
  const fbar = document.getElementById('uc-filters');
  if (fbar) {
    const cards = [...document.querySelectorAll('.case[data-tag]')];
    const btns = [...fbar.querySelectorAll('button')];
    const count = f => f === 'all' ? cards.length : cards.filter(c => c.dataset.tag === f).length;
    btns.forEach(b => { const s = b.querySelector('.n'); if (s) s.textContent = count(b.dataset.filter); });
    const apply = f => { btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === f))); cards.forEach(c => { c.hidden = !(f === 'all' || c.dataset.tag === f); }); const st = document.getElementById('filter-status'); if (st) st.textContent = count(f) + ' use cases shown'; };
    btns.forEach(b => b.addEventListener('click', () => { apply(b.dataset.filter); try { history.replaceState(null, '', b.dataset.filter === 'all' ? location.pathname : '#' + b.dataset.filter); } catch (e) {} }));
    const fromHash = () => { const h = location.hash.slice(1); apply(btns.some(b => b.dataset.filter === h) ? h : 'all'); };
    fromHash(); addEventListener('hashchange', fromHash);
  }

  /* ---------------- contact form ---------------- */
  const form = document.getElementById('enquiry');
  if (form) {
    const done = document.getElementById('enquiry-done');
    const check = el => {
      const err = document.getElementById(el.id + '-err'); let msg = '';
      if (el.required && !el.value.trim()) msg = 'Enter your ' + el.dataset.label.toLowerCase() + '.';
      else if (el.type === 'email' && el.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value)) msg = 'Enter a work email in the format name@company.com.';
      el.setAttribute('aria-invalid', msg ? 'true' : 'false'); if (err) err.textContent = msg; return !msg;
    };
    form.querySelectorAll('input[required], input[type=email]').forEach(el => el.addEventListener('blur', () => check(el)));
    form.addEventListener('submit', e => {
      e.preventDefault();
      const bad = [...form.querySelectorAll('input[required], input[type=email]')].filter(el => !check(el));
      if (bad.length) { bad[0].focus(); return; }
      form.hidden = true; done.hidden = false; done.focus();
    });
    document.getElementById('enquiry-again')?.addEventListener('click', () => { form.reset(); form.hidden = false; done.hidden = true; form.querySelector('input')?.focus(); });
  }
})();

/* ---------------- outcome slider ---------------- */
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.slider').forEach(sl => {
    const slides = [...sl.querySelectorAll('.slide')], dots = [...sl.querySelectorAll('.sl-dot')];
    if (slides.length < 2) return;
    let i = 0, timer = null;
    const show = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { s.hidden = k !== i; });
      dots.forEach((d, k) => d.setAttribute('aria-current', String(k === i)));
      const c = sl.querySelector('.sl-count b'); if (c) c.textContent = i + 1;
    };
    const play = () => { if (reduce) return; clearInterval(timer); timer = setInterval(() => show(i + 1), 7000); };
    const stop = () => clearInterval(timer);
    sl.querySelector('.prev')?.addEventListener('click', () => { show(i - 1); play(); });
    sl.querySelector('.next')?.addEventListener('click', () => { show(i + 1); play(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k); play(); }));
    sl.addEventListener('mouseenter', stop); sl.addEventListener('mouseleave', play);
    sl.addEventListener('focusin', stop); sl.addEventListener('focusout', play);
    sl.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { show(i + 1); } if (e.key === 'ArrowLeft') { show(i - 1); } });
    let x0 = null; sl.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    sl.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1)); x0 = null; });
    new IntersectionObserver(es => es.forEach(en => en.isIntersecting ? play() : stop())).observe(sl);
  });
})();
