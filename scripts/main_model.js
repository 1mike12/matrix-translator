Table = (function() {
    amplify.subscribe("dimensionsChanged", function(payload) {
        changeDimensions(payload.rows, payload.cols);
    });
    amplify.subscribe("clearAll", function() {
        clearAll();
    });
    var settings = {
        tableID: "#matrix"
    };
    var $table = $(settings.tableID);

    $table.on("focusout", "input:text", function() {
        publish();
    });
    //getting table stats

    function changeDimensions(newRows, newCols) {
        var oldRows = numRows();
        var oldCols = numCols();

        var rowDiff = newRows - oldRows;
        var colDiff = newCols - oldCols;

        if (rowDiff !== 0) {
            if (rowDiff > 0) {
                for (var i = 0; i < rowDiff; i++) {
                    rowPlus();
                }
            } else {
                for (var i = 0; i > rowDiff; i--) {
                    rowMinus();
                }
            }
        }

        if (colDiff !== 0) {
            if (colDiff > 0) {
                for (var i = 0; i < colDiff; i++) {
                    colPlus();
                }
            } else {
                for (var i = 0; i > colDiff; i--) {
                    colMinus();
                }
            }
        }

    }
    function numRows() {
        var rows = $table.find("tr").length;
        return rows;
    }
    function numCols() {
        var firstRow = $table.find("tr").slice(0, 1);
        var columns = firstRow.find("td").length;
        return columns;
    }
    //HTMLgenesis functions
    function colPlus() {
        var cols = numCols($table);
        var $rowSet = $table.find("tr");
        for (var i = 0; i < $rowSet.length; i++) {
            var $td = $(printTD(i + 1, cols + 1));
            $rowSet.eq(i).append($td);
        }
        publish();
    }
    function colMinus() {
        var $TDSet = $table.find("tr").find("td:last");
        for (var i = 0; i < $TDSet.length; i++) {
            $TDSet.remove();
        }
        publish();
    }
    function rowPlus() {
        var rows = numRows($table);
        var cols = numCols($table);
        //add row with class
        $table.append('<tr id="r' + (rows + 1) + '"></tr>');
        var $lastRow = $table.find("tr:last");
        for (var i = 0; i < cols; i++) {
            var td = printTD(rows + 1, i + 1);
            $lastRow.append(td);
        }
        publish();
    }
    function rowMinus() {
        var tr = $table.find("tr:last");
        tr.remove();
        publish();
    }
    function printTD(row, column) {
        var idName = "r" + row + "c" + column;
        var completedTD = '<td><input id="' + idName + '" type="text" class=""/></td>';
        return completedTD;
    }
    function clearAll() {
        $table.find("input:text").val("");
        publish();
    }
    function publish() {
        amplify.publish(
            "tableChanged",
            {$table: $table, rows: numRows(), cols: numCols()
            });
    }
})();

Processor = (function() {
    amplify.subscribe("tableChanged", function(payload) {
        receive(payload);
        amplify.publish("arrayGenerated", array);
    });

    var array;
    function receive(payload) {
        var $table = payload.$table;
        var rows = payload.rows;
        var cols = payload.cols;
        array = tableToArray($table, rows, cols);
    }

    function tableToArray($table, rows, cols) {
        var array = [];
        for (var r = 0; r < rows; r++) {
            array[r] = [];
            for (var c = 0; c < cols; c++) {
                var $currentField = $table.find("#r" + (r + 1) + "c" + (c + 1));
                array[r][c] = $currentField.val();
            }
        }
        return array;
    }
})();

Model = (function() {
    amplify.subscribe("arrayGenerated", function(matrixArray) {
        receive(matrixArray);
        amplify.publish("modelChanged", array);
    });
    var array;
    function receive(matrixArray) {
        array = matrixArray;
    }
    return{
        array: array
    };
})();

Translator = (function() {
    amplify.subscribe("modelChanged", function(array) {
        receive(array);
        amplify.publish("translationChanged", outbound);
    });
    amplify.subscribe("bracketChanged", function(bracket) {
        updateBracketType(bracket);
        amplify.publish("translationChanged", outbound);
    });

    var settings = {
        wolframMax: 200 //verified on WA forum http://community.wolframalpha.com/viewtopic.php?f=31&t=251939
    };
    var array;
    var rows;
    var cols;
    var outbound = {};
    //===============
    var wolfram;
    var matlab;
    var latex;
    var latexBracketType = "(";

    function receive(a) {
        array = a;
        rows = array.length;
        cols = array[0].length;
        update();
    }
    function update() {
        wolfram = generateWolfram();
        isWolframTooLong();
        isWolframHasEmpty();

        matlab = generateMatlab();
        latex = generateLatex();
        buildOutbound();
    }

    function buildOutbound() {
        outbound = {
            wolfram: wolfram,
            matlab: matlab,
            latex: latex
        };
    }
    function generateWolfram() {
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
    function isWolframTooLong() {
        if (wolfram.length > settings.wolframMax) {
            amplify.publish("wolframTooLong");
        } else {
            amplify.publish("!wolframTooLong");
        }
    }
    function isWolframHasEmpty() {
        var empty = false;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                if (array[r][c] === "") {
                    empty = true;
                }
            }
        }
        if (empty) {
            amplify.publish("wolframHasEmpty");
        } else {
            amplify.publish("!wolframHasEmpty");
        }
    }
    function generateMatlab() {
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
    function updateBracketType(bracket) {
        var validBrackets = "[ ( { | ||";
        try {
            if (validBrackets.indexOf(bracket) !== -1) {
                latexBracketType = bracket;
            }
        } catch (error) {
            console.log("error within translator object. Somethign to do with brackets. Error: " + error);
        }
        update();
    }
    function generateLatex() {
        var rows = array.length;
        var cols = array[0].length;
        var delimiter = "";
        switch (latexBracketType) {
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
                console.log("something messed up within switch statement of generateLatex()");
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
})();