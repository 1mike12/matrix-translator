$(document).ready(function() {
    var wrappers = $(".accordionWrapper");
    var contents = $(".accordionContent");
    var headers = $(".accordionHeader");
    contents.hide();
    for (var i = 0; i < wrappers.length; i++) {
        wrappers.eq(i).addClass("_aw-" + i);
    }
    headers.click(function() {
        var adjacent = $(this).next();
        if (adjacent.is(":hidden")) {
            adjacent.show("fast");
        } else {
            $(this).next().hide("fast");
        }
    });
});