/* Galería de tecnologías: portada central y tarjetas laterales en profundidad. */
(function () {
  'use strict';
  var items = [{"name": "CSS3", "src": "assets/carrusel/logo-01.webp"}, {"name": "C#", "src": "assets/carrusel/logo-02.webp"}, {"name": "PHP", "src": "assets/carrusel/logo-03.webp"}, {"name": "HTML5", "src": "assets/carrusel/logo-04.webp"}, {"name": "Brave", "src": "assets/carrusel/logo-05.webp"}, {"name": "JavaScript", "src": "assets/carrusel/logo-06.webp"}, {"name": "SQL Server", "src": "assets/carrusel/logo-07.webp"}, {"name": "Open Code", "src": "assets/carrusel/logo-08.webp"}, {"name": "Claude", "src": "assets/carrusel/logo-09.webp"}, {"name": ".NET", "src": "assets/carrusel/logo-10.webp"}, {"name": "Visual Studio", "src": "assets/carrusel/logo-11.webp"}, {"name": "GitHub", "src": "assets/carrusel/logo-12.webp"}, {"name": "ChatGPT", "src": "assets/carrusel/logo-13.webp"}, {"name": "Google Drive", "src": "assets/carrusel/logo-14.webp"}, {"name": "MySQL", "src": "assets/carrusel/logo-15.webp"}, {"name": "Node.js", "src": "assets/carrusel/logo-16.webp"}, {"name": "Microsoft Office", "src": "assets/carrusel/logo-17.webp"}, {"name": "Power BI", "src": "assets/carrusel/logo-18.webp"}, {"name": "PrestaShop", "src": "assets/carrusel/logo-19.webp"}, {"name": "Python", "src": "assets/carrusel/logo-20.webp"}, {"name": "SQLite", "src": "assets/carrusel/logo-21.webp"}, {"name": "VirtualBox", "src": "assets/carrusel/logo-22.webp"}, {"name": "Visual Studio Code", "src": "assets/carrusel/logo-23.webp"}, {"name": "Linux", "src": "assets/carrusel/logo-24.webp"}, {"name": "Windows 11", "src": "assets/carrusel/logo-25.webp"}];
  var stage = document.getElementById('carouselStage');
  if (!stage) return;
  var shell = stage.closest('.carousel-shell');
  var current = 0, timer;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  shell.setAttribute('role', 'region');
  shell.setAttribute('aria-roledescription', 'carrusel');
  shell.setAttribute('aria-label', 'Carrusel de tecnologías');
  shell.tabIndex = 0;
  var cards = items.map(function (item, i) {
    var card = document.createElement('figure');
    card.className = 'carousel-item';
    card.setAttribute('role', 'group');
    card.setAttribute('aria-roledescription', 'diapositiva');
    card.setAttribute('aria-label', (i + 1) + ' de ' + items.length + ': ' + item.name);
    var face = document.createElement('div'); face.className = 'carousel-card';
    var img = document.createElement('img'); img.src = item.src.split('/').map(encodeURIComponent).join('/'); img.alt = 'Logotipo de ' + item.name; img.draggable = false; img.width = 190; img.height = 190; img.loading = i < 3 ? 'eager' : 'lazy'; img.decoding = 'async';
    var label = document.createElement('figcaption'); label.textContent = item.name;
    face.append(img, label); card.append(face); stage.append(card);
    card.addEventListener('click', function () { current = i; render(); restart(); });
    return card;
  });
  var dots = document.createElement('div'); dots.className = 'carousel-dots';
  dots.setAttribute('role', 'group'); dots.setAttribute('aria-label', 'Elegir tecnología');
  var buttons = items.map(function (item, i) {
    var b = document.createElement('button'); b.type = 'button';
    b.setAttribute('aria-label', 'Mostrar ' + item.name);
    b.addEventListener('click', function () { current = i; render(); restart(); });
    dots.append(b); return b;
  });
  shell.after(dots);
  var pause = document.createElement('button'); pause.type = 'button'; pause.className = 'carousel-pause';
  var stopped = reduced.matches;
  pause.textContent = stopped ? 'Reproducir carrusel' : 'Pausar carrusel';
  dots.after(pause);
  function render() {
    cards.forEach(function (card, i) {
      var offset = (i - current + items.length) % items.length;
      if (offset > items.length / 2) offset -= items.length;
      var distance = Math.abs(offset);
      card.style.setProperty('--offset', offset);
      card.style.setProperty('--depth', Math.min(distance, 3));
      card.style.zIndex = 10 - distance;
      card.style.opacity = distance > 2 ? '0' : String(1 - distance * .24);
      card.style.visibility = distance > 2 ? 'hidden' : 'visible';
      card.style.pointerEvents = distance > 2 ? 'none' : 'auto';
      card.classList.toggle('is-active', offset === 0);
      card.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
      buttons[i].setAttribute('aria-pressed', offset === 0 ? 'true' : 'false');
    });
    document.getElementById('carouselIndex').textContent = current + 1;
    document.getElementById('carouselTotal').textContent = items.length;
  }
  function move(direction) { current = (current + direction + items.length) % items.length; render(); }
  function restart() {
    clearInterval(timer);
    if (!stopped && !document.hidden) timer = setInterval(function () { move(1); }, 2000);
  }
  document.getElementById('carouselPrev').addEventListener('click', function () { move(-1); restart(); });
  document.getElementById('carouselNext').addEventListener('click', function () { move(1); restart(); });
  shell.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); move(e.key === 'ArrowLeft' ? -1 : 1); restart(); }
  });
  pause.addEventListener('click', function () { stopped = !stopped; pause.textContent = stopped ? 'Reproducir carrusel' : 'Pausar carrusel'; restart(); });
  document.addEventListener('visibilitychange', restart);
  reduced.addEventListener('change', function (e) { if (e.matches) { stopped = true; pause.textContent = 'Reproducir carrusel'; restart(); } });
  var startX;
  stage.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, {passive:true});
  stage.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - startX; if (Math.abs(dx) > 40) { move(dx < 0 ? 1 : -1); restart(); } }, {passive:true});
  render(); restart();
})();
