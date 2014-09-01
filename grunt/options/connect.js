/**
 * Server config
 */
'use strict';

module.exports = {
  server: {
    options: {
      port: 9001,
      keepalive: true
    }
  },

  prod: {
    options: {
      port: 8080,
      keepalive: true,
      base: 'dist'
    }
  },

  serve: {
    options: {
      port: 10001,
      open: {
        target: 'http://localhost:10001/src/'
      },
      livereload: true
    }
  }
};
