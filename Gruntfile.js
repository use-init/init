/**
 * General Grunt setup
 */
'use strict';

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

	var config = {
		pkg: require('./package')
	};

	grunt.util._.extend(config, loadConfig('./tasks/options/'));

	// Load project configuration
	grunt.initConfig(config);

	// Load all npm tasks through node-matchdep (fetches all tasks from package.json)
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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

	// A task for development
	grunt.registerTask('dev', [
		'jshint',
		'sass:dev',
		'copy',
		'requirejs',
		'pages:dev'
	]);

	// A task for deployment
	grunt.registerTask('build', [
		'jshint',
		'modernizr',
		'sass:build',
		'imagemin',
		'copy',
		'requirejs',
		'connect:test',
		'karma:unit',
		'pages:build'
	]);

	// A task for testing production code
	grunt.registerTask('test', [
		'requirejs:compile',
		'requirejs:prod',
		'connect:test',
		'karma:prod'
	]);

	// Default task
	grunt.registerTask('default', ['dev']);

	// Travis CI task
	grunt.registerTask('travis', [
		'jshint',
		'connect:test',
		'karma:unit'
	]);

};
