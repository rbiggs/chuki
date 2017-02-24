import createStylesheet from './style'

/**
 * Insert rendered component and its child components into DOM.
 *
 * @param self Reference to the class 'this'.
 * @param element The component name in lower case.
 * @return void.
 */
export default (self, element) => {
  self.mount(element)
  self.renderComponents()
  if(self.style) {
    const styles = self.style()
    const stylesheet = createStylesheet();
    stylesheet.css(element, styles)
  }
}
