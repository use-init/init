/**
 * Server config
 */
'use strict';

module.exports = {
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
