# Prompt v3 — Enriquecimiento del modelo de negocio de Crunchyroll

> **Mejora aplicada sobre el prompt v2** a partir de cuatro peticiones del
> autor del trabajo: detalle por bloque, cifras concretas, más tarjetas de
> detalle y una vista ampliada con el detalle completo.
> Ver [`docs/comparativa-v2-v3.md`](../docs/comparativa-v2-v3.md).

---

## 1. Qué cambió y por qué

| Cambio | Motivo |
|--------|--------|
| **Corrección factual del modelo de ingresos** | El nivel gratuito con anuncios se eliminó a finales de 2025. La v2 lo modelaba como flujo de ingresos y como nivel desegmento (`Free · Premium`). |
| **Cifras concretas y fechadas** | La v2 usaba categorías («precios cobrados al fan»). Se sustituyó por magnitudes publicadas: 21 M de suscriptores de pago, +50 000 episodios, 25 000 h, 2 000+ títulos, 13 idiomas, más de 200 países. |
| **6 tarjetas en vez de 3** | La v2 se quedó en 3 tarjetas de 3 ítems porque 4 tarjetas desbordaban 1440×900. Con una retícula más baja y el texto ajustado, caben 6 tarjetas de 3 ítems. |
| **Nuevo artefacto `bmc-crunchyroll-detalle`** | La malla del canvas (5 columnas de 174 px) limita el texto de cada bloque a ~26 caracteres. Una segunda vista en malla 3×3 de celdas de 320 px entrega el detalle completo por bloque. |
| **Criterios de aceptación medidos, no supuestos** | La v2 falló dos veces por estimaciones de altura incorrectas. La v3 exige medir con `visual-check` antes de declarar éxito. |

---

## 2. Prompt (versión 3, entregable a Archify)

```text
Actúa como analista de modelos de negocio especializado en plataformas de
medios digitales. Usa Archify (tipo "architecture", calidad "showcase") para
producir DOS artefactos del Business Model Canvas de Crunchyroll. Escribe TODO
el contenido autoral en español.

CONTEXTO Y CORTE DE DATOS
Crunchyroll es un servicio multiplataforma de streaming de anime. Lo explota
Crunchyroll LLC, una sociedad entre Sony Pictures Entertainment y Aniplex
(Sony Music). IMPORTANTE: el nivel gratuito con anuncios se eliminó a finales
de 2025, así que NO modeles publicidad ni un nivel Free. El modelo tiene tres
planes de pago: Fan, Mega Fan y Ultimate Fan. Fecha de corte: septiembre de 2026.

HECHOS VERIFICADOS A USAR (con su región y su fecha; no los generalices)
- 21 M de suscriptores de pago al cierre de marzo de 2026 (17 M en marzo 2025).
- Catálogo de +50 000 episodios, 25 000 horas y 2 000+ series y películas.
- Disponible en más de 200 países y territorios, con 13 idiomas de dubbing.
- Precios mensuales en Estados Unidos, vigentes desde el 4 de marzo de 2026:
  Fan US$9.99, Mega Fan US$13.99, Ultimate Fan US$17.99. Los precios varían
  por país: rotúlalos siempre como "(US)".
- 1, 4 o 6 pantallas simultáneas según el plan; descargas offline; descuentos
  del 5% al 15% en Crunchyroll Store según el plan.
- Crunchyroll Manga con VIZ Media, Square Enix y Yen Press, incluido con
  Ultimate Fan. Game Vault, incluidos con Mega Fan y Ultimate Fan.

REQUISITOS DE CONTENIDO (mínimo 2 ideas por bloque, en sublabel o tag)
1. Socios clave        -> estudios y licenciadores de anime, sociedad Sony
                          Pictures y Aniplex, tiendas de apps y pasarelas.
2. Actividades clave    -> licencias, ingesta de simulcast, codificación,
                          datos de uso, localización y moderación.
3. Recursos clave       -> catálogo, marca, apps, 21 M de suscriptores de pago
                          e infraestructura de streaming.
4. Propuesta de valor   -> anime legal, global y simultáneo, multiidioma,
                          multidispositivo y descarga offline.
5. Relaciones con clientes -> autoservicio 24/7, recomendaciones, reseñas,
                          comunidad y avisos de nuevos episodios.
6. Canales              -> web, apps, smart TV, consolas, Store, Manga y push.
7. Segmentos de clientes -> fans de 13 a 34 años, hogares y clientes B2B.
8. Estructura de costos -> regalías y anticipos, CDN y ancho de banda,
                          plataforma, localización, marketing y CAC, soporte.
9. Flujos de ingresos   -> suscripción en los 3 planes, Store y merchandising,
                          cine, juegos, música, eventos y licencias B2B.

REQUISITOS DE RELACIÓN (sólo en el lienzo canónico)
- Los 9 bloques conectados, ninguno huérfano, cada arista con su mecanismo.
- Camino principal: Socios clave -> Actividades clave -> Propuesta de valor ->
  Relaciones con clientes -> Segmentos de clientes -> Flujos de ingresos.
- Estructura de costos alimentada por Socios clave (regalías) y Recursos
  clave (sistemas).
- No cruces aristas sobre nodos ajenos a la relación.

LENGUAJE DE LOS NODOS (restricción medible, no estimada)
- En el lienzo canónico la celda mide 174 px de ancho. El texto de contexto
  se encoge para caber en UNA línea: con 34 caracteres la fuente baja a 8.3 px
  y la proyección cae a 5.72 px, por debajo del mínimo de 6 px y falla la
  legibilidad de escritorio. Mantén sublabel y tag en 26 caracteres o menos.

LENGUAJE DE LAS TARJETAS
- 6 tarjetas de 3 ítems, cada ítem de UNA línea y 32 caracteres o menos.
  Medido: con 40 caracteres las tarjetas envuelven a dos líneas, el bloque de
  tarjetas crece y el lector adaptativo pierde su holgura.

LECTURA GUIADA
- Lienzo canónico: 4 vistas guiadas (creación de valor, propuesta y canales,
  flujos de ingresos, estructura de costos).
- Vista ampliada: 3 vistas guiadas (oferta y segmentos, plataforma,
  economía).

FORMATO — ARTEFACTO 1: LIENZO CANÓNICO
- Título: "Modelo de Negocio de Crunchyroll: Canvas de 9 bloques".
- Malla de 5 columnas: cellW 174, cellH 80, gapX 100, gapY 80.
- Entrada bmc-crunchyroll.json, salida bmc-crunchyroll.html.
- No uses fronteras: el canvas no tiene zonas de confianza.

FORMATO — ARTEFACTO 2: VISTA AMPLIADA
- Título: "Crunchyroll: vista ampliada por bloque".
- Malla de 3 columnas: celdas de 320 x 145, gap 15. Los 9 bloques se
  reordenan en 3 x 3 y llevan el detalle completo en el sublabel (hasta 60
  caracteres). SIN conexiones: la vista es de consulta, las relaciones están
  en el lienzo canónico.
- Entrada bmc-crunchyroll-detalle.json, salida bmc-crunchyroll-detalle.html.
- Conserva la leyenda de tipos en ambos artefactos.

CRITERIOS DE ACEPTACIÓN (verifícalos antes de entregar)
1. `validate ... --quality showcase --json` devuelve ok:true, 9/9, 0 errores,
   0 advertencias, en las DOS especificaciones.
2. `deliver ...` devuelve el SHA-256 de especificación y artefacto.
3. `visual-check ... --json` no reporta desbordamiento en 1440x900,
   1600x1000, 1920x1080 ni 2048x1320, en los dos artefactos.
4. Los 9 bloques tienen contenido y los 9 están conectados en el lienzo
   canónico.
5. Si un criterio falla, corrige SOLO el campo señalado por el diagnóstico,
   vuelve a validar y vuelve a entregar. No declares éxito con un comando
   que sale con código distinto de cero.
```

---

## 3. Decisiones de diseño derivadas del prompt

| Decisión | Motivo |
|----------|--------|
| 6 tarjetas, no 8 | Con 8 tarjetas el lector adaptativo cae a 3 columnas, la rejilla crece a 3 filas y la página desborda 204 px en 1440×900. Con 6 tarjetas quedan 2 filas estables y 101 px de holgura. |
| `cellH 80` en vez de 150 | La altura del lienzo y la del bloque de tarjetas se reparten el mismo espacio vertical. Bajar la retícula de 150 a 80 liberó el área necesaria para la segunda fila de tarjetas. |
| Ítems de tarjeta ≤ 32 caracteres | Medido: 41 caracteres en una tarjeta de 315 px parten el ítem en dos líneas, la tarjeta pasa de 130 a 162 px y el lector pierde 85 px de holgura. |
| Vista ampliada sin conexiones | Un 3×3 con las 9 relaciones del canvas produce cruces ilegibles. La vista ampliada responde «qué dice cada bloque»; las relaciones se consultan en el lienzo canónico. |
| `meta.locale` omitido | El esquema sólo admite `en` y `zh-CN`. Un lienzo en español con `locale: "en"` documenta explícitamente que la interfaz fija del visor queda en inglés. |

---

## 4. Iteración durante la aceptación

| Entrega | Qué falló | Corrección |
|---------|-----------|------------|
| v3 intento 1 | `composition/desktop-readability`: «Licencias de anime y distribución» (34 caracteres) encogía la fuente a 8.3 px y proyectaba 5.72 px | Copy de nodos acotado a 26 caracteres |
| v3 intento 2 | `Adaptive reader layout did not reach stable dimensions`: 6 tarjetas con un ítem largo, rejilla oscilando | Ítems de tarjeta acotados a 32 caracteres |
| v3 intento 3 | `visual-check` con 8 tarjetas: 3 filas, anclaje a 960 px, 204 px de desborde | 6 tarjetas |
| v3 intento 4 | — | **Aceptado**: 9/9 en ambas especificaciones, 0 desbordes en los 4 tamaños de escritorio |
