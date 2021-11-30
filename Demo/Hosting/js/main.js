window.addEventListener("load",function(){

	document.querySelector(".pageloader").classList.add("fade-out");
	setTimeout(function(){
		document.querySelector(".pageloader").style.display="none";
       
	},3000);
   
});

$(window).on("scroll",function(){
    if($(this).scrollTop()>30){
        $(".header").addClass("sticky");
    }
    else{
        $(".header").removeClass("sticky");
    }
})

$(function(){

$( ".navbar-toggler").click(function() {
	$(".vs-menu-wrapper").toggleClass("vs-body-visible");
});
$( ".vs-menu-toggle" ).click(function() {
        $(".vs-menu-wrapper").removeClass("vs-body-visible");
});

/*
This time try to code js in a different way than I use to... more ordered and following this practices 
https://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code

Please let me know what u think :D 

Thanks for watching!

Also original dribbble
https://dribbble.com/shots/2705517-boldybae
*/

var mySlider = {
  
    config : {
      
      slider : '.slider-content',
      activeSlide : '.slide.active',
      button: '.next-button',
      transition: 1500,
      delay: function() {return this.transition;},
      navigation : '.control-nav'
      
    },
    
    init : function(config) {
          //$.extend(mySlider.config, config);
          this.createNav();
          $(mySlider.config.button).
              click(function() {
                  mySlider.animateSlide($(this));
              });
      },
    
    getActiveSlide : function() {
      
      return $(mySlider.config.activeSlide);   
         
    },
    
    getNextSlide : function() {
       
       var nextSlide = mySlider.getActiveSlide().next();
        
       if ( nextSlide.length === 0 ){
        
         nextSlide = $(mySlider.config.slider).find('.slide').eq(0);   
       } 
      
      return nextSlide;
      
    },
    
    getNextSlideColorAndName : function() {
      
      var colorAndName = {};
      var nextSlidenext = mySlider.getNextSlide().next();
      var nextSlideColor = nextSlidenext.data('color');
      var nextSlideName = nextSlidenext.data('name');
      
      colorAndName.color = nextSlideColor;
      colorAndName.name = nextSlideName;
      
      if ( nextSlidenext.length === 0 ) {
        nextSlidenext = $(mySlider.config.slider).find('.slide').eq(0);  
        nextSlideColor = nextSlidenext.data('color');
        nextSlideName = nextSlidenext.data('name');
        
        colorAndName.color = nextSlideColor;
        colorAndName.name = nextSlideName;
      }
      
      return colorAndName;
    }, 
    
    createNav : function() {
      
      var totalSlides = $(mySlider.config.slider).find('.slide').length;
      var controlNav = $(mySlider.config.navigation).find('ul');
      var nav;
                          
      for( var i=0; i < totalSlides; i++ ){
          
          var active = "";
          if(i === 0){
            active = 'active';
          }
          
          controlNav.append('<li class="slider-nav nav-'+i+' '+active+' "></li>')
  
      }                      
                          
    },
    
    animateNav : function() {
      
      var activeNav  = $('li.active');
      var nextNav = activeNav.next();
      
      if(nextNav.length === 0){
        nextNav = $('.control-nav li').eq(0);
      }
      
      activeNav.removeClass('active');
      nextNav.addClass('active');
    },
    
    animateSlide : function(button) {
      
      var activeSlide  = mySlider.getActiveSlide();
      var nextSlide = mySlider.getNextSlide();
      var delay = mySlider.config.delay(); 
      var clipPath = $('.clip-svg');
      
      clipPath.css('transition-duration', mySlider.config.transition+'ms');
      button.css('pointer-events', 'none');
      nextSlide.css('z-index',10);
      button.css('background', mySlider.getNextSlideColorAndName().color);
      button.prev().find('.color').html(mySlider.getNextSlideColorAndName().name);
      nextSlide.addClass('active').css('opacity', 1); 
      
      setTimeout(function() {
        activeSlide.removeClass('active').css('opacity', 0);
      }, delay);
      
      setTimeout(function() {
        nextSlide.css('z-index','');
        button.css('pointer-events', 'auto');
      }, delay + 300);
      
      mySlider.animateNav();
      
    }
    
  } 
  
  
  $(document).ready(function() { mySlider.init(); });



  
  var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  
  el.parent().children(".full-price").html( eq + "&#8380;" );
  
  changeTotal();			
}

function changeTotal() {
  
  var price = 0;
  
  $(".full-price").each(function(index){
    price += parseFloat($(".full-price").eq(index).html());
  });
  
  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) *100) / 100;
  
  if(price == 0) {
    fullPrice = 0;
  }
  
  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function(){
  
  $(".remove").click(function(){
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(
      function(){
        el.parent().parent().slideUp('fast', function() { 
          el.parent().parent().remove(); 
          if($(".product").length == 0) {
            if(check) {
              $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal(); 
        });
      }, 200);
  });
  
  $(".qt-plus").click(function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    
    $(this).parent().children(".full-price").addClass("added");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
  });
  
  $(".qt-minus").click(function(){
    
    child = $(this).parent().children(".qt");
    
    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }
    
    $(this).parent().children(".full-price").addClass("minused");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
  });
  
  window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);
  
  $(".btn").click(function(){
    check = true;
    $(".remove").click();
  });
});

})
