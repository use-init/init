/**
 * Configuration for Karma test-runner
 */
'use strict';

module.exports = {
  options: {
    configFile: 'grunt/karma.conf.js'
  },

  // Testing in all browsers
  test: {
    options: {

      // Start these browsers
      browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS']
    }
  },

  // Travis
  unit: {
    options: {

      // Use Phantom and Firefox for Travis
      browsers: ['PhantomJS', 'Firefox']
    }
  },

  // Production-ready JS
  prod: {
    options: {

      // Use Phantom for Jenkins
      browsers: ['PhantomJS'],

      reporters: ['progress'],

      files: [
        'dist/<%= pkg.version %>/main.min.js',
        'test/dist/tests.min.js',
        'test/test-main.js'
      ]
    }
  }
};
