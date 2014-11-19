module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                            
      dist: {                       
        options: {
          style: 'expanded'
        },
        files: {
          'dist/style.css': 'scss/style.scss',
        }
      }
    },
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
        }
      }
    },

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['js/**/*.js'],
        // the location of the resulting JS file
        dest: 'js/app.min.js'
      }
    },

    requirejs: {
      app: {
        options: {
          findNestedDependencies: true,
          mainConfigFile: 'js/main.js',
          baseUrl : 'js',
          name : 'app',
          out : 'app.min.js',
          optimize : 'uglify',
        }
      }
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/app.min.js': ['js/app.min.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['robots.txt', 'crossdomain.xml', '404.html', 'css/style.css', 'js/app.min.js'], dest: 'dist/'},
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-preprocess');

  grunt.registerTask('default', ['compass', 'concat', 'copy', 'preprocess']);

};
