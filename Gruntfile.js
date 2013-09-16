module.exports = function (grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		jshint: {
			all: [
				'Gruntfile.js',
				'js/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Build modernizr
		modernizr: {
			devFile: 'components/modernizr/modernizr.js',
			outputFile : 'dist/js/vendor/modernizr-for-<%= pkg.version %>.min.js',

			extra: {
				shiv: true,
				mq: true
			},

			// Minify
			uglify: true,

			// Files
			files: ['js/**/*.js', 'scss/**/*.scss']
		},

		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: {
					'css/main.css': 'scss/main.scss'
				}
			},
			deploy: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/css/main-<%= pkg.version %>.min.css': 'scss/main.scss'
				}

			}
		},

		clean: {
			deploy: ['dist']
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: 'js/config.js',
					include: ['../components/requirejs/require'],
					out: 'dist/js/main-<%= pkg.version %>.min.js'
				}
			}
		},

		copy: {
			deploy: {
				files: [{
					src: ['js/**'],
					dest: 'dist/'
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
			src: 'js/**/*.js',
			options: {
				host: 'http://127.0.0.1:8000/',
				specs: 'tests/*.js',
				template: require('grunt-template-jasmine-requirejs'),
				templateOptions: {
					requireConfigFile: 'js/config.js',
				}
			}
		},

		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: 'sass:dev'
			},

			js: {
				files: [
					'Gruntfile.js',
					'js/**/*.js'
				],
				tasks: ['jshint', 'jasmine']
			}
		},

		// Losslessly optimize images
		imageoptim: {
			files: ['img'],
			options: {
				jpegMini: true,
				imageAlpha: true,
				quitAfter: true
			}
		},

		// Setup concurrent tasks
		concurrent: {
			deploy1: ['jshint', 'connect:test', 'jasmine', 'clean', 'modernizr', 'sass:deploy', 'imageoptim', 'copy'],
			deploy2: ['requirejs'],
			dev1: ['jshint', 'connect:test', 'jasmine', 'sass:dev', 'imageoptim', 'copy'],
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
