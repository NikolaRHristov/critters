/**
 * @module CSS
 *
 */
/**
 * Serialize a postcss Stylesheet to a String of CSS.
 * @private
 * @param {css.Stylesheet} ast          A Stylesheet to serialize, such as one returned from `parseStylesheet()`
 * @param {Object} options              Options used by the stringify logic
 * @param {Boolean} [options.compress]  Compress CSS output (removes comments, whitespace, etc)
 */
declare const _default: (AST: any, Option: any) => string;
export default _default;
