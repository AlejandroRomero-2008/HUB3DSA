/* Galería de tecnologías: portada central y tarjetas laterales en profundidad. */
(function () {
  'use strict';
  var items = [{"name": "CSS3", "src": "imagenrecuerdo/Emblema 3D cromado en forma de escudo.png"}, {"name": "C#", "src": "imagenrecuerdo/Emblema C# Metálico en 3D.png"}, {"name": "PHP", "src": "imagenrecuerdo/Emblema cromado brillante con logotipo php.png"}, {"name": "HTML5", "src": "imagenrecuerdo/Emblema de escudo cromado con S geométrica.png"}, {"name": "Brave", "src": "imagenrecuerdo/Emblema de león cromado en 3D.png"}, {"name": "JavaScript", "src": "imagenrecuerdo/Emblema JS de Cromo Metálico en 3D.png"}, {"name": "SQL Server", "src": "imagenrecuerdo/Emblema metálico de alas entrelazadas.png"}, {"name": "Open Code", "src": "imagenrecuerdo/Emblema metálico rectangular en relieve.png"}, {"name": "Claude", "src": "imagenrecuerdo/Estrella cromada en relieve.png"}, {"name": ".NET", "src": "imagenrecuerdo/Logotipo .NET cromado en 3D.png"}, {"name": "Visual Studio", "src": "imagenrecuerdo/Logotipo de cinta infinita en escala de grises.png"}, {"name": "GitHub", "src": "imagenrecuerdo/Logotipo GitHub metálico en 3D.png"}, {"name": "ChatGPT", "src": "imagenrecuerdo/Logotipo metálico de Chatgpt en 3D.png"}, {"name": "Google Drive", "src": "imagenrecuerdo/Logotipo metálico de Google Drive.png"}, {"name": "MySQL", "src": "imagenrecuerdo/Logotipo MySQL cromado en 3D.png"}, {"name": "Node.js", "src": "imagenrecuerdo/Logotipo Node.js Metálico en 3D.png"}, {"name": "Microsoft Office", "src": "imagenrecuerdo/Logotipo Office metálico en 3D.png"}, {"name": "Power BI", "src": "imagenrecuerdo/Logotipo Power BI cromado transparente.png"}, {"name": "PrestaShop", "src": "imagenrecuerdo/Logotipo PrestaShop metálico en grisense.png"}, {"name": "Python", "src": "imagenrecuerdo/Logotipo Python cromado dorado y gris.png"}, {"name": "SQLite", "src": "imagenrecuerdo/Logotipo SQLite en cromo metálico.png"}, {"name": "VirtualBox", "src": "imagenrecuerdo/Logotipo VirtualBox metálico en 3D.png"}, {"name": "Visual Studio Code", "src": "imagenrecuerdo/Logotipo VS Code cromado en 3D.png"}, {"name": "Linux", "src": "imagenrecuerdo/Pingüino Tux cromado sobre fondo transparente.png"}, {"name": "Windows 11", "src": "imagenrecuerdo/Windows 11.png"}];
  var stage = document.getElementById('carouselStage');
  if (!stage) return;
  var shell = stage.closest('.carousel-shell');
  var current = 0, timer;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  shell.setAttribute('role', 'region');
  shell.setAttribute('aria-roledescription', 'carrusel');
  shell.setAttribute('aria-label', 'Programas y lenguajes del año');
  shell.tabIndex = 0;
  var cards = items.map(function (item, i) {
    var card = document.createElement('figure');
    card.className = 'carousel-item';
    card.setAttribute('role', 'group');
    card.setAttribute('aria-roledescription', 'diapositiva');
    card.setAttribute('aria-label', (i + 1) + ' de ' + items.length + ': ' + item.name);
    var face = document.createElement('div'); face.className = 'carousel-card';
    var img = document.createElement('img'); img.src = item.src.split('/').map(encodeURIComponent).join('/'); img.alt = 'Logotipo de ' + item.name; img.draggable = false;
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
  var stopped = false;
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
  var startX;
  stage.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, {passive:true});
  stage.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - startX; if (Math.abs(dx) > 40) { move(dx < 0 ? 1 : -1); restart(); } }, {passive:true});
  render(); restart();
})();
