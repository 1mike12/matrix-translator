$(document).ready(function() {
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
        var firstRow = $table.find("tr").slice(0,1);
        var columns = firstRow.find("td").length;
        return columns;
    }

    function printTD(row, column) {
        var idName = "r" + row + "c" + column;
        var completedTD = '<td><input id="' + idName + '" type="text" class=""/></td>';
        return completedTD;
    }

    function colPlus($table) {
        var rows= getRows($table);
        var columns = getCols($table);

        var $rowSet = $table.find("tr");
        for (var i = 0; i < $rowSet.length; i++) {
            $rowSet.eq(i).append(printTD(i+1, columns+1));
        }

    }
    
    $("#colPlus").click(function() {
        colPlus($("#matrix"));
    });
    
    

});
