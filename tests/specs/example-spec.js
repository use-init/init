define(['/../../js/modules/module.js'], function (module) {
	'use strict';

	describe('init', function () {

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
