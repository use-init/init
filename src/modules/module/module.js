/**
 * An example module
 *
 * @author Author name
 */
import $ from '../../../node_modules/jquery/dist/jquery.js';

// Public API
export default function () {

  // Strict mode to prevent sloppy JS
  'use strict';

  // Private variables
  let _eventName = '_test';

  return {

    // Getter for private variable
    getEventName () {
      return _eventName;
    },

    // File an event on initialisation
    init () {
      $(document).trigger(_eventName);
    }
  };
}
