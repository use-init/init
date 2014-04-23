[&laquo; back to Table of Contents](TOC.md)

# FAQ

## General

If you need assistance with the INIT project please have a look at the [README](../README.md) and documenation ([TOC.md](TOC.md)) first. If you can't find a solution there, please [create an issue on GitHub](https://github.com/use-init/init/issues) and provide all details necessary to reproduce your problem.

## FAQ

### I am having issues with Grunt aborting the task

It is likely [JSHint](http://www.jshint.com/) encountered problems in your code. Ensure you stick to the [`.jshintrc`](../.jshintrc) configuration (or change it as you need it) and check again if the JSHint task outputs any warnings or errors.

You might also make sure that all dependencies are installed propertly. Please [see the Usage section](usage.md) for more information.

Also if you added new Sass files ensure you add them not only as files but also in [`main.scss`](../scss/main.scss) as import with the proper name.

### I am getting a warning about `.jshintrc` config.

You might have forgotten to copy the hidden files in your working directory. Ensure you have `.jshintrc`, `.htaccess`, `editorconfig`, `.gitattributes`, `.gitignore` and `.travis.yml` in the root of your INIT project folder.
