define(['jQuery', 'velocity'], function ($, v) {

	var startBubbleAnimation = function() {
        var pageWidth = $(window).width() > 850 ? $(window).width() : 2000;
        var halfPageWidth = pageWidth / 2;
        var pageHeight = $(window).height() || 800;
        var halfPageHeight = pageHeight / 2;
        var range = 100;
        var treacle = 250;
        
        var animate = function animate($this, options) {
            var x0 = options.x;
            var y0 = options.y;

            $this.css('display', 'block');

            var x1 = x0 + (Math.random() * range * 2) - range;
            var y1 = y0 + (Math.random() * range * 2) - range;

            if (x1 < 0) {
                x1 = 0;
            } else if (x1 > halfPageWidth) {
                x1 = halfPageWidth;
            }
            
            if (y1 < 0) {
                y1 = 0;
            } else if (y1 > halfPageHeight) {
                y1 = halfPageHeight;
            }

            var distance = Math.sqrt(((x1 - x0) * (x1 - x0)) + ((y1 - y0) * (y1 - y0)));

            var opacity = 0.5 + x1/halfPageWidth;

            $this.velocity({
                translateX: [ x1, x0 ],
                translateY: [ y1, y0 ],
                opacity: opacity,
            }, {
                duration: treacle * distance,
                complete: function() {
                  setTimeout( function() {
                    options.x = x1;
                    options.y = y1;
                    animate($this, options);
                  }, 500);
                }
            });
        }

        $(".background-bubbles .bubble").each(function() {
            options = {};
            options.x = (Math.random() * halfPageWidth);
            options.y = (Math.random() * pageHeight);

            var $this = $(this);

            var opacity = 0.5 + options.x/halfPageWidth;
            $this.css('opacity', opacity);

            animate($this, options);
        });
    }
    startBubbleAnimation();
});