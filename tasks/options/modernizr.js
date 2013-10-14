/**
 * Build Modernizr
 */
'use strict';

var config = require('../config');

module.exports = {
	devFile: config.modernizr.src,
	outputFile: config.modernizr.dest,

	extra: {
		shiv: true,
		mq: true
	},

	// Minify
	uglify: true,

	// Files
	files: config.js.files.concat(config.sass.files)
};
