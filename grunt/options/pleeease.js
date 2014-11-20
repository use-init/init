/**
 * CSS
 */
'use strict';

var config = require('../config');

/*
 * Helper
 */
var helper = {};

helper.cssDev = {};
helper.cssDev[config.css.devDest] = config.css.src;

helper.cssProd = {};
helper.cssProd[config.css.dest] = config.css.src;

module.exports = {

  // For development
  dev: {
    options: {
      minifier: false,
      next: {
        customProperties: true,
        colors: true
      },
      sourcemaps: true
    },

    files: helper.cssDev
  },

  // For production
  build: {
    options: {
      next: {
        customProperties: true,
        colors: true
      },
      sourcemaps: true
    },

    files: helper.cssProd
  }
};
