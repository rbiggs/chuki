/**
 * Event delegator. 
 * Allows you to register an event on an element and execute the callback in the context of define event targets.
 *
 * @param element The base element to attach the listener to.
 * @param event The event type: click, etc.
 * @param selector The selector that will be the event target.
 * @param callback The callback to execute.
 * @return void.
 */
export default (element, event, selector, callback) => {
  const targetEl = document.querySelector(element)
  const eventListener = e => {
    let target = e.target
    const elements = Array.prototype.slice.apply(targetEl.querySelectorAll(selector))
    do {
      let len = elements.length
      for (let i = 0; i < len; i++) {
        if (target === elements[i]) {
          callback.call(elements[i], e)
          break
        }
      }
    } while (target = target.parentNode)
  }
  targetEl.addEventListener(event, eventListener)
}