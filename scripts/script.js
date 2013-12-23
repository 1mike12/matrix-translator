/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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

    //autogrow matrix input fields
    var matrixFields= $('#matrix input:text');
    

});
