const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const src = fs.readFileSync(path.join(__dirname, 'canvas-crunchyroll-v1.html'), 'utf8');

const test = `
<script>
const R = [];
const ok = (n, c, extra) => R.push({ n, ok: !!c, extra: extra === undefined ? '' : String(extra) });
const errs = [];
addEventListener('error', e => errs.push(e.message));

const nodes = [...document.querySelectorAll('.node')];
ok('7 nodos renderizados', nodes.length === 7, nodes.length);
ok('celda de ayuda dentro de la rejilla', !!document.querySelector('.nodes .hintcell'));
ok('cada nodo tiene detalle', nodes.every(n => n.querySelectorAll('.detail .item-title').length > 0),
   nodes.map(n => n.querySelectorAll('.detail .item-title').length).join('/'));
ok('cada nodo tiene resumen', nodes.every(n => n.querySelector('.resumen').textContent.trim().length > 20));
ok('cada nodo lista sus relaciones', nodes.every(n => n.querySelectorAll('.relchip').length > 0),
   nodes.map(n => n.querySelectorAll('.relchip').length).join('/'));
ok('evidencia en todos los items', nodes.every(n =>
   [...n.querySelectorAll('.detail .ev')].length === n.querySelectorAll('.detail .item-title').length));
ok('7 flechas dibujadas', document.querySelectorAll('#graph .draw').length === 7,
   document.querySelectorAll('#graph .draw').length);
ok('7 tarjetas', document.querySelectorAll('.card').length === 7);
ok('6 vistas guiadas', document.querySelectorAll('.view').length === 6);
ok('panel inicial explica el modelo', /7 componentes/.test(document.querySelector('#panel').textContent));

// --- expandir nodo al hacer clic ---
const sol = document.getElementById('solucion');
const anchoAntes = sol.getBoundingClientRect().width;
sol.click();
const anchoDespues = sol.getBoundingClientRect().width;
ok('el nodo clickeado se expande (mas ancho)', anchoDespues > anchoAntes + 40,
   Math.round(anchoAntes) + ' -> ' + Math.round(anchoDespues));
ok('clase expanded aplicada', sol.classList.contains('expanded'));
ok('aria-expanded=true', sol.getAttribute('aria-expanded') === 'true');
ok('el detalle es visible al expandir',
   getComputedStyle(sol.querySelector('.detail')).display !== 'none');
ok('los 7 modulos M1-M7 visibles',
   sol.querySelectorAll('.detail .item-title').length === 7,
   sol.querySelectorAll('.detail .item-title').length);
ok('el panel muestra el detalle del nodo', /M7/.test(document.querySelector('#panel').textContent));
ok('el panel declara la evidencia', /analisis-proyecto\\.md/.test(document.querySelector('#panel').textContent));
ok('la celda de ayuda se oculta al seleccionar', !document.querySelector('.hintcell').offsetParent);
ok('las flechas se redibujan tras expandir', document.querySelectorAll('#graph .draw').length === 7,
   document.querySelectorAll('#graph .draw').length);

// --- segundo clic: se contrae ---
sol.click();
ok('segundo clic contrae el nodo', !sol.classList.contains('expanded'));
ok('el detalle se oculta al contraer',
   getComputedStyle(sol.querySelector('.detail')).display === 'none');

// --- tarjeta activa el nodo ---
document.querySelector('.card[data-id=recursos]').click();
ok('la tarjeta expande su nodo', document.getElementById('recursos').classList.contains('expanded'));
ok('el panel lista el stack real', /MongoDB \\+ Mongoose/.test(document.querySelector('#panel').textContent));
document.getElementById('recursos').click();

// --- clic en una flecha ---
const edge = document.querySelector('#graph .draw');
edge.dispatchEvent(new MouseEvent('click', { bubbles: true }));
ok('el clic en la flecha abre la relacion', /Relaci[oó]n 1 de 7/.test(document.querySelector('#panel').textContent));
ok('la relacion explica su significado', /C1–C5 producen consecuencias/.test(document.querySelector('#panel').textContent));
ok('la relacion se resalta', document.querySelectorAll('#graph .edge.active').length === 1);

// --- vista guiada ---
document.querySelectorAll('.view')[0].click();
ok('la vista guiada marca sus bloques', document.querySelectorAll('.node.active, .node.dim').length >= 7,
   document.querySelectorAll('.node.dim').length + ' atenuados');
document.querySelectorAll('.view')[0].click();

// --- busqueda ---
const s = document.querySelector('#search');
s.value = 'mongodb';
s.dispatchEvent(new Event('input'));
ok('la busqueda filtra por contenido real', document.querySelectorAll('.node.off').length === 6,
   document.querySelectorAll('.node.off').length);
ok('la busqueda abre el nodo encontrado', document.getElementById('recursos').classList.contains('expanded'));
ok('la busqueda oculta flechas no aplicables', document.querySelectorAll('#graph .draw').length < 7,
   document.querySelectorAll('#graph .draw').length);
s.value = '';
s.dispatchEvent(new Event('input'));
ok('limpiar la busqueda restaura todo',
   document.querySelectorAll('.node.off').length === 0 && document.querySelectorAll('#graph .draw').length === 7);

// --- datos reales presentes ---
const txt = document.body.textContent;
[['C1',1],['U5',1],['M7',1],['A7',1],['R7',1],['JWT',1],['HLS',1],['Docker Compose',1],['webhooks',1]]
  .forEach(([t]) => ok('contenido real: ' + t, txt.includes(t)));
ok('fuente de verdad citada', /Practica03\\/business-model-canvas\\/analisis-proyecto\\.md/.test(txt));
ok('sin errores de JS', errs.length === 0, errs.join(' | '));

document.title = 'RESULT:' + JSON.stringify(R);
</script>
`;

fs.writeFileSync('C:/Users/jesus/AppData/Local/Temp/opencode/canvas-test.html', src.replace('</body>', test + '</body>'));

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const dom = execFileSync(edge, [
  '--headless=new', '--disable-gpu', '--no-sandbox', '--allow-file-access-from-files',
  '--window-size=1440,900', '--virtual-time-budget=4000', '--dump-dom',
  'file:///C:/Users/jesus/AppData/Local/Temp/opencode/canvas-test.html'
], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });

const m = dom.match(/<title>RESULT:([\s\S]*?)<\/title>/);
if (!m) { console.log('No se pudo leer el resultado. Titulo:', (dom.match(/<title>[\s\S]*?<\/title>/) || [])[0]); process.exit(1); }
const R = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
const fail = R.filter(r => !r.ok);
R.forEach(r => console.log((r.ok ? 'PASA  ' : 'FALLA ') + r.n + (r.extra ? '  [' + r.extra + ']' : '')));
console.log('\n' + (R.length - fail.length) + '/' + R.length + ' comprobaciones pasan');
process.exit(fail.length ? 1 : 0);
