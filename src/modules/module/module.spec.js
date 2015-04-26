/**
 * An example specification for the example module
 * Loads the module and runs the test suite
 * Module path is relative to the current path
 */
import $ from '../../../node_modules/jquery/dist/jquery.js';
import Module from './module.js';

export default function () {
  'use strict';

  var module = new Module();

  // Test suite INIT
  describe('INIT', function () {

    it('is available', function () {
      expect(module).not.toBe(null);
    });

    it('has getter for event name', function () {
      expect(module.getEventName()).toBe('_test');
    });

    it('fires event on init', function () {
      var eventCalled;

      $(document).on(module.getEventName(), function () {
        eventCalled = true;
      });

      module.init();

      expect(eventCalled).toBeTruthy();
    });
  });
}
