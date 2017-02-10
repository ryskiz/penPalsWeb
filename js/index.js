$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      console.log('trigger back up');
      $('header').addClass("sticky");
      $('#brand').css("transition", "all 0.4s ease");
      $('#brand').css("height", "80px");
    } else {
      $('header').removeClass("sticky");
      $('#brand').css("transition", "all 0.4s ease");
      $('#brand').css("height", "180px");
    }
  });
  $('.image').on('mouseenter', function() {
    $('img', this).addClass('blur');
    $('h1', this).fadeIn();
  });
  $('.image').on('mouseleave', function() {
    $('img', this).removeClass('blur');
    $('h1', this).fadeOut();
  });
});
