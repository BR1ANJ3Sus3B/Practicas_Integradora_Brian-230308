# TI: Soporte en Acción

Business Model Canvas Interactivo del Proyecto Integrador. La información proviene del equipo; Archify únicamente organiza y representa el contenido. Es una propuesta de sistema, no una afirmación de que las aplicaciones ya estén implementadas.

[Abrir Canvas final](index.html) · [Primera versión](canvas-v1.html) · [Arquitectura interactiva](arquitectura.html) · [Prompt final](prompt-final.md)

## Proyecto y propósito

Videojuego educativo 2D con estética pixel art. Alex es un técnico junior recién egresado que comienza a trabajar en NovaTech Solutions. Resuelve incidentes de soporte técnico, redes, programación, bases de datos, servidores, infraestructura y seguridad informática. Durante su recorrido descubre fallas provocadas por un Saboteador interno.

El objetivo del Canvas es relacionar problema, usuarios, propuesta de valor, solución, procesos, tecnologías y resultados. Se utiliza el formato de siete componentes solicitado por la práctica.

## 1. Problema / necesidad

Los estudiantes de TI adquieren conocimientos académicos, pero no siempre pueden practicar en escenarios laborales. Necesitan experiencia práctica, relacionar teoría y práctica, mejorar el diagnóstico, resolver incidentes y desarrollar pensamiento lógico sin afectar infraestructura real.

## 2. Usuarios o beneficiarios

| Rol | Función propuesta |
|---|---|
| Jugador / estudiante | Realizar misiones, resolver incidentes, ganar XP, subir de nivel y desbloquear logros. |
| Docente / evaluador | Utilizar el juego como apoyo educativo y consultar el progreso. |
| Administrador | Gestionar usuarios, información general, configuraciones y métricas. |
| Editor de contenido | Gestionar misiones, retos y contenido educativo. |

Los roles de la plataforma son distintos de los personajes de la narrativa.

## 3. Propuesta de valor

Aprender y practicar habilidades de Tecnologías de la Información mediante un videojuego educativo que simula problemas reales de soporte, redes, programación, servidores y ciberseguridad dentro de un entorno seguro, interactivo y gamificado.

## 4. Solución propuesta

| Plataforma | Alcance |
|---|---|
| Unity | Escenarios, personajes, NPC, diálogos, misiones, puzzles, incidentes, narrativa, investigación, XP, niveles y logros. |
| Flutter | Consulta de perfil, progreso, experiencia, niveles, logros, insignias, estadísticas y notificaciones. |
| React / PWA | Gestión de usuarios y contenido, administración de misiones, seguimiento, estadísticas y paneles de información; experiencia web instalable. |

## 5. Actividades y procesos clave

**Jugador:** inicio de sesión → seleccionar misión → analizar problema → investigar → resolver incidente → evaluar solución → retroalimentación → obtener XP → actualizar nivel → comprobar logro → actualizar estadísticas.

**Contenido:** editor → crear o modificar misión → agregar contenido → guardar → publicar → misión disponible.

**Autenticación:** usuario → Keycloak → validación → rol → aplicación.

## 6. Recursos y tecnologías

| Tecnología | Función |
|---|---|
| Unity | Desarrollo del videojuego |
| Flutter | Aplicación móvil |
| React / PWA | Aplicación web instalable |
| API | Comunicación entre aplicaciones |
| Keycloak | Autenticación y autorización |
| MongoDB | Persistencia de información |
| Docker | Contenedores e infraestructura |
| Grafana | Monitoreo y métricas |
| Git / GitHub | Control de versiones y colaboración |
| GitHub Pages | Publicación de documentación y Canvas |

La arquitectura simplificada conecta usuario → Keycloak → Unity / Flutter / React-PWA → API → MongoDB. Las flechas expresan relaciones conceptuales de acceso y comunicación, no protocolos ni rutas de tráfico detalladas. Docker, Grafana, Git y GitHub son recursos complementarios. GitHub Pages hospeda esta documentación estática, no los servicios del videojuego.

## 7. Resultados y beneficios esperados

Aprendizaje práctico, experiencia simulada, mejor diagnóstico, pensamiento lógico, toma de decisiones, motivación, aplicación de conocimientos, retroalimentación inmediata, seguimiento del progreso y preparación profesional. Son beneficios buscados, no resultados medidos.

El impacto esperado es reducir la brecha entre formación y primeras experiencias laborales. El entorno permite equivocarse, analizar errores y volver a intentar sin afectar infraestructura real.

## Personajes

| Personaje | Papel |
|---|---|
| Alex | Protagonista y técnico junior controlado por el jugador. |
| Martín | Mentor y especialista experimentado del área de TI. |
| Richar | Especialista en redes, servidores, infraestructura y seguridad. |
| Marco | Relacionado con programación y desarrollo de software. |
| Sofía | Personaje secundario de las actividades de NovaTech Solutions. |
| Elena | Personaje secundario participante en distintas situaciones. |
| Saboteador | Antagonista que provoca fallas e intenta evitar ser descubierto. |

## Gamificación

XP, niveles, progreso, misiones, insignias, logros, estadísticas y retroalimentación. El desbloqueo de logros puede producir una notificación emergente inspirada en plataformas de videojuegos.

## Uso del visor

Abrir `index.html` directamente en un navegador. El artefacto contiene SVG, estilos y JavaScript y no requiere backend. Archify incluye selección de elementos, búsqueda, enfoque de relaciones, zoom, temas y exportación. El contenido autoral está en español; los controles fijos y el atributo de idioma del visor utilizan el fallback inglés de Archify.

## Modificaciones entre versiones

| # | Primera versión | Versión final |
|---|---|---|
| 1 | Todos los bloques usan el mismo tipo visual. | Se distinguen semántica y visualmente los siete componentes. |
| 2 | Usuarios resumidos como equipo educativo. | Se explicitan jugador, docente, administrador y editor. |
| 3 | Solución genérica. | Se identifican Unity, Flutter y React / PWA. |
| 4 | Servicios e infraestructura genéricos. | Se identifican API, Keycloak, MongoDB y Docker. |
| 5 | Procesos centrados en evaluación. | Se hacen visibles diagnóstico, evaluación, XP y logros. |
| 6 | Sin contexto narrativo complementario. | Se agrega tarjeta de Alex, NovaTech Solutions y Saboteador. |
| 7 | Sin áreas de aprendizaje complementarias. | Se agrega tarjeta con las disciplinas de TI. |
| 8 | Sin recursos de operación complementarios. | Se agrega tarjeta de Grafana, Git / GitHub y Pages. |

Las capturas `canvas-v1.png` y `canvas-final.png` corresponden a artefactos diferentes y se obtienen mediante el navegador, no mediante imágenes inventadas. Las especificaciones JSON permiten reproducirlas. `entrega-*.json` conserva comprobantes y hashes; `*.visual-check.json` registra las comprobaciones de navegador cuando están disponibles.

## Publicación en GitHub Pages

El flujo existente `.github/workflows/deploy-pages.yml` publica la raíz del repositorio. `business-model-canvas/index.html` redirige al archivo principal en `docs/business-model-canvas/index.html`, por lo que admite el enlace solicitado sin alterar el despliegue existente.

URL prevista: https://BR1ANJ3Sus3B.github.io/Practicas_Integradora_Brian-230308/business-model-canvas/

**Estado:** archivos preparados localmente; publicación remota pendiente de incorporar los archivos a una rama que active el flujo existente. No se ha confirmado un despliegue de esta versión.

## Reproducción

Con la habilidad Archify instalada, ejecutar desde el repositorio (sustituir `<ARCHIFY>` por su directorio):

```powershell
node <ARCHIFY>/bin/archify.mjs validate architecture docs/business-model-canvas/canvas-final.json --quality showcase --json
node <ARCHIFY>/bin/archify.mjs deliver architecture docs/business-model-canvas/canvas-final.json docs/business-model-canvas/index.html --quality showcase --json
node <ARCHIFY>/bin/archify.mjs visual-check docs/business-model-canvas/index.html --json
```

`preparar.py` reproduce las especificaciones finales a partir de la primera versión; no se necesita Python para consultar la página.
