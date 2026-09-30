(()=>{
 const hero=document.querySelector('.editorial-hero-grid>div');const seal=document.createElement('span');seal.className='pixel-777';seal.setAttribute('aria-hidden','true');seal.innerHTML='<b>777</b><small>SUCKER BET</small>';hero.append(seal);
 document.querySelectorAll('.core-stamp,.key-stamp').forEach(el=>el.classList.add('pixel-stamp'));
 document.querySelectorAll('.unified-console,.dev-ide,.hierarchy-anchor,.editorial-manifesto').forEach(box=>{box.classList.add('pixel-armored');const trim=document.createElement('span');trim.className='pixel-corners';trim.setAttribute('aria-hidden','true');trim.innerHTML='<i></i><i></i><i></i><i></i>';box.append(trim);});
 document.querySelectorAll('.dev-ide,.suspicion-playground').forEach(box=>{box.classList.add('crt-panel');const layer=document.createElement('span');layer.className='crt-lines';layer.setAttribute('aria-hidden','true');box.append(layer);});
 document.querySelectorAll('.section-index').forEach(label=>{label.classList.add('pixel-divider');});
 const cards=[...document.querySelectorAll('.art-card')];cards.forEach((card,i)=>{
 card.classList.add('rpg-target');card.tabIndex=0;
 const chip=document.createElement('span');chip.className='exhibit-chip';chip.setAttribute('aria-hidden','true');chip.textContent='◆';card.append(chip);
 const vals=[...card.querySelectorAll('dd')].map(el=>el.textContent.trim());
 const tip=document.createElement('span');tip.className='rpg-tip';tip.id=`art-tooltip-${i}`;tip.setAttribute('role','tooltip');tip.innerHTML=`<b>${card.querySelector('h3').textContent}</b><span>PRICE: ${vals[0]} · INCOME: ${vals[2]}</span><span>VISIBLE VALUE: ${vals[1]}</span><span>${i===0?'OPENING GIFT · RESALE: 0':'RESALE: 70% OF PAID PRICE'}</span>`;card.append(tip);card.setAttribute('aria-describedby',tip.id);
 });
 document.querySelectorAll('.chip-token').forEach((chip,i)=>{chip.classList.add('rpg-target');const tip=document.createElement('span');tip.className='rpg-tip';tip.id=`chip-tooltip-${i}`;tip.setAttribute('role','tooltip');tip.innerHTML=`<b>CHIP / ${chip.textContent.trim()}</b><span>COLOR: ${chip.dataset.hex}</span><span>UI STUDY · ILLUSTRATIVE VALUE</span>`;chip.append(tip);chip.setAttribute('aria-describedby',tip.id);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.rpg-target').forEach(el=>el.classList.add('tip-dismissed'));});
 document.querySelectorAll('.rpg-target').forEach(el=>{el.addEventListener('pointerenter',()=>el.classList.remove('tip-dismissed'));el.addEventListener('focus',()=>el.classList.remove('tip-dismissed'));});
})();
