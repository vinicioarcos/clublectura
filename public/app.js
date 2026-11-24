'use strict';
const key='utc-lectura-figueroa-v1';
let completed=[];
try { const stored=JSON.parse(localStorage.getItem(key)||'[]'); if(Array.isArray(stored)) completed=[...new Set(stored.filter(n=>Number.isInteger(n)&&n>=0&&n<CLUB.capitulos.length))]; } catch { document.getElementById('storage-note').textContent='El almacenamiento no está disponible. Puedes usar el seguimiento durante esta visita.'; }
const chapters=document.getElementById('chapters');
CLUB.capitulos.forEach((chapter,i)=>{
 const article=document.createElement('article'); article.className='chapter';
 const detail=document.createElement('details'); const summary=document.createElement('summary');
 const num=document.createElement('span');num.className='chapter-number';num.textContent=String(i+1).padStart(2,'0');
 const title=document.createElement('span');title.className='chapter-title';title.textContent=chapter.titulo;summary.append(num,title);
 const body=document.createElement('div');body.className='chapter-body';
 const pages=document.createElement('p');pages.className='small-label';pages.textContent='PÁGINAS '+chapter.paginas;
 const question=document.createElement('p');question.textContent=chapter.pregunta;
 const label=document.createElement('label'); const input=document.createElement('input');input.type='checkbox';input.checked=completed.includes(i);input.setAttribute('aria-label','Marcar como leído: '+chapter.titulo);label.append(input,document.createTextNode('He terminado este capítulo'));
 input.addEventListener('change',()=>{ completed=input.checked?[...new Set([...completed,i])]:completed.filter(n=>n!==i);save();update(); });
 body.append(pages,question,label);detail.append(summary,body);article.append(detail);chapters.append(article);
});
function update(){document.getElementById('progress-label').textContent=completed.length+' de '+CLUB.capitulos.length+' capítulos leídos';document.getElementById('progress').value=completed.length;[...chapters.children].forEach((el,i)=>{el.classList.toggle('done',completed.includes(i));el.querySelector('input').checked=completed.includes(i);});}
function save(){try{localStorage.setItem(key,JSON.stringify(completed));}catch{document.getElementById('storage-note').textContent='No se puede guardar el avance; se conservará solo durante esta visita.';}}
update();
const dialog=document.getElementById('reset-dialog');document.getElementById('reset').onclick=()=>dialog.showModal();document.getElementById('cancel-reset').onclick=()=>dialog.close();document.getElementById('confirm-reset').onclick=()=>{completed=[];save();update();dialog.close();};
const menu=document.querySelector('.menu');const nav=document.getElementById('nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));};nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const normalize=t=>t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();document.getElementById('book-search').addEventListener('input',e=>{let count=0;document.querySelectorAll('.past-book').forEach(el=>{const match=normalize(el.dataset.search).includes(normalize(e.target.value.trim()));el.hidden=!match;if(match)count++;});document.getElementById('no-results').hidden=count>0;});
if(CLUB.registroUrl){try{const u=new URL(CLUB.registroUrl);if(u.protocol==='https:'){const a=document.createElement('a');a.href=u.href;a.className='button';a.textContent='Abrir inscripción';a.target='_blank';a.rel='noopener noreferrer';document.getElementById('registration').replaceChildren(a);}}catch{}}
