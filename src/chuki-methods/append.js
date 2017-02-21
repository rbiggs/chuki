/**
 * Append DOM nodes to provided element.
 *
 * @param {string} selector A selector to append the nodes to.
 * @param {node} selector A DOM node to append the nodes to.
 * @return {void}
 */
export default (selector, node) => {
  if (selector.nodeType) {
    selector.appendChild(node)
  } else if (typeof selector === 'string') {
    document.querySelector(selector).appendChild(node)
  }
}