<!doctype html>
<html>
    <head>
        <title>Mein Theremin</title>
        <style>
        div{
        height: 500px;
        width: 100%
            }

        </style>
    </head>
    <body>
        <h1>Theremin</h1>
        <script>

            var context = new AudioContext();
            var oscillatorNode = context.createOscillator();
            var gainNode = context.createGain();

            oscillatorNode.connect(gainNode);
            gainNode.connect(context.destination);


            gainNode.gain.value = 0.03;
            oscillatorNode.frequency.value = 880;




            var mousedown = false;

            document.body.addEventListener('mousedown', function(e){
                mousedown= true;
                oscillatorNode = context.createOscillator();
                oscillatorNode.connect(gainNode);
                oscillatorNode.start(context.currentTime);


            });

            document.body.addEventListener('mousemove', function(e){
        if (mousedown){
            console.log(e.clientX);
            console.log(e.clientY);
            oscillatorNode.frequency.value = (e.clientX*3);
            gainNode.gain.value = (e.clientY)/2000;

            console.log(window.innerHeight);
            console.log(window.innerWidth);
        }
            });

            document.body.addEventListener('mouseup', function(e){
        mousedown= false;
                oscillatorNode.stop(context.currentTime);
            });




        </script>
        <div id=div1>

        </div>






    </body>


</html>

