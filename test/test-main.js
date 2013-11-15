// jshint camelcase: false
(function () {
	'use strict';

	// Make async
	window.__karma__.loaded = function () {};

	require.config({

		// Set baseUrl for Karma
		baseUrl: 'base/js',

		deps: ['config'],

		// Location of tests
		paths: {

			// Location of tests
			spec: '../test/spec',
			specs: '../test/specs'
		}
	});

	require(['spec'], function (spec) {

		// Load all specs
		require(spec.specs, function () {

			// Start Karma
			window.__karma__.start();
		});
	});
}());
