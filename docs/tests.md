[&laquo; back to Table of Contents](TOC.md)

# Testing Workflow

We provide tools and helpers for a testing workflow based on Grunt.

* JSHint – for checking syntax of JavaScript code
* Jasmine - for unit testing
* Karma - for running unit tests cross browser

All testing frameworks run with GruntJS.

All JavaScript files should be checked with JSHint for syntax errors before committing them.

## Running tests
You can run tests by using the Grunt implementation. Just run `$ grunt connect:test karma:test` to run all tests with Karma.

For a less extensive unit test with PhantomJS use `$ grunt connect:test karma:unit`.

## How to set up a Jasmine Test suite
When adding a new test suite you need to do the following:

* Add a file in the folder `test/specs/`
* Name it `{{spec-name}}.spec.js`
* Add the file name without the extension to the list of dependencies in `test/spec.js`
* Wrap your test suite in a `define` function call as you can see here in order to get it working with RequireJS

### Coverage
Karma tests include a coverage report within the console.

### Testing production code
There is a test for all production code produced via Grunt with Karma. You can run `$ grunt test` to build a production version of your code, the Jasmine tests as a build with r.js and run them against the production package.
