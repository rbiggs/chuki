/**
 * Pseudo classes/elements and attribute selectors should immediately follow the previous selector, others should be space separated.
 *
 * @param parent Parent selector.
 * @param child Child selector.
 * @return object of combined parent and child selectors/properties/values.
 */
export default (parent, child) => {
  const pseudoRe = /^[:\[]/
  const parents = parent.split(","), children = child.split(",")
  return parents.map(function(parent) {
    return children.map(function(part) {
      let separator = pseudoRe.test(part) ? "" : " "
      return parent + separator + part
    }).join(",")
  }).join(",")
}
