/* JS mínimo para tooltips/modales simples */
document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-open]');
  if(btn){ alert('Detalle: '+btn.getAttribute('data-open')); }
});
