// See https://www.npmjs.com/package/logging-helpers

/**
 * Returns stringified JSON, wrapped in a gfm codeblock, html `<pre>` tags,
 * or unchanged, based on the `type` passed on the context.
 *
 * ```js
 * // Lo-Dash
 * <%= _inspect(obj, {type: }) %>
 * <%= _inspect("%j", obj) %>
 *
 * // Handlebars
 * {{_inspect this type="html"}}
 * ```
 * @return {undefined}
 * @api public
 */
module.exports = require('logging-helpers')._debug
