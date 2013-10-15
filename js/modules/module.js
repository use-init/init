/**
 * An example module
 *
 * @author Author name
 * @date 2013-08-18
 */

define([
	// Dependencies of the module
	'jquery'
], function ($) {

	// Strict mode to prevent sloppy JS
	'use strict';

	// Private variables
	var _eventName = '_test';

	// Public API
	return {

		// Getter for private variable
		getEventName: function () {
			return _eventName;
		},

		// File an event on initialisation
		init: function () {
			$(document).trigger(_eventName);
		}
	};

});
