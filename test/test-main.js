// jshint camelcase: false
(function () {
	'use strict';

	// Make async
	window.__karma__.loaded = function () {};

	require.config({

		// Set baseUrl for Karma
		baseUrl: 'base/js',

		deps: ['config']
	});

	// Load the example spec, add your own specifications here
	require([
		'../test/specs/example.spec'
	], window.__karma__.start);
}());
