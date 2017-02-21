/**
 * This takes a string of markup and converts it into nodes.
 * It can create DOM nodes or text nodes for insertion.
 *
 * @param {string} template A template to process
 * @return {DocumentFragment}
 */
export default (template) => {
  const temp = document.createElement('div')
  temp.innerHTML = template
  const frag = document.createDocumentFragment()
  // Use childNodes to allow creating element nodes or text nodes:
  const children = Array.prototype.slice.apply(temp.childNodes)
  children.map(el => frag.appendChild(el))
  return frag
}