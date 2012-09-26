module.exports = function (grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		lint: {
			all: ['Gruntfile.js', 'js/main.js'],
			options: {
				options: '<json:.jshintrc>',
			}
		},

		htmllint: {
			all: ['index.html']
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
					'js/vendor/jquery-1.8.1.min.js',
					'js/plugins/log.js',
					'js/main.js'
				],
				dest: 'dist/js/main-<%= pkg.version %>.min.js'
			}
		},

		rubysass: {
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

		min: {
			deploy: {
				src: [
					'<config_process:meta.banner>',
					'<config:concat.deploy.dest>'
				],
				dest: 'dist/js/main-<%= pkg.version %>.min.js'
			}
		},

		watch: {
			html: {
				files: '<config:htmllint.all>',
				tasks: 'htmllint'
			},

			scss: {
				files: ['scss/main.scss', 'scss/**/_*.scss'],
				tasks: 'rubysass:dev'
			},

			js: {
				files: '<config:lint.all>',
				tasks: 'lint'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-modernizr');

	// A task for development
	grunt.registerTask('dev', 'lint htmllint rubysass:dev');

	// A task for deployment
	grunt.registerTask('deploy', 'lint htmllint modernizr concat rubysass:deploy min');

	// Default task
	grunt.registerTask('default', 'lint htmllint concat rubysass:dev min');

};
