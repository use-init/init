/*globals module */
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		lint: {
			all: ['Gruntfile.js', 'js/main.js']
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},

		concat: {
			js: {
				src: ['js/vendor/jquery-1.7.2.min.js', 'js/plugins/log.js', 'js/main.js'],
				dest: 'public/js/main-<%= pkg.version %>.min.js'
			}
		},

		rubysass: {
			options: {
				unixNewlines: true,
				style: 'compact'
			},
			css: {
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},

		min: {
			js: {
				src: ['<config_process:meta.banner>', '<config:concat.js.dest>'],
				dest: 'public/js/main-<%= pkg.version %>.min.js'
			}
		},

		watch: {
			css: {
				files: 'scss/**/_*.scss',
				tasks: 'rubysass'
			},
			js: {
				files: '<config.lint.all>',
				tasks: 'lint'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-sass');

	// Default task.
	grunt.registerTask('default', 'lint concat rubysass min');

};
