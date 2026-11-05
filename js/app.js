/* ============================================================
   HUB 3DS·A — Lógica del portal
   Todo se pinta desde data/modulos.js.
   ============================================================ */
(function () {
  "use strict";

  var HUB = window.HUB || {};
  var MODULOS = (window.MODULOS || []).slice();
  var FLASHCARDS = window.FLASHCARDS || [];
  var STORE = "hub3dsa:v1";
  var MONTHS = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var ICONS = {
    code: '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16M15 4v16"/>',
    python: '<path d="M12 3c-3 0-5 1-5 4v3h5v1H6c-2 0-3 2-3 5s1 5 3 5h2v-4c0-2 1-3 3-3h4c2 0 3-1 3-3V7c0-3-2-4-5-4Z"/><path d="M12 21c3 0 5-1 5-4v-3h-5v-1h6c2 0 3-2 3-5s-1-5-3-5h-2v4c0 2-1 3-3 3h-4c-2 0-3 1-3 3v3c0 3 2 4 5 4Z"/>',
    window: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M7 6.5h.01M10 6.5h.01"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 9h6M9 13h6M9 17h4"/>',
    object: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    plug: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 4 3-4 3M13 15h4"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><path d="M16 4.5a3 3 0 0 1 0 5.8M21 21v-2a4 4 0 0 0-3-3.8"/>'
  };

  var state = {
    q: "",
    teacher: "todos",
    status: "todos",
    tag: null,
    progress: loadJSON(STORE + ":progress", {}),
    best: clamp(parseInt(loadJSON(STORE + ":best", 0), 10) || 0, 0, 100),
    flashIndex: 0
  };

  /* ------------------------------ utilidades ------------------------------ */
  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
  }
  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.code) + "</svg>";
  }
  function teacherOf(m) { return m.docente || (HUB.docentes || []).filter(function (d) { return d.id === m.docenteId; }).map(function (d) { return d.nombre; })[0] || "Docente"; }
  function byId(id) { var target = (window.MODULO_POR_TEMA || {})[id] || id; return MODULOS.filter(function (m) { return m.id === target; })[0] || null; }
  function isDone(id) { return !!state.progress[id]; }
  function doneCount() { return MODULOS.filter(function (m) { return isDone(m.id); }).length; }
  function moduleQuestions() {
    var out = [];
    MODULOS.forEach(function (m) {
      m.quiz.forEach(function (q) { out.push({ p: q.p, opciones: q.opciones, correcta: q.correcta, explica: q.explica, mod: m }); });
    });
    return out;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function toast(msg) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 2600);
  }
  function setHTML(el, html) { if (el) el.innerHTML = html; }

  /* ------------------------------ progreso ------------------------------ */
  function saveProgress() { saveJSON(STORE + ":progress", state.progress); }
  function setDone(id, value) {
    var active = document.activeElement;
    var keepFocus = active && active.matches && active.matches("[data-done]") &&
      active.closest(".card") && active.closest(".card").getAttribute("data-id") === id;
    var current = byId(id);
    if (value) state.progress[id] = new Date().toISOString();
    else delete state.progress[id];
    if (current) (current.temaIds || []).forEach(function (topicId) { if (value) state.progress[topicId] = state.progress[id]; else delete state.progress[topicId]; });
    saveProgress();
    renderCards();
    renderStats();
    renderTimeline();
    renderTeam();
    if (keepFocus) {
      var input = document.querySelector('.card[data-id="' + id + '"] [data-done]');
      if (input) input.focus({ preventScroll: true });
    }
    var m = byId(id);
    if (m) toast(value ? "Marcado como repasado: " + m.titulo : "Desmarcado: " + m.titulo);
  }
  function renderStats() {
    var total = MODULOS.length;
    var done = doneCount();
    var pct = total ? Math.round(done / total * 100) : 0;
    setHTML($("#statMods"), String(total));
    var teachers = {};
    MODULOS.forEach(function (m) { teachers[m.docenteId || m.docente] = true; });
    setHTML($("#statTeachers"), String(Object.keys(teachers).length));
    setHTML($("#statProgress"), pct + "%");
    setHTML($("#statQuiz"), state.best ? state.best + "%" : "—");
    var top = $("#topProgress");
    if (top) top.style.width = pct + "%";
    setHTML($("#globalBest"), state.best ? state.best + "%" : "—");
    renderBadges();
  }

  function renderBadges() {
    var done = doneCount();
    var total = MODULOS.length;
    var badges = [
      { label: "Primer paso", on: done >= 1 },
      { label: "5 módulos", on: done >= 5 },
      { label: "9 módulos", on: total > 0 && done >= total },
      { label: "Año completo", on: total > 0 && done >= total },
      { label: "Quiz perfecto", on: state.best >= 100 }
    ];
    setHTML($("#badges"), badges.map(function (b) {
      return '<div class="badge' + (b.on ? "" : " locked") + '"><span class="ico" aria-hidden="true">' + (b.on ? "✓" : "·") + "</span>" + esc(b.label) + "</div>";
    }).join(""));
  }

  /* ------------------------------ filtros ------------------------------ */
  function teacherCounts() {
    var counts = { todos: MODULOS.length };
    MODULOS.forEach(function (m) {
      var key = m.docenteId || "otro";
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }
  function renderFilters() {
    var counts = teacherCounts();
    var teachers = [{ id: "todos", nombre: "Todos" }].concat((HUB.docentes || []).map(function (d) { return { id: d.id, nombre: d.nombre }; }));
    setHTML($("#teacherFilters"), teachers.map(function (t) {
      return '<button class="chip" type="button" data-teacher="' + esc(t.id) + '" aria-pressed="' + (state.teacher === t.id) + '">' +
        esc(t.nombre) + ' <span class="count">' + (counts[t.id] || 0) + "</span></button>";
    }).join(""));

    var statuses = [
      { id: "todos", nombre: "Todos" },
      { id: "pendientes", nombre: "Pendientes" },
      { id: "repasados", nombre: "Repasados" }
    ];
    setHTML($("#statusFilters"), statuses.map(function (s) {
      return '<button class="chip" type="button" data-status="' + s.id + '" aria-pressed="' + (state.status === s.id) + '">' + s.nombre + "</button>";
    }).join(""));
  }
  function normalizeSearch(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  function matches(m) {
    if (state.teacher !== "todos" && (m.docenteId || "otro") !== state.teacher) return false;
    if (state.status === "repasados" && !isDone(m.id)) return false;
    if (state.status === "pendientes" && isDone(m.id)) return false;
    if (state.tag) {
      var all = (m.tags || []).concat(m.herramientas || []).concat(m.programas || []);
      if (!all.some(function (t) { return String(t).toLowerCase() === state.tag.toLowerCase(); })) return false;
    }
    if (state.q) {
      var hay = [
        m.codigo, m.titulo, m.corto, m.resumen, teacherOf(m), m.periodo, m.tipo, (m.temas || []).map(function (t) { return t.titulo + " " + t.resumen; }).join(" ")
      ].concat(m.tags || []).concat(m.herramientas || []).concat(m.programas || []).concat((m.instrumentos || []).map(function (i) { return i.nombre; }));
      var needle = normalizeSearch(state.q);
      if (!hay.some(function (v) { return normalizeSearch(v).indexOf(needle) !== -1; })) return false;
    }
    return true;
  }
  function filtered() { return MODULOS.filter(matches).sort(function (a, b) { return a.n - b.n; }); }
  function activeFilterText() {
    var parts = [];
    if (state.q) parts.push('búsqueda: “' + state.q + '”');
    if (state.teacher !== "todos") {
      var d = (HUB.docentes || []).filter(function (x) { return x.id === state.teacher; })[0];
      parts.push("docente: " + (d ? d.nombre : state.teacher));
    }
    if (state.status !== "todos") parts.push(state.status);
    if (state.tag) parts.push("tecnología: " + state.tag);
    return parts.length ? "Filtros activos · " + parts.join(" · ") : "Sin filtros · todo el año";
  }

  /* ------------------------------ tarjetas ------------------------------ */
  function cardHTML(m, i) {
    var done = isDone(m.id);
    return '<article class="card' + (done ? " done" : "") + '" data-id="' + esc(m.id) + '" style="animation-delay:' + Math.min(i * 24, 240) + 'ms">' +
      '<div class="card-art">' +
        '<span class="card-icon">' + icon(m.icono) + "</span>" +
        '<span class="card-num" aria-hidden="true">' + esc(m.codigo ? m.codigo.replace("BTVDS ", "") : pad(m.n)) + "</span>" +
        '<span class="card-badge"><i></i>' + esc(teacherOf(m)) + " · " + esc(m.periodo) + "</span>" +
      "</div>" +
      '<div class="card-body"><div class="card-copy" tabindex="0" role="region" aria-label="Contenido del módulo: ' + esc(m.titulo) + '">' +
        '<p class="module-code">' + esc(m.codigo || "") + '</p><h3>' + esc(m.titulo) + "</h3>" +
        "<p>" + esc(m.resumen) + "</p>" +
        '<p class="card-topics"><b>Temas:</b> ' + esc((m.temas || []).map(function (t) { return t.titulo; }).join(' · ') || 'Guía de repaso propuesta') + '</p>' +
        '<div class="card-tags">' + (m.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '</div><div class="card-foot">' +
          '<button class="card-open" type="button" data-open="' + esc(m.id) + '">Ver ficha <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></button>' +
          '<label class="check"><input type="checkbox" data-done="' + esc(m.id) + '"' + (done ? " checked" : "") + '><span>Repasado</span></label>' +
        "</div>" +
      "</div>" +
    "</article>";
  }
  function renderCards() {
    var list = filtered();
    var grid = $("#moduleGrid");
    if (!grid) return;
    grid.innerHTML = list.map(cardHTML).join("");
    setHTML($("#resultCount"), "<b>" + list.length + "</b> de " + MODULOS.length + " módulos");
    setHTML($("#activeFilter"), esc(activeFilterText()));
    var empty = $("#emptyState");
    if (empty) empty.hidden = list.length !== 0;
  }

  /* ------------------------------ ticker ------------------------------ */
  function renderTicker() {
    var one = MODULOS.map(function (m) {
      return '<span class="ticker-item"><i></i>' + esc(m.titulo) + " · " + esc(teacherOf(m)) + "</span>";
    }).join("");
    setHTML($("#tickerTrack"), one + one);
  }

  /* ------------------------------ modal ------------------------------ */
  var lastFocus = null;
  var currentModuleId = null;

  function evidenceHTML(e) {
    if (e.img) {
      return '<div class="ev-card"><img src="' + esc(e.img) + '" alt="Evidencia: ' + esc(e.nombre) + '" loading="lazy"><div class="ev-body"><b>' + esc(e.nombre) + "</b><p>" + esc(e.detalle || "") + "</p></div></div>";
    }
    return (e.url ? '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">Abrir evidencia ↗</a>' : '<p class="evidence-pending">Pendiente de adjuntar archivo o enlace verificable.</p>') + '<div class="ev-file"><span class="ico">FILE</span><div><b>' + esc(e.nombre) + "</b><p>" + esc(e.detalle || "") + "</p></div></div>";
  }

  function topicHTML(t) {
    return '<details class="topic-detail" id="tema-' + esc(t.id) + '" data-topic="' + esc(t.id) + '"><summary>' + esc(t.titulo) + '</summary>' +
      '<p>' + esc(t.resumen) + '</p><p><b>Repaso anterior:</b> ' + (state.progress[t.id] ? 'marcado como repasado' : 'sin marcar') + ' · mejor quiz del tema: ' + esc(loadJSON(STORE + ':quiz:' + t.id, 0)) + '%</p>' +
      '<h4>Aprendizajes</h4><ul>' + (t.aprendizajes || []).map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>' +
      '<h4>Instrumentos</h4><ul>' + (t.instrumentos || []).map(function (x) { return '<li><b>' + esc(x.nombre) + '</b> (' + esc(x.tipo) + '): ' + esc(x.detalle) + '</li>'; }).join('') + '</ul>' +
      '<h4>Programas y herramientas</h4><p>' + esc((t.programas || []).concat(t.herramientas || []).join(' · ')) + '</p>' +
      '<h4>Recursos</h4><div class="links">' + (t.recursos || []).map(function (r) { return '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.nombre) + ' ↗</a>'; }).join('') + '</div>' +
      '<h4>Evidencias</h4><div class="evidence">' + (t.evidencias || []).map(evidenceHTML).join('') + '</div>' +
      '<p>Sus ' + (t.quiz || []).length + ' preguntas con explicación están incluidas en la pestaña Quiz de este módulo.</p></details>';
  }

  function migrateCurriculumProgress() {
    if (loadJSON(STORE + ':curriculo-v2', false)) return;
    MODULOS.forEach(function (m) {
      if (m.temaIds.length && m.temaIds.every(function (id) { return !!state.progress[id]; }) && !state.progress[m.id]) state.progress[m.id] = new Date().toISOString();
      // Las marcas y los puntajes anteriores permanecen en sus claves originales.
      // Un récord nuevo se gana con el quiz del módulo completo.
    });
    saveProgress(); saveJSON(STORE + ':curriculo-v2', true);
  }

  function modalHTML(m) {
    var done = isDone(m.id);
    var resumen =
      '<p class="curriculum-note">' + (m.propuesta ? 'Guía de repaso propuesta: faltan los materiales originales de clase.' : 'Los temas se agrupan por su relación con este módulo. Conservan los materiales del portal anterior; el equipo debe validar la correspondencia con sus guías.') + '</p>' +
      '<div class="ficha-grid">' +
        '<div>' +
          '<div class="ficha-block"><h3>Lo que aprendí</h3><ul>' + (m.aprendizajes || []).map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul></div>" +
          '<div class="ficha-block"><h3>Palabras clave</h3><div class="pills">' + (m.tags || []).map(function (t) { return '<span class="pill">' + esc(t) + "</span>"; }).join("") + "</div></div>" +
          '<div class="ficha-block"><h3>Evidencia principal</h3><div class="evidence">' + (m.evidencias || []).slice(0, 1).map(evidenceHTML).join("") + "</div></div>" +
        "</div>" +
        '<div>' +
          '<div class="ficha-block"><h3>En números</h3><ul>' +
            "<li><b>" + (m.instrumentos || []).length + "</b> instrumentos</li>" +
            "<li><b>" + (m.programas || []).length + "</b> programas</li>" +
            "<li><b>" + (m.herramientas || []).length + "</b> herramientas</li>" +
            "<li><b>" + (m.recursos || []).length + "</b> recursos</li>" +
            "<li><b>" + (m.quiz || []).length + "</b> preguntas de quiz</li>" +
          "</ul></div>" +
          '<div class="ficha-block"><h3>Cómo se usó</h3><p style="color:var(--muted);font-size:14px;margin:0">' + esc(m.corto || "") + "</p></div>" +
        "</div>" +
      "</div>";

    resumen += '<section class="module-topics"><h3>Temas y proyectos de repaso</h3>' +
      ((m.temas || []).length ? m.temas.map(topicHTML).join('') : '<p>La guía propuesta está en el resumen, la ficha completa y el quiz. Todavía no se ha adjuntado material original de este módulo.</p>') + '</section>';

    var ficha =
      '<div class="ficha-grid">' +
        '<div>' +
          '<div class="ficha-block"><h3>Instrumentos</h3><div class="inst">' + (m.instrumentos || []).map(function (i) {
            return '<div class="inst-item"><span>' + esc(i.tipo || "Instrumento") + "</span><b>" + esc(i.nombre) + "</b><p>" + esc(i.detalle || "") + "</p></div>";
          }).join("") + "</div></div>" +
          '<div class="ficha-block"><h3>Recursos para seguir</h3><div class="links">' + (m.recursos || []).map(function (r) {
            return '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.nombre) + "<span>↗</span></a>";
          }).join("") + "</div></div>" +
        "</div>" +
        '<div>' +
          '<div class="ficha-block"><h3>Programas</h3><div class="pills">' + (m.programas || []).map(function (p) { return '<span class="pill">' + esc(p) + "</span>"; }).join("") + "</div></div>" +
          '<div class="ficha-block"><h3>Herramientas</h3><div class="pills">' + (m.herramientas || []).map(function (h) { return '<span class="pill">' + esc(h) + "</span>"; }).join("") + "</div></div>" +
          '<div class="ficha-block"><h3>Evidencias</h3><div class="evidence">' + ((m.evidencias || []).length ? m.evidencias.map(evidenceHTML).join("") : '<p>Pendiente de adjuntar evidencia real de clase.</p>') + "</div></div>" +
        "</div>" +
      "</div>";

    var quiz =
      '<div class="quiz-list modal-quiz" data-quiz="' + esc(m.id) + '">' +
        (m.quiz || []).map(function (q, qi) {
          return '<div class="q" data-q="' + qi + '"><p>' + (qi + 1) + ". " + esc(q.p) + "</p><div class=\"q-opts\">" +
            q.opciones.map(function (o, oi) {
              return '<button class="q-opt" type="button" data-o="' + oi + '"><span class="letter">' + String.fromCharCode(65 + oi) + "</span><span>" + esc(o) + "</span></button>";
            }).join("") +
          '</div><p class="q-feedback" role="status"></p></div>';
        }).join("") +
      "</div>" +
      '<p class="module-best" role="status">Mejor puntaje de esta ficha: ' + loadJSON(STORE + ":quiz:" + m.id, 0) + '%</p>' +
      '<button class="btn btn-ghost btn-sm" type="button" id="moduleQuizRestart">Reintentar quiz</button>' +
      '<div class="quiz-summary" role="status" data-quiz-result="' + esc(m.id) + '"></div>';

    return '<div class="modal-hero">' +
        '<div class="modal-kicker"><span>' + esc(m.codigo || ('Módulo ' + pad(m.n))) + '</span><span class="pill">' + esc(teacherOf(m)) + '</span><span>' + esc(m.periodo) + '</span><span class="pill">' + esc(m.tipo) + '</span></div>' +
        '<h2 id="modalTitle">' + esc(m.titulo) + "</h2>" +
        "<p>" + esc(m.resumen) + "</p>" +
        '<div class="modal-actions">' +
          '<button class="btn btn-solid btn-sm" id="modalDone" type="button">' + (done ? "✓ Repasado" : "Marcar como repasado") + "</button>" +
          '<button class="btn btn-ghost btn-sm" id="modalCopy" type="button">Copiar enlace de la ficha</button>' +
          '<span class="quiz-score">' + (m.quiz || []).length + " preguntas · " + (m.evidencias || []).filter(function (e) { return e.img || e.url; }).length + " evidencias adjuntas</span>" +
        "</div>" +
      "</div>" +
      '<div class="tabs" role="tablist" aria-label="Contenido de la ficha">' +
        '<button class="tab" type="button" role="tab" aria-selected="true" id="tab-resumen" aria-controls="panel-resumen" tabindex="0" data-tab="resumen">Resumen</button>' +
        '<button class="tab" type="button" role="tab" aria-selected="false" id="tab-ficha" aria-controls="panel-ficha" tabindex="-1" data-tab="ficha">Ficha completa</button>' +
        '<button class="tab" type="button" role="tab" aria-selected="false" id="tab-quiz" aria-controls="panel-quiz" tabindex="-1" data-tab="quiz">Quiz</button>' +
      "</div>" +
      '<div class="tab-panel" role="tabpanel" id="panel-resumen" aria-labelledby="tab-resumen" data-panel="resumen">' + resumen + "</div>" +
      '<div class="tab-panel" role="tabpanel" id="panel-ficha" aria-labelledby="tab-ficha" data-panel="ficha" hidden>' + ficha + "</div>" +
      '<div class="tab-panel" role="tabpanel" id="panel-quiz" aria-labelledby="tab-quiz" data-panel="quiz" hidden>' + quiz + "</div>";
  }

  function openModal(id) {
    var m = byId(id);
    if (!m) return;
    currentModuleId = m.id;
    lastFocus = document.activeElement;
    try { history.replaceState(null, "", "#modulo/" + m.id); } catch (e) { /* file:// */ }
    setHTML($("#modalBody"), modalHTML(m));
    var modal = $("#modal");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    var close = $("#modalClose");
    if (close) close.focus();
    // Reinicia el estado del quiz de la ficha
    var quizRoot = $('[data-quiz="' + m.id + '"]');
    if (quizRoot) quizRoot._answered = 0;
    var topic = document.getElementById('tema-' + id);
    if (topic) { topic.open = true; topic.scrollIntoView({ block: 'start' }); }
  }
  function closeModal() {
    var modal = $("#modal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    setHTML($("#modalBody"), "");
    currentModuleId = null;
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* file:// */ }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function switchTab(name) {
    $$(".tab", $("#modalBody")).forEach(function (b) {
      var on = b.getAttribute("data-tab") === name;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });
    $$(".tab-panel", $("#modalBody")).forEach(function (p) {
      p.hidden = p.getAttribute("data-panel") !== name;
    });
  }

  function answerQuestion(root, module, qIndex, optionIndex, onComplete) {
    var q = root.querySelector('.q[data-q="' + qIndex + '"]');
    if (!q || q.getAttribute("data-answered")) return;
    var data = module.quiz[qIndex];
    q.setAttribute("data-answered", "1");
    var opts = $$(".q-opt", q);
    opts.forEach(function (b, i) {
      b.disabled = true;
      if (i === data.correcta) b.classList.add("correct");
      if (i === optionIndex && i !== data.correcta) b.classList.add("wrong");
    });
    var fb = $(".q-feedback", q);
    var ok = optionIndex === data.correcta;
    if (fb) {
      fb.classList.add("show");
      fb.innerHTML = ok
        ? "<b>Correcto.</b> " + esc(data.explica)
        : "<b>Casi.</b> La respuesta correcta es “" + esc(data.opciones[data.correcta]) + "”. " + esc(data.explica);
    }
    root._answered = (root._answered || 0) + 1;
    root._score = (root._score || 0) + (ok ? 1 : 0);
    if (onComplete) onComplete(root._answered, root._score, module.quiz.length);
  }

  /* ------------------------------ quiz general ------------------------------ */
  var globalState = { questions: [], answered: 0, score: 0 };

  function renderGlobalQuiz() {
    globalState.questions = shuffle(moduleQuestions()).slice(0, 5);
    globalState.answered = 0;
    globalState.score = 0;
    var root = $("#globalQuiz");
    if (!root) return;
    root._answered = 0;
    root._score = 0;
    root.innerHTML = globalState.questions.map(function (q, qi) {
      return '<div class="q" data-q="' + qi + '"><p>' + (qi + 1) + ". " + esc(q.p) + ' <span class="tag">' + esc(q.mod.titulo) + "</span></p><div class=\"q-opts\">" +
        q.opciones.map(function (o, oi) {
          return '<button class="q-opt" type="button" data-o="' + oi + '"><span class="letter">' + String.fromCharCode(65 + oi) + "</span><span>" + esc(o) + "</span></button>";
        }).join("") +
      '</div><p class="q-feedback" role="status"></p></div>';
    }).join("");
    setHTML($("#gqProgress"), "0 de " + globalState.questions.length + " respondidas");
    var result = $("#gqResult");
    if (result) { result.classList.remove("show"); result.innerHTML = ""; }
  }

  function globalAnswered(qIndex, optionIndex) {
    var root = $("#globalQuiz");
    var q = root.querySelector('.q[data-q="' + qIndex + '"]');
    if (!q || q.getAttribute("data-answered")) return;
    var data = globalState.questions[qIndex];
    q.setAttribute("data-answered", "1");
    var opts = $$(".q-opt", q);
    opts.forEach(function (b, i) {
      b.disabled = true;
      if (i === data.correcta) b.classList.add("correct");
      if (i === optionIndex && i !== data.correcta) b.classList.add("wrong");
    });
    var ok = optionIndex === data.correcta;
    var fb = $(".q-feedback", q);
    if (fb) {
      fb.classList.add("show");
      fb.innerHTML = ok
        ? "<b>Correcto.</b> " + esc(data.explica)
        : "<b>Casi.</b> La respuesta correcta es “" + esc(data.opciones[data.correcta]) + "”. " + esc(data.explica);
    }
    globalState.answered++;
    globalState.score += ok ? 1 : 0;
    setHTML($("#gqProgress"), globalState.answered + " de " + globalState.questions.length + " respondidas");
    if (globalState.answered === globalState.questions.length) {
      var pct = Math.round(globalState.score / globalState.questions.length * 100);
      if (pct > state.best) {
        state.best = pct;
        saveJSON(STORE + ":best", pct);
      }
      renderStats();
      var result = $("#gqResult");
      if (result) {
        result.classList.add("show");
        result.innerHTML = "<b>" + globalState.score + " de " + globalState.questions.length + "</b> · " + pct + "%. " +
          (pct === 100 ? "Perfecto: puedes explicar estos temas." : pct >= 60 ? "Buen repaso. Vuelve a las fichas de lo que falló." : "Toca repasar: abre las fichas y vuelve a intentarlo.");
      }
    }
  }

  /* ------------------------------ flashcards ------------------------------ */
  function renderFlash() {
    var card = $("#flashcard");
    if (!card || !FLASHCARDS.length) return;
    var f = FLASHCARDS[state.flashIndex % FLASHCARDS.length];
    setHTML($("#flashFront"), f.frente);
    setHTML($("#flashBack"), f.reverso);
    setHTML($("#flashCount"), (state.flashIndex + 1) + " / " + FLASHCARDS.length);
    card.classList.remove("flipped");
  }
  function flashMove(delta) {
    state.flashIndex = (state.flashIndex + delta + FLASHCARDS.length) % FLASHCARDS.length;
    renderFlash();
  }

  /* ------------------------------ nube ------------------------------ */
  function renderCloud() {
    var counts = {};
    MODULOS.forEach(function (m) {
      var seen = {};
      (m.tags || []).forEach(function (t) {
        if (seen[t]) return;
        seen[t] = true;
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    var entries = Object.keys(counts).map(function (t) { return [t, counts[t]]; }).sort(function (a, b) { return b[1] - a[1] || a[0].localeCompare(b[0]); });
    var max = entries.reduce(function (m, e) { return Math.max(m, e[1]); }, 1);
    setHTML($("#cloud"), entries.map(function (e) {
      var size = Math.max(1, Math.ceil(e[1] / max * 5));
      return '<button class="s' + size + '" type="button" data-tag="' + esc(e[0]) + '">' + esc(e[0]) + '<span class="count">' + e[1] + "</span></button>";
    }).join(""));
  }

  /* ------------------------------ timeline ------------------------------ */
  function treeMarkup(items, label) {
    return '<ol class="route-tree" aria-label="' + esc(label) + '">' + items.map(function (item, i) {
      return '<li class="tree-row" style="--branch-delay:' + ((items.length - i - 1) * 90) + 'ms">' +
        '<svg class="tree-branch" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">' +
        '<path pathLength="1" d="M0 59 C0 24 27 35 53 17 C68 7 79 3 100 3"/></svg>' +
        '<div class="tree-leaf">' + item + '</div></li>';
    }).join('') + '</ol>';
  }

  function renderTimeline() {
    var byCode = MODULOS.slice().sort(function (a, b) { return a.n - b.n; });
    var modules = byCode.map(function (m) {
      return '<button class="tree-node' + (isDone(m.id) ? ' done' : '') + '" type="button" data-id="' + esc(m.id) +
        '" aria-label="' + esc(m.codigo + ': ' + m.titulo) + '" title="' + esc(m.titulo) + '">' +
        icon(m.icono) + '<span>' + esc(m.codigo.replace('BTVDS ', '')) + '</span></button>';
    });
    setHTML($("#timeline"), treeMarkup(modules, 'Módulos oficiales'));
  }

  /* ------------------------------ equipo ------------------------------ */
  function renderTeam() {
    var team = (HUB.equipo || []).slice();
    var html = team.map(function (p) {
      return '<div class="team-row"><b>' + esc(p.nombre) + '</b><span class="rol">' + esc(p.rol || 'Rol por confirmar') + '</span></div>';
    }).join("");
    for (var i = team.length; i < 4; i++) {
      html += '<div class="team-row pending"><div><b>Integrante ' + (i + 1) + '</b><small>Por invitar al repositorio</small></div><span class="rol">Rol por definir</span></div>';
    }
    setHTML($("#teamList"), html);
    var repo = $("#repoLink");
    var pages = $("#pagesLink");
    if (repo) {
      var r = HUB.enlaces && HUB.enlaces.repo;
      if (r && r !== "#") { repo.href = r; repo.textContent = "Repositorio · abrir"; }
      else { repo.href = "#"; repo.textContent = "Repositorio · pendiente"; }
    }
    if (pages) {
      var p = HUB.enlaces && HUB.enlaces.pages;
      if (p && p !== "#") { pages.href = p; pages.textContent = "GitHub Pages · abrir"; }
      else { pages.href = "#"; pages.textContent = "GitHub Pages · pendiente"; }
    }
  }

  /* ------------------------------ tema ------------------------------ */
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(STORE + ":theme", theme); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f2f2ef" : "#050505");
    var iconEl = $("#themeIcon");
    if (iconEl) {
      iconEl.innerHTML = theme === "light"
        ? '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"/>'
        : '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
    }
  }
  function toggleTheme() {
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
  }

  /* ------------------------------ eventos ------------------------------ */
  function bind() {
    var menu = $("#menuToggle"), nav = $("#mainNav");
    function closeMenu() { nav.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-label", "Abrir menú"); }
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { closeMenu(); menu.focus(); } });
    $("#modalBody").addEventListener("keydown", function (e) {
      var tab = e.target.closest("[role=tab]");
      if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      var tabs = $$("[role=tab]", $("#modalBody")), i = tabs.indexOf(tab);
      i = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      switchTab(tabs[i].getAttribute("data-tab")); tabs[i].focus();
    });
    var video = $(".hero-video"), motion = $("#motionToggle");
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    var autoVideo = !reduced.matches && window.innerWidth > 600 && !(navigator.connection && navigator.connection.saveData);
    function playVideo() { var source = $("source", video); if (!source.getAttribute("src")) { source.src = source.dataset.src; video.load(); } video.play().catch(function () { toast("Usa el botón para reproducir el fondo cuando tu navegador lo permita."); }); }
    video.addEventListener("play", function () { $("#videoToggle").textContent = "Pausar video de fondo"; });
    video.addEventListener("pause", function () { $("#videoToggle").textContent = "Reproducir video de fondo"; });
    if (autoVideo) playVideo();
    $("#videoToggle").addEventListener("click", function () {
      if (video.paused) { video.classList.add("user-playback"); playVideo(); this.textContent = "Pausar video de fondo"; }
      else { video.pause(); this.textContent = "Reproducir video de fondo"; }
    });
    function pauseMotion(paused) {
      document.body.classList.toggle("motion-paused", paused);
      motion.setAttribute("aria-pressed", String(paused)); motion.textContent = paused ? "Reanudar animaciones" : "Pausar animaciones";
      if (paused) video.pause(); else if (autoVideo) video.play().catch(function () {});
    }
    motion.addEventListener("click", function () { pauseMotion(!document.body.classList.contains("motion-paused")); });
    reduced.addEventListener("change", function (e) { if (e.matches) pauseMotion(true); });

    // Filtros de docente y estado (delegación)
    $("#teacherFilters").addEventListener("click", function (e) {
      var b = e.target.closest("[data-teacher]");
      if (!b) return;
      state.teacher = b.getAttribute("data-teacher");
      renderFilters(); renderCards();
    });
    $("#statusFilters").addEventListener("click", function (e) {
      var b = e.target.closest("[data-status]");
      if (!b) return;
      state.status = b.getAttribute("data-status");
      renderFilters(); renderCards();
    });
    $("#searchInput").addEventListener("input", function (e) {
      state.q = e.target.value.trim();
      renderCards();
    });
    $("#clearFilters").addEventListener("click", function () {
      state.q = ""; state.teacher = "todos"; state.status = "todos"; state.tag = null;
      $("#searchInput").value = "";
      renderFilters(); renderCards();
      toast("Filtros limpios");
    });

    // Tarjetas
    $("#moduleGrid").addEventListener("click", function (e) {
      if (e.target.closest("label.check") || e.target.closest("input")) return;
      var card = e.target.closest("[data-id]");
      if (card) openModal(card.getAttribute("data-id"));
    });
    $("#moduleGrid").addEventListener("change", function (e) {
      var input = e.target.closest("[data-done]");
      if (!input) return;
      setDone(input.getAttribute("data-done"), input.checked);
    });

    // Timeline
    $("#timeline").addEventListener("click", function (e) {
      var b = e.target.closest("[data-id]");
      if (b) openModal(b.getAttribute("data-id"));
    });

    // Nube
    $("#cloud").addEventListener("click", function (e) {
      var b = e.target.closest("[data-tag]");
      if (!b) return;
      state.tag = b.getAttribute("data-tag");
      state.q = ""; state.teacher = "todos"; state.status = "todos";
      $("#searchInput").value = "";
      renderFilters(); renderCards();
      document.getElementById("modulos").scrollIntoView({ behavior: "smooth", block: "start" });
      toast("Filtrando por: " + state.tag);
    });

    // Botones del hero
    $("#randomBtn").addEventListener("click", function () {
      var m = MODULOS[Math.floor(Math.random() * MODULOS.length)];
      if (m) openModal(m.id);
    });
    $("#searchToggle").addEventListener("click", function () {
      document.getElementById("modulos").scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(function () { $("#searchInput").focus(); }, 350);
    });
    $("#themeToggle").addEventListener("click", toggleTheme);

    // Modal
    $("#modalClose").addEventListener("click", closeModal);
    $("#modal").addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) closeModal();
      var tab = e.target.closest("[data-tab]");
      if (tab) switchTab(tab.getAttribute("data-tab"));
      var close = e.target.closest("#modalClose");
      if (close) closeModal();
    });
    $("#modalBody").addEventListener("click", function (e) {
      var tab = e.target.closest("[data-tab]");
      if (tab) { switchTab(tab.getAttribute("data-tab")); return; }
      if (e.target.closest("#moduleQuizRestart")) {
        var module = byId(currentModuleId);
        if (module) { setHTML($("#modalBody"), modalHTML(module)); switchTab("quiz"); $("#moduleQuizRestart").focus(); }
        return;
      }
      var doneBtn = e.target.closest("#modalDone");
      if (doneBtn) {
        if (currentModuleId) {
          setDone(currentModuleId, !isDone(currentModuleId));
          doneBtn.textContent = isDone(currentModuleId) ? "✓ Repasado" : "Marcar como repasado";
        }
        return;
      }
      var copyBtn = e.target.closest("#modalCopy");
      if (copyBtn) {
        var url = location.href.split("#")[0] + (currentModuleId ? "#modulo/" + currentModuleId : "");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(function () { toast("Enlace copiado"); }, function () { toast(url); });
        } else { toast(url); }
        return;
      }
      var opt = e.target.closest(".q-opt");
      if (opt) {
        var root = opt.closest("[data-quiz]");
        if (!root) return;
        var m = byId(root.getAttribute("data-quiz"));
        var qEl = opt.closest(".q");
        if (!m || !qEl) return;
        answerQuestion(root, m, parseInt(qEl.getAttribute("data-q"), 10), parseInt(opt.getAttribute("data-o"), 10), function (answered, score, total) {
          if (answered === total) {
            var pct = Math.round(score / total * 100);
            var bestKey = STORE + ":quiz:" + m.id;
            var prev = parseInt(loadJSON(bestKey, 0), 10) || 0;
            if (pct > prev) saveJSON(bestKey, pct);
            $(".module-best", $("#modalBody")).textContent = "Mejor puntaje de esta ficha: " + Math.max(prev, pct) + "%";
            if (pct > state.best) { state.best = pct; saveJSON(STORE + ":best", pct); renderStats(); }
            var box = document.querySelector('[data-quiz-result="' + m.id + '"]');
            if (box) {
              box.classList.add("show");
              box.innerHTML = "<b>" + score + " de " + total + "</b> · " + pct + "%. " + (pct === 100 ? "Dominas esta ficha." : "Vuelve a leer el resumen y reintenta.");
            }
          }
        });
      }
    });

    // Quiz general
    $("#globalQuiz").addEventListener("click", function (e) {
      var opt = e.target.closest(".q-opt");
      if (!opt) return;
      var qEl = opt.closest(".q");
      if (!qEl) return;
      globalAnswered(parseInt(qEl.getAttribute("data-q"), 10), parseInt(opt.getAttribute("data-o"), 10));
    });
    $("#gqRestart").addEventListener("click", renderGlobalQuiz);

    // Flashcards
    $("#flashFlip").addEventListener("click", function () { $("#flashcard").classList.toggle("flipped"); });
    $("#flashcard").addEventListener("click", function () { $("#flashcard").classList.toggle("flipped"); });
    $("#flashPrev").addEventListener("click", function () { flashMove(-1); });
    $("#flashNext").addEventListener("click", function () { flashMove(1); });

    // Enlaces pendientes
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href="#"]');
      if (a) { e.preventDefault(); toast("Todavía no está publicado. Se completa al crear el repositorio."); }
    });

    // Teclado
    document.addEventListener("keydown", function (e) {
      var tag = (document.activeElement && document.activeElement.tagName || "").toLowerCase();
      var typing = tag === "input" || tag === "textarea" || tag === "select";
      if (e.key === "/" && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        document.getElementById("modulos").scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(function () { $("#searchInput").focus(); }, 300);
      }
      if (e.key === "Escape") {
        if (!$("#modal").hidden) closeModal();
        else if (state.q) { state.q = ""; $("#searchInput").value = ""; renderCards(); }
      }
      if (e.key === "Tab" && !$("#modal").hidden) {
        var focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', $("#modal")).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
        if (!focusables.length) return;
        var first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Hash directo a una ficha
    if (location.hash.indexOf("#modulo/") === 0) {
      var hashId = location.hash.replace("#modulo/", "");
      if (byId(hashId)) setTimeout(function () { openModal(hashId); }, 250);
    }
    window.addEventListener("hashchange", function () {
      if (location.hash.indexOf("#modulo/") === 0) {
        var id = location.hash.replace("#modulo/", "");
        if (byId(id)) openModal(id);
      }
    });
  }

  /* ------------------------------ arranque ------------------------------ */
  function init() {
    if (!MODULOS.length) {
      toast("No se cargaron los módulos. Revisa data/modulos.js");
      return;
    }
    migrateCurriculumProgress();
    var theme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(theme);
    renderStats();
    renderTicker();
    renderFilters();
    renderCards();
    renderTimeline();
    renderGlobalQuiz();
    renderFlash();
    renderCloud();
    renderTeam();
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('section-visible'); observer.unobserve(entry.target); } });
      }, { threshold: 0.05 });
      $$('.section, .carousel-section').forEach(function (section) { section.classList.add('section-enter'); observer.observe(section); });
    }
    bind();

    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("sw.js").catch(function () { /* sin PWA si falla */ });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
