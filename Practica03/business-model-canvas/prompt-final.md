# Prompt final — Business Model Canvas de AnimeHub (7 componentes)

Este es el prompt que produce la **línea base v1** de este directorio. La v2
(`bmc-animehub-final.json`) no parte de un prompt nuevo: es la v1 con las
correcciones de aceptación documentadas en
[`docs/comparativa-v1-final.md`](docs/comparativa-v1-final.md).

---

## 1. Contexto de la asignación

Modelar el **Business Model Canvas del proyecto integrador AnimeHub**, no el de
una empresa comercial existente. El análisis previo del proyecto está en
[`analisis-proyecto.md`](analisis-proyecto.md) y es la **única fuente de
verdad**: si un dato no está ahí, no se inventa.

- Herramienta: **Archify**, tipo de diagrama `architecture`.
- Perfil de calidad: `showcase`.
- Idioma del contenido: español.

## 2. Qué se pide

1. Siete bloques del modelo, en el orden canónico del BMC adaptado al proyecto:
   Problema, Usuarios o beneficiarios, Propuesta de valor, Solución propuesta,
   Actividades y procesos clave, Recursos y tecnologías clave, Resultados,
   beneficios e impacto.
2. Cada bloque se representa como una **región** (`boundaries` de tipo `region`)
   que agrupa **exactamente tres nodos** con contenido real del proyecto, no
   nombres de bloque vacíos.
3. Siete relaciones que expliquen el **mecanismo** de creación de valor, con
   etiqueta corta y legible en el lienzo.
4. Leyenda en **vocabulario de negocio**, no de software: cada tipo de nodo de
   Archify se mapea explícitamente a un bloque del canvas.
5. Vistas guiadas que sirvan como recorridos de lectura, no como adorno.
6. Tarjetas de apoyo con los datos que **no caben** en el nodo.

## 3. Contenido exigido por bloque

| Bloque | Tres nodos exigidos |
|--------|--------------------|
| 1 · Problema / Necesidad | Causas de raíz · Causas de búsqueda · Consecuencias actuales |
| 2 · Usuarios o beneficiarios | Espectador/estudiante · Suscriptor Premium · Equipo administrador |
| 3 · Propuesta de valor | Todo el anime en un lugar · Prueba gratuita · Progreso que te sigue |
| 4 · Solución propuesta | Cuenta y catálogo · Reproductor y seguimiento · Suscripciones y pagos |
| 5 · Actividades y procesos clave | Consumo del usuario · Operación y contenido · Medición y soporte |
| 6 · Recursos y tecnologías clave | React (Vite) + Tailwind · Node.js + Express + MongoDB · JWT + HLS + Docker + GitHub |
| 7 · Resultados, beneficios e impacto | Adquisición · Conversión y retención · Ingresos y operación |

Cada nodo lleva `label` (≤ 22 caracteres) y `sublabel` (≤ 34 caracteres) con el
mecanismo concreto, tomado del análisis.

## 4. Restricciones medidas (no son signos de puntuación)

Estas cifras se obtuvieron **rechazando entregables** durante la aceptación, y
son la razón de que la composición sea horizontal y no vertical:

| Restricción | Valor | Por qué |
|-------------|-------|---------|
| Separación vertical entre nodos | ≥ 8 px de vista | Por debajo, la validación de solapamiento falla |
| Texto de nodo proyectado a 1440×900 | ≥ 6 px | Es el umbral real de legibilidad, no un conteo de caracteres |
| Ancho máximo del `viewBox` | ≈ 1333 px | A más ancho, el sublabel de 8.6 px deja de proyectar 6 px |
| `fromSide` / `toSide` | Directions **verdaderas** | Declarar un lado que no corresponde produce cruces |
| `sublabel` | ≤ 34 caracteres | A 34 caracteres el texto proyecta 5.72 px y falla |

## 5. Criterios de aceptación ejecutables

El entregable no se acepta si falla cualquiera de estos comandos:

```powershell
node bin/archify.mjs validate architecture Practica03\business-model-canvas\bmc-animehub-v1.json --quality showcase --json
node bin/archify.mjs deliver   architecture Practica03\business-model-canvas\bmc-animehub-v1.json Practica03\business-model-canvas\bmc-animehub-v1.html --quality showcase --json
$env:ARCHIFY_CHROME = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
node bin/archify.mjs visual-check Practica03\business-model-canvas\bmc-animehub-v1.html --json
```

- `validate` debe dar **9/9 checks, 0 errores y 0 advertencias**.
- `visual-check` debe dar **`pass`** en **1440×900, 1600×1000, 1920×1080 y
  2048×1320**, sin `overflowY`.
- `minLabelRouteClearance` debe quedar holgado (ninguna etiqueta pegada a su
  ruta).

## 6. Restricción que el análisis impone

La relación directa **Solución → Resultados** existe en el modelo de negocio,
pero su arista recta cruza la región de Recursos. En la v1 se **omite como
arista** y se documenta como dependencia narrativa; en la v2 se conserva la
omisión y se explica en las tarjetas y en este README. No se acepta una
solución que la dibuje rompiendo la legibilidad.

## 7. Sobre el idioma

El esquema de Archify sólo admite `meta.locale: "en" | "zh-CN"`. El contenido
autoral va en español y **no se declara `locale`**: la interfaz fija del visor
(`Export`, `Share`, `Presentation`) queda en inglés. Es el comportamiento
esperado, no un descuido.
