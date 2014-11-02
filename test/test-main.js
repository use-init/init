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
    baseUrl: 'http://localhost:9876/base/src/js',

    deps: [
      '../../bower_components/modernizr/modernizr',
      'config'
    ]
  });

  // Load the example spec
  require([
    '../../test/specs/example.spec'
    // @TODO: Add your own specifications here
  ], window.__karma__.start);
}());
