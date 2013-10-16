/**
 * File versioning in build process
 */
'use strict';

var config = require('../config');

module.exports = {
	deploy: {
		options: {
			patterns: [{
				match: 'maincss',
				replacement: config.replace.deploy.maincss
			}, {
				match: 'modernizr',
				replacement: config.replace.deploy.modernizr
			}, {
				match: 'mainjs',
				replacement: config.replace.deploy.mainjs
			}]
		},

		files: [{
			src: config.replace.deploy.src,
			dest: config.replace.deploy.dest,
		}]
	},

	dev: {
		options: {
			patterns: [{
				match: 'maincss',
				replacement: config.replace.dev.maincss
			}, {
				match: 'modernizr',
				replacement: config.replace.dev.modernizr
			}, {
				match: 'mainjs',
				replacement: config.replace.dev.mainjs
			}]
		},

		files: [{
			src: config.replace.dev.src,
			dest: config.replace.dev.dest
		}]
	}
};
