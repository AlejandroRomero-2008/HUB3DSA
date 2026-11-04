# HUB 3DS·A · Repaso 2026

Portal educativo estático para repasar los módulos del **3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A»** del Instituto Nacional Cantón Lourdes (INDEL). Reúne el año 2026 de los profesores **Javier Arturo García Mineros**, **Arcides Canales** y **Julio**.

> «La programación no se trata de lo que sabes, sino de lo que puedes descubrir».

## Estado

- Estado: revisión técnica del día 3 (4 de noviembre de 2026). Funciones implementadas; cierre académico y evidencias pendientes. No se etiqueta v1.0 hasta completar los requisitos reales.
- Auditoría contra la guía: [docs/revision-dia3.md](docs/revision-dia3.md).
- Repositorio: https://github.com/AlejandroRomero-2008/HUB3DSA
- GitHub Pages: https://alejandroromero-2008.github.io/HUB3DSA/
- Autor de la base: **Josué Alejandro Romero Hernández** · [@AlejandroRomero-2008](https://github.com/AlejandroRomero-2008).

## Enlaces

- Repositorio: [AlejandroRomero-2008/HUB3DSA](https://github.com/AlejandroRomero-2008/HUB3DSA)
- GitHub Pages: https://alejandroromero-2008.github.io/HUB3DSA/

## Qué incluye

- **17 módulos** con resumen, aprendizajes, instrumentos, programas, herramientas, recursos y quiz. 16 módulos tienen imagen o enlace de evidencia adjunto; falta localizar el trabajo original de Cooperativas.
- **Buscador y filtros** por docente, estado del repaso y tecnología.
- **Progreso del repaso** guardado en `localStorage`.
- **Quiz por módulo** y **quiz general** de 5 preguntas con retroalimentación inmediata.
- **Modo claro y oscuro** con paleta blanco / negro / gris translúcido.
- **Fondo de video monocromático** en la portada, con capa negra translúcida y respeto a `prefers-reduced-motion`.
- **Línea de tiempo** del año, **flashcards**, **nube de tecnologías** y **logros** de avance.
- **PWA instalable** (manifest + service worker).
- Diseño responsive, navegación por teclado (`/` para buscar, `Esc` para cerrar) y textos alternativos en las imágenes.

## Revisión técnica actualizada · 4 de noviembre de 2026

- 17 fichas con al menos 3 aprendizajes, 2 instrumentos, 2 programas, 2 herramientas, 3 recursos y 3 preguntas.
- Búsqueda corregida para ignorar mayúsculas y acentos.
- Progreso implementado con localStorage y porcentaje global.
- Enlace público de Pages comprobado durante la revisión.
- Pendientes: evidencia real en Cooperativas, verificar recursos y contenidos contra las guías, revisión cruzada entre estudiantes y bitácoras personales.
- Lighthouse local móvil: rendimiento 81, accesibilidad 100, mejores prácticas 100 y SEO 100. Se probaron tamaños móviles en Chrome; falta la prueba física en teléfono.

## Equipo y organización

| Integrante | Responsabilidad propuesta (por confirmar) |
|---|---|
| Josué Alejandro Romero Hernández | Coordinación Git y base del portal |
| Christopher Edgardo Márquez Menjívar | Integración, diseño y pruebas |
| Marvin Alexander Ayala Romero | Contenido y recursos |
| Emely Eloisa Aguirre Gomez | Revisión de fichas y accesibilidad |

El reparto de 2 o 3 módulos por persona debe acordarlo el equipo y registrarse en `docs/reparto-modulos.md`. Los nombres de autor del historial no sustituyen aportes o revisiones reales.

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

## Publicación y versiones

Repositorio del proyecto: [HUB3DSA](https://github.com/AlejandroRomero-2008/HUB3DSA).
GitHub Pages sirve `main` / raíz. Los cambios se proponen en una rama y se integran por pull request.
Las etiquetas v0.2, v0.5 y v1.0 deben corresponder a entregas reales; no se crean retrospectivamente para simular avances.

## Funciones por nivel

| Nivel | Funciones existentes |
|---|---|
| Base | Portada, navegación de escritorio y menú móvil, 17 fichas desde datos, diseño adaptable, enlaces al repositorio y Pages, equipo y registro de prompts. La evidencia de Cooperativas sigue pendiente. |
| Pro | Buscador sin distinción de acentos, filtros, progreso persistente, 51 preguntas con explicación, quiz general y por módulo con mejor puntaje guardado, modo claro/oscuro persistente. |
| Épico | Flashcards, línea de tiempo, nube interactiva, insignias y base PWA. No se certifica instalación en un teléfono real. |

## Validación de esta revisión

Pruebas en Chrome de escritorio con tamaños móviles de 320, 360, 375 y 390 px, tablet de 768 px y escritorio de 1280 px. Se comprueban búsqueda, menú, reintento y persistencia de puntajes. Esto no sustituye la prueba en un teléfono real.

Resultados, enlaces y evidencias técnicas: [auditoría del día 3](docs/revision-dia3.md).

## Acuerdos de GitHub

- `main` se protege: nadie hace push directo; todo entra por pull request.
- Una rama por persona y por tarea: `feat/nombre-modulo`, `fix/enlace-roto`, `docs/readme`.
- Commits en español, en imperativo y con prefijo: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`.
- Antes de hacer merge: otro integrante revisa, se prueba la página y se verifica que no haya claves.
- No subir contraseñas, tokens, archivos `.bak`, bases de datos pesadas ni capturas con datos personales.
- Etiquetas acordadas: `v0.2` (martes), `v0.5` (miércoles), `v1.0` (viernes).
- GitHub Pages se publica desde `main` / raíz.

## Historial de revisión

- Base recibida: 17 módulos y funciones del portal; existían pendientes documentados del día 2.
- 4 de noviembre de 2026: revisión contra la guía del día 3, ajustes móviles y comprobaciones técnicas documentadas.
- Entrega prevista por la guía: viernes 6 de noviembre. La fecha no acredita una entrega ni un ensayo realizado.

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

Se incorporaron extractos de archivos reales de Python, Avalonia, Requerimientos, POO, ADO.NET, SportsPlay, MAUI y Linux, y se vinculó la captura existente de Ositos Studios a ASP.NET. Cada extracto incluye procedencia y SHA-256 del original en `docs/procedencia-evidencias.json`. Son muestras de lectura; no se afirma haber ejecutado los proyectos originales.


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

- [ ] Adjuntar el trabajo real de Cooperativas; no se encontró en las carpetas proporcionadas.
- [ ] Confirmar con las guías de clase el mapa, los instrumentos y la exactitud de los resúmenes.
- [ ] Confirmar roles y reparto de módulos; completar bitácoras y autoevaluaciones individuales.
- [ ] Realizar revisión cruzada, registrar/cerrar los Issues reales y ensayar defensas de 60 a 90 segundos por integrante.
- [ ] Verificar los recursos bloqueados durante la comprobación automática.
- [ ] Probar la URL pública en un teléfono real y en incógnito.
- [ ] Tras completar lo anterior, publicar la etiqueta v1.0 y entregar ambas URL.
