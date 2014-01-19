$(document).ready(function() {
    var contents = $(".accordionContent");
    var headerWrapper = $(".accordionHeaderWrapper");
    contents.hide();
    
    headerWrapper.click(function() {
        var adjacent = $(this).next();
        if (adjacent.is(":hidden")) {
            adjacent.slideDown("fast");
        } else {
            $(this).next().slideUp("fast");
        }
    });
    
    headerWrapper.hover(function(){
        $(this).toggleClass("accordion-hover");
        $(this).children().toggleClass("accordion-hover");
    });
});