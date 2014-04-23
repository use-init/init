[&laquo; back to Table of Contents](TOC.md)

# GruntJS

[GruntJS](http://gruntjs.com/) is a task runner in JavaScript. It usually runs
tasks you need for development and deployment of a web project.

## Used Tasks

* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) hints your JavaScript code
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) cleans your build directory before doing a new build
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from the development directories into the build directory
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) watches files for changes
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) runs the Sass task and builds the CSS files
* [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs) runs requireJS and builds the JS files
* [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) builds a custom Modernizr build based on your used tests
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) runs a static web server with root on your working directory
* [grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim) optimizes your images
* [grunt-karma](https://github.com/karma-runner/grunt-karma) runs your JS unit-tests in different browsers

## How Grunt works

### [`package.json`](../package.json)

This file includes all metadata of a project and the dependency packages. The file is formatted in JSON format.
The first part includes the metadata of the package as well as a link to the repository URL and website.
Following links to the bug reporting tool, license and additional scripts (in our case we use `grunt travis` for example) you can find all dependency packages listed in here with the used versions.

### [`Gruntfile.js`](../Gruntfile.js)

The Gruntfile is the configuration and task command file. In there you can first find a configuration of all used components (usually includes the source and target directories where the task should be applied to).
Then you will find a snippet loading all npm-tasks from package.json automatically. This means when you add a package in package.json it will automatically be loaded in the Gruntfile.

### Run Grunt

To execute one of the specified grunt-tasks you need to call it on your command
line.

	$ grunt copy

### Development

For development you can run Grunt initially once by calling:

	$ grunt

To listen continuously to changes you do in files (e.g. Sass) you can type:

	$ grunt watch

### Creating a build

As for deployment you want to only have the production files and might want a
different output (e.g. minified and compressed JS and CSS files) there is a
separate task to make a build:

	$ grunt build

This generates the assets with the version number specified in [`package.json`](../package.json).
