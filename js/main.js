require.config({
    paths: {
        'jQuery': 'vendor/jquery-1.10.0',
        'underscore': 'vendor/underscore-1.6.0',
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});

//will be globally required on every page
require(['app'], function(App){});