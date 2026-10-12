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

## Uso del Canvas web

Abrir `index.html` directamente en un navegador manteniendo `styles.css` y `canvas.js` en el mismo directorio. No requiere instalación, compilación, backend, conexión a una API ni fuentes externas. La interfaz principal y su atributo `lang` están en español.

- Seleccionar cualquiera de los **siete** componentes resalta sus relaciones y tecnologías.
- «Explorar puntos clave» expande una tarjeta; «Ver todos los detalles» abre su modal completo.
- La propuesta de valor tiene una posición central y un tratamiento visual destacado.
- La arquitectura permite seleccionar roles y tecnologías, con tooltips, conexiones y descripciones. Jugador se conecta con Unity y Flutter; administrador y editor con React / PWA; todos los roles con Keycloak. No se asigna al docente una aplicación que el equipo no especificó.
- Los cuatro procesos tienen pasos seleccionables y navegación hacia el siguiente paso. Las pestañas admiten flechas, Inicio y Fin; los modales se cierran con Escape y restituyen el foco.
- Los siete personajes tienen detalles propios y están separados de los roles de usuario.
- La notificación de logro es una **demostración de interfaz**, no una misión o logro nuevo del videojuego.
- En móvil, los componentes siguen verticalmente el orden de sus relaciones. La página respeta la preferencia de movimiento reducido.

Archify se utilizó para el esquema conceptual previo y el diagrama de arquitectura complementario. La nueva interfaz HTML/CSS/JavaScript amplía la presentación y las interacciones requeridas por el equipo. Los visores históricos de Archify conservan sus controles originales en inglés y no se confunden con la interfaz actual.

## Modificaciones entre versiones

| # | Primera versión | Versión final |
|---|---|---|
| 1 | Diagrama resumido de siete nodos. | Siete componentes con resumen, expansión y modal completo. |
| 2 | Jerarquía visual uniforme. | Propuesta de valor central, colores por componente e interfaz tecnológica oscura. |
| 3 | Relaciones generales. | Cadena exacta problema → valor → solución → recursos → procesos → usuarios → resultados. |
| 4 | Usuarios resumidos como equipo educativo. | Cuatro roles con funciones y conexiones a las aplicaciones definidas. |
| 5 | Solución genérica. | Arquitectura seleccionable: Unity, Flutter, React / PWA, API, Keycloak y MongoDB. |
| 6 | Sin procesos paso a paso. | Flujos completos de jugador, administración, contenido y autenticación. |
| 7 | Sin detalles narrativos. | Siete personajes, incidentes y acciones del Saboteador; roles separados de personajes. |
| 8 | Sin demostración de gamificación. | Notificación de logro ilustrativa, identificada como demostración y cerrable. |
| 9 | Visor de diagrama de escritorio. | Reorganización vertical en móvil, navegación por teclado y movimiento reducido. |
| 10 | Contexto tecnológico resumido. | Tecnologías y funciones completas, con infraestructura, monitoreo y publicación. |

Las capturas `canvas-v1.png` y `canvas-final.png` corresponden a la primera versión Archify y a la página actual, respectivamente. Son capturas reales de navegador. `canvas-movil.png`, `vista-escritorio.png`, `vista-movil.png`, `arquitectura-web.png` y `arquitectura-movil.png` complementan la evidencia actual.

La fuente actual es `index.html` + `styles.css` + `canvas.js`. `verificacion-web.json` identifica sus hashes y registra las pruebas funcionales y de adaptación. `validacion.md` distingue esa evidencia de la validación histórica de Archify. `canvas-final.json` y `preparar.py` pertenecen al diagrama previo; no generan la nueva web.

## Publicación en GitHub Pages

El flujo existente `.github/workflows/deploy-pages.yml` publica la raíz del repositorio. `business-model-canvas/index.html` redirige al archivo principal en `docs/business-model-canvas/index.html`, por lo que admite el enlace solicitado sin alterar el despliegue existente.

URL prevista: https://BR1ANJ3Sus3B.github.io/Practicas_Integradora_Brian-230308/business-model-canvas/

**Estado:** archivos preparados localmente; publicación remota pendiente de incorporar los archivos a una rama que active el flujo existente. No se ha confirmado un despliegue de esta versión.

## Verificación y reproducción

Para consultar el Canvas, abrir `index.html`. Para repetir las pruebas locales en un equipo con Node, Archify y un navegador Chromium instalado:

```powershell
$env:ARCHIFY_DIR = 'RUTA/DE/ARCHIFY'
$env:CANVAS_BROWSER = 'RUTA/DEL/NAVEGADOR.exe'
node --check docs/business-model-canvas/canvas.js
node docs/business-model-canvas/verificar.mjs
```

Las pruebas abren el archivo directamente, comprueban ocho tamaños de 320 a 2048 píxeles y 23 interacciones, y generan las capturas. No hay que instalar estas herramientas para visitar la página publicada.

El artefacto Archify anterior se conserva sin modificar en `canvas-archify.html` y `historial-archify/index.html`, con sus recibos históricos. La arquitectura complementaria sigue en `arquitectura.html`.
