(()=>{
 document.querySelector('.art-card[data-artwork="dubious"]').classList.add('art-featured');
 const core=document.querySelectorAll('.loop-card')[1];const stamp=document.createElement('span');stamp.className='core-stamp';stamp.textContent='★ CORE';core.append(stamp);
 document.querySelectorAll('.formula,.live-formula,.ev-code').forEach((el,i)=>{const shell=document.createElement('div');shell.className='unified-console';const bar=document.createElement('div');bar.className='console-bar';bar.innerHTML='<span class="console-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>'+['QUOTA / MODEL','ECONOMY / FLOW','INFORMATION / BUDGET','EV / ANALYSIS'][i]+'</span>';el.before(shell);shell.append(bar,el);});
})();
