/**
 * File versioning in build process
 */
'use strict';

var config = require('../config');

module.exports = {
  build: {
    options: {
      patterns: [{
        match: 'maincss',
        replacement: config.replace.build.maincss
      }, {
        match: 'modernizr',
        replacement: config.replace.build.modernizr
      }, {
        match: 'mainjs',
        replacement: config.replace.build.mainjs
      }]
    },

    files: [{
      expand: true,
      flatten: true,
      src: config.replace.build.src,
      dest: config.replace.build.dest,
    }]
  },

  dev: {
    options: {
      patterns: [{
        match: 'maincss',
        replacement: config.replace.dev.maincss
      }, {
        match: 'modernizr',
        replacement: config.replace.dev.modernizr
      }, {
        match: 'mainjs',
        replacement: config.replace.dev.mainjs
      }]
    },

    files: [{
      expand: true,
      flatten: true,
      src: config.replace.dev.src,
      dest: config.replace.dev.dest
    }]
  }
};
