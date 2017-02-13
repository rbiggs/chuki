import flatten from '../flatten'
import combineSelectors from './combineSelectors'
import isPlainObject from './isPlainObject'

/**
 * Create styles rules from styles object.
 *
 * @param selector 
 * @param styles
 * @return object And object of style rules.
 */
export default function rulesFromStyles(selector, styles) {
  if (!Array.isArray(styles)) styles = [styles]
  const style = {}
  let rules = []
  styles = flatten(styles)
  styles.forEach(block => {
    for (const prop in block) {
      let value = block[prop]
      if (isPlainObject(value) || Array.isArray(value)) {
        rules = rules.concat(
          rulesFromStyles(combineSelectors(selector, prop), value)
        )
      } else {
        if (prop === "content") value = `'${value}'`
        style[prop] = value
      }
    }
  })
  rules.push([ selector, style ])
  return rules
}