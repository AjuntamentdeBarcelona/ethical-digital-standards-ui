// See https://www.npmjs.com/package/logging-helpers

/**
 * Outputs a debug statement with the current context,
 * and/or `val`
 *
 * ```js
 * // Lo-Dash
 * <%= _debug("this is a message!") %>
 * <%= _debug("%j", foo) %>
 *
 * // Handlebars
 * {{_debug "this is a message!"}}
 * ```
 * @return {undefined}
 * @api public
 */
module.exports = require('logging-helpers')._debug
