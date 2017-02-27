$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
        autoScrolling: false,
        fitToSection: false
    });
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
    $('.image').click(function() {
        var buttonId = $(this).attr('id');
        console.log(buttonId);
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    });
    $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });
});
