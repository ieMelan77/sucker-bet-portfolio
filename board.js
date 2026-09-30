(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const nodes = {
    quota:{label:'RULE / 01 — QUOTA',title:'A band, not a score.',properties:[['Cash floor','700'],['Base wealth ceiling','1,250'],['Gift on display','30 value']],formula:'Cash ceiling = 1,250 − 30 = 1,220',intent:'Make restraint a strategy: cash must cover debt without making the player too visible.'},
    hands:{label:'RULE / 02 — PROGRESSION',title:'Five hands. Then a decision.',properties:[['Hands per check','5'],['Repayment rounds','3'],['After passing','Cash out / continue']],formula:'Hand results → wealth check → gallery or new cycle',intent:'Separate short-term hand risk from longer-term repayment. Continuing delays the gallery decision.'},
    cheat:{label:'RULE / 03 — CHEAT',title:'Information has a price.',properties:[['Paid peek','+20 suspicion'],['Caught at','100'],['Information','Next draw']],formula:'Suspicion ≥ 100 → caught',intent:'Trade future safety for certainty now. Peeking reveals information; it does not improve the shuffled deck.'}
  };
  function inspect(key){
    const n=nodes[key]; if(!n)return;
    const terminal=document.querySelector('.stat-terminal');
    if(terminal){terminal.classList.remove('is-pulsing');void terminal.offsetWidth;terminal.classList.add('is-pulsing');}
    $('#inspect-label').textContent=n.label; $('#inspect-title').textContent=n.title;
    $('#inspect-properties').replaceChildren(...n.properties.map(([k,v])=>{const row=document.createElement('div');row.className='data-row';const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=k;dd.textContent=v;row.append(dt,dd);return row;}));
    $('#inspect-formula').textContent=n.formula;$('#inspect-intent').textContent=n.intent;
    document.querySelectorAll('[data-inspect]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.inspect===key)));
  }
  document.querySelectorAll('[data-inspect]').forEach(b=>{b.addEventListener('click',()=>inspect(b.dataset.inspect));b.addEventListener('focus',()=>inspect(b.dataset.inspect));b.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')inspect(b.dataset.inspect);});});
  function updatePeeks(){
    const control=$('#peek-count'), count=Number(control.value), suspicion=count*20, caught=count===5;
    const panel=$('.suspicion-playground');
    panel.dataset.risk=caught?'caught':count===4?'warning':'safe';
    panel.style.setProperty('--peek-fill',(count*20)+'%');
    panel.style.setProperty('--peek-ratio',count/5);
    panel.style.setProperty('--tip-shift',count===0?'0%':count===5?'-100%':'-50%');
    panel.style.setProperty('--tip-arrow',count===0?'10px':count===5?'calc(100% - 18px)':'calc(50% - 4px)');
    $('#peek-number').textContent=count;$('#peek-tip-value').textContent=count;
    document.querySelectorAll('.peek-ticks span').forEach((tick,i)=>tick.classList.toggle('is-current',i===count));
    $('#suspicion-value').textContent=suspicion+' / 100';
    $('#risk-status').textContent=caught?'CAUGHT':count===4?'AT THE EDGE':'SAFE';
    control.setAttribute('aria-valuetext',count+' paid peeks, '+suspicion+' suspicion, '+(caught?'caught':count===4?'warning':'safe'));
    $('#suspicion-message').textContent=caught?'CAUGHT — 100 suspicion. The run ends; no further gallery income.':count===4?'WARNING — 80 suspicion. This peek is safe, but one more reaches the limit.':count===0?'Four paid peeks remain below the limit. The fifth reaches 100 and ends the run.':suspicion+' suspicion. '+(4-count)+(count===3?' more paid peek remains below the limit.':' more paid peeks remain below the limit.');
    $('#formula-peeks').textContent=count;$('#formula-used').textContent=count;$('#formula-suspicion').textContent=suspicion;$('#formula-remaining').textContent=Math.max(0,4-count);
    $('#formula-cashouts').textContent=caught?0:1;$('#conditional-income').textContent=caught?'0':'+15';$('.income-model').dataset.caught=String(caught);
    $('#income-explanation').textContent=caught?'Caught before returning to the gallery: the illustrative next cash-out is unavailable.':'If the next wealth check passes and you cash out with City Study displayed, its payout is 15 chips.';
  }
  $('#peek-count').addEventListener('input',updatePeeks);updatePeeks();
  $('#peek-count').addEventListener('pointerdown',()=>$('.peek-control').classList.add('is-dragging'));
  window.addEventListener('pointerup',()=>$('.peek-control').classList.remove('is-dragging'));
  window.addEventListener('pointercancel',()=>$('.peek-control').classList.remove('is-dragging'));
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'); let off=reduced.matches;
  function sync(){document.documentElement.classList.toggle('motion-off',off);$('#motion-toggle').textContent=off?'MOTION OFF':'MOTION ON';$('#motion-toggle').setAttribute('aria-pressed',String(off));}sync();
  $('#motion-toggle').addEventListener('click',()=>{off=!off;sync();});reduced.addEventListener('change',e=>{off=e.matches;sync();});
  $('#ui-demo').addEventListener('click',()=>{$('#ui-feedback').textContent='Deal confirmed · action feedback preview.';});
  function loadBuild(){if($('#build-mount iframe'))return;const frame=document.createElement('iframe');frame.src='game/index.html';frame.title='Original Sucker Bet Unity build';frame.allow='fullscreen; autoplay';frame.allowFullscreen=true;$('#build-mount').append(frame);}
  $('#build-details').addEventListener('toggle',()=>{if($('#build-details').open)loadBuild();});
  document.querySelector('a[href="#play"]').addEventListener('click',()=>{$('#build-details').open=true;loadBuild();});
  const sections=[...document.querySelectorAll('.sheet-section')];
  const io=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)document.querySelectorAll('.topnav a').forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});},{rootMargin:'-12% 0px -65% 0px',threshold:0});sections.forEach(s=>io.observe(s));
})();
