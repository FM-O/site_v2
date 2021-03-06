/**
 * Created by flo on 24/11/14.
 */

/**** FUNCTION init plugin fullpage ****/

$(document).ready(function() {

    function animateOnActive(){
        // This function allow to combine multiple properties according to the currently active slide
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

            if($current.hasClass("active-tip")){
                $($element).css($property, $value);
            }
        }
    }

    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'achievements', 'end'],
        menu: 'MyMenu',
        afterLoad: function(anchorLink){
            var $height = window.innerHeight,
                $width = window.innerWidth;
            var $tip1 = $('.tip-arian-1'),
                $tip2 = $('.tip-arian-2'),
                $tip3 = $('.tip-arian-3'),
                $tip4 = $('.tip-arian-4'),
                $tip5 = $('.tip-arian-5'),
                $allTips = $('.tip-arian-accueil');

            if(anchorLink == 'home'){
                $allTips.removeClass('active-tip');
                $tip1.addClass('active-tip');
                animateOnActive([
                    {
                        slide: '.tip-arian-1',
                        element: '.circle-cv a',
                        property: 'color',
                        value: 'inherit'
                    },
                    {
                        slide: '.tip-arian-1',
                        element: '.circle-cv p',
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
                animateOnActive([
                    {
                        slide: '.tip-arian-2',
                        element: '.circle-cv a',
                        property: 'color',
                        value: '#FFFFFF'
                    },
                    {
                        slide: '.tip-arian-2',
                        element: '.circle-cv p',
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
                if($width >= 800 && $height >= 500){
                    setTimeout(function(){
                        animateOnActive('.tip-arian-3', '.skill-progress', 'left', '0');
                    }, 200);
                }
                animateOnActive([
                    {
                        slide: '.tip-arian-3',
                        element: '.circle-cv a',
                        property: 'color',
                        value: 'inherit'
                    },
                    {
                        slide: '.tip-arian-3',
                        element: '.circle-cv p',
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
                animateOnActive([
                    {
                        slide: '.tip-arian-4',
                        element: '.circle-cv a',
                        property: 'color',
                        value: '#FFFFFF'
                    },
                    {
                        slide: '.tip-arian-4',
                        element: '.circle-cv p',
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
                animateOnActive([
                    {
                        slide: '.tip-arian-5',
                        element: '.circle-cv a',
                        property: 'color',
                        value: 'inherit'
                    },
                    {
                        slide: '.tip-arian-5',
                        element: '.circle-cv p',
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
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
            if (anchorLink == 'achievements' && slideIndex == 0 && direction == 'right') {
                $('.circle-cv').css('display', 'none');
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            if (anchorLink == 'achievements' && slideIndex == 0) {
                $('.circle-cv').css('display', 'table');
            }
        },
        onLeave: function(index, nextIndex, direction) {
            var currentUrl = document.URL;
            /^[a-z0-9\/:._-]+#achievements(\S+)$/.exec(currentUrl);

            if (index == 4 && (direction == 'down' || direction == 'up')) {
                $('.circle-cv').css('display', 'table');
            } else if (index == 5 && direction == 'up' && RegExp.$1 != '') {
                $('.circle-cv').css('display', 'none');
            } else if (index == 3 && direction == 'down' && RegExp.$1 != '') {
                $('.circle-cv').css('display', 'none');
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

            if(($height <= 768 && $width <= 1024) || ($height <= 1024 && $width <= 768)){
                $canvasFull = $('<canvas width="125px" height="125px" />');
                $responsiveRatio = 1.60;
            }
            else{
                $canvasFull = $('<canvas width="200px" height="200px" />');
                $responsiveRatio = 1;
            }

            var $currentElem = $(this),
                $progress = $(this).data('progress'),
                $progress_final = $(this).data('progressfinal');

            var $circle1 = $canvasFull,
                $color = $canvasFull;
            $currentElem.append($circle1);
            $currentElem.append($color);

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

    //Function not available link deployed
    (function($){

        $('.more-skills-button').click(function(){

            var $overlay = $('#more-skills');

            var $moreSkillsContainer = $('#more-skills-container div'),
                $linkContainer = $('#more-skills-container div p'),
                $cross = $('#cross-container');

            $overlay.fadeIn(300);
            $overlay.css('display', 'table');

            setTimeout(function(){

                $moreSkillsContainer.css({
                    'height' : '25rem',
                    'width' : '40rem'
                });

                setTimeout(function(){
                    $linkContainer.fadeIn(400);
                    $linkContainer.css('display' ,'table-cell');

                    $cross.fadeIn(400);

                    $cross.click(function(){
                        $overlay.fadeOut(200);
                        $moreSkillsContainer.css({
                           'height' : '0',
                            'width' : '0'
                        });
                        $linkContainer.fadeOut(200);
                        $cross.fadeOut(200);
                    });
                }, 200);

            }, 500);

            return false;
        });

    })(jQuery);
});

// Animate function for skew slides rea

(function($){

    function skewAnim(i) {

        var height = window.innerHeight,
            width = window.innerWidth;

        $('.button-project-'+i+'').click(function(){

            $('.button-project-container-'+i+'').fadeOut(100);

            $('.skew-'+i+'').css('display', 'block');

            if(width >= 800 && height >= 500) {

                setTimeout(function(){
                    $('.skew-'+i+'').css('left', '50%');
                    $('.bck-web-'+i+'').css('background', 'none');
                    setTimeout(function(){
                        $('.bck-web-'+i+'').css('z-index', '49');
                        $('.skew-'+i+'').css({
                            'transform' : 'matrix(1, 0, -0.33, 1, 0, 0)',
                            '-webkit-transform' : 'matrix(1, 0, -0.33, 1, 0, 0)',
                            '-ms-transform' : 'matrix(1, 0, -0.33, 1, 0, 0)',
                            '-moz-transform' : 'matrix(1, 0, -0.33, 1, 0, 0)'
                        });
                    }, 500);
                    setTimeout(function(){
                        $('.details-'+i+'').fadeIn(300);
                    }, 700);
                }, 100);
            } else {
                setTimeout(function(){
                    $('.skew-'+i+'').css('left', '0');
                    $('.bck-web-'+i+'').css('background', 'none');
                    setTimeout(function(){
                        $('.bck-web-'+i+'').css('z-index', '49');
                    }, 500);
                    setTimeout(function(){
                        $('.details-'+i+'').fadeIn(300);
                    }, 700);
                }, 100);
            }
            return false;
        });
    }

    var projects = document.getElementsByClassName('button-project'),
        projectsLen = projects.length;

    for (var i = 0 ; i < projectsLen ; i++) {
        skewAnim(i+1);
        console.log(i+1);
    }
})(jQuery);