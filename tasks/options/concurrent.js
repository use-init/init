/**
 * Setup concurrent tasks
 */
'use strict';

module.exports = {
	deploy1: ['jshint', 'modernizr', 'sass:deploy', 'imagemin', 'copy'],
	deploy2: ['requirejs', 'connect:test', 'karma:unit'],
	dev1: ['jshint', 'sass:dev', 'copy'],
	dev2: ['requirejs']
};
