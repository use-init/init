// jshint camelcase: false

// Include your specs here
import ModuleSpec from '../src/modules/module/module.spec.js';

(function () {
  'use strict';

  // Make async
  window.__karma__.loaded = function () {};

  // Set the flag for test environment
  window.__test = true;

  // Execute new specs here
  new ModuleSpec();

  window.__karma__.start();
}());
