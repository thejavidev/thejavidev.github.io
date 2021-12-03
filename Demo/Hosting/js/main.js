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



  /* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}





document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
  if(!button.classList.contains('loading')) {

      button.classList.add('loading');

      setTimeout(() => button.classList.remove('loading'), 3700);

  }
  e.preventDefault();
}))



})
