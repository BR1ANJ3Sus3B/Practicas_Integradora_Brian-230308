# Verificación de la página interactiva

```text
output: docs/business-model-canvas/index.html
implementation: HTML + CSS + JavaScript, sin dependencias de ejecución
components: 7
functional_checks: 23 passed
responsive_viewports: 8 passed
javascript_errors: 0
browser_evidence: passed
visual_review: passed
```

El comprobante `verificacion-web.json` vincula los hashes SHA-256 de `index.html`, `styles.css` y `canvas.js` con las comprobaciones realizadas. El script reproducible es `verificar.mjs`; usa Edge/Chromium y el transporte CDP local de Archify, sin modificar la habilidad instalada.

Se comprobó la ausencia de desbordamiento horizontal a 1440×900, 1600×1000, 1920×1080, 2048×1320, 1024×768, 768×1024, 390×844 y 320×740. La página se desplaza verticalmente para mostrar su contenido completo. No se oculta contenido para conseguir estas medidas.

Las comprobaciones funcionales incluyen los siete modales y su cierre nativo con Escape, tarjetas expandibles, restablecer selección, resaltado de aplicaciones y API, vínculos por rol, cuatro flujos completos, navegación por teclado entre pestañas, avance y reinicio del proceso, personajes, demostración de logro y preferencia de movimiento reducido. No se asignó al docente una aplicación no definida por el equipo.

La revisión visual suplementaria examinó capturas de escritorio y móvil del inicio, Canvas y arquitectura. Se corrigieron el contraste de bloques no seleccionados y el recorrido de conexiones de roles en móvil. Las imágenes actuales corresponden a los archivos identificados por el comprobante automatizado. Su campo `visualReview: pending` se mantiene separado de esta revisión perceptual.

`canvas-final.png` es una captura de la sección Canvas de la web actual, con viewport de 1440×900. `canvas-movil.png` muestra su disposición vertical a 390 píxeles. Las capturas pueden ser más altas que el viewport porque incluyen la sección completa.

## Evidencia histórica de Archify

`canvas-v1.png` y `canvas-v1.html` conservan la primera versión real. `canvas-archify.html` y `historial-archify/index.html` conservan sin modificar el Canvas generado en la entrega previa. Sus nueve controles showcase, hashes y capturas están documentados en `historial-archify/`. Esa validación **no** se atribuye a la nueva página HTML/CSS/JavaScript.

`arquitectura.html` sigue siendo el diagrama complementario original, con su comprobante `entrega-arquitectura.json`.

Publicación: archivos compatibles con GitHub Pages y acceso preparado mediante `business-model-canvas/index.html`. No se realizó un commit ni un push de esta actualización ni se verificó su despliegue remoto.
