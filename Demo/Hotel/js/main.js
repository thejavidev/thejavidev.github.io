/* -------------------------------------------

Name: 		Kinsley
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

$(function() {

  "use strict";

  /***************************

  preloader

  ***************************/
  $(document).ready(function() {
    $(".knsl-preloader").animate({
      opacity: 1
    }, {
      duration: 400,
    });
    setTimeout(function() {
      $('.knsl-preloader-number').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 800,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
        });
      });
      $(".knsl-preloader-bar").animate({
        width: '100%'
      }, {
        duration: 800,
        complete: function() {
          $(".knsl-preloader-frame").addClass('knsl-hidden')
        }
      });
    }, 1000);
  });
  /***************************

  popup

  ***************************/
  $('#book-popup , #book-popup-2').on("click", function() {
    $('.knsl-popup-frame').toggleClass('knsl-active')
  });
  $('.knsl-close-popup').on("click", function() {
    $('.knsl-popup-frame').removeClass('knsl-active')
  });
  /***************************

  scrollspy and smooth scroll

  ***************************/
  $('.knsl-side-menu a , .knsk-s-s').on("click", function() {
    $(".knsl-active").removeClass("knsl-active");
    $(this).closest('li a').addClass("knsl-active");
    var theClass = $(this).attr("class");
    $('.' + theClass).parent('li a').addClass('knsl-active');
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 170
    }, 600);
    return false;
  });
  /***************************

  parallax

  ***************************/
  $(window).on('scroll', parallax)

  function parallax() {
    var s = $(window).scrollTop();

    function parallaxDown(e, t) {
      $(e).css({
        'position': 'relative',
        'top': (s * t) + 'px'
      });
    }
    parallaxDown('.knsl-parallax', .4);
  }
  /***************************

  menu

  ***************************/
  $('.knsl-menu-btn').on('click', function() {
    $('.knsl-menu-btn , .knsl-right-side').toggleClass('knsl-active');
  })
  $('.knsl-menu ul li a').on('click', function() {
    $('.knsl-menu-btn , .knsl-right-side').removeClass('knsl-active');
  })
  /***************************

  nice select

  ***************************/
  $(document).ready(function() {
    $('select').niceSelect();
  });
  /***************************

  datepicker

  ***************************/
  $('.datepicker-here').datepicker({
    language: 'en',
    minDate: new Date()
  })
  /***************************

  about slider

  ***************************/
  // var swiper = new Splide( '.knsl-about-slider', {
  //   perPage: 3,
  //   breakpoints: {
  //     '640': {
  //       perPage: 2,
  //       gap    : '1rem',
  //     },
  //     '480': {
  //       perPage: 1,
  //       gap    : '1rem',
  //     },
  //   }
  // } ).mount();

  var swiper = new Swiper('.knsl-about-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    parallax: true,
    calculateHeight: true,
    updateOnWindowResize: true,
    initialSlide: 1,
    centeredSlides: true,
    speed: 800,
    pagination: {
      el: '.knsl-about-slider-1-pagination',
      type: "fraction",
    },
    navigation: {
      prevEl: '.knsl-about-slider-1-prev',
      nextEl: '.knsl-about-slider-1-next',
    },
    breakpoints: {
      1600: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
  

	
  /***************************

  testimonials slider

  ***************************/
  var swiper = new Swiper('.knsl-testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    parallax: true,
    calculateHeight: true,
    updateOnWindowResize: true,
    initialSlide: 1,
    centeredSlides: true,
    speed: 800,
    pagination: {
      el: '.knsl-testimonials-slider-1-pagination',
      type: "fraction",
    },
    navigation: {
      prevEl: '.knsl-testimonials-slider-1-prev',
      nextEl: '.knsl-testimonials-slider-1-next',
    },
  });
  /***************************

  rooms slider

  ***************************/
  var swiper = new Swiper('.knsl-uni-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    parallax: true,
    calculateHeight: true,
    updateOnWindowResize: true,
    speed: 800,
    pagination: {
      el: '.knsl-uni-slider-pagination',
      type: "fraction",
    },
    navigation: {
      prevEl: '.knsl-uni-slider-prev',
      nextEl: '.knsl-uni-slider-next',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
  /***************************

  room details

  ***************************/
  var swiper1 = new Swiper(".knsl-rd-slider-1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".knsl-rd-slider-2", {
    loop: true,
    effect: 'fade',
    parallax: true,
    thumbs: {
      swiper: swiper1,
    },
  });
  /***************************

  fancybox

  ***************************/
  $('[data-fancybox]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 200,
    transitionDuration: 800,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });
  /***************************

  scroll animation

  ***************************/
  $(window).scroll(function() {
    $('.knsl-scroll-animation').each(function(i) {
      var bottom_of_object = $(this).offset().top - 380 + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('knsl-active-el');
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass('knsl-active-el');
      }
    });
  });
  /***************************

  counters

  ***************************/
  var count = 0;
  if ($('.knsl-counters-card').length) {
    $(window).scroll(function() {
      var oTop = $('.knsl-counters-card').offset().top - window.innerHeight;
      if (count == 0 && $(window).scrollTop() > oTop) {
        $('.knsl-counter-number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 3000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        });
        count = 1;
      }
    });
  }
  /***************************

  sticky

  ***************************/
  var sticky = new Sticky('.knsl-sticky');
  if ($(window).width() < 992) {
    sticky.destroy();
  }
  /***************************

  map

  ***************************/
  $(".knsl-lock").on('click', function() {
    $('.knsl-map').toggleClass('knsl-active');
    $('.knsl-lock').toggleClass('knsl-active');
    $('.knsl-lock .fas').toggleClass('fa-unlock');
  });
  if ($("div").is("#map")) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rvc2NhciIsImEiOiJja2VpbDE4b2UwbDg3MnNwY2d3YzlvcDV5In0.e26tLedpKwxrkOmPkWhQlg';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/stoscar/ckr3l0wj625iz17mhhfrwf7oo',
      center: [-70.00133907824335, 18.49315226156898],
      zoom: 9
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([-70.00133907824335, 18.49315226156898])
      .addTo(map);
  }
  /***************************

  isotope

  ***************************/
  $('.knsl-filter a').on('click', function() {
    $('.knsl-filter .knsl-current').removeClass('knsl-current');
    $(this).addClass('knsl-current');

    var selector = $(this).data('filter');
    $('.knsl-masonry-grid').isotope({
      filter: selector
    });
    return false;
  });
  $(document).ready(function() {
    $('.knsl-masonry-grid').isotope({
      filter: '*',
      itemSelector: '.knsl-masonry-grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.knsl-grid-sizer'
      }
    });
  });
});
