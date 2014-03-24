/**
 * Server config
 */
'use strict';

module.exports = {
	test: {
		port: 8000
	},

	develop: {
		options: {
			port: 9001,
			keepalive: true
		}
	},

	prod: {
		options: {
			port: 8080,
			keepalive: true,
			base: 'dist'
		}
	}
};
