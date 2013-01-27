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

		uglify: {
			deploy: {
				options: {
					sourceMap: 'dist/js/main-<%= pkg.version %>.min.map'
				},
				files: {
					'dist/js/main-<%= pkg.version %>.min.js': [
						'js/vendor/jquery-*.min.js',
						'js/plugins/log.js',
						'js/main.js'
					],
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
					'js/main.js'
				],
				tasks: 'jshint'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadTasks('grunt-tasks');

	// A task for development
	grunt.registerTask('dev', ['jshint', 'sass:dev']);

	// A task for deployment
	grunt.registerTask('deploy', ['jshint', 'clean', 'modernizr', 'sass:deploy', 'uglify', 'copy', 'fix-sourcemap']);

	// Default task
	grunt.registerTask('default', ['jshint', 'sass:dev', 'uglify', 'copy', 'fix-sourcemap']);

};
