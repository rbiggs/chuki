import unitlessProps from './unitlessProps'

/**
 * Add unit to numeric values not in unitlessProps.
 *
 * @param style The style value to add to.
 * @param unit The length identifier to add: "px", "em", "rem", etc.
 * @return style The style value with the set length identifier added.
 */
export default(style, unit) => {
  for (const prop in style) {
    let value = style[prop] + ""
    if (!isNaN(value) && !unitlessProps[prop]) {
      value = value + unit
    }
    style[prop] = value
  }
  return style
}
