$(function(){

    // ie判定
  var userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
          $('.twitter-share-button').hide();
        }

  objectFitImages();

  $('.slide-show').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  });

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

  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

});