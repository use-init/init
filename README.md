# <img src="http://rawgithub.com/use-init/init/master/logo.svg" alt="INIT" title="INIT" width="200">

This project is based upon [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) and adds more structure for SCSS and JavaScript files, includes build tasks and a whole lot more.

[![Build Status](https://secure.travis-ci.org/use-init/init.png?branch=master)](http://travis-ci.org/use-init/init)
[![Dependency Status](https://david-dm.org/use-init/init.png)](https://david-dm.org/use-init/init)
[![devDependency Status](https://david-dm.org/use-init/init/dev-status.png)](https://david-dm.org/use-init/init#info=devDependencies)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)


## Dependencies

You will need to install some stuff, if you haven't already:

Majors:

* Node.js
* Ruby

Secondaries:

* Node: npm
* Ruby: SASS
* Bower

After you've set this stuff up please run

	$ npm install -g grunt-cli

This installs the Grunt command line tools.
Afterwards please run

	$ npm install

in your project's directory.
This will install all the things you need for running the grunt-tasks
automatically and all Bower components defined in `bower.json`.

Also it will create a folder `components` which holds all vendor dependencies
managed by Bower.


### Troubleshooting

If running the install does not work, please try running it as with admin-rights:

	$ sudo npm install -g grunt-cli


## Browser support

* Chrome
* Firefox 4+
* Internet Explorer 8+
* Opera 12+
* Safari 5+

## Yeoman Generator-INIT

INIT is also available as [Yeoman Generator](http://yeoman.io/generators.html) and is called [`generator-init`](https://github.com/use-init/generator-init). See the repository for detailed instruction and more information.

## Contribute

Please help making this project better and [contribute](CONTRIBUTING.md) with your knowledge.


## CSS

We are currently working with [Sass](http://sass-lang.com/) (in its dialect SCSS) and do not use CSS directly. Please do not edit the CSS-files in any case but search the corresponding `.scss` file and edit it accordingly. If you are not familiar with SCSS you can write pure CSS which is actually valid SCSS.

However all `.scss`-files are compiled into one file called `main.css` in the `css`-folder. There is a productive-version (means minified), too.

You can find more information about the installation process of Sass and the usage of SCSS in the [Sass Tutorial](http://sass-lang.com/tutorial.html).


## JS

We use jQuery, Modernizr (custom build via Grunt) and RequireJS.

Please use JSHint for your JavaScript before you commit. You can use the Grunt-task `jshint` for this. It is also integrated in `grunt watch`.


## Creating a Build

Please use [Grunt.js](https://github.com/gruntjs/grunt) for building a production-state of a website. The `Gruntfile.js` has tasks for concatenating and minifing CSS and JavaScript.

Additional information on this project is stored in `package.json`.


## Development

This package is developed and maintained by [Hans Christian Reinl](http://drublic.de/), [Anselm Hannemann](http://helloanselm.com/) and [more contributors](https://github.com/use-init/init/graphs/contributors).


## Credits

The INIT logo was designed by Jan von Beckerath at [NIMIUS](http://nimius.net) and optimized by [Stefan Nitzsche](http://www.stn.my/).


## License

Please be aware of the licenses of each component we use in this project. Everything else that has been developed by the contributions to this project is under [MIT License](LICENSE.md).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/use-init/init/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

