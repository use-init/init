module.exports = function(grunt) {

	'use strict';

	grunt.registerTask('fix-sourcemap', function () {
		var paths = [];
		var fs = require('fs');
		var k;

		grunt.task.requires('uglify');

		paths.push(grunt.config.get('uglify.deploy.options.sourceMap'));
		for (k in grunt.config.get('uglify.deploy.files')) {
			k = grunt.template.process(k);
			paths.push(k);
		}

		paths.forEach(function (filename) {
			grunt.log.writeln(filename);
			var text = fs.readFileSync(filename, 'utf8');

			// Modify map/min so that it points to files in the same folder;
			// see https://github.com/mishoo/UglifyJS2/issues/47
			if (/\.map$/.test(filename)) {
				text = text.replace( /"(dist\/)?js\//g, '"' );
				fs.writeFileSync( filename, text, 'utf-8');
			} else if (/\.min\.js$/.test(filename)) {
				text = text.replace(/sourceMappingURL=(dist\/)?js\//, 'sourceMappingURL=');
				fs.writeFileSync(filename, text, 'utf-8');
			}
		});
	});
};
