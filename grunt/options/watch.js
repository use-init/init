/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
  scss: {
    files: config.sass.files,
    tasks: 'sass:dev',
    atBegin: true
  },

  js: {
    files: [config.jsHintFiles, config.tests.src],
    tasks: ['jshint', 'karma:unit']
  },

  livereload: {
    options: {
      livereload: true
    },
    files: ['src/css/**/*']
  }
};
