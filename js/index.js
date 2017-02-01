$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30){
            $('header').addClass("sticky");
            $('#brand').animate({
                "height": "80px"
            }).next().slideDown("slow");
        }
        else {
            $('header').removeClass("sticky");
            $('#brand').slideDown();
        }
    });
    // $('h1').on('click', function(){
    //     $(this).fadeOut("slow", function(){
    //
    //     });
    //     $(this).fadeIn("slow", function(){
    //
    //     })
    // })
    $('.album-photo').on('mouseenter', function(){
        $(this).addClass('blur');
    });
    $('.album-photo').on('mouseleave', function(){
        $(this).removeClass('blur');
    });
    
});