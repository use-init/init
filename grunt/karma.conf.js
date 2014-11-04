/**
 * Default configuration for Karma
 */
'use strict';

// Get configuration of project to get correct files to include
var projectConfig = require('./config');

/**
 * Get all files to include in Karma tests
 * @return {Array} Array of all files to include
 */
var getIncludeFiles = function () {
  var files = [{
    pattern: 'bower_components/**/*.js',
    included: false
  }];

  projectConfig.js.files.forEach(function (element) {
    files.push({
      pattern: element,
      included: false
    });
  });

  files.push({
    pattern: projectConfig.tests.src,
    included: false
  });

  files.push(projectConfig.tests.config);

  return files;
};

/**
 * Exports as Karma configuration
 */
module.exports = function (config) {
  config.set({
    basePath: '../',

    singleRun: true,
    colors: true,
    captureTimeout: 7000,

    frameworks: ['jasmine', 'requirejs'],
    reporters: ['progress', 'coverage'],

    preprocessors: (function () {
      var preprocessors = {};

      projectConfig.js.files.forEach(function (element) {
        preprocessors[element] = 'coverage';
      });

      return preprocessors;
    }()),

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
        dir: projectConfig.tests.coverage
      }, {
        type: 'html',
        dir: projectConfig.tests.coverage
      }]
    },

    logLevel: config.LOG_INFO,

    // List of files to load in the browser
    files: getIncludeFiles()
  });
};

