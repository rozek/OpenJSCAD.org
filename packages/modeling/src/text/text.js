const vectorText = require('./vectorText')
const path2 = require('../geometries/path2')

/**
 * Construct an array of 2D paths from an ascii string whose character's code is between 31 and 127,
 * if one character is not supported it is replaced by a question mark.
 * @param {Object|String} [options] - options for construction or ascii string
 * @param {Float} [options.xOffset=0] - x offset
 * @param {Float} [options.yOffset=0] - y offset
 * @param {Float} [options.height=21] - font size (uppercase height)
 * @param {Float} [options.lineSpacing=1.4] - line spacing expressed as a percentage of font size
 * @param {Float} [options.letterSpacing=1] - extra letter spacing expressed as a percentage of font size
 * @param {String} [options.align='left'] - multi-line text alignment: left, center, right
 * @param {Float} [options.extrudeOffset=0] - width of the extrusion that will be applied (manually) after the creation of the character
 * @param {String} [options.input='?'] - ascii string (ignored/overwrited if provided as seconds parameter)
 * @param {String} [text='?'] - ascii string
 * @returns {Array} character paths
 * @alias module:modeling/text.text
 *
 * @example
 * let textPaths = text()
 * or
 * let textPaths = text('OpenJSCAD')
 * or
 * let textPaths = text({ yOffset: -50 }, 'OpenJSCAD')
 * or
 * let textPaths = text({ yOffset: -80, input: 'OpenJSCAD' })
 */
const text = (options, text) => {
  const outlines = vectorText(options, text)

  const segmentToPath = (segment) => {
    return path2.fromPoints({close: false}, segment)
  }

  return outlines.map((segment) => segmentToPath(segment))
}

module.exports = text