$(document).ready(function() {
    var matrixTable = $("#matrix");
    //auto highlight fields when focused
    $("#outputColumn, #matrix").on("focus", "input:text", function() {
        $(this).select()
            .mouseup(function(e) {
                return false;
            });
    });

    //get matrix rows
    function getRows($table) {
        var rows = $table.find("tr").length;
        return rows;
    }
    //get matrix columns
    function getCols($table) {
        var firstRow = $table.find("tr").slice(0, 1);
        var columns = firstRow.find("td").length;
        return columns;
    }

    function printTD(row, column) {
        var idName = "r" + row + "c" + column;
        var completedTD = '<td><input id="' + idName + '" type="text" class=""/></td>';
        return completedTD;
    }

    function colPlus($table) {
        var cols = getCols($table);

        var $rowSet = $table.find("tr");
        for (var i = 0; i < $rowSet.length; i++) {
            var $td = $(printTD(i + 1, cols + 1));
            $rowSet.eq(i).append($td);
        }
    }
    function colMinus($table) {
        var $TDSet = $table.find("tr").find("td:last");
        for (var i = 0; i < $TDSet.length; i++) {
            $TDSet.remove();
        }
    }
    function rowPlus($table) {
        var rows = getRows($table);
        var cols = getCols($table);

        //add row with class
        $table.append('<tr id="r' + (rows + 1) + '"></tr>');
        var $lastRow = $table.find("tr:last");

        for (var i = 0; i < cols; i++) {
            var td = printTD(rows + 1, i + 1);
            $lastRow.append(td);
        }
    }
    function rowMinus($table) {
        var tr = $table.find("tr:last");
        tr.remove();
    }
    function updateFields() {
        var rows = getRows(matrixTable);
        var cols = getCols(matrixTable);
        $("#rowField").val(rows);
        $("#colField").val(cols);
    }

    function tableToArray($table) {
        var matrix = new Array();
        var rows = getRows($table);
        var cols = getCols($table);

        for (var r = 0; r < rows; r++) {
            matrix[r] = new Array();
            for (var c = 0; c < cols; c++) {
                var currentField = "#r" + (r + 1) + "c" + (c + 1);
                matrix[r][c] = $(currentField).val();
            }
        }
        return matrix;
    }

    function generateMatlab(array) {
        var rows = array.length;
        var cols = array[0].length;
        var out = "[ ";
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                out += array[r][c] + " ";
            }
            //add semicolon unless it's the last row
            if ((r + 1) < rows) {
                out += "; ";
            }
        }
        out += " ]";
        return out;
    }
    function generateWolfram(array) {
        var rows = array.length;
        var cols = array[0].length;
        var out = "{ ";
        for (var r = 0; r < rows; r++) {
            out += "{";
            for (var c = 0; c < cols; c++) {
                out += array[r][c];
                if (c + 1 < cols) {
                    out += ",";
                }
            }
            out += "}";
            //add comma unless it's the last row
            if ((r + 1) < rows) {
                out += ",";
            }
        }
        out += " }";
        return out;

    }
    function invalidWolfram(array) {
        var rows = array.length;
        var cols = array[0].length;
        var invalid = false;

        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                var current = array[r][c];
                if (current === "") {
                    invalid = true;
                }
            }
        }
        return invalid;
    }
    function generateLatex(array, bracketType) {
        var rows = array.length;
        var cols = array[0].length;
        var delimiter = "";
        switch (bracketType) {
            case "[":
                delimiter = "bmatrix";
                break;
            case "(":
                delimiter = "pmatrix";
                break;
            case "{":
                delimiter = "Bmatrix";
                break;
            case "|":
                delimiter = "vmatrix";
                break;
            case "||":
                delimiter = "Vmatrix";
                break;
            default:
                alert("something messed up within switch statement of generateLatex()");
        }
        var opening = "\\begin{" + delimiter + "} ";
        var closing = " \\end{" + delimiter + "}";
        var out = "";
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                out += array[r][c];
                if (c + 1 < cols) {
                    out += " & ";
                }
            }
            //add semicolon unless it's the last row
            if ((r + 1) < rows) {
                out += " \\\\ ";
            }
        }
        out = opening + out + closing;
        return out;
    }
    function generateOutput(table) {
        var array = tableToArray(table);
        $("#matLabOutput").val(generateMatlab(array));
        $("#wolframOutput").val(generateWolfram(array));

        if (invalidWolfram(array)) {
            $("#wolframWarning").show()
                .qtip({
                    content: {text: "Wolfram Alpha does not allow empty fields"},
                    style: {classes: 'matrix_qtip'},
                    position: {my: "top right", at: "bottom center"}
                });
        } else {
            $("#wolframWarning").hide();
        }
        //!!!!!!!!!!!!!!NEED to get latex bracket-type settings
        var currentBracketType= $("#latexButtons input:checked").val();
        $("#latexOutput").val(generateLatex(array, currentBracketType));
    }
    
    $("#latexButtons").on("click","input", function(){
        generateOutput(matrixTable);
    });

    //trigger field expansion
    $("#matrix").on("focus", "input:text", function() {
        var $this = $(this);
        var matrixFieldWidth = $this.outerWidth();
        $this
            .focus(function() {
                var coordinates = $this.offset();
                $this
                    .css({position: "absolute"})
                    .css("z-index", "5")
                    .offset(coordinates)
                    .animate({width: "150px"}, 150);
            })
            .focusout(function() {
                generateOutput(matrixTable);
                $this
                    .animate({width: matrixFieldWidth + "px"}, 150, function() {
                        $this
                            .css({position: "static"})
                            .css("z-index", "0");
                    });
            });
    });

    $("#colPlus").click(function() {
        var currentCols = parseInt($("#colField").val()) + 1;
        if (isValidInput(currentCols)) {
            $("#colField").val(currentCols);
            redrawCols(currentCols);
            prevCols = currentCols;
            generateOutput(matrixTable);
        } else {
            colError();
        }
    });

    $("#colMinus").click(function() {
        var currentCols = parseInt($("#colField").val()) - 1;
        if (isValidInput(currentCols)) {
            $("#colField").val(currentCols);
            redrawCols(currentCols);
            prevCols = currentCols;
            generateOutput(matrixTable);
        } else {
            colError();
        }
    });

    $("#rowPlus").click(function() {
        var currentRows = parseInt($("#rowField").val()) + 1;
        if (isValidInput(currentRows)) {
            $("#rowField").val(currentRows);
            redrawRows(currentRows);
            prevRows = currentRows;
            generateOutput(matrixTable);
        } else {
            rowError();
        }
    });

    $("#rowMinus").click(function() {
        var currentRows = parseInt($("#rowField").val()) - 1;
        if (isValidInput(currentRows)) {
            $("#rowField").val(currentRows);
            redrawRows(currentRows);
            prevRows = currentRows;
            generateOutput(matrixTable);
        } else {
            rowError();
        }
    });

    $("#clearAll").click(function() {
        $("#matrix input:text").val("");
        generateOutput(matrixTable);
    });

    prevRows = 3;
    prevCols = 3;
    //triggering redrawRows on leaving focus || enter key down
    $("#matrixOptions").on("focusout keypress", "#rowField", function(e) {
        var rows = $(this).val();
        if (e.which === 13) {
            redrawRows(rows);
        } else if (e.type === "focusout") {
            redrawRows(rows);
        }
    });

    //triggering redrawCols on leaving focus || enter key down
    $("#matrixOptions").on("focusout keypress", "#colField", function(e) {
        var cols = $(this).val();
        if (e.which === 13) {
            redrawCols(cols);
        } else if (e.type === "focusout") {
            redrawCols(cols);
        }
    });

    function isValidInput(n) {
        // number type, check that isInt when % by 1
        if (n <= 50 && n > 0 && n % 1 === 0) {
            return true;
        } else {
            return false;
            //must be between 1-50
        }
    }

    function redrawRows(currentRows) {
        if (isValidInput(currentRows)) {
            if (currentRows !== prevRows) {
                var diff = currentRows - prevRows;
                if (diff > 0) {
                    for (var i = 0; i < diff; i++) {
                        rowPlus(matrixTable);
                    }
                } else {
                    for (var i = 0; i > diff; i--) {
                        rowMinus(matrixTable);
                    }
                }

                prevRows = currentRows;
            }
        } else {
            rowError();
        }
    }
    function rowError() {
        $("#rowField").qtip({
            content: {text: "must be between 1-50"},
            style: {classes: 'matrix_qtip'},
            position: {my: "top center", at: "bottom center"},
            events: {
                hide: function(event, api) {
                    api.destroy();
                }
            },
            show: {ready: true},
            hide: {event: "focus focusout unfocus"}
        });
    }

    function redrawCols(currentCols) {
        if (isValidInput(currentCols)) {
            if (currentCols !== prevCols) {
                var diff = currentCols - prevCols;
                if (diff > 0) {
                    for (var i = 0; i < diff; i++) {
                        colPlus(matrixTable);
                    }
                } else {
                    for (var i = 0; i > diff; i--) {
                        colMinus(matrixTable);
                    }
                }

                prevCols = currentCols;
            }
        } else {
            colError();
        }
    }

    function colError() {
        $("#colField").qtip({
            content: {text: "must be between 1-50"},
            style: {classes: 'matrix_qtip'},
            position: {my: "top center", at: "bottom center"},
            events: {
                hide: function(event, api) {
                    api.destroy();
                }
            },
            show: {ready: true},
            hide: {event: "focus focusout unfocus"}
        });
    }

});
