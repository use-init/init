/**
 * RequireJS configuration
 */
require.config({

  // Initialize the application with the main application file
  deps: ['plugins/console', 'plugins/tracking', 'main'],

  paths: {
    jquery: '../../node_modules/jquery/dist/jquery.min'
    // More additional paths here
  },

  shim: {
    // If you need to shim anything, put it here
  },

  // Prevent caching issues, by adding an additional URL argument
  urlArgs: 'bust=' + (new Date()).getDate()

});
