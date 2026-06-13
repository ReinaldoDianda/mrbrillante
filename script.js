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