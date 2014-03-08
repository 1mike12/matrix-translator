$(document).ready(function() {
    accordion.init({headerClass: ".accordionHeaderWrapper", contentClass: ".accordionContent"});
    accordion.init({headerClass: "#help", contentClass: "#helpContent"});


});

$(window).load(function() {
    $("#launchTour").click(function() {
        $('#joyRideTipContent').joyride({
            autoStart: true,
            modal: true,
            expose: true
        });
    });
});
