/**
 * Grunt configuration
 */
'use strict';

var pkg = require('../package');

module.exports = {

	// A banner for distributed files (name, version, license, date)
	banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - MIT License - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */',

	destDir: 'dist/',

	requirejs: '../components/requirejs/require',

	// All files that should be checked with JSHint
	jsHintFiles: [
		'Gruntfile.js',
		'js/**/*.js',
		'test/*.js',
		'test/specs/**/*.js'
	],

	// JavaScript files
	js: {
		files: [
			'js/**/*.js'
		],
		config: 'js/config.js',
		dest: 'dist/<%= pkg.version %>/main.min.js'
	},

	// Sass files
	sass: {
		files: [
			'scss/**/*.scss'
		],
		src: 'scss/main.scss',
		devDest: 'css/main.css',
		dest: 'dist/<%= pkg.version %>/main.min.css'
	},

	// Modernizr files
	modernizr: {
		src: 'components/modernizr/modernizr.js',
		dest: 'dist/<%= pkg.version %>/modernizr.min.js'
	},

	// Images
	img: {
		src: 'img/',
		dest: 'dist/img/'
	},

	tests: {
		src: 'test/specs/**/*spec.js',
		config: 'test/test-main.js'
	},

	// Versioned references
	replace: {
		build: {
			src: 'temp/**.html',
			dest: 'dist/',
			maincss: '<%= pkg.version %>/main.min.css',
			modernizr: '<%= pkg.version %>/modernizr.min.js',
			mainjs: '<script src="<%= pkg.version %>/main.min.js"></script>'
		},

		dev: {
			src: 'temp/**.html',
			dest: '.',
			maincss: 'css/main.css',
			modernizr: 'components/modernizr/modernizr.js',
			mainjs: '<script data-main="js/config" src="components/requirejs/require.js"></script>'
		}
	}
};
