# Registro de prompts · HUB 3DS·A

Este archivo documenta cómo se usó la inteligencia artificial durante la construcción del portal. La regla del proyecto: **la IA es tutora, no atajo**. Cada sugerencia se verificó contra los archivos del año y se adaptó al contexto del equipo.

## Sesión 1 · Diagnóstico y mapa del año

- **Objetivo:** entender la guía del docente y convertirla en un plan de trabajo.
- **Prompt:** «Lee esta guía HTML del Día 1 y explícame qué hay que hacer, qué se entrega y cómo se evalúa. No inventes: cita solo lo que está en el documento».
- **Resultado:** resumen del producto, los tres días, la rúbrica y la modalidad equipo/individual.
- **Verificación:** se contrastó con el HTML original y con la carpeta `3DSA`.

## Sesión 2 · Inventario de evidencias

- **Objetivo:** reconstruir los módulos reales a partir de las carpetas de proyectos.
- **Prompt:** «Revisa la estructura de `PROFE JAVIER`, `PROFE ARCIDES` y `PROFE JULIO`. Agrupa los proyectos por módulo y dime qué evidencia hay de cada uno. No inventes módulos que no tengan archivos».
- **Resultado:** 17 módulos agrupados por docente y evidencia.
- **Verificación:** se abrieron los README, scripts SQL, archivos `.cs`, `.aspx`, `.py` y documentos `.docx` para confirmar contenidos.

## Sesión 3 · Contenido de las fichas

- **Objetivo:** redactar resúmenes, aprendizajes, instrumentos, programas, herramientas, recursos y quiz.
- **Prompt:** «Con esta evidencia, escribe una ficha breve en español para un estudiante de tercer año. Incluye mínimo 2 instrumentos, 2 programas, 2 herramientas, 3 recursos oficiales, 1 evidencia y 3 preguntas de opción múltiple con explicación».
- **Resultado:** contenido base de las 17 fichas en `data/modulos.js`.
- **Verificación:** cada dato se contrastó con los archivos; los recursos se comprobaron con sus URLs oficiales.

## Sesión 4 · Diseño y experiencia

- **Objetivo:** crear una identidad visual coherente con la indicación del equipo: blanco transparente, negro transparente, blanco y negro.
- **Prompt:** «Diseña un portal monocromático con glassmorphism, modo claro/oscuro, tarjetas, modal de ficha, quiz y línea de tiempo. Debe verse bien en celular y cumplir contraste y foco visible».
- **Resultado:** `css/styles.css` y la estructura de `index.html`.
- **Verificación:** revisión visual en navegador, prueba responsive y revisión de consola.

## Sesión 5 · Interactividad

- **Objetivo:** implementar buscador, filtros, progreso, quiz, flashcards, nube de tecnologías y PWA.
- **Prompt:** «Implementa en JavaScript puro el render de módulos desde un arreglo, filtros combinables, progreso en localStorage, quiz con retroalimentación y modal accesible con cierre por Escape».
- **Resultado:** `js/app.js`.
- **Verificación:** pruebas manuales de cada función y revisión de errores en consola.

## Sesión 6 · Publicación y documentación

- **Objetivo:** preparar el repositorio, el README y las versiones.
- **Prompt:** «Escribe un README para GitHub Pages con integrantes, roles, módulos, cómo ejecutar, cómo publicar, tags v0.2/v0.5/v1.0 y checklist de la rúbrica».
- **Resultado:** `README.md` y este registro.
- **Verificación:** se dejaron placeholders claros para el repositorio y los integrantes; no se subieron contraseñas ni datos personales.

## Sesión 7 · QA, enlaces y accesibilidad

- **Objetivo:** revisar enlaces, responsive, modo claro/oscuro y accesibilidad antes de publicar.
- **Prompt:** «Haz una pasada de QA al portal: revisa que los enlaces respondan, prueba la vista móvil, el modal, los quizzes y ejecuta Lighthouse. Reporta los fallos con el selector y la corrección concreta».
- **Resultado:** 48 URLs comprobadas, 8 enlaces corregidos, pruebas de móvil en 390 px, modo claro/oscuro y modal; Lighthouse final en 100 de accesibilidad, 100 de buenas prácticas y 100 de SEO.
- **Verificación:** navegador real, Chrome headless para capturas móviles y Lighthouse sobre la página publicada en local.

## Sesión 8 · Fondo de video de la portada

- **Objetivo:** integrar `Fondovideo.mp4` como fondo del hero sin cambiar el contenido ni la estructura.
- **Prompt:** «Pon este video de fondo en la portada, con una capa negra bastante transparente para que el texto siga legible. Deja todo lo demás igual. Cuida el modo claro, el celular y `prefers-reduced-motion`».
- **Resultado:** video en `assets/video/fondovideo.mp4`, capa degradada negra/blanca, filtro monocromático y versión sin movimiento para quien lo prefiera.
- **Verificación:** capturas en 1200 px, 390 px, modo oscuro y modo claro; el texto y los botones conservaron contraste y posición.

## Qué NO se delegó a la IA

- La decisión final de qué módulos incluir y qué evidencia usar.
- La explicación oral de los módulos en la feria.
- La creación del repositorio, los commits y la invitación a los compañeros.
- La revisión de que no hubiera contraseñas o datos personales en el repositorio.

> La verificación de enlaces se apoyó en un script y en la apertura real en navegador; el equipo debe repetirla antes de publicar porque algunos sitios cambian de URL.

## Plantilla para nuevas entradas

```text
## Sesión N · Título
- Objetivo:
- Prompt usado:
- Resultado:
- Verificación:
- Qué aprendí:
```
