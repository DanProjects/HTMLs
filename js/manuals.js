$(function(){
$(".media-nav-button").click(function(aev){
aev.stopPropagation();
if($(".media-nav-items").css("opacity") == "0"){
    $(".media-nav-items").css({"opacity": "1","height": "275px"});
   }else{
    $(".media-nav-items").css({"opacity": "0","height": "0"});
   } 
});
$(".portfolio-imgs").click(function(){
$(".images-slider-frame").css({"opacity": "1","display": "block"});
});
$(".close-preview").click(function(){
$(".images-slider-frame").css({"opacity": "0","display": "none"});
});
$(window).scroll(function() {
var scrollTop1 = $(this).scrollTop();
var scrollTop2 = $(this).scrollTop();
var scrollTop3 = $(this).scrollTop();
var scrollTop4 = $(this).scrollTop();
$('.head-cover-layer').css({
opacity: function() {
var elementHeight1 = 950;
return 0 + (elementHeight1 - scrollTop1) / elementHeight1;
}
});
$('.footer-cover-layer').css({
opacity: function() {
var elementHeight2 = 1220;
return 1 - (elementHeight2 - scrollTop2) / elementHeight2;
}
});
$('.pricing-cover-layer').css({
opacity: function() {
var elementHeight3 = 2060;
return 1 - (elementHeight3 - scrollTop3) / elementHeight3;
}
});
$('.contact-form-cover-layer').css({
opacity: function() {
var elementHeight4 = 2845;
return 1 - (elementHeight4 - scrollTop4) / elementHeight4;
}
});
var max_Scroll = 720;
if($(this).scrollTop() >= 720){
$(".BackTop").css({'opacity': '1', '-webkit-transform': 'scale(1,1)','-moz-transform': 'scale(1,1)','-o-transform': 'scale(1,1)','-ms-transform': 'scale(1,1)','transform': 'scale(1,1)'});
}else{
$(".BackTop").css({'opacity': '1', '-webkit-transform': 'scale(0,0)','-moz-transform': 'scale(0,0)','-o-transform': 'scale(0,0)','-ms-transform': 'scale(0,0)','transform': 'scale(0,0)'});
}
});
var d = new Date();
var n = d.getFullYear();
document.getElementById("date").innerHTML = n;
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
})();