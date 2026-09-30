(()=>{
 const selectors=['#overview .premise-card','#table .rules-card','#economy .art-featured','#balance .diagnostic-metric','#interface .playground-panel'];
 selectors.forEach(s=>{const card=document.querySelector(s);if(!card)return;card.classList.add('hierarchy-anchor');const stamp=document.createElement('span');stamp.className='key-stamp';stamp.textContent='★ KEY ITEM';card.append(stamp);});
 document.querySelectorAll('.panel,.art-card,.loop-card').forEach(card=>{if(card.querySelector(':scope > .hierarchy-sweep'))return;const sweep=document.createElement('span');sweep.className='hierarchy-sweep';sweep.setAttribute('aria-hidden','true');card.append(sweep);});
})();
