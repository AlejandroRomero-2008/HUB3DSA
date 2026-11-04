# Corrección de módulos oficiales · 4 de noviembre de 2026

## Problema corregido

La versión anterior presentaba 17 temas y tecnologías como módulos. El usuario aportó el mapa curricular y solicitó que cada tarjeta mostrara el nombre del módulo oficial. Se reorganiza el portal en nueve tarjetas BTVDS 3.0–3.8; los 17 temas anteriores se conservan completos dentro de sus módulos.

## Fuentes y docentes

- Fotografía de módulos generales de la jornalización DS 2026: códigos y nombres 3.0–3.8. Se normaliza «estudiante» en singular en el nombre de 3.0.
- Fotografía de los módulos de Javier, sección 3DS A: 3.3, 3.4, 3.6 y 3.8.
- Captura de Classroom aportada por el estudiante: Arcides imparte desarrollo de aplicaciones (3.1), mantenimiento (3.2) y componentes móviles (3.5). «Módulo 1» y «Módulo 2» de Classroom son rótulos de la clase; las tarjetas usan los códigos BTVDS del mapa general.
- Confirmación escrita del usuario: Julio imparte Orientación (3.0) y microempresa cooperativa (3.7).

No se accedió a la cuenta de Classroom ni se descargaron actividades mediante sus credenciales. Ningún archivo generado incluye correo o contraseña escolar.

## Correspondencia temática

| Módulo | Temas del portal anterior, conservados |
|---|---|
| 3.0 Orientación al estudiante al proceso educativo | Sin material anterior. Guía de repaso propuesta e identificada como tal. |
| 3.1 Desarrollo de aplicaciones de software para la solución de problemas | HTML/CSS/JS; PHP/MVC; Python; WinForms/WPF; Avalonia; POO C#; ADO.NET; ASP.NET; CRUD/SportsPlay. |
| 3.2 Mantenimiento y aseguramiento de la operación del sistema informático | Linux y operación del entorno. |
| 3.3 Administración de base de datos | MySQL; SQL Server; Access y migración. |
| 3.4 Elaboración de documentación de sistemas informáticos | Requerimientos, entrevista, modelo de datos y SLA. |
| 3.5 Desarrollo de componentes para dispositivos móviles | .NET MAUI. |
| 3.6 Conversación de inglés sobre mantenimiento de sistemas informáticos | Sin material anterior. Guía propuesta de conversación y vocabulario técnico. |
| 3.7 Puesta en marcha de la microempresa en asociatividad cooperativa | Investigación y exposición sobre cooperativas. |
| 3.8 Proyecto innovador de desarrollo de software | Ositos Studios. |

La ubicación de los temas es una clasificación por contenido, no prueba de qué práctica se impartió bajo cada módulo. Debe validarse con las guías originales: una misma tecnología puede apoyar más de un módulo. No se volvió a atribuir cada tema histórico a un docente sin evidencia; se muestran los docentes de los módulos confirmados.

## Conservación y navegación

- Comparación de los 17 objetos de `window.TEMAS` contra la versión `0bf076c`: iguales íntegramente, incluyendo instrumentos, recursos, evidencias, preguntas y explicaciones.
- `window.CURRICULO` describe los nueve módulos; `window.MODULOS` agrupa sus temas, sin borrar los registros originales.
- Se conservan las 51 preguntas originales y se añaden seis preguntas propuestas para Orientación e Inglés: 57 en total.
- Los temas se pueden desplegar dentro del Resumen de cada módulo; también se ofrecen sus materiales agrupados en Ficha completa y sus preguntas en Quiz.
- Los enlaces anteriores como `#modulo/python` siguen funcionando: abren 3.1 y despliegan el tema Python.
- Las claves de progreso y puntajes anteriores se conservan. Un módulo solo se migra como repasado si todos sus temas estaban marcados; el progreso parcial no se convierte en módulo completo. Los récords antiguos se muestran en cada tema y el récord de un módulo completo se obtiene al responder su nuevo quiz.
- La ruta se ordena por código curricular, sin presentar los meses históricos de los temas como calendario oficial.

## Pantallas y accesibilidad

Se verificaron 320, 360, 375, 390, 600, 768, 900, 1280 y 1920 px. En todos los anchos: nueve tarjetas visibles, todas las secciones presentes, sin desbordamiento horizontal. Los títulos y las descripciones de las tarjetas no se recortan por número de líneas; se muestran todas sus etiquetas. El menú móvil ofrece los mismos destinos y la marca conserva su subtítulo.

El video sigue disponible mediante un botón en cualquier tamaño, aunque no se descarga automáticamente en móvil. El usuario puede iniciar la reproducción, incluso cuando la preferencia de movimiento reducido evita el autoplay. Los detalles y pestañas se despliegan por interacción; eso no elimina contenido al cambiar de ancho.

axe: sin incidencias detectadas en portada y en las tres pestañas de la ficha 3.1, en temas claro y oscuro, viewport de 375 px. No es una certificación universal. Falta la comprobación en teléfonos físicos y lectores de pantalla reales.

## Pruebas

- Nueve tarjetas y códigos, 17 temas íntegros, 57 preguntas y mínimos de contenido.
- Filtros docentes: Javier 4, Arcides 3, Julio 2; búsqueda por nombre, código y tema.
- Nueve anchos sin pérdida de secciones ni tarjetas; fichas y temas desplegables.
- Respuestas, feedback, reintento y récord de los nueve quizzes.
- Enlaces anteriores y conservación de marcas/puntajes.
- Sin errores JavaScript durante el recorrido.

[Resultados funcionales](qa-curriculo/pruebas.txt) · [axe](qa-curriculo/accesibilidad.json) · [tarjetas en móvil](qa-curriculo/modulos-movil.png) · [tarjetas en escritorio](qa-curriculo/modulos-escritorio.png) · [ficha móvil](qa-curriculo/ficha-movil.png).

## Pendientes honestos

- Evidencia original de 3.0, 3.6 y 3.7. El material propuesto no se cuenta como un trabajo de clase realizado.
- Confirmar o corregir la ubicación de cada práctica contra las actividades de Classroom.
- Completar las actividades individuales, bitácoras y revisión del equipo.
- Probar en un teléfono físico la versión publicada.

Los informes previos que hablan de 17 módulos corresponden al estado anterior. Se conservan como historial y no describen la estructura vigente.
