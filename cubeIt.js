(function($){

    function getTranslate(face, size){
        var translate;
        var translateObj;
        var rotate = 'deg';

        switch(face){
            case 'front':
            case 'back':            
            translate = (face === 'front' ? size/2 : '-' + size/2) + 'px';
            rotate = (face === 'front' ? 0 : 180) + rotate;
            translateObj = {
                'transform': 'translateZ('+ translate+') ' + 'rotateY(' + rotate + ')'
            };
            break;

            case 'right':
            case 'left':
            translate = (face === 'right' ? size/2 : '-' + size/2) + 'px';
            rotate = (face === 'right' ? -270 : 270) + rotate;
            translateObj = {
                'transform': 'translateX('+ translate+') ' + 'rotateY(' + rotate + ')'
            };
            break;

            case 'top':
            case 'bottom':
            translate = (top === 'bottom' ? size/2 : '-' + size/2) + 'px';
            rotate = (face === 'bottom' ? -90 : 90) + rotate;
            translateObj = {
                'transform': 'translateY('+ translate+') ' + 'rotateX(' + rotate + ')'
            };
            break;

            default:
            return false;
        }

        return translateObj;
    }

    $.fn.cubeIt = function(settings){
        var options = $.extend({           
            border: "1px solid black",
            backgroundColor: "transparent",
            size: 100,
            animate:false
        }, settings );

        var cssObject = {};

        var wrapper = $('<div class="cube-wrapper"></div>').appendTo(this).css('perspective', '1000px');
        var cube = $('<div></div>').appendTo(wrapper);
        cube.addClass('cube');
        cube.css({            
            'width' : options.size,
            'position': 'relative',
            'margin': '0 auto',
            'transform-style': 'preserve-3d',
            'animation': options.animate ? 'spin 5s infinite linear' : 'none'
        });

        if(options.animate){
            $( "<style type=\"text/css\">@keyframes spin { from { transform: rotateY(0); } \
            to { transform: rotateY(360deg); }\
            }</style>").appendTo( "head" );
        }

        faceStyles = {
            'border': options.border,
            'width': options.size,
            'height': options.size,
            'background': options.backgroundColor,
            'position': 'absolute',
            'text-align': 'center',
            'line-height': options.size+'px'
        };

        var faces = ['front', 'top', 'back', 'left', 'right', 'bottom'];
        faces.forEach(function(face){
            var $face = $('<div>'+ face +'</div>').appendTo(cube).addClass(face);
            $.extend(cssObject, getTranslate(face, options.size), faceStyles); 
            $face.css(cssObject);
        });


        
    }
})(jQuery);

$('.cuber').cubeIt({size:200, border:'2px solid green'});