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
  var files = [];

  // Add JavaScript libs
  var filePatterns = projectConfig.js.libs;

  // Add tests
  filePatterns.push(projectConfig.js.test.dest);

  // Iterate through files
  filePatterns.forEach(function (element) {
    files.push({
      pattern: element,
      included: true
    });
  });

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

    frameworks: ['jasmine'],
    reporters: ['progress'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-phantomjs-launcher'
    ],

    logLevel: config.LOG_INFO,

    // List of files to load in the browser
    files: getIncludeFiles()
  });
};

