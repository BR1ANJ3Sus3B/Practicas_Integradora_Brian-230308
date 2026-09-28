# Comparativa v1 → v2 final — BMC de AnimeHub

Documento de aceptación de la línea base
[`bmc-animehub-v1.json`](../bmc-animehub-v1.json) frente al entregable final
[`bmc-animehub-final.json`](../bmc-animehub-final.json).

La v2 no es un lienzo nuevo: es **la v1 corregida** durante la aceptación. Este
documento registra qué se pidió, qué se rechazó y por qué, con los receipts.

---

## 1. Resumen del cambio

| | v1 (línea base) | v2 final |
|---|---|---|
| Especificación | 7 826 B | 12 287 B |
| Artefacto HTML | 832 160 B | 839 454 B |
| Componentes | 21 | 21 |
| Regiones (7 bloques) | 7 | 7 |
| Relaciones | 7 | 10 |
| Vistas guiadas | 3 | 5 |
| Tarjetas | 3 | 4 |
| `animation` | `none` | `trace` |
| `sources` por nodo | no | **sí, los 21** |
| `meta.repository` | no | **sí** |
| `meta.subtitle` | no | no (ver §4) |
| `validate --quality showcase` | 9/9 · 0 · 0 | 9/9 · 0 · 0 |
| Holgura mínima etiqueta↔ruta | 108.5 px | 46 px |
| `visual-check` | `pass` × 4 | `pass` × 4 |

## 2. Qué aporta la v2

1. **Trazabilidad de la evidencia.** Los 21 nodos declaran `sources` que apuntan
   a `analisis-proyecto.md` con línea exacta. La validación exige
   `meta.repository` y la comprobación se ejecuta con `--repo-root`, de modo que
   si el archivo o la línea dejan de existir la validación **falla** en vez de
   servir una referencia muerta.
2. **Las tres relaciones que faltaban.** La v1 recorría la cadena principal
   (problema → usuarios → propuesta → solución → procesos → resultados). La v2
   añade las tres ramificaciones que faltaban hacia el modelo de ingresos:
   `recursos → adquisición`, `recursos → conversión` y `recursos → ingresos`.
   Con eso el lienzo muestra **de dónde sale el dinero**, que era el hueco
   semántico más visible de la v1.
3. **Dos vistas guiadas más.** `modelo-de-ingresos` y
   `plataforma-y-tecnologia` cubren las dos preguntas que un lector hace después
   de la cadena de valor: *¿cómo se factura?* y **¿con qué está construido?*.
4. **Grosor de arista con significado.** `width` diferencia el camino principal
   (2.2) de las aristas de apoyo (1.6) y de las terciarias (1.3), de modo que el
   ojo sigue la cadena principal sin leer la leyenda.
5. **Animación `trace`.** Recorre las aristas al entrar en una vista, lo que
   hace legible el orden de la cadena. No añade altura al visor (§4).

## 3. Las 10 relaciones finales

| # | De → A | Etiqueta | Ancho | Variante |
|---|--------|----------|-------|----------|
| 1 | Problema → Usuarios | `viven el problema` | 2.2 | emphasis |
| 2 | Usuarios → Propuesta de valor | `motivan la propuesta` | 2.2 | emphasis |
| 3 | Propuesta de valor → Solución | `se materializa en` | 2.2 | emphasis |
| 4 | Solución → Actividades | `se opera mediante` | 1.6 | default |
| 5 | Actividades → Recursos | `se apoya en` | 1.6 | default |
| 6 | Actividades → Recursos | `opera sobre` | 1.3 | default |
| 7 | Recursos → Resultados | `genera registro` | 1.3 | default |
| 8 | Recursos → Resultados | `habilita` | 1.6 | default |
| 9 | Recursos → Resultados | `sostiene` | 1.3 | default |
| 10 | Actividades → Resultados | `produce` | 2.2 | emphasis |

Las aristas 1 → 2 → 3 → 4 → 5/6 → 7/8/9, más la 10 por el corredor inferior,
forman el camino completo. **La relación directa Solución → Resultados sigue
omitida como arista**: en el modelo de negocio existe, pero su ruta recta cruza
la región de Recursos. Se documenta como dependencia narrativa en las tarjetas
y en el [`README.md`](../README.md) en vez de dibujar una arista ilegible.

## 4. La corrección de aceptación que decidió el diseño

El primer `visual-check` de la v2 **falló** en tres de los cuatro viewports:

| Viewport | `scrollHeight` | Estado |
|----------|----------------|--------|
| 1440×900 | 990 | `viewer/viewport-overflow` |
| 1600×1000 | 1072 | `viewer/viewport-overflow` |
| 1920×1080 | 1080 | `pass` |

El primer diagnóstico apuntaba a las tarjetas: el visor usa
`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, y 5 tarjetas
exigen 1400 px, más que los 1376 px de ancho de lectura, así que envolvían a
dos filas. Reducirlas a 4 **no movió la cifra ni un píxel** (990 antes y
después), lo que descartó esa hipótesis.

El aislamiento por pares dio el resultado decisivo:

| Variante | `subtitle` | `animation` | `scrollHeight` 1440×900 |
|----------|-----------|-------------|-----------------------|
| A | ausente | `none` | **900** · `pass` |
| B | largo | `none` | 990 · `fail` |
| C | corto | `trace` | 972 · `fail` |
| D | ausente | `trace` | **900** · `pass` |

**El `subtitle` costaba ~72 px fijos; la animación `trace` no costaba nada.**
La causa es que `.header` declara `padding-right: 29.5rem` para dejar sitio a la
insignia de preset, así que el subtítulo se recomprime y salta de línea, y el
`.diagram-container` aplica
`padding-bottom: calc(0.75rem + var(--archify-nav-reserve))` calculado sobre la
altura resultante. Un subtítulo corto bajaba a 972, pero seguía 72 px por
encima.

La corrección fue **quitar `meta.subtitle`**, no recortar texto. El stack
(`React + Express + MongoDB`) no se perdió: está en el nodo `rec-backend` y en
la tarjeta `6-7 Recursos y resultados`. Los PNG de la variante D y los de la v2
final son **byte a byte idénticos**, lo que confirma que la animación se
conservó.

## 5. Receipts de la v2 final

```
validate  9/9 checks · 0 errores · 0 advertencias
          properCrossings: 0 · minLabelRouteClearance: 46
deliver   especificación  12 287 B  8b2e6501e6a24df45d1b71f9b5dd48a6e41bb32edb33bcc17a6de1b696c4394b
          artefacto       839 454 B  d33d15ad0dd76e1ffde4efd7b7d4331d808c8183517743aee7c9e1d62ad69d44
```

| Viewport | `scrollHeight` | `diagramWidth` | Texto de nodo mínimo | Estado |
|----------|----------------|----------------|------------------------|--------|
| 1440×900 | 900 | 1179 px | 7.89 px | `pass` |
| 1600×1000 | 1000 | 1216 px | 8.14 px | `pass` |
| 1920×1080 | 1080 | 1383 px | 8.60 px | `pass` |
| 2048×1320 | 1320 | 1796 px | 8.60 px | `pass` |

`readability: pass` · `viewerChrome: pass` · `dockStageGap: 10.22` (mínimo
exigido 10) · `viewerChromeReserve: 51`.

## 6. Receipts de la v1 (línea base)

```
deliver   especificación   7 826 B  14e0595d16b7ec6fb84bd2e82369a1e70c9e2461e67bad8b859eac15d1c02bac
          artefacto      832 160 B  2f618166634b5e80c2eac8fdd7cc8eb235c12726eafe3e2f18652c109e14163a
          minLabelRouteClearance: 108.5 · properCrossings: 0
```

| Viewport | `scrollHeight` | `diagramWidth` | Texto de nodo mínimo | Estado |
|----------|----------------|----------------|------------------------|--------|
| 1440×900 | 900 | 1225 px | 8.20 px | `pass` |
| 1600×1000 | 1000 | 1262 px | 8.45 px | `pass` |
| 1920×1080 | 1080 | 1429 px | 8.60 px | `pass` |
| 2048×1320 | 1320 | 1842 px | 8.60 px | `pass` |

## 7. Cómo se perdió la geometría inicial

La primera composición era **vertical**, con `viewBox` 3 bandas de
`[1120, 1080]`. Se rechazó por dos razones, ambas medidas:

- El texto de nodo se proyectaba por debajo de 6 px a 1440×900.
- Las aristas largas entre bandas lejanas producían cruces y etiquetas pegadas
  a su ruta.

La composición final es **4 columnas × 2 bandas de 3 filas**, nodos de
200 × 56 px en `x = 40, 375, 710, 1045` y `y = 56, 122, 188` (banda superior) y
`y = 336, 402, 468` (banda inferior), con un corredor libre en `y = 576` para la
arista 10. `viewBox: [1285, 616]`.

> La v1 mantiene una holgura mayor (108.5 px) porque tiene 3 relaciones menos que
> rotar; la v2 la baja a 46 px porque las 10 aristas ocupan más corridors. 46 px
> sigue siendo holgura suficiente y las etiquetas no se solapan con ninguna ruta.

## 8. Lo que sigue pendiente

La revisión perceptual de las capturas (`visualReview: pending` en el receipt) la
tiene que hacer una persona. Las comprobaciones automáticas verifican
contención, legibilidad proyectada y geometría; **no** verifican que el mensaje
se lea bien.
