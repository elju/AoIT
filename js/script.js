$(document).ready(function(){

  // $('.back_to_top').click(function(){
  //   alert("Clicked");
  // })
  var origOffsetY = 1
  $('.back_to_top').hide();
  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('.back_to_top').fadeIn(900);
    } else {
      $('.back_to_top').fadeOut(900);
    }
  }
  document.onscroll = scroll;


  $('.anchor').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });

  $('.carousel').carousel();
})