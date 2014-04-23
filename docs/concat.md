[&laquo; back to Table of Contents](TOC.md)

# Concatenate files with INIT

INIT supports concatenation out of the box through
[`grunt-contrib-concat`](https://github.com/gruntjs/grunt-contrib-concat).
This is used by default for concatenating your template partials into a working
prototype / HTML page.

## Add custom concat tasks

You can add custom tasks to concatenate files. Add your custom concatenations to
the config object in [`config.js`](../js/config.js).

A sample custom config object could look like:

	concat: {
		concatFirst: {
			src: [
				'js/part1.js',
				'js/part2.js'
			],
			dest: 'concatenatedfile.js'
		}
	},

The `src` key references your partials that you want to concatenate. The `dest`
key describes the relative path to the result. The path is set relative from
INIT’s root.
