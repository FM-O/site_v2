/**
 * Created by flo on 24/11/14.
 */

/**** FUNCTION init plugin fullpage ****/

$(document).ready(function() {

    function skillProg(){
        //.tip-arian-3
        if(arguments.length == 1){
            var $modif = arguments[0];
            for(var i=0; i<$modif.length; i++){
                var $current = $($modif[i].slide);

                if($current.hasClass("active-tip")){
                    $($modif[i].element).css($modif[i].property, $modif[i].value);
                }
            }
        }
        else{
            var $slide = arguments[0],
                $element = arguments[1],
                $property = arguments[2],
                $value = arguments[3];
            var $current = $($slide);

            console.log(arguments);


            if($current.hasClass("active-tip")){
                $($element).css($property, $value);
            }
        }
    }

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
                skillProg([
                    {
                        slide: '.tip-arian-1',
                        element: '.circle-cv a',
                        property: 'color',
                        value: 'inherit'
                    },
                    {
                        slide:'.tip-arian-1',
                        element:'.circle-cv',
                        property: 'background-color',
                        value: 'inherit'
                    }
                ]);
            }
            else if(anchorLink == 'about'){
                $allTips.removeClass('active-tip');
                $tip2.addClass('active-tip');
                skillProg([
                    {
                        slide: '.tip-arian-2',
                        element: '.circle-cv a',
                        property: 'color',
                        value: '#FFFFFF'
                    },
                    {
                        slide:'.tip-arian-2',
                        element:'.circle-cv',
                        property: 'background-color',
                        value: '#99CCCC'
                    }
                ]);
            }
            else if(anchorLink == 'skills'){
                $allTips.removeClass('active-tip');
                $tip3.addClass('active-tip');
                setTimeout(function(){
                    skillProg('.tip-arian-3', '.skill-progress', 'left', '0');
                }, 200);
                skillProg([
                    {
                        slide: '.tip-arian-3',
                        element: '.circle-cv a',
                        property: 'color',
                        value: 'inherit'
                    },
                    {
                        slide:'.tip-arian-3',
                        element:'.circle-cv',
                        property: 'background-color',
                        value: 'inherit'
                    }
                ]);
            }
            else if(anchorLink == 'achievements'){
                $allTips.removeClass('active-tip');
                $tip4.addClass('active-tip');
                skillProg([
                    {
                        slide: '.tip-arian-4',
                        element: '.circle-cv a',
                        property: 'color',
                        value: '#FFFFFF'
                    },
                    {
                        slide:'.tip-arian-4',
                        element:'.circle-cv',
                        property: 'background-color',
                        value: '#99CCCC'
                    }
                ]);
            }
            else if(anchorLink == 'end'){
                $allTips.removeClass('active-tip');
                $tip5.addClass('active-tip');
                skillProg([
                    {
                        slide: '.tip-arian-5',
                        element: '.circle-cv a',
                        property: 'color',
                        value: 'inherit'
                    },
                    {
                        slide:'.tip-arian-5',
                        element:'.circle-cv',
                        property: 'background-color',
                        value: 'inherit'
                    }
                ]);
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

    (function($){

        $('.more-skills-button').click(function(){

            var sector = $('.main-image-bloc-dev');
            var $error = $('<p>Ce lien n\'est pas encore disponible</p>');

            $error.addClass('error-mess');

            $(sector).append($error);

            setTimeout(function(){
                $error.fadeOut(500);
            }, 700);

            setTimeout(function(){
                $error.remove();
            }, 1400)
        });

    })(jQuery);
});







