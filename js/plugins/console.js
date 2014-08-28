// Enhance console.log / console.warn output in browsers and avoid errors
// in browsers that lack a console.
(function() {
	'use strict';

	// Avoid `console` errors in browsers that lack a console.
	var method;
	var methodsToEnhance = ['log', 'warn'];
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	var methodFunction = function (old) {
		return function () {
			var args;
			var stack = (new Error()).stack.split(/\n/);

			// Chrome includes a single "Error" line, FF doesn't.
			if (stack[0].indexOf('Error') === 0) {
				stack = stack.slice(1);
			}

			args = [].slice.apply(arguments).concat([stack[1].trim()]);

			return old.apply(console, args);
		};
	};

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}

		if (Array.prototype.indexOf && methodsToEnhance.indexOf(method) > -1) {
			console[method] = methodFunction(console[method]);
		}
	}
}());
