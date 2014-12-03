[&laquo; back to Table of Contents](TOC.md)

# Build HTML pages with INIT

We use [the concat task](concat.md) to stack pages together. In the `src`
folder we have the `templates` and the `modules` folder which can contain
markup that you want to use for a page.

The `template` folder usually contains the frame of the page which stacks
modules together. All modular code (i.e. a navigation, footer, sidebar or
teaser) should be in the `modules`' own folder as HTML partial.

To build a proper structure you need to configure your page file (usually
known) as ‘template’. In INIT this configuration is done in the
[`pages.json`](../pages.json) file. Add the partials you want to use in the
proper order and comma-separated into the `src` array.

For multiple pages extend the JSON by adding another object (which means page)
to it.
