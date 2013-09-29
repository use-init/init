[extend](extend.md)

# General

INIT is built modular so you can extend the project with your own code or plugins.
As we are using NPM, GruntJS and bower it is straight forward to extend the project with existing components.

# Examples

## Livereload

If you use the livereload app to instantly update your page in the browser you can trigger this via GruntJS.

In the `Gruntfile.js` add the following code at the bottom of the `grunt.initConfig`:

	grunt.initConfig({
		// INIT basic tasks
		
		livereload: {
			files: ['dist/**/*.css', 'dist/*.html'],
			options: { livereload: true }
		}
	});

If the LiveReload helper App is running on your system by now your code should be updated immediately.
