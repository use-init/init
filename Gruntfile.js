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
				'js/*.js'
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
					baseUrl: 'js/',
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

		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: 'sass:dev'
			},

			js: {
				files: [
					'Gruntfile.js',
					'js/*.js'
				],
				tasks: 'jshint'
			}
		},

		// Server config
		connect: {
			server: {
				options: {
					port: 9001,
					keepalive: true
				}
			}
		},

		// Setup concurrent tasks
		concurrent: {
			deploy1: ['jshint', 'clean', 'modernizr', 'sass:deploy', 'copy'],
			deploy2: ['requirejs'],
			dev1: ['jshint', 'sass:dev', 'copy'],
			dev2: ['requirejs'],
		}
	});

	// Load all npm tasks through node-matchdep (fetches all tasks from package.json)
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// A task for development
	grunt.registerTask('dev', ['jshint', 'sass:dev']);

	// A task for deployment
	grunt.registerTask('deploy', ['concurrent:deploy1', 'concurrent:deploy2']);

	// Default task
	grunt.registerTask('default', ['concurrent:dev1', 'concurrent:dev2']);

	// Travis CI task
	grunt.registerTask('travis', ['jshint']);

};
