$(document).ready(function(){

  // $('.back_to_top').click(function(){
  //   alert("Clicked");
  // })
  var menu = $('#nav');
  var origOffsetY = menu.offset().top;
  $('.back_to_top').hide();
  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $('.back_to_top').fadeIn(500);
      $('#nav').removeClass('nav_abs');
      $('#nav').addClass('nav_fixed');
    } else {
      $('#nav').addClass('nav_abs');
      $('#nav').removeClass('nav_fixed');
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

  $('.carousel').carousel();
})