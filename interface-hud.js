(()=>{
 const area=document.getElementById('interface'),chips=area.querySelector('.chip-matrix');
 area.querySelector('#ui-demo').addEventListener('click',()=>{chips.classList.remove('is-dealing');void chips.offsetWidth;chips.classList.add('is-dealing');});
 chips.addEventListener('animationend',e=>{if(e.target===chips.lastElementChild)chips.classList.remove('is-dealing');});
 area.querySelectorAll('.state-node').forEach(node=>{
  const highlight=on=>{node.classList.toggle('is-linked',on);[node.previousElementSibling,node.nextElementSibling].forEach(el=>{if(el?.classList.contains('state-arrow'))el.classList.toggle('is-linked',on);});};
  node.addEventListener('pointerenter',()=>highlight(true));node.addEventListener('pointerleave',()=>highlight(node===document.activeElement));node.addEventListener('focus',()=>highlight(true));node.addEventListener('blur',()=>highlight(false));
 });
})();
