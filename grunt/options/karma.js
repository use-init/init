/**
 * Configuration for Karma test-runner
 */
'use strict';

module.exports = {
  options: {
    configFile: 'grunt/karma.conf.js'
  },

  // Testing in all browsers
  all: {
    options: {

      // Start these browsers
      browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS']
    }
  },

  // PhantomJS
  unit: {
    options: {
      browsers: ['PhantomJS']
    }
  },

  // Travis
  travis: {
    options: {

      // Use Phantom and Firefox for Travis
      browsers: ['PhantomJS', 'Firefox']
    }
  }
};
