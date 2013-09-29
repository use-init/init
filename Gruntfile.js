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
		src: 'tests/**/*spec.js'
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
					out: config.js.dest,

					// Wrap in IIFE
					wrap: true,

					// Source Maps
					generateSourceMaps: true,

					// Do not preserve license comments when working with source maps, incompatible.
					preserveLicenseComments: false,

					optimize: 'uglify2'
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

		// Configuration for Karma test-runner
		karma: {
			options: {
				configFile: 'karma.conf.js',

				proxies: {
					'/base': 'http://localhost:<%= connect.test.port %>'
				}
			},

			test: {
				options: {

					// Start these browsers
					browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],

					plugins: [
						'karma-jasmine',
						'karma-chrome-launcher',
						'karma-firefox-launcher',
						'karma-safari-launcher',
						'karma-phantomjs-launcher'
					]
				}
			},

			unit: {
				options: {

					// Use Phantom and Firefox for Travis
					browsers: ['PhantomJS', 'Firefox']
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
				tasks: ['jshint', 'connect:test', 'karma:unit']
			},

			karma: {
				files: [config.jsHintFiles, config.tests.src],
				tasks: ['connect:test', 'karma:unit']
			}
		},

		// Setup concurrent tasks
		concurrent: {
			deploy1: ['jshint', 'modernizr', 'sass:deploy', 'imagemin', 'copy'],
			deploy2: ['requirejs', 'connect:test', 'karma:unit'],
			dev1: ['jshint', 'connect:test', 'karma:test', 'sass:dev', 'copy'],
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
	grunt.registerTask('travis', ['jshint', 'connect:test', 'karma:unit']);

};
