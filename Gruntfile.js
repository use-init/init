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
				'js/main.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Build modernizr
		modernizr: {
			devFile: 'js/vendor/modernizr-2.6.2.js',
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

		concat: {
			deploy: {
				src: [
					// Remove jQuery if you don't want to include the local copy
					// in your build
					'js/vendor/jquery-*.min.js',
					'js/plugins/log.js',
					'js/main.js'
				],
				dest: 'dist/js/main-<%= pkg.version %>.min.js'
			}
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

		uglify: {
			deploy: {
				src: 'dist/js/main-<%= pkg.version %>.min.js',
				dest: 'dist/js/main-<%= pkg.version %>.min.js'
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
					'js/main.js'
				],
				tasks: 'jshint'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// A task for development
	grunt.registerTask('dev', ['jshint', 'sass:dev']);

	// A task for deployment
	grunt.registerTask('deploy', ['jshint', 'modernizr', 'concat', 'sass:deploy', 'uglify']);

	// Default task
	grunt.registerTask('default', ['jshint', 'concat', 'sass:dev', 'uglify']);

};
