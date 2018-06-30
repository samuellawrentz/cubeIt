//This is just a crazy idea
//I created it for learning purpose

(function($){


    var pluginName = 'cubeIt';
    var wrapper;
    var cube;
    var faceElements = {};
    var faces = ['front', 'top', 'back', 'left', 'right', 'bottom'];

    var defaults = {           
        border: "1px solid black",
        backgroundColor: "transparent",
        size: 100,
        animate:false
    };


    function getTranslate(face){
        var translate;
        var translateObj;
        var rotate = 'deg';
        var size = this.options.size;

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
            return {};
        }

        return translateObj;
    }

    function setCubeStyle(){
        cube.addClass('cube');
        cube.css({            
            'width' : this.options.size,
            'position': 'relative',
            'margin': '0 auto',
            'transform-style': 'preserve-3d',
            'animation': this.options.animate ? 'spin 5s infinite linear' : 'none'
        });
    }

    function setAnimation(){  
            $( "<style type=\"text/css\">@keyframes spin { from { transform: rotateY(0); } \
            to { transform: rotateY(360deg); }\
            }</style>").appendTo( "head" );        
    }

    function setFaceSyles(){
        var styles = {
            'border': this.options.border,
            'width': this.options.size,
            'height': this.options.size,
            'background': this.options.backgroundColor,
            'position': 'absolute'
        };

        $('.face').css(styles);
    }

    function CubeIt(element, options){
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(CubeIt.prototype, {
        init: function(){
            var self = this;
            var cssObject = {};
            wrapper = $('<div class="cube-wrapper"></div>').appendTo($(self.element)).css('perspective', '1000px');
            cube = $('<div></div>').appendTo(wrapper);
            setCubeStyle.call(this);
            setAnimation.call(this);
            
            faces.forEach(function(face){
                var $face = $('<div></div>').appendTo(cube).addClass(face).addClass('face');
                faceElements[face] = $face; 
                $.extend(cssObject, getTranslate.call(self, face)); 
                $face.css(cssObject);
            });

            setFaceSyles.apply(this);
        },

        update: function(options){
            var cssObject = {};
            var self = this;
            $.extend(this.options, options);
            setCubeStyle.call(self);
            for (face in faceElements){
                $.extend(cssObject, getTranslate.call(self, face));
                faceElements[face].css(cssObject);
            }
            setFaceSyles.call(self);
        }
    });


    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new CubeIt(this, options));
            }
        });
    };
})(jQuery);