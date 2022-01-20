// drop-down menu
$(document).ready(function () {
    $(".arrow").click(function () {
        $(".drop-down").toggleClass('expand');
        $(".arrow").toggleClass('rotate-180');
    });
    $(".hamburger").click(function () {
        $(".nav-list").toggleClass('show-menu');
        $(".home").toggleClass('blue-home');
    });
});
$(window).on("scroll", function() {
    // resize blue logo
    if($(window).scrollTop() > 50) {
        $(".home").addClass("resize");
        $(".main-content-container").addClass("picture-resize");
    } else {
        $(".home").removeClass("resize");
        $(".main-content-container").removeClass("picture-resize");
    }
    // color - change to blue
    if($(window).scrollTop() > 540) {
        $(".home").addClass("blue");
    } else {
        $(".home").removeClass("blue");
    }
});