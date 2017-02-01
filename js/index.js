
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200){
            console.log('trigger back up');
            $('header').addClass("sticky");
            $('#brand').animate({
                "height": "80px"
            }).next().slideDown("slow");
        }
        else {
            $('header').removeClass("sticky");
            // $('').animate({
            //     "height": "180px"
            // }).next().slideUp();
        }
    });
    $('.album-photo').on('mouseenter', function(){
        $(this).addClass('blur');
        $('h1').fadeIn();
    });
    $('.album-photo').on('mouseleave', function(){
        $(this).removeClass('blur');
        $('h1').fadeOut();
    });
});
let widgetIframe = document.getElementById('sc-widget'),
    widget = SC.Widget(widgetIframe);
widget.bind(SC.Widget.Events.READY, function() {
    widget.bind(SC.Widget.Events.PLAY, function() {
        // get information about currently playing sound
        widget.getCurrentSound(function(currentSound) {
            console.log('sound ' + currentSound.get('') + 'began to play');
        });
    });
    // get current level of volume
    widget.getVolume(function(volume) {
        console.log('current volume value is ' + volume);
    });
    // set new volume level
    widget.setVolume(50);
    // get the value of the current position
})();