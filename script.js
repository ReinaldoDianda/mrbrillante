const counters = document.querySelectorAll('.number-increment-animation');
const speed = 300;

counters.forEach(counter => {
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText;

        const inc = target / speed;

        if( count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount,1);
        }else{
            count.innerText = target;
        }
    }
    updateCount();
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

