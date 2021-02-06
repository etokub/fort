function scroll() {
  let o = window.scrollY;
  var s = document.querySelector(".header"),
      e = s.offsetHeight;
  window.addEventListener("scroll", function () {
      (o = window.scrollY), o >= e - 100 ? s.classList.add("is-down") : s.classList.remove("is-down");
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
  header: '[data-scroll-header]',
  offset: function (anchor, toggle) {
   {
			return 50;
		}

	},
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


var featuresSlider = tns({
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


var descrSlider = tns({
  container: '.descr__slider',
  items: 1,
  slideBy: 'page',
	autoplayButtonOutput: false,
  autoplayTimeout: 5000,
  mouseDrag: true,
  swipeAngle: false,
  speed: 1250,
  gutter: 0,
  controls: false,
  autoplay: true,
  nav: false,
  loop: true
  // controlsContainer: ".programs__slider-controls",
});


// var programsSlider = tns({
//   container: '.programs__slider',
//   items: 1,
//   slideBy: 'page',
//   controls: true,
// 	autoplayButtonOutput: false,
//   autoplayTimeout: 4000,
//   mouseDrag: true,
//   swipeAngle: false,
//   speed: 1000,
//   gutter: 50,
//   controls: true,
//   autoplay: true,
//   nav: false,
//   loop: false,
//   controlsContainer: ".programs__slider-controls",
//   responsive: {
//     768: {
//       edgePadding: 20,
//       gutter: 20,
//       items: 2
//     },
//     1280: {
//       items: 3
//     }
//   }
// });


const navTgl = document.querySelector("#nav-tgl");
const navMobile = document.querySelector(".header-navigation");
navTgl.onclick = function() {
  navTgl.classList.toggle('is-open');
  navMobile.classList.toggle('is-open');
}



const modalOpen = document.querySelectorAll("[data-m-open]");
const modal = document.querySelector(".modal");
const modalClose = document.querySelectorAll("[data-m-close]");
const page = document.querySelector("html");
var modalOpenBtns = modalOpen;
modalOpenBtns.forEach(function(btn){
  btn.onclick = function() {
    var v = btn.getAttribute('data-m-open');
    document.getElementById(v).classList.add('is-open');
    page.classList.add('no-scroll');
  }
});

var modalCloseBtns = modalClose;
modalCloseBtns.forEach(function(btn){
  btn.onclick = function() {
    var v = btn.closest('.modal');
    v.classList.remove('is-open');
    page.classList.remove('no-scroll');
  }
});




var phoneInput = document.querySelectorAll('.phone-input')
var phoneInputs = phoneInput
phoneInputs.forEach(function(el){
el.addEventListener('keypress', function(event) {

 if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
  var mask = '+381111111111'; 

if (/[0-9\+\ \-\(\)]/.test(event.key)) {
  var currentString = this.value;
  var currentLength = currentString.length;
  if (/[0-9]/.test(event.key)) {
    if (mask[currentLength] == '1') {
      this.value = currentString + event.key;
    } else {
      for (var i=currentLength; i<mask.length; i++) {
        if (mask[i] == '1') {
          this.value = currentString + event.key;
          break;
        }
        currentString += mask[i];
      }
    }
  }
}
});
el.addEventListener('focus', function(event) {
  console.log('focus')
  el.value = "+380"
}); 
});