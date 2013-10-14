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

	glob.sync('*', {cwd: path}).forEach(function (option) {
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

	// A task for development
	grunt.registerTask('dev', ['concurrent:dev1', 'concurrent:dev2']);

	// A task for deployment
	grunt.registerTask('deploy', ['concurrent:deploy1', 'concurrent:deploy2']);

	// Default task
	grunt.registerTask('default', ['dev']);

	// Travis CI task
	grunt.registerTask('travis', ['jshint', 'connect:test', 'karma:unit']);

};
