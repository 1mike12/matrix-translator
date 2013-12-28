$(document).ready(function() {
    var matrix = $("#matrix");
    var $matrixFields = $("#matrix input:text");
    //auto highlight fields when focused
    var autoHighlight = $('#outputColumn input:text, #matrix input:text');

    autoHighlight
            .focus(function() {
                $(this).select();
            })
            .mouseup(function(e) {
                return false;
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
        var rows = getRows(matrix);
        var cols = getCols(matrix);
        $("#rowField").val(rows);
        $("#colField").val(cols);
    }

    function generateMatrixArray($table) {
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

    $("#colPlus").click(function() {
        colPlus(matrix);
        updateFields();
    });

    $("#colMinus").click(function() {
        colMinus(matrix);
        updateFields();
    });

    $("#rowPlus").click(function() {
        rowPlus(matrix);
        updateFields();
    });
    $("#rowMinus").click(function() {
        rowMinus(matrix);
        updateFields();
    });

    $("#clearAll").click(function() {
        $matrixFields.val("");
    });

    //generate matrix array for each focus out when inside a matrix field
    $("#matrix input:text").focusout(function() {
        var g = generateMatrixArray(matrix);
        $("#matLabOutput").val(generateMatlab(g));
        //wolfram
        //latex
    });

    //autoexpand matrix field
    var matrixFieldWidth=$("#matrix input:text").outerWidth();
    $("#matrix input:text")
            .focus(function() {
                $(this).animate({width: "300px"}, 300);
            })
            .focusout(function() {
                $(this).animate({width: matrixFieldWidth+"px"}, 300);
            });
});
