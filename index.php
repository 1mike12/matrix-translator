<!DOCTYPE html>
<html>
    <?php include 'head.php' ?>
    <body>
        <div id="globalWrapper">
            <?php include 'header.php' ?>
            <div id="wrapper">
                <div class="section group">
                    <div class="col span_2_of_3">
                        <div id="matrixWrapper">

                            <div id="matrixOptions" class="dropShadow">
                                rows: <input id="rowField" type="text" /> 
                                columns: <input id="colField" type="text" />
                                
                                <input id="colPlus" type="button" value="col+"/>
                                <input id="colMinus" type="button" value="col-"/>
                                <input id="rowPlus" type="button" value="row+"/>
                                <input id="rowMinus" type="button" value="row-"/>
                                <input id="clearAll" type="button" value="clear all"/>
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
                                    <tr id="r3">
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
                                <h3>WolframAlpha</h3>
                                <span id="wolframWarning" class="warning"><img src="images/yield.gif"/></span>
                            </div>
                            <div class="outputFieldWrapper">
                                <input id="wolframOutput" type="text" value="">
                            </div>

                            <h3>MAT Lab</h3>
                            <input id="matLabOutput" type="text" value="">

                            <h3>LateX</h3>
                            <input id="latexOutput" type="text" value="">
                        </div>
                    </div>
                </div>
            </div>
            <?php include 'footer.php' ?>
        </div>
    </body>
</html>
