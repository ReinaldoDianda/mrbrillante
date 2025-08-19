const counters = document.querySelectorAll('.number-increment-animation'); 
const duration = 2000; // duración total en milisegundos (2 segundos)

function updateCount(counter) {
  const target = +counter.getAttribute('data-target');
  const start = +counter.innerText || 0;
  const startTime = performance.now();

  function animate(time) {
    // Tiempo transcurrido
    const elapsed = time - startTime;

    // Progreso entre 0 y 1
    const progress = Math.min(elapsed / duration, 1);

    // Valor actual (interpolación)
    counter.innerText = Math.floor(progress * (target - start) + start);

    // Seguir animando mientras no haya terminado
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

counters.forEach(updateCount);