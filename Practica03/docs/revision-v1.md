# Actividad 3 — Revisión del Modelo Obtenido (Prompt v1)

**Artefacto revisado:** `bmc-crunchyroll-v1.html`
**Especificación fuente:** `bmc-crunchyroll-v1.json`
** receipts de Archify:** 9/9 comprobaciones, 0 errores, 0 advertencias (`showcase`).

---

## 1. Verificación técnica (automática,objective)

| Comprobación | Resultado |
|--------------|-----------|
| `node bin/archify.mjs validate architecture bmc-crunchyroll-v1.json --quality showcase` | `ok: true` |
| Comprobaciones del artefacto (9) | 9/9 correctas |
| Errores / advertencias de composición | 0 / 0 |
| `node bin/archify.mjs visual-check bmc-crunchyroll-v1.html` | `ok: true` |
| Contención 1440×900 · 1600×1000 · 1920×1080 · 2048×1320 | sin desbordamiento en los 4 tamaños |
| Legibilidad mínima proyectada (1440×900) | 9.40 px (mínimo requerido 6 px) |

> **Conclusión técnica:** el artefacto v1 es **geométricamente válido**.
> Los defectos que se listan abajo son de **contenido y de modelo de negocio**,
> no de maquetación. Esto es precisamente lo que la revisión debe detectar.

---

## 2. Hallazgos

### 2.1 Bloques sin contenido (crítico)

Los 9 nodos contienen **únicamente el nombre del bloque**. No hay `sublabel`,
no hay `tag`, no hay un solo dato de Crunchyroll:

| Nodo | Contenido en v1 | Lo que un BMC exige |
|------|-----------------|---------------------|
| Socios clave | *solo el título* | Nombrar studies licenciadores, Sony, tiendas de apps |
| Actividades clave | *solo el título* | Adquisición de licencias, ingesta de simulcast, CDN, moderación |
| Recursos clave | *solo el título* | Catálogo propio, marca, datos de usuarios, infraestructura |
| Propuesta de valor | *solo el título* | Acceso legal global, simultaneidad, sin anuncios, offline |
| Relaciones con clientes | *solo el título* | Autoservicio, algoritmo, comunidad, notificaciones |
| Segmentos de clientes | *solo el título* | Free vs Premium, edad, regiones, B2B |
| Estructura de costos | *solo el título* | Regalías, CDN, personal, marketing, saponificación |
| Flujos de ingresos | *solo el título* | Suscripción, anuncios, tienda, físicos, B2B |

**Impacto:** el resultado es una *plantilla vacía* del canvas, no un modelo de
negocios. Un lector no puede responder "¿cómo gana dinero Crunchyroll?".

### 2.2 Dos bloques huérfanos (crítico)

`channels` y `cost_structure` **no tienen ninguna relación** entrante ni saliente
(verificable en `bmc-crunchyroll-v1.json`: ninguna arista los referencia).

- Sin relación, **Canales** no explica cómo llega el contenido al cliente.
- Sin relación, **Estructura de costos** no explica qué sustenta el modelo.

Un lienzo de BMC Canonical exige que los nueve bloques interactúen: la
estructura de costos y los flujos de ingresos se alimentan del resto.

### 2.3 Relaciones con etiquetas genéricas (medio)

| Arista | Etiqueta | Problema |
|--------|----------|----------|
| `partners-license` | *licencias* | No dice **qué** se licencia ni a cambio de qué |
| `resources-support` | *sustenta* | No dice **cómo** |
| `activities-offer` | *produce* | No dice **qué** produce |
| `value-relationship` | *entrega* | No dice **a quién** ni **por qué canal** |
| `relationship-segment` | *atiende* | No dice **qué** servicio |
| `segment-payment` | *paga* | No dice **por qué** (suscripción, anuncio, tienda) |

Las etiquetas son verbos vacíos: describen que algo pasa, no el mecanismo.

### 2.4 Leyenda con vocabulario técnico, no de negocio (medio)

Comprobado sobre el HTML entregado: la leyenda renderiza
`Frontend`, `Backend`, `Database`, `Cloud`, `Security`, `External`.
Son categorías de un diagrama de software, no de un modelo de negocios.
Un lector de negocios ve "External" y no entiende si son clientes, socios o
reguladores. Además, la asignación de tipos fue arbitraria y no está justificada
en ninguna parte.

### 2.5 Idioma inconsistente (medio)

- `meta.locale` omitido → el HTML entregado declara `<html lang="en">` y los
  controles del visor ("Export", "Share", "Presentation") están en inglés,
  mientras que todo el contenido authored está en español.
- `meta.title` = `Business Model Canvas — Crunchyroll`: mezcla inglés y español
  en el encabezado de un entregable en español.

### 2.6 Sin guías de lectura (medio)

`meta.views` está vacío y sólo hay **1 tarjeta**. El visor ofrece un recorrido
guiado, pero el documento no lo usa: para entender el lienzo el lector debe
recorrer los 9 nodos en un solo golpe, sin saber por dónde empezar.

### 2.7 Título sin contexto (bajo)

`Business Model Canvas — Crunchyroll` no indica **qué** modelo es
(suscripción freemium de anime), ni para quién, ni la fecha de corte del
análisis.

---

## 3. Diagnóstico de raíz

Todos los hallazgos apuntan a la misma causa: **el prompt v1 describe el
*contenedor* (9 bloques, HTML) pero nunca el *contenido***. No dice:

1. qué hechos de Crunchyroll deben aparecer,
2. cuántos elementos por bloque,
3. cómo se relacionan los bloques,
4. con qué vocabulario debe etiquetarse cada rol,
5. en qué idioma,
6. con qué criterio se acepta el resultado.

Un prompt así no puede producir un modelo de negocios: produce un formulario.

---

## 4. Acciones derivadas (base del Prompt v2)

| # | Acción | Hallazgo que corrige |
|---|--------|---------------------|
| A1 | Exigir contenido mínimo por bloque (elementos concretos de Crunchyroll) | 2.1 |
| A2 | Exigir que **los 9 bloques** estén conectados por aristas etiquetadas | 2.2 |
| A3 | Exigir etiquetas de relación con **mecanismo**, no verbos vacíos | 2.3 |
| A4 | Traducir la leyenda al vocabulario del lienzo y documentar el mapeo | 2.4 |
| A5 | Fijar idioma español explícito y un títuloHomogéneo | 2.5 |
| A6 | Exigir vistas guiadas y tarjetas con el detalle por bloque | 2.6 |
| A7 | Exigir título con propuesta de valor, mercado y fecha de corte | 2.7 |
| A8 | Exigir criterios de aceptación verificables con Archify | todos |
