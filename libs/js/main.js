function scroll() {
  let o = window.scrollY;
  var s = document.querySelector(".header"),
      e = s.offsetHeight;
  window.addEventListener("scroll", function () {
      (o = window.scrollY), o >= e - 100 ? s.classList.add("is-down") : s.classList.remove("is-down");
  });
}
scroll();



function device(){
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if( isMobile.any() ) {
    console.log('mobile');
    // sticky.destroy();
  document.querySelector('body').classList.add("touch")
  var sources = document.querySelectorAll('video.mobile-no-load'); 
  // loop through the videos
  sources.forEach(function(source){ 
      // target the src attribute of the <source> element and set it to the data-src attribute
      source.remove()
  }); 
  } else {
    console.log('no-mobile');
    
 

  }
}
device();





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
			return 0;
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



const navTgl = document.querySelector("#nav-tgl");
const navMobile = document.querySelector(".header__navigation");
const navBtns = document.querySelectorAll(".header-nav__item a");
const page = document.querySelector("html");


function t(){
  if (navTgl.classList.contains('is-open')) {
    console.log('element has target class')
    page.classList.add('no-scroll');
  } else{
    page.classList.remove('no-scroll');
  }
  }

navTgl.onclick = function() {
  navTgl.classList.toggle('is-open');
  navMobile.classList.toggle('is-open');
  t();
}
var navBtnsList  = navBtns;
navBtnsList.forEach(function(el){
  el.onclick = function() {
    navTgl.classList.remove('is-open');
    navMobile.classList.remove('is-open')
    t();
  }
});


// f(navMobile.classList.contains('is-open')) {
 
// }

// if (navTgl.className == "is-open") {
  
//   console.log('hide')
// } else{

// }


const modalOpen = document.querySelectorAll("[data-m-open]");
const modal = document.querySelector(".modal");
const modalClose = document.querySelectorAll("[data-m-close]");

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
  el.value = "+38"
}); 
});



// var modalOpenBtns = modalOpen;
// modalOpenBtns.forEach(function(btn){
//   btn.onclick = function() {
//     var v = btn.getAttribute('data-m-open');
//     document.getElementById(v).classList.add('is-open');
//     page.classList.add('no-scroll');
//   }
// });

var carousels = document.querySelectorAll("[data-quiz-container]");
 var carousel =  carousels

carousel.forEach(function(el){

  const slides = el.querySelectorAll(".quiz-step"); 
  const previousButtons = el.querySelectorAll(".prev-step");
  console.log(slides)
  console.log(previousButtons)


  let currentSlide = 0;

  const pb = previousButtons;




function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}


function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  slides[n].classList.add('active');
  currentSlide = n;

  var bar = el.querySelector(".quiz-progress__bar--line"),
      counter = el.querySelector(".quiz-progress__counter"),
      w  = el.querySelector(".quiz-progress").clientWidth,
      cw = counter.clientWidth / 2,
      s = slides.length,
      sl = w / s,
      cs = n + 1;
  bar.style.width = sl * cs + "px";
  counter.style.transform = 'translateX(' + ((sl*cs)-cw) + 'px)';
 


  el.querySelector(".quiz-progress__counter--current").innerHTML
  = currentSlide + 1
  el.querySelector(".quiz-progress__counter--length").innerHTML
  = slides.length

  var str = Array.prototype.slice.call(el.querySelectorAll('input[data-answer]:checked')).map(function(el){
      return el.value;
  }).join(';');

  console.log(str)
      el.querySelector('.form-el--results').value = str;



  if(currentSlide === 0){

    pb.forEach(function(el){
    el.style.display = 'none';
    })
  }
  else{
    // previousButtons.disabled = false
    // previousButtons.style.display = 'inline-block';
  
    pb.forEach(function(el){
      el.style.display = 'inline-block';
      })
  
    

  }
  if(currentSlide === slides.length-1){
    // nextButton.style.display = 'none';
  }
  else{
    // nextButton.style.display = 'inline-block';
  }
}

function quizProgress (){
  
}

showSlide(currentSlide);

pb.forEach(function(el){
  el.addEventListener("click", showPreviousSlide)
  })



  const question = el.querySelectorAll(".quiz-question");
var questions = question;
questions.forEach(function(el){
  el.onclick = function() {

    setTimeout(function() {
      showNextSlide(); 
      quizProgress()
      console.log('click')
  }, 500);

   
  }

});


});



window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData( form );

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    XHR.open( "POST", "mail.php" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
  }

  // Access the form element...
  const form = document.getElementById( "form-contact" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );