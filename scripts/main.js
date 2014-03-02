MatrixObject = (function() {
    var settings = {
        tableID: "#matrix"
    };
    var $table = $(settings.tableID);
    //getting table stats
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
        var cols = getCols($table);
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
    function publish() {
        amplify.publish("matrixChanged", MatrixObject);
    }

    return{
        colPlus: colPlus,
        colMinus: colMinus,
        rowPlus: rowPlus,
        rowMinus: rowMinus,
        getRows: numRows,
        getCols: numCols,
        tableID: settings.tableID
    };
})();
Processor = (function() {
    amplify.subscribe("matrixChanged", function(MatrixObject) {
        update(MatrixObject);
        amplify.publish("arrayGenerated", matrixArray);
    });
    var matrixArray;
    //subscribe to update data event, then run the following:
    function update(MatrixObject) {
        matrixArray = tableToArray(MatrixObject);
    }

    function tableToArray(MatrixObject) {
        var rows = MatrixObject.getRows();
        var cols = MatrixObject.getCols();
        var array = [];
        for (var r = 0; r < rows; r++) {
            array[r] = [];
            for (var c = 0; c < cols; c++) {
                var currentField = MatrixObject.tableID + " #r" + (r + 1) + "c" + (c + 1);
                array[r][c] = $(currentField).val();
            }
        }
        return array;
    }
})();

Model = (function() {
    amplify.subscribe("arrayGenerated", function(matrixArray) {
        importer(matrixArray);
        amplify.publish("modelChanged", Model);
    });
    var array;
    function importer(matrixArray) {
        array = matrixArray;
    }
    return{
        array:array
    };
})();

Translator = (function() {
    var settings = {
        wolframMax: 200 //verified on WA forum http://community.wolframalpha.com/viewtopic.php?f=31&t=251939
    };
    var array;
    var rows;
    var cols;
    //===============
    var wolfram;
    var wolframTooLong = false;
    var wolframHasEmpty = false;
    var matlab;
    var latex;
    var latexBracketType;
    amplify.subscribe("modelChanged", function(Model) {
        importer(Model);
        amplify.publish("translationChanged", Translator);
    });
    amplify.subscribe("bracketChanged", function(bracket) {
        updateBracketType(bracket);
        amplify.publish("translationChanged", Translator);
    });
    function importer(a) {
        array = a;
        rows = array.length;
        cols = array[0].length;
        update();
    }
    function update() {
        isWolframTooLong();
        isWolframHasEmpty();
        wolfram = generateWolfram();
        matlab = generateMatlab();
        latex = generateLatex();
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
            wolframTooLong = true;
        } else {
            wolframTooLong = false;
        }
    }
    function isWolframHasEmpty() {
        wolframHasEmpty = false;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                if (array[r][c] === "") {
                    wolframHasEmpty = true;
                }
            }
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
    return{
        wolfram: wolfram,
        matlab: matlab,
        latex: latex,
        wolframTooLong: wolframTooLong,
        wolframHasEmpty: wolframHasEmpty
    };
})();

Results = (function() {
    var settings = {
        wolframID: "#wolframOutput",
        matlabID: "matLabOutput",
        latexID: "latexOutput"
    };
    amplify.subscribe("translationChanged", function(Translator) {
        importer(Translator);
    });
    var wolfram;
    var wolframTooLong;
    var wolframHasEmpty;
    var matlab;
    var latex;
    
    var $wolfram= $(settings.wolframID);
    var $matlab= $(settings.matlabID);
    var $latex= $(settings.latexID);
    
    function importer(Translator) {
        wolfram = Translator.wolfram;
        matlab = Translator.wolfram;
        latex = Translator.wolfram;
        wolframTooLong= Translator.wolframTooLong;
        wolframHasEmpty= Translator.wolframEmpty;
        update();
    }
    function update() {
        $wolfram.val(wolfram);
        $matlab.val(matlab);
        $latex.val(latex);
        
        if (wolframTooLong){
            amplify.publish("wolframTooLong");
        }
        if (wolframHasEmpty){
            amplify.publish("wolframHasEmpty");
        }
    }
})();

WolframError= (function(){
    amplify.subscribe("wolframTooLong", function(){
        
    });
    amplify.subscribe("wolframHasEmpty", function(){
        
    });
})();

colField = (function() {
    var $field = $("#colField");
    function update() {
        $field.val(MatrixObject.getCols());
    }
    return{
        update: update
    };
})();