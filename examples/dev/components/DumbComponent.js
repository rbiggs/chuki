export default function DumbComponent () {
  return `
    <h2>1. Dumb Component Example</h2>
    <div class='dumb-component'>
      <h4>This is a Dumb Component!</h4>
      <p>Why dumb? It's a function that doesn't do anything but render some static HTML. It does this by returning a template literal. The "App" component imports it and and renders it. This is useful if you want to break out static HTML from your app and be reusable elsewhere.</p>
    </div>
    `
}
