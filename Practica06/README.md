# 🎬 Crunchyroll · Secuencia de pantallas

## Práctica 06 — Diseño de experiencia de aplicación móvil

Este directorio contiene la **Práctica 06: Secuencia de pantallas** aplicada a una aplicación móvil de streaming de anime inspirada en **Crunchyroll**. El objetivo es documentar el flujo de navegación completo de la aplicación, mostrando cada pantalla, sus elementos, las acciones disponibles y las transiciones posibles entre pantallas para dos tipos de usuario.

El recurso es un sitio **HTML estático e interactivo** que puede explorarse, filtrarse, buscarse e imprimirse como PDF, y se encuentra publicado mediante **GitHub Pages**.

---

## 🎯 Objetivo

Representar de forma visual e interactiva la arquitectura de navegación de la aplicación móvil, permitiendo:

- consultar cada una de las pantallas del sistema;
- identificar el rol al que pertenece cada pantalla;
- conocer las acciones, entradas y salidas de cada pantalla;
- visualizar el mapa de relaciones entre pantallas anteriores y siguientes;
- filtrar y buscar pantallas por título o propósito;
- imprimir o exportar la documentación a PDF.

---

## 👥 Roles del sistema

| Rol | Descripción |
|---|---|
| Compartida · Ambos roles | Pantallas comunes a usuarios y administradores (acceso, sesión, recuperación). |
| Usuario / Suscriptor | Pantallas del catálogo, reproducción, listas, descargas y perfil. |
| Administrador de contenido | Módulo conceptual para la gestión del catálogo, episodios y estadísticas. |

---

## 📱 Pantallas documentadas (19)

| # | Pantalla | Rol |
|---|---|---|
| 01 | Splash | Compartida |
| 02 | Bienvenida | Compartida |
| 03 | Registro | Usuario |
| 04 | Inicio de sesión | Compartida |
| 05 | Recuperar contraseña | Compartida |
| 06 | Selección de intereses | Usuario |
| 07 | Inicio | Usuario |
| 08 | Explorar / Buscar | Usuario |
| 09 | Detalle del anime | Usuario |
| 10 | Reproductor | Usuario |
| 11 | Mi Lista | Usuario |
| 12 | Descargas | Usuario |
| 13 | Perfil del usuario | Usuario |
| 14 | Plan y suscripción | Usuario |
| 15 | Dashboard administrativo | Administrador |
| 16 | Gestión del catálogo | Administrador |
| 17 | Agregar / Editar anime | Administrador |
| 18 | Gestión de episodios | Administrador |
| 19 | Estadísticas | Administrador |

---

## 🧭 Flujo de navegación

```text
01 Splash → 02 Bienvenida → 04 Inicio de sesión

Cuenta de usuario:
07 Inicio → 08 Explorar → 09 Detalle → 10 Reproductor
         → 11 Mi Lista / 12 Descargas / 13 Perfil / 14 Plan

Cuenta administrativa:
15 Dashboard → 16 Catálogo → 17 Anime / 18 Episodios → 19 Estadísticas

Nuevo usuario:
02 Bienvenida → 03 Registro → 06 Intereses → 07 Inicio

Recuperación de acceso:
04 Inicio de sesión → 05 Recuperar contraseña → 04 Inicio de sesión
```

Las flechas de cada tarjeta indican rutas posibles; no es obligatorio recorrer todas las pantallas en orden. Las credenciales determinan el rol, y una credencial incorrecta mantiene al usuario en el inicio de sesión.

---

## ✨ Funcionalidades del sitio

- **Filtros por rol:** Todas, Compartidas, Usuario / Suscriptor y Administrador.
- **Buscador** por título o propósito de la pantalla.
- **Tarjetas de pantalla** con recreación visual tipo teléfono móvil.
- **Vista de detalle (modal):** elementos de la pantalla, pantallas anteriores y acciones con pantallas siguientes.
- **Mapa de relaciones:** columnas de pantallas anteriores, pantalla seleccionada y pantallas siguientes, con conexiones dibujadas dinámicamente.
- **Inventario** completo de pantallas.
- **Imprimir / PDF** con estilos optimizados para impresión.

---

## 🖼️ Sobre las imágenes

- Las tarjetas destacadas contienen **imágenes oficiales** publicadas en la App Store.
- El resto son **recreaciones visuales** en el estilo de Crunchyroll; no son capturas oficiales.
- El **módulo administrativo es conceptual** y se conserva la secuencia académica original.

---

## 🛠️ Tecnología

| Recurso | Uso |
|---|---|
| HTML5 | Estructura del sitio |
| CSS3 | Estilos, tema oscuro y estilos de impresión |
| JavaScript (Vanilla) | Filtros, buscador, modales y mapa de relaciones |
| SVG | Conexiones dinámicas del mapa de relaciones |
| GitHub Pages | Publicación del sitio estático |

No requiere backend, build ni dependencias externas: basta con abrir el archivo HTML.

---

## 📁 Estructura del directorio

```text
Practica06/
├── index.html                          → versión publicada en GitHub Pages
├── Crunchyroll_Secuencia_Pantallas.html → archivo fuente de la práctica
└── README.md                           → este documento
```

---

## 🌐 GitHub Pages

El sitio está publicado en:

**https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/Practica06/**

Como GitHub Pages sirve `index.html` automáticamente, la carpeta queda accesible con la URL anterior.

---

## 🚀 Publicación (GitHub Pages)

1. Subir el contenido de `Practica06/` al repositorio (rama `main`).
2. Verificar que la carpeta contenga `index.html`.
3. Ir a **Settings → Pages** y confirmar que la fuente es la rama `main` (raíz `/`).
4. Esperar la publicación y abrir la URL del proyecto.

El archivo `.nojekyll` en la raíz evita que Jekyll procese los archivos y conserva las rutas tal cual.

---

## 🔗 Enlace directo

- [Ver secuencia de pantallas](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/Practica06/)

---

## 👨‍💻 Proyecto Integrador

**Práctica 06 — Secuencia de pantallas (Crunchyroll)**
Diseño de experiencia · aplicación móvil.
