# Prompt de traspaso a Codex — Práctica 03

Este archivo es el **prompt que se le pega a Codex** para que sea él quien
orqueste Archify. No es el prompt para Archify (esos están en `prompt-v1.md`,
`prompt-v2.md` y `prompt-v3.md`): es el sobre que le dice a Codex qué construir,
con qué restricciones ya medidas y cómo demostrar que funcionó.

El texto del bloque «pegar en Codex» es autocontenido y se puede copiar tal
cual. Ya incorpora el error factual que costó una corrección en la v2 (el nivel
gratuito con publicidad), la geometría que sí pasa la legibilidad y el icono de
la app con su resumen, para que Codex no tenga que redescubrirlos a base de
intentos fallidos.

---

## Pegar en Codex

```text
Usa Archify para construir un Business Model Canvas ampliado de Crunchyroll en
este repositorio, con una segunda vista de detalle. No escribas el HTML a mano:
Archify es el que genera los artefactos.

## Herramienta

Archify está instalado como skill en `~/.agents/skills/archify`. Su CLI es
`bin/archify.mjs` (Node, sin dependencias externas). Ejecuta siempre desde ese
directorio. Comandos:

  node bin/archify.mjs validate architecture <spec.json> --quality showcase --json
  node bin/archify.mjs deliver   architecture <spec.json> <out.html> --quality showcase --json
  node bin/archify.mjs visual-check <out.html> --json

`visual-check` necesita un Chromium real:

  $env:ARCHIFY_CHROME = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

Lee `references/architecture.md` y `references/architecture-failure-modes.md`
del skill antes de escribir la especificación: el contrato de entrega exige que
tras pasar la validación **no se edite** la especificación, y `deliver` congela
el HTML.

## Objetivo

Un BMC de Crunchyroll en español que se entienda de un vistazo y sobreviva a la
regla de legibilidad de Archify. Archify no tiene un tipo de diagrama "business
model", así que usa `type: architecture` con la plantilla `nodes` y representa
los 9 bloques del canvas como los 9 nodos del grafo.

Produce dos artefactos:

1. `bmc-crunchyroll.json` / `.html` — el lienzo canónico, 9 bloques, ancho para
   leerse en pantalla sin zoom.
2. `bmc-crunchyroll-detalle.json` / `.html` — la vista ampliada, misma
   información con los textos completos. 3x3, celdas de 320x145, sin
   conexiones. Es donde cabe el detalle que el lienzo estrecho no aguanta.

## Contenido: los 9 bloques

Los nueve, con contenido real y específico. Nada de texto de relleno tipo
"Recursos clave: los recursos más importantes del negocio".

| Nodo              | Etiqueta             | Qué debe decir                                                             |
| ----------------- | -------------------- | -------------------------------------------------------------------------- |
| value_proposition | Propuesta de valor   | Anime legal y simultáneo, catálogo amplio, planes y Store, sin anuncios    |
| channels          | Canales              | App, web, TV y consolas · Store · Manga · Push                             |
| customer_segments | Segmentos            | Fans de anime y manga en más de 200 países                                 |
| revenue_streams   | Fuentes de ingreso   | Suscripción, Store, cine, juegos, música, eventos, agreements B2B           |
| key_resources     | Recursos clave       | Contenido, tecnología de streaming, marca, biblioteca de títulos         |
| key_partners      | Socios clave         | Sony Pictures y Aniplex, estudios y plataformas                           |
| key_activities    | Actividades clave    | Licencias, doblaje, moderación, pagos y Store                                |
| cost_structure    | Estructura de costes | Licencias, producción, tecnología, marketing                                |
| key_metrics       | Métricas clave       | Suscriptores, engagement, ingreso por usuario, tamaño del catálogo         |

Nueve aristas etiquetadas, como en un modelo real: el flujo de valor va de
propuesta de valor a segmentos, de segmentos a canales, de canales a ingresos;
los recursos y las actividades alimentan los canales; los socios respaldan el
contenido; los costes y las métricas se conectan a la estructura.

**Escribe los 9 bloques en español, con contenido real de Crunchyroll.**

## Restricciones: lo que hay que medir, no lo que hay que suponer

La regla de legibilidad de Archify no cuenta caracteres: **proyecta el tamaño de
fuente contra el ancho disponible**. El dato que manda es este:

- `minProjectedNodeTextPx ≥ 6`, medido a 1440×900, donde el lector útil mide
  930 px. La proyección es `fuente × 930 / viewBox`.

Ese umbral, y no un conteo de letras, es el que hay que respetar. Como
referencia, el lienzo entregado queda en **6.87 px** proyectados.

Lo que sí conviene fijar de antemano, porque es lo que hace fallar la
composición:

- Geometría del lienzo canónico: `cellW 174`, `cellH 80`, `gapX 100`, `gapY 80`.
- **viewBox de ancho máximo ≈ 1350.** A partir de ~1500 px la proyección cae del
  lado malo y la validación falla en `desktop-readability`. La cuadrícula del
  BMC es de 5 columnas: no la agrandes. Éste fue el error de la v2 (7 columnas,
  5.72 px proyectados).
- **Exactamente 6 tarjetas (2 filas de 3).** Con 8, el lector adaptativo
  oscila entre anchos y `visual-check` falla por inestabilidad del lector.
- **Mantén corto el texto de nodo y el de las aristas**, porque son lo que se
  encoge. Como referencia, lo entregado llega a 48 caracteres de contexto de
  nodo, 33 en un ítem de tarjeta y 15 en una etiqueta de arista (`licencias
  anime`) y aun así pasa; las aristas que viven en corredores verticales
  estrechos son las cortas (`regalías`, `sistemas`, `paga`).
- No escribas `meta.locale`: el schema solo admite `en` y `zh-CN`. El contenido
  autoral va en español y las etiquetas fijas del visor quedan en inglés; no
  las traduzcas.

Si una restricción y un texto chocan, **mide**: no adivises. `validate` te
devuelve el `minProjectedNodeTextPx` exacto.

## Icono de la aplicación

El nodo `channels` lleva el icono oficial de Crunchyroll. Crunchyroll no está
en el catálogo de marcas de Archify, así que usa la forma con resumen fijo:

  "brand": { "url": "https://www.crunchyroll.com/news",
             "sha256": "d6254f829c7f9abfbb1e574ed3b6876b7a02f8aa1e350112afc402289f54bab3" }

No inventes otra URL ni captures de nuevo si esta funciona. Si necesitas
recapturar, usa `brands capture <url> --json`; la portada responde 403/404 a
peticiones automatizadas, `/news` sí funciona. No pongas marcas parecidas de
otra empresa para salir del paso.

## Cómo demostrar que funcionó

Presupuesto de tiempo: ~3 minutos por vista en `visual-check`, así que valida y
entrega primero el lienzo canónico, y la vista ampliada después.

Para cada vista, en orden:

1. `validate architecture <spec> --quality showcase --json` → `status: pass`,
   `errors: 0`, `warnings: 0`. Anota el `minProjectedNodeTextPx` que devuelve.
2. `deliver architecture <spec> <out.html> --quality showcase --json` → 9/9.
3. `visual-check <out.html> --json` → `status: pass` en los 4 viewports,
   `overflowY: false` en todos, sin inestabilidad del lector.

Reglas de honestidad, que son parte del entregable:

- **Un comando que sale con código distinto de 0 es un fallo**, aunque la
  salida JSON parezca promising. Repáralo y vuelve a ejecutar.
- Si la validación falla, lee el código de error y ajusta la causa concreta
  (texto demasiado largo, demasiadas tarjetas, arista en un corredor estrecho)
  en lugar de desactivar comprobaciones.
- **No afirmes que revisaste el resultado visualmente** si no usaste una
  herramienta con visión. `visual-check` es técnico: mide el DOM, no juzga el
  diseño. Si no hubo revisión perceptual, dilo.
- Entrega los hashes SHA-256 y los tamaños de los cuatro archivos de los que
  informas, y verifícalos en disco antes de dar por cerrado.

## Datos y fuentes

El modelo va en español, con precios de EE. UU. y con las fechas que aplican:
los planes Fan/Mega/Ultimate son los de marzo de 2026, no los de 2025.

- El nivel gratuito con anuncios se eliminó a finales de 2025: **no lo incluyas
  como fuente de ingreso ni como segmento**. Es el error que corrigió la v2.
- Ingresos: suscripción, Store, cine, juegos, música, eventos y acuerdos con
  operadores de televisión.
- 21 M de suscriptores de pago (marzo de 2026). Precios en EE. UU.: Fan 9.99,
  Mega Fan 13.99, Ultimate Fan 17.99 USD al mes.

Fuente primaria para el modelo y los precios:
https://www.crunchyroll.com/news/announcements/2026/2/2/crunchyroll-updates-membership-pricing-to-give-fans-more-of-what-they-love

## Salida esperada

Al terminar quiero: los cuatro archivos (2 JSON y 2 HTML), un resumen con el
resultado de validate, deliver y visual-check de cada vista, los hashes, y una
nota explícita de si hubo o no revisión perceptual humana.
```

---

## Por qué este prompt y no el anterior

Los tres prompts anteriores (`prompt-v1/v2/v3.md`) son el encargo a Archify.
Este es distinto en un aspecto: **no se lo pide a Archify, se le pide a Codex**.

La diferencia importa porque el trabajo difícil no fue escribir la
especificación, sino encontrar el límite geométrico. En la v2 el lienzo pasó a 7
columnas, el texto de nodo quedó en 5.72 px proyectados y la validación cayó en
`desktop-readability`; la v3 volvió a 5 columnas y 6 tarjetas porque con 8 el
lector adaptativo oscilaba. Eso son números que salen midiendo, y metidos en el
prompt evitan que Codex repita el mismo camino.

También queda escrito lo que Archify no puede hacer, para no perder tiempo: no
existe el tipo de diagrama «business model», así que el BMC se modela con
`type: architecture` y los 9 bloques son los 9 nodos del grafo.
