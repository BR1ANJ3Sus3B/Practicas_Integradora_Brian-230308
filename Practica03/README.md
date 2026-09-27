# Práctica 03 — Modelo de Negocio (Business Model Canvas) con Archify

Modelado del **Business Model Canvas de Crunchyroll** (herramienta multiplataforma
de streaming de anime) generado con **Archify** y publicado como HTML interactivo
mediante GitHub Pages.

---

## Entregable

| | |
|---|---|
| **Abrir el diagrama (GitHub Pages)** | [bmc-crunchyroll.html](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/Practica03/bmc-crunchyroll.html) |
| **Abrir en local** | doble clic en [`bmc-crunchyroll.html`](bmc-crunchyroll.html) |
| **Especificación fuente** | [`bmc-crunchyroll.json`](bmc-crunchyroll.json) (edítala y vuelve a entregar) |
| **Línea base v1** | [`bmc-crunchyroll-v1.html`](bmc-crunchyroll-v1.html) · [`bmc-crunchyroll-v1.json`](bmc-crunchyroll-v1.json) |
| **Vista previa** | ![Modelo de Negocio de Crunchyroll](bmc-crunchyroll.visual-check.2048x1320.light.png) |

---

## Contenido

| Archivo | Descripción |
|---------|-------------|
| `README.md` | Este documento. |
| `prompts/prompt-v1.md` | **Prompt v1** tal como se entregó a Archify, con su descomposición de intención. |
| `prompts/prompt-v2.md` | **Prompt v2** (final): qué cambió y por qué, decisiones de diseño e iteración durante la aceptación. |
| `docs/revision-v1.md` | **Actividad 3:** revisión del modelo obtenido con el prompt v1, hallazgos y acciones derivadas. |
| `docs/comparativa-v1-v2.md` | **Actividad 4:** comparación v1 → v2, receipts de entrega y alcance de la evidencia. |
| `bmc-crunchyroll.json` | Especificación del modelo final (9 bloques, 9 relaciones, 4 vistas, 3 tarjetas). |
| `bmc-crunchyroll.html` | Diagrama interactivo final. |
| `bmc-crunchyroll-v1.json` / `.html` | Línea base del prompt v1, conservada para comparar. |
| `*.visual-check.png` | Capturas de verificación en navegador (1440×900 y 2048×1320, tema claro y oscuro). |
| `*.visual-check.json` / `*.visual-check.html` | Receipt y hoja de contactos de la verificación en navegador. |

---

## Las cuatro actividades

### 1. Elección de la aplicación multiplataforma

**Crunchyroll.** Se eligió porque es una herramienta **realmente multiplataforma**
en mi vida cotidiana: la uso en el celular, en la web, en la smart TV y en la
consola, y conozco de primera mano su catálogo, sus planes y su reproducción.
Además tiene un modelo de negocio fácil de observar: nivel Free con anuncios,
nivel Premium sin anuncios y una tienda de manga y discos.

### 2. Prompt estructurado para generar el modelo con Archify

Herramienta: **Archify**, tipo de diagrama `architecture`, perfil de calidad
`showcase`. El prompt completo está en [`prompts/prompt-v1.md`](prompts/prompt-v1.md)
y su versión mejorada en [`prompts/prompt-v2.md`](prompts/prompt-v2.md).

El tipo `architecture` se eligió porque un Business Model Canvas describe
**componentes y relaciones** de un modelo, no una secuencia de llamadas
(`sequence`), ni un proceso con compuertas (`workflow`), ni un linaje de datos
(`dataflow`).

### 3. Revisión del modelo obtenido

Ver [`docs/revision-v1.md`](docs/revision-v1.md). El modelo v1 era
**geométricamente válido pero semánticamente vacío**: los 9 nodos sólo tenían el
nombre del bloque, `Canales` y `Estructura de costos` quedaban **desconectados**
y la leyenda mostraba vocabulario de software (`Frontend`, `Backend`).

### 4. Prompt editado y modelo final

Ver [`docs/comparativa-v1-v2.md`](docs/comparativa-v1-v2.md). El prompt se
reescribió para exigir contenido por bloque, conectividad de los 9 bloques,
etiquetas con mecanismo, leyenda en vocabulario de negocio, vistas guiadas y
criterios de aceptación ejecutables. El prompt además se corrigió **dos veces
más** durante la aceptación (legibilidad de escritorio y desbordamiento
vertical); los receipts de los intentos rechazados están documentados.

---

## El modelo final

### Los 9 bloques y su contenido

| Bloque | Contenido en el nodo | Detalle en tarjeta |
|--------|----------------------|--------------------|
| **Socios clave** | Licencias y distribución · Sony Group · Studios | Costos: regalías y anticipos de licencia |
| **Actividades clave** | Adquisición e ingesta · Simulcast · Recomendación | — |
| **Recursos clave** | Catálogo y marca · Datos de usuarios | Costos: CDN, ancho de banda y plataforma |
| **Propuesta de valor** | Anime legal y simultáneo · Multiidiama · Offline | — |
| **Relaciones con clientes** | Autoservicio y comunidad · Reseñas · Avisos | — |
| **Segmentos de clientes** | Fans B2C y socios B2B · Free · Premium | Segmentos: fans de 13 a 34 años, Free/Premium/B2B, América, EMEA, APAC y Latinoamérica |
| **Canales** | App, web, TV y consolas · Store · Push | — |
| **Estructura de costos** | Regalías, tecnología y marketing · CAC · CDN | Costos: 3 familias de costo |
| **Flujos de ingresos** | Suscripción, anuncios y tienda · Suscripción · Ads · B2B | Ingresos: suscripción, publicidad, Store y licencias B2B |

### Las 9 relaciones

| # | De → A | Etiqueta | Variante | Significado |
|---|--------|----------|----------|-------------|
| 1 | Socios clave → Actividades clave | `licencias anime` | emphasis | Los licenciadores y Sony dan el derecho de emisión |
| 2 | Recursos clave → Actividades clave | `sustenta` | default | Catálogo, marca y datos sostienen la operación |
| 3 | Actividades clave → Propuesta de valor | `crea oferta` | emphasis | La operación construye la oferta |
| 4 | Propuesta de valor → Relaciones con clientes | `entrega valor` | default | La oferta se entrega con la relación |
| 5 | Relaciones con clientes → Segmentos de clientes | `atiende` | default | Autoservicio, comunidad y soporte |
| 6 | Canales → Segmentos de clientes | `distribuye` | default | App, web, TV y consolas hacen llegar el contenido |
| 7 | Segmentos de clientes → Flujos de ingresos | `paga` | emphasis | Suscripción, publicidad, tienda y licencias B2B |
| 8 | Socios clave → Estructura de costos | `regalías` | dashed | Cada acuerdo de licencia genera regalías y anticipos |
| 9 | Recursos clave → Estructura de costos | `tecnología` | dashed | El catálogo y la infraestructura son costo fijo |

Las aristas 1 → 3 → 4 → 5 → 7 forman el **camino principal** de creación de
valor; la 6 muestra el canal alterno de entrega, y la 8-9 alimentan la
estructura de costos.

### Mapeo de tipos de nodo → vocabulario del lienzo

Archify clasifica los nodos por su rol técnico; el canvas los clasifica por su
rol en el modelo. La equivalencia es una **convención declarada**, no una
categoría nativa de Archify:

| Tipo Archify | Significado técnico | Etiqueta en la leyenda | Bloque(s) del canvas |
|--------------|---------------------|------------------------|---------------------|
| `external` | Actor externo | Socios y segmentos | Socios clave, Segmentos de clientes |
| `backend` | Servicio interno | Actividades, costos e ingresos | Actividades clave, Estructura de costos, Flujos de ingresos |
| `database` | Almacenamiento | Activos y datos | Recursos clave |
| `frontend` | Interfaz de usuario | Oferta al cliente | Propuesta de valor |
| `security` | Control de acceso | Confianza y relación | Relaciones con clientes |
| `cloud` | Infraestructura | Puntos de contacto | Canales |

### Vistas guiadas

El visor incluye 4 recorridos: **Creación de valor**, **Propuesta y canales**,
**Flujos de ingresos** y **Estructura de costos** (botón `LENS` / menu de vistas).

---

## Reproducir la generación

```powershell
# 1. Verificar la herramienta
node bin/archify.mjs doctor

# 2. Validar la especificación (perfil showcase)
node bin/archify.mjs validate architecture Practica03\bmc-crunchyroll.json --quality showcase --json

# 3. Entregar el HTML autocontenido
node bin/archify.mjs deliver architecture Practica03\bmc-crunchyroll.json Practica03\bmc-crunchyroll.html --quality showcase --json

# 4. Verificar el comportamiento en navegador
$env:ARCHIFY_CHROME = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
node bin/archify.mjs visual-check Practica03\bmc-crunchyroll.html --json
```

> **Idioma.** Todo el contenido autoral está en español. El esquema de Archify
> sólo admite `meta.locale: "en" | "zh-CN"`, así que **no** se declara `locale`:
> la interfaz fija del visor (Export, Share, Presentation) y `<html lang="en">`
> quedan en inglés. Es el comportamiento correcto y esperado, no un descuido.

---

## Verificación

| Comprobación | Resultado |
|--------------|-----------|
| `validate --quality showcase` | 9/9 · 0 errores · 0 advertencias |
| `deliver` | Especificación 5 268 B · Artefacto 813 731 B · SHA-256 registrado |
| Holgura mínima etiqueta↔ruta | 53 px |
| Problemas de legibilidad de escritorio | 0 |
| `visual-check` 1440×900 · 1600×1000 · 1920×1080 · 2048×1320 | `pass` en los 4, sin desbordamiento |
| Revisión perceptual de las capturas | **Pendiente de revisor humano** (las capturas PNG quedan en el repositorio) |

---

## Advertencia sobre los datos

El contenido del modelo es un **modelo de referencia elaborado con fines
académicos**, construido a partir de información pública sobre Crunchyroll y
el grupo Sony. Los nombres de socios, cifras y mecanismos se representan a
nivel de categoría para no inventar datos: no son un informe financiero ni una
descripción contractual. Antes de cualquier uso profesional deben verificarse
contra las fuentes oficiales.
