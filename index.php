<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/matrix.css" />
        <link rel="stylesheet" href="css/responsive.css" />


        <script src="scripts/jquery-1.9.1.js"></script>
        <script src="scripts/script.js"></script>

        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <header class="">
            <img id="logo" src="images/shitty%20logo.png" alt="logo"/>
            <div id="logoText">
                Matrix Translator
                <div id="logoSubTitle">making matrices a little less shitty</div>
            </div>
            <ul>
                <li><a href="">Matrix</a></li>
                <li><a href="">About</a></li>
            </ul>
            <div style="clear:both"></div>
        </header>
        <div id="wrapper">
            <div class="section group">
                <div class="col span_2_of_3">
                    <div id="matrixWrapper">

                        <div id="matrixOptions" class="dropShadow">
                            rows: <input type="text" /> columns: <input type="text" />
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
                                    <td><input id="r1c3" type="text" class=""/></td>
                                </tr>
                            </table>
                        </div>

                    </div>


                </div>
                <div id="outputColumn" class="col span_1_of_3">
                    <div class="dropShadow">
                        <h3>WolframAlpha</h3>
                        <div class="warning">not valid format yet<img src="images/info.png" alt="explanation"/></div>

                        <div class="outputFieldWrapper">
                            <input type="text" value="{{1, 2}, {3, 4}, {5, 6}}">
                            <div class="ellipsisContainer">...</div>
                        </div>

                        <h3>MAT Lab</h3>
                        <div class="warning"></div>
                        <input type="text" value="[16 3 2 13; 5 10 11 8; 9 6 7 12; 4 15 14 1]">

                        <h3>Google</h3>
                        <div class="warning"></div>
                        <input type="text">

                        <h3>LateX</h3>
                        <div class="warning"></div>
                        <input type="text" value="begin{array}{ccc} a & b & c">
                    </div>
                </div>
            </div>
        </div>
        <footer class="dropShadow">
            <span>copyright Mike Qin and Brian Gioia</span>
        </footer>
    </body>
</html>
