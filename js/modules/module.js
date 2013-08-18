/**
 * An example module
 *
 * @author Hans Christian Reinl
 * @date 18.08.2013
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
