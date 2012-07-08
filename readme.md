# __init__, based on HTML5 Boilerplate

This project extends [HTML5 Boilerpalte](https://github.com/h5bp/html5-boilerplate) with some more structure for SCSS files and JavaScripts.


## TODO

* Include html-linting aka. validation with Grunt
* Include deploy-task
* Move all files currently not affected by Grunt into `publish`-dir with running `$ grunt dev`
* RequireJS ?
* Tests ?

## Dependencies

You will need to install some stuff, if you haven't already:

Mayors:

* Node.js
* Ruby

Secondaries:

* Node: npm
* Ruby: SASS

After you've set this stuff up please run

	$ npm install

in your project's folder.
This will install all the things you need automatically (grunt, grunt-sass).

## Contribute
If you got something that's worth including into the project please [submit a Pull Request](https://github.com/drublic/init/issues) or [open an issue](https://github.com/drublic/init/issues) for further discussion.

@necolas [wrote down some good guidelines](https://github.com/h5bp/html5-boilerplate/wiki/contribute) for contribution to HTML5 Boilerplate. Please keep these in mind when contributing to this project. <3

Please use the `.editorconfig`-file in order to set the right usage of tabs/spaces in your editor. Visit [editorconfig.org](http://editorconfig.org/) for more information.

## CSS
We are currently working with [SASS](http://sass-lang.com/) (in its dialect SCSS) and do not use CSS directly. Please do not edit the CSS-files in any case but search the correct `.scss` file and edit the according SCSS. If you are not familiar with SCSS you can write pure CSS which is actually valid SCSS.

However all `.scss`-files are compiled into one file called `style.css` in the `css`-folder. This is the only file that is relevant for uploading and including into the page.

You can find more information about the installation process of SASS and the usage of SCSS in the [SASS Tutorial](http://sass-lang.com/tutorial.html).


## JS
We use jQuery and Modernizr (custom build).
Please lint your JavaScript before commit. You can use the Grunt-task `lint` for this.

## Deployment
Please use [Grunt.js](https://github.com/cowboy/grunt) for building a production-state of a website. The `Gruntfile.js` has tasks for concatenating and minifing CSS and JavaScript.
Additional information on this project is stored in `package.json`.



## Development

This package is developed and maintained by [Hans Christian Reinl](http://drublic.de/).
We use it at [/gebrüderheitz](http://gebruederheitz.de/) for front-end development.

## License

### Major components:

* Grunt: MIT license
* HTML5 Boilerplate: Public Domain
* jQuery: MIT/GPL license
* Modernizr: MIT/BSD license
* Normalize.css: Public Domain

### Everything else:

The MIT License (MIT)
Copyright © 2012 Hans Christian Reinl, http://drublic.de

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
