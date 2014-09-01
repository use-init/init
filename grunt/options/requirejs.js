/**
 * Require JS configuration
 */
'use strict';

var config = require('../config');

module.exports = {
  compile: {
    options: {
      mainConfigFile: config.js.config,
      include: [config.requirejs],
      out: config.js.dest,

      // Wrap in IIFE
      wrap: true,

      // Source Maps
      generateSourceMaps: true,

      // Do not preserve license comments when working with source maps, incompatible.
      preserveLicenseComments: false,

      optimize: 'uglify2'
    }
  },

  prod: {
    options: {
      baseUrl: './src/js',
      include: [config.requirejs],
      mainConfigFile: config.tests.config,
      out: 'test/dist/tests.min.js'
    }
  }
};
