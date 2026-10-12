# 🎮 TI: Soporte en Acción

## Business Model Canvas Interactivo

Este directorio contiene la documentación correspondiente a la práctica **Business Model Canvas Interactivo** del Proyecto Integrador **TI: Soporte en Acción**.

El objetivo de la práctica es analizar el contexto del proyecto y representar visualmente su problema, usuarios, propuesta de valor, solución, procesos, tecnologías y beneficios utilizando **Archify** como herramienta de apoyo basada en inteligencia artificial.

---

## 📖 Descripción del proyecto

**TI: Soporte en Acción** es un videojuego educativo 2D con estética pixel art que permite a estudiantes de Tecnologías de la Información enfrentarse a situaciones simuladas similares a las que podrían encontrar dentro de una empresa.

El jugador controla a **Alex**, un técnico junior recién egresado que comienza a trabajar dentro de la empresa ficticia **NovaTech Solutions**.

Durante su primer trabajo deberá resolver incidentes relacionados con soporte técnico, redes, programación, bases de datos, servidores, infraestructura y seguridad informática.

A medida que avanza descubre que algunos problemas no son simples fallas técnicas, sino que están siendo provocados intencionalmente por un Saboteador interno.

El objetivo es combinar aprendizaje, simulación y gamificación para permitir que el jugador aplique conocimientos de TI dentro de un entorno seguro.

---

# 🎯 Objetivo

Desarrollar un Business Model Canvas Interactivo que permita visualizar de manera sencilla el contexto completo de **TI: Soporte en Acción** y mostrar la relación existente entre:

- problema;
- usuarios;
- propuesta de valor;
- solución;
- procesos;
- tecnologías;
- resultados.

Archify se utiliza únicamente como herramienta para organizar y representar visualmente la información previamente definida por el equipo.

---

# 🧩 Componentes del Canvas

El Business Model Canvas está organizado en siete componentes.

## 1. Problema / Necesidad

Los estudiantes de Tecnologías de la Información adquieren conocimientos técnicos durante su formación académica, pero no siempre tienen oportunidades de enfrentarse a escenarios similares a los que encontrarán en un entorno laboral.

Entre las principales necesidades se encuentran:

- obtener experiencia práctica;
- relacionar teoría y práctica;
- mejorar habilidades de diagnóstico;
- practicar resolución de incidentes;
- desarrollar pensamiento lógico;
- aprender dentro de un entorno seguro;
- practicar sin afectar infraestructura real.

---

## 2. Usuarios o beneficiarios

### 🎮 Jugador / Estudiante

Usuario principal del videojuego.

Puede realizar misiones, resolver incidentes, ganar experiencia, subir de nivel y desbloquear logros.

### 👨‍🏫 Docente / Evaluador

Puede utilizar el proyecto como apoyo educativo y consultar el progreso de los estudiantes.

### ⚙️ Administrador

Gestiona usuarios, información general, configuraciones y métricas.

### 📝 Editor de contenido

Gestiona misiones, retos y contenido educativo.

---

# 💎 Propuesta de valor

> Aprender y practicar habilidades de Tecnologías de la Información mediante un videojuego educativo que simula problemas reales de soporte, redes, programación, servidores y ciberseguridad dentro de un entorno seguro, interactivo y gamificado.

---

# 💡 Solución propuesta

El proyecto está compuesto por diferentes plataformas.

## 🎮 Unity

Motor utilizado para desarrollar el videojuego principal.

Incluye:

- escenarios;
- personajes;
- NPC;
- diálogos;
- misiones;
- puzzles;
- incidentes;
- narrativa;
- investigación;
- XP;
- niveles;
- logros.

---

## 📱 Flutter

Aplicación móvil complementaria.

Permitirá consultar:

- perfil;
- progreso;
- experiencia;
- niveles;
- logros;
- insignias;
- estadísticas;
- notificaciones.

---

## 🌐 React / PWA

Aplicación web progresiva utilizada principalmente para tareas administrativas y de consulta.

Permitirá:

- gestión de usuarios;
- gestión de contenido;
- administración de misiones;
- seguimiento;
- estadísticas;
- paneles de información.

---

# ⚙️ Actividades y procesos clave

## Flujo principal del jugador

```text
Jugador
   ↓
Inicio de sesión
   ↓
Seleccionar misión
   ↓
Analizar problema
   ↓
Investigar
   ↓
Resolver incidente
   ↓
Evaluar solución
   ↓
Retroalimentación
   ↓
Obtener XP
   ↓
Actualizar nivel
   ↓
Comprobar logro
   ↓
Actualizar estadísticas
```

## Flujo de contenido

```text
Editor
   ↓
Crear o modificar misión
   ↓
Agregar contenido
   ↓
Guardar
   ↓
Publicar
   ↓
Misión disponible
```

## Flujo de autenticación

```text
Usuario
   ↓
Keycloak
   ↓
Validación
   ↓
Rol
   ↓
Aplicación
```

---

# 🛠️ Recursos y tecnologías

El Proyecto Integrador utiliza las siguientes tecnologías:

| Tecnología | Función |
|---|---|
| Unity | Desarrollo del videojuego |
| Flutter | Aplicación móvil |
| React | Aplicación web |
| PWA | Experiencia web instalable |
| API | Comunicación entre aplicaciones |
| Keycloak | Autenticación y autorización |
| MongoDB | Persistencia de información |
| Docker | Contenedores e infraestructura |
| Grafana | Monitoreo y métricas |
| Git | Control de versiones |
| GitHub | Repositorio y colaboración |
| GitHub Pages | Publicación de documentación |

---

# 🏗️ Arquitectura simplificada

```text
                ┌─────────────┐
                │   Usuario   │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │  Keycloak   │
                └──────┬──────┘
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
    Unity           Flutter        React / PWA
       │               │               │
       └───────────────┼───────────────┘
                       │
                       ▼
                  ┌────────┐
                  │  API   │
                  └───┬────┘
                      │
                      ▼
                ┌───────────┐
                │  MongoDB  │
                └───────────┘
```

Servicios adicionales:

```text
Docker
   └── Infraestructura y servicios

Grafana
   └── Monitoreo y métricas

Git / GitHub
   └── Control de versiones y colaboración

GitHub Pages
   └── Publicación del Canvas interactivo
```

---

# 🎮 Personajes principales

## Alex

Protagonista y técnico junior controlado por el jugador.

## Martín

Mentor y especialista experimentado del área de TI.

## Richar

Especialista en redes, servidores, infraestructura y seguridad.

## Marco

Personaje relacionado principalmente con programación y desarrollo de software.

## Sofía

Personaje secundario relacionado con las actividades de NovaTech Solutions.

## Elena

Personaje secundario participante en diferentes situaciones del videojuego.

## Saboteador

Antagonista principal que provoca fallas dentro de la empresa intentando evitar ser descubierto.

---

# 🏆 Gamificación

TI: Soporte en Acción utiliza diferentes elementos para aumentar la motivación del jugador:

- experiencia XP;
- niveles;
- progreso;
- misiones;
- insignias;
- logros;
- estadísticas;
- retroalimentación.

Cuando un jugador desbloquea un logro puede recibir una notificación emergente inspirada en sistemas de logros de plataformas de videojuegos.

---

# 📈 Resultados y beneficios

El proyecto busca generar:

- aprendizaje práctico;
- experiencia simulada;
- mejora en diagnóstico de problemas;
- pensamiento lógico;
- toma de decisiones;
- mayor motivación;
- aplicación de conocimientos;
- retroalimentación inmediata;
- seguimiento del progreso;
- preparación para escenarios profesionales.

---

# 🌎 Impacto

TI: Soporte en Acción busca reducir la brecha entre el conocimiento adquirido durante una carrera relacionada con Tecnologías de la Información y los problemas que un estudiante puede encontrar durante sus primeras experiencias profesionales.

El videojuego proporciona un entorno controlado donde es posible equivocarse, analizar errores, aprender y volver a intentar una solución sin afectar infraestructura real.

---

# 🤖 Uso de Archify

Archify se utiliza como agente de apoyo para transformar la información analizada por el equipo en una representación visual e interactiva.

Archify no define el contenido del proyecto.

El equipo determina previamente:

- problema;
- usuarios;
- propuesta de valor;
- solución;
- procesos;
- tecnologías;
- beneficios.

Posteriormente, Archify se utiliza para organizar visualmente estos elementos.

---

# 📁 Estructura de archivos

```text
docs/
└── business-model-canvas/
    │
    ├── index.html
    ├── README.md
    ├── prompt-final.md
    ├── canvas-v1.png
    ├── canvas-final.png
    └── enlace-achify.md
```

---

# 🖼️ Evidencias

## Primera versión

La primera versión generada deberá almacenarse como:

```text
canvas-v1.png
```

## Versión final

La versión corregida deberá almacenarse como:

```text
canvas-final.png
```

---

# 🔄 Modificaciones realizadas

Entre la primera y la versión final del Canvas se deberán documentar al menos cinco modificaciones.

Ejemplo:

| # | Modificación |
|---|---|
| 1 | Se reorganizaron los siete componentes del Canvas |
| 2 | Se agregaron relaciones visuales entre bloques |
| 3 | Se diferenciaron usuarios y personajes del videojuego |
| 4 | Se agregó la arquitectura Unity, Flutter, PWA, API y MongoDB |
| 5 | Se agregaron interacciones, modales, tooltips y tarjetas expandibles |

---

# 🌐 GitHub Pages

El Business Model Canvas deberá publicarse utilizando GitHub Pages.

El archivo principal será:

```text
docs/business-model-canvas/index.html
```

La página deberá funcionar como un sitio web estático sin requerir un servidor backend.

---

# 📌 Restricciones tecnológicas

El proyecto utiliza:

```text
Unity
Flutter
React / PWA
API
Keycloak
MongoDB
Docker
Grafana
Git
GitHub
GitHub Pages
```

No utilizar:

```text
Godot
PostgreSQL
```

---

# 🔗 Business Model Canvas

Una vez publicado mediante GitHub Pages, agregar aquí el enlace:

```text
https://TU-USUARIO.github.io/TU-REPOSITORIO/business-model-canvas/
```

---

# 👨‍💻 Proyecto Integrador

**TI: Soporte en Acción**

Proyecto educativo enfocado en la aplicación práctica de conocimientos de Tecnologías de la Información mediante simulación, resolución de problemas y gamificación.