[&laquo; back to Table of Contents](TOC.md)

# Toolchain

We use a couple of tools that help us write better code:

* npm
* Grunt
* RequireJS
* Karma (with Jasmine)

## npm
[npm](https://www.npmjs.org/) is a package management utility provided by bower. We use it to load all front-end and development dependencies for our projects.
You can easily install more components. Please refer to npm's docs for more information.

## Grunt
[Grunt](http://gruntjs.com/) is a build tool. We use a couple of tasks to help us build a production-ready version of our code. Please read more about our usage of Grunt [in the according doc](grunt.md).

## RequireJS
[RequireJS](http://requirejs.org/) is a JavaScript module loader that helps your organize your dependency-management within JavaScript.

## Karma
[Karma](http://karma-runner.github.io/) is a testrunner, running JavaScript unit tests in different browsers. INIT makes use of Karma with [Jasmine](http://jasmine.github.io/) as testing library. Please also see [_How to write tests_](writing-tests.md) for more information.
