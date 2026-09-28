# Prompt inicial para Achify (Fase 3) — canvas de 7 componentes

> Este es el prompt que el equipo entregó al agente **Achify (Archify)** para obtener la
> **primera versión** del Business Model Canvas de 7 componentes. Todo el contenido
> proviene de `analisis-proyecto.md`; el agente solo lo representa y lo organiza.

---

## Texto enviado a Achify

```text
Agente: Achify (Archify).
Tarea: genera un Business Model Canvas INTERACTIVO del Proyecto Integrador "AnimeHub",
una plataforma web de streaming de anime. Crunchyroll es el modelo de negocio usado como
comparativo de mercado; NO es la marca del proyecto.

FUENTE DE VERDAD
El contenido del Canvas ya está definido por el equipo en el documento de análisis.
No inventes, no completes y no sustituyas información. Si algo no está en la fuente,
no lo incluyas. Usa únicamente los textos que te entrego abajo.

REQUISITOS DE REPRESENTACIÓN
1. El Canvas debe contener visualmente estos 7 componentes, cada uno como un bloque
   identificable y numerado del 1 al 7:
   1) Problema / Necesidad
   2) Usuarios o beneficiarios
   3) Propuesta de valor
   4) Solución propuesta
   5) Actividades y procesos clave
   6) Recursos y tecnologías clave
   7) Resultados, beneficios e impacto
2. Conecta los componentes con relaciones visuales con etiqueta semántica siempre que
   exista dependencia. La cadena principal debe leerse sin ambigüedad.
3. Cada componente debe diferenciarse visualmente (color, marco y posición) sin afectar
   la legibilidad general del modelo.
4. Cada componente debe ser explorable: seleccionar el bloque debe permitir ver su
   contenido y sus relaciones (foco, búsqueda y trazado de relaciones).
5. Las animaciones, si las hay, deben aportar información (trazado del flujo) y no ser
   solo decorativas.
6. Diseño moderno, tecnológico, limpio, en español, adecuado para presentar un
   Proyecto Integrador universitario.
7. Vista de escritorio: el lienzo completo debe leerse en 1440x900, 1600x1000 y
   1920x1080 sin scroll ni desbordes.

PALETA DE TIPOS
Como el tipo de nodo dirige el color, asigna un tipo distinto a cada uno de los 7
bloques para que se distingan de inmediato, y ajusta las etiquetas de la leyenda para
que la leyenda funcione como índice numerado del Canvas:
  external    -> 1 Problema
  frontend    -> 2 Usuarios
  cloud       -> 3 Propuesta de valor
  backend     -> 4 Solución
  messagebus  -> 5 Procesos
  security    -> 6 Recursos y tecnologías
  database    -> 7 Resultados

CONTENIDO DE LOS 7 BLOQUES (usa estos textos, no los reformules)

1) PROBLEMA / NECESIDAD  (tipo external)
 - "Causas de raíz" — "Catálogo fragmentado · cobro sin prueba · búsqueda sin filtros"
 - "Causas operativas" — "Sin progreso entre dispositivos · gestión manual"
 - "Consecuencias actuales" — "Abandono temprano · soporte manual · fuentes no oficiales"

2) USUARIOS O BENEFICIARIOS  (tipo frontend)
 - "Espectador / estudiante" — "Capítulos, lista, calidad y subtítulos"
 - "Suscriptor Premium" — "Sin anuncios · HD · historial y descarga"
 - "Equipo administrador" — "Alta de catálogo · usuarios · métricas"

3) PROPUESTA DE VALOR  (tipo cloud)
 - "Todo el anime en un solo lugar" — "Un solo login y un catálogo completo"
 - "Prueba gratuita" — "Decide antes de pagar"
 - "Progreso que te sigue" — "Retoma el capítulo en cualquier dispositivo"

4) SOLUCIÓN PROPUESTA  (tipo backend)
 - "Cuenta y catálogo" — "Registro, login y búsqueda con filtros"
 - "Reproductor y seguimiento" — "Calidad, subtítulos, progreso y lista"
 - "Suscripciones y pagos" — "Planes mensual y anual con prueba"

5) ACTIVIDADES Y PROCESOS CLAVE  (tipo messagebus)
 - "Consumo del usuario" — "Registro → explorar → reproducir → continuar"
 - "Operación y contenido" — "Cobro, prueba y alta de catálogo"
 - "Medición y soporte" — "Métricas de uso, conversión y soporte"

6) RECURSOS Y TECNOLOGÍAS CLAVE  (tipo security)
 - "React (Vite) + Tailwind" — "SPA responsive de catálogo y reproductor"
 - "Node.js + Express + MongoDB" — "API REST y persistencia con Mongoose"
 - "JWT + HLS + Docker + GitHub" — "Identidad, video, despliegue y CI"

7) RESULTADOS, BENEFICIOS E IMPACTO  (tipo database)
 - "Adquisición" — "Registro gratuito con correo verificado"
 - "Conversión y retención" — "Prueba → suscripción y regreso en 7 días"
 - "Ingresos y operación" — "Suscripciones recurrentes y menor soporte"

RELACIONES MÍNIMAS QUE DEBEN EXISTIR
 - Problema → Usuarios : "viven el problema"
 - Usuarios → Propuesta de valor : "motivan la propuesta"
 - Propuesta de valor → Solución : "se materializa en"
 - Solución → Actividades y procesos : "se opera mediante"
 - Actividades y procesos → Recursos : "se apoya en"
 - Solución → Resultados : "entrega el beneficio"
 - Actividades y procesos → Resultados : "produce"
 - Recursos y tecnologías → Resultados : "habilita"

FORMATO DE SALIDA
 - Tipo de diagrama: architecture, calidad showcase, sin preset visual especial.
 - Idioma de todo el texto: español.
 - Incluye 3 vistas guiadas que conceptualicen el Canvas y 3 tarjetas de resumen.
 - Entrega el HTML interactivo y el archivo JSON fuente.
```

---

## Notas del equipo sobre el prompt inicial

- Se entrega como `bmc-animehub-v1.html` y su fuente `bmc-animehub-v1.json`.
- El prompt es deliberadamente **dirigido**: fija la paleta de tipos, el orden de lectura,
  las relaciones mínimas y los textos, para que la primera salida sea ya utilizable y las
  correcciones posteriores sean verificables.
- Todo lo que Achify devuelva y no esté en la sección *CONTENIDO DE LOS 7 BLOQUES* se
  considera una invención y se elimina en la versión final.
