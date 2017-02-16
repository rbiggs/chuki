/**
 * A tagged template literal. This allows you to take a template literal and return it as markup ready for rendering in the DOM.
 *
 * @param template A template literal to render.
 * @param expressions Any JavaScript expressions you wish to evaluate.
 * @return string A string of markup representing DOM elements.
 */
export default function(template, ...expressions) {
  return template.reduce((accumulator, part, i) => {
    let expression = expressions[i - 1]
    if (Array.isArray(expression)) {
      expression = expression.join('' + accumulator.match(/(\s+)$/)[1])
    }
    return accumulator + expression + part
  })
}
