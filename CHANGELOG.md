# Changelog

### HEAD
* Update node modules
* Add JSCS module to grunt build workflow
* Fix bug with jshint config in grunt watch task (#141)
* Remove unused banner config in grunt config
* Use config.js.hintFiles for files that should be linted
* Optimize SVG logo
* Add ES6 modules to JS + build workflow
* Remove unused `@date` definitions
* Update Apache Server Configs to v2.14.0
* Remove node dependency `xtend` in favor of `node-deep-extend` (#132)
* Add HTML to modules folder and parse module html (#129)
* Update npm dependencies to latest versions
* Include better tracking via Google Analytics in a separate file
* Fetch the `.htaccess` file via `npm`
* Add a modules folder for all components on a page
* Re-add .htaccess: server-configs-apache in version 2.11.0
* Remove conditional comments for old IE
* Drop IE8 support: update jQuery to v2.1.1
* Remove Bower and use npm for all dependencies
* Remove Sass and replace with Pleeease
* Update karma tasks to better reflect actual propose
* Copy files that are needed in dest via grunt copy
* Use grunt-sass with libsass for speed

#### Pre v2
* Delete unnecessary property in `.bowerrc`

### 1.4.0 (20 November 2014)
* Update dependencies from bower and npm
* Update Apache Server Configs to v2.11.0
* Rename Apple touch icon to `apple-touch-icon.png` and add<br>
  `<link>` in `templates/header.html`
  ([h5bp/html5-boilerplate#1622](https://github.com/h5bp/html5-boilerplate/pull/1622))
* Removed obsolete sourcemapping option
* Update `apple-touch-icon-precomposed.png`
  ([h5bp/html5-boilerplate#1599](https://github.com/h5bp/html5-boilerplate/pull/1599))
* Remove `trailing` JSHint option
* Upgrade `console.log` / `console.warn` (#112)
* Remove timestamp logging when running Karma
* Integrate jit-grunt
* Remove proxy from Karma configuration since it is not needed
* Remove `connect:test` task from Grunt
* Order .jshintrc options alphabetically
* Update 404 to latest from HTML5 Boilerplate
* Make structure for test suites easier to unterstand
* Add `auto` to the Google Universal Analytics tracker create method
* Add `timeline` and `timelineEnd` to the list of `console` methods

### 1.3.0 (4 June 2014)
* Update to Apache Server Configs v2.4.0
* Add `lang=""` to `<html>`
* Use `<!doctype html>` instead of `<!DOCTYPE html>`
* Update component jQuery to 1.11.1
* Update component Modernizr to v2.8.0
* Update npm packages to their latest version

### 1.2.0 (2 April 2014)
* Update component normalize.scss to v3.0.1
* Use INIT logo for tiles and icons (#105)
* Use load-grunt-tasks instead of matchdep
* Add config option to add custom concat tasks (#87)
* Use load-grunt-tasks instead of matchdep
* Clean up Karma configuration and make coverage working with new version
* Add `grunt/tasks` folder for own tasks
* Add directory `grunt/plugins` to include plugins for Grunt config
* Rename `tasks` to `grunt`
* Update bower components to lastest version
* Update dependencies to latest version
* Add Sass 3.3 sourcemaps support (#99)
* Fix output style again
* Revert "Use libsass instead of Ruby Sass"
* Fix non-compressed output on Sass files in build (#101)
* Move karma.config.js file to `tasks` directory
* Add `/browserconfig.xml` file and tile images

### 1.1.1 (04 March 2014)
* Fix Grunt-Modernizr task for latest update
* Update npm dependencies to latest versions
* Use constant instead of string for Karma log level
* Fix path of jQuery in config.js in order of v1.11.0 update
* Update jQuery to v1.11.0
* Update normalize-scss to v3.0.0
* Fix npm postinstall script for win32 systems (#89)
* Update to Apache Server Configs v2.2.0

### 1.1.0 (29 January 2014)
* Further optimize `apple-touch-icon-precomposed`
* Add `Disallow:` to `robots.txt`
* Update 404 to reduce uncopressed size
* Update Bower packages and npm dependencies to latest
* Update to Apache Server Configs v2.1.0
* Simplified default template markup (#81)
* Add time-grunt to measure grunt's execution time
* Use libsass instead of Ruby Sass
* Clean up karma.conf.js
* Use xtend instead of deprecated Grunt dependency Lodash
* Update Grunt to 0.4.2
* Minor updates of IE 6, 7 support
* Removing .ir class, as it was done on HTML5 Boilerplate

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
