# Actividad 4 — Prompt editado y modelo final (comparativa v1 → v2)

**Especificación final:** [`bmc-crunchyroll.json`](../bmc-crunchyroll.json)
**Artefacto final:** [`bmc-crunchyroll.html`](../bmc-crunchyroll.html)
**Prompt final:** [`prompts/prompt-v2.md`](../prompts/prompt-v2.md)

---

## 1. Qué cambió en el prompt

Los ocho cambios de la tabla de la sección 1 de `prompt-v2.md` atacan los
ocho hallazgos de la revisión. El cambio que más efecto tiene es el primero:
**el prompt v1 describía el contenedor y el v2 describe el contenido**.

| # | Prompt v1 (texto) | Prompt v2 (texto) |
|---|-------------------|-------------------|
| Alcance | `genera un Business Model Canvas de Crunchyroll` | Rol, audiencia, contexto de negocio, fecha de corte y 9 requisitos de contenido **por bloque** |
| Bloques | `los 9 bloques del canvas` | 9 bloques **con 2 ideas mínimas cada uno** + lista de qué ideas |
| Relaciones | (no dice nada) | `Los 9 bloques deben estar conectados; ningún bloque queda huérfano` + camino principal explícito |
| Etiquetas | (no dice nada) | `etiqueta corta con el mecanismo, no un verbo vacío` |
| Leyenda | (no dice nada) | Mapeo explícito de los 6 tipos al vocabulario del lienzo |
| Idioma | (no dice nada) | `Escribe TODO el contenido autoral en español` + tratamiento de `meta.locale` |
| Lectura | `HTML interactivo` | 4 vistas guiadas + 3 tarjetas acotadas |
| Calidad | `HTML interactivo` | `showcase`, malla fijada y **5 criterios de aceptación ejecutables** |

---

## 2. Resultados medidos: v1 contra v2

| Métrica | v1 | v2 (final) |
|---------|----|------------|
| Nodos del canvas | 9/9 | 9/9 |
| Nodos con `sublabel` **y** `tag` | **0/9** | **9/9** |
| Aristas | 6 | **9** |
| Bloques conectados a la red | **7/9** (Canales y Costos huérfanos) | **9/9** |
| Vistas guiadas | 0 | 4 |
| Tarjetas | 1 (2 ítems) | 3 (9 ítems) |
| Etiquetas de arista con mecanismo | 0/6 | 4/9 (`licencias anime`, `crea oferta`, `entrega valor`, `regalías`, `tecnología`, `distribuye`) |
| Leyenda | `Frontend`, `Backend`, `Database`, `Cloud`, `Security`, `External` | `Oferta al cliente`, `Actividades, costos e ingresos`, `Activos y datos`, `Puntos de contacto`, `Confianza y relación`, `Socios y segmentos` |
| Título | `Business Model Canvas — Crunchyroll` | `Modelo de Negocio de Crunchyroll: Canvas de 9 bloques` |
| `viewBox` | 1555 × 730 | 1350 × 730 |
| `validate --quality showcase` | 9/9, 0 errores, 0 advertencias | 9/9, 0 errores, 0 advertencias |
| `visual-check` | `pass` en 4/4 tamaños | `pass` en 4/4 tamaños |
| Texto mínimo proyectado a 1440×900 | 9.40 px *(solo etiqueta primaria: no había subetiquetas que medir)* | 6.34 px *(incluye subetiqueta y tag)* |

> **Nota honesta sobre la última fila.** El número de v1 parece mejor, pero
> **no es comparable**: v1 no tenía texto de contexto, así que el mínimo
> proyectado se midió únicamente sobre el título de cada bloque. v2 sí incluye
> subetiqueta y etiqueta por nodo, y 6.34 px es el valor de un texto de 9 px de
> origen escalado por el visor. Ambos artefactos pasan el umbral de 6 px.

---

## 3. Receipts de entrega

### 3.1 v1 (línea base)
| Elemento | Valor |
|----------|-------|
| `specification.sha256` | `4539154f114206040ea223f634af95437c739606d71b5be9c232da0b3d7d3752` |
| `specification.bytes` | 2 414 |
| `artifact.sha256` | `fc75fd827d50b554c544d3848f22e8f276696788a9704dfac4a77b8bf74bfe41` |
| `artifact.bytes` | 805 691 |
| `validation` | `checksPassed 9 / 9`, `errors 0`, `warnings 0` |
| `visual-check` | `status: pass` en 1440×900, 1600×1000, 1920×1080, 2048×1320 |

### 3.2 v2 intento 1 — RECHAZADO (legibilidad de escritorio)
| Elemento | Valor |
|----------|-------|
| Diagnóstico | `composition/desktop-readability` (error) |
| Texto señalado | `Licencias y distribución` (subetiqueta) |
| `viewBoxWidth` / `availableDiagramWidth` | 1635 / 930 |
| `scale` | 0.5688 |
| `projectedFontPx` | **5.12** (mínimo exigido 6) |
| Reparación | `cellW 215 → 174`, `gapX 120 → 100`, etiquetas de arista acortadas |

### 3.3 v2 intento 2 — RECHAZADO (desbordamiento vertical)
| Elemento | Valor |
|----------|------- |
| Diagnóstico | `viewer/viewport-overflow` (error) en 1440×900, 1600×1000 y 1920×1080 |
| `scrollHeight` / `innerHeight` | 1178/900 · 1260/1000 · 1260/1080 |
| Causa aislada | 4 tarjetas de 4 ítems; medido sin tarjetas `scrollHeight: 900` |
| Reparación | 3 tarjetas × 3 ítems de una línea |

### 3.4 v2 final — ACEPTADO
| Elemento | Valor |
|----------|-------|
| `specification.sha256` | `27d4ee6c336a7fc68a2293498af3a9b2dbf69274117f633972ef33f1898eedbe` |
| `specification.bytes` | 5 268 |
| `artifact.sha256` | `c54547e0befad736acb5e6ca1928c8efde6a09dc10161c657cb89141002435c5` |
| `artifact.bytes` | 813 731 |
| `validation` | `checksPassed 9 / 9`, `compositionStatus: pass`, `errors 0`, `warnings 0` |
| `minLabelRouteClearance` | 53 px |
| `desktopReadabilityIssues` | 0 |
| `visual-check` | `status: pass`; `scrollHeight` = `innerHeight` en los 4 tamaños |
| Texto mínimo proyectado | 6.34 px (1440×900) · 6.55 (1600×1000) · 7.51 (1920×1080) · 9.00 (2048×1320) |

---

## 4. Comandos ejecutados (reproducibles)

```powershell
node bin/archify.mjs doctor
node bin/archify.mjs validate architecture Practica03\bmc-crunchyroll-v1.json --quality showcase --json
node bin/archify.mjs deliver  architecture Practica03\bmc-crunchyroll-v1.json Practica03\bmc-crunchyroll-v1.html --quality showcase --json
$env:ARCHIFY_CHROME = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
node bin/archify.mjs visual-check Practica03\bmc-crunchyroll-v1.html --json
node bin/archify.mjs validate architecture Practica03\bmc-crunchyroll.json --quality showcase --json
node bin/archify.mjs deliver  architecture Practica03\bmc-crunchyroll.json Practica03\bmc-crunchyroll.html --quality showcase --json
node bin/archify.mjs visual-check Practica03\bmc-crunchyroll.html --json
```

> `visual-check` requiere un Chromium. En esta máquina no hay Google Chrome,
> por lo que se указаó Microsoft Edge con `ARCHIFY_CHROME`.

---

## 5. Alcance de la evidencia

| Afirmación | Evidencia | Estado |
|------------|-----------|--------|
| La especificación y el HTML entregado son los que se verificaron | SHA-256 de `deliver` | Verificada |
| La geometría cumple 9/9 comprobaciones `showcase` | `validate` / `deliver` | Verificada |
| El visor no desborda en 4 tamaños de escritorio | `visual-check` | Verificada |
| El diagrama se ve bien y equilibrado en pantalla | — | **No verificada**: la revisión perceptual requiere un revisor humano o un modelo con lectura de imagen. Las capturas `*.visual-check.*.png` quedan en el repositorio para esa revisión. |
