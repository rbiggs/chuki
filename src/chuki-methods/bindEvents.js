import uuid from './uuid'
import delegate from './delegate'

/**
 * Unbind an event with callback to an element. This uses the arguments provided by the `on()` method to do so.
 *
 * @param self Reference to the class 'this'.
 * @return void.
 */
export default (self) => {
  for (let event of self.events) {
    for (let registerEvent of document.querySelectorAll(event.selector)) {
      if (!registerEvent.getAttribute('event_id')) {
        let eventID = uuid()
        registerEvent.setAttribute('event_id', `${self.constructor.name.toLowerCase()}_event_${eventID}`)
        if (event.delegate) {
          delegate(event.selector, event.type, event.delegate, event.callback)
        } else {
          document.querySelector(`[event_id=${self.constructor.name.toLowerCase()}_event_${eventID}]`).addEventListener(event.type, event.callback)
        }
      }
    }
  }
}