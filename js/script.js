$(function(){

  $('.slide-show').slick();

  $('.menu-btn').click(function(){
    if($('.modal').css('display') == 'block') {
      $('.modal').slideUp();
    } else {
      $('.modal').slideDown();
    }
  });

  $('.top-btn').click(function() {
    $('html, body').animate({
      scrollTop:0
    }, 400);
  });

});