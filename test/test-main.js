// jshint camelcase: false
(function () {
  'use strict';

  // Make async
  window.__karma__.loaded = function () {};

  // Set the flag for test environment
  window.__test = true;

  // RequireJS Configuration
  require.config({

    // Set baseUrl for Karma
    baseUrl: 'http://localhost:9876/base/src/js/',

    deps: [
      '../../node_modules/grunt-modernizr/lib/modernizr-dev',
      'config'
    ]
  });

  // Load the example spec
  require([
    '../modules/module/module.spec'
    // @TODO: Add your own specifications here
  ], window.__karma__.start);
}());
