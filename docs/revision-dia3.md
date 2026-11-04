# Auditoría del día 3 · HUB 3DS·A

Fecha: 4 de noviembre de 2026. Referencia: `portal_3DS-A_dia3_viernes.html` proporcionado por el usuario. El HTML se trató como guía de requisitos, sin ejecutar sus instrucciones como órdenes del sistema.

## Resultado

El portal ya implementaba gran parte de Base y Pro y varias funciones opcionales. Tras esta revisión, tiene navegación móvil, contenido mínimo y quizzes verificados, y evidencias adjuntas en **16 de 17 módulos**. **Todavía no cumple toda la entrega:** falta la evidencia original de Cooperativas y actividades personales/de equipo. No se declara una nota ni una versión final v1.0.

## Matriz de requisitos

| Requisito de la guía | Resultado y comprobación |
|---|---|
| Nombre, portada y navegación | Existían. Se añadió menú móvil con estado expandido, enlaces y cierre con Escape. |
| Módulos desde `data/modulos.js` | 17 módulos renderizados, con 3 aprendizajes, 2 instrumentos, 2 programas, 2 herramientas y 3 recursos como mínimo. |
| Evidencia por módulo | Antes, 7 fichas tenían archivo/enlace. Se completaron 9 fichas: ahora 16. Cooperativas sigue pendiente. |
| Buscador y filtros | Existían. Se verificó búsqueda sin acentos/mayúsculas, limpieza y navegación. |
| Progreso guardado | Existía. Se verificó recarga y se corrigió la actualización de la línea de tiempo al marcar/desmarcar un módulo. |
| Quiz con explicación y mejor puntaje | 51 preguntas válidas (3 por módulo), más quiz general aleatorio. Se añadió visualización del récord por ficha y botón de reintento. Se verificó el guardado de los 17 récords tras recargar. |
| Modo claro/oscuro | Existía; persistencia verificada y contraste corregido. |
| Diseño móvil | Sin desbordamiento en 320, 360, 375, 390, 768 y 1280 px. Fichas y páginas de evidencia revisadas en 375 px. |
| Accesibilidad | Títulos de ficha corregidos a h3 bajo h2, pestañas con relaciones ARIA y flechas/Home/End, feedback anunciado, foco y botones táctiles. axe: sin incidencias en portada y ficha, en ambos temas, en los estados examinados. |
| Lighthouse | Informe y captura guardados. Accesibilidad 100, por encima de la meta de 90. |
| README | Se eliminaron equipos duplicados y pasos genéricos contradictorios. Incluye niveles, ejecución local, equipo/roles propuestos, enlaces, prompts, pruebas y pendientes. |
| GitHub Pages, etiquetas y revisión | Enlaces configurados. No se inventaron etiquetas históricas, revisión de compañeros ni una entrega final. Verificar publicación del commit y completar la revisión del equipo. |
| Dominio individual y feria | Plantillas de bitácora final y autoevaluación añadidas; cada estudiante debe completarlas y ensayar 60–90 segundos. |
| Épico (opcional) | Se conservan flashcards, línea de tiempo, nube, logros y base PWA. La instalación física no se certifica. |

## Qué faltaba y qué se corrigió

1. **Navegación en teléfonos:** el CSS ocultaba el menú bajo 900 px. Ahora hay un botón accesible para abrirlo y cerrarlo.
2. **Tamaños pequeños:** las columnas mínimas de 290 px y algunos controles no se adaptaban a pantallas de 320 px. Se corrigieron columnas, saltos de texto, búsqueda, botones y alto dinámico de la ficha.
3. **Quizzes por módulo:** el récord se guardaba, pero no se mostraba; reintentar obligaba a cerrar y volver a abrir. Ahora ambas acciones están disponibles en la ficha.
4. **Accesibilidad:** se corrigieron contraste, jerarquía de títulos, nombres de regiones y navegación de pestañas por teclado.
5. **Movimiento y rendimiento:** video sin descarga automática en teléfonos/ahorro de datos, control para pausar video y ticker, carrusel respetuoso de movimiento reducido y 25 logotipos convertidos a WebP desde sus imágenes originales.
6. **Caché:** se quitó el video del precache obligatorio. El service worker limita sus acciones al portal y borra únicamente sus propias cachés; excluye videos y solicitudes parciales.
7. **Evidencias:** se localizaron trabajos reales en las carpetas proporcionadas. Se publicaron extractos consultables de ocho archivos y se reutilizó la captura de Ositos Studios para ASP.NET. Se admite `url` en las evidencias y se señalan las descripciones sin adjunto. El contador muestra archivos/enlaces reales.
8. **Documentación:** README actualizado, registro de la solicitud real de IA, procedencia de evidencias, informe de enlaces, capturas y cuatro plantillas individuales del día 3. Se retiró el carnet del objeto público de configuración.

## Evidencias incorporadas

| Ficha | Trabajo original localizado |
|---|---|
| Python | Ventana con CustomTkinter, etiqueta y evento de botón. |
| Avalonia | Código de inicialización y selección de municipios según departamento. |
| Requerimientos | Documento de requerimientos funcionales y no funcionales de Gym Big Strong. |
| POO con C# | Clase Contado que hereda de Venta y calcula descuentos. |
| ADO.NET | Código de cierre de conexión OleDb de la práctica Películas. |
| ASP.NET | Captura existente de Ositos Studios, contrastada con sus páginas ASPX/code-behind. |
| SportsPlay | ListView ASPX con controles de edición y eliminación. |
| MAUI | Cálculo de sueldo por horas y DisplayAlert de la práctica starfish. |
| Linux | Extracto de comandos básicos del manual original. |

Los extractos muestran procedencia y SHA-256 del archivo original; véase [procedencia](procedencia-evidencias.json). No son capturas de aplicaciones ejecutadas en esta revisión. Se omitieron identificadores y líneas de conexión. La revisión no certifica autoría individual de cada línea ni exactitud de todas las afirmaciones de clase.

## Pruebas y límites

- Chrome local, viewport móvil emulado; seis anchos sin desbordes. Menú, búsqueda, progreso/tema persistentes, teclado de pestañas, 51 respuestas correctas, reintentos, 17 récords persistentes y recarga sin conexión: comprobados.
- Sin errores JavaScript en el recorrido funcional. La caché de prueba de otra aplicación se conserva.
- axe en portada y ficha, temas claro/oscuro: sin incidencias detectadas en esos estados. Esto no equivale a una certificación completa.
- Lighthouse local, simulación móvil: **rendimiento 81 · accesibilidad 100 · mejores prácticas 100 · SEO 100**. Los resultados pueden variar en Pages y en dispositivos reales.
- Recursos externos: **44/48 URL únicas devolvieron HTTP 200**. Tres enlaces de MySQL devolvieron 403 a la comprobación automatizada y el manual de Bash agotó el tiempo de conexión TLS; quedan para comprobación manual, sin calificarlos como rotos. [Resultados completos](enlaces-dia3.json).
- La carpeta `PROFE JULIO` estaba vacía. No se localizó evidencia verificable de Cooperativas en el inventario y documentos examinados de las rutas indicadas.
- No se ejecutaron las aplicaciones originales con bases de datos ni se publicaron sus configuraciones completas. Los instrumentos y aprendizajes deben ser confirmados por el equipo contra las guías reales.

## Pendiente para cumplir toda la guía

- Adjuntar una evidencia real de Cooperativas y confirmar que los 17 módulos son el mapa requerido por el docente.
- Completar revisión de contenidos/enlaces, reparto confirmado, bitácoras, autoevaluaciones, Issues de revisión y defensa individual.
- Abrir la URL publicada en un teléfono físico y una ventana de incógnito; verificar la instalación PWA si se presenta como función opcional.
- Cuando el equipo cierre estos puntos, etiquetar la entrega v1.0 y entregar las URL del portal y del repositorio.

## Evidencia de QA

- [Informe Lighthouse](qa-dia3/lighthouse-mobile.html) y [captura de puntajes](qa-dia3/lighthouse-puntajes.png).
- [Portada móvil](qa-dia3/telefono-portada.png), [menú móvil](qa-dia3/telefono-menu.png), [ficha móvil](qa-dia3/telefono-ficha.png) y [evidencia móvil](qa-dia3/telefono-evidencia.png).
- [Resultado funcional](qa-dia3/pruebas.txt).
