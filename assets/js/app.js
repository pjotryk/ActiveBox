/*global $, console*/
$(function () {
  "use strict";
  
  /* Fixed Header
  ==================*/
    
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrolPos = $(window).scrollTop();
  
  

  
  $(window).on("scroll load resize", function () {
    scrolPos = $(this).scrollTop();
    introH = intro.innerHeight();
    
    if(scrolPos > introH-header.height()) {
       header.addClass("fixed");
    } else {
       header.removeClass("fixed");
    }
  })
  
  
  /* Smooth Scroll
 ========================================*/
  $("[data-scroll]").on("click", function() {
    event.preventDefault(); /* При кліку на ссилку немає переходу за адресою.*/
    
    let elementID = $(this). data('scroll');
    let elementOffset = $(elementID).offset().top;
    
    $("html, body").animate({
      scrollTop:elementOffset-header.height()
    }, 700);
    
    nav.removeClass("show");
    
  })
  
  
  /* Nav Toggle
  =========================*/
  let nav = $("#nav");
  let nav_toggle = $("#nav_toggle");
  
  nav_toggle.on("click", function(event) {
    event.preventDefault();
    
    nav.toggleClass("show");
  });
  
  
  /* Reviews Slider
  =====================*/
    

});