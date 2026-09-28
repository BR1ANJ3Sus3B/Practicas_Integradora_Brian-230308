# Práctica 03 · Business Model Canvas de Crunchyroll

Lienzo interactivo del modelo de negocio de **Crunchyroll**, construido como un único archivo HTML
autónomo. Los nueve bloques del Business Model Canvas se leen de un vistazo y, al hacer clic en
cualquiera, se expanden a lo ancho del lienzo con todo su contenido, sus cifras y sus relaciones.

![Nueve bloques](https://img.shields.io/badge/bloques-9-f47521) ![Elementos](https://img.shields.io/badge/elementos-75-2ec4f0) ![Relaciones](https://img.shields.io/badge/relaciones-11-7c5cff) ![Sin dependencias](https://img.shields.io/badge/dependencias-0-37d67a)

## Ver el proyecto

- **En línea:** <https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/>
- **En local:** abre [`bmc-crunchyroll-brian.html`](./bmc-crunchyroll-brian.html) con doble clic.
  No necesita servidor, conexión ni instalación: todo el CSS y el JavaScript van dentro del archivo.

## Qué se puede hacer

| Acción | Resultado |
| --- | --- |
| Clic en un bloque | Se expande a `grid-column: 1/-1` y el panel lateral muestra su detalle |
| Segundo clic | Vuelve a su tamaño original en la retícula |
| `Esc` | Cierra el bloque abierto |
| Clic en una curva | Se ilumina la relación y el panel explica qué significa |
| Clic en una etiqueta de relación | Salta al bloque de destino |
| Foco rápido | Aísla un recorrido: creación de valor, cadena del ingreso o costos y riesgos |
| Buscador | Filtra los bloques por título, género, actividad o concepto |
| *Contraer todo* | Cierra el bloque abierto y limpia la búsqueda |

El lienzo se construye con `grid` y las relaciones se dibujan como curvas SVG recalculadas en tiempo
real, así que se reorganiza solo en móvil, tableta y escritorio.

## Estructura del modelo

Los nueve bloques canónicos que aparecen en el lienzo:

| # | Bloque | Enfoque | Elementos |
| --- | --- | --- | --- |
| 1 | Aliados clave | La cadena vertical de Sony y los socios que traen el contenido | 8 |
| 2 | Actividades clave | Negociar, conseguir, doblar, codificar y estrenar el anime | 8 |
| 3 | Recursos clave | El catálogo, los derechos, la marca y el equipo que lo sostiene | 9 |
| 4 | Propuesta de valor | Anime legal, sin anuncios y recién emitido, en cualquier pantalla | 8 |
| 5 | Relación con clientes | Autónoma y personalizada, con comunidad y eventos | 8 |
| 6 | Canales | Web, apps, televisores, consolas, cine, canal gratis y redes | 8 |
| 7 | Segmentos de clientes | Fans de anime, estudiantes, coleccionistas, cine y licencias | 8 |
| 8 | Estructura de costos | Licencias, traducción, tecnología, nóminas y teatro | 9 |
| 9 | Fuentes de ingresos | Suscripciones como núcleo, con cine, tienda, juegos, manga y licencias | 9 |

En total, **75 elementos** unidos por **11 relaciones** que se dibujan como curvas en el lienzo.

## Decisiones de diseño

- **Un solo archivo.** Sin frameworks, sin CDN y sin paso de compilación. Se abre con doble clic y
  funciona sin conexión, lo que evita problemas en una defensa o en un aula sin wifi.
- **Estética de aplicación.** Fondo oscuro, naranja Crunchyroll `#f47521`, degradados, píldoras,
  tarjetas redondeadas y una barra de navegación pegajosa que imita la app real.
- **El modelo vive en datos, no en el marcado.** Los bloques, las relaciones y las vistas guiadas
  son arreglos de JavaScript al principio del `<script>`. Añadir información es añadir un objeto, no
  tocar la interfaz.
- **Curvas calculadas, no dibujadas a mano.** Cada relación se traza en SVG midiendo la posición real
  de los bloques, así que se mantiene correcta cuando el lienzo se reordena o un bloque se expande.
- **Validación de integridad.** Al cargar, un validador comprueba que toda relación, vista y etiqueta
  apunte a un bloque real. Si algo se rompe, aparece el detalle en la consola en lugar de un lienzo
  silenciosamente incorrecto.
- **Accesibilidad.** Botones con `aria-pressed`, panel `aria-live`, foco visible y respeto de
  `prefers-reduced-motion`.

## Cómo se publica

El sitio se despliega con GitHub Actions (`/.github/workflows/pages.yml`):

1. Cada `push` a la rama `Practica03-Brian` ejecuta el flujo.
2. `actions/configure-pages` habilita GitHub Pages si el repositorio aún no lo tenía.
3. `bmc-crunchyroll-brian.html` se copia como `index.html` y se sube como artefacto de Pages.
4. Queda publicado en <https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/>.

Para probarlo igual que en producción, sin subir nada:

```bash
python -m http.server 8000
# abrir http://localhost:8000/Practica03_brian/bmc-crunchyroll-brian.html
```

## Estructura del repositorio

```
Practica03_brian/
├── bmc-crunchyroll-brian.html   # el lienzo completo (HTML + CSS + JS)
└── README.md                    # este archivo
```

## Fuentes

Los datos provienen de información pública y se citan dentro del propio panel lateral:

- **Sony Group Corporation**, resultados del ejercicio cerrado a marzo de 2026.
- **Sony Pictures Entertainment**, informe de resultados.
- **Crunchyroll**, comunicación de precios de 2 de febrero de 2026 y fin del plan gratuito el
  31 de diciembre de 2025.
- Prensa sectorial para los antecedentes societarios.

Documento académico: no utiliza información financiera interna.

---

Práctica 03 · Integradora · Autor: Brian
