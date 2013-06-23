/**
 * RequireJS configuration
 */
require.config({

	// Initialize the application with the main application file and the
	// console-stub from HTML5 Boilerplate
	deps: ['plugins/console', 'jquery', 'main'],

	paths: {
		'jquery': '../components/jquery/jquery.min'
		// More additional paths here
	},

	shim: {
		// If you need to shim anything
	}

});
