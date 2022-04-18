/**
 * Vector texts provide sets of segments for each character or text strings.
 * The segments can be used to create outlines for both 2D and 3D geometry.
 * "text" directly creates 2D paths. 
 * Note: Only ASCII characters are supported.
 * @module modeling/text
 * @example
 * const { vectorChar, vectorText, text } = require('@jscad/modeling').text
 */
module.exports = {
  vectorChar: require('./vectorChar'),
  vectorText: require('./vectorText'),
  text: require('./text')
}
