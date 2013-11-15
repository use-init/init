/**
 * Default configuration for Karma
 */
'use strict';

module.exports = function(config) {
	config.set({
		singleRun: true,
		colors: true,
		captureTimeout: 7000,

		frameworks: ['jasmine'],

		// List of files to load in the browser
		files: [
			'components/requirejs/require.js',
			'test/test-main.js'
		]
	});
};
