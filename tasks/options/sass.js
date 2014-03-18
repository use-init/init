/**
 * Sass
 */
'use strict';

var config = require('../config');

/*
 * Helper
 */
var helper = {};

helper.sassDev = {};
helper.sassDev[config.sass.devDest] = config.sass.src;
helper.sassProd = {};
helper.sassProd[config.sass.dest] = config.sass.src;

module.exports = {
	dev: {
		options: {
			unixNewlines: true,
			outputStyle: 'expanded'
		},
		files: helper.sassDev
	},

	build: {
		options: {
			outputStyle: 'compressed',
			banner: config.banner
		},
		files: helper.sassProd
	}
};
