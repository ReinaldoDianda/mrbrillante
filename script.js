'use strict';

const counters = document.querySelectorAll('.number-increment-animation');
const duration = 2000;

function updateCount(counter) {
  const target = +counter.getAttribute('data-target');
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    counter.innerText = Math.floor(progress * target);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        updateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function(counter) {
    observer.observe(counter);
  });
} else {
  counters.forEach(updateCount);
}
//  YouTube: el iframe pesado solo se carga si el usuario hace clic
const videoFacade = document.getElementById('video-facade');
if (videoFacade) {
  function cargarVideo() {
    const iframe = document.createElement('iframe');
    iframe.className = 'video-youtube-colchones';
    iframe.src = 'https://www.youtube.com/embed/i3LyzzwdtMY?rel=0&autoplay=1';
    iframe.title = 'Demostración de limpieza de colchones';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.border = '0';
    videoFacade.replaceWith(iframe);
  }
  videoFacade.addEventListener('click', cargarVideo);
  videoFacade.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cargarVideo(); }
  });
}
// Anio del footer automatico
document.querySelectorAll('.footer-year').forEach(function(el){ el.textContent = new Date().getFullYear(); });

// ===== TEMA CLARO / OSCURO =====
(function(){
  var btn=document.getElementById('switch');
  if(btn){ btn.addEventListener('click',function(){
    var d=document.documentElement.classList.toggle('dark');
    try{ localStorage.setItem('mb-dark', d); }catch(e){}
  }); }
  if(window.matchMedia){ try{ window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(e){
    if(localStorage.getItem('mb-dark')===null) document.documentElement.classList.toggle('dark', e.matches);
  }); }catch(e){} }
})();

// ===== IDIOMA ES / EN =====
(function(){
  var flags=document.getElementById('flags');
  var btnT=document.getElementById('switch-translater');
  var nodes=document.querySelectorAll('[data-i18n]');
  function apply(dict){ nodes.forEach(function(el){ var k=el.getAttribute('data-i18n'); if(dict[k]!=null) el.innerHTML=dict[k]; }); }
  function change(lang){
    if(!lang) return;
    document.documentElement.lang=lang;
    try{ localStorage.setItem('mb-lang', lang); }catch(e){}
    if(btnT) btnT.classList.toggle('active', lang==='en');
    fetch('languages/'+lang+'.json').then(function(r){ if(!r.ok) throw 0; return r.json(); }).then(apply).catch(function(){});
  }
  var saved=null; try{ saved=localStorage.getItem('mb-lang'); }catch(e){}
  var nav=(navigator.language||'es').toLowerCase().indexOf('en')===0?'en':'es';
  var initial=saved||nav;
  document.documentElement.lang=initial;
  if(btnT) btnT.classList.toggle('active', initial==='en');
  if(initial!=='es') change(initial);
  if(flags){ flags.addEventListener('click',function(e){ var it=e.target.closest('.flags_item'); if(it) change(it.getAttribute('data-language')); }); }
})();
