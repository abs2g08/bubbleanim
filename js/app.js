define(['jQuery', 'velocity'], function ($, v) {

	var startBubbleAnimation = function() {
        var pageWidth = $(window).width() > 850 ? $(window).width() : 2000;
        var halfPageWidth = pageWidth / 2;
        var pageHeight = $(window).height() || 800;
        var halfPageHeight = pageHeight / 2;
        var range = 100;
        
        var animate = function animate($this, options) {
            var x0 = options.x;
            var y0 = options.y;
            var distance;
            var opacity;
            var treacle;

            if(y0 == 0) {
                y1 = pageHeight;
                distance = 0;
                opacity = [0.2, 1];
            } else {
                y1 = 0;
                distance = Math.sqrt((y1 - y0) * (y1 - y0));
                opacity = [1, 0.2];
            }

            x1 = x0;

            if($this.hasClass('tiny')) {
                treacle = 50;
            } else if ($this.hasClass('small')) {
                treacle = 20;
            } else if ($this.hasClass('large')) {
                treacle = 10;
            }

            $this.velocity({
                translateY: [ y1, y0 ],
                translateX: [ x1, x0 ],
                opacity: opacity
            }, {
                duration: treacle * distance,
                complete: function() {
                  setTimeout( function() {
                    options.y = y1;
                    options.y = y1;
                    animate($this, options);
                  }, 500);
                }
            });
        }

        $(".background-bubbles .bubble").each(function() {
            options = {};
            options.x = (Math.random() * pageWidth);
            options.y = (Math.random() * pageHeight);

            var $this = $(this);

            animate($this, options);
        });
    }
    startBubbleAnimation();
});