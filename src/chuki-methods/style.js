import uuid from './uuid'
import flatten from './flatten'
import addUnit from './style-methods/addUnit'
import combineSelectors from './style-methods/combineSelectors'
import createStyleSheet from './style-methods/createStyleSheet'
import insertRules from './style-methods/insertRules'
import rulesFromStyles from './style-methods/rulesFromStyles'


/**
 * Private function to parse style object in view and convert it into virtual stylesheet based on the provided element.
 *
 * @return stylesheet
 */
export default function () {

  // Reuse the same style sheet for all instances.
  let sharedSheet = null

  /**
   * If auto units is enabled, any property value that is a number will be converted to a string with the specified unit appended.
   */
  function CreateStyleSheet(options) {
    if (!(this instanceof CreateStyleSheet)) {
      return new CreateStyleSheet(options)
    }
    options || (options = {})
    options.prefix = !options.hasOwnProperty("prefix") ? true : !!options.prefix
    // Set default value to "px" for numbers with a length identifier.
    options.unit = options.hasOwnProperty("unit") ? options.unit : "px"

    this._sheet = null
    this._prefix = null

    // Insert one or more style objects in a stylesheet.
    this.css = function (element, styles, selector) {
      if (styles == null) return ""
      if (this._sheet == null) {
        this._sheet = sharedSheet = (sharedSheet || createStyleSheet())
      }
      selector = element

      const rules = rulesFromStyles(selector, styles)
      if (options.prefix || options.unit !== "") {
        rules.forEach(set => {
          if (options.unit !== "") addUnit(set[1], options.unit)
        })
      }
      insertRules(rules, this._sheet)
    }

  }

  const stylesheets = {}
  stylesheets.css = CreateStyleSheet().css
  return stylesheets
}
