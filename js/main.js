require.config({
    paths: {
        'jQuery': 'vendor/jquery-1.10.2.min',
        'underscore': 'vendor/underscore-1.6.0',
        'velocity': 'vendor/jquery.velocity.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'velocity' : ["jQuery"]
    }
});

//will be globally required on every page
require(['app'], function(App){});