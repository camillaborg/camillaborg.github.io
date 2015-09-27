/**
 * Created by camillaborg on 2015-05-25.
 */

//Toggle
$(".toggle").click(function(){
    $(".effect1").toggle(400, function(){

    });
})

$(".toggle2").click(function(){
    $(".effect2").toggle(400, function(){

    });
})
/*
$(".togglee").click(function(){
    $(".effect2").toggle(400, function(){
        $('#arrow').rotateRight(45);
    });
})
*/

// Smooth scroll funktion
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});