const counters = document.querySelectorAll('.number-increment-animation')
const speed = 300

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

    const inc = target / speed

    if (count < target) {
      counter.innerText = Math.ceil(count + inc)
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target
    }
  }
  updateCount()
})

const acc = document.getElementsByClassName('accordion')
let i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const panel = this.nextElementSibling
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}
