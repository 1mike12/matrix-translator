$(document).ready(function() {
    Buttons = (function() {
        var $rowField = $("#rowField");
        var $colField = $("#colField");

        var displayedRows = 0;
        var displayedCols = 0;

        //single Button Increments=====================
        $("#rowPlus").click(function() {
            fetchFieldVals();
            if (isValidRange(parseInt(displayedRows) + 1)) {
                $rowField.val(parseInt(displayedRows) + 1);
                publishDimensionChanged();
            } else {
                amplify.publish("rowError");
            }
        });
        $("#rowMinus").click(function() {
            fetchFieldVals();
            if (isValidRange(parseInt(displayedRows) - 1)) {
                $rowField.val(parseInt(displayedRows) - 1);
                publishDimensionChanged();
            } else {
                amplify.publish("rowError");
            }
        });

        $("#colPlus").click(function() {
            fetchFieldVals();
            if (isValidRange(parseInt(displayedCols) + 1)) {
                $colField.val(parseInt(displayedCols) + 1);
                publishDimensionChanged();
            } else {
                amplify.publish("colError");
            }
        });
        $("#colMinus").click(function() {
            fetchFieldVals();
            if (isValidRange(parseInt(displayedCols) - 1)) {
                $colField.val(parseInt(displayedCols) - 1);
                publishDimensionChanged();
            } else {
                amplify.publish("colError");
            }
        });

        //Direct row/col entry==============================
        $rowField.on("focusout keypress", function(e) {
            if (e.which === 13 || e.type === "focusout") {
                fetchFieldVals();
                if (isValidRange(displayedRows)) {
                    $rowField.val(displayedRows);
                    publishDimensionChanged();
                } else {
                    amplify.publish("rowError");
                }
            }
        });
        $colField.on("focusout keypress", function(e) {
            if (e.which === 13 || e.type === "focusout") {
                fetchFieldVals();
                if (isValidRange(displayedCols)) {
                    $rowField.val(displayedCols);
                    publishDimensionChanged();
                } else {
                    amplify.publish("colError");
                }
            }
        });

        function isValidRange(n) {
            if (n <= 25 && n > 0 && n % 1 === 0) {
                return true;
            } else {
                return false;
            }
        }
        function fetchFieldVals() {
            displayedRows = $rowField.val();
            displayedCols = $colField.val();
        }
        function publishDimensionChanged() {
            fetchFieldVals();
            amplify.publish("dimensionsChanged", {rows: displayedRows, cols: displayedCols});
        }
    })();

    FieldErrors = (function() {
        amplify.subscribe("rowError", function() {
            $("#rowField").qtip({
                content: {text: "must be between 1-25"},
                style: {classes: 'qtip_light'},
                position: {
                    my: "top center",
                    at: "bottom center",
                    adjust: {
                        y: 5
                    }
                },
                events: {
                    hide: function(event, api) {
                        api.destroy();
                    }
                },
                show: {ready: true},
                hide: {event: "focus focusout unfocus"}
            });
        });
        amplify.subscribe("colError", function() {
            $("#colField").qtip({
                content: {text: "must be between 1-25"},
                style: {classes: 'qtip_light'},
                position: {
                    my: "top center",
                    at: "bottom center",
                    adjust: {
                        y: 5
                    }
                },
                events: {
                    hide: function(event, api) {
                        api.destroy();
                    }
                },
                show: {ready: true},
                hide: {event: "focus focusout unfocus"}
            });
        });
    })();
    Clear = (function() {
        var $clear = $("#clearAll");
        $clear.click(function() {
            amplify.publish("clearAll");
        });
    })();
});