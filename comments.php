<!DOCTYPE html>
<html>
    <?php include 'head.php' ?>
    <body>
        <?php include 'header.php' ?>
        <div id="wrapper">
            <div class="belt">
                <div class="content">
                    <h1>FAQ</h1>
                    <div class="accordionHeaderWrapper">
                        <div class="accordionHeaderIcon"></div>
                        <h3 class="accordionHeader">Who made this?</h3>
                    </div>
                    <div class="accordionContent">
                        <p>
                            This site was hand crafted from scratch by the dynamic duo Mike Qin and Brian Gioia. For more info, check out the <a href='about.php'>about page</a>.
                        </p>
                    </div>
                    <div class="accordionHeaderWrapper">
                        <div class="accordionHeaderIcon"></div>
                        <h3 class="accordionHeader">Can't you generate the WolframAlpha link automatically so I don't have to copy and paste?</h3>
                    </div>
                    <div class="accordionContent">
                        <p>Mike: I actually wanted to implement this so there's one less step involved if you use WA. Unfortunately, it's actually against the WA terms of use:</p>
                        <p>
                            <i>It is not permitted to use Wolfram|Alpha indirectly through any user interface that has created a large number of deep links to Wolfram|Alpha, <strong>or that automatically constructs links based on input that you give to that interface rather than through Wolfram|Alpha.</strong>
                            </i>
                        </p>
                    </div>
                    <div class="accordionHeaderWrapper">
                        <div class="accordionHeaderIcon"></div>
                        <h3 class="accordionHeader">What is Latex?</h3>
                    </div>
                    <div class="accordionContent">
                        <p><a href="http://latex-project.org/intro.html" >Latex </a>is a special language that let's you write math. Normally, it's very hard to write things like matrices or integral signs for instance. </p>
                    </div>

                    <h1>Comments</h1>
                    <div class="commentsWrapper"> 
                        <div id="diqusWrapper">
                            <span>  If there is anything at all that would make the "Translator" more of an effective tool please let us know!</span>
                            <p></p>
                            <p></p>
                            <div id="disqus_thread"></div>
                            <script type="text/javascript">
                                /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
                                var disqus_shortname = 'matrixtranslator'; // required: replace example with your forum shortname

                                /* * * DON'T EDIT BELOW THIS LINE * * */
                                (function() {
                                    var dsq = document.createElement('script');
                                    dsq.type = 'text/javascript';
                                    dsq.async = true;
                                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                                })();
                            </script>
                            <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                            <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>

                        </div>
                    </div>
                </div>


            </div>
        </div>
        <?php include 'footer.php' ?>
    </body>
</html>
