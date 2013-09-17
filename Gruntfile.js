/**
 * Grunt configuration
 */
var config = {

	// A banner for distributed files (name, version, license, date)
	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - MIT License - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */',

	destDir: 'dist/',

	requirejs: '../components/requirejs/require',

	// All files that should be checked with JSHint
	jsHintFiles: [
		'Gruntfile.js',
		'js/**/*.js'
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
		src: 'tests/*.js'
	}
};

/*
 * Call Grunt configuration
 */
module.exports = function (grunt) {

	'use strict';

	/*
	 * Helper
	 */
	var helper = {};

	helper.sassDev = {};
	helper.sassDev[config.sass.devDest] = config.sass.src;
	helper.sassProd = {};
	helper.sassProd[config.sass.dest] = config.sass.src;

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),
		meta: {
			banner: config.banner
		},

		jshint: {
			all: config.jsHintFiles,
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Build modernizr
		modernizr: {
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
		},

		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: helper.sassDev
			},
			deploy: {
				options: {
					style: 'compressed',
					banner: config.banner
				},
				files: helper.sassProd

			}
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: config.js.config,
					include: [config.requirejs],
					out: config.js.dest
				}
			}
		},

		copy: {
			deploy: {
				files: [{
					src: config.js.files,
					dest: config.destDir
				}]
			}
		},

		// Lossless image optimization
		imagemin: {
			images: {
				options: {
					optimizationLevel: 5
				},
				files: [{
					expand: true,
					cwd: config.img.src,
					src: ['**/*.{png,jpg,gif}'],
					dest: config.img.dest
				}]
			}
		},

		// Server config
		connect: {
			test: {
				port: 8000
			},

			server: {
				options: {
					port: 9001,
					keepalive: true
				}
			}
		},

		// Jasmine test configuration
		jasmine: {
			src: config.js.files,
			options: {
				host: 'http://127.0.0.1:8000/',
				specs: config.tests.src,
				template: require('grunt-template-jasmine-requirejs'),
				templateOptions: {
					requireConfigFile: config.js.config
				}
			}
		},

		watch: {
			scss: {
				files: config.sass.files,
				tasks: 'sass:dev'
			},

			js: {
				files: config.jsHintFiles,
				tasks: ['jshint', 'jasmine']
			}
		},

		// Setup concurrent tasks
		concurrent: {
			deploy1: ['jshint', 'modernizr', 'sass:deploy', 'imagemin', 'copy'],
			deploy2: ['requirejs', 'connect:test', 'jasmine'],
			dev1: ['jshint', 'connect:test', 'jasmine', 'sass:dev', 'copy'],
			dev2: ['requirejs']
		}
	});

	// Load all npm tasks through node-matchdep (fetches all tasks from package.json)
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// A task for development
	grunt.registerTask('dev', ['concurrent:dev1', 'concurrent:dev2']);

	// A task for deployment
	grunt.registerTask('deploy', ['concurrent:deploy1', 'concurrent:deploy2']);

	// Default task
	grunt.registerTask('default', ['dev']);

	// Travis CI task
	grunt.registerTask('travis', ['jshint', 'connect:test', 'jasmine']);

};
