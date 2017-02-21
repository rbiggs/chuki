import append from './append'
import createElements from './createElements'
/**
 * Inject rendered component into DOM.
 *
 * @param self Reference to the class 'this'.
 * @param element The element that will contain the component.
 * @return void.
 */

export default (self, element) => {
  self.htmlString = self.render();
  const el = document.querySelector(element)
  const nodes = createElements(self.htmlString)
  append(element, nodes)
}
