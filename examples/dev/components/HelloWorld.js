import {Chuki, html} from '../../../dist/chuki'

/**
 * This class will get imported and consumed by App.js.
 */
class HelloWorld extends Chuki {
  constructor() {
    super()
  }

  // Define template for component:
  render() {
    return (html`
      <h2>2. Hello World Example</h2>
      <h1 id="title">Hello</h1>
      <div>
        <input id="hello" type="text"/>
        <button id="reset">Reset!</button>
        <button id='turnOff'>Turn Off!</button>
      </div>
    `)
  }

  // Bind events:
  bind() {
    return ([
      {
        selector: '#hello',
        type: 'input',
        callback: this.logHello
      },
      {
        selector: '#reset',
        type: 'click',
        callback: this.reset
      },
      {
        selector: '#turnOff',
        type: 'click',
        callback: this.turnOff.bind(this)
      }
    ])
  }

  // Define callbacks for events: logHello, reset, turnOff.
  logHello() {
    title.innerHTML = `Hello ${document.getElementById('hello').value}!`
  }

  reset() {
    title.innerHTML = `Hello World`
    hello.value = `World`
  }

  turnOff() {
    this.off('#hello', 'input', 'logHello')
  }

  // Return virtual stylesheet object:
  style() {
    return ({
      h1: {
        color: '#3a6da8',
        'text-shadow': '0 2px 2px rgba(0,0,0,0.25)',
        margin: 0
      }
    })
  }
}

export default new HelloWorld()
