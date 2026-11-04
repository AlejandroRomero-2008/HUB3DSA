# HUB 3DS·A · Repaso 2026

Portal de repaso del 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A», Instituto Nacional Cantón Lourdes (INDEL).

- [Portal público](https://alejandroromero-2008.github.io/HUB3DSA/)
- [Repositorio](https://github.com/AlejandroRomero-2008/HUB3DSA)
- [Corrección de la organización curricular](docs/modulos-oficiales.md)

## Módulos oficiales y docentes

Cada tarjeta principal muestra **el código y el nombre del módulo**, y contiene sus temas. La versión anterior trataba 17 temas como módulos; se corrigió esa estructura conservando todo el material.

| Código | Nombre del módulo | Docente |
|---|---|---|
| BTVDS 3.0 | Orientación al estudiante al proceso educativo | Julio |
| BTVDS 3.1 | Desarrollo de aplicaciones de software para la solución de problemas | Francisco Arcides Canales Sorto |
| BTVDS 3.2 | Mantenimiento y aseguramiento de la operación del sistema informático | Francisco Arcides Canales Sorto |
| BTVDS 3.3 | Administración de base de datos | Javier Mineros |
| BTVDS 3.4 | Elaboración de documentación de sistemas informáticos | Javier Mineros |
| BTVDS 3.5 | Desarrollo de componentes para dispositivos móviles | Francisco Arcides Canales Sorto |
| BTVDS 3.6 | Conversación de inglés sobre mantenimiento de sistemas informáticos | Javier Mineros |
| BTVDS 3.7 | Puesta en marcha de la microempresa en asociatividad cooperativa | Julio |
| BTVDS 3.8 | Proyecto innovador de desarrollo de software | Javier Mineros |

Los nombres proceden de las imágenes de la jornalización aportadas por el estudiante. La captura de Classroom confirma los tres módulos de Arcides; el usuario confirmó los dos de Julio. Se normaliza el singular «estudiante» en 3.0. No se afirma haber accedido a Classroom ni haber descargado materiales de esa cuenta.

## Temas dentro de cada módulo

- **3.0:** guía propuesta de organización, acuerdos y planificación del aprendizaje.
- **3.1:** HTML/CSS/JavaScript, PHP/MVC, Python, C#/WinForms/WPF, Avalonia, POO, ADO.NET, ASP.NET y CRUD/SportsPlay.
- **3.2:** Linux y operación del entorno informático.
- **3.3:** MySQL, SQL Server y Access/migración.
- **3.4:** requerimientos, entrevista, modelo de datos, SLA y documentación de Gym Big Strong.
- **3.5:** .NET MAUI y sus componentes móviles.
- **3.6:** guía propuesta de vocabulario y conversación sobre mantenimiento en inglés.
- **3.7:** exposición e investigación sobre cooperativas.
- **3.8:** proyecto Ositos Studios.

Esta clasificación temática no sustituye el plan de clase: el equipo debe validar la ubicación de cada práctica, especialmente las tecnologías que se usaron como apoyo en más de un módulo. Los 17 temas, sus aprendizajes, instrumentos, programas, recursos, evidencias y 51 preguntas originales se conservan íntegros. Orientación e Inglés incorporan seis preguntas de repaso propuestas, identificadas como tales: **57 preguntas en total**.

## Funciones por nivel

| Nivel | Funciones |
|---|---|
| Base | Nueve fichas por módulo oficial desde datos; temas detallados; menú móvil; recursos/evidencias; equipo, README y prompts. |
| Pro | Buscador por código, módulo, tema y tecnología; filtros por docente/estado; progreso persistente; quiz con explicaciones, reintento y récord; modo claro/oscuro. |
| Épico | Flashcards, ruta por código curricular, nube interactiva, logros, carrusel y base PWA. La instalación en un teléfono físico no está certificada. |

Las fichas de **3.0, 3.6 y 3.7** todavía no tienen evidencia original adjunta. Las primeras dos incorporan material de estudio propuesto; no se presenta como actividad realizada en clase. No se declara el cumplimiento completo de la guía ni una entrega final v1.0.

## Adaptación a dispositivos

Las mismas nueve tarjetas y todas las secciones están disponibles en móvil, tablet y escritorio. Los textos y etiquetas de las tarjetas no se recortan por líneas; el menú móvil permite llegar a las mismas secciones. Cada tema se puede desplegar dentro de su módulo, con sus materiales completos. Los cambios de ancho no reescriben datos ni reinician el progreso.

El video mantiene un control de reproducción en todos los tamaños; no se descarga automáticamente en teléfonos o ahorro de datos. La preferencia de movimiento reducido se respeta y la reproducción manual sigue disponible.

## Equipo

| Integrante | Responsabilidad propuesta, por confirmar |
|---|---|
| Josué Alejandro Romero Hernández | Coordinación Git y base del portal |
| Christopher Edgardo Márquez Menjívar | Diseño e integración |
| Marvin Alexander Ayala Romero | Contenido y recursos |
| Emely Eloisa Aguirre Gomez | Revisión y accesibilidad |

Confirmar el reparto en [docs/reparto-modulos.md](docs/reparto-modulos.md). Las bitácoras del día 3 son plantillas: cada integrante debe completarlas con su experiencia real.

## Ejecutar en local

No requiere instalación ni una base de datos. Desde la carpeta del proyecto:

```powershell
python -m http.server 8080
```

Abrir `http://localhost:8080`. También se puede usar Live Server. El service worker requiere HTTP/HTTPS; abrir `index.html` directamente permite consultar el portal, pero no activa PWA.

## Datos y conservación del contenido

`data/modulos.js` contiene:

- `window.TEMAS`: los 17 registros originales completos, con sus identificadores estables.
- `window.CURRICULO`: los nueve módulos, sus códigos, nombres y docentes, y la relación con los temas.
- `window.MODULOS`: fichas agrupadas que se construyen a partir del currículo.
- `window.MODULO_POR_TEMA`: compatibilidad con enlaces de fichas anteriores.

Los enlaces anteriores como `#modulo/python` abren su nuevo módulo y despliegan ese tema. Las marcas de repaso y récords antiguos conservan sus claves. Si todos los temas de un módulo estaban repasados, se migra esa marca al módulo; una marca parcial no se convierte en módulo completo. Los récords nuevos del quiz completo se obtienen al responderlo; no se inventa un récord a partir de preguntas no respondidas.

Las evidencias originales y su procedencia están en [docs/procedencia-evidencias.json](docs/procedencia-evidencias.json). Las fechas y atribuciones de los temas anteriores no son un calendario curricular confirmado.

## Pruebas

Prueba de estructura y archivos internos, sin instalar dependencias:

```powershell
node tests/curriculo.test.cjs
```

[Informe de la reorganización](docs/modulos-oficiales.md) y [resultados funcionales](docs/qa-curriculo/pruebas.txt).

El informe anterior del día 3, sus 17 fichas y puntajes Lighthouse corresponden a la versión previa a esta reorganización; se conservan como historial en `docs/revision-dia3.md` y `docs/qa-dia3/`.

## Publicación y pendientes

GitHub Pages se sirve desde `main` / raíz. Al publicar se actualizan las versiones de CSS, JS y datos y el nombre de caché del service worker.

- Adjuntar las evidencias originales de Orientación, Inglés y Cooperativas.
- Validar las prácticas bajo cada módulo contra las guías de clase y completar el contenido original que falte.
- Confirmar roles, reparto, revisión entre compañeros e Issues reales.
- Completar bitácoras, autoevaluación y defensa de 60–90 segundos por integrante.
- Probar la URL pública en teléfono físico y ventana de incógnito.
- Crear etiquetas de entrega únicamente cuando correspondan a una versión realmente completada.

## Registro de IA

[Prompts y verificación](PROMPTS.md). No se incluyen credenciales de cuentas escolares en los archivos del proyecto.
