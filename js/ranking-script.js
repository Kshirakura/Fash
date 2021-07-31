$(function(){
  $('.color-btn').click(function(){
    $('.picked').removeClass('picked');
    $('.active').removeClass('active');
    $(this).addClass('picked');
    var index = $('.color-btn').index(this);
    $('.item').eq(index).addClass('active');
  });

  $('.number').change(function() {
    var value = 10000;
      var subsum = value * parseInt($('.number').children('input').val());
      $('.subtotal').html('￥' + subsum.toLocaleString());
  });
});