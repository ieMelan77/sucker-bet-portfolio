(()=>{
 document.querySelectorAll('.editorial-manifesto,.editorial-footer,.play-banner,.art-card,.premise-card,.diagnostic-metric').forEach((card,i)=>{const beam=document.createElement('span');beam.className='billboard-beam';beam.setAttribute('aria-hidden','true');beam.style.setProperty('--beam-delay',`${-(i%5)*.7}s`);card.append(beam);});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer:fine)'),wave=document.querySelector('.ambient-wave');let frame=0,x=0,y=0;
 const allowed=()=>!reduced.matches&&!document.documentElement.classList.contains('motion-off')&&fine.matches&&!document.hidden;
 document.addEventListener('pointermove',e=>{if(!allowed())return;x=(e.clientX/innerWidth-.5)*12;y=(e.clientY/innerHeight-.5)*10;if(!frame)frame=requestAnimationFrame(()=>{wave.style.setProperty('--ambient-x',`${x}px`);wave.style.setProperty('--ambient-y',`${y}px`);frame=0;});},{passive:true});
})();
