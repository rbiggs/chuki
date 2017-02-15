import Chuki from '../../../dist/chuki'
import {html} from '../../../dist/chuki'
import HelloWorld from './HelloWorld'
import DumbComponent from './DumbComponent'
import FruitsList from './FruitsList'
import Counter from './Counter'

/**
 * This class imports and integrates DumbComponent, HelloWorld and FruitsList as its children. Notice that DumbComponent, although not a Chuki component but a simple function that returns a template literal, can be integrate the same a true components.
 */
class App extends Chuki {
  constructor() {
    super()
    this.loadComponent(DumbComponent)
    this.loadComponent(HelloWorld)
    this.loadComponent(Counter)
    this.loadComponent(FruitsList)
  }

  // Compose view with sub-components:
  render() {
    return (html`
      <div>
        <DumbComponent></DumbComponent>
        <HelloWorld></HelloWorld>
        <Counter></Counter>
        <FruitsList></FruitsList>
        <h2>5. Unbind Hello World Input</h2>
        <p>This button accesses the HelloWorld off method through its imported instance inside the App component.</p>
        <p>
          <button id='stop'>Stop Hello World Updates!</button>
        </p>
      </div>
    `)
  }

  // Bind events:
  bind() {
    return ([
      {
        selector: '#stop',
        type: 'click',
        callback: this.turnoffHelloWorld
      }
    ])
  }

  // Define callbacks for events.
  turnoffHelloWorld() {
    // Unbind the event on the World component instance:
    HelloWorld.off('#hello', 'input', 'logHello')
    alert('No more input!')
  }

  // Return nested virtual stylesheet object:
  styles() {
    return ({
      h1: {
        margin: 0
      },
      input: {
        border: 'solid 1px blue',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
      }
    })
  }
}

export default new App()
