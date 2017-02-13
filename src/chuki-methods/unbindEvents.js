/**
 * Unbind events from elements.
 * 
 * @param self Refence to the class 'this'
 * @param selector The selector on which the event is bound.
 * @param event The event type: click, etc.
 * @param callback The callback for this event listener.
 * @return void.
 */
export default (self, selector, event, callback) => {
  if (self.events && self.events.length) {
    const position = self.events.findIndex(event => event.selector === selector)
    const element = document.querySelector(selector)
    element.removeEventListener(event, self[callback])
    self.events.splice(position, 1)
  }
}