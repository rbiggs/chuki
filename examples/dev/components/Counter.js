import Chuki from '../../../dist/chuki'
import {html} from '../../../dist/chuki'

/**
 * This class will get imported and consumed by App.js.
 */

class Counter extends Chuki {
  constructor() {
    super()
    this.model = 0
    this.on('#btnSubtract', 'click', this.subtract.bind(this))
    this.on('#btnAdd', 'click', this.add.bind(this))
  }

  render() {
    return (html`
      <h2>3. Counter Example</h2>
      <p>From 0 to 10:</p>
      <div class='counter-sheath'>
        <button ${this.model==0 ? 'disabled' : ''} id='btnSubtract'>-</button>
        <span id='counterValue'>${this.model}</span>
        <button id='btnAdd'>+</button>
      </div>
    `)
  }

  style() {
    return ({
      '.counter-sheath': {
        display: 'flex',
        padding: '5px 10px',
        border: 'solid 1px #ccc',
        width: 110,
        boxSizing: 'border-box',
        backgroundColor: '#fff'
      },
      'h2 + p': {
        margin: 0
      },
      span: {
        display: 'inline-block',
        width: 40,
        margin: '0 2px',
        textAlign: 'center',
        border: 'solid 1px #666',
        backgroundColor: '#3a6da8',
        color: '#fff'
      },
      button: {
        height: 22,
        cursor: 'pointer',
        border: 'solid 1px #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        ':hover': {
          backgroundColor: '#3a6da8',
          color: '#fff'
        },
        ':focus': {
          outline: 'none'
        }
      },
      'button[disabled]': {
        cursor: 'default',  
        opacity: '.5',
        ':hover': {
          color: '#3a6da8',
          backgroundColor: '#84b1e4'
        }
      }
    })
  }

  subtract() {
    if (this.model <= 0) {
      btnSubtract.disabled = true
      btnAdd.disabled = false
      return
    } else if (this.model == 1) {
      btnSubtract.disabled = true
      btnAdd.disabled = false
      counterValue.textContent = --this.model
    } else {
      btnSubtract.disabled = false
      btnAdd.disabled = false
      counterValue.textContent = --this.model
    }
  }

  add() {
    if (this.model >= 10) {
      btnAdd.disabled = true
      btnSubtract.disabled = false
      return
    } else if (this.model == 9) {
      btnSubtract.disabled = false
      btnAdd.disabled = true
      counterValue.textContent = ++this.model
    } else {
      btnSubtract.disabled = false
      counterValue.textContent = ++this.model
    }
  }

}

export default new Counter();