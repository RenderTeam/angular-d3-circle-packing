/* jslint node: true */
'use strict';

module.exports = function ( grunt ) {
  // Project configuration.
  grunt.initConfig({
    jshint  : {
      all     : [
        'Gruntfile.js',
        'angular-d3-circle-packing.js'
      ]
    },
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          'build/css/angular-d3-circle-packing.min.css': ['src/less/angular-d3-circle-packing.less']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/angular-d3-circle-packing.min.js': ['src/angular-d3-circle-packing.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
  grunt.registerTask('default', [
      'jshint',
      'less',
      'uglify'
    ]
  );
};
