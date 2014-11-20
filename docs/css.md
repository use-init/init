[&laquo; back to Table of Contents](TOC.md)


# CSS

INIT uses [Pleeease](http://pleeease.io/) as a CSS post processor which enables
you to write straightforward CSS.

Here are the major selling points:

* Pleeease adds prefixes, based on Autoprefixer
* It provides fallbacks for rem unit, CSS3 pseudo-elements notation
* It adds opacity filter for IE8
* It converts CSS shorthand filters to SVG equivalent
* It packs same media-query in one @media rule
* It inlines @import styles
* It minifies the result
* It enables you to use custom properties (variables)
* It has some color functions for you

In INIT we modularize our styles in several components.
Most of the files contain some raw styles or example code so you can just view
the files to understand what they are thought for. Surely you can adapt the
files and contents of the files to your own project-style.

## Concatenation

As we use several single CSS-files they need to be concatenated for usage in
your project. This is done by the CSS `@import` rule within the
[`src/css/main.css`](../src/css/main.css) file. As you can see you just type the
folder and name of the file to import it. Please be aware that you must use the
path from the root directory.

Notice: Don't forget to import a file in `main.css` if you created a new one in
the CSS structure so it will be added to the output file you use in your
project.

## CSS Output

You kick-off the post processor with grunt. To continuously generating the CSS
file on every change you do, run:

	grunt watch

This runs the `watch` task with grunt which compiles your CSS. The watch task
outputs a non-minified annotated CSS file which is great for development.

To get a compressed, production ready CSS file simply run the following command:

	grunt build

See the [documentation about grunt](grunt.md) for more information about this
task.

## Preprocessors

We believe the CSS platform offers you everything that is needed to craft great
on-line experiences. CSS preprocessors such as LESS or Sass add a lot of value
for programmers. But there are some pain points which we think make it hard to
use these preprocessors.

* CSS is meant to be declarative. Preprocessors add a lot of functions to it
  that are not easy to understand and require higher level thinking. Logicless-
  ness makes CSS simple.
* Specificity is often problematic (e.g. with deep nesting).
* People that are not used to one or the other preprocessor are left behind.
  Everyone knows CSS.

Our post-processor enables you to use variables (known as custom properties),
color functions and takes care of vendor prefixing.
