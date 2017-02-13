import uuid from '../uuid'

/**
 * Creates a CSS Stylesheet and appends it to the document head.
 *
 * @return CSSStyleSheet
 */
export default () => {
  if (document.head == null) {
    throw new Error("Can't add stylesheet before <head> is available. Make sure your document has a head element.")
  }
  const style = document.createElement("style")
  style.id = `chui_styles_${uuid()}`
  document.head.appendChild(style)
  return style.sheet
}