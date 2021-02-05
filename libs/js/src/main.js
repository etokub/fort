
function scroll() {
  let scrollpos = window.scrollY
  var h = document.querySelector(".header"),
      hh = h.offsetHeight;
  var a = () => h.classList.add("is-down")
  var r = () => h.classList.remove("is-down")

  window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos >= hh + 10) {
      a()
    }
    else {
      r()
    }
  })
}
scroll()