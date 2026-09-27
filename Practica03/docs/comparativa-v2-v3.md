# Comparativa v2 → v3 — Enriquecimiento con datos verificados

**Actividad 4 (continuación).** Documenta el paso de la v2 a la v3 del modelo de
Crunchyroll: qué se corrigió, qué se añadió, los receipts de entrega y el
alcance real de la evidencia.

---

## 1. Motivo

La v2 modelaba Crunchyroll con un nivel **Free con anuncios** y un nivel
Premium. La verificación de fuentes mostró que **ese nivel gratuito se eliminó
a finales de 2025**, de modo que dos bloques estaban equivocados: los
**Flujos de ingresos** incluían publicidad y los **Segmentos de clientes**
listaban `Free · Premium`. Una v2 sin corregir habría sido un modelo inválido
del negocio, por bien geometrizado que estuviera.

---

## 2. Corrección factual

| Afirmación de la v2 | Fuente | Valor verificado a septiembre de 2026 |
|---------------------|--------|----------------------------------------|
| «Free con anuncios» y «Premium» como niveles | Crunchyroll | El nivel gratuito con anuncios se retiró a finales de 2025. Hoy hay tres planes de pago: Fan, Mega Fan y Ultimate Fan. |
| «precios cobrados al fan» (categoría) | Crunchyroll (anuncio de precios) | Fan US$9.99, Mega Fan US$13.99 y Ultimate Fan US$17.99 al mes en Estados Unidos, vigentes desde el 4 de marzo de 2026. |
| Ingresos: «suscripción, publicidad, tienda y licencias B2B» | Sony Group | Ingresos por suscripción en los 3 planes, Store y merchandising, cine, juegos, música, eventos y licencias B2B. Sin publicidad. |
| «Free, Premium y clientes B2B» como segmentos | Crunchyroll | Fans de 13 a 34 años, hogares con uso multiplataforma y clientes B2B (TV, operadores y otras apps). |
| Escalas sin cifra | Sony Group / Crunchyroll | 21 M de suscriptores de pago (marzo de 2026; 17 M en marzo de 2025), +50 000 episodios, 25 000 horas, 2 000+ títulos, 13 idiomas, más de 200 países. |

Los precios llevan la marca **(US)** porque son regionales: el mismo plan cuesta
muy distinto en India, Japón o Suiza. Ninguna cifra se presenta como universal.

### Fuentes

| Fuente | Uso | Fecha |
|--------|-----|-------|
| [Crunchyroll — cambios de precios de membresía](https://www.crunchyroll.com/news/announcements/2026/2/2/crunchyroll-updates-membership-pricing-to-give-fans-more-of-what-they-love) | Los tres planes, sus precios en EE. UU. y la fecha de entrada en vigor | 2 de febrero de 2026 |
| [Anime News Network — Crunchyroll alcanza 21 M de suscriptores](https://www.animenewsnetwork.com/press-release/2026-05-08/crunchyroll-reaches-21-million-subscribers/.237189) | Suscriptores de pago, países y territorios | 8 de mayo de 2026 |
| Informe de estrategia de **Sony Group** (PDF) | Catálogo de +50 000 episodios, 13 idiomas, sociedad Sony Pictures + Aniplex, expansión a cine, juegos, música, eventos y merchandising | Cierre de marzo de 2026 |

> La cifra de suscriptores también aparece en el informe de Sony Group. La copia
> consultada era un espejo de terceros, así que se usó como corroboración y no
> como fuente única.

---

## 3. Qué cambió en el modelo

| Aspecto | v2 | v3 |
|---------|----|----|
| Nodos con contenido | 9 con sublabel y tag | 9, con el copy acotado a 26 caracteres y cifras dentro del canvas |
| Tarjetas | 3 × 3 ítems | **6 × 3 ítems** |
| Datos por tarjeta | 9 | **18** |
| Vistas guiadas | 4 | 4 en el lienzo canónico + 3 en la vista ampliada |
| Artefactos | 1 | **2** (`bmc-crunchyroll` + `bmc-crunchyroll-detalle`) |
| Malla del lienzo | `cellH 150 / gapY 100` | `cellH 80 / gapY 80` |
| Ingresos | incluían publicidad | suscripción, Store, cine, juegos, música, eventos, B2B |
| Etiqueta de la 9.ª arista | `tecnología` | `sistemas` (corta lo que cabe en un hueco de 80 px) |
| Icono de la app | ninguno | marca de producto en el nodo **Canales**, fijada por SHA-256 |

---

## 4. Restricción geométrica medida

El visor adaptativo reparte el alto disponible entre el diagrama y las tarjetas:
la altura del lienzo y la del bloque de tarjetas se toman del mismo espacio. A
1440×900 el presupuesto total es de **635 px**, y la v2 lo consumía al 100 %
(503 px de diagrama + 132 px de tarjetas), sin margen para nada nuevo.

Mediciones con el navegador sobre el HTML entregado:

| Configuración | Resultado medido en 1440×900 |
|---------------|------------------------------|
| v2: 3 tarjetas, `cellH 150` | `scrollHeight 900`, sin desborde, 0 px de holgura |
| 8 tarjetas, `cellH 90` | 3 filas de tarjetas → el lector se ancla a 960 px → **desborde de 204 px** |
| 6 tarjetas, `cellH 90`, 1 ítem largo | 2 filas → sin desborde, pero el lector a 976 px y **oscila**: `Adaptive reader layout did not reach stable dimensions` |
| **6 tarjetas, `cellH 80`, ítems ≤ 32 caracteres** | 2 filas estables, lector a 1061 px, **`scrollHeight 900`, 101 px de holgura** |

De ahí salen las tres restricciones que el prompt v3 fija como medibles y no
como estimaciones: 26 caracteres en el texto de nodo, 32 en los ítems de
tarjeta y 6 tarjetas.

### 4.1 El icono de la aplicación y el hueco que reserva

El bloque **Canales** lleva la marca de producto de Crunchyroll. Archify dibuja
la marca en la esquina superior derecha del nodo y **reserva 48 px de ancho**
para ella: la etiqueta del nodo se ajusta contra `ancho − 48`.

En el lienzo canónico eso deja `174 − 48 = 126 px` para la etiqueta. La
comprobación `brandTopRailProblem` exige que quepan los 8 px del mínimo
legible, y «Canales» necesita unos 34 px, así que pasa con holgura. Aun así,
una etiqueta larga en un nodo de 174 px sí entraría en conflicto con el icono;
por eso el icono va en un nodo cuya etiqueta es corta.

El PNG queda incrustado como `data:` URI en el HTML entregado, con su resumen
`d6254f829c7f9abfbb1e574ed3b6876b7a02f8aa1e350112afc402289f54bab3`. La
validación exige ese resumen exacto: si el recurso capturado cambiara, la
herramienta falla en vez de incrustar un icono distinto.

---

## 5. Receipts de la v3

### 5.1 Lienzo canónico — `bmc-crunchyroll`

| Comprobación | Resultado |
|--------------|-----------|
| `validate --quality showcase` | 9/9 · 0 errores · 0 advertencias |
| `deliver` | Especificación 5 830 B · `7c1f9cbf285a6deb921cf298c35169dfa964cc01c5778c8171738033b1f9595c` |
| `deliver` (artefacto) | 817 567 B · `f696d22f388c2bc31c412330075b417905b34e96171894d431b30840c0d2748e` |
| Holgura mínima etiqueta↔ruta | 30.5 px |
| `visual-check` 1440×900 · 1600×1000 · 1920×1080 · 2048×1320 | `pass` en los 4, sin desborde en ningún eje |
| Texto de nodo proyectado (mínimo) | 6.87 px a 1440×900 · 7.19 px a 1600×1000 · 9.00 px a 1920×1080 y 2048×1320 |
| Revisión perceptual de las capturas | **Pendiente de revisor humano** |

### 5.2 Vista ampliada — `bmc-crunchyroll-detalle`

| Comprobación | Resultado |
|--------------|-----------|
| `validate --quality showcase` | 9/9 · 0 errores · 0 advertencias |
| `deliver` | Especificación 4 167 B · `73407f1e5cbaefc025324b7e63af22cd6cc32546f7dd48310537e14739a822d5` |
| `deliver` (artefacto) | 810 983 B · `f9dbc30d9bf8b898ed998f6e80e607c1afc4dba0b811a4fd05a12e7132af461d` |
| `visual-check` 1440×900 · 1600×1000 · 1920×1080 · 2048×1320 | `pass` en los 4, sin desborde |
| Texto de nodo proyectado (mínimo) | 8.06 px a 1440×900 · 8.50 px a 1920×1080 |
| Revisión perceptual de las capturas | **Pendiente de revisor humano** |

La vista ampliada proyecta **8.06 px** donde el lienzo canónico proyecta
**6.87 px**: es la misma información con 1.4x menos de escala, y por eso el
detalle por bloque cabe en ella y no en el lienzo.

### 5.3 Intentos rechazados

| Intento | Diagnóstico | Corrección |
|---------|-------------|------------|
| v3 · 1 | `composition/desktop-readability` — «Licencias de anime y distribución» (34 caracteres) encogía la fuente de contexto a 8.3 px y proyectaba 5.72 px | Copy de nodos acotado a 26 caracteres |
| v3 · 2 | `viewer/visual-check-runtime` — `Adaptive reader layout did not reach stable dimensions` | Ítems de tarjeta acotados a 32 caracteres, para que ninguna tarjeta crezca |
| v3 · 3 | `containment` — 8 tarjetas davan 3 filas, anclaje a 960 px y 204 px de desborde | 6 tarjetas |

---

## 6. Alcance de la evidencia

- `validate` prueba las comprobaciones deterministas del artefacto: 9/9, sin
  errores ni advertencias.
- `deliver` congela los bytes exactos de la especificación y del HTML y
  publica sus SHA-256.
- `visual-check` prueba el comportamiento en un navegador real, en cuatro
  tamaños de escritorio y en los dos temas, sobre el HTML entregado y sin
  modificarlo.
- **Ninguna de las tres cosas es una revisión perceptual.** Las capturas PNG
  quedan en el repositorio para que las revise una persona o un modelo con
  visión. Hasta entonces, la revisión perceptual está **pendiente**.
