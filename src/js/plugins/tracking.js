/**
 * Google Analytics tracking inclusion
 *
 * You can use the following attributes to define on elements in order to track
 * those.
 * - data-ga-action, required
 * - data-ga-category, required
 * - data-ga-label
 * - data-ga-value
 *
 * More information about the Google Universal Analytics:
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/
 * http://mathiasbynens.be/notes/async-analytics-snippet#universal-analytics
 */
import $ from '../node_modules/jquery/dist/jquery.js';

export default function () {
  'use strict';

  // Add your Google Universal Analytics ID here
  var GA_ID = 'UA-XXXXXXX-X';

  var document = window.document;

  /* jshint ignore:start */
  // jscs:disable
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  // jscs:enable
  /* jshint ignore:end */

  // Create tracker object
  ga('create', GA_ID);

  // Send a page view
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
  ga('send', 'pageview');

  // Track events
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
  $(document).on('click', function (event) {
    var action;
    var category;
    var label;
    var $target = $(event.target);
    var url;
    var value;

    if ($target !== undefined && $target.attr('data-ga-action')) {
      action = $target.attr('data-ga-action') || undefined; // required
      category = $target.attr('data-ga-category') || undefined; // required
      label = $target.attr('data-ga-label') || undefined;
      url = $target.attr('href');
      value = parseInt($target.attr('data-ga-value'), 10) || undefined;

      if (ga !== undefined && category !== undefined && action !== undefined) {

        // Register the event
        ga('send', 'event', category, action, label, value);
      }
    }
  });
}
