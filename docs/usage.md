[&laquo; back to Table of Contents](TOC.md)

# General Purpose

Init is a project based upon HTML5 Boilerplate. It adds more structure to your
CSS and JavaScript files and helps you start your project faster by reducing
boilerplate code and tasks.

Init includes build tasks for your projects, proivdes a test infrastructure and
implements tools to help you creating web pages and apps fast.

# Starting Point

When starting a new project with init you will need to make sure to install some
dependencies if you haven't already.

## Clone the project

	$ git clone git@github.com:use-init/init.git

This will create a local clone of INIT in a subfolder called 'init' in the
directory you choose before in the command line. You can rename the folder name.

## Dependencies

* Node.js

Apart from that we make use of GruntJS and you might want to install it globally via:

	$ npm i -g grunt-cli

Now we need to install the GruntJS modules we want to use within the project and the components that are predefined:

	$ npm i

It will create a directory called `node_modules` with the dependencies for our Grunt tasks and Front-End components.

### Troubleshooting

If running the install does not work, please try running it as admin:

	$ sudo npm install -g grunt-cli

You'll need to enter your admin password.
