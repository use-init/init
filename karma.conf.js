/**
 * Default configuration for Karma
 */
'use strict';

module.exports = function(config) {
	config.set({
		singleRun: true,
		colors: true,
		captureTimeout: 7000,

		frameworks: ['jasmine', 'requirejs'],
		reporters: ['progress', 'coverage'],

		preprocessors: {
			'js/**/*.js': 'coverage',
		},

		coverageReporter: {
			type: 'text-summary',
			dir: 'test/coverage/'
		},

		logLevel: 'INFO',

		// List of files to load in the browser
		files: [
			{ pattern: 'components/**/*.js', included: false },
			{ pattern: 'js/**/*.js', included: false },
			{ pattern: 'test/specs/**/*spec.js', included: false },
			'test/test-main.js'
		]
	});
};
