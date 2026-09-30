(()=>{
 const section=document.getElementById('balance'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const noMotion=()=>reduced.matches||document.documentElement.classList.contains('motion-off');
 section.classList.add('chart-ready');
 const reveal=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){section.classList.add('chart-visible');reveal.disconnect();}},{threshold:.15});reveal.observe(document.querySelector('.quota-chart'));
 const values=[[700,1250,300],[1100,1800,450],[1500,2400,650]];
 function selectRound(n){section.querySelectorAll('[data-round]').forEach(el=>{const active=Number(el.dataset.round)===n;el.classList.toggle('is-active',active);if(el.classList.contains('round-node'))el.setAttribute('aria-pressed',String(active));});const v=values[n-1];document.getElementById('round-readout').textContent=`ROUND ${n} / Floor ${v[0].toLocaleString()} · Ceiling ${v[1].toLocaleString()} · Payment ${v[2]}`;}
 section.querySelectorAll('[data-round]').forEach(el=>{const select=()=>selectRound(Number(el.dataset.round));el.addEventListener('pointerenter',select);el.addEventListener('focus',select);el.addEventListener('click',select);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select();}});});
 const slider=document.getElementById('ev-bet'),out=document.getElementById('ev-value');let current=-8.5,target=current,frame;
 const write=v=>{out.textContent=(v<0?'−':'+')+Math.abs(v).toFixed(2);};
 function update(){const stake=Number(slider.value);target=-stake*.085;document.getElementById('stake-value').textContent=stake;slider.style.setProperty('--stake-fill',((stake-50)/650*100)+'%');slider.setAttribute('aria-valuetext',`${stake} chips; illustrative expected net ${target.toFixed(2)} chips per hand`);cancelAnimationFrame(frame);if(noMotion()){current=target;write(current);return;}const start=current,t0=performance.now();function step(now){const p=Math.min((now-t0)/260,1);current=start+(target-start)*(1-Math.pow(1-p,3));write(current);if(p<1)frame=requestAnimationFrame(step);}frame=requestAnimationFrame(step);}
 slider.addEventListener('input',update);
 new MutationObserver(()=>{if(noMotion()){cancelAnimationFrame(frame);current=target;write(current);}}).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
 reduced.addEventListener('change',()=>{if(noMotion()){cancelAnimationFrame(frame);current=target;write(current);}});
 const toggle=document.getElementById('measurement-toggle'),body=document.getElementById('measurement-body');toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));body.inert=!open;toggle.closest('.log-accordion').classList.toggle('is-open',open);});
})();
