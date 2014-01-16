<!DOCTYPE html>
<html>
    <?php include 'head.php' ?>
    <body>
        <div id="globalWrapper">
            <?php include 'header.php' ?>
            <div id="wrapper" class="selfClear">

                <div id="matrixWrapper" class="responsive">
                    <div id="matrixWrapperInner">
                        <div id="matrixOptions" class="dropShadow">
                            rows: <input id="rowField" type="text" value="3"/> 
                            columns: <input id="colField" type="text" value="3"/>
                            <input id="rowPlus" type="button" value="row+"/>
                            <input id="rowMinus" type="button" value="row-"/>
                            <input id="colPlus" type="button" value="col+"/>
                            <input id="colMinus" type="button" value="col-"/>
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

                <div id="outputColumn" class="responsive">
                    <div class="dropShadow">

                        <div class="outputHeaderWrapper selfClear">
                            <h3><a href="http://www.wolframalpha.com/" target="_blank">WolframAlpha</a></h3>
                            <span id="wolframWarning" class="warning"><img src="images/warning_sign.png"/></span>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="wolframOutput" type="text" value="">
                        </div>

                        <div class="outputHeaderWrapper selfClear">
                            <h3>MAT Lab</h3>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="matLabOutput" type="text" value=""> 
                        </div>

                        <div class="outputHeaderWrapper selfClear">
                            <h3>LateX</h3>
                            <div id="latexButtons">
                                <input type="radio" id="parantheses" value="(" name="latexBracketType" checked="checked">
                                <label for="parantheses">( )</label>

                                <input type="radio" id="bracket" value="[" name="latexBracketType">
                                <label for="bracket">[ ]</label>

                                <input type="radio" id="curlyBrace" value="{" name="latexBracketType">
                                <label for="curlyBrace">{ }</label>

                                <input type="radio" id="polon" value="|" name="latexBracketType">
                                <label for="polon">| |</label>

                                <input type="radio" id="doublePolon" value="||" name="latexBracketType">
                                <label for="doublePolon">‖ ‖</label>
                            </div>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="latexOutput" type="text" value="">
                        </div>
                    </div>
                </div>
            </div>
            <?php include 'footer.php' ?>
        </div>
    </body>
</html>
