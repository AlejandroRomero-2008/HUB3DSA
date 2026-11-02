# HUB 3DS·A · Repaso 2026

Portal educativo estático para repasar los módulos del **3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A»** del Instituto Nacional Cantón Lourdes (INDEL). Reúne el año 2026 de los profesores **Javier Arturo García Mineros**, **Arcides Canales** y **Julio**.

> «La programación no se trata de lo que sabes, sino de lo que puedes descubrir».

## Estado

- Versión de trabajo: **v1.0 local** (lista para publicar).
- Repositorio: https://github.com/AlejandroRomero-2008/HUB3DSA
- GitHub Pages: _pendiente de activar_.
- Autor de la base: **Josué Alejandro Romero Hernández** · [@AlejandroRomero-2008](https://github.com/AlejandroRomero-2008).

## Enlaces

- Repositorio: [AlejandroRomero-2008/HUB3DSA](https://github.com/AlejandroRomero-2008/HUB3DSA)
- GitHub Pages: `https://TU-USUARIO.github.io/hub-3dsa/` _(actualizar)_

## Qué incluye

- **17 módulos** con ficha completa: resumen, 3 o más aprendizajes, mínimo 2 instrumentos, 2 programas, 2 herramientas, 3 recursos verificados, 1 o más evidencias y quiz de 3 preguntas.
- **Buscador y filtros** por docente, estado del repaso y tecnología.
- **Progreso del repaso** guardado en `localStorage`.
- **Quiz por módulo** y **quiz general** de 5 preguntas con retroalimentación inmediata.
- **Modo claro y oscuro** con paleta blanco / negro / gris translúcido.
- **Fondo de video monocromático** en la portada, con capa negra translúcida y respeto a `prefers-reduced-motion`.
- **Línea de tiempo** del año, **flashcards**, **nube de tecnologías** y **logros** de avance.
- **PWA instalable** (manifest + service worker).
- Diseño responsive, navegación por teclado (`/` para buscar, `Esc` para cerrar) y textos alternativos en las imágenes.

## QA rápido · 2 de noviembre de 2026

- 17/17 fichas cumplen los mínimos: aprendizajes, instrumentos, programas, herramientas, recursos, evidencias y quiz.
- 51 recursos y 51 preguntas en total; 48 URLs comprobadas y 6 enlaces corregidos.
- MySQL bloquea los chequeos automáticos con 403, pero los 3 enlaces de MySQL se abrieron correctamente en el navegador.
- Lighthouse: **100** accesibilidad, **100** buenas prácticas y **100** SEO.
- Probado en escritorio (1440 px), portátil (1200 px) y celular (390 px): modal, pestañas, quiz, filtros, progreso, tema claro/oscuro y flashcards.

## Módulos del mapa

| # | Módulo | Docente |
|---|--------|---------|
| 01 | Desarrollo Web I: HTML, CSS y JavaScript | Javier Mineros |
| 02 | Desarrollo Web II: PHP y patrón MVC | Javier Mineros |
| 03 | Bases de Datos con MySQL | Javier Mineros |
| 04 | Bases de Datos con SQL Server | Javier Mineros |
| 05 | Microsoft Access y migración de datos | Javier Mineros |
| 06 | Programación con Python | Javier Mineros |
| 07 | Aplicaciones de Escritorio con C#: WinForms y WPF | Javier Mineros |
| 08 | Aplicaciones Multiplataforma con Avalonia | Javier Mineros |
| 09 | Ingeniería de Requerimientos y Análisis de Sistemas | Javier Mineros |
| 10 | Programación Orientada a Objetos con C# | Arcides Canales |
| 11 | Acceso a Datos con C# y ADO.NET | Arcides Canales |
| 12 | Desarrollo Web con ASP.NET | Arcides Canales |
| 13 | CRUD y Bases de Datos: SportsPlay | Arcides Canales |
| 14 | Desarrollo Móvil con .NET MAUI | Arcides Canales |
| 15 | Entorno Linux para Desarrollo | Arcides Canales |
| 16 | Proyecto de Tesis: Agencia Digital Ositos Studios | Julio |
| 17 | Exposición: Cooperativas | Julio |

## Estructura

```text
HUB-3DSA/
├── index.html              # Portada, mapa, ruta, quiz, flashcards, equipo
├── css/
│   └── styles.css          # Diseño blanco/negro translúcido + responsive
├── js/
│   └── app.js              # Render desde datos, filtros, progreso, quiz, modal
├── data/
│   └── modulos.js          # Todo el contenido editable del portal
├── assets/
│   ├── icon.svg
│   ├── video/              # Fondo de la portada
│   └── evidencias/         # Capturas de los proyectos originales
├── manifest.webmanifest
├── sw.js
├── README.md
└── PROMPTS.md
```

## Cómo agregar o editar un módulo

Todo el contenido vive en `data/modulos.js`. Copia un objeto del arreglo `window.MODULOS`, cámbiale el `id`, el `n`, el título y los datos. El portal lo pinta solo en el mapa, la línea de tiempo, la nube y el quiz.

Mínimos por ficha: 3 aprendizajes, 2 instrumentos, 2 programas, 2 herramientas, 3 recursos, 1 evidencia y 3 preguntas de quiz.

```js
{
  id: "nuevo-modulo",
  n: 18,
  titulo: "Nombre del módulo",
  corto: "Una frase que lo resuma",
  docente: "Javier Mineros",
  docenteId: "javier",
  periodo: "Noviembre 2026",
  mes: 11,
  tipo: "Módulo",
  icono: "code", // code, server, database, table, python, window, layers, clipboard, object, plug, globe, grid, phone, terminal, briefcase, users
  resumen: "Qué se hizo y qué se aprendió, en 2 o 3 líneas.",
  aprendizajes: ["...", "...", "..."],
  instrumentos: [{ nombre: "...", tipo: "Guía", detalle: "..." }, { nombre: "...", tipo: "Rúbrica", detalle: "..." }],
  programas: ["...", "..."],
  herramientas: ["...", "..."],
  recursos: [{ nombre: "...", url: "https://..." }, { nombre: "...", url: "https://..." }, { nombre: "...", url: "https://..." }],
  evidencias: [{ nombre: "...", detalle: "...", img: "assets/evidencias/archivo.png" }],
  quiz: [{ p: "Pregunta", opciones: ["A", "B", "C", "D"], correcta: 1, explica: "Por qué." }],
  tags: ["Etiqueta", "Otra"]
}
```

> Si en Classroom aparecen módulos de **Godot, Odoo, Flet, Uno Platform o Bootstrap** que no estén en esta lista, agrégalos con el mismo formato. El portal no necesita cambios de código.

> Si cambias `styles.css`, `app.js`, `modulos.js` o las imágenes, sube el número de versión de los `?v=` en `index.html` y el número de `CACHE` en `sw.js`. Así nadie ve una copia vieja después de publicar.

## Cómo ejecutarlo

No necesita instalación ni base de datos.

1. Abre `index.html` con doble clic, o
2. Usa **Live Server** en VS Code, o
3. Desde la terminal:

```bash
cd HUB-3DSA
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

> Para que el service worker y la instalación como app funcionen, tiene que servirse por HTTP/HTTPS, no con `file://`.

## Cómo publicarlo en GitHub Pages

```bash
git init
git add .
git commit -m "feat: portal HUB 3DS-A con módulos 2026"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/hub-3dsa.git
git push -u origin main
```

En GitHub: **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save**. Espera un par de minutos y abre la URL en una ventana de incógnito.

### Versiones sugeridas

```bash
git tag -a v0.2 -m "Cimientos: mapa, repo y módulos desde datos"
git push origin v0.2
# ... avance del día 2 ...
git tag -a v0.5 -m "Contenido real, buscador y progreso"
git push origin v0.5
# ... cierre ...
git tag -a v1.0 -m "Portal completo para la feria"
git push origin v1.0
```

## Equipo y roles

| Integrante | Carnet | Rol | Módulos |
|-----------|--------|-----|---------|
| Josué Alejandro Romero Hernández | 3381027 | Líder Git · Desarrollo · Contenido | Base del portal y módulos de los tres docentes |
| _(integrante 2)_ | | Diseñador UI | Por asignar |
| _(integrante 3)_ | | Curador de contenido | Por asignar |
| _(integrante 4)_ | | QA y accesibilidad | Por asignar |

> Edita `window.HUB.equipo` en `data/modulos.js` para completar el equipo. El portal muestra los espacios pendientes automáticamente.

## Acuerdos de GitHub

- `main` se protege: nadie hace push directo; todo entra por pull request.
- Una rama por persona y por tarea: `feat/nombre-modulo`, `fix/enlace-roto`, `docs/readme`.
- Commits en español, en imperativo y con prefijo: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`.
- Antes de hacer merge: otro integrante revisa, se prueba la página y se verifica que no haya claves.
- No subir contraseñas, tokens, archivos `.bak`, bases de datos pesadas ni capturas con datos personales.
- Etiquetas acordadas: `v0.2` (martes), `v0.5` (miércoles), `v1.0` (viernes).
- GitHub Pages se publica desde `main` / raíz.

## Bitácora

| Fecha | Versión | Qué se hizo | Estado |
|-------|---------|-------------|--------|
| 2026-11-02 | v1.0 local | Base del portal, 17 fichas, diseño monocromático, buscador, progreso, quiz, flashcards, README y prompts. | Hecho |
| 2026-11-03 | v0.2 | Revisión del equipo, nombres/roles, primer push y Pages activo. | Planificado |
| 2026-11-04 | v0.5 | Ajustes de contenido, enlaces verificados, pruebas en celular y correcciones de QA. | Planificado |
| 2026-11-06 | v1.0 | Cierre, etiqueta final, demo de 5 minutos y entrega del enlace. | Planificado |

## Rúbrica · 10 puntos

| Criterio | Puntos | Dónde se evidencia |
|----------|--------|--------------------|
| Contenido por módulo | 3 | 17 fichas con instrumentos, programas, herramientas, recursos, evidencias y quiz |
| Interactividad y dinamismo | 2 | Buscador, filtros, progreso, quiz y modo claro/oscuro |
| Diseño creativo y accesible | 2 | Identidad blanco/negro, responsive, contraste, foco visible y `alt` |
| GitHub y publicación | 2 | README, commits, tags y Pages (completar al publicar) |
| Dominio individual | 1 | Cada integrante explica sus módulos y el código |

## Registro de prompts

El detalle está en [`PROMPTS.md`](PROMPTS.md). La regla del equipo: **la IA es tutora, no atajo**. Todo código generado con ayuda de IA debe poder explicarse y verificarse.

## Créditos y evidencias

Las capturas de `assets/evidencias/` provienen de los proyectos originales del autor:

- `indel-web` (portafolio HTML/CSS).
- `FixDaddy` / Quote Forge (PHP MVC).
- Prácticas de MySQL y SQL Server.
- `ACCESS_CAFETERIA` (Access).
- `Modulo 3.4` (WinForms / control de notas).
- `Ositos Studios` (ASP.NET Web Forms + SQL Server).
- `Fondovideo.mp4` (video de fondo de la portada, material propio).

Los recursos externos enlazados son documentación oficial o fuentes reconocidas (MDN, PHP, MySQL, Microsoft Learn, Avalonia, Bootstrap, Atlassian, Visual Paradigm, Alianza Cooperativa Internacional, ONU y CONAMYPE).

## Pendientes antes de la feria

- [ ] Crear el repositorio público e invitar al equipo.
- [ ] Completar nombres, roles y módulos de los integrantes.
- [ ] Actualizar `window.HUB.enlaces.repo` y `pages` en `data/modulos.js`.
- [ ] Verificar que todos los enlaces abran.
- [ ] Probar en celular y en incógnito.
- [ ] Etiquetar `v1.0`.
- [ ] Preparar la demo de 5 minutos y la pregunta de dominio individual.
