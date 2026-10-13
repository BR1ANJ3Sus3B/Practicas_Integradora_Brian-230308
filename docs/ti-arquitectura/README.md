# TI: Soporte en Acción · Arquitectura interactiva

Abrir [la página principal](../../arquitectura.html) directamente en el navegador. El portafolio raíz incluye un enlace. No necesita instalar dependencias ni ejecutar un backend. El HTML, CSS y JavaScript son estáticos y compatibles con la publicación existente en GitHub Pages.

## Análisis y alcance

Se revisaron `README.md`, `docs/business-model-canvas/README.md`, `practica04/business-model-canvas/prompt-final.md`, los diagramas anteriores y `.github/workflows/deploy-pages.yml`. La documentación describe una propuesta académica: este repositorio no acredita la implementación ni el despliegue de los clientes o servicios. Las instrucciones actuales del usuario prevalecen sobre referencias históricas del Canvas.

- Clientes independientes: Unity ejecuta el videojuego; Flutter permite consultar progreso; React PWA ofrece administración y consulta. Se propone acceso del docente mediante la PWA según los requisitos actuales.
- Identidad: los tres clientes se autentican con Keycloak. El JWT vuelve a la aplicación y se envía a la API. Keycloak no es un proxy de las operaciones de negocio. La flecha Keycloak–API representa la confianza para validar identidad y roles; no implica una llamada remota por cada petición.
- API: punto central de operaciones, autorización y persistencia. Framework, rutas y contratos concretos pendientes de definir.
- MongoDB: nodo independiente para perfiles, progreso, misiones, partidas, decisiones, eventos, logros, estadísticas y registros del jugador.
- Telemetría: API → métricas → Grafana. La fuente compatible, el recolector y la estrategia de almacenamiento se dejan explícitamente por definir. Las barras de dashboard son ilustraciones, no métricas reales.
- Docker: capa de servicios en contenedores separados; no contiene las aplicaciones cliente. El almacenamiento interno de Keycloak se deja pendiente; no se presupone que utilice MongoDB.
- GitHub: repositorio, ramas, Pull Requests y documentación. GitHub Pages sirve estos archivos estáticos y el Canvas; no hospeda los procesos del backend.

El nombre Richard sigue la instrucción actual del usuario; algunas fuentes históricas utilizan otra grafía. La escena decorativa es una ilustración CSS, no una captura del videojuego. No se modificaron los contenidos históricos del Canvas.

## Interacciones

Vista inicial resumida, 14 fichas modales con responsabilidades, tecnologías, entradas, salidas y conexiones; tooltips; cinco flujos seleccionables con trazos animados; pausa; preferencias de movimiento reducido; Escape y restitución del foco; pantalla completa cuando el navegador la permite. El diagrama personalizado reorganiza las capas verticalmente hasta 650 px. La página usa desplazamiento vertical normal.

La sección Tecnologías integra el HTML original de Archify mediante un iframe de carga diferida y un enlace independiente. Su contenido está en español, pero los controles originales y el atributo de idioma del visor usan inglés. El mapa Archify resume relaciones para evitar saturación; las fichas y flujos personalizados muestran todas las conexiones cliente–identidad y cliente–API.

## Archivos y pruebas

- `../../arquitectura.html`: página final.
- `styles.css`, `app.js`: presentación, contenido e interacciones.
- `arquitectura.json`, `archify.html`: especificación y artefacto Archify validados.
- `entrega.json`: recibo de hashes, comprobaciones y revisión visual.
- `archify.visual-check.json`: evidencia automatizada del visor Archify en Edge/Chromium.
- `verificacion-web.json`: comprobaciones independientes de la página personalizada y hashes de sus archivos.
- `web.png`, `movil.png`: capturas de la interfaz.

Archify: **9/9 controles showcase, 0 errores, 0 advertencias**. Comprobación de navegador aprobada a 1440×900, 1600×1000, 1920×1080 y 2048×1320, con capturas de temas claro y oscuro. Revisión perceptual realizada sobre las capturas finales. Una ronda de compactación visual corrigió el desbordamiento vertical del primer artefacto.

Página personalizada: siete anchos comprobados entre 320 y 2048 px sin desbordamiento horizontal, 14 fichas con Escape y recuperación de foco, cinco flujos, pausa, restablecimiento, movimiento reducido e integración Archify. La pantalla completa depende de la API disponible y ofrece un mensaje si no está soportada.

Reproducción con Node, Python no requerido, y Archify instalado:

```powershell
node --check docs/ti-arquitectura/app.js
node docs/ti-arquitectura/verificar.mjs
node C:/Users/jesus/.agents/skills/archify/bin/archify.mjs validate architecture docs/ti-arquitectura/arquitectura.json --quality showcase --json
$env:ARCHIFY_CHROME='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
node C:/Users/jesus/.agents/skills/archify/bin/archify.mjs visual-check docs/ti-arquitectura/archify.html --json
```

Adaptar las rutas locales del skill y del navegador para otro equipo. Estas herramientas son de verificación y no son dependencias del sitio publicado.

## Publicación

El workflow existente publica la raíz del repositorio. Incluir `arquitectura.html`, `docs/ti-arquitectura/` y el cambio del enlace en `index.html` en una rama habilitada permite servir la página en `/Practicas_Integradora_Brian-230308/arquitectura.html`. Entrega preparada localmente; no se realizó push ni se confirmó un despliegue remoto.
