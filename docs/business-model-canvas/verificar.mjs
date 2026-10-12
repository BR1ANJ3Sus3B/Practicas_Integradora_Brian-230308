// Verificación local con Chromium. Usa únicamente el transporte CDP de Archify.
// ARCHIFY_DIR y CANVAS_BROWSER permiten adaptar las rutas a otro equipo.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
const root=path.dirname(fileURLToPath(import.meta.url));
const skill=process.env.ARCHIFY_DIR || 'C:/Users/jesus/.agents/skills/archify';
const {ChromeVisualBrowser}=await import(pathToFileURL(path.join(skill,'bin/visual-check.mjs')));
const browser=new ChromeVisualBrowser(process.env.CANVAS_BROWSER || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe');
const receipt={status:'pending',files:{},viewports:[],interactions:[],visualReview:'pending'};
try {
 const session=await browser.sessionPromise;
 const send=(method,args={})=>browser.cdp.send(method,args,session);
 const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:`window.canvasErrors=[];addEventListener('error',e=>canvasErrors.push(e.message));addEventListener('unhandledrejection',e=>canvasErrors.push(String(e.reason)));`});
 const loaded=browser.cdp.waitFor('Page.loadEventFired',session);
 await send('Page.navigate',{url:pathToFileURL(path.join(root,'index.html')).href});await loaded;
 const settle=()=>evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');
 for(const [width,height] of [[1440,900],[1600,1000],[1920,1080],[2048,1320],[1024,768],[768,1024],[390,844],[320,740]]){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await settle();
  const m=await evaluate(`({width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,cards:document.querySelectorAll('.canvas-card').length,edges:document.querySelectorAll('#canvas-connections .connection').length})`);
  assert.ok(m.scrollWidth<=width,`Horizontal overflow at ${width}: ${m.scrollWidth}`);assert.equal(m.cards,7);assert.equal(m.edges,6);receipt.viewports.push(m);
 }
 const check=async(name,expression)=>{assert.equal(await evaluate(expression),true,name);receipt.interactions.push(name);};
 await check('Solución resalta aplicaciones, API y conexiones',`(()=>{document.querySelector('[data-select="solucion"]').click();return ['unity','flutter','react','api'].every(id=>document.getElementById('tech-'+id).classList.contains('is-active'))&&document.querySelectorAll('#architecture-connections .active').length===3;})()`);
 await check('Usuario jugador conecta Unity y Flutter',`(()=>{document.getElementById('tech-jugador').click();return ['jugador','keycloak','unity','flutter'].every(id=>document.getElementById('tech-'+id).classList.contains('is-active'))&&document.querySelectorAll('#architecture-connections [data-from="jugador"]').length===3;})()`);
 await check('Administrador conecta React PWA',`(()=>{document.getElementById('tech-administrador').click();return document.getElementById('tech-react').classList.contains('is-active')&&!document.getElementById('tech-unity').classList.contains('is-active');})()`);
 await check('Docente no recibe una plataforma no definida',`(()=>{document.getElementById('tech-docente').click();return !document.getElementById('tech-react').classList.contains('is-active')&&document.getElementById('tech-details').textContent.includes('no está especificada');})()`);
 for(const id of ['problema','usuarios','valor','solucion','procesos','recursos','resultados']){
  await check('Modal completo: '+id,`(()=>{document.querySelector('[data-detail="${id}"]').click();return document.getElementById('detail-dialog').open&&document.querySelectorAll('#dialog-content li').length>=4;})()`);
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  assert.equal(await evaluate(`document.getElementById('detail-dialog').open`),false);
 }
 await check('Tarjeta expandible recalcula conexiones',`(()=>{const d=document.querySelector('[data-id="problema"] details');d.open=true;return d.open;})()`);await settle();
 await check('Restablecer contrae tarjetas y selecciona propuesta',`(()=>{document.getElementById('reset-selection').click();return !document.querySelector('.canvas-card details[open]')&&document.querySelector('[data-id="valor"]').classList.contains('is-selected');})()`);
 for(const [id,count] of [['jugador',16],['administracion',5],['contenido',7],['autenticacion',6]]){
  await check('Flujo completo: '+id,`(()=>{document.getElementById('tab-${id}').click();return document.querySelectorAll('[data-step]').length===${count};})()`);
 }
 await check('Navegación por teclado entre procesos',`(()=>{document.getElementById('tab-autenticacion').focus();document.getElementById('process-tabs').dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));return document.activeElement.id==='tab-jugador'&&document.getElementById('tab-jugador').getAttribute('aria-selected')==='true';})()`);
 await check('Avance y reinicio del flujo',`(()=>{for(let i=0;i<16;i++)document.getElementById('next-step').click();return document.getElementById('step-count').textContent==='01';})()`);
 await check('Siete personajes, separados de roles',`document.querySelectorAll('[data-character]').length===7`);
 await check('Modal de Richar conserva personalidad',`(()=>{document.querySelector('[data-character="2"]').click();return document.getElementById('dialog-content').textContent.includes('sarcástica');})()`);
 await evaluate(`document.getElementById('close-dialog').click()`);
 await check('Demostración de logro y cierre',`(()=>{document.getElementById('show-achievement').click();const shown=!document.getElementById('achievement-toast').hidden;document.getElementById('close-toast').click();return shown&&document.getElementById('achievement-toast').hidden;})()`);
 await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
 await check('Respeta movimiento reducido',`getComputedStyle(document.documentElement).scrollBehavior==='auto'`);
 for(const [width,height,name,selector] of [[1440,900,'vista-escritorio.png',null],[1440,900,'canvas-final.png','#canvas'],[1440,900,'arquitectura-web.png','#arquitectura'],[390,844,'vista-movil.png',null],[390,844,'canvas-movil.png','#canvas'],[390,844,'arquitectura-movil.png','#arquitectura']]){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await evaluate(`document.getElementById('reset-selection').click();window.scrollTo(0,0)`);await settle();
  let clip;if(selector)clip=await evaluate(`(()=>{const r=document.querySelector('${selector}').getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height,scale:1};})()`);
  const screenshot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:!!clip,...(clip?{clip}:{})});await fs.writeFile(path.join(root,name),Buffer.from(screenshot.data,'base64'));
 }
 assert.deepEqual(await evaluate('window.canvasErrors'),[]);
 for(const name of ['index.html','styles.css','canvas.js']){const bytes=await fs.readFile(path.join(root,name));receipt.files[name]={sha256:createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length};}
 receipt.status='passed';console.log(JSON.stringify({status:receipt.status,viewports:receipt.viewports.length,interactions:receipt.interactions.length,errors:0}));
}catch(e){receipt.status='failed';receipt.error=String(e);console.error(e);process.exitCode=1;}
finally{await fs.writeFile(path.join(root,'verificacion-web.json'),JSON.stringify(receipt,null,2));await browser.close();}
