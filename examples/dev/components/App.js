import Chuki from '../../../dist/chuki'
import HelloWorld from './HelloWorld'
import DumbComponent from './DumbComponent'
import FruitsList from './FruitsList'

// Define component that uses other components:
class App extends Chuki {
  constructor() {
    super()
    this.loadComponent(DumbComponent)
    this.loadComponent(HelloWorld)
    this.loadComponent(FruitsList)
    
    // Remove event:
    this.on('#stop', 'click', function() {
      // Unbind the event on the World component instance:
      HelloWorld.off('#hello', 'input', 'logHello')
      alert('No more input!')
    })
  }

  // Compose view with sub-components:
  render() {
    return (`
      <div>
        <DumbComponent></DumbComponent>
        <HelloWorld></HelloWorld>
        <FruitsList></FruitsList>
        <h2>4. Unbind Hello World Input</h2>
        <p>
          <button id='stop'>Stop Hello World Updates!</button>
        </p>
      </div>
    `)
  }

  styles() {
    // Return nested virtual stylesheet object:
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
