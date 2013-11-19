[&laquo; back to Table of Contents](TOC.md)

# HTML

The HTML structure is mainly based on the famous [HTML5 Boilerplate](http://html5boilerplate.com/). While we use this as a base for our markup we add several things including a default markup for your page layout. This is very simple and it is strongly recommended to adapt this markup to your fits.

## Legacy Internet Explorer

To inform users of older Internet Explorers for which the project has not been optimized anymore we provide a Conditional Comment (by default targeting users of IE6 and lower) with a nice little toolbar appearing on top of your website. You are free to adapt this element via changing the text in the markup or adjusting the style via the [`.browsehappy` CSS class](../scss/page/_base.scss#L:85).

To target specific older Internet Explorer versions (up to IE9) we provide you Conditional Comments	you can make use of in CSS. Here is an example (targeting IE8):

	.yourclass {
		// your normal styles for all browsers
	}

	.lt-ie9 .yourclass {
		// add IE8 (and lower) specific styles here
	}

The last statement can also be simplified using Sass language by including it in your original statement:

	.yourclass {
		// your normal styles for all browsers

		.lt-ie9 & {
			// add IE8 (and lower) specific styles here
		}
	}

Interpreted by Sass this will generate the same output as the example above except this is better readable in the original Sass file.

## `<head>` Explanations

In the `<head>` section we included some default markup which you might want to extend. Here are some tipps about what is added and what you can do.

### Viewport

This statement forces the browser to adjust the viewport saying your website is optimized for all devices (Responsive Webdesign).

	<meta name="viewport" content="width=device-width, initial-scale=1">

The property `initial-scale=1` is needed for iOS devices forcing the layout to be displayed unscaled. In rare cases you might want to add the property `user-scalable=no` which we strongly do not recommend to use if unless you really know what you are doing and have tested this.

### WebFonts

We do not include a webfont integration by default. You can do this by either including it via CSS ([@font-face]()), via external CSS file or via asynchronous JavaScript in the head section.

## DNS Prefetching

We strongly encourage you to make use of DNS prefetching for all requests you do. This in modern browsers is simply done by adding a meta tag:

	<link rel="dns-prefetch" href="//yourdomain.com">
	<link rel="dns-prefetch" href="//use.typekit.net">

This indicates to the browser that you will make a request somewhere in your HTML, CSS or JavaScript to one of the listes domains. The protocol does not matter as we let the browser fetch the DNS headers itself for both, http and https protocols. This feature can improve performance a lot.

## Header

We provide a header markup including a `<h1>` tag for your title (can be a logo, too) and a menu via the `<nav>` tag. For accessibility we added some roles, `role="banner"` for the title and `role="navigation"` for the menu.

## Main

The `<main>` element is the wrapper element for your main content. It also has for accessibility reason the provided ARIA `role="main"`. We don't provide any more structure inside this element.

## Footer

A footer is also provided for your copyright notice and additional links on your website.

## JavaScript

JavaScript is included in three parts for several reasons explained below.

**Modernizr** is added in the `<head>` section of the HTML file as this needs to be executed as soon as possible to be applied to the DOM before the user actually sees the page.

**main.js** is our concatenated JS-file we add at the bottom of the HTML-markup just before the closing `</body>` tag. This prevents that loading the JavaScript file blocks the page from rendering in the browser and it is strongly recommended to do it that way.

**Inline JavaScript**: Google Analytics is inlined JavaScript placed right after our main.js file and right before the closing body tag. Analytics services should be included inline to ensure they will be executed and don't need an additional request which could fail on messy internet connections.
