$(document).ready(function(){
  var origOffsetY = 1;
  $('.back_to_top').hide();
  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('.back_to_top').fadeIn(500);
    } else {
      $('.back_to_top').fadeOut(500);
    }
  }
  document.onscroll = scroll;

  $('.anchor').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });
});