<!DOCTYPE html>
<html>
    <?php include 'head.php'?>
    <body>
        <?php include 'header.php'?>
        <div id="wrapper">
            <div class="section group">
                <div class="col span_2_of_3">
                    <div id="matrixWrapper">

                        <div id="matrixOptions" class="dropShadow">
                            <h5>row: <input id="rowField" type="text" /> column: <input id="colField" type="text" />
                            <input id="clearAll" type="button" value="clear all"/></h5>
                            
                            <input id="colPlus" type="button" value="col+"/>
                            <input id="colMinus" type="button" value="col-"/>
                            <input id="rowPlus" type="button" value="row+"/>
                            <input id="rowMinus" type="button" value="row-"/>
                            
                        </div>

                        <div id="matrixCanvas" class="dropShadow">
                            <table id="matrix">
                                <tr id="r1">
                                    <td><input id="r1c1" type="text" class=""/></td>
                                    <td><input id="r1c2" type="text" class=""/></td>
                                    <td><input id="r1c3" type="text" class=""/></td>
                                </tr>
                                <tr id="r2">
                                    <td><input id="r2c1" type="text" class=""/></td>
                                    <td><input id="r2c2" type="text" class=""/></td>
                                    <td><input id="r2c3" type="text" class=""/></td>
                                </tr>
                                <tr id="r3" style="display: table-row;">
                                    <td><input id="r3c1" type="text" class=""></td>
                                    <td><input id="r3c2" type="text" class=""></td>
                                    <td><input id="r3c3" type="text" class=""></td>
                                </tr>
                            </table>
                        </div>

                    </div>


                </div>
                <div id="outputColumn" class="col span_1_of_3">
                    <div class="dropShadow">
                        <div class="outputHeaderWrapper">
                            <h4>WolframAlpha</h4>
                            <span id="wolframWarning" class="warning"> <img style="width:16px;" src="images/yield.gif" /> </span>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="wolframOutput" type="text" value="">
                        </div>

                        <h4>MAT Lab</h4>
                        <input id="matLabOutput" type="text" value="">

                        <h4>Google</h4>
                        <input type="text">
                        
                        <h4>LateX</h4>
                        <input id="latexOutput" type="text" value="">
                    </div>
                </div>
            </div>
        </div>
        <?php include 'footer.php'?>
    </body>
</html>
