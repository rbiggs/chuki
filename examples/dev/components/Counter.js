import {Chuki, html} from '../../../dist/chuki'

/**
 * Helper function for managing button state in counter.
 */
function toggleBtnState(sub, add) {
  btnSubtract.disabled = sub
  btnAdd.disabled = add
}
/**
 * This class will get imported and consumed by App.js.
 */

class Counter extends Chuki {
  constructor() {
    super()
    this.model = 0
  }

  // Define template for component:
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

  // Bind events:
  bind() {
    return ([
      {
        selector: '#btnSubtract',
        type: 'click',
        callback: this.subtract.bind(this)
      },
      {
        selector: '#btnAdd',
        type: 'click',
        callback: this.add.bind(this)
      }
    ])
  }

  // Define callbacks for events: subtract, add.
  subtract() {
    if (this.model <= 0) {
      toggleBtnState(true, false)
      return
    } else if (this.model == 1) {
      toggleBtnState(true, false)
      counterValue.textContent = --this.model
    } else {
      toggleBtnState(false, false)
      counterValue.textContent = --this.model
    }
  }

  add() {
    if (this.model >= 10) {
      toggleBtnState(false, true)
      return
    } else if (this.model == 9) {
      toggleBtnState(false, true)
      counterValue.textContent = ++this.model
    } else {
      toggleBtnState(false, false)
      counterValue.textContent = ++this.model
    }
  }

  // Return virtual stylesheet object:
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
        height: 20,
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
        backgroundColor: '#ccc',
        ':hover': {
          color: '#3a6da8',
          backgroundColor: '#ccc'
        }
      }
    })
  }

}

export default new Counter()
