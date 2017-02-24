import mount from './chuki-methods/mount'
import bindEvents from './chuki-methods/bindEvents'
import unbindEvents from './chuki-methods/unbindEvents'
import insert from './chuki-methods/insert'
import html from './chuki-methods/html'

/**
 * Chuki class (pronounced choo-kee, Hindi for "stack").
 * A class for creating components composed of other components using template literals.
 *
 * @param template A template literal.
 * @return object The Chuki class.
 */
class Chuki {
  constructor() {
    this.template = null
    this.components = []
    this.eventCache = []
  }

  on(selector, type, callback, delegate) {
    this.eventCache.push({selector, type, callback, delegate})
  }

  off(selector, event, callback) {
    this.unbindEvents(selector, event, callback)
  }

  loadComponent(component) {
    this.components.push(component)
  }

  mount(element) {
    mount(this, element)
  }

  bindEvents() {
    bindEvents(this)
  }

  unbindEvents(selector, event, callback) {
    unbindEvents(this, selector, event, callback)
  }

  renderComponents() {
    for (let comp of this.components) {
      if (typeof comp === 'function') {
        const component = new Chuki()
        component.render = function () {
          return comp()
        }
        component.appendTo(comp.name)
      } else {
        comp.appendTo()
      }
    }
  }

  appendTo(element = this.constructor.name.toLowerCase()) {
    const self = this
    insert(this, element)
    if (this.bind) {
      const evts = this.bind()
      evts.forEach(evt => self.eventCache.push({selector: evt.selector, type: evt.type, callback: evt.callback, delegate: evt.delegate}))
    }
    this.bindEvents()
  }
}

export {Chuki, html}
