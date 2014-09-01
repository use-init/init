/**
 * Copy task
 */
'use strict';

var config = require('../config');

module.exports = {
  build: {
    files: [{
      src: config.js.files,
      dest: config.destDir
    }]
  }
};
