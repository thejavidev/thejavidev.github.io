var swiperWorkPrice = new Swiper('.ref .swiper-container',{
    slidesPerView: 7,
    spaceBetween: 0,
    infinite: false,
    autoplaySpeed:3000,
    autoplay:false,
    speed: 1000,
    loop: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 0,
            infinite: true,
            allowTouchMove: false,
        },
        991: {
            slidesPerView: 6,
            infinite: true,
        
        },
        1200:{
            slidesPerView: 7,
          
        }
    },

    pagination: {
        el: '.main-slider .swiper-pagination',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.main-slider .swiper-button-next',
        prevEl: '.main-slider .swiper-button-prev'
    },
});


window.addEventListener("scroll",function(){
    if(this.pageYOffset>60){
        document.querySelector(".header-down").classList.add("active");
        document.querySelector(".header-up").classList.add("active");
    }else{
        document.querySelector(".header-down").classList.remove("active");
        document.querySelector(".header-up").classList.remove("active");
    }
});


var wind = $(window);

wind.on("scroll", function () {

    var bodyScroll = wind.scrollTop(),
        navbar = $(".navbar"),
        logo = $(".navbar .navbar-brand> img");

    if (bodyScroll > 60) {

        navbar.addClass("nav-scroll");
 
        logo.attr('src', 'img/logo-dark.png');

    } else {

        navbar.removeClass("nav-scroll");
       
        logo.attr('src', 'img/logo.png');
    }
});


$( ".navbar-toggler").click(function() {
    $(".vs-menu-wrapper").addClass("vs-body-visible");
});
$( ".vs-menu-toggle" ).click(function() {
    $(".vs-menu-wrapper").removeClass("vs-body-visible");
});





window.addEventListener("load",()=>{
    document.querySelector(".page-preloader").classList.add("active");
 
	setTimeout(function(){
		document.querySelector(".page-preloader").style.display="none";
       
	},2000);
})












