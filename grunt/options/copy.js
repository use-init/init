/**
 * Copy task
 */
'use strict';

var config = require('../config');

module.exports = {
  js: {
    files: [{
      src: config.js.files,
      dest: config.destDir
    }]
  },
  root: {
    files: [{
      expand: true,
      cwd: config.srcDir,
      src: [
        '*.{png,xml,ico,svg,txt}',
      ],
      dest: config.destDir
    }]
  }
};
