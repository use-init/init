/**
 * RequireJS configuration
 */
require.config({

	// Initialize the application with the main application file and the
	// console-stub from HTML5 Boilerplate
	deps: ['plugins/console', 'jquery', 'main'],

	paths: {
		'jquery': 'vendor/jquery-1.10.1.min'
		// More additional paths here
	},

	shim: {
		// If you need to shim anything
	}

});
