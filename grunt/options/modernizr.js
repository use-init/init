/**
 * Build Modernizr
 */
'use strict';

var config = require('../config');

module.exports = {
  build: {
    devFile: config.modernizr.src,
    outputFile: config.modernizr.dest,

    extra: {
      shiv: true,
      mq: true
    },

    // Minify
    uglify: true,

    // Files from configuration
    files: {
      src: config.js.files.concat(config.sass.files)
    }
  }
};
