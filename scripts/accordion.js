var accordion = (function() {
    //pluggin specific settings, should not normally override 
    var settings = {
        downClass: "ac-down",
        hoverClass: "ac-hover",
        slideSpeed: 200 //400 = "fast" in jquery
    };
    
    var contentClass;
    var headerClass;
    var $contents;
    var $headers;

    // can be empty, or init({headerClass: ".qwer", contentClass: ".asd"})
    function init(options) {
        if (typeof options === typeof {}) {
            try {
                headerClass = options.headerClass;
                contentClass = options.contentClass;
            }
            catch (error) {
                console.log("error within accordionizer. Error message: " + error);
            }
        }
        generateObjects();
        $contents.hide();
        attachClick();
        attachHeaderHover();
    }
    function generateObjects() {
        $contents = $(contentClass);
        $headers = $(headerClass);
    }
    function attachClick() {
        $headers.click(function() {
            var $this= $(this);
            var adjacent = $this.next();
            if (adjacent.is(":hidden")) {
                $this.addClass(settings.downClass);
                $this.children().addClass(settings.downClass);
                adjacent.slideDown(settings.slideSpeed);
                $this.children().addClass(settings.downClass);
            } else {
                $this.removeClass(settings.downClass);
                $this.children().removeClass(settings.downClass);
                $this.next().slideUp(settings.slideSpeed);
                $this.children().removeClass(settings.downClass);
            }
        });
    }
    function attachHeaderHover() {
        $headers.mouseenter(function() {
            $(this).addClass(settings.hoverClass);
            $(this).children().addClass(settings.hoverClass);
        }).mouseleave(function() {
            $(this).removeClass(settings.hoverClass);
            $(this).children().removeClass(settings.hoverClass);
        });
    }
    return{
        init: init
    };
})();