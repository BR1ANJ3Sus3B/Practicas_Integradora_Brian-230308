# Prompt v2 — Modelo de Negocio (Business Model Canvas) de Crunchyroll

> **Mejora aplicada sobre el prompt v1** a partir de los hallazgos de
> [`docs/revision-v1.md`](../docs/revision-v1.md).
> Este prompt es el que produce el entregable final
> (`bmc-crunchyroll.html`).

---

## 1. Qué cambió y por qué

| Cambio | Hallazgo de la revisión v1 |
|--------|---------------------------|
| Rol, audiencia y herramienta explícitos | El prompt v1 no definía el alcance |
| Requisito de **contenido mínimo por bloque** | 2.1 Bloques sin contenido |
| Los **9 bloques** deben estar conectados por aristas etiquetadas | 2.2 Bloques huérfanos |
| Etiquetas de relación con **mecanismo**, y mecanismo completo en tarjetas | 2.3 Etiquetas genéricas |
| Mapeo de tipos → **vocabulario del lienzo** en la leyenda | 2.4 Leyenda técnica |
| Idioma español explícito + tratamiento correcto de `meta.locale` | 2.5 Idioma inconsistente |
| **Vistas guiadas** y tarjetas con el detalle por bloque | 2.6 Sin guías de lectura |
| Título homogéneo + tarjeta de alcance y fecha de corte | 2.7 Título sin contexto |
| **Criterios de aceptación** verificables con Archify | — |

---

## 2. Prompt (versión 2, entregable a Archify)

```text
Actúa como analista de modelos de negocio especializado en plataformas de
medios digitales. Usa Archify (tipo "architecture", calidad "showcase") para
producir el Business Model Canvas de Crunchyroll como un diagrama HTML
interactivo. Escribe TODO el contenido autoral en español.

CONTEXTO
Crunchyroll es un servicio multiplataforma de streaming de anime, usado a diario
en móvil, web, TV y consolas. Opera como Crunchyroll, LLC, dentro del grupo
Sony, y opera con un modelo freemium: nivel Free con anuncios y nivel Premium
sin anuncios (mensual, anual y Mega Fan). Distinge episodes poco después de su
emisión en Japón (simulcast), ofrece subtítulos y dubbajes en varios idiomas y
vende manga, discos y merchandising en su tienda. Fecha de corte del análisis:
septiembre de 2026.

REQUISITOS DE CONTENIDO (mínimo 2 ideas por bloque, en sublabel o tag)
1. Socios clave        -> estudios y licenciadores de anime, Sony Group,
                          App Store / Google Play, redes de pago y CDN.
2. Actividades clave    -> adquisición de licencias, ingesta de simulcast,
                          Recommendaciones, operación de reproducción,
                          localización, marketing y moderación.
3. Recursos clave       -> catálogo y metadatos, marca, apps multiplataforma,
                          datos de usuarios e infraestructura de streaming.
4. Propuesta de valor   -> anime legal y global, simultaneidad, sin anuncios en
                          Premium, multiidioma, multidispositivo y descarga
                          offline.
5. Relaciones con clientes -> autoservicio, recomendación, comunidad y
                          reseñas, avisos de nuevos episodios y soporte.
6. Canales              -> web, apps iOS/Android/TV, consolas, smart TV,
                          notificaciones push, redes sociales y Crunchyroll Store.
7. Segmentos de clientes -> fans B2C por edad, usuarios Free y Premium, y
                          segmentos B2B (otras plataformas, TV y operadores).
8. Estructura de costos -> regalías y anticipos de licencia, CDN y ancho de
                          banda, plataforma y localización, marketing y CAC,
                          soporte y administración.
9. Flujos de ingresos   -> suscripción Premium, publicidad en el nivel Free,
                          Crunchyroll Store y licencias B2B.

REQUISITOS DE RELACIÓN
- Los 9 bloques deben estar conectados; ningún bloque queda huérfano.
- Cada arista lleva una etiqueta corta con el mecanismo, no un verbo vacío.
- Mantén un camino principal de izquierda a derecha:
  Socios clave -> Actividades clave -> Propuesta de valor ->
  Relaciones con clientes -> Segmentos de clientes -> Flujos de ingresos.
- La Estructura de costos se alimenta de Socios clave (regalías) y de
  Recursos clave (tecnología).
- No cruces aristas sobre nodos que no participan en la relación.

LEGEND A E IDIOMA
- Mapea los tipos de nodo al vocabulario del lienzo con meta.legend.entries:
  external -> socios y segmentos, backend -> actividades, costos e ingresos,
  database -> activos y datos, frontend -> oferta al cliente,
  security -> confianza y relación, cloud -> puntos de contacto.
- No declares meta.locale: solo admite "en" y "zh-CN", así que la interfaz
  fija del visor y <html lang> quedarán en inglés. Es lo esperado y correcto.

LECTURA GUIADA
- Agrega 4 vistas guiadas: creación de valor, propuesta y canales,
  flujos de ingresos y estructura de costos.
- Agrega EXACTAMENTE 3 tarjetas, de UNA línea por ítem y máximo 3 ítems:
  ingresos, costos y segmentos. No agregues una cuarta tarjeta: medido en el
  visor, 4 tarjetas desbordan la vista de escritorio de 1440x900.

FORMATO
- Título: "Modelo de Negocio de Crunchyroll: Canvas de 9 bloques".
- Tipo de diagrama: architecture. quality_profile: "showcase".
- Malla de 5 columnas: cellW 174, cellH 150, gapX 100, gapY 100.
  No uses una malla más ancha: con cellW 215 y gapX 120 el lienzo proyecta el
  texto de contexto por debajo de 6 px y falla la legibilidad de escritorio.
- Entrada: bmc-crunchyroll.json. Salida: bmc-crunchyroll.html.
- No uses fronteras (boundaries): el canvas no tiene zonas de confianza.

CRITERIOS DE ACEPTACIÓN (verifícalos antes de entregar)
1. `node bin/archify.mjs validate architecture bmc-crunchyroll.json
   --quality showcase --json` devuelve ok:true, 9/9 comprobaciones,
   0 errores y 0 advertencias.
2. `node bin/archify.mjs deliver ...` devuelve el SHA-256 de la
   especificación y del artefacto.
3. `node bin/archify.mjs visual-check bmc-crunchyroll.html --json` no reporta
   desbordamiento en 1440x900, 1600x1000, 1920x1080 y 2048x1320.
4. Los 9 bloques tienen contenido y los 9 están conectados.
5. Si un criterio falla, corrige SOLO el campo señalado por el diagnóstico,
   vuelve a validar y vuelve a entregar. No declares éxito con un comando
   que sale con código distinto de cero.
```

---

## 3. Decisiones de diseño derivadas del prompt

| Decisión | Motivo |
|----------|--------|
| Tipo `architecture` y no `workflow`/`dataflow` | El canvas describe **componentes y relaciones** de un modelo, no una secuencia de llamadas ni un linaje de datos. |
| Malla de 5 columnas × 3 filas | Reproduce la composición canónica del lienzo de Osterwalder: `KP · KA/ KR · VP · CR/ CH · CS` arriba, `Costos · Ingresos` abajo. |
| Sin `boundaries` | `region` y `security-group` modelan zonas de confianza o despliegue propias de la arquitectura de software; no tienen equivalente en un canvas de negocio. |
| Mecanismo en `tag` y tarjetas, no en la arista | La arista tiene poco espacio: con `gapX: 100` el hueco real es de 100 px. Se validaron etiquetas de hasta 15 caracteres (holgura mínima medida: 53 px), pero el detalle completo (los cuatro flujos de ingreso, las cuatro familias de costo) no cabe en una arista y va a las tarjetas. |
| `meta.locale` omitido | El esquema solo admite `en` y `zh-CN`. Un lienzo en español con `locale: "en"` documenta explícitamente que la interfaz fija del visor queda en inglés. |
| 3 tarjetas de 3 ítems, no 4 de 4 | Medido con `visual-check`: 4 tarjetas de 3-4 ítems producen `scrollHeight: 1178` en 1440×900 (desbordamiento de 278 px). Con 3 tarjetas de 3 ítems de una línea, `scrollHeight: 900` y el diagrama conserva 951 px de ancho. |

---

## 4. Iteración del prompt durante la aceptación

El prompt v2 **no acertó a la primera**. La primera entrega del lienzo v2
falló la aceptación, y el fallo se corrigió editando el prompt:

| Entrega | Qué falló | Corrección aplicada al prompt |
|---------|-----------|------------------------------|
| v2 intento 1 | `composition/desktop-readability`: con `cellW 215 / gapX 120` el texto de contexto proyectaba **5.12 px** (mínimo 6 px) | Se fijó la malla en `cellW 174 / gapX 100` y se acortaron dos etiquetas de arista |
| v2 intento 2 | `viewer/viewport-overflow`: 4 tarjetas de 4 ítems daban `scrollHeight 1178` en 1440×900 | Se limitó a 3 tarjetas de 3 ítems de una línea |
| v2 intento 3 | — | **Aceptado**: 9/9 comprobaciones, 0 errores, 0 advertencias y sin desbordamiento en los 4 tamaños de escritorio |

Los receipts de ambas entregas rechazadas quedan en
[`docs/comparativa-v1-v2.md`](../docs/comparativa-v1-v2.md).
