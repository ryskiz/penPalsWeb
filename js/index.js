
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){
            $('header').addClass("sticky");
            $('img').animate({
                "height": "80px"
            }).next().slideDown();
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    $('h1').on('click', function(){
        $(this).fadeOut("slow", function(){

        });
        $(this).fadeIn("slow", function(){
            
        })
    })
    
});