Chuki
=====
(pronounced Choo-kee, Hindi for "stack")

An ES6 library using template literals to make components.

This is a simple view template library that uses template literals. It also lets you add events, including delegated events, remove events, and add virtual stylesheets scoped to a component.

Building
--------
Open your terminal, `cd` to this folder and run `npm i`. When it is done, you can build Chuki by running `webpack`. The result is put in `dist`. If you don't have Webpack installed globally, you'll need to run `npm i -g webpack` first.

Creating a Component Class
--------------------------

To create a new component, you start by creating a new Chuki class. First you need to import Chuki. You also need to import html from Chuki to create templates. After importing Chuki, you to create your component, giving it a name, by extending Chuki:

```js
import {Chuki, html} from '../dist/chuki'

// Define new class:
class People extends Chuki {
  // Stuff goes here...
}

// After defining the component, you need to create an instance of it to use in your app:
export default new People();
```
With the above instance defined, you'll be able to import and mount it inside your app component as a child. We'll show this further ahead.

A Component's Constructor
-------------------------

You can also give your component a constructor. You would use it to set up instance specific functions, bind events, etc. When defining your component's constructor, be sure to always put the `super()` method first. This will give you proper access to the Chuki class.

```js
import {Chuki, html} from '../dist/chuki'

// Define new class:
class People extends Chuki {
  // setup constructor:
  constructor() {
    super()
    // Add methods here...
  }
}
```

Notice that, along with `Chuki`, we also import `html`. This is a tagged template function that you will use to define your component's template. This brings us the following important point about Chuki:

Separation of Concerns
----------------------

Many frameworks take the approach of encouraging developers to combine template markup with events, properties, and inline styles. This results in a tangled mess of spaghetti code that is not easy to understand or refactor. Chuki avoids this by adopting the principle of separation of concerns. This divides your component into three spheres:

1. `render()` - This method is used to define the template for your component. However, unlike other template systems, Chuki templates have a single purpose: to display the component's data. This code does not contain event handlers nor inline CSS definitions. This is about how to render the component's data.
2. `bind()` - This method is used to define any event listeners for your component. You can event set up delegated events for items with many children for better efficiency.
3. `style()` - This method is used to define a virtual stylesheet scoped to your component. This means its styles will not leak out to affect other parts of your app. Since this is a stylesheet, you are not restricted by the limitations of inline styles. You can use sibling selectors, child selectors, pseudo elements, hover selectors, etc.

This pattern means you have one clear place to look for how data is rendered, how events are implemented, and where styles are defined.

`render()`: Defining a Template
-------------------------------

Every component implements a `render()` method that defines the template that the component will use.  Chuki uses template literals to define templates. If you are not familiar with template literals, read their [docs on Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Chuki provides the `html` tagged template function to enable you to create powerful template using ES6 template literals.

```js
import {Chuki, html} from '../dist/chuki'

// Define new class:
class People extends Chuki {
  render() {
    return (html`
      <h3>People:</h3>
      <ul>
        ${people.map(person => `
          <li>${person.name}</li>
        `).join('')}
      </ul>
    `)
  }
}
// Create instance of People class:
const peopleInst = new People()

// Insert people component in target container:
peopleInst.insert('#app')
```

With the above example we're assuming there is an array called `people`. We use map to loop over the array and return a template literal. The `.join('')` is necessary to prevent `map` from automatically adding a comma. Notice that we use the component's `insert` method to inject it into the desired container. All components inherit the `insert` method.

`bind()`: Adding Events to a Component
--------------------------------------

You define events for your component this `bind()` method. This takes an array of event objects. Each object can have up to four members: `selector`, `type` and `callback`. `delegate`.  Selector is the element to attach the event to, type is the event type: 'click', input, 'change', callback is the event's callback and delegate is an optional element to capture the event. Use this is you want to register an event on a list and capture it on the list items. Delegated events lets you manage events for a series of elements by attaching it to the parent.

A generic selector may result in the event getting attached to an element other than the one you intended. As such you should prefer selectors that are unique, such as an id or some other more complex CSS selector. Examples of good selectors are:

* #myButton
* .classUsedOnceOnly
* ul>li:first-child

You should define your callbacks as a methods of your component. In the following example we wire up two events, one on an input and one on a button. We then define two methods on the component: `logHello` and `Reset`. Because they are defined on the component, they get as callbacks with the `this` keyword because they are methods of this instance: `this.logHello` and `this.reset`.


```js
import {Chuki, html} from '../dist/chuki'

// Define a new class:
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
      }
    ])
  }

  // Define callbacks for events.
  logHello() {
    title.innerHTML = `Hello ${document.getElementById('hello').value}!`
  }

  reset() {
    title.innerHTML = `Hello World`
    hello.value = `World`
  }
```

Delegated Events
----------------

You can also created delegated events by providing a delegate property and giving it the element you want to be the target of the event. The event bubbles from these to the ancestor where the event is registered and then executes the callback. You would use this in cases where you have many items that you want to catch events on, such as list items. In the following example we pass `'li'` as the final argument to set it as the target for an event listener delegated to the list itself:

```js
class FruitsList extends Chuki {
  constructor() {
    super()
  }

  // Define template for component:
  render() {
    // Define list item helper for list below:
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
    result.innerHTML = `You Selected: <strong>${choice.name}</strong>`
  }
}
```

Delegating events for lists and other multi-item collections means that you can add and remove elements without worrying about adding or removing events. It just works.

Unbinding Events
----------------

You can unbind events using the component's `off()` method. The `off` method takes three arguments: the element the event is registered on, the event type and the callback. In order for `off` to know the context of the callback it needs to remove, you must bind its callback to the constructor's `this`:

```js
this.on('#turnOff', 'click', this.turnOff.bind(this))
```
This allows you to invoke the super method as `this.off`. When passing in the callback name to `off`, you just pass in the callback name in quotes. Chuki will use that name to figure out the registered event callback and remove it.

```js
this.off('#hello', 'input', 'logHello')
```


```js
import {Chuki, html} from '../dist/chuki'

// Define a new class:
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
        selector: '#turnOff',
        type: 'click',
        callback: this.turnOff.bind(this)
      }
    ])
  }

  // Define callbacks for events.
  logHello() {
    title.innerHTML = `Hello ${document.getElementById('hello').value}!`
  }

  turnOff() {
    this.off('#hello', 'input', 'logHello')
  }
}
```

Components also have `on` and `off` methods to manage events through its instance. You can do this even when the component is the child of another component. In the example below, notice how we use the `off` method of the `HelloWorld` component instance to turn its input event off from within the `App` component. When we want to detach an event, we need to pass the callback name quoted. Chuki will use this string to find the method on the component instance to remove it:

```js
import {Chuki, html} from '../dist/chuki'

// Define component that uses other components:
class App extends Chuki {
  constructor() {
    super()
  }

  // Define template:
  render() {
    return (html`
      // Template here...
    `)
  }

  // Bind event to turn off HelloWorld:
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
    // Unbind the event on the World component instance.
    // Notice how the component's callback is quoted as a string:
    HelloWorld.off('#hello', 'input', 'logHello')
    alert('No more input!')
  }
}
```

`style()`: Virtual stylesheets
------------------------------

You can use the `style()` method to define a virtual stylesheet for a component. Never put inline styles in a component's template. The template is only for displaying the component's content. Styles can be included with the component by means of the `style()` method. This uses a simple and straightforward object notation to define a virtual stylesheet scoped to the component. Because this is an object, singular properties do not require quotes. Hyphenated CSS properties must be either camel cased or quoted. All CSS property values must be quoted. If a CSS property has a pixel-based value, you can pass it as a plain number. It will get "px" added to it automatically. You can nest in the component's child selectors, as well as pseudo elements and hover states, similar to how SASS and LESS do.

Here's an example of how to create a virtual stylesheet:

```js
import {Chuki, html} from '../dist/chuki'
import fruits from '../data/fruits'

class FruitsList extends Chuki {
  constructor() {
    super()
    this.on('ul', 'click', this.announce, 'li')
  }

  render() {
    return (`
      <h2>3. Interactive List Example</h2>
      <h3>Choose a Fruit:</h3>
      <ul>
        ${fruits.map(fruit => `
          <li>${fruit}</li>
        `).join('')}
      </ul>
      <p id='result'></p>
    `)
  }

  // Create a virtual stylesheet:
  style() {
    // Return nested virtual stylesheet object:
    return ({
      h3: {
        margin: '0 0 10px 0',
      },
      ul: {
        padding: '0',
        margin: '0 0 2rem 0',
        border: 'solid 1px #ccc',
        width: '200px',

        li: {
          listStyle: 'none',
          margin: '0',
          padding: '5px 10px',
          borderBottom: 'solid 1px #ccc',
          cursor: 'pointer',

          ':last-of-type': {
            border: 'none'
          },

          ':hover': {
            backgroundColor: '#ccc'
          }
        }
      },
      strong: {
        color: '#007aff'
      }
    })
  }
}
```

Including a Component Inside Another Component
----------------------------------------------

You can nest components inside another one. You can define a component in a separate file, import it into another component and render it as a child of that component. The child component's events and methods will continue to work with the correct context.

Let's say we have three components, each in their own files. We want to include two components as children of the third. To do so we need to import them into the parent component, then let the component know about them by loading them with the `loadComponent` method. And finally we put tags with the imported components names in the parent component's markup.

***Child Component: HelloWorld.js***

```js
import {Chuki, html} from '../dist/chuki'

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
      }
    ])
  }

  // Define callbacks for events.
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
```

***Child Component: FruitsList.js***

```js
import {Chuki, html} from '../dist/chuki'
import fruits from '../data/fruits'

class FruitsList extends Chuki {
  constructor() {
    super()
  }

  // Define template for component:
  render() {
    // Define list item helper for list below:
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
    result.innerHTML = `You Selected: <strong>${choice.name}</strong>`
  }
}

export default new FruitsList();
```

***Import and Use Child Components in App***

Now we're going to import the above two files into another component, load them, put them in its markup. After importing `HelloWorld`, we load it in the component's constructor: `this.loadComponent(HelloWorld)`. After that we can use `<HelloWorld></HelloWorld>` in the component's template. Same thing for `FruitsList`. At render time, Chuki will convert the tag to lowercase to comply with the current custom element spec from the W3C.

```js
import {Chuki, html} from '../dist/chuki'
import HelloWorld from './HelloWorld'
import FruitsList from './FruitsList'

// Define app component:
class App extends Chuki {
  constructor() {
    super()
    this.loadComponent(HelloWorld)
    this.loadComponent(FruitsList)
  }

  // Compose view with sub-components:
  render() {
    return (html`
      <div>
        <HelloWorld></HelloWorld>
        <FruitsList></FruitsList>
      </div>
    `)
  }
}

export default new App()
```

