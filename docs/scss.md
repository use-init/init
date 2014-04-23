[&laquo; back to Table of Contents](TOC.md)

# SCSS

Init is using Sass with its .scss file format. Sass is a CSS preprocessor providing non-standardized functions and methods. You can read about the language in the [official Sass documentation](http://sass-lang.com/).

In INIT we modularize our styles in several components. We have therefore divided the styles into the following folders:

- [elements](../scss/elements) contains `_typography.scss` by default where you put your typographic styles in.
- [helpers](../scss/helpers) contains `_helpers.scss` like `.clearfix` / `.hidden` classes.
- [media](../scss/media) contains specific media styles. There are only large blocks like `_print.scss` as we use the inline media-query feature of Sass.
- [modules](../scss/modules) contains module blocks of your project. This means for example box styles or other layout component styles.
- [page](../scss/page) contains the page basic styles. This includes basic styles in `_main.scss` as well as 'templated' styles e.g. `_header.scss` or `_footer.scss`.

Most of the files contain some raw styles or example code so you can just view the files to understand what they are thought for. Surely you can adapt the files and contents of the files to your own project-style.

## Sass-Mixins

We added some useful Sass Mixins to INIT as a Bower module so you can use them right away. Please refer to the [offical documentation of Sass-Mixins](//github.com/drublic/Sass-Mixins/blob/master/README.md) for usage instructions and report bugs from there to the project.

## Concatenation

As we use several single Sass-files they need to be concatenated for usage in your project. This is done by the Sass `@import` function within the [`scss/main.scss`](../scss/main.scss) file. As you can see there you just type the folder and name of the file without the leading `_` and without the file ending to import a file.

Notice: Don't forget to import a file in `main.scss` if you created a new one in the Sass structure so it will be added to the `main.css` file you use in your project.

## CSS Style

You kick-off the preprocessor with grunt. To continuously generating the CSS file on every change you do, run:

	grunt watch

This runs the `watch` task in grunt which includes also the `sass --watch` task. The watch task outputs a not minified CSS annotaed file which is great for development.

To get a compressed, production ready CSS file simply run the following command:

	grunt build

See the [documentation about grunt](grunt.md) for more information about this task.
