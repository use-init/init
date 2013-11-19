/**
 * Configuration for Karma test-runner
 */
'use strict';

module.exports = {
	options: {
		configFile: 'karma.conf.js',

		proxies: {
			'/base': 'http://localhost:<%= connect.test.port %>'
		}
	},

	// Testing in all browsers
	test: {
		options: {

			// Start these browsers
			browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],

			plugins: [
				'karma-jasmine',
				'karma-requirejs',
				'karma-coverage',
				'karma-chrome-launcher',
				'karma-firefox-launcher',
				'karma-safari-launcher',
				'karma-phantomjs-launcher'
			]
		}
	},

	// Travis
	unit: {
		options: {

			// Use Phantom and Firefox for Travis
			browsers: ['PhantomJS', 'Firefox'],
			reporters: ['progress']
		}
	},

	// Production ready JS
	prod: {
		options: {

			// Use Phantom for Jenkins
			browsers: ['PhantomJS'],

			frameworks: ['jasmine'],
			reporters: ['progress'],

			files: [
				'dist/<%= pkg.version %>/main.min.js',
				'test/dist/tests.min.js',
				'test/test-main.js'
			]
		}
	}
};
