<!DOCTYPE html>
<html>
    <?php include 'head.php' ?>
    <body>
        <?php include 'header.php' ?>
        <div id="wrapper">
            <div class="belt">
                <div class="article">
                    <h2>Inspiration</h2>
                    <img src="making_of_images/broken_pencil.jpg" alt="broken pencil"/>
                    <div class="articleContent">
                        <p>
                            I got the inspiration to make the matrix translator while (surprise) taking a linear algebra class. In class, we had to use matlab, but we all used WolframAlpha when it was time to do homework since nobody had a matlab license. Between memorizing eigen' this and eigen' that, there was no room left in my brain to remember the finicky syntax between each program. I found myself spending 5-10 minutes every single time I did my homework to re-look up how to write the code.</p>
                        <p>
                            Later on I found out about Latex. Yeah right, look at this mess! \begin{pmatrix} 1-λ & 4 & 3 \\ 0 & 2-λ & 4 \\ 0 & 0 & 1 \end{pmatrix}
                        </p>
                    </div>
                </div>
                <div class="article">
                    <h2>The solution</h2>
                    <img src="making_of_images/finishded_wolfram_translation.png" alt="finished code of wolfram translation"/>
                    <div class="articleContent">
                        <p>I knew a bit of HTML and CSS but was a far cry from being the caliber of web developer that was necessary. As simple as the project sounded at the time, I was not entirely sure that I could complete something like this. 
                        </p>
                        <p>
                            Later on I found out about Latex. Yeah right, look at this mess! \begin{pmatrix} 1-λ & 4 & 3 \\ 0 & 2-λ & 4 \\ 0 & 0 & 1 \end{pmatrix}
                        </p>
                    </div>
                </div>
                <div class="article">
                    <h2>The solution</h2>
                    <img src="making_of_images/whiteboard_brainstorming.JPG" alt="finished code of wolfram translation"/>
                    <div class="articleContent">
                        <p>I knew a bit of HTML and CSS but was a far cry from being the caliber of web developer that was necessary. As simple as the project sounded at the time, I was not entirely sure that I could complete something like this. 
                        </p>
                        <p>
                            Later on I found out about Latex. Yeah right, look at this mess! \begin{pmatrix} 1-λ & 4 & 3 \\ 0 & 2-λ & 4 \\ 0 & 0 & 1 \end{pmatrix}
                        </p>
                    </div>
                </div>
                <div id="diqusWrapper">
                    <h1>Comments</h1>
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
        <?php include 'footer.php' ?>
    </body>
</html>
