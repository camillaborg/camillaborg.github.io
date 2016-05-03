/**
 * Created by camillaborg on 2015-05-25.
 */

//Toggle
$(".toggle").click(function(){
    $(".effect1").toggle(400, function(){

    });
})

$("#show-menu").click(function(){
    $(".menu ul").toggle(500);
});

$(".project-1").click(function(){
    $(".1").fadeToggle(500);
});
$(".project-2").click(function(){
    $(".2").fadeToggle(500);
});
$(".project-3").click(function(){
    $(".3").fadeToggle(500);
});
$(".project-4").click(function(){
    $(".4").fadeToggle(500);
});
$(".project-5").click(function(){
    $(".5").fadeToggle(500);
});
$(".project-6").click(function(){
    $(".6").fadeToggle(500);
});

/* Click buttons */
$(".work").css("display", "none");
$(".about-me").css("display", "none");



$(".skills-click").click(function () {
    $(".skills").show("slow");

    $(".work").hide("slow");
    $(".about-me").hide("slow");

});

$(".work-click").click(function () {
    $(".work").show("slow");

    $(".skills").hide("slow");
    $(".about-me").hide("slow");

});

$(".me-click").click(function () {
    $(".about-me").show("slow");

    $(".skills").hide("slow");
    $(".work").hide("slow");
});



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