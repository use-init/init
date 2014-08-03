/**
 * General Grunt setup
 */
'use strict';

var xtend = require('xtend');

/**
 * Load configuration files for Grunt
 * @param  {string} path Path to folder with tasks
 * @return {object}      All options
 */
var loadConfig = function (path) {
	var glob = require('glob');
	var object = {};
	var key;

	glob.sync('*', { cwd: path }).forEach(function (option) {
		key = option.replace(/\.js$/,'');
		object[key] = require(path + option);
	});

	return object;
};

/*
 * Call Grunt configuration
 */
module.exports = function (grunt) {

	// Measure time of grunt tasks
	require('time-grunt')(grunt);

	var config = xtend({
		pkg: require('./package')
	}, loadConfig('./grunt/options/'), loadConfig('./grunt/plugins/'));

	// Load project configuration
	grunt.initConfig(config);

	// Load all npm tasks
	require('load-grunt-tasks')(grunt);

	// Load your own tasks
	grunt.task.loadTasks('./grunt/tasks');

	/**
	 * A task to generate pages
	 */
	// Tasks for generating static pages
	grunt.registerTask('pages:dev', [
		'concat',
		'replace:dev',
		'clean:temp'
	]);

	grunt.registerTask('pages:build', [
		'concat',
		'replace:build',
		'clean:temp'
	]);

	/**
	 * A task for development
	 */
	grunt.registerTask('dev', [
		'jshint',
		'sass:dev',
		'copy',
		'requirejs',
		'pages:dev'
	]);

	// Default task
	grunt.registerTask('default', ['dev']);

	/**
	 * A task for building your pages
	 */
	grunt.registerTask('build', [
		'jshint',
		'modernizr',
		'sass:build',
		'imagemin',
		'copy',
		'requirejs',
		'karma:unit',
		'pages:build'
	]);

	/**
	 * Testing
	 */
	// A task for testing development code
	grunt.registerTask('test', [
		'karma:unit'
	]);

	// A task for testing production code
	grunt.registerTask('test:build', [
		'requirejs:compile',
		'requirejs:prod',
		'karma:prod'
	]);

	/**
	 * Travis CI task
	 */
	grunt.registerTask('travis', [
		'jshint',
		'karma:unit'
	]);

};
