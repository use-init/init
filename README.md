# __init__, based on HTML5 Boilerplate

This project extends [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) with some more structure for SCSS files and JavaScripts.


## TODO

* Move all files currently not affected by Grunt into `dist`-dir (#11)
* RequireJS (#12)
* Tests (#7)


## Dependencies

You will need to install some stuff, if you haven't already:

Mayors:

* Node.js
* Ruby

Secondaries:

* Node: npm
* Ruby: SASS

After you've set this stuff up please run

	$ npm install -g grunt-cli

This installs the Grunt command line tools.
Afterwards please run

	$ npm install

in your project's directory.
This will install all the things you need for running the grunt-tasks automatically.

### Troubleshooting

If running the install does not work, please try running it as with admin-rights:

	$ sudo npm install -g grunt-cli


## Contribute

Please help making this project better and [contribute](CONTRIBUTING.md) with your knowledge.


## CSS

We are currently working with [SASS](http://sass-lang.com/) (in its dialect SCSS) and do not use CSS directly. Please do not edit the CSS-files in any case but search the correct `.scss` file and edit the according SCSS. If you are not familiar with SCSS you can write pure CSS which is actually valid SCSS.

However all `.scss`-files are compiled into one file called `main.css` in the `css`-folder. There is a productive-version too.

You can find more information about the installation process of SASS and the usage of SCSS in the [SASS Tutorial](http://sass-lang.com/tutorial.html).


## JS

We use jQuery and Modernizr (custom build via Grunt).

Please use JSHint for your JavaScript before you commit. You can use the Grunt-task `jshint` for this. It is also integrated in `grunt watch`.


## Deployment

Please use [Grunt.js](https://github.com/cowboy/grunt) for building a production-state of a website. The `Gruntfile.js` has tasks for concatenating and minifing CSS and JavaScript.

Additional information on this project is stored in `package.json`.


## Development

This package is developed and maintained by [Hans Christian Reinl](http://drublic.de/).


## License

### Major components:

* Grunt: MIT license
* HTML5 Boilerplate: MIT license
* jQuery: MIT/GPL license
* Modernizr: MIT/BSD license
* Normalize.css: MIT license

### Everything that has been developed by the contributors to this project:

The MIT License (MIT)
Copyright 2013 Hans Christian Reinl, http://drublic.de

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
