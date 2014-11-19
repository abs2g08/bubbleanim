module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {                   
        options: {
          sassDir: 'sass',
          cssDir: 'css',
        }
      }
    },
    requirejs: {
      app: {
        options: {
          findNestedDependencies: true,
          mainConfigFile: 'js/main.js',
          baseUrl : 'js',
          name : 'main',
          out : 'dist/js/app.min.js',
          include:  ['vendor/modernizr-2.6.2.min.js'],
          // optimize : 'uglify',
          optimize: 'none'
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['robots.txt', 'crossdomain.xml', '404.html', 'css/style.css', 'js/app.min.js', 'js/vendor/require.js'], dest: 'dist/'},
        ],
      },
    },
    preprocess : {
      options: {
        context : {
          prod: true
        }
      },
      dist : {
        src : 'index.html',
        dest : 'dist/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['compass', 'requirejs', 'copy', 'preprocess']);

};
