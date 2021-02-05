function scroll() {
  let o = window.scrollY;
  var s = document.querySelector(".header"),
      e = s.offsetHeight;
  window.addEventListener("scroll", function () {
      (o = window.scrollY), o >= e + 10 ? s.classList.add("is-down") : s.classList.remove("is-down");
  });
}
scroll();

lightGallery(document.getElementById('about-gallery'),{
  download: false,
  zoom: false
})
lightGallery(document.getElementById('features-gallery'),{
  download: false,
  zoom: false
})

var scroll = new SmoothScroll('a[data-scroll]', {
	speed: 500,
  speedAsDuration: true,
  updateURL: false,
  header: '[data-scroll-header]'
});

var infoSlider = tns({
  container: '.info__slider',
  items: 1,
  slideBy: 'page',
  controls: true,
	autoplayButtonOutput: false,
  autoplayTimeout: 4000,
  mouseDrag: true,
  swipeAngle: false,
  speed: 1000,
	slideBy: 'page',
  controls: true,
  nav: false,
  controlsContainer: ".info__slider-controls",
  autoplay: true
});


var infoSlider = tns({
  container: '.features__slider',
  items: 1,
  slideBy: 'page',
  controls: true,
	autoplayButtonOutput: false,
  autoplayTimeout: 4000,
  mouseDrag: true,
  swipeAngle: false,
  speed: 1000,
  gutter: 50,
  controls: true,
  autoplay: false,
  nav: false,
  loop: false,
  controlsContainer: ".features__slider-controls",
  responsive: {
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    1280: {
      items: 3
    }
  }
});


var infoSlider = tns({
  container: '.programs__slider',
  items: 1,
  slideBy: 'page',
  controls: true,
	autoplayButtonOutput: false,
  autoplayTimeout: 4000,
  mouseDrag: true,
  swipeAngle: false,
  speed: 1000,
  gutter: 50,
  controls: true,
  autoplay: true,
  nav: false,
  loop: false,
  controlsContainer: ".programs__slider-controls",
  responsive: {
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2
    },
    1280: {
      items: 3
    }
  }
});



const videoPlay = document.querySelectorAll(".modal__tgl");
const demoVideo = document.querySelector(".modal");
// const jsVideo = document.querySelector(".js-video");
const videoClose = document.querySelectorAll(".modal__cls");
const page = document.querySelector("html");

var videoPlayBtns = videoPlay;
videoPlayBtns.forEach(function(btn){
  btn.onclick = function() {
    var v = btn.getAttribute('data-m-open');
    document.getElementById(v).classList.add('is-open');
    page.classList.add('no-scroll');
    // document.querySelector('[data-v="'+ v +'"]').play();
  }
});

var videoCloseBtns = videoClose;
videoCloseBtns.forEach(function(btn){
  btn.onclick = function() {
    var v = btn.closest('.modal');
    v.classList.remove('is-open');
    page.classList.remove('no-scroll');
    // var c = btn.getAttribute('data-m-close');
    // document.querySelector('[data-m="'+ c +'"]').remove('is-open');
  }
});
