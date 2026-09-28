# Enlace a Archify / Achify

## Qué es

**Archify** es la herramienta de modelado de diagramas que genera esta práctica.
Se ejecuta desde línea de comandos con Node.js, sin instalación ni cuenta:

```powershell
node bin/archify.mjs doctor
```

Un diagrama se genera en **dos pasos obligatorios**:

1. Se escribe una **especificación JSON** (componentes, regiones, relaciones,
   vistas, tarjetas).
2. Se **valida** y se **entrega** a un HTML autocontenido:

```powershell
node bin/archify.mjs validate architecture <spec.json> --quality showcase --json
node bin/archify.mjs deliver   architecture <spec.json> <salida.html> --quality showcase --json
```

El HTML resultante no depende de scripts externos: la tipografía va incrustada en
base64 y funciona sin conexión.

**Achify** es el mismo motor de diagramas orientado a la Business Model Canvas;
en esta práctica se usa el punto de entrada `archify.mjs` con tipo de diagrama
`architecture`, que es el que describe **componentes y relaciones** de un modelo.

## Por qué `architecture` y no otro tipo

Un Business Model Canvas describe piezas de un modelo y cómo se relacionan, no
una secuencia de llamadas. Los tipos disponibles y por qué no sirven:

| Tipo | Qué representa | Por qué no |
|------|----------------|------------|
| `sequence` | Llamadas en el tiempo | El BMC no es un intercambio de mensajes |
| `workflow` | Proceso con compuertas | El BMC no tiene condiciones ni rutas alternativas |
| `dataflow` | Linaje de datos | El BMC no habla de transformaciones de datos |
| **`architecture`** | **Componentes y relaciones** | **Es exactamente lo que es un BMC** |

Archify **no tiene** un tipo de diagrama «business model». `architecture` es el
tipo correcto, y el vocabulario de software que impone (frontend, backend,
database…) se traduce a vocabulario de negocio mediante el campo `legend` y una
convención declarada. Esa tabla está en el
[`README.md`](README.md).

## El perfil `showcase`

`--quality showcase` es el perfil de máxima exigencia. Valida nueve aspectos,
entre ellos legibilidad proyectada del texto de nodo, holgura entre etiquetas y
rutas, cruces de aristas, contención en el lienzo y encaje de la leyenda con el
dock de vistas. Un entregable no se acepta si no da **9/9 con 0 errores y 0
advertencias**.

## Verificación en navegador

La validación es estática. El comportamiento real se comprueba aparte, cargando
el HTML en un navegador de verdad:

```powershell
$env:ARCHIFY_CHROME = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
node bin/archify.mjs visual-check <salida.html> --json
```

`visual-check` mide la contención real (`scrollHeight` frente a la altura del
viewport, que es lo que detecta desbordamiento vertical), el ancho efectivo del
diagrama, el tamaño proyectado del texto de nodo, el margen entre el dock de
vistas y el escenario, y guarda capturas en **1440×900, 1600×1000, 1920×1080 y
2048×1320** en tema claro y oscuro.

Que `validate` pase **no** significa que el diagrama se vea bien: sólo que la
geometría es correcta. Y que `visual-check` pase **no** significa que el mensaje
se entienda. La revisión perceptual la hace una persona.

## La evidencia de fuentes

Cuando la especificación declara `sources`, Archify exige también
`meta.repository` y **verifica que el archivo exista en la revisión indicada**
antes de renderizar:

```powershell
node bin/archify.mjs validate architecture <spec.json> --quality showcase --repo-root <raíz del repo> --json
```

Sin `--repo-root` la validación falla con
`Repository evidence requires /meta/repository`. Es intencionado: una referencia
a un archivo que ya no existe debe romper la compilación, no servir un enlace
muerto en silencio. Los 21 nodos de este lienzo apuntan a
`analisis-proyecto.md` con su línea exacta.

## Enlaces

- Diagrama publicado:
  [bmc-animehub-final.html](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/Practica03/business-model-canvas/bmc-animehub-final.html)
- BMC de Crunchyroll (9 bloques, mismo motor):
  [bmc-crunchyroll.html](https://br1anj3sus3b.github.io/Practicas_Integradora_Brian-230308/Practica03/bmc-crunchyroll.html)
- Análisis del proyecto: [`analisis-proyecto.md`](analisis-proyecto.md)
