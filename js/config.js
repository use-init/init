/**
 * RequireJS configuration
 */
require.config({

	baseUrl: 'js',

	// Initialize the application with the main application file
	deps: ['plugins/console', 'main'],

	paths: {
		'jquery': '../components/jquery/jquery.min'
		// More additional paths here
	},

	shim: {
		// If you need to shim anything, put it here
	}

});
