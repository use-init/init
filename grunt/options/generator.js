/**
 * Static Site Generator
 */
'use strict';

var config = require('../config');

module.exports = {
  dev: {
    files: [{
      cwd: config.generator.files.cwd,
      src: config.generator.files.src,
      dest: config.generator.files.dest,
      ext: config.generator.files.ext
    }],
    options: {
      partialsglob: config.generator.options.partialsglob,
      templates: config.generator.options.templates,
      environment: config.generator.options.environment
    }
  },
};
