/**
 * Created by flo on 24/11/14.
 */

/**** FUNCTION init plugin fullpage ****/

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'achievements', 'end'],
        menu: 'MyMenu',
        afterLoad: function(anchorLink){
            var $tip1 = $('.tip-arian-1'),
            $tip2 = $('.tip-arian-2'),
            $tip3 = $('.tip-arian-3'),
            $tip4 = $('.tip-arian-4'),
            $tip5 = $('.tip-arian-5'),
            $allTips = $('.tip-arian-accueil');

            if(anchorLink == 'home'){
                $allTips.removeClass('active-tip');
                $tip1.addClass('active-tip');
            }
            else if(anchorLink == 'about'){
                $allTips.removeClass('active-tip');
                $tip2.addClass('active-tip');
            }
            else if(anchorLink == 'skills'){
                $allTips.removeClass('active-tip');
                $tip3.addClass('active-tip');
            }
            else if(anchorLink == 'achievements'){
                $allTips.removeClass('active-tip');
                $tip4.addClass('active-tip');
            }
            else if(anchorLink == 'end'){
                $allTips.removeClass('active-tip');
                $tip5.addClass('active-tip');
            }
        }
    });


    (function($){

        $('.circle-skill-progress').each(function(){

            var $height = window.innerHeight,
                $width = window.innerWidth;
            var $canvasFull,
                $responsiveRatio;
            var $colorFullCircle = '#ebebeb',
                $colorProgressCircle = '#99CCCC';

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
            ctx.strokeStyle = $colorFullCircle;
            ctx.stroke();


            ctx = $color[0].getContext('2d');

            ctx.beginPath();
            ctx.arc(100/$responsiveRatio,100/$responsiveRatio,80/$responsiveRatio,-$progress*Math.PI,-$progress_final*Math.PI);
            ctx.lineWidth = 20/$responsiveRatio;
            ctx.strokeStyle = $colorProgressCircle;
            ctx.stroke();

        });

    })(jQuery);
});







