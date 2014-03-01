$(document).ready(function() {
    var accordion = (function() {
        //default header and content classes
        var contentClass = ".accordionContent";
        var headerClass = ".accordionHeaderWrapper";

        //pluggin specific settings, should not normally override 
        var settings = {
            downClass: "accordionizer-down",
            hoverClass: "accordionizer-hover",
            slideSpeed: 200 //400 = "fast" in jquery
        };

        var $contents;
        var $headers;

        // can be empty, or init({contentClass: "asd", headerClass: "qwer"})
        function init(options) {
            if (typeof options === typeof {}) {
                try {
                    contentClass = options.contentClass;
                    headerClass = options.headerClass;
                }
                catch (error) {
                    console.log("error within accordionizer. Error message: " + error);
                }
            }
            generateObjects();
            $contents.hide();
            attachClick();
            attachHover();
        }
        function generateObjects() {
            $contents = $(contentClass);
            $headers = $(headerClass);
        }
        function attachClick() {
            $headers.click(function() {
                var adjacent = $(this).next();
                if (adjacent.is(":hidden")) {
                    adjacent.slideDown(settings.slideSpeed);
                    $(this).children().toggleClass(settings.downClass);
                } else {
                    $(this).next().slideUp(settings.slideSpeed);
                    $(this).children().toggleClass(settings.downClass);
                }
            });
        }
        function attachHover() {
            $headers.hover(
                function() {
                    $(this).toggleClass(settings.hoverClass);
                    $(this).children().toggleClass(settings.hoverClass);
                },
                function() {
                    $(this).toggleClass(settings.hoverClass);
                    $(this).children().toggleClass(settings.hoverClass);
                });
        }
        return{
            init: init
        };
    })();

    accordion.init();
});