/**
 * Require JS configuration
 */
'use strict';

var config = require('../config');
var devFiles = {};
var buildFiles = {};
var testFiles = {};

devFiles[config.js.dev.dest] = config.js.dev.entry;
buildFiles[config.js.build.dest] = config.js.dev.entry;
testFiles[config.js.test.dest] = config.js.test.entry;

module.exports = {
  options: {
    transform: ['babelify']
  },

  dev: {
    files: devFiles
  },

  build: {
    files: buildFiles
  },

  test: {
    files: testFiles
  }
};
