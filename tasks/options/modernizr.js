/**
 * Build Modernizr
 */
'use strict';

var config = require('../config');

module.exports = {
	build: {
		devFile: config.modernizr.src,
		outputFile: config.modernizr.dest,

		extra: {
			shiv: true,
			mq: true
		},

		// Minify
		uglify: true,

		// Files
		files: {
			src: config.js.files.concat(config.sass.files)
		}
	}
};
