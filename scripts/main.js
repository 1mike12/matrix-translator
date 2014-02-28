MatrixActual = (function() {
    var settings = {
        tableID: "matrix"
    };
    var $table = $(settings.tableID);

    function numRows($table) {
        var rows = $table.find("tr").length;
        return rows;
    }
    function numCols($table) {
        var firstRow = $table.find("tr").slice(0, 1);
        var columns = firstRow.find("td").length;
        return columns;
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
    function printTD(row, column) {
        var idName = "r" + row + "c" + column;
        var completedTD = '<td><input id="' + idName + '" type="text" class=""/></td>';
        return completedTD;
    }
    return{
        //publicly accessible methods
    };
})();

MatrixModel = (function() {
    var settings = {
        tableID: "matrix"
    };
    var $table=$(settings.tableID);
    
    //subscribe to update data event, then run the following:
    function update(){
        var array= tableToARray($table);
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
})();

Translator = (function() {

    return{
    };
})();