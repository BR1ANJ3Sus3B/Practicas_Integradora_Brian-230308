# Práctica 04 · Business Model Canvas Interactivo de *TI: Soporte en Acción*

Business Model Canvas **interactivo** del Proyecto Integrador **TI: Soporte en Acción**, un videojuego
educativo 2D con estilo pixel art donde el jugador controla a **Alex**, un técnico junior recién egresado
que resuelve incidentes de soporte, redes, programación, servidores, bases de datos y ciberseguridad en la
empresa ficticia **NovaTech Solutions**, mientras descubre a un **Saboteador interno** que provoca fallos de
forma intencional.

A diferencia del Business Model Canvas tradicional de 9 bloques, este lienzo usa **solo los 7 componentes
de la práctica académica** y muestra las **relaciones** entre ellos, no tarjetas aisladas.

![Componentes](https://img.shields.io/badge/componentes-7-38bdf8) ![Relaciones](https://img.shields.io/badge/relaciones_macro-6-a78bfa) ![Infra](https://img.shields.io/badge/nodos_de_arquitectura-7-34d399) ![Dependencias](https://img.shields.io/badge/dependencias-0-2dd4bf)

## Ver el proyecto

- **En línea:** `https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/practica04/`
- **Desde el portafolio:** `https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/`
- **En local:** abre [`index.html`](./index.html) con doble clic. No necesita servidor ni instalación.

## Los 7 componentes

| # | Componente | Enfoque |
| --- | --- | --- |
| 1 | Problema / Necesidad | Brecha entre la teoría del aula y los escenarios reales de empresa |
| 2 | Usuarios o beneficiarios | Jugador/Estudiante, Docente/Evaluador, Administrador y Editor de contenido |
| 3 | Propuesta de valor | Aprender y practicar TI en un entorno seguro, interactivo y gamificado |
| 4 | Solución propuesta | Videojuego Unity, app Flutter y React PWA con misiones, logros, XP y estadísticas |
| 5 | Actividades y procesos clave | Autenticación, investigación, resolución, evaluación, XP, logros y administración |
| 6 | Recursos y tecnologías clave | Unity, Flutter, React, PWA, API, Keycloak, MongoDB, Docker, Grafana, Git, GitHub, GitHub Pages |
| 7 | Resultados, beneficios e impacto | Aprendizaje práctico, experiencia simulada y preparación para el entorno laboral |

La **propuesta de valor** se destaca como el elemento central del lienzo.

## Relaciones entre componentes

**Cadena macro** (visible en la franja *Flujo del modelo* y como curvas SVG entre las tarjetas):

```
Problema / Necesidad
→ genera →            Propuesta de valor
→ se implementa mediante → Solución propuesta
→ necesita →          Recursos y tecnologías clave
→ permiten realizar →  Actividades y procesos clave
→ son utilizados por → Usuarios o beneficiarios
→ generando →         Resultados, beneficios e impacto
```

**Relaciones específicas** (sección *Arquitectura*):

Jugador → Unity · Jugador → Flutter · Administrador/Editor → React PWA · Usuarios → Keycloak ·
Unity → API · Flutter → API · React PWA → API · API → MongoDB · Docker → servicios · Grafana → monitoreo.

## Qué se puede hacer

| Acción | Resultado |
| --- | --- |
| Hover sobre una tarjeta | Tooltip con el resumen y la idea central del componente |
| Clic en una tarjeta | Abre el detalle completo y resalta el bloque, sus vecinos y sus curvas |
| Clic en el nombre del bloque en la franja | Selecciona el componente y abre su detalle |
| Clic en un nodo de arquitectura | Resalta el nodo y sus conexiones |
| Clic en un chip de relación | Salta al componente relacionado |
| Buscador | Filtra las tarjetas por título, causa, consecuencia o tecnología |
| *Simular logro desbloqueado* | Muestra la notificación emergente de logro (concepto tipo Steam) |
| `Esc` | Cierra el detalle y limpia el resaltado |
| *Reiniciar vista* | Limpia selección, búsqueda y resaltados |

Al seleccionar **Solución propuesta** se resaltan **Unity, Flutter, React PWA y API** junto con sus
conexiones; al seleccionar **Usuarios** se resaltan los sistemas que usa cada rol.

## Secciones de la página

1. **Encabezado** pegajoso + portada del proyecto.
2. **Lienzo** con la franja de relaciones macro y los 7 componentes.
3. **Arquitectura simplificada**: Usuarios → Keycloak → Aplicaciones → API → MongoDB, más Docker, Grafana,
   Git/GitHub y GitHub Pages como infraestructura y publicación.
4. **Procesos**: flujo del jugador, de administración, de contenido y de autenticación.
5. **Gamificación y gameplay**: XP, niveles, progreso, insignias, logros, misiones, retos y estadísticas.
6. **Narrativa**: personajes del videojuego (Alex, Martín, Richar, Marco, Sofía, Elena y el Saboteador).
7. **Pie de página**: Proyecto Integrador — TI: Soporte en Acción · Desarrollo y Gestión de Software.

## Decisiones de diseño

- **Sin dependencias.** HTML, CSS y JavaScript del lado del cliente. Sin frameworks, sin CDN, sin backend y
  sin imágenes externas: se abre con doble clic y funciona sin conexión.
- **GitHub Pages primero.** Todos los recursos son estáticos y relativos, listos para publicarse.
- **El modelo vive en datos.** Los 7 componentes, las relaciones, los flujos y los personajes son arreglos de
  JavaScript; añadir información es añadir un objeto, no tocar la interfaz.
- **Curvas SVG calculadas.** Las relaciones se trazan midiendo la posición real de las tarjetas, así que se
  mantienen correctas al redimensionar la ventana.
- **Relaciones, no tarjetas aisladas.** La franja superior y las curvas resaltan el vínculo entre bloques;
  al seleccionar un componente se atenúan los demás.
- **Diseño tecnológico y legible.** Tema oscuro con acento propio por componente, rejilla tipo pixel art y
  contraste alto.
- **Responsive.** En escritorio se ve el lienzo completo con sus curvas; en tableta y móvil los bloques se
  reorganizan en columnas y las relaciones se consultan en la franja y en el detalle.
- **Accesibilidad.** Navegación por teclado, foco visible, `aria-label`, región de notificaciones y respeto de
  `prefers-reduced-motion`.

## Restricciones respetadas

No se inventaron funcionalidades, tecnologías, personajes ni módulos. Se usa **Unity** para el videojuego,
**Flutter** para la app móvil, **React/PWA** para la web, **MongoDB** como base de datos, **Keycloak** para
autenticación, **Docker** como infraestructura, **Grafana** para monitoreo y **GitHub Pages** para publicar.
**No** se usa Godot ni PostgreSQL.

## Estructura del repositorio

```
practica04/
├── index.html    # estructura y contenido base
├── styles.css    # diseño tecnológico y responsive
├── app.js        # datos del proyecto + interacción
└── README.md     # este archivo
```

---

Práctica 04 · Integradora · Autor: Brian
