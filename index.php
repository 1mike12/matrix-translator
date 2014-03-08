<!DOCTYPE html>
<html>
    <head>
        <!--3rd party scripts
        ####################################################################-->
        <script src="plugins/google_analytics.js"></script>

        <!--Jquery version 1.xx supports IE 567 + 
        ...............................................-->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>
            if (!window.jQuery) {
                document.write('<script src="scripts/jquery-1.11.0.js"><\/script>');
            }
        </script>

        <!--Amplify JS for PUBlish Subscribe function 
        ...............................................-->
        <script src="//cdnjs.cloudflare.com/ajax/libs/amplifyjs/1.1.0/amplify.js"></script>
        <script>
            if (!window.amplify) {
                document.write('<script src="plugins/amplify.js"><\/script>');
            }
        </script>

        <!--QTIP2
        ...............................................-->
        <script src="//cdn.jsdelivr.net/qtip2/2.2.0/jquery.qtip.min.js"></script>
        <script>
            if (!window.qtip) {
                document.write('<script src="plugins/qtip2/jquery.qtip.min.js"><\/script>');
            }
        </script>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/qtip2/2.2.0/jquery.qtip.min.css" />

        <!--Joyride 2
        ...............................................-->
        <link href="plugins/joyride/joyride-2.1.css" rel='stylesheet' type='text/css'>
        <script src="plugins/joyride/jquery.joyride-2.1.js"></script>

        <!-- fonts 
        #####################################################################-->
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400' rel='stylesheet' type='text/css'>
        <meta charset="UTF-8">

        <!--personal Imports
        #####################################################################-->
        <link rel="stylesheet" href="css/style.css" />
        <link href="images/favicon.ico" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />

        <!-- html 5 shiv for IE backwards compatability-->
        <!--[if lt IE 9]>
            <script src="plugins/html5shiv.js"></script>
        <![endif]-->

        <title>Matrix Translator</title>
    </head>
    <body>
        <div id="globalWrapper">
            <?php include 'header.php' ?>
            <div id="wrapper" class="selfClear">
                <div id="matrixWrapper">
                    <div id="matrixWrapperInner">
                        <div id="matrixCanvas" class="dropShadow">
                            <div id="matrixOptions" class="selfClear">
                                <div class="comboWrapper">
                                    <div class="comboLabel">rows</div>
                                    <input id="rowField" type="text" value="3"/>
                                    <div class="plusMinusWrapper">
                                        <input id="rowPlus" class="buttonPlus" type="button" value=""/>
                                        <input id="rowMinus" class="buttonMinus" type="button" value=""/>
                                    </div>
                                </div>
                                <div class="comboWrapper">
                                    <div class="comboLabel" style="margin-left:35px;">columns</div>
                                    <input id="colField" type="text" value="3"/>
                                    <div class="plusMinusWrapper">
                                        <input id="colPlus" class="buttonPlus" type="button" value=""/>
                                        <input id="colMinus" class="buttonMinus" type="button" value=""/>
                                    </div>
                                </div>
                                <div id="clearAll">clear</div>
                            </div>
                            <div class="fadedLine"></div>
                            <div class="fadedLineDarker"></div>
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
                        <div id="help" class="dropShadow">
                            <h2>How do I use this thing?</h2>
                        </div>
                        <div id="helpContent">
                            <h3>Matrix Translator automatically formats a matrix so you can use it in 3rd party websites and programs.</h3>
                            <p></p>
                            <img src="images/tour.png" alt="3 part drawing of site" style="display:block; margin:auto; max-width:100%; margin-bottom:15px;"/>
                            <a id="launchTour" href="#">Launch a 5 Second Tour</a>
                            <p>
                                Whether you're a student, or professional engineer, working with marices sucks. It's bad enough trying to remember eigenvalues, RREF's and whatever Markovs Chains are without the hassle of each and every tool using a completely different format. We made this tool to make it easier to use Wolfram Alpha, Matlab and Latex.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="sideBar">
                    <div id="output" class="section selfClear">
                        <div class="outputHeaderWrapper selfClear">
                            <h3><a href="http://www.wolframalpha.com/" target="_blank">WolframAlpha</a></h3>
                            <span id="wolframWarning" class="warning"><img src="images/warning_sign.png"/></span>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="wolframOutput" type="text" value="">
                        </div>

                        <div class="outputHeaderWrapper selfClear">
                            <h3>MATLab</h3>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="matLabOutput" type="text" value=""> 
                        </div>

                        <div class="outputHeaderWrapper selfClear">
                            <h3>LaTeX</h3>
                        </div>
                        <div class="outputFieldWrapper">
                            <input id="latexOutput" type="text" value="">
                        </div>
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
                    <div class="section selfClear">
                        <p>We want to pay for hosting without using ads. If you find this tool useful, consider leaving a donation.
                        </p>
                        <a id="paypalButton" href="donate.php">Ways to Help</a>
                    </div>
                </div>
            </div>
            <?php include 'footer.php' ?>
        </div>
        <ol id="joyRideTipContent">
            <li data-class="comboWrapper">
                <h3>1. Adjust the size of the matrix.</h3>
                <p>You can also directly enter a number and hit enter</p>
            </li>
            <li data-id="matrix">
                <h3>2. Enter values</h3>
                <p>You can type letters, symbols, or even leave a field empty*</p>
            </li>
            <li data-id="output" data-options="tipLocation:left">
                <h3>3. Use your output</h3>
                <p>*Woflram Alpha gets mad if you have empty fields</p>
                <p>
                    They also limit your input to 200 characters. Don't worry, a warning will show up if there's a problem
                </p>
            </li>
            <li data-id="latexButtons" data-button="All set!" data-options="tipLocation:left">
                <h3>3.5 Latex options</h3>
                <p>With latex, you can pick the fashion of your matrix.</p>
                <p>
                    The drab old ( ) is sooo 1350s. Our hired bracketologist agrees that not only is { } in vogue, but that it's especially appropriate considering the programming and mathematical roots of its conception.
                </p>
            </li>
        </ol>
        <script src="scripts/main_model.js"></script>
        <script src="scripts/buttons_view.js"></script>
        <script src="scripts/output_view.js"></script>
        <script src="scripts/accordion.js"></script>
        <script src="scripts/script.js"></script>
    </body>
</html>
