/**
 * Default configuration for Karma
 */
'use strict';

module.exports = function (config) {
  config.set({
    basePath: '../',

    singleRun: true,
    colors: true,
    captureTimeout: 7000,

    frameworks: ['jasmine', 'requirejs'],
    reporters: ['progress', 'coverage'],

    preprocessors: {
      'src/**/*.js': 'coverage',
    },

    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-phantomjs-launcher'
    ],

    coverageReporter: {
      reporters: [{
        type: 'text-summary',
        dir: 'test/coverage/'
      }, {
        type: 'html',
        dir: 'test/coverage/'
      }]
    },

    logLevel: config.LOG_INFO,

    // List of files to load in the browser
    files: [{
      pattern: 'bower_components/**/*.js',
      included: false
    }, {
      pattern: 'src/**/*.js',
      included: false
    }, {
      pattern: 'test/specs/**/*spec.js',
      included: false
    }, 'test/test-main.js']
  });
};

