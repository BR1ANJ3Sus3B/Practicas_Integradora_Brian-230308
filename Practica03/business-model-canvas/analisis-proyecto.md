# Análisis del Proyecto Integrador — AnimeHub

> **Fases 1 y 2 de la práctica (canvas de 7 componentes).** Este documento es la
> **fuente de verdad** del Canvas. Achify (Archify) solo representa, organiza y visualiza
> esta información; no decide su contenido. Si Achify propone algo que contradice o no
> aparece aquí, se descarta o se corrige en el prompt.

- **Proyecto:** AnimeHub — plataforma web de streaming de anime
- **Comparativo de mercado:** Crunchyroll (modelo de referencia, no marca del proyecto)
- **Materia:** Integradora — Práctica 03
- **Stack acordado por el equipo:** React · Node.js/Express · MongoDB · Docker

> Este documento convive con la entrega de 9 bloques del BMC de Crunchyroll
> (`Practica03/bmc-crunchyroll.html`), que modela la empresa. Aquí el objeto es el
> **Proyecto Integrador** y los **7 componentes** fijados en el enunciado.

---

## 1. Contexto general del proyecto (94 palabras)

AnimeHub es una plataforma web de streaming de anime accesible desde navegador de escritorio y móvil. Permite registrarse, explorar un catálogo de series y películas, añadir títulos a una lista de seguimiento, retomar cada episodio donde se quedó y reproducir con calidad y subtítulos seleccionables. El negocio se apoya en planes de suscripción mensual y anual con período de prueba gratuito. Frente a plataformas consolidadas, la propuesta se diferencia por el acceso directo al catálogo y por una experiencia de usuario pensada para una comunidad de estudiantes y aficionados que consume anime por capítulos.

---

## 2. Problema / Necesidad (Componente 1)

### Causas principales

| # | Causa | Descripción |
|---|-------|-------------|
| C1 | Catálogo fragmentado | La oferta de anime está repartida en plataformas separadas por región, idioma y disponibilidad. |
| C2 | Barrera de pago inicial | No existe opción gratuita ni período de prueba: hay que pagar desde el primer capítulo para poder decidir. |
| C3 | Descubrimiento deficiente | La búsqueda no permite filtrar por género, año, estudio, idioma o estado de emisión. |
| C4 | Pérdida de progreso | El avance del capítulo no se conserva al cambiar de dispositivo ni al cerrar la sesión. |
| C5 | Gestión manual | La administración del catálogo y de las cuentas se hace de forma manual y sin trazabilidad. |

### Consecuencias actuales

- **Abandono temprano:** el usuario se va en los primeros capítulos porque no encuentra lo que busca o no puede verificar el contenido.
- **Alta carga de soporte:** consultas repetidas sobre disponibilidad, calidad y cobro.
- **Consumo en fuentes no oficiales:** al no poder pagar o no encontrar el título, el usuario recurre a fuentes no confiables.
- **Ingresos no capturados:** usuarios con intención de pago que no se convierten por falta de prueba previa.
- **Sin trazabilidad:** no se puede medir qué contenido genera conversión ni retención.

---

## 3. Usuarios o beneficiarios (Componente 2)

| # | Tipo de usuario | Descripción | Necesidades principales |
|---|-----------------|-------------|-------------------------|
| U1 | **Espectador / estudiante** | Consume anime por capítulos, desde escritorio y móvil. | Encontrar el título con filtros claros; empezar sin pagar; retomar el capítulo exacto donde se quedó; lista de seguimiento; reproducción con subtítulos. |
| U2 | **Suscriptor Premium** | Espectador que paga un plan mensual o anual. | Reproducción sin interrupciones, calidad HD, historial de visualización y descarga para ver sin conexión. |
| U3 | **Usuario registrado gratuito** | Se registra para crear su lista o aprovechar la prueba, sin plan de pago. | Registro rápido con verificación por correo; acceso limitado pero suficiente para valorar el catálogo. |
| U4 | **Administrador de catálogo** | Da de alta series, episodios y metadatos. | Alta masiva de contenido, edición de portada y sinopsis, clasificación por género y control de publicación. |
| U5 | **Administrador de plataforma** | Gestiona usuarios, planes, métricas y soporte. | Panel de métricas de reproducción y conversión; gestión de planes y estados; registro de auditoría. |

> **Agrupación en el Canvas:** U2 y U3 se agrupan bajo un mismo bloque de usuario (todos son
> espectadores registrados) y U4/U5 como *Equipo administrador*, para no fragmentar el
> modelo. El detalle completo queda en esta tabla.

---

## 4. Propuesta de valor (Componente 3)

### Frase única

> **AnimeHub reúne el catálogo de anime en un solo lugar, con prueba gratuita, navegación por capítulos y progreso de visualización que se conserva en cualquier dispositivo, para que el estudiante y el aficionado vean anime sin pagar antes de decidir.**

### En qué se diferencia

- **Un solo lugar:** un único login y un único catálogo, sin saltar entre plataformas.
- **Decidir antes de pagar:** período de prueba gratuito para valorar el contenido.
- **Progreso que te sigue:** el capítulo y el segundo exactos se guardan en la cuenta y se retoman en cualquier dispositivo.
- **Descubrimiento real:** filtros por género, año, estudio, idioma y estado.

---

## 5. Solución propuesta (Componente 4)

| # | Módulo / producto | Funcionalidades principales |
|---|-------------------|----------------------------|
| M1 | **Cuenta y autenticación** | Registro, inicio de sesión, verificación por correo, perfil, roles (RBAC), recuperación de contraseña. |
| M2 | **Catálogo y búsqueda** | Listado de series y películas, filtros por género/año/estudio/idioma/estado, portada, sinopsis y detalle de episodios. |
| M3 | **Reproductor** | Reproducción de video, calidad seleccionable, subtítulos, control de avance y marcadores. |
| M4 | **Seguimiento y lista** | Lista de seguimiento por usuario, historial de visualización, reanudación del capítulo y marcas de tiempo. |
| M5 | **Suscripciones y pagos** | Planes mensual y anual, período de prueba, cobro, estado de la suscripción y baja. |
| M6 | **Notificaciones** | Aviso de nuevos episodios de la lista y de caducidad de la prueba o del plan. |
| M7 | **Administración y métricas** | Gestión de catálogo, usuarios y planes; métricas de reproducción, conversión y retención; auditoría. |

> **Agrupación en el Canvas:** los 7 módulos se agrupan en **3 bloques**:
> *Cuenta y catálogo* (M1, M2) · *Reproductor y seguimiento* (M3, M4, M6) · *Suscripciones y pagos* (M5, M7).

---

## 6. Actividades y procesos clave (Componente 5)

| # | Actividad / proceso | Descripción |
|---|---------------------|-------------|
| A1 | Registro e inicio de sesión | El usuario se registra, verifica su correo e inicia sesión; el sistema emite el token y asigna su rol. |
| A2 | Consulta del catálogo y búsqueda | El usuario navega el catálogo y aplica filtros; el sistema devuelve resultados y el detalle de cada título. |
| A3 | Reproducción y control de calidad | El reproductor solicita el episodio, aplica calidad y subtítulos, y reporta el avance. |
| A4 | Cálculo de progreso y reanudación | El sistema guarda el capítulo, el segundo y la marca; al volver, propone retomar desde ese punto. |
| A5 | Gestión de la lista de seguimiento | El usuario añade o quita títulos; el sistema notifica la salida de nuevos episodios. |
| A6 | Suscripción, cobro y prueba | Se activa la prueba o el plan, se cobra, se controla la vigencia y se gestiona la baja. |
| A7 | Administración de contenido y métricas | El equipo administrador da de alta series y episodios, edita metadatos y revisa las métricas. |

> **Agrupación en el Canvas:** los 7 procesos se agrupan en **3 bloques**:
> *Consumo del usuario* (A1, A2, A3) · *Operación y contenido* (A6, A7) · *Medición y soporte* (A5, A7).

---

## 7. Recursos y tecnologías clave (Componente 6)

### Stack aprobado por el equipo

| Capa | Tecnología | Rol en el proyecto |
|------|------------|--------------------|
| Frontend | **React (Vite) + React Router + Tailwind CSS** | SPA responsive: catálogo, detalle, reproductor y panel de administración. |
| Backend | **Node.js + Express** | API REST que sirve catálogo, reproducción, listas y suscripciones. |
| Datos | **MongoDB + Mongoose** | Persistencia de usuarios, catálogo, episodios, listas, suscripciones y auditoría. |
| Identidad y acceso | **JWT + bcrypt + RBAC** | Autenticación stateless, hash de contraseñas y control de acceso por rol. |
| Multimedia | **HLS sobre HTTP + almacenamiento de objetos** | Empaquetado y servido del video; también de portadas y subtítulos. |
| Pagos | **Pasarela de pago con webhooks** | Cobro de los planes mensual y anual, y confirmación de la prueba. |
| Infraestructura | **Docker + Docker Compose** | Empaquetado y orquestación de API, base de datos y entorno de desarrollo. |
| Entrega | **Git + GitHub (issues, pull requests, CI)** | Control de versiones, revisión de código y despliegue. |
| Calidad | **Pruebas automatizadas + ESLint** | Verificación de la API y de los componentes críticos. |

### Recursos humanos

- **Equipo de desarrollo (frontend, backend y base de datos):** construcción de los módulos.
- **Equipo de análisis y diseño:** historias de usuario, prototipos y reglas de negocio.
- **Perfil de contenido:** carga y verificación de metadatos del catálogo.
- **Equipo de calidad y soporte:** pruebas de aceptación y atención de incidencias.

### Supuestos declarados por el equipo

- El proyecto usa **React (Vite)** como framework de frontend. Si la decisión real fuera Next.js, el Canvas debe actualizarse antes de publicar.
- El nombre de la plataforma es **AnimeHub**; Crunchyroll es solo el modelo de referencia.

---

## 8. Resultados, beneficios e impacto (Componente 7)

| # | Resultado esperado | Indicador de verificación |
|---|--------------------|---------------------------|
| R1 | Adquisición sin fricción | Registros completos con correo verificado. |
| R2 | Conversión de prueba a suscripción | Porcentaje de cuentas que pasan del plan gratuito a un plan de pago tras la prueba. |
| R3 | Retención por continuidad del consumo | Usuarios que vuelven a retomar un capítulo en los 7 días siguientes. |
| R4 | Ingresos recurrentes | Renovaciones de los planes mensual y anual. |
| R5 | Menor carga de soporte | Consultas sobre disponibilidad, calidad y cobro resueltas por el propio catálogo. |
| R6 | Catálogo operable por el equipo | Altas de contenido y métricas revisadas sin proceso manual. |
| R7 | Impacto en la comunidad | Acceso organizado a anime por capítulos, con progreso que se conserva. |

---

## 9. Relación lógica entre los componentes (Fase 2, puntos 19 y 20)

| Relación | Sentido | Justificación |
|----------|---------|---------------|
| Problema → Usuarios | El problema lo sufren los usuarios | C1-C5 producen consecuencias en U1-U3 y carga operativa en U4-U5. |
| Usuarios → Propuesta de valor | La propuesta responde a necesidades | Cada elemento de la propuesta (catálogo único, prueba, progreso, filtros) cubre una necesidad de la sección 3. |
| Propuesta de valor → Solución | La propuesta se materializa en módulos | "Prueba gratuita" → M5; "progreso que te sigue" → M3 y M4; "filtros" → M2; "un solo lugar" → M1 y M2. |
| Solución → Actividades | La solución se opera mediante procesos | M1-M7 se ejecutan a través de A1-A7. |
| Actividades → Recursos | Los procesos se apoyan en el stack | Cada proceso depende de una o más tecnologías de la sección 7. |
| Solución + Actividades + Recursos → Resultados | La operación genera resultados | A1-A4 sostienen R1-R3 y R7; A6 sostiene R2 y R4; A7 sostiene R5 y R6. |

---

## 10. Validación del contenido (Fase 5)

| # | Verificación | Cómo se comprueba | Estado |
|---|--------------|------------------|--------|
| 38 | Representa el contexto real | Cada bloque del Canvas tiene sección equivalente aquí. | Verificado: 7 bloques ↔ 7 secciones. |
| 39 | Todos los roles representados | U1-U5 cubiertos por 3 bloques de usuario. | U2/U3 juntos, U4/U5 juntos. |
| 40 | Funcionalidades del proyecto | Los 7 módulos se agrupan en 3 bloques sin pérdida. | Verificado contra la sección 5. |
| 41 | Tecnologías del equipo | Solo React, Node/Express, MongoDB, JWT, HLS, pasarela de pago, Docker, Git/GitHub, ESLint, pruebas. | Verificado contra la sección 7. |
| 42 | Congruencia valor / problema | Cada elemento de la propuesta ataca una causa (C1-C4). | Verificado contra las secciones 2 y 4. |
| 43 | Una persona externa lo entiende | 7 bloques numerados, relaciones rotuladas, vistas guiadas y tarjetas. | Comprobado en la revisión visual del HTML. |
| 44 | Correcciones finales | Ver `README.md`, tabla de modificaciones v1 → final. | Documentado. |

---

## 11. Trazabilidad de las decisiones del equipo

Este documento contiene las decisiones del equipo. Todo lo que Archify propuso y **no**
aparece aquí fue descartado. La lista de descartes y correcciones está en `README.md`
(sección *Modificaciones entre la versión 1 y la versión final*) y en `prompt-inicial.md` /
`prompt-final.md`.
