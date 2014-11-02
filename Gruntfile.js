/**
 * General Grunt setup
 */
'use strict';

var xtend = require('xtend');
var loadGruntConfig = require('./grunt/load-grunt-config');

/*
 * Call Grunt configuration
 */
module.exports = function (grunt) {

  // Measure time of grunt tasks
  require('time-grunt')(grunt);

  /**
   * Configuration: All data from package.json, grunt/options and
   * grunt/plugins
   */
  var config = xtend({
      pkg: require('./package')
    },
    loadGruntConfig('grunt/options'),
    loadGruntConfig('grunt/plugins')
  );

  // Load project configuration
  grunt.initConfig(config);

  // Load all npm tasks through jit-grunt (all tasks from node_modules)
  require('jit-grunt')(grunt);

  // Load your own tasks
  grunt.task.loadTasks('./grunt/tasks');

  /**
   * A task to generate pages
   */
  // Tasks for generating static pages
  grunt.registerTask('pages:dev', [
    'concat',
    'replace:dev',
    'clean:temp'
  ]);

  grunt.registerTask('pages:build', [
    'concat',
    'replace:build',
    'clean:temp'
  ]);

  /**
   * A task for development
   */
  grunt.registerTask('serve', ['connect:serve', 'watch']);

  grunt.registerTask('dev', [
    'jshint',
    'sass:dev',
    'copy',
    'requirejs',
    'pages:dev'
  ]);

  // Default task
  grunt.registerTask('default', ['dev']);

  /**
   * A task for building your pages
   */
  grunt.registerTask('build', [
    'jshint',
    'modernizr',
    'sass:build',
    'imagemin',
    'copy',
    'requirejs',
    'karma:unit',
    'pages:build'
  ]);

  /**
   * Testing
   */
  // A task for testing development code
  grunt.registerTask('test', [
    'karma:unit'
  ]);

  grunt.registerTask('test:all', [
    'karma:all'
  ]);

  // A task for testing production code
  grunt.registerTask('test:build', [
    'requirejs:compile',
    'requirejs:prod',
    'karma:prod'
  ]);

  /**
   * Travis CI task
   */
  grunt.registerTask('travis', [
    'jshint',
    'karma:travis'
  ]);

};
