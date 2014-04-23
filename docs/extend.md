[&laquo; back to Table of Contents](TOC.md)

# Extend INIT

## General

INIT is built modular so you can extend the project with your own code or plugins.
As we are using NPM, GruntJS and bower it is straight forward to extend the project with existing components.

## Examples

### Livereload

If you use the livereload app to instantly update your page in the browser you can trigger this via GruntJS.

In the [`Gruntfile.js`](../Gruntfile.js) add the following code at the bottom of the `grunt.initConfig`:

	grunt.initConfig({
		// INIT basic tasks

		livereload: {
			files: ['dist/**/*.css', 'dist/*.html'],
			options: { livereload: true }
		}
	});

If the LiveReload helper App is running on your system by now your code should be updated immediately.

### SVG-Min

While we are using the imagemin task by default to optimize all your JPG, PNG, GIF images by compressing them losslessly you can do nearly the same for SVG. What you need is the `grunt-svgmin` package.

1. Add the package by simply adding `"grunt-svgmin": "0.2.0"` to the [`package.json`](../package.json) file to the devDependencies.
2. If to the Command line / Terminal and enter `$ npm install` to install the package
3. In the [`Gruntfile.js`](../Gruntfile.js) add the following code to the config section on top of the file:

		// SVG files
		svg: {
			src: 'img/',
			dest: 'dist/img/'
		},

4. In the [`Gruntfile.js`](../Gruntfile.js) add the following code at the bottom of the `grunt.initConfig`:

		grunt.initConfig({
			// INIT basic tasks

			svgmin: {
				dist: {
					files: [{
						expand: true,
						cwd: config.svg.src,
						src: ['**/*.svg'],
						dest: config.img.dest,
						ext: 'min.svg'
					}]
				}
			}
		});

If you need more information, please [read the documentation of the plugin](https://github.com/sindresorhus/grunt-svgmin).
