# Changelog

### HEAD

### 1.0.2 (11 December 2013)
* Minor updates to .htaccess
* Clean up Gruntfile
* Remove grunt-concurrent
* Update Modernizr to v2.7.1

### 1.0.1 (26 November 2013)
* Update dependencies and devDependencies
* Move Karma tests in `grunt build` without using concurrent (#62)
* Remove regexp option from JSHint options
* Fix broken link in template

### 1.0.0 (20 November 2013)

#### Additions
* Use Bower for package management and replace vendor packages (#24)
* Add Karma as Test Suite
* Add test integration with Jasmine
* Add default markup (#31)
* Add Grunt task to optimize images (#26)
* Move all Grunt tasks into own file
* Add node-matchdep to automatically fetch dependencies
* Add a build step for HTML files (#5)
* Add an option to use templates for content
* Add documentation about how to write modules with Sass
* Add default logo.svg

#### Updates
* Update Modernizr to 2.7.0
* Update RequireJS to 2.1.9
* Update to Apache Server Configs v2.0.0
* Update jQuery to 1.10.2
* Update normalize.css to 2.1.2 (removes IE 6 and 7 support)
* Use Sass-Mixins v0.6.0
* Update to Google Universal Analytics
* Update 404 template to latest version from HTML5 Boilerplate

#### Removals
* Remove CC for IE7
* Remove Chrome Frame support (#28)
* Use only one Apple Touch Icon

#### Other
* Restructre copying of files and dist-folder structure (#11)
* Remove media-query files in favor of inline media-queries
* Add AUTHORS file instead of specifiying it in package.json
* Use a variable for main text color (#30)
* Add .bowerrc configuration file for Bower
* Add folder CSS to .gitignore

### 0.9.1 (04 April 2013)

* Add grunt-concurrent to run tasks concurrently (#22)
* Update normalize.css to 1.1.2
* Update jQuery to 1.10.1

### 0.9.0 (18 April 2013)

* Add Travis CI
* Include RequireJS
* Rename log.js to console.js

### 0.8.3 (09 April 2013)

* Update .htaccess to reflect latest changes
* Remove Google Analytics protocol check (see h5bp/html5-boilerplate#1319)
* Update normalize.css to version 1.1.1
* Update versions of Grunt modules

### 0.8.2 (26 February 2013)

* Add node server with grunt-contrib-connect
* Remove WEBrick server

### 0.8.1 (05 February 2013)

* Update jQuery to version 1.9.1 including source map

### 0.8.0 (27 January, 2013)

* Add source-maps for JavaScript files (See #9 and #10)
* Add wildcard option for jQuery version (#8)

### 0.7.0 (21 January, 2013)

* Improve log.js removing function name for noop
* Update favion to lastest with HiDPI version
* Update jQuery to version 1.9.0 including source map
* Update to lastest styles from HTML5 Boilerplate
* Update normalize.css to version 1.1.0
* Update to reflect latest changes in Grunt

### 0.6.0 (06 November, 2012)

* Update .htaccess to HTML5 Boilerplate's latest version
* Update log.js to reflect HTML5 BP's latest log stub method
* Update Gruntfile and package.json to work with latest draft of Grunt 0.4.0

### 0.5.0 (26 September, 2012)

* Rename production-package to "dist"
* Update jQuery to 1.8.2
* Add grunt-modernizr task
* Add .jshintrc file
* Add CONTRIBUTING.md file

### 0.4.0 (10 September, 2012)

* Add Changelog
* Update jQuery and Modernizr to latest versions
* Update .editorconfig with more options
* Update humans.txt file

### 0.3.0 (23 August, 2012)

* Update normalize.css to 1.0.1, image-replacement, docs and other stuff to
	reflect HTML5 Boilerplate 4.0.0 structure better

### 0.2.0 (26 July, 2012)

* Include a Grunt-task for HTML-validation
* Add seperate Grunt-tasks for development and production

### 0.1.0 (9 July, 2012)

* Include HTML5 Boilerplate
* Add .editorconfig file
* Include SCSS-file-structure
* Add initial Gruntfile.js and package.json
* Include MIT License
* Include ruby-server
