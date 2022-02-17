cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  document.getElementById("image").src = "../evil.png";
  document.getElementById("main").style.background = "rgb(54, 24, 24);";
});

cheet('0', function () {
    alert('Cheats activated!\n"1 2 3" to make me evil!\n"↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑" to activate dance mode (epilepsy warning)\n"apple" to drop an apple from the sky');

    // This will only work if the f1 key is pressed first
    cheet('1 2 3', function () {
      document.getElementById("image").src = "../evil.png";
      document.style.background = "rgb(54, 24, 24);";
    });
    cheet('↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑', function () {      var ofs = 0;
      var el = document.getElementById('main');

      window.setInterval(function () {
        el.style.background = 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
        ofs += 0.01;
      }, 10);
    })
  })



const links = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < links.length; ++i) {
  links[i].addEventListener('click', function (e) {
    e.preventDefault();
    blobScroll.scroll(e.target.getAttribute('href'));
  });
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('square-animation');
    }
  });
});

observer.observe(document.querySelector('.square1'));

observer.observe(document.querySelector('.square2'));

observer.observe(document.querySelector('.square3'));

observer.observe(document.querySelector('.square-wrapper'));

let wave1 = document.getElementById('wave1')
let wave2 = document.getElementById('wave2')
let wave3 = document.getElementById('wave3')
let wave4 = document.getElementById('wave4')

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  wave1.style.backgroundPositionX = 400 + value * 3 + 'px';
  wave2.style.backgroundPositionX = 300 + value * -3 + 'px';
  wave3.style.backgroundPositionX = 200 + value * 1 + 'px';
  wave4.style.backgroundPositionX = 100 + value * -1 + 'px';
})