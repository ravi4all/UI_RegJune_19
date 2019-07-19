$(document).ready(function() {
    // $("#hide").click(function() {
    //     $("img").hide(2000);
    // });
    // $("#show").click(function() {
    //     $("img").show(2000);
    // });
    // $("#toggle").click(function() {
    //     $("img").toggle(2000);
    // });

    // $("#hide").click(function() {
    //     $("img").fadeOut(2000);
    // });
    // $("#show").click(function() {
    //     $("img").fadeIn(2000);
    // });
    // $("#toggle").click(function() {
    //     $("img").fadeToggle(2000);
    // });

    $("#hide").click(function() {
        $("div").slideUp(2000);
    });
    $("#show").click(function() {
        $("div").slideDown(2000);
    });
    $("#toggle").click(function() {
        $("div").slideToggle(2000);
    });
});