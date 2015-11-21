/**
 * Configure JSCS task
 */
'use strict';

var config = require('../config');

module.exports = {
  js: {
    src: config.js.hintFiles,
    options: {
      config: '.jscsrc'
    }
  }
};
