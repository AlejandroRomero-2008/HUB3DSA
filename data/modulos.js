/* ============================================================
   HUB 3DS·A — Datos del repaso 2026
   Todo el contenido del portal vive aquí. Para agregar un módulo,
   copia un objeto, cámbiale el id y aparecerá solo en la página.
   ============================================================ */

window.HUB = {
  nombre: "HUB 3DS·A",
  lema: "Todo el año. Un solo lugar.",
  institucion: "Instituto Nacional Cantón Lourdes (INDEL)",
  especialidad: "3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A»",
  anio: 2026,
  autor: "Josué Alejandro Romero Hernández",
  docentes: [
    { id: "javier", nombre: "Javier Mineros", completo: "Javier Arturo García Mineros" },
    { id: "arcides", nombre: "Arcides Canales", completo: "Arcides Canales" },
    { id: "julio", nombre: "Profe Julio", completo: "Profesor Julio" }
  ],
  equipo: [
    {
        "nombre": "Josué Alejandro Romero Hernández",
        "rol": "Creador del repositorio",
        "github": "AlejandroRomero-2008"
    },
    {
        "nombre": "Christopher Edgardo Márquez Menjívar",
        "rol": "Integrante",
        "github": "cristopheredgardo13-prog"
    },
    {
        "nombre": "Marvin Alexander Ayala Romero",
        "rol": "Integrante"
    },
    {
        "nombre": "Emely Eloisa Aguirre Gomez",
        "rol": "Integrante"
    }
],
  enlaces: {
    repo: "https://github.com/AlejandroRomero-2008/HUB3DSA",
    pages: "https://alejandroromero-2008.github.io/HUB3DSA/"
  }
};

window.MODULOS = [
  {
    id: "web-html-css-js",
    n: 1,
    titulo: "Desarrollo Web I: HTML, CSS y JavaScript",
    corto: "Del HTML semántico al DOM y fetch",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Febrero – Abril 2026",
    mes: 2,
    tipo: "Módulo",
    icono: "code",
    resumen: "Construimos páginas desde cero: estructura semántica con HTML, diseño responsive con CSS y comportamiento dinámico con JavaScript. El cierre fue un portafolio personal, una calculadora de notas y un buscador que consume una API.",
    aprendizajes: [
      "Separar estructura (HTML), presentación (CSS) y comportamiento (JavaScript).",
      "Maquetar con Flexbox, Grid y media queries para que se vea bien en celular.",
      "Manipular el DOM, validar formularios y escuchar eventos sin librerías.",
      "Consumir una API con fetch y pintar los resultados en la página."
    ],
    instrumentos: [
      { nombre: "Guía de ejercicios indel-web (ej-1.1 a ej-1.5)", tipo: "Guía", detalle: "Ejercicios progresivos de HTML, CSS, JavaScript y consumo de API." },
      { nombre: "Rúbrica del portafolio personal", tipo: "Rúbrica", detalle: "Evaluó estructura, diseño, responsive, navegación y creatividad." },
      { nombre: "Lista de cotejo de responsive", tipo: "Lista de cotejo", detalle: "Revisión en celular, contraste y rutas relativas." }
    ],
    programas: ["Visual Studio Code", "Live Server", "Google Chrome (DevTools)", "Git"],
    herramientas: ["HTML5", "CSS3", "JavaScript", "Fetch API", "Bootstrap"],
    recursos: [
      { nombre: "MDN · HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { nombre: "MDN · CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { nombre: "MDN · JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" }
    ],
    evidencias: [
      { nombre: "Portafolio personal · indel-web/ej-1.3", detalle: "Sitio de tres páginas con portada, sobre mí y contacto. Diseño responsive y navegación clara.", img: "assets/evidencias/indel-web.png" },
      { nombre: "Calculadora de notas · ej-1.4", detalle: "Formulario que valida notas y pesos, calcula el promedio y actualiza el DOM en tiempo real." },
      { nombre: "Buscador Pokémon · ej-1.5", detalle: "Entrada de texto que consulta una API y muestra el resultado sin recargar la página." }
    ],
    quiz: [
      { p: "¿Qué etiqueta semántica envuelve el contenido principal de una página?", opciones: ["<section>", "<main>", "<div>", "<article>"], correcta: 1, explica: "<main> identifica el contenido principal y debe ser único por página." },
      { p: "¿Qué propiedad de CSS activa Flexbox en un contenedor?", opciones: ["position: flex", "display: flex", "flex: true", "layout: flex"], correcta: 1, explica: "display: flex convierte al elemento en un contenedor flexible." },
      { p: "¿Qué método convierte la respuesta de fetch en un objeto JavaScript?", opciones: ["response.text()", "response.json()", "response.parse()", "JSON.fetch()"], correcta: 1, explica: "response.json() lee el cuerpo y lo convierte desde JSON a un objeto." }
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Fetch"]
  },
  {
    id: "php-mvc",
    n: 2,
    titulo: "Desarrollo Web II: PHP y patrón MVC",
    corto: "Un cotizador con capas, sesiones y JSON",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Septiembre – Octubre 2026",
    mes: 9,
    tipo: "Módulo",
    icono: "server",
    resumen: "Programamos del lado del servidor con PHP. Organizamos un cotizador de servicios en capas (Modelo, Vista y Controlador), validamos datos, manejamos sesiones y guardamos la información en archivos JSON.",
    aprendizajes: [
      "PHP: variables, funciones, formularios, validación y sesiones.",
      "Separar responsabilidades con el patrón MVC.",
      "Persistir datos en archivos JSON y numerar cotizaciones de forma secuencial.",
      "Generar una vista imprimible con encabezado, términos y firma."
    ],
    instrumentos: [
      { nombre: "README del proyecto Quote Forge", tipo: "Documentación", detalle: "Mapa de carpetas, funciones y pasos para ejecutar en XAMPP." },
      { nombre: "Rúbrica de MVC y validaciones", tipo: "Rúbrica", detalle: "Evaluó separación de capas, validación del servidor y cálculo de totales." },
      { nombre: "Lista de cotejo de flujo completo", tipo: "Lista de cotejo", detalle: "Crear cotización, agregar ítems, guardar, imprimir y limpiar." }
    ],
    programas: ["XAMPP (Apache + PHP)", "Visual Studio Code", "Navegador web"],
    herramientas: ["PHP 8", "MVC", "Sesiones", "JSON", "HTML/CSS"],
    recursos: [
      { nombre: "Manual de PHP", url: "https://www.php.net/manual/es/" },
      { nombre: "Sesiones en PHP", url: "https://www.php.net/manual/es/book.session.php" },
      { nombre: "PHP orientado a objetos", url: "https://www.php.net/manual/es/language.oop5.php" }
    ],
    evidencias: [
      { nombre: "Quote Forge · FixDaddy", detalle: "Cotizador con formulario, ítems en vivo, cálculo de subtotal, IVA, descuentos y documento imprimible.", img: "assets/evidencias/php.png" }
    ],
    quiz: [
      { p: "¿Qué capa coordina el flujo entre el modelo y la vista?", opciones: ["El modelo", "La vista", "El controlador", "La base de datos"], correcta: 2, explica: "El controlador recibe la petición, llama al modelo y elige la vista." },
      { p: "¿Dónde se guardan los datos de sesión en PHP?", opciones: ["En el navegador", "En el servidor", "En un archivo CSS", "En la URL"], correcta: 1, explica: "La sesión vive en el servidor; el navegador solo guarda el identificador." },
      { p: "¿Qué capa contiene las reglas de negocio y el acceso a datos?", opciones: ["La vista", "El modelo", "El controlador", "El enrutador"], correcta: 1, explica: "El modelo representa los datos y las reglas del dominio." }
    ],
    tags: ["PHP", "MVC", "Sesiones", "JSON", "Backend"]
  },
  {
    id: "mysql",
    n: 3,
    titulo: "Bases de Datos con MySQL",
    corto: "Modelar, consultar y respaldar información",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Febrero – Marzo 2026",
    mes: 2,
    tipo: "Módulo",
    icono: "database",
    resumen: "Aprendimos a modelar y consultar bases de datos relacionales. Practicamos CREATE, INSERT, UPDATE, DELETE y SELECT, además de JOIN, funciones de agregación y respaldos.",
    aprendizajes: [
      "Diseñar tablas con tipos de datos, llaves primarias y foráneas.",
      "Escribir consultas con filtros, orden, límites y agrupación.",
      "Relacionar tablas con INNER JOIN y entender la integridad referencial.",
      "Crear respaldos y restaurar una base de datos."
    ],
    instrumentos: [
      { nombre: "Guías CLASE1 a CLASE6", tipo: "Guía", detalle: "Secuencia de prácticas de creación, modificación y consulta." },
      { nombre: "Práctica de SQL con capturas", tipo: "Práctica", detalle: "30 ejercicios documentados con resultados." },
      { nombre: "Rúbrica de consultas", tipo: "Rúbrica", detalle: "Evaluó sintaxis, resultados y explicación de cada consulta." }
    ],
    programas: ["MySQL Workbench", "XAMPP / phpMyAdmin", "Terminal de MySQL"],
    herramientas: ["SQL", "MySQL 8", "Workbench", "Modelo relacional"],
    recursos: [
      { nombre: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" },
      { nombre: "Tutorial de MySQL", url: "https://dev.mysql.com/doc/refman/8.0/en/tutorial.html" },
      { nombre: "MySQL Workbench", url: "https://www.mysql.com/products/workbench/" }
    ],
    evidencias: [
      { nombre: "Prácticas CLASE1–CLASE6", detalle: "Scripts con creación de tablas, inserción de datos, actualizaciones y consultas.", img: "assets/evidencias/mysql.png" },
      { nombre: "Capturas de la práctica de SQL", detalle: "30 capturas con los resultados de cada ejercicio." }
    ],
    quiz: [
      { p: "¿Qué cláusula filtra las filas de una consulta?", opciones: ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"], correcta: 1, explica: "WHERE establece la condición que deben cumplir las filas." },
      { p: "¿Qué JOIN devuelve solo las filas que coinciden en ambas tablas?", opciones: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], correcta: 2, explica: "INNER JOIN conserva únicamente las coincidencias." },
      { p: "¿Qué función cuenta el número de filas?", opciones: ["SUM()", "AVG()", "COUNT()", "MAX()"], correcta: 2, explica: "COUNT() cuenta filas o valores no nulos." }
    ],
    tags: ["MySQL", "SQL", "Bases de datos", "JOIN", "Backup"]
  },
  {
    id: "sqlserver",
    n: 4,
    titulo: "Bases de Datos con SQL Server",
    corto: "Instituto Educativo: T-SQL, triggers y backups",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Marzo – Mayo 2026",
    mes: 3,
    tipo: "Módulo",
    icono: "database",
    resumen: "Construimos la base Instituto_Educativo en SQL Server: tablas, relaciones, consultas, funciones, procedimientos almacenados, triggers de auditoría, backups completos y diferenciales, y restauración.",
    aprendizajes: [
      "Crear esquemas y relaciones con integridad referencial.",
      "Escribir T-SQL con JOIN, subconsultas, funciones y procedimientos almacenados.",
      "Automatizar la auditoría de cambios con triggers.",
      "Planificar respaldos completos y diferenciales, y probar la restauración."
    ],
    instrumentos: [
      { nombre: "Guía 1: Backup y T-SQL", tipo: "Guía", detalle: "Estándares de producción, tipos de backup, triggers y casos reales." },
      { nombre: "Documento final del Instituto Educativo", tipo: "Proyecto", detalle: "Modelo, scripts, manual y capturas del proceso." },
      { nombre: "Rúbrica de administración de bases de datos", tipo: "Rúbrica", detalle: "Evaluó consultas, procedimientos, triggers y respaldos." }
    ],
    programas: ["SQL Server", "SQL Server Management Studio (SSMS)", "Power BI", "Excel"],
    herramientas: ["T-SQL", "SSMS", "Power BI", "Access"],
    recursos: [
      { nombre: "SQL Server · Microsoft Learn", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { nombre: "Referencia de T-SQL", url: "https://learn.microsoft.com/es-es/sql/t-sql/language-reference" },
      { nombre: "Copias de seguridad y restauración", url: "https://learn.microsoft.com/es-es/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases" }
    ],
    evidencias: [
      { nombre: "Base Instituto_Educativo", detalle: "Scripts de consultas, procedimientos, triggers y auditoría.", img: "assets/evidencias/sql-server.png" },
      { nombre: "Backup completo y diferencial", detalle: "Capturas del proceso de respaldo y del script generado.", img: "assets/evidencias/backup.png" },
      { nombre: "Dashboard en Power BI", detalle: "Visualización de los datos del Instituto Educativo." }
    ],
    quiz: [
      { p: "¿Qué comando crea una copia de seguridad completa?", opciones: ["SAVE DATABASE", "BACKUP DATABASE", "COPY DATABASE", "EXPORT DATABASE"], correcta: 1, explica: "BACKUP DATABASE genera el archivo .bak con la copia completa." },
      { p: "¿Qué trigger se ejecuta después de insertar una fila?", opciones: ["INSTEAD OF INSERT", "AFTER INSERT", "BEFORE INSERT", "ON INSERT"], correcta: 1, explica: "AFTER INSERT se dispara después de que la inserción se completa." },
      { p: "¿Qué tablas virtuales permiten leer las filas nuevas y eliminadas en un trigger?", opciones: ["new y old", "inserted y deleted", "before y after", "rows y changes"], correcta: 1, explica: "inserted y deleted contienen las filas afectadas por la operación." }
    ],
    tags: ["SQL Server", "T-SQL", "Triggers", "Backup", "Power BI"]
  },
  {
    id: "access",
    n: 5,
    titulo: "Microsoft Access y migración de datos",
    corto: "Del SQL Server a Access y Excel",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Marzo – Abril 2026",
    mes: 3,
    tipo: "Módulo",
    icono: "table",
    resumen: "Usamos Access como gestor de bases de datos de escritorio y aprendimos a migrar datos desde SQL Server y hacia Excel, además de crear consultas, formularios y reportes.",
    aprendizajes: [
      "Crear tablas, relaciones y consultas en Access.",
      "Importar datos desde SQL Server usando un DSN y ODBC.",
      "Exportar a Excel y construir tablas dinámicas y gráficos.",
      "Decidir cuándo conviene Access y cuándo un servidor de bases de datos."
    ],
    instrumentos: [
      { nombre: "Guía de migración SQL Server → Access", tipo: "Guía", detalle: "Pasos para crear el DSN, seleccionar tablas y verificar la importación." },
      { nombre: "Práctica Cafetería", tipo: "Práctica", detalle: "Base de datos con tablas, consultas y formularios de ventas." },
      { nombre: "Lista de cotejo de migración", tipo: "Lista de cotejo", detalle: "Verificó que los datos llegaran completos y que las relaciones se mantuvieran." }
    ],
    programas: ["Microsoft Access", "Microsoft Excel", "SQL Server", "SSMS"],
    herramientas: ["Access", "SQL", "Excel", "ODBC/DSN", "Tablas dinámicas"],
    recursos: [
      { nombre: "Ayuda y aprendizaje de Access", url: "https://support.microsoft.com/es-es/access" },
      { nombre: "Referencia de Access SQL", url: "https://learn.microsoft.com/es-es/office/client-developer/access/desktop-database-reference/" },
      { nombre: "Ayuda y aprendizaje de Excel", url: "https://support.microsoft.com/es-es/excel" }
    ],
    evidencias: [
      { nombre: "Base Cafetería · ACCESS_CAFETERIA", detalle: "Tablas DETALLE_VENTA, INVENTARIO, PRODUCTO y VENTA, con consultas y formularios.", img: "assets/evidencias/access.png" },
      { nombre: "Migración a Excel", detalle: "Tablas importadas y gráficos generados a partir de la base de datos." }
    ],
    quiz: [
      { p: "¿Qué objeto de Access almacena los datos?", opciones: ["Formulario", "Consulta", "Tabla", "Informe"], correcta: 2, explica: "La tabla es el objeto donde se guardan los registros." },
      { p: "¿Para qué sirve un DSN?", opciones: ["Para diseñar formularios", "Para conectar Access con SQL Server", "Para imprimir reportes", "Para crear gráficos"], correcta: 1, explica: "El DSN (Data Source Name) guarda los datos de conexión ODBC." },
      { p: "¿Qué herramienta de Excel resume y agrupa datos?", opciones: ["Tabla dinámica", "Macro", "Formato condicional", "Validación"], correcta: 0, explica: "La tabla dinámica permite agrupar, sumar y comparar datos." }
    ],
    tags: ["Access", "Excel", "ODBC", "Migración", "Bases de datos"]
  },
  {
    id: "python",
    n: 6,
    titulo: "Programación con Python",
    corto: "Scripts, aleatoriedad y primeras ventanas",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Mayo – Junio 2026",
    mes: 5,
    tipo: "Módulo",
    icono: "python",
    resumen: "Programamos scripts y aplicaciones de consola con Python: lógica, funciones, aleatoriedad, validación y una introducción a interfaces gráficas con Tkinter.",
    aprendizajes: [
      "Variables, condicionales, bucles y funciones.",
      "Uso de módulos de la biblioteca estándar como random y string.",
      "Validar entradas y generar contraseñas seguras.",
      "Crear una primera ventana con Tkinter."
    ],
    instrumentos: [
      { nombre: "Guía interactiva de Python", tipo: "Guía", detalle: "Ejercicios de lógica, funciones y manejo de errores." },
      { nombre: "Práctica de contraseñas seguras", tipo: "Práctica", detalle: "Generador con longitud, caracteres y medición de fuerza." },
      { nombre: "Rúbrica de scripts", tipo: "Rúbrica", detalle: "Evaluó funcionamiento, legibilidad y validación." }
    ],
    programas: ["Python 3", "Visual Studio Code", "Terminal"],
    herramientas: ["Python", "Tkinter", "random", "string"],
    recursos: [
      { nombre: "Documentación de Python", url: "https://docs.python.org/es/3/" },
      { nombre: "Tkinter", url: "https://docs.python.org/es/3/library/tkinter.html" },
      { nombre: "PEP 8 · Guía de estilo", url: "https://peps.python.org/pep-0008/" }
    ],
    evidencias: [
      {"nombre":"Ventana con CustomTkinter","detalle":"Práctica encontrada: creación de ventana, etiqueta, botón y actualización de texto mediante un evento.","url":"assets/evidencias/python.html"},
      { nombre: "BICHOBOT.py", detalle: "Chatbot de consola con respuestas humorísticas y un diccionario de palabras clave." },
      { nombre: "Contraseñas.py", detalle: "Generador de contraseñas aleatorias con medición de fuerza." },
      { nombre: "Mi primera ventana.py", detalle: "Primera interfaz gráfica con Tkinter." }
    ],
    quiz: [
      { p: "¿Qué estructura permite repetir un bloque de código?", opciones: ["if", "for o while", "def", "print"], correcta: 1, explica: "for y while son las estructuras de repetición de Python." },
      { p: "¿Qué módulo genera números aleatorios?", opciones: ["math", "random", "string", "time"], correcta: 1, explica: "random.choice y random.randint generan valores aleatorios." },
      { p: "¿Qué librería estándar se usa para crear ventanas?", opciones: ["pygame", "tkinter", "requests", "numpy"], correcta: 1, explica: "tkinter viene incluida con Python y permite crear interfaces gráficas." }
    ],
    tags: ["Python", "Tkinter", "Scripts", "Lógica"]
  },
  {
    id: "escritorio-csharp",
    n: 7,
    titulo: "Aplicaciones de Escritorio con C#: WinForms y WPF",
    corto: "Calculadoras, POS y control de notas",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Mayo – Junio 2026",
    mes: 5,
    tipo: "Módulo",
    icono: "window",
    resumen: "Creamos aplicaciones de escritorio con Windows Forms y WPF: calculadoras, conversor de remesas, control de notas, punto de venta y registro de estudiantes. Practicamos eventos, validación y diseño de interfaces.",
    aprendizajes: [
      "Diseñar ventanas con controles y eventos.",
      "Validar datos y mostrar mensajes al usuario.",
      "Separar la lógica de cálculo de la interfaz.",
      "Comparar el diseñador de WinForms con XAML en WPF."
    ],
    instrumentos: [
      { nombre: "Guía de prácticas de WinForms", tipo: "Guía", detalle: "Ejercicios de controles, eventos y validación." },
      { nombre: "Guía de prácticas de WPF", tipo: "Guía", detalle: "Ejercicios de XAML, layouts y estilos." },
      { nombre: "Rúbrica de la aplicación de escritorio", tipo: "Rúbrica", detalle: "Evaluó funcionalidad, validación, diseño y explicación del código." }
    ],
    programas: ["Visual Studio", ".NET", "Windows"],
    herramientas: ["C#", "WinForms", "WPF", "XAML"],
    recursos: [
      { nombre: "Windows Forms · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/desktop/winforms/" },
      { nombre: "WPF · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/desktop/wpf/" },
      { nombre: "C# · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" }
    ],
    evidencias: [
      { nombre: "Control de notas · WinForms", detalle: "Aplicación que calcula cotidianas, integradora y examen, y muestra si el estudiante aprobó.", img: "assets/evidencias/desktop.png" },
      { nombre: "PupuseriaPOS y CalculadoraIVA", detalle: "Prácticas de punto de venta y cálculo de impuestos." },
      { nombre: "SEMANA 3 DE WPF", detalle: "Ejercicios de cotizador, agenda y layouts en XAML." }
    ],
    quiz: [
      { p: "¿Qué lenguaje se usa principalmente con .NET?", opciones: ["Java", "C#", "PHP", "Python"], correcta: 1, explica: "C# es el lenguaje principal del ecosistema .NET." },
      { p: "¿Qué tecnología de escritorio usa XAML?", opciones: ["WinForms", "WPF", "Consola", "ASP.NET"], correcta: 1, explica: "WPF define la interfaz con XAML." },
      { p: "¿Qué evento se dispara cuando el usuario hace clic en un botón?", opciones: ["Load", "Click", "Change", "Submit"], correcta: 1, explica: "El evento Click ejecuta el manejador asociado al botón." }
    ],
    tags: ["C#", "WinForms", "WPF", "XAML", ".NET"]
  },
  {
    id: "avalonia",
    n: 8,
    titulo: "Aplicaciones Multiplataforma con Avalonia",
    corto: "El mismo XAML en Windows, Linux y macOS",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Junio 2026",
    mes: 6,
    tipo: "Módulo",
    icono: "layers",
    resumen: "Exploramos Avalonia UI para crear aplicaciones de escritorio multiplataforma con XAML y C#, reutilizando la lógica y el diseño en Windows, Linux y macOS.",
    aprendizajes: [
      "Estructura de un proyecto Avalonia.",
      "XAML, estilos y binding de datos.",
      "Diferencias y similitudes con WPF.",
      "Ejecutar la misma aplicación en distintos sistemas operativos."
    ],
    instrumentos: [
      { nombre: "Semana 3 de Avalonia (ejercicios 6–10)", tipo: "Guía", detalle: "Ejercicios de layouts, estilos y controles." },
      { nombre: "Lista de cotejo de ejecución multiplataforma", tipo: "Lista de cotejo", detalle: "Verificó que el proyecto compilara y ejecutara correctamente." }
    ],
    programas: ["Visual Studio", ".NET SDK", "Avalonia UI"],
    herramientas: ["Avalonia UI", "C#", "XAML", "MVVM"],
    recursos: [
      { nombre: "Documentación de Avalonia", url: "https://docs.avaloniaui.net/" },
      { nombre: "Avalonia · Samples", url: "https://github.com/AvaloniaUI/Avalonia" },
      { nombre: ".NET · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/" }
    ],
    evidencias: [
      {"nombre":"Avalonia · eventos y municipios dependientes","detalle":"Extracto real del formulario: inicialización, eventos de controles y selección de municipios según el departamento. El archivo también contiene validaciones adicionales.","url":"assets/evidencias/avalonia.html"},
      { nombre: "SEMANA 3 DE AVALONIA", detalle: "Ejercicios 6 a 10 con layouts y controles." },
      { nombre: "Rayo y RAYOO", detalle: "Proyectos de práctica con Avalonia." }
    ],
    quiz: [
      { p: "¿Qué lenguaje de marcado usa Avalonia para la interfaz?", opciones: ["HTML", "XAML", "CSS", "JSON"], correcta: 1, explica: "Avalonia usa XAML, igual que WPF." },
      { p: "¿En qué sistemas puede ejecutarse una app Avalonia?", opciones: ["Solo Windows", "Solo Linux", "Windows, Linux y macOS", "Solo Android"], correcta: 2, explica: "Avalonia es multiplataforma por diseño." },
      { p: "¿Qué patrón separa la vista de la lógica?", opciones: ["MVC", "MVVM", "Singleton", "Factory"], correcta: 1, explica: "MVVM separa la vista, el modelo y el view-model." }
    ],
    tags: ["Avalonia", "XAML", "C#", "Multiplataforma", "MVVM"]
  },
  {
    id: "requerimientos",
    n: 9,
    titulo: "Ingeniería de Requerimientos y Análisis de Sistemas",
    corto: "Entrevistar, documentar y modelar antes de programar",
    docente: "Javier Mineros",
    docenteId: "javier",
    periodo: "Mayo 2026",
    mes: 5,
    tipo: "Módulo",
    icono: "clipboard",
    resumen: "Levantamos requerimientos para un sistema de gimnasio (Big Strong): entrevistamos al cliente, redactamos requerimientos funcionales y no funcionales, definimos un SLA y modelamos las tablas.",
    aprendizajes: [
      "Hacer preguntas para descubrir el problema real, no solo la solución pedida.",
      "Diferenciar un requerimiento funcional de uno no funcional.",
      "Redactar un SLA con disponibilidad, soporte, seguridad y responsabilidades.",
      "Traducir los requerimientos a un modelo de datos con tablas y relaciones."
    ],
    instrumentos: [
      { nombre: "Instrumento de preguntas · Gimnasio Big Strong", tipo: "Entrevista", detalle: "Preguntas sobre proceso actual, dificultades, usuarios, funciones y presupuesto." },
      { nombre: "Requerimientos funcionales y no funcionales", tipo: "Documento", detalle: "Definición de lo que el sistema debe hacer y cómo debe funcionar." },
      { nombre: "SLA y tabla de entidades", tipo: "Documento", detalle: "Acuerdo de nivel de servicio y modelo de tablas del sistema." }
    ],
    programas: ["Microsoft Word", "Microsoft Excel", "Navegador web"],
    herramientas: ["Entrevistas", "Historias de usuario", "SLA", "Modelo relacional"],
    recursos: [
      { nombre: "Requerimientos · Microsoft Learn", url: "https://learn.microsoft.com/es-es/azure/architecture/guide/" },
      { nombre: "Requerimientos ágiles · Atlassian", url: "https://www.atlassian.com/es/agile/requirements" },
      { nombre: "Modelo entidad-relación · Visual Paradigm", url: "https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/" }
    ],
    evidencias: [
      {"nombre":"Gym Big Strong · requerimientos funcionales y no funcionales","detalle":"Documento real del sistema de gimnasio: registro de clientes, pagos, asistencia, roles y requisitos de respuesta y seguridad.","url":"assets/evidencias/requerimientos.html"},
      { nombre: "SLA del Sistema de Gestión de Gimnasio", detalle: "Disponibilidad, responsabilidades, seguridad, vigencia y firmas." },
      { nombre: "Instrumento de preguntas", detalle: "Entrevista completa con 20 preguntas y respuestas del cliente." },
      { nombre: "Tabla de entidades", detalle: "Usuarios, clientes, membresías, pagos, asistencias y rutinas." }
    ],
    quiz: [
      { p: "¿Qué describe un requerimiento funcional?", opciones: ["Lo que el sistema debe hacer", "Cómo se ve la interfaz", "El color del logo", "El presupuesto"], correcta: 0, explica: "Los funcionales describen funciones y comportamientos del sistema." },
      { p: "¿Qué mide un SLA?", opciones: ["El precio del software", "El nivel de servicio acordado", "La cantidad de tablas", "El lenguaje de programación"], correcta: 1, explica: "Un SLA define disponibilidad, soporte y responsabilidades." },
      { p: "¿Quién debe participar en el levantamiento de requerimientos?", opciones: ["Solo el programador", "El cliente o usuario y el equipo", "Solo el diseñador", "Nadie"], correcta: 1, explica: "El cliente conoce el problema y el equipo lo traduce a requisitos." }
    ],
    tags: ["Requerimientos", "SLA", "Análisis", "Modelado", "Entrevistas"]
  },
  {
    id: "poo-csharp",
    n: 10,
    titulo: "Programación Orientada a Objetos con C#",
    corto: "Clases, herencia y polimorfismo",
    docente: "Arcides Canales",
    docenteId: "arcides",
    periodo: "Febrero – Marzo 2026",
    mes: 2,
    tipo: "Módulo",
    icono: "object",
    resumen: "Aprendimos a pensar en objetos: clases, atributos, métodos, encapsulación, herencia y polimorfismo. Lo aplicamos en ejercicios y en un promedio de notas.",
    aprendizajes: [
      "Crear clases con propiedades, constructores y métodos.",
      "Encapsular datos y controlar el acceso.",
      "Reutilizar código con herencia.",
      "Sobrescribir métodos para lograr polimorfismo."
    ],
    instrumentos: [
      { nombre: "Práctica 1 · Introducción a la POO", tipo: "Práctica", detalle: "Primer proyecto de clases y objetos en C#." },
      { nombre: "Práctica 02 · Herencia y polimorfismo", tipo: "Práctica", detalle: "Jerarquía de clases y sobrescritura de métodos." },
      { nombre: "Rúbrica de POO", tipo: "Rúbrica", detalle: "Evaluó diseño de clases, encapsulación y funcionamiento." }
    ],
    programas: ["Visual Studio", ".NET"],
    herramientas: ["C#", "POO", ".NET"],
    recursos: [
      { nombre: "POO en C# · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/" },
      { nombre: "Herencia en C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/inheritance" },
      { nombre: "Polimorfismo en C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/object-oriented/polymorphism" }
    ],
    evidencias: [
      {"nombre":"POO · venta al contado y herencia","detalle":"La clase Contado hereda de Venta y calcula descuentos según el subtotal. Es un extracto del caso desarrollado 5.","url":"assets/evidencias/poo-csharp.html"},
      { nombre: "DESARROLLO_1_3381027", detalle: "Proyecto de práctica con la clase Promedio y formulario de cálculo." },
      { nombre: "Práctica 02", detalle: "Ejercicio de herencia y polimorfismo con varias clases." }
    ],
    quiz: [
      { p: "¿Qué es una clase?", opciones: ["Una variable", "Una plantilla para crear objetos", "Un archivo SQL", "Una función"], correcta: 1, explica: "La clase define la estructura y el comportamiento de los objetos." },
      { p: "¿Qué permite la herencia?", opciones: ["Borrar objetos", "Reutilizar miembros de otra clase", "Crear bases de datos", "Compilar más rápido"], correcta: 1, explica: "Una clase hija hereda atributos y métodos de la clase padre." },
      { p: "¿Qué es el polimorfismo?", opciones: ["Un tipo de variable", "El mismo método con comportamientos distintos", "Un error de compilación", "Una tabla"], correcta: 1, explica: "Permite tratar objetos distintos a través de una misma interfaz." }
    ],
    tags: ["C#", "POO", "Herencia", "Polimorfismo", ".NET"]
  },
  {
    id: "acceso-datos",
    n: 11,
    titulo: "Acceso a Datos con C# y ADO.NET",
    corto: "Conectar aplicaciones con SQL Server y Access",
    docente: "Arcides Canales",
    docenteId: "arcides",
    periodo: "Marzo – Abril 2026",
    mes: 3,
    tipo: "Módulo",
    icono: "plug",
    resumen: "Conectamos aplicaciones C# a bases de datos SQL Server y Access usando ADO.NET: conexiones, comandos, DataReader, DataSet, DataAdapter y cadenas de conexión.",
    aprendizajes: [
      "Abrir y cerrar conexiones de forma segura.",
      "Ejecutar SELECT, INSERT, UPDATE y DELETE desde C#.",
      "Leer datos con DataReader y llenar un DataSet con DataAdapter.",
      "Guardar la cadena de conexión en Web.config o App.config."
    ],
    instrumentos: [
      { nombre: "Práctica 3 A · Acceso a datos", tipo: "Práctica", detalle: "Ejercicios de conexión, consultas y formularios." },
      { nombre: "Práctica de cadena de conexión y consultas", tipo: "Práctica", detalle: "Conexión a SQL Server y Access con DataReader y DataAdapter." },
      { nombre: "Lista de cotejo de conexión", tipo: "Lista de cotejo", detalle: "Verificó cadena, consulta y cierre de conexión." }
    ],
    programas: ["Visual Studio", "SQL Server", "Microsoft Access"],
    herramientas: ["C#", "ADO.NET", "SqlConnection", "SqlDataAdapter", "DataSet"],
    recursos: [
      { nombre: "ADO.NET · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/framework/data/adonet/" },
      { nombre: "SqlConnection", url: "https://learn.microsoft.com/es-es/dotnet/api/system.data.sqlclient.sqlconnection" },
      { nombre: "Cadenas de conexión", url: "https://www.connectionstrings.com/" }
    ],
    evidencias: [
      {"nombre":"ADO.NET · conexión de la práctica Películas","detalle":"Práctica real de acceso a datos con el proveedor OleDb de ADO.NET. Se muestra el cierre de conexión según su estado; la cadena de conexión no se publica. El proyecto original requiere revisar y parametrizar sus consultas antes de usarse con datos reales.","url":"assets/evidencias/acceso-datos.html"},
      { nombre: "PELICULAS3381027", detalle: "Aplicación conectada a una base de datos Access." },
      { nombre: "Cadena_consulta_3381027", detalle: "Ejercicio de cadena de conexión y consulta a SQL Server." }
    ],
    quiz: [
      { p: "¿Qué objeto de ADO.NET abre la conexión?", opciones: ["SqlCommand", "SqlConnection", "SqlDataReader", "DataSet"], correcta: 1, explica: "SqlConnection representa la conexión a SQL Server." },
      { p: "¿Qué objeto lee los resultados fila por fila?", opciones: ["SqlDataAdapter", "SqlDataReader", "DataSet", "SqlConnection"], correcta: 1, explica: "SqlDataReader recorre los resultados de forma secuencial." },
      { p: "¿Dónde se guarda normalmente la cadena de conexión?", opciones: ["En el HTML", "En Web.config o App.config", "En el CSS", "En la carpeta de imágenes"], correcta: 1, explica: "Así se separa la configuración del código." }
    ],
    tags: ["C#", "ADO.NET", "SQL Server", "Access", "Conexiones"]
  },
  {
    id: "aspnet",
    n: 12,
    titulo: "Desarrollo Web con ASP.NET",
    corto: "Web Forms, Razor Pages, rutas y sesiones",
    docente: "Arcides Canales",
    docenteId: "arcides",
    periodo: "Abril – Mayo 2026",
    mes: 4,
    tipo: "Módulo",
    icono: "globe",
    resumen: "Construimos aplicaciones web con ASP.NET: Web Forms, Razor Pages, rutas, sesiones, cookies y APIs. Practicamos la separación entre interfaz y lógica.",
    aprendizajes: [
      "Crear páginas .aspx y su code-behind.",
      "Manejar rutas y parámetros en una aplicación web.",
      "Usar sesiones y cookies para conservar estado.",
      "Consumir o crear una API sencilla."
    ],
    instrumentos: [
      { nombre: "Práctica 05 · RutasPractica", tipo: "Práctica", detalle: "Proyecto de rutas y páginas Razor." },
      { nombre: "Práctica 3A · Cookies y sesiones", tipo: "Práctica", detalle: "Ejercicios de estado en ASP.NET." },
      { nombre: "Rúbrica de aplicación web", tipo: "Rúbrica", detalle: "Evaluó navegación, validación y conexión con datos." }
    ],
    programas: ["Visual Studio", ".NET", "IIS Express"],
    herramientas: ["ASP.NET", "C#", "Razor", "HTML/CSS", "Bootstrap"],
    recursos: [
      { nombre: "ASP.NET · Microsoft Learn", url: "https://learn.microsoft.com/es-es/aspnet/core/" },
      { nombre: "Razor Pages", url: "https://learn.microsoft.com/es-es/aspnet/core/razor-pages/" },
      { nombre: "ASP.NET Web Forms", url: "https://learn.microsoft.com/es-es/aspnet/web-forms/" }
    ],
    evidencias: [
      {"nombre":"Ositos Studios · aplicación ASP.NET Web Forms","detalle":"Captura existente del sistema Ositos Studios. La carpeta original contiene páginas .aspx y archivos C# de code-behind; evidencia compartida con el módulo de tesis.","img":"assets/evidencias/ositos.png"},
      { nombre: "RutasPractica", detalle: "Proyecto de rutas con Razor Pages." },
      { nombre: "Cookies_3381027 y HttpSessionState_3381027", detalle: "Prácticas de manejo de estado." },
      { nombre: "ApiSaludo", detalle: "Primera API con ASP.NET." }
    ],
    quiz: [
      { p: "¿Qué archivo contiene la lógica de una página Web Forms?", opciones: [".html", ".aspx.cs", ".css", ".json"], correcta: 1, explica: "El code-behind .aspx.cs contiene los eventos y la lógica." },
      { p: "¿Qué mantiene datos entre peticiones en el servidor?", opciones: ["Cookie", "Session", "QueryString", "HTML"], correcta: 1, explica: "Session guarda información del usuario en el servidor." },
      { p: "¿Qué tecnología usa Razor?", opciones: ["PHP", "ASP.NET Core", "Python", "Java"], correcta: 1, explica: "Razor es el motor de plantillas de ASP.NET Core." }
    ],
    tags: ["ASP.NET", "C#", "Razor", "Web Forms", "Sesiones"]
  },
  {
    id: "crud-sqlserver",
    n: 13,
    titulo: "CRUD y Bases de Datos: SportsPlay",
    corto: "Crear, leer, actualizar y eliminar en SQL Server",
    docente: "Arcides Canales",
    docenteId: "arcides",
    periodo: "Abril 2026",
    mes: 4,
    tipo: "Módulo",
    icono: "grid",
    resumen: "Implementamos un CRUD completo sobre SQL Server para el caso SportsPlay: crear, leer, actualizar y eliminar registros, con validaciones y análisis de resultados.",
    aprendizajes: [
      "Conectar formularios a SQL Server.",
      "Implementar las cuatro operaciones del CRUD.",
      "Validar datos y mostrarlos en un GridView.",
      "Analizar resultados y corregir errores."
    ],
    instrumentos: [
      { nombre: "Práctica 6 · GRUD1, GRUD2 y GRUD3", tipo: "Práctica", detalle: "Tres ejercicios de CRUD y análisis de resultados." },
      { nombre: "Script SportsPlay.sql", tipo: "Script", detalle: "Base de datos y tabla del caso." },
      { nombre: "Rúbrica de CRUD", tipo: "Rúbrica", detalle: "Evaluó las cuatro operaciones y la validación." }
    ],
    programas: ["Visual Studio", "SQL Server", "SSMS"],
    herramientas: ["C#", "SQL Server", "ADO.NET", "GridView"],
    recursos: [
      { nombre: "CRUD · Microsoft Learn", url: "https://learn.microsoft.com/es-es/aspnet/core/data/ef-mvc/crud" },
      { nombre: "SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { nombre: "GridView", url: "https://learn.microsoft.com/es-es/dotnet/api/system.web.ui.webcontrols.gridview" }
    ],
    evidencias: [
      {"nombre":"SportsPlay · listado y controles de edición","detalle":"Extracto ASPX del proyecto SportsPlay: ListView enlazado a un origen de datos y controles para editar y eliminar registros. No se publican credenciales ni bases de datos.","url":"assets/evidencias/crud-sqlserver.html"},
      { nombre: "GRUD1_SportsPlay_3381027", detalle: "CRUD completo con formulario y GridView." },
      { nombre: "GRUD2 y GRUD3", detalle: "Análisis de resultados y ejercicio complementario." }
    ],
    quiz: [
      { p: "¿Qué operación del CRUD usa INSERT?", opciones: ["Crear", "Leer", "Actualizar", "Eliminar"], correcta: 0, explica: "INSERT agrega un nuevo registro." },
      { p: "¿Qué control muestra una tabla en Web Forms?", opciones: ["TextBox", "GridView", "Label", "Button"], correcta: 1, explica: "GridView presenta los datos en filas y columnas." },
      { p: "¿Qué sentencia modifica un registro existente?", opciones: ["SELECT", "INSERT", "UPDATE", "DROP"], correcta: 2, explica: "UPDATE cambia los valores de las filas que cumplen la condición." }
    ],
    tags: ["CRUD", "SQL Server", "C#", "GridView", "ADO.NET"]
  },
  {
    id: "maui",
    n: 14,
    titulo: "Desarrollo Móvil con .NET MAUI",
    corto: "Apps, layouts, binding y juegos",
    docente: "Arcides Canales",
    docenteId: "arcides",
    periodo: "Junio – Octubre 2026",
    mes: 6,
    tipo: "Módulo",
    icono: "phone",
    resumen: "Creamos apps móviles y de escritorio con .NET MAUI: layouts, controles, navegación, binding, asincronía y juegos. Practicamos con suma, resta, conversor de divisas, quiz y memoria.",
    aprendizajes: [
      "Estructura de un proyecto .NET MAUI.",
      "Layouts: Stack, Grid, Flex y Absolute.",
      "Navegación entre páginas y controles.",
      "Data binding y programación asíncrona con async/await."
    ],
    instrumentos: [
      { nombre: "Prácticas 7 y 8 · Layouts y controles", tipo: "Práctica", detalle: "Ejercicios de ContentPage, NavigationPage, Flyout, Stack, Grid y Flex." },
      { nombre: "Práctica 9 · Imágenes y video", tipo: "Práctica", detalle: "Controles multimedia y autoevaluación." },
      { nombre: "Prácticas 10, 11 y 12 · Juegos, binding y CRUD", tipo: "Práctica", detalle: "Finanzas, MatchGame, Todo y CRUD." }
    ],
    programas: ["Visual Studio", ".NET MAUI", "Emulador de Android"],
    herramientas: ["C#", "XAML", "MAUI", "MVVM", "async/await"],
    recursos: [
      { nombre: ".NET MAUI · Microsoft Learn", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { nombre: "XAML en MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/xaml/" },
      { nombre: "Data binding", url: "https://learn.microsoft.com/es-es/dotnet/maui/fundamentals/data-binding/" }
    ],
    evidencias: [
      {"nombre":"MAUI · cálculo de sueldo por horas","detalle":"Página móvil real que lee horas y pago por hora, calcula el sueldo y muestra el resultado con DisplayAlert.","url":"assets/evidencias/maui.html"},
      { nombre: "OsitoGames y MatchGame", detalle: "Juego de memoria y lógica de coincidencias." },
      { nombre: "ConversorDivisas3381027", detalle: "App de conversión de divisas con interfaz XAML." },
      { nombre: "Todo3381027", detalle: "Lista de tareas con data binding y asincronía." }
    ],
    quiz: [
      { p: "¿Qué layout apila controles uno debajo del otro?", opciones: ["Grid", "StackLayout", "AbsoluteLayout", "FlexLayout"], correcta: 1, explica: "StackLayout organiza los hijos en una pila vertical u horizontal." },
      { p: "¿Qué lenguaje de marcado usa .NET MAUI?", opciones: ["HTML", "XAML", "CSS", "JSON"], correcta: 1, explica: "MAUI define las vistas con XAML." },
      { p: "¿Qué palabra clave espera una tarea asíncrona?", opciones: ["await", "yield", "return", "async void"], correcta: 0, explica: "await espera el resultado sin bloquear el hilo principal." }
    ],
    tags: ["MAUI", "C#", "XAML", "Móvil", "MVVM"]
  },
  {
    id: "linux",
    n: 15,
    titulo: "Entorno Linux para Desarrollo",
    corto: "Terminal, archivos, permisos y comandos",
    docente: "Arcides Canales",
    docenteId: "arcides",
    periodo: "Septiembre 2026",
    mes: 9,
    tipo: "Módulo",
    icono: "terminal",
    resumen: "Exploramos Linux desde la terminal: navegación, archivos, permisos, procesos y comandos básicos para preparar un entorno de desarrollo.",
    aprendizajes: [
      "Navegar el sistema de archivos con pwd, ls y cd.",
      "Crear, copiar, mover y eliminar archivos y carpetas.",
      "Entender permisos y usuarios.",
      "Instalar herramientas desde la terminal."
    ],
    instrumentos: [
      { nombre: "Manual de Linux", tipo: "Guía", detalle: "Documento con comandos, ejemplos y prácticas." },
      { nombre: "Lista de comandos", tipo: "Lista de cotejo", detalle: "Verificó el uso correcto de cada comando." }
    ],
    programas: ["Linux (Ubuntu)", "Terminal", "VirtualBox"],
    herramientas: ["Bash", "apt", "SSH"],
    recursos: [
      { nombre: "Línea de comandos para principiantes · Ubuntu", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
      { nombre: "Linux Command · tutorial", url: "https://linuxcommand.org/" },
      { nombre: "Guía de Bash", url: "https://www.gnu.org/software/bash/manual/bash.html" }
    ],
    evidencias: [
      {"nombre":"Manual de Linux · comandos básicos","detalle":"Extracto del manual entregado: ls, cd, pwd, cat y mkdir, con ejemplos. Se excluye la portada con información de estudiantes.","url":"assets/evidencias/linux.html"},
      { nombre: "Manual de Linux", detalle: "Documento con la práctica completa y explicación de comandos." }
    ],
    quiz: [
      { p: "¿Qué comando lista el contenido de un directorio?", opciones: ["cd", "ls", "pwd", "mv"], correcta: 1, explica: "ls lista archivos y carpetas." },
      { p: "¿Qué comando cambia de directorio?", opciones: ["cd", "ls", "mkdir", "rm"], correcta: 0, explica: "cd cambia el directorio actual." },
      { p: "¿Qué comando instala paquetes en Ubuntu?", opciones: ["apt install", "npm install", "pip install", "git install"], correcta: 0, explica: "apt es el gestor de paquetes de Ubuntu/Debian." }
    ],
    tags: ["Linux", "Bash", "Terminal", "Ubuntu"]
  },
  {
    id: "ositos-studios",
    n: 16,
    titulo: "Proyecto de Tesis: Agencia Digital Ositos Studios",
    corto: "Siete CRUD, una base de datos y un sistema real",
    docente: "Profe Julio",
    docenteId: "julio",
    periodo: "Agosto – Octubre 2026",
    mes: 8,
    tipo: "Tesis",
    icono: "briefcase",
    resumen: "Desarrollamos el sistema de gestión para la agencia digital Ositos Studios: login, clientes, empleados, servicios, proyectos, detalle, asignación y pagos. Usamos ASP.NET Web Forms, SQL Server y Bootstrap.",
    aprendizajes: [
      "Levantar requerimientos de un negocio real.",
      "Modelar una base de datos con siete entidades de negocio relacionadas.",
      "Implementar CRUD completos con Web Forms y ADO.NET.",
      "Documentar el sistema y exponerlo ante el jurado."
    ],
    instrumentos: [
      { nombre: "Documento Sistema.docx", tipo: "Documentación", detalle: "Explicación de conexión, login, menú, CRUD y capturas." },
      { nombre: "Base Ositos Studios.sql", tipo: "Script", detalle: "Tablas y datos del sistema." },
      { nombre: "Rúbrica de tesis y guion de exposición", tipo: "Rúbrica", detalle: "Evaluó funcionalidad, documentación y defensa." }
    ],
    programas: ["Visual Studio", "SQL Server", "SSMS", "Navegador web"],
    herramientas: ["ASP.NET Web Forms", "C#", "SQL Server", "Bootstrap", "ADO.NET"],
    recursos: [
      { nombre: "ASP.NET Web Forms", url: "https://learn.microsoft.com/es-es/aspnet/web-forms/" },
      { nombre: "SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { nombre: "Bootstrap 5", url: "https://getbootstrap.com/docs/5.3/" }
    ],
    evidencias: [
      { nombre: "CRUD Empleados · Ositos Studios", detalle: "Interfaz del sistema con navegación, formulario y operaciones CRUD.", img: "assets/evidencias/ositos.png" },
      { nombre: "Login y cadena de conexión", detalle: "Acceso al sistema y conexión a SQL Server desde Web.config.", img: "assets/evidencias/ositos-login.png" },
      { nombre: "Video de la exposición", detalle: "Ositos Studios.mp4, demostración del sistema." }
    ],
    quiz: [
      { p: "¿Cuántos CRUD tiene el sistema de Ositos Studios?", opciones: ["3", "5", "7", "10"], correcta: 2, explica: "Clientes, empleados, servicios, proyectos, detalle, asignación y pagos." },
      { p: "¿Qué gestor de bases de datos usa el sistema?", opciones: ["MySQL", "SQL Server", "SQLite", "Oracle"], correcta: 1, explica: "La base se llama Ositos_Studios y vive en SQL Server." },
      { p: "¿Qué framework CSS se usó para el diseño?", opciones: ["Tailwind", "Bootstrap", "Bulma", "Foundation"], correcta: 1, explica: "El documento menciona Bootstrap en todas las páginas." }
    ],
    tags: ["ASP.NET", "SQL Server", "Bootstrap", "Tesis", "CRUD"]
  },
  {
    id: "cooperativas",
    n: 17,
    titulo: "Exposición: Cooperativas",
    corto: "Investigar, sintetizar y comunicar",
    docente: "Profe Julio",
    docenteId: "julio",
    periodo: "Septiembre 2026",
    mes: 9,
    tipo: "Exposición",
    icono: "users",
    resumen: "Investigamos qué son las cooperativas, cómo se organizan y su impacto en El Salvador. Preparamos una exposición con ejemplos y una puesta en común.",
    aprendizajes: [
      "Definir qué es una cooperativa y cuáles son sus principios.",
      "Identificar tipos de cooperativas y sus diferencias.",
      "Reconocer su aporte económico y social.",
      "Comunicar ideas con claridad y trabajar en equipo."
    ],
    instrumentos: [
      { nombre: "Guion de exposición", tipo: "Guion", detalle: "Estructura de introducción, desarrollo y cierre." },
      { nombre: "Rúbrica de exposición oral", tipo: "Rúbrica", detalle: "Evaluó dominio del tema, claridad, material y trabajo en equipo." }
    ],
    programas: ["PowerPoint / Canva", "Navegador web"],
    herramientas: ["Investigación", "Presentación", "Oratoria"],
    recursos: [
      { nombre: "Alianza Cooperativa Internacional", url: "https://www.ica.coop/es" },
      { nombre: "Día Internacional de las Cooperativas · ONU", url: "https://www.un.org/es/observances/cooperatives-day" },
      { nombre: "CONAMYPE · El Salvador", url: "https://www.conamype.gob.sv/" }
    ],
    evidencias: [
      { nombre: "Exposición en clase", detalle: "Presentación sobre cooperativas y puesta en común con el grupo." }
    ],
    quiz: [
      { p: "¿Qué es una cooperativa?", opciones: ["Una empresa propiedad del Estado", "Una empresa de propiedad colectiva", "Un banco privado", "Una ONG"], correcta: 1, explica: "Los socios son dueños y participan democráticamente." },
      { p: "¿Qué principio cooperativo implica participación democrática?", opciones: ["Un socio, un voto", "Un dólar, un voto", "El dueño decide", "El Estado decide"], correcta: 0, explica: "Cada socio tiene un voto, sin importar su aporte." },
      { p: "¿Cuál es un aporte típico de las cooperativas?", opciones: ["Concentrar la riqueza", "Generar empleo local y apoyo mutuo", "Eliminar la competencia", "Vender solo al extranjero"], correcta: 1, explica: "Las cooperativas suelen promover empleo, ahorro y ayuda mutua." }
    ],
    tags: ["Cooperativas", "Investigación", "Exposición", "Economía social"]
  }
];

window.FLASHCARDS = [
  { frente: "¿Qué diferencia hay entre HTML, CSS y JavaScript?", reverso: "HTML estructura, CSS presenta y JavaScript da comportamiento." },
  { frente: "¿Qué hace INNER JOIN?", reverso: "Devuelve solo las filas que coinciden en ambas tablas." },
  { frente: "¿Qué es un trigger?", reverso: "Un bloque que se ejecuta automáticamente ante un INSERT, UPDATE o DELETE." },
  { frente: "¿Qué es un SLA?", reverso: "Un acuerdo de nivel de servicio: disponibilidad, soporte y responsabilidades." },
  { frente: "¿Qué diferencia hay entre requerimiento funcional y no funcional?", reverso: "El funcional dice qué hace el sistema; el no funcional dice cómo debe hacerlo." },
  { frente: "¿Qué es la encapsulación?", reverso: "Ocultar los datos internos y exponer solo lo necesario." },
  { frente: "¿Qué permite la herencia?", reverso: "Reutilizar atributos y métodos de una clase padre." },
  { frente: "¿Qué es ADO.NET?", reverso: "El conjunto de clases de .NET para acceder a bases de datos." },
  { frente: "¿Qué es una sesión en PHP o ASP.NET?", reverso: "Datos del usuario que se guardan en el servidor entre peticiones." },
  { frente: "¿Qué es un CRUD?", reverso: "Crear, leer, actualizar y eliminar registros." },
  { frente: "¿Qué es MVVM?", reverso: "Un patrón que separa modelo, vista y view-model." },
  { frente: "¿Qué es fetch?", reverso: "Una API de JavaScript para hacer peticiones HTTP." }
];
