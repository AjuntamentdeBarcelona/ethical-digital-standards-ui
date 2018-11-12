// See https://www.npmjs.com/package/logging-helpers

/**
 * Helper for logging an unstyled message to the terminal.
 *
 * ```js
 * // Lo-Dash
 * <%= log("Foo:", someVariable) %>
 * <%= log("%j", foo) %>
 *
 * // Handlebars
 * {{log "this is a message!"}}
 * {{log page}}
 * ```
 * @return {undefined}
 * @api public
 */
module.exports = require('logging-helpers').log
