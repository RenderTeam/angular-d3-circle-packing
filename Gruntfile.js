/* jslint node: true */
'use strict';

module.exports = function ( grunt ) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
         files: [
          {
            expand: true,
            cwd: 'src/templates/',
            src: ['**/*.jade'],
            dest: 'build/templates/',
            ext: '.html',
            extDot: 'first'
          },
        ],
      }
    },
    jshint  : {
      all     : [
        'Gruntfile.js',
        'angular-d3-hierarchy-pack.js'
      ]
    },
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {}
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/angular-d3-hierarchy-pack.min.js': ['src/angular-d3-hierarchy-pack.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
  grunt.registerTask('default', [
      'jshint',
      'jade',
      'less',
      'uglify'
    ]
  );
};
