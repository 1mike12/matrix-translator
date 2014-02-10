<!DOCTYPE html>
<html>
    <?php include 'head.php' ?>
    <body>
        <div id="globalWrapper">
            <?php include 'header.php' ?>
            <div id="wrapper">
                <div class="content">
                    <h1>What is Matrix Translator?</h1>
                    <div class="section">
                        <h2 class="quotation">
                            <div class="quotationRight">Matrix Translator automatically formats a matrix to be copied and pasted into 3rd party websites and programs.
                            </div>
                        </h2>
                        <p></p>
                        <p>The inspiration for developing Matrix Translator came when Mike took a linear algebra class. He wasted a lot of time remembering the complex syntax between each of the math tools out there. We created this tool to make working with matrices a little bit easier.</p>
                    </div>
                    <h1 class="">How it's made</h1>
                    <div class="section">
                        <p>WARNING: the following contains obscene amounts of dry code and programming babble. You have been warned</p>
                        <div class="accordionHeaderWrapper">
                            <div class="accordionHeaderIcon"></div>
                            <h3 class="accordionHeader">jQuery</h3>
                        </div>
                        <div class="accordionContent">
                            <p>Jquery is used heavily to create the functionality; from the sliding accordion effect that you just used, to the code crunching going on behind the scenes. 
                            </p>
                        </div>

                        <div class="accordionHeaderWrapper">
                            <div class="accordionHeaderIcon"></div>
                            <h3 class="accordionHeader">This Accordion Effect</h3>
                        </div>
                        <div class="accordionContent">
                            <p>
                                The accordion works by tagging the headers and turning them into triggers. Each header on this page is tagged as class="accordionHeaderWrapper". The content is also tagged as class="accordionContent". Here is the following code showing how this works:
                            </p>
                            <p>
                                When the trigger is pulled, the next preceding object in the DOM is slid down using the built in jQuery .slide() function. If the next item is already being displayed, then the content is instead made to slide up. 
                            </p>
                        </div>

                        <div class="accordionHeaderWrapper">
                            <div class="accordionHeaderIcon"></div>
                            <h3 class="accordionHeader">Matrix Conversion Algorithm</h3>
                        </div>
                        <div class="accordionContent">
                            <p>The matrix conversion algorithm was created using javscript and jQuery. It's a two part process to take the user's input and generate the resulting code. The first step in the translation process is to read what the current state of the matrix table. The matrix table is the orange table on the homepage. Each little cell has a unique identifier that is in the format r_c_. For instance, the top left cell of the table is tagged with the ID r1c1, which (surprise) stands for row 1, column 1.  The algorithm then builds an internal version of the matrix table, that has all the same values. The algorithm goes from row to row, scanning in the values into a 2 dimensional array.</p>
                            <p>
                                Once the array is created, then the translation can begin! Each of the langauges has its own syntax and how it delimits rows and columns. Each language has its very own translation function that plops the correct comma, semicolon or bracket in the right place. The function gets fed the array and it spits back out the finished, and cleanly formatted final result. 
                            </p>
                        </div>

                        <div class="accordionHeaderWrapper">
                            <div class="accordionHeaderIcon"></div>
                            <h3 class="accordionHeader">Adding Columns & Rows</h3>
                        </div>
                        <div class="accordionContent">
                            <p>
                                The dynamic change of rows and columns relies on being able to assess the current dimensions of the matrix table and re-adjusting accordingly. Each of the 4 operations (adding row, removing row, adding column, removing column) is done in a slightly different way, since we are dealing with an html table. 
                            </p>
                            <p>
                                For instance, removing a row is super easy. In essence, we are dropping the last row of the table and we don't have a care in the world what was in it before.
                            </p>
                            <p>
                                Adding columns, on the other hand, is pretty involved. First, we have to select all of the rows. Then, one row at a time, we must go to the end and insert a column. In addition, the unique ID of the cell has to be set to 1 more than the number of columns of the old table. 
                            </p>
                        </div>
                    </div>

                    <h1>Developers</h1>
                    <div class="section selfClear">
                        <div style="float:left; width:50%;">
                            <h2>Mike Qin</h2>
                            <p>Programming</p>
                            <div>
                                <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
                                <script type="IN/MemberProfile" data-id="http://www.linkedin.com/pub/mike-qin/13/941/96a" data-format="hover" data-related="false"></script>
                            </div>

                        </div>
                        <div style="float:left; width:50%;">
                            <h2>Brian Gioia</h2>
                            <p>User Interface</p>
                            <div>
                                <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
                                <script type="IN/MemberProfile" data-id="www.linkedin.com/in/gioiabrian" data-format="hover" data-related="false"></script> | <a href="#">portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php include 'footer.php' ?>
        </div>
    </body>
</html>
