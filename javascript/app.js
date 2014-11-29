/**
 * Created by flo on 24/11/14.
 */

/**** FUNCTION init plugin fullpage ****/

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'achievements', 'end'],
        menu: 'MyMenu'
    });


    (function($){

        $('.circle-skill-progress').each(function(){

            var $height = window.innerHeight,
                $width = window.innerWidth;
            var $canvasFull,
                $responsiveRatio;

            if($height <= 768 && $width <= 1024){
                $canvasFull = $('<canvas width="125px" height="125px" />');
                $responsiveRatio = 1.60;
            }
            else{
                $canvasFull = $('<canvas width="200px" height="200px" />');
                $responsiveRatio = 1;
            }

            var $test = $(this),
                $progress = $(this).data('progress'),
                $progress_final = $(this).data('progressfinal');

            $circle1 = $canvasFull;
            $color = $canvasFull;
            $test.append($circle1);
            $test.append($color);

            var ctx = $circle1[0].getContext('2d');

            ctx.beginPath();
            ctx.arc(100/$responsiveRatio,100/$responsiveRatio,80/$responsiveRatio,0,2*Math.PI);
            ctx.lineWidth = 20/$responsiveRatio;
            ctx.strokeStyle = '#ebebeb';
            ctx.stroke();


            ctx = $color[0].getContext('2d');

            ctx.beginPath();
            ctx.arc(100/$responsiveRatio,100/$responsiveRatio,80/$responsiveRatio,-$progress*Math.PI,-$progress_final*Math.PI);
            ctx.lineWidth = 20/$responsiveRatio;
            ctx.strokeStyle = '#898989';
            ctx.stroke();

        });

    })(jQuery);


});







