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
          'dist/main.css': 'scss/*.scss',
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
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['main.min.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['robots.txt', 'crossdomain.xml', '404.html'], dest: 'dest/'},
        ],
      },
    },
    preprocess : {
      options: {
        context : {
          DEBUG: false
        }
      },
      dist : {
        src : 'index.html',
        dest : 'dist/index.html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-preprocess');

  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'copy', 'preprocess']);

};
