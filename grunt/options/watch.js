/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
  css: {
    files: config.css.files,
    tasks: 'pleeease:dev',
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
    files: config.css.files
  }
};
