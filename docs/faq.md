[&laquo; back to Table of Contents](TOC.md)

# FAQ.md

## General

If you need assistance with the INIT project please have a look at the [README](../README.md) and documenation (TOC.md) first. If you can't find a solution there, please [create an issue on GitHub](https://github.com/drublic/init/issues) and provide all details necessary to reproduce your problem.

## FAQ

### I am having issues with Grunt aborting the task

It is likely jshint encountered problems in your code. Ensure you stick to the [`.jshintrc`](../.jshintrc) configuration and check again if jshint task outputs any warnings or errors.

Also if you added new Sass files ensure you added them not only as files but also in main.scss as import with the proper name.


### I am getting a warning about `.jshintrc` config.

You might forgot to copy the hidden files in your working directory. Ensure you have `.jshintrc`, `.htaccess`, `editorconfig`, `.gitattributes`, `.gitignore`, `.travis.yml` in the root of your init-project folder.
