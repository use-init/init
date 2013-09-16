(function () {
	'use strict';

	// Make async
	if (window.__karma__) {
		window.__karma__.loaded = function() {};
	}

	require.config({
		// Determine the baseUrl if we are in Karma or not
		baseUrl: 'base/js',

		// Location of tests
		paths: {

			// Testing libraries
			jasmine: '../components/jasmine/lib/jasmine-core/jasmine',
			'jasmine-html': '../components/jasmine/lib/jasmine-core/jasmine-html',

			// Location of tests
			spec: '../tests/spec',
			specs: '../test/jasmine/specs',
		},

		shim: {
			"jasmine": { exports: "jasmine" },
			"jasmine-html": ["jasmine"]
		},
	});

	require([
		'config',
		'jasmine',
		'jasmine-html'
	], function (config, jasmine) {
		require(['specs'], function (specs) {

			// Load all specs
			require(specs.specs, function () {

				// This will start Karma if it exists
				if (window.__karma__) {
					window.__karma__.start();

				// Set up the jasmine reporters once each spec has been loaded.
				} else {
					jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
					jasmine.getEnv().execute();
				}
			});
		});
	});
}());
