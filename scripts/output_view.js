Results = (function() {
    amplify.subscribe("translationChanged", function(payload) {
        receive(payload);
    });
    var wolfram;
    var wolframTooLong;
    var wolframHasEmpty;

    var matlab;
    var latex;
    
    var $wolfram = $("#wolframOutput");
    var $matlab = $("#matLabOutput");
    var $latex = $("#latexOutput");
    
    function receive(payload) {
        wolfram = payload.wolfram;
        wolframTooLong = payload.wolframTooLong;
        wolframHasEmpty = payload.wolframHasEmpty;

        matlab = payload.matlab;
        latex = payload.latex;
        update();
    }
    function update() {
        $wolfram.val(wolfram);
        $matlab.val(matlab);
        $latex.val(latex);

       
    }
})();

WolframError = (function() {
    // too long=============
    amplify.subscribe("wolframTooLong", function() {
        $("#wolframWarning").show()
            .qtip({
                content: {text: "Wolfram Alpha limits input to 200 characters"},
                style: {classes: 'qtip_orange'},
                position: {my: "top right", at: "bottom center"}
            });
    });
    amplify.subscribe("!wolframTooLong", function() {
        $("#wolframWarning").hide();
    });

    //empty fields=============
    amplify.subscribe("wolframHasEmpty", function() {
        $("#wolframWarning").show()
            .qtip({
                content: {text: "Wolfram Alpha does not allow empty fields"},
                style: {classes: 'qtip_orange'},
                position: {my: "top right", at: "bottom center"}
            });
    });
    amplify.subscribe("!wolframHasEmpty", function() {
        $("#wolframWarning").hide();
    });
})();

//autohighlight
$("#outputColumn").on("focus", "input:text", function() {
    $(this).select().mouseup(function(e) {
        return false;
    });
});

LatexButtons= (function(){
    var currentBracket="(";
    $("#latexButtons").on("click", "input", function() {
        currentBracket= $("#latexButtons input:checked").val();
        amplify.publish("bracketChanged", currentBracket);
    });
})();