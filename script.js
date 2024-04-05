const counters = document.querySelectorAll('.number-increment-animation'); const speed = 300

function updateCount (counter) {
  const target = +counter.getAttribute('data-target')
  const count = +counter.innerText
  const inc = target / speed

  if (count < target) {
    counter.innerText = Math.ceil(count + inc)
    setTimeout(() => updateCount(counter), 1)
  } else {
    counter.innerText = target
  }
}

counters.forEach(updateCount)
