var swiperWorkPrice = new Swiper('.menu-sections .swiper-container',{
    slidesPerView: 5,
    spaceBetween: 0,
    infinite: true,
    autoplaySpeed:3000,
    autoplay:false,
    speed: 1000,
    loop: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        991: {
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 4,
            loop: true,

        }
    },

    pagination: {
        el: '.menu-sections .swiper-pagination',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.menu-sections .swiper-button-next',
        prevEl: '.menu-sections .swiper-button-prev'
    },
});

window.addEventListener("scroll",function(){
    if(this.pageYOffset>60){
        document.querySelector(".header-down").classList.add("active");
    }else{
        document.querySelector(".header-down").classList.remove("active");
    }
});
window.addEventListener("load",()=>{

    document.querySelector(".load").classList.add("active");
	setTimeout(function(){
		document.querySelector(".load").style.display="none";
       
	},1200);
    $(function () {
      $.each(function () {
        $(this).load(file, function () {
          $("body").imagesLoaded().progress(onProgress);
        });
      });
    });
    AOS.init({
        once:true,
    });
const observer = lozad();
observer.observe();
    function onProgress(imgLoad, image) {
      var $item = $(image.img).parents(".imgLoad");
      $item.addClass("loaded");
    }
  });

$( ".navbar-toggler").click(function() {
    $(".vs-menu-wrapper").addClass("vs-body-visible");
});
$( ".vs-menu-toggle" ).click(function() {
    $(".vs-menu-wrapper").removeClass("vs-body-visible");
});

