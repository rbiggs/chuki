import {Chuki, html} from '../../../dist/chuki'
import fruits from '../data/fruits'

/**
 * This class will get imported and consumed by App.js.
 */
class FruitsList extends Chuki {
  constructor() {
    super()
  }

  // Define template for component:
  render() {
    const li = () => (html`
      ${fruits.map(fruit => html`
        <li data-id='${fruit.id}'><span>${fruit.name}</span> $${fruit.price} lb.</li>
      `).join('')}`)

    return (html`
      <h2>4. Interactive List Example</h2>
      <h3>Choose a Fruit:</h3>
      <ul>
        ${li()}
      </ul>
      <p id='result'></p>
    `)
  }

  // Bind events:
  bind() {
    return ([
      {
        selector: 'ul',
        type: 'click',
        callback: this.announce,
        delegate: 'li'
      }
    ])
  }

  // Define callbacks for events.
  announce(e) {
    const id = this.dataset.id
    const choice = fruits.filter(fruit => id === fruit.id)[0]
    const siblings = Array.prototype.slice.apply(this.parentNode.children)
    siblings.forEach(el => {
      el.classList.remove('selected')
    })
    this.classList.add('selected')
    const setResults = (bc, c) => {
      result.style.backgroundColor = bc
      result.style.color = c
      result.style.borderWidth = '1px'
      result.style.display = 'block'
    }
    switch (choice.name) {
      case 'Apple':
        setResults('red', '#fff')
        break;
      case 'Orange':
        setResults('#ffc100', '#000')
        break;
      case 'Banana':
        setResults('yellow', '#000')
        break;
      case 'Watermelon':
        setResults('pink', '#000')
        break;
      case 'Mango':
        setResults('#ff9400', '#fff')
        break;
    }
    result.innerHTML = `You Selected: <strong>${choice.name}</strong>`
  }

  // Return virtual stylesheet object:
  style() {
    return (
    {
      h3: {
        margin: '0',
      },
      ul: {
        padding: '0',
        margin: '0 0 10px 0',
        border: 'solid 1px #ccc',
        width: 200,
        backgroundColor: '#fff',

        li: {
          display: 'flex',
          'flex-direction': 'row',
          listStyle: 'none',
          margin: '0',
          padding: '5px 10px',
          borderBottom: 'solid 1px #ccc',
          cursor: 'pointer',
          transition: 'all .25s ease-out',

          ':last-of-type': {
            border: 'none'
          },

          ':hover': {
            backgroundColor: '#ccc'
          },
          span: {
            flex: 1
          }
        },
        'li.selected': {
          backgroundColor: '#84b1e4',
          ':hover': {
            backgroundColor: '#84b1e4'
          }
        }
      },
      '#result': {
        margin: 0,
        padding: '4px 10px',
        display: 'none',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        width: '202px',
        'box-sizing': 'border-box',
        border: 'solid 0px #666',
        transition: 'all .5s ease-out'
      }
    })
  }
}

export default new FruitsList();
