/*global $, console*/
$(function () {
  "use strict";
  
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrolPos = $(window).scrollTop();
  
  

  
  $(window).on("scroll load resize", function () {
    scrolPos = $(this).scrollTop();
    introH = intro.innerHeight();
    
    if(scrolPos > introH-84) {
       header.addClass("fixed");
    } else {
       header.removeClass("fixed");
    }
  })
  
 

});