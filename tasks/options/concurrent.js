/**
 * Setup concurrent tasks
 */
'use strict';

module.exports = {
	build1: ['jshint', 'modernizr', 'sass:build', 'imagemin', 'copy'],
	build2: ['requirejs'],
	dev1: ['jshint', 'sass:dev', 'copy'],
	dev2: ['requirejs']
};
