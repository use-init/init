/**
 * An example specification for the example module
 * Loads the module and runs the test suite
 */
define(['modules/module'], function (module) {
	'use strict';

	// Test suit INIT
	describe('INIT', function () {


		it('is available', function () {
			expect(module).not.toBe(null);
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
});
