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
			all: ['grunt.js', 'js/main.js']
		},
		jshint: {
			options: {
				browser: true
			}
		},
		concat: {
			js: {
				src: ['js/libs/jquery-1.7.2.min.js', 'js/plugins/log.js', 'js/main.js'],
				dest: 'theme/js/main-<%= pkg.version %>.min.js'
			}
		},
		min: {
			js: {
				src: ['<banner:meta.banner>', '<config:concat.js.dest>'],
				dest: 'min/main-<%= pkg.version %>.min.js'
			}
		}
	});

	// Default task.
	grunt.registerTask('default', 'lint concat min');

};
