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
        var rows = getRows($table);
        var columns = getCols($table);

        var $rowSet = $table.find("tr");
        for (var i = 0; i < $rowSet.length; i++) {
            var $td = $(printTD(i + 1, columns + 1)).hide();
            $rowSet.eq(i).append($td);
            $td.fadeIn(200);
        }

    }
    function colMinus($table) {
        var $TDSet = $table.find("tr").find("td:last");
        for (var i = 0; i < $TDSet.length; i++) {
            $TDSet.fadeOut(200, function(){$TDSet.remove();});
        }
    }

    var matrix = $("#matrix");
    $("#colPlus").click(function() {
        colPlus(matrix);
    });

    $("#colMinus").click(function() {
        colMinus(matrix);
    });
});
