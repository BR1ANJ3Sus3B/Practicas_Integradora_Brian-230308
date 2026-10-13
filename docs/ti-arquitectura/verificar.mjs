import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
import {createHash} from 'node:crypto';
const {ChromeVisualBrowser}=await import(pathToFileURL('C:/Users/jesus/.agents/skills/archify/bin/visual-check.mjs'));
const browser=new ChromeVisualBrowser('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe');
const receipt={status:'pending',viewports:[],checks:[],files:{}};
try{
 const session=await browser.sessionPromise;
 const send=(m,p={})=>browser.cdp.send(m,p,session);
 const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
 await send('Page.addScriptToEvaluateOnNewDocument',{source:"window.errors=[];addEventListener('error',e=>errors.push(e.message));addEventListener('unhandledrejection',e=>errors.push(String(e.reason)));"});
 const loaded=browser.cdp.waitFor('Page.loadEventFired',session);await send('Page.navigate',{url:pathToFileURL(path.resolve('arquitectura.html')).href});await loaded;
 const settle=()=>evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');
 for(const [width,height] of [[1440,900],[1600,1000],[1920,1080],[2048,1320],[768,1024],[390,844],[320,740]]){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await settle();
  const data=await evaluate('({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,nodes:document.querySelectorAll(".node").length,edges:document.querySelectorAll(".edge").length,vertical: getComputedStyle(document.querySelector(".map")).flexDirection})');assert.ok(data.scrollWidth<=width,JSON.stringify(data));assert.equal(data.nodes,8);assert.equal(data.edges,10);if(width<=650)assert.equal(data.vertical,'column');receipt.viewports.push(data);
 }
 for(const id of ['player','admin','teacher','game','mobile','web','identity','service','storage','metrics','dashboards','docker','github','pages']){
 await evaluate(`document.querySelector('[data-node="${id}"]').focus();document.querySelector('[data-node="${id}"]').click()`);
 assert.equal(await evaluate('document.querySelector("#detail").open'),true);
 assert.equal(await evaluate('document.querySelectorAll("#detail-content li").length>=4'),true);
 await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
 assert.equal(await evaluate('document.querySelector("#detail").open'),false);assert.equal(await evaluate(`document.activeElement.dataset.node==='${id}'`),true);receipt.checks.push('Ficha, Escape y foco: '+id);
 }
 for(let i=0;i<5;i++){await evaluate(`document.querySelector('[data-flow="${i}"]').click()`);assert.ok(await evaluate('document.querySelectorAll(".edge.active").length>0'));receipt.checks.push('Flujo '+i);}
 await evaluate('document.querySelector("#motion").click()');assert.equal(await evaluate('document.body.classList.contains("paused")'),true);receipt.checks.push('Pausa animaciones');
 await evaluate('document.querySelector("#reset-flow").click()');assert.equal(await evaluate('document.querySelectorAll(".edge.active,.node.dim").length'),0);receipt.checks.push('Restablecer mapa');
 await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});assert.equal(await evaluate('getComputedStyle(document.documentElement).scrollBehavior'), 'auto');receipt.checks.push('Movimiento reducido');
 await evaluate('document.querySelector(".archify").open=true');await settle();assert.ok(await evaluate('document.querySelector("iframe").src.endsWith("/archify.html")'));await evaluate('document.querySelector(".archify").open=false');receipt.checks.push('Integración Archify');
 for(const [width,height,name] of [[1440,1100,'web'],[390,844,'movil']]){await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await evaluate('document.activeElement.blur();window.scrollTo({top:0,behavior:"instant"})');await settle();await evaluate('new Promise(r=>setTimeout(r,250))');const shot=await send('Page.captureScreenshot',{format:'png'});await fs.writeFile('docs/ti-arquitectura/'+name+'.png',Buffer.from(shot.data,'base64'));}
 assert.deepEqual(await evaluate('window.errors'),[]);
 for(const name of ['arquitectura.html','docs/ti-arquitectura/styles.css','docs/ti-arquitectura/app.js']){const b=await fs.readFile(name);receipt.files[name]={sha256:createHash('sha256').update(b).digest('hex'),bytes:b.length};}
 receipt.status='passed';console.log(JSON.stringify(receipt));
}catch(e){receipt.status='failed';receipt.error=String(e);console.error(e);process.exitCode=1;}finally{await fs.writeFile('docs/ti-arquitectura/verificacion-web.json',JSON.stringify(receipt,null,2));await browser.close();}
