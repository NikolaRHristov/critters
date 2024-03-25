/**
 * @module CSS
 *
 */

/**
 * Parse a textual CSS Stylesheet into a Stylesheet instance.
 * Stylesheet is a mutable postcss AST with format similar to CSSOM.
 * @see HTTPS://GitHub.Com/postcss/postcss/
 * @private
 * @param {String} stylesheet
 * @returns {css.Stylesheet} ast
 */
export default async (Stylesheet) =>
	(await import("postcss")).parse(Stylesheet);
