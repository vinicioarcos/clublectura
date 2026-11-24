# Club de Lectura Economía UTC

Web estática responsive lista para desplegar en Vercel. HTML, CSS y JavaScript, sin dependencias ni compilación. Incluye borradores de estatutos (25 artículos), reglamento (21 artículos), guía de lectura, privacidad y tres formatos de trabajo: la solicitud de ingreso, la ficha de aporte individual y la ficha operativa de programación interuniversitaria. Versión inicial: 24 de noviembre de 2026.

## Desplegar en Vercel

1. Descomprimir el ZIP y subir el contenido de `club-lectura-utc` a un repositorio propio en GitHub.
2. En Vercel, crear un proyecto e importar ese repositorio.
3. Seleccionar **Other** como framework. Root Directory: la carpeta que contiene `vercel.json` (si se subió el contenido directamente, es la raíz).
4. No definir comando de compilación ni de instalación. Output Directory: `public`, ya declarado en `vercel.json`.
5. Desplegar. Vercel asignará una URL. No se necesita base de datos, variables de entorno ni credenciales dentro del código.

Para generar las copias en Word hace falta pandoc; no es necesario para desplegar ni para ver la web, solo para regenerar los `.docx`.

Alternativa con Vercel CLI instalado: ejecutar `vercel` desde esta carpeta para crear una vista previa y `vercel --prod` para publicar después de revisarla. La cuenta se autentica mediante los mecanismos oficiales de Vercel, nunca escribiendo tokens en los archivos.

## Vista local

Abrir `public/index.html` en el navegador o, desde la raíz del proyecto, ejecutar `python3 -m http.server 8000 --directory public` y visitar http://localhost:8000. La web no necesita conexión externa para presentar su contenido.

## Contenido y edición

- `public/index.html`: textos, encuentros interuniversitarios, lecturas previas y secciones.
- `public/styles.css`: colores, tipografía y diseño responsive.
- `public/contenido.js`: capítulos y URL de inscripción (`registroUrl`). Solo se activan direcciones HTTPS válidas. Dejar vacío hasta disponer de un formulario real. `correoContacto` está reservado para una ampliación y no se muestra automáticamente.
- `public/app.js`: búsqueda de lecturas y avance personal.
- `public/documentos/ficha-ingreso.md`: solicitud de ingreso que pide el Artículo 7 de los estatutos. La versión HTML es un formulario que se llena en el navegador y no envía datos: `public/ficha-ingreso.js` solo evita el envío accidental, limpia los campos y avisa antes de salir.
- `public/documentos/ficha-aporte.md`: formato del aporte individual que pide el Artículo 7 del reglamento.
- `public/documentos/ficha-programacion.md`: ficha operativa que exige el Artículo 13 antes de cada colaboración interuniversitaria.
- `public/documentos/*.md`: fuente editorial de cada documento, en texto Markdown.
- `public/documentos/*.docx`: copias en Word que se ofrecen con el botón «Descargar en Word». Son artefactos generados, no se editan a mano.
- `public/documentos/*.html`: documentos listos para leer e imprimir o guardar como PDF desde el navegador.
- `public/documentos.css`: formato de impresión de documentos.

Los documentos HTML y Markdown son copias editoriales equivalentes: actualizar ambos al modificar la normativa. Tras cambiar cualquier `.md`, regenerar las copias en Word con `sh generar-docx.sh` (requiere pandoc) y volver a desplegar; si no, el Word descargable queda desactualizado respecto a la web. Las preguntas de la guía están también en `contenido.js`; mantenerlas sincronizadas. Las páginas citadas son de la numeración impresa del libro.

## Decisiones editoriales pendientes

- Ratificar la lectura de Nuestro mundo social (Adolfo Figueroa, PUCP, 2008).
- Confirmar calendario, plataforma, universidades participantes y responsables de cada institución.
- Aprobar estatutos y reglamento mediante acta y la validación institucional que corresponda. Los porcentajes, plazos y mecanismos son propuestas; no se atribuyen a normativa UTC vigente.
- Configurar inscripción si se desea y verificar sus condiciones de privacidad.
- Confirmar autorización antes de incorporar logotipos oficiales o anunciar certificaciones.

## Alcance real

El sitio no registra asistentes, no envía formularios ni correos y no incluye panel administrativo. El seguimiento utiliza localStorage en el navegador de cada visitante y puede reiniciarse; no se sincroniza entre dispositivos. No hay analítica de terceros. Los proveedores de alojamiento pueden procesar registros técnicos según sus políticas. El aviso de privacidad describe este alcance.

Las colaboraciones interuniversitarias se presentan como actividades en preparación, no como convenios aprobados. Cada una se acuerda mediante la ficha operativa de programación interuniversitaria, con modalidad virtual garantizada y visitas opcionales. No se inventaron fechas, enlaces de reunión, correos o compromisos de financiamiento.

No se distribuye el PDF protegido del libro ni portadas editoriales. Las representaciones de libros son composiciones gráficas propias hechas en CSS. El código no usa recursos externos.

## Verificación

Revisar navegación móvil, búsqueda con y sin resultados, marcado y persistencia de capítulos, reinicio con cancelación, documentos e impresión. Comprobar que el contenido y las fechas estén aprobados antes de difundir la URL como canal institucional.
