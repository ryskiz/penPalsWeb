
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30){
            console.log('trigger back up');
            $('header').addClass("sticky");
            $('#brand').css("transition", "all 0.4s ease");
            $('#brand').css("height", "80px");
        }
        else {
            $('header').removeClass("sticky");
            $('#brand').css("transition", "all 0.4s ease");
            $('#brand').css("height", "180px");
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