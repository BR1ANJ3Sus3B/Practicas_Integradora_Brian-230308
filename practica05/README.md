# 🧩 TI: Soporte en Acción

## Diagrama de Roles de Usuario y Especificación de Requerimientos — Práctica 05

Este directorio contiene la documentación correspondiente a la **Práctica 05: Diagrama de Roles de Usuario y Requerimientos** del Proyecto Integrador **TI: Soporte en Acción**.

El objetivo de esta práctica es definir quién puede hacer qué dentro de la plataforma: los **roles de usuario**, sus responsabilidades y límites, y la lista de **requerimientos funcionales y no funcionales** que describen el comportamiento esperado del sistema.

---
<p align="center">

![Unity](https://img.shields.io/badge/UNITY-000000?style=for-the-badge&logo=unity&logoColor=white)
![Flutter](https://img.shields.io/badge/FLUTTER-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![React](https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Keycloak](https://img.shields.io/badge/KEYCLOAK-4D4D4D?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Grafana](https://img.shields.io/badge/GRAFANA-F46800?style=for-the-badge&logo=grafana&logoColor=white)

</p>


## 📖 Descripción del proyecto

**TI: Soporte en Acción** es un videojuego educativo 2D con estética pixel art que permite a estudiantes de Tecnologías de la Información enfrentarse a situaciones simuladas similares a las que podrían encontrar dentro de una empresa.

El jugador controla a **Alex**, un técnico junior recién egresado que comienza a trabajar dentro de la empresa ficticia **NovaTech Solutions**, y resuelve incidentes relacionados con soporte técnico, redes, programación, bases de datos, servidores, infraestructura y seguridad informática.

> Los **personajes de la historia** (Alex, Martín, Richar, Marco, Sofía, Elena, el Saboteador) **no son roles de cuenta**. Esta práctica distingue claramente entre los personajes de la narrativa y los roles reales con permisos sobre la plataforma.

---

## 🎯 Objetivo

Representar visualmente los **roles de usuario** de la plataforma y documentar, para cada uno, sus responsabilidades y límites de permisos. Además, formalizar los **requerimientos funcionales (RF)** y **no funcionales (RNF)** con criterios de aceptación propuestos, separando el **alcance inicial** de las funciones de **ampliación**.

---

## 👥 Roles de usuario

El diagrama contempla **6 roles**, organizados en dos fases:

| Fase | Roles |
|---|---|
| **Alcance inicial** | Jugador · Administrador |
| **Ampliación** | Docente · Evaluador · Editor de contenido · Soporte técnico |

### Detalle de cada rol

| Rol | Fase | Responsabilidades | Límites |
|---|---|---|---|
| 🎮 **Jugador** | Inicial | Resolver misiones, consultar guías y revisar su progreso, XP y resultados. | Solo accede a su información. No modifica misiones, cuentas, roles ni resultados de otros. |
| ⚙️ **Administrador** | Inicial | Gestionar cuentas y roles; crear, publicar y retirar misiones y guías. | Sus acciones quedan registradas. No otorga XP arbitrariamente ni edita contraseñas visibles. |
| 👨‍🏫 **Docente** | Ampliación | Asignar misiones a sus grupos y consultar el avance de estudiantes autorizados. | No accede a grupos ajenos, no administra roles ni modifica resultados. |
| 📝 **Evaluador** | Ampliación | Consultar resultados autorizados y registrar retroalimentación por jugador y misión. | La retroalimentación es aparte: no cambia XP ni resultados. No administra cuentas. |
| ✏️ **Editor de contenido** | Ampliación | Crear y editar borradores de misiones y guías y enviarlos a revisión. | No gestiona cuentas ni roles; la publicación final la hace el administrador. |
| 🛠️ **Soporte técnico** | Ampliación | Atender casos de acceso o funcionamiento y documentar soluciones. | No consulta contraseñas ni altera XP, resultados o roles. |

---

## 🖼️ Diagrama interactivo

El entregable principal es un **documento HTML interactivo y autocontenido** (sin backend) que incluye:

- el **diagrama de los 6 roles** conectados con la plataforma;
- filtros por **Alcance inicial** y **Ampliación**;
- la **descripción de cada rol** con responsabilidades y límites;
- las **tablas de requerimientos funcionales y no funcionales** con criterios de aceptación;
- un botón para ver la **imagen original** de referencia.

[🔗 Ver diagrama interactivo (GitHub Pages)](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/practica05/Diagrama_Roles_TI_Soporte_en_Accion.html)

> **Nota:** las descripciones y los requerimientos son una **propuesta de especificación**. Desarrollan el alcance del diagrama y no representan funciones ya implementadas. Las metas cuantitativas deben validarse con el equipo.

---

## ✅ Requerimientos funcionales

Definen las acciones que debe permitir el sistema. El alcance inicial cubre al **jugador**, al **administrador** y las funciones comunes; las de docente, evaluador, editor y soporte técnico se incorporan como **ampliación**.

| ID | Requerimiento | Alcance / aplicación |
|---|---|---|
| RF-01 | Inicio y cierre de sesión | Inicial · Todos los roles habilitados |
| RF-02 | Autorización por rol | Inicial · Todos los roles habilitados |
| RF-03 | Gestión de cuentas y roles | Inicial · Administrador |
| RF-04 | Catálogo de misiones | Inicial · Jugador |
| RF-05 | Ejecución de misiones | Inicial · Jugador |
| RF-06 | Guardado de progreso | Inicial · Jugador |
| RF-07 | Consulta de guías | Inicial · Jugador |
| RF-08 | Progreso y experiencia (XP) | Inicial · Jugador |
| RF-09 | Administración de contenido | Inicial · Administrador |
| RF-10 | Recuperación de acceso | Inicial · Todos los roles habilitados |
| RF-11 | Registro de acciones relevantes | Inicial · Administrador / Sistema |
| RF-12 | Asignación de misiones a grupos | Ampliación · Docente |
| RF-13 | Seguimiento educativo | Ampliación · Docente |
| RF-14 | Evaluación y retroalimentación | Ampliación · Evaluador |
| RF-15 | Preparación y revisión de contenido | Ampliación · Editor / Administrador |
| RF-16 | Atención de incidentes | Ampliación · Usuarios / Soporte técnico |

**16 requerimientos funcionales.** Cada uno incluye su **criterio de aceptación** en el diagrama interactivo.

---

## 🛡️ Requerimientos no funcionales

Definen la calidad y las condiciones de operación del sistema. Son condiciones transversales que acompañan a las funciones habilitadas en cada fase.

| ID | Requerimiento | Alcance / aplicación |
|---|---|---|
| RNF-01 | Seguridad de la información | Desde el alcance inicial |
| RNF-02 | Privacidad y acceso mínimo | Desde el alcance inicial |
| RNF-03 | Rendimiento | Meta propuesta |
| RNF-04 | Disponibilidad | Meta propuesta |
| RNF-05 | Usabilidad y accesibilidad | Desde el alcance inicial |
| RNF-06 | Adaptabilidad y compatibilidad | Meta propuesta |
| RNF-07 | Integridad y recuperación ante errores | Desde el alcance inicial |
| RNF-08 | Respaldo y restauración | Meta propuesta |
| RNF-09 | Mantenibilidad | Desde el alcance inicial |
| RNF-10 | Observabilidad y trazabilidad | Desde el alcance inicial |

**10 requerimientos no funcionales.** Los valores marcados como *meta propuesta* son objetivos de diseño pendientes de validación.

---

## 📁 Estructura de la Práctica 05

```text
practica05/
│
├── README.md
├── Diagrama_Roles_TI_Soporte_en_Accion.html   # Entregable principal (interactivo)
│
├── assets/
│   ├── seis-roles-soporte-ti.png
│   └── ti-soporte-en-accion-mongodb.png
│
└── evidencias / prototipos móviles
    ├── 6.png
    ├── movil1.png ... movil13.png
```

---

## 📸 Evidencias

### Imagen de referencia de los roles

![Seis roles en acción para soporte TI](<assets/seis-roles-soporte-ti.png>)

### Visión general de la plataforma

![TI: Soporte en acción con MongoDB](<assets/ti-soporte-en-accion-mongodb.png>)

### Prototipos de interfaz móvil

Exploración visual de las pantallas de la aplicación móvil complementaria (Flutter):

|  |  |  |
|---|---|---|
| ![](<movil1.png>) | ![](<movil2.png>) | ![](<movil3.png>) |
| ![](<movil4.png>) | ![](<movil5.png>) | ![](<6.png>) |
| ![](<movil7.png>) | ![](<movil8.png>) | ![](<movil9.png>) |
| ![](<movil10.png>) | ![](<movil11.png>) | ![](<movil12.png>) |

![Vista móvil adicional](<movil13.png>)

---

## 🌐 GitHub Pages

La Práctica 05 se encuentra publicada mediante **GitHub Pages**. El diagrama es un archivo HTML estático y **no requiere un servidor backend** para visualizarse.

- **Diagrama de roles y requerimientos:**
  https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/practica05/Diagrama_Roles_TI_Soporte_en_Accion.html

---

## 🛠️ Restricciones tecnológicas del proyecto

```text
Unity        →  Videojuego principal
Flutter      →  Aplicación móvil
React / PWA  →  Aplicación web / administración
API          →  Comunicación entre aplicaciones
Keycloak     →  Autenticación y autorización
MongoDB      →  Persistencia de información
Docker       →  Contenedores e infraestructura
Grafana      →  Monitoreo y métricas
Git / GitHub →  Control de versiones y colaboración
GitHub Pages →  Publicación de la documentación
```

No utilizar:

```text
Godot
PostgreSQL
```

---

## 🔗 Enlaces

- **Diagrama interactivo (Práctica 05):** [ver](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/practica05/Diagrama_Roles_TI_Soporte_en_Accion.html)
- **Práctica 04 (Business Model Canvas):** [ver](../practica04/README.md)
- **Portafolio del proyecto:** [ver](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/)

---

# 👨‍💻 Proyecto Integrador

## TI: Soporte en Acción

Proyecto educativo enfocado en la aplicación práctica de conocimientos de Tecnologías de la Información mediante simulación, resolución de problemas y gamificación.

**Práctica 05 — Diagrama de Roles de Usuario y Especificación de Requerimientos**
