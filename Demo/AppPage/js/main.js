

$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
});


$(document).ready(function(){
/*--------------------Navbar Shrink--------------------------------*/
$(window).on("scroll",function(){
    if($(this).scrollTop()>90){
        $(".navbar").addClass("navbar-shrink");
    }
    else{
        $(".navbar").removeClass("navbar-shrink");
    }
})
/*--------------------Navbar Shrink end--------------------------------*/


/*--------------------video popup start--------------------------------*/
        const videoSrc = $("#player-1").attr("src");
        $(".video-play-btn, .video-popup").on("click",function(){
            if($(".video-popup").hasClass("open")){
                $(".video-popup").removeClass("open");
                $("#player-1").attr("src","");
            }
            else{
                $(".video-popup").addClass("open");
               if($("#player-1").attr("src")==''){
                    $("#player-1").attr("src",videoSrc);
               }
            }
        });
/*--------------------video popup end--------------------------------*/


/*--------------------Carousel Start--------------------------------*/
$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
/*--------------------Carousel End--------------------------------*/


/*--------------------App Screenshots start--------------------------------*/
$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});
/*--------------------App Screenshots end--------------------------------*/


/*--------------------testimonals start--------------------------------*/
$('.testimonals-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
/*--------------------testimonals end--------------------------------*/


/*--------------------team start--------------------------------*/
$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
/*--------------------team end--------------------------------*/


/*--------------------page scrolling start--------------------------------*/
$.scrollIt({
    topOffset:-50
})
/*--------------------page scrolling end--------------------------------*/


/*--------------------navbar collapse start--------------------------------*/
$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
});
/*---------------------navbar collapse end--------------------------------*/



/*--------------------dark theme start--------------------------------*/
function toggleTheme(){
   if( localStorage.getItem("Javid-theme") !==null){
    if(localStorage.getItem("Javid-theme")=== "dark"){
        $("body").addClass("dark");
    }
    else{
        $("body").removeClass("dark");
    }
   }
    updateIcon();
}
toggleTheme();

$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("Javid-theme","dark");
    }
    else{
        localStorage.setItem("Javid-theme","light");
    }
    updateIcon();
})

function updateIcon(){
    if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    }else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}
/*--------------------dark theme end--------------------------------*/
/**CUT PAGE START */
(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();
/**CUT PAGE END */
});
