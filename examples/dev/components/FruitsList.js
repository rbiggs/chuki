import Chuki from '../../../dist/chuki';
import fruits from '../data/fruits'

class FruitsList extends Chuki {
  constructor() {
    super()
    this.on('ul', 'click', this.announce, 'li')
  }

  render() {
    const li = () => (`
      ${fruits.map(fruit => `
        <li>${fruit}</li>
      `).join('')}`)

    return (`
      <h2>3. Interactive List Example</h2>
      <h3>Choose a Fruit:</h3>
      <ul>
        ${li()}
      </ul>
      <p id='result'></p>
    `)
  }

  style() {
    // Return nested virtual stylesheet object:
    return (
    {
      h3: {
        margin: '0 0 10px 0',
      },
      ul: {
        padding: '0',
        margin: '0 0 2rem 0',
        border: 'solid 1px #ccc',
        width: 200,
        backgroundColor: '#fff',

        li: {
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
          }
        }
      },
      strong: {
        color: '#3a6da8'
      }
    })
  }

  announce(e) {
    result.innerHTML = `You selected: <strong>${this.textContent}</strong>`
  }
}

export default new FruitsList();
