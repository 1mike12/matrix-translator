<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/matrix.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        
        <link href='http://fonts.googleapis.com/css?family=Squada+One' rel='stylesheet' type='text/css'>

        <script src="scripts/jquery-1.9.1.js"></script>
        <script src="scripts/script.js"></script>

        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <header class="">
            <div>
                <img id="logo" src="images/shitty%20logo.png" alt="logo"/>
                <ul>
                    <li><a href="">Matrix</a></li>
                    <li><a href="">About</a></li>
                </ul>
                <div style="clear:both"></div>
            </div>
        </header>
        <div id="wrapper">
            <div class="section group">
                <div class="col span_2_of_3">
                    <table width="" border="0" cellspacing="0" cellpadding="0" style="margin:auto;">
                        <tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr class="">
                                        <td class="">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td class="">&nbsp;</td>
                                        <td id="matrixCore">

                                            <table id="matrix" width="100%">
                                                <tr id="row1">
                                                    <td id="m11"><input type="text" class=""></td>
                                                    <td id="m12"><input type="text" class=""></td>
                                                </tr>
                                                <tr id="row2">
                                                    <td id="m21"><input type="text" class=""></td>
                                                    <td id="m22"><input type="text" class=""></td>
                                                </tr>
                                            </table>

                                        </td>
                                        <td class="">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="">
                                    <tr>
                                        <td class="">&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="outputColumn" class="col span_1_of_3">
                    <div style="padding:5%;">
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

            <div class="section group"><!--begin matrix history -->
                <div class="col span_3_of_3">
                    <div class="historyColumnWrapper">
                        <h2>History</h2>
                        http://docs.mathjax.org/en/latest/start.html#installing-your-own-copy-of-mathjax
                    </div>
                </div>
            </div><!--end matrix history-->

            <div class="section group"><!--begin footer-->
                <footer>
                    <div class="col span_3_of_3">
                        <div class="footerColumnWrapper">
                            <h2>footer</h2>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </body>
</html>
