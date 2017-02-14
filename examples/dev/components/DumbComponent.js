/**
 * This is not a true component. It's just a function that returns a template literal. However, even so you can import it and consume it in another component the same way as actual Chuki components because it is a function.
 */
export default function DumbComponent () {
  return `
    <h2>1. Dumb Component Example</h2>
    <div class='dumb-component'>
      <h4>This is a Dumb Component!</h4>
      <p>Why dumb? It's a function that doesn't do anything but render some static HTML.</p>
    </div>
    `
}
