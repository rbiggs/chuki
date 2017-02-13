import Chuki from '../../../dist/chuki'

class HelloWorld extends Chuki {
  constructor() {
    super()
    this.on('#hello', 'input', this.logHello)
    this.on('#reset', 'click', this.reset)
    this.on('#turnOff', 'click', this.turnOff.bind(this))
  };

  render() {
    return (`
      <h2>2. Hello World Example</h2>
      <h1 id="title">Hello</h1>
      <div>
        <input id="hello" type="text"/>
        <button id="reset">Reset!</button>
        <button id='turnOff'>Turn Off!</button>
      </div>
    `)
  }

  style() {
    return (
    {
      h1: {
        color: 'green',
        'text-shadow': '0 2px 2px rgba(0,0,0,0.25)'
      }
    })
  }

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
}

export default new HelloWorld()
