/**
 * Created by flo on 24/11/14.
 */

/**** FUNCTION init plugin fullpage ****/

$(document).ready(function() {
    $('#fullpage').fullpage();


    (function($){

        $('.circle-skill-progress').each(function(){

            var $test = $(this),
                $progress = $(this).data('progress'),
                $progress_final = $(this).data('progressfinal');

            $circle1 = $('<canvas width="200px" height="200px" />');
            $color = $('<canvas width="200px" height="200px" />');
            $test.append($circle1);
            $test.append($color);

            var ctx = $circle1[0].getContext('2d');

            ctx.beginPath();
            ctx.arc(100,100,80,0,2*Math.PI);
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#ebebeb';
            ctx.stroke();


            ctx = $color[0].getContext('2d');

            ctx.beginPath();
            ctx.arc(100,100,80,-$progress*Math.PI,-$progress_final*Math.PI);
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#898989';
            ctx.stroke();

        });

    })(jQuery);


    });







